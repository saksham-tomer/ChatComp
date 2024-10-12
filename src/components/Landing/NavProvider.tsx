import React from "react";
import Navbar from "./Navbar";

function NavProvider({ children }: { children: React.JSX.Element }) {
  return <Navbar>{children}</Navbar>;
}

export default NavProvider;
