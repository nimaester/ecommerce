import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Button,
  Box,
} from "@chakra-ui/react";
import { useGlobalContext } from "../../lib/storeContext";

const RemoveItemPopUp = ({ itemName }) => {
  const { cart, setCart, setCartSlider } = useGlobalContext();

  const removeItem = (item) => {
    const newCartItems = cart.filter((cartItem) => {
      return cartItem.slug === item ? false : true;
    });
    setCart(newCartItems);
    if (newCartItems.length === 0) setCartSlider(false);
  };

  const initRef = React.useRef();

  return (
    <Popover placement='bottom' initialFocusRef={initRef}>
      {({ onClose }) => (
        <Box>
          <PopoverTrigger>
            <Button backgroundColor='transparent' _hover={{ color: "red" }}>
              <IoIosCloseCircle size='20' />
            </Button>
          </PopoverTrigger>
          <PopoverContent w='160px'>
            <PopoverArrow />

            <PopoverHeader>Remove Item?</PopoverHeader>
            <PopoverBody display='flex' justifyContent='space-between'>
              <Button
                border='2px solid gray'
                onClick={() => removeItem(itemName)}
                _hover={{ backgroundColor: "red", color: "white" }}
                fontSize='0.8rem'
              >
                Yes
              </Button>
              <Button
                border='2px solid gray'
                _hover={{ backgroundColor: "blue", color: "white" }}
                onClick={onClose}
                ref={initRef}
                fontSize='0.8rem'
              >
                No
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Box>
      )}
    </Popover>
  );
};

export default RemoveItemPopUp;
