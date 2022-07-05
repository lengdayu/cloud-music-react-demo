import React, { memo, useEffect } from "react";

import { Wrapper } from "./style";
import { dicoverMenu } from "@/common/local-data.js";

import request from "@/services/request";
import { NavLink, Outlet } from "react-router-dom";

const Discover = memo(() => {
  useEffect(() => {
    async function getBanner() {
      let res = await request({
        url: "/banner",
      });
      console.log(res);
    }
    getBanner();
  }, []);

  return (
    <div>
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
      <Outlet />
    </div>
  );
});

export default Discover;
