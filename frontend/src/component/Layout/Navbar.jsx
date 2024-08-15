import React, { useContext, useState } from "react";
import { Context } from "../../main";

function Navbar() {
  const [show, setShow] = useState(false);
  const [isAuthorized, setIsAuthorised, user] = useContext(Context);

  return <></>;
}

export default Navbar;
