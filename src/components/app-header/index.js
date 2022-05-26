import React, { memo } from "react";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "../../common/local-data";
import { NavLink } from "react-router-dom";

function headerTab(item, index) {
  if (index < 3) {
    return <NavLink to={item.link}>{item.title}</NavLink>;
  } else {
    return (
      <a href={item.link} target="_blank">
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
        <HeaderRight>right</HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default AppHeader;
