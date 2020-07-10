import React, { useState, useCallback } from 'react';
import ReactDom from 'react-dom';

import Input from './components/input';
import List from './components/list';

import './styles/reset.less';
import './styles/webview.less';

const WebView = () => {
  const [searchValue, setSearchValue] = useState('');
  const onChangeSearchValue: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);
  return (
    <div className="npm-manage">
      <div className="filter">
        <Input width={250} placeholder="Enter trem and press enter to search" onChange={onChangeSearchValue} />
        <button className="filter-btn">Search</button>
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
            <List />
          </div>
        </div>
        <div className="card">
          <div className="title">
            <span>Dependencies</span>
            <button>Add dependencies</button>
          </div>
          <div className="list">
            <List />
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
