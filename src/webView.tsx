import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<div>APP</div>, document.getElementById('#vscode-npm-manage'));

if (module.hot) {
  module.hot.accept();
}
