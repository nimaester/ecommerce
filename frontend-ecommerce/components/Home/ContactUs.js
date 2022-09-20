import React, { useState } from "react";
import { Box, Text, Flex, Textarea, Button, Input } from "@chakra-ui/react";
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
    e.preventDefault();

    emailjs
      .send(
        "service_bl63zyk",
        "template_1fnqpcr",
        message,
        "user_7q9goxLOYdywpMLHQQLe3"
      )
      .then(
        () => {
          console.log("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSentMessage(true);
  };

  return (
    <DefaultContainer>
      <Text>Contact Us</Text>
      <Flex>
        <Box>
          <Text mb='3rem'>How can we help?</Text>
          <Text lineHeight='1.6'>
            If you have any questions about our company, products or
            suggestions, feel free to send us an email regarding your concerns.
            We strive to make a positive impact on each of our customers and we
            would like to help you regarding your concerns. We look forward to
            hearing from you.
          </Text>
        </Box>
        <Box>
          {sentMessage ? (
            <div>
              <h1>Message Sent</h1>
            </div>
          ) : (
            <Box>
              <Input
                variant='outline'
                placeholder='Name'
                spellCheck='false'
                isRequired
                name='name'
                onChange={handleChange}
                value={message.name}
              />

              <Input
                variant='outline'
                placeholder='Email'
                spellCheck='false'
                isRequired
                name='email'
                onChange={handleChange}
                value={message.email}
              />

              <Textarea
                isRequired
                variant='outline'
                placeholder='Message'
                spellCheck='false'
                type='text'
                name='message'
                onChange={handleChange}
                value={message.message}
              />

              <Button>Send</Button>
            </Box>
          )}
        </Box>
      </Flex>
    </DefaultContainer>
  );
};

export default ContactUs;
