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
    <DefaultContainer backgroundColor='brand.900'>
      <Flex justifyContent='space-between'>
        <Box flex='1'>
          <FooterHeaderText>FAQ</FooterHeaderText>
          <List>
            <ListItem
              lineHeight='7'
              color='white'
              _hover={{ cursor: "pointer" }}
            >
              About us
            </ListItem>
            <ListItem
              lineHeight='7'
              color='white'
              _hover={{ cursor: "pointer" }}
            >
              Return Center
            </ListItem>
            <ListItem
              lineHeight='7'
              color='white'
              _hover={{ cursor: "pointer" }}
            >
              Return Policy
            </ListItem>
            <ListItem
              lineHeight='7'
              color='white'
              _hover={{ cursor: "pointer" }}
            >
              Terms of Service
            </ListItem>
          </List>
        </Box>
        <Box flex='1'>
          <FooterHeaderText>FOLLOW US</FooterHeaderText>

          <Flex gap='2rem'>
            <BsFacebook color='white' size='30' />
            <BsTwitter color='white' size='30' />
            <BsInstagram color='white' size='30' />
          </Flex>
        </Box>

        <Box flex='2'></Box>
      </Flex>
    </DefaultContainer>
  );
};

export default Footer;
