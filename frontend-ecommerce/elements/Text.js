import React from "react";
import { Text, Flex, forwardRef } from "@chakra-ui/react";

export const ItemNameText = ({ ...children }) => {
  return (
    <Text
      {...children}
      fontSize={{
        sm: "2xl",
        md: "3xl",
        lg: "3xl",
        xl: "3xl",
        base: "2xl",
      }}
      pt='4'
      pb='4'
      fontWeight='bold'
    ></Text>
  );
};

export const HeaderText = ({ ...children }) => {
  return (
    <Text
      {...children}
      fontSize={{
        sm: "4xl",
        md: "5xl",
        lg: "5xl",
        xl: "5xl",
        base: "3xl",
      }}
      pb='6rem'
      textAlign='center'
    ></Text>
  );
};

export const NavLinkText = forwardRef((props, ref) => (
  <Flex
    {...props}
    _hover={{ color: "brand.700", cursor: "pointer" }}
    ref={ref}
    fontSize='1rem'
    color='brand.200'
    flexDir='column'
    justifyContent='center'
    alignItems='center'
  ></Flex>
));

export const FooterHeaderText = ({ ...children }) => {
  return (
    <Text
      {...children}
      textTransform='uppercase'
      fontWeight='bold'
      fontSize='1rem'
      color='brand.800'
      pb='1rem'
    ></Text>
  );
};

// export const NavBrandText = ({ ...children }) => {
//   return (
//     <Text
//       fontSize={{
//         sm: "3xl",
//         md: "3xl",
//         lg: "3xl",
//         xl: "3xl",
//         base: "3xl",
//       }}
//       {...children}
//       _hover={{
//         cursor: "pointer",
//       }}
//       bgClip='text'
//       fontFamily='cursive'
//       fontWeight='bold'
//       color='#2B3636'
//     ></Text>
//   );
// };
