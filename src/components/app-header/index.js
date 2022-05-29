import React, { memo } from "react";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "../../common/local-data";
import { NavLink } from "react-router-dom";

function headerTab(item, index) {
  if (index < 3) {
    return (
      <NavLink to={item.link}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
    );
  } else {
    return (
      <a href={item.link} target="_blank" rel="noreferrer">
        {item.title}
      </a>
    );
  }
}

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <div className="log sprite_01"></div>
          {headerLinks.map((item, index) => {
            return (
              <div key={index} className="tabWrap">
                {headerTab(item, index)}
              </div>
            );
          })}
        </HeaderLeft>
        <HeaderRight>
          <div className="inputWrap">
            <div className="content">
              <input type="text" placeholder="音乐/视频/电台/用户" />
            </div>
          </div>
          <div className="creater">
            <button>创作者中心</button>
          </div>
          <div className="login">
            <button>登录</button>
          </div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default AppHeader;
