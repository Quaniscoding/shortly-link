import React from "react";
import Header from "../pages/Header";
import Bottom from "../pages/Bottom";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Bottom />
    </div>
  );
}
