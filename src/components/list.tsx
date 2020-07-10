import React, { FC } from 'react';

import './list.less';

const List: FC<any> = () => {
  return (
    <div className="npm-manage-list">
      <ul>
        <li>
          <span className="name">element-ui</span>
          <div>
            <span className="version">2.32</span>
            <div className="operation">
              <div className="version-select">
                <select>
                  <option>2.32</option>
                  <option>2.33</option>
                  <option>2.34</option>
                </select>
                <div className="select-arrow"></div>
              </div>

              <svg className="icon delete-icon" aria-hidden="true">
                <use xlinkHref="#icon-delete"></use>
              </svg>
              <svg className="icon download-icon" aria-hidden="true">
                <use xlinkHref="#icon-download"></use>
              </svg>
            </div>
          </div>
        </li>
        <li>
          <span className="name">element-ui</span>
          <span className="version">4.1.4</span>
        </li>
        <li>
          <span className="name">element-ui</span>
          <span className="version">4.1.4</span>
        </li>
        <li>
          <span className="name">element-ui</span>
          <span className="version">4.1.4</span>
        </li>
      </ul>
    </div>
  );
};

export default List;
