import React, { useState } from "react";
import { Box, Text, Flex, Textarea, Button, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
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
          "service_bl63zyk",
          "template_1fnqpcr",
          message,
          "user_7q9goxLOYdywpMLHQQLe3"
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
    }
  };

  return (
    <Box backgroundColor='brand.800'>
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
          <Box flex='1'>
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
          </Box>
          <Box flex='1'>
            {sentMessage ? (
              <div>
                <h1>Message Sent</h1>
              </div>
            ) : (
              <FormControl isRequired>
                <FormLabel>Your Name: </FormLabel>
                <Input
                  variant='outline'
                  placeholder='Name'
                  spellCheck='false'
                  name='name'
                  onChange={handleChange}
                  value={message.name}
                />
                <FormLabel>Your Email: </FormLabel>
                <Input
                  variant='outline'
                  placeholder='Email'
                  spellCheck='false'
                  name='email'
                  onChange={handleChange}
                  value={message.email}
                />
                <FormLabel>Message: </FormLabel>
                <Textarea
                  variant='outline'
                  placeholder='Message'
                  spellCheck='false'
                  type='text'
                  name='message'
                  onChange={handleChange}
                  value={message.message}
                />
                <Button onClick={sendEmail}>Send</Button>
              </FormControl>
            )}
          </Box>
        </Flex>
      </DefaultContainer>
    </Box>
  );
};

export default ContactUs;
