import React, { FC } from 'react';

import './list.less';

const List: FC<any> = () => {
  return (
    <div className="npm-manage-list">
      <ul>
        <li>
          <span className="name">element-ui</span>
          <span className="version">4.1.4</span>
        </li>
      </ul>
    </div>
  );
};

export default List;
