import React from "react";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";
import { NavLinkText } from "../../elements/Text";

const User = () => {
  const route = useRouter();

  return (
    <NavLinkText>
      <FaRegUser onClick={() => route.push("/api/auth/login")} size='22' />
    </NavLinkText>
  );
};

export default User;
