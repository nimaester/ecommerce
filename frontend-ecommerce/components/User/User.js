import React from "react";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";

const User = () => {
  const route = useRouter();

  return (
    <>
      <FaRegUser onClick={() => route.push("/api/auth/login")} size='22' />
    </>
  );
};

export default User;
