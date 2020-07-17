import type { PackageType } from './interface/index';
import React, { useState, useCallback, useEffect } from 'react';
import ReactDom, { unstable_batchedUpdates as batch } from 'react-dom';

import Input from './components/input';
import List from './components/list';

import { MESSAGE } from './enum/message';

import './styles/reset.less';
import './styles/webview.less';

const vscode = acquireVsCodeApi();

const WebView = () => {
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [packageData, setPackageData] = useState<PackageType>({
    name: '',
    version: '',
    description: '',
    main: '',
    scripts: {},
    devDependencies: {},
    dependencies: {},
  });
  const [latestVersionData, setLatestVersion] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    vscode.postMessage({ command: MESSAGE.INIT_NPM });
  }, []);

  useEffect(() => {
    const listen = (event: any) => {
      const data = event.data;
      switch (data.message) {
        case MESSAGE.FINISH_QUERY_PACKAGE:
          setPackageData(data.payload);
          return;
        case MESSAGE.FINISH_CHECK_PACKAGES_LATEST:
          console.log('webview中获取到最新版本:', data.payload);
          batch(() => {
            setLatestVersion(data.payload);
            setLoading(false);
          });
          return;
        default:
          return;
      }
    };
    window.addEventListener('message', listen);

    return () => {
      window.removeEventListener('message', listen);
    };
  }, []);

  const onChangeSearchValue: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  /**
   * 检测依赖最新版本
   */
  const onCheckUpdate = useCallback(() => {
    setLoading(true);
    vscode.postMessage({ command: MESSAGE.CHECK_PACKAGES_LATEST });
  }, []);

  return (
    <div className="npm-manage">
      {loading && <div>LOADING~</div>}
      <div className="filter">
        <Input width={250} placeholder="Enter trem and press enter to search" onChange={onChangeSearchValue} />
        <button className="filter-btn">Search</button>
        <button className="filter-btn" onClick={onCheckUpdate}>
          Check Update
          <svg className="icon download-icon" aria-hidden="true">
            <use xlinkHref="#icon-download"></use>
          </svg>
        </button>
        <button>
          Install All
          <svg className="icon download-icon" aria-hidden="true">
            <use xlinkHref="#icon-download"></use>
          </svg>
        </button>
        {searchValue}
      </div>

      <div className="content">
        <div className="card">
          <div className="title">
            <span>Dependencies</span>
            <button>Add dependencies</button>
          </div>
          <div className="list">
            <List data={packageData.dependencies} latestVersionData={latestVersionData} />
          </div>
        </div>
        <div className="card">
          <div className="title">
            <span>Dependencies</span>
            <button>Add dependencies</button>
          </div>
          <div className="list">
            <List data={packageData.devDependencies} latestVersionData={latestVersionData} />
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDom.render(
  <div className="app">
    <WebView />
  </div>,
  document.getElementById('vscode-npm-manage')
);

if (module.hot) {
  module.hot.accept();
}
