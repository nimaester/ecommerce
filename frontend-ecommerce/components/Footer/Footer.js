import React, { useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import { DefaultContainer } from "../../elements/Container";
import { FooterHeaderText } from "../../elements/Text";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <Box
      backgroundColor='brand.900'
      position='sticky'
      top='0'
      zIndex='5'
      color='#2B3636'
    >
      <DefaultContainer>
        <Flex justifyContent='space-between'>
          <Box>
            <FooterHeaderText>FOLLOW US</FooterHeaderText>
            <Flex gap='2rem'>
              <BsFacebook color='white' size='30' />
              <BsTwitter color='white' size='30' />
              <BsInstagram color='white' size='30' />
            </Flex>
            <Text color='white' pt='18px'>
              Contact Us :
            </Text>
            <Text color='white'>marciasboutique@gmail.com</Text>
          </Box>

          <Box>
            <Image
              h='65px'
              src='https://mbpics7528.s3.us-west-1.amazonaws.com/logo.png'
              alt='black_white_logo'
              mb='23px'
            />

            <Text pl='10px' color='white'>
              Marcia's Boutique 2022 &#174;
            </Text>
            <Text pl='10px' color='white'>
              162 York Pl Hayward, CA 94544
            </Text>
          </Box>

          <Box>
            <FooterHeaderText>FAQ</FooterHeaderText>
            <List>
              <ListItem color='white' _hover={{ cursor: "pointer" }}>
                Questions
              </ListItem>
              <ListItem color='white' _hover={{ cursor: "pointer" }}>
                Return Center
              </ListItem>
              <ListItem color='white' _hover={{ cursor: "pointer" }}>
                Return Policy
              </ListItem>
              <ListItem color='white' _hover={{ cursor: "pointer" }}>
                Terms of Service
              </ListItem>
            </List>
          </Box>

          <Box>
            <FooterHeaderText>About</FooterHeaderText>
            <List>
              <ListItem color='white' _hover={{ cursor: "pointer" }}>
                About us
              </ListItem>
              <ListItem color='white' _hover={{ cursor: "pointer" }}>
                Our Mission
              </ListItem>
              <ListItem color='white' _hover={{ cursor: "pointer" }}>
                Disclaimer
              </ListItem>
              <ListItem color='white' _hover={{ cursor: "pointer" }}>
                Privacy Policy
              </ListItem>
            </List>
          </Box>
        </Flex>
      </DefaultContainer>
    </Box>
  );
};

export default Footer;
