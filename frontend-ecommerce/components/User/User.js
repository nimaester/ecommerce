import React from "react";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";
import { NavLinkText } from "../../elements/Text";

const User = () => {
  const router = useRouter();

  return (
    <NavLinkText>
      <FaRegUser onClick={() => router.push("/api/auth/login")} size='21' />
      <Text pt='10px' fontSize='0.8rem'>
        Login
      </Text>
    </NavLinkText>
  );
};

export default User;
