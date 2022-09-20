import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Textarea,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  useToast,
  FormControl,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { DefaultContainer } from "../../elements/Container";

const ContactUs = () => {
  const [sentMessage, setSentMessage] = useState(false);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toast = useToast();
  const id = "test-toast";

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    if (message.name && message.email && message.message) {
      e.preventDefault();

      emailjs
        .send(
          `${process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE}`,
          `${process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE}`,
          message,
          `${process.env.NEXT_PUBLIC_EMAIL_JS_USER}`
        )
        .then((error) => {
          console.log(error.text);
        });
      setMessage({
        name: "",
        email: "",
        message: "",
      });
      setSentMessage(true);
    } else {
      if (!toast.isActive(id)) {
        toast({
          id,
          title: "Please fill in all the required fields",
          status: "error",
          duration: 2000,
        });
      }
    }
  };

  return (
    <Box backgroundColor='brand.800' pb='5rem'>
      <DefaultContainer>
        <Text fontSize='3xl' mb='3rem'>
          Contact Us
        </Text>
        <Flex
          flexDir={{ sm: "column", md: "row", base: "column" }}
          gap={{
            sm: "3rem",
            md: "5rem",
            base: "3rem",
          }}
        >
          <Flex flexDir='column' justifyContent='center' flex='1'>
            <Text mb='1rem' fontWeight='medium'>
              How can we help?
            </Text>
            <Text lineHeight='1.9'>
              If you have any questions about our company, products or
              suggestions, feel free to send us an email regarding your
              concerns. We strive to make a positive impact on each of our
              customers and we would like to help you regarding your concerns.
              We look forward to hearing from you.
            </Text>
          </Flex>
          <Box flex='1'>
            {sentMessage ? (
              <div>
                <h1>Message Sent</h1>
              </div>
            ) : (
              <FormControl isRequired>
                <InputGroup pb='1rem'>
                  <InputLeftAddon w='100px' children='Name: ' />
                  <Input
                    variant='outline'
                    placeholder='your name...'
                    name='name'
                    onChange={handleChange}
                    value={message.name}
                  />
                </InputGroup>

                <InputGroup pb='1rem'>
                  <InputLeftAddon w='100px' children='Email: ' />
                  <Input
                    variant='outline'
                    placeholder='your email...'
                    name='email'
                    onChange={handleChange}
                    value={message.email}
                  />
                </InputGroup>

                <Textarea
                  variant='outline'
                  placeholder='your message...'
                  name='message'
                  onChange={handleChange}
                  value={message.message}
                />
                <Button mt='2rem' onClick={sendEmail}>
                  Send
                </Button>
              </FormControl>
            )}
          </Box>
        </Flex>
      </DefaultContainer>
    </Box>
  );
};

export default ContactUs;
