import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const Navs = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>{Navs}</nav>;
}

export default NavBar;