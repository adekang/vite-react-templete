import React, { FC } from "react";
import { useRoutes } from "react-router-dom";
import "./app.scss";

import routes from "@/router/route";

const App: FC = function () {
  const element = useRoutes(routes);

  return (
    <>
      <div>{element}</div>
    </>
  );
};

export default App;

// <SvgIcon className="icon" iconName="pose" />
