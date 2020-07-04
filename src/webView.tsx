import React from 'react';
import ReactDom from 'react-dom';

import './styles/webview.less';

ReactDom.render(<div className="app">APP FUCK haah2</div>, document.getElementById('vscode-npm-manage'));

if (module.hot) {
  module.hot.accept();
}
