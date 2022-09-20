import React from "react";
import {
  Box,
  Container,
  Grid,
  Flex,
  Image,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import { DefaultContainer } from "../../elements/Container";
import { FooterHeaderText } from "../../elements/Text";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const faq = ["Questions", "Return Center", "Return Policy", "Terms of Service"];
const about = ["About us", "Our Mission", " Disclaimer", "Privacy Policy"];

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
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "repeat(3, 1fr)",
            base: "1fr",
          }}
          rowGap='2rem'
          w='100%'
        >
          <Flex
            alignItems={{ sm: "center", md: "start", base: "center" }}
            flexDir='column'
          >
            <FooterHeaderText>FOLLOW US</FooterHeaderText>
            <Flex
              gap={{
                sm: "6rem",
                md: "4rem",
                lg: "4rem",
                base: "4rem",
              }}
            >
              <BsFacebook color='white' size='30' />
              <BsTwitter color='white' size='30' />
              <BsInstagram color='white' size='30' />
            </Flex>
            <Text
              pt={{
                sm: "2rem",
                md: "18px",
                base: "2rem",
              }}
              color='white'
            >
              Contact Us :
            </Text>
            <Text color='white'>marciasboutique@gmail.com</Text>
          </Flex>

          <Flex
            flexDir='column'
            alignItems='center'
            p={{
              sm: "3rem",
              md: "0rem",
              base: "3rem",
            }}
          >
            <Image
              src='https://mbpics7528.s3.us-west-1.amazonaws.com/MBLogo.png'
              alt='black_white_logo'
              mb='10px'
              w='130px'
            />
          </Flex>

          <Flex
            justifyContent={{
              sm: "space-evenly",
              md: "start",
              lg: "end",
              base: "space-evenly",
            }}
            w='100%'
          >
            <Box pr='2rem'>
              <FooterHeaderText>Faq</FooterHeaderText>
              <List>
                {faq.map((entry, i) => (
                  <ListItem
                    key={i}
                    color='white'
                    _hover={{ cursor: "pointer" }}
                    whiteSpace='nowrap'
                  >
                    {entry}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <FooterHeaderText>About</FooterHeaderText>
              <List>
                {about.map((entry, i) => (
                  <ListItem
                    key={i}
                    color='white'
                    _hover={{ cursor: "pointer" }}
                    whiteSpace='nowrap'
                  >
                    {entry}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Flex>
        </Grid>
      </DefaultContainer>
    </Box>
  );
};

export default Footer;
