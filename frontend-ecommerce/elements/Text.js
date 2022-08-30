import React from "react";
import { Text, forwardRef } from "@chakra-ui/react";

export const ItemNameText = ({ ...children }) => {
  return (
    <Text
      {...children}
      fontSize={{
        sm: "4xl",
        md: "5xl",
        lg: "5xl",
        xl: "5xl",
        base: "4xl",
      }}
      pt='4'
      pb='4'
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
    _hover={{ transform: "scale(1.05)", color: "black", cursor: "pointer" }}
    ref={ref}
    fontSize='1.2rem'
    color='brand.200'
    display='flex'
  ></Text>
));

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
