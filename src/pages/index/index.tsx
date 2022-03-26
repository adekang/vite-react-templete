import React, { FC } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Index: FC = function () {
  const navigate = useNavigate();

  return (
    <div className={"indexWrapper"}>
      <nav className={"navWrapper"}>
        <ul>
          <li>
            <NavLink to="recommend">主页</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Index;
