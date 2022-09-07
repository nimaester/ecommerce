import React from "react";
import { Text, forwardRef } from "@chakra-ui/react";

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
      pb='6'
      textAlign='center'
    ></Text>
  );
};

export const NavLinkText = forwardRef((props, ref) => (
  <Text
    {...props}
    _hover={{ transform: "scale(1.05)", color: "brand.800", cursor: "pointer" }}
    ref={ref}
    textTransform='uppercase'
    fontSize='1rem'
    fontWeight='bold'
    color='brand.200'
    display='flex'
  ></Text>
));

export const FooterHeaderText = ({ ...children }) => {
  return (
    <Text
      {...children}
      textTransform='uppercase'
      fontSize='1.2rem'
      fontWeight='bold'
      color='brand.800'
      pb='2rem'
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
