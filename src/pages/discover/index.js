import React, { memo } from "react";

import { Wrapper } from "./style";
import { dicoverMenu } from "@/common/local-data.js";
import { NavLink } from "react-router-dom";

const Discover = memo(() => {
  return (
    <Wrapper>
      <div className="list">
        {dicoverMenu.map((item) => {
          return (
            <div key={item.link} className="list-item">
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
});

export default Discover;
