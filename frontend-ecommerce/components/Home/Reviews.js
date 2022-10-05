import React from "react";
import { Box, Grid, Flex, Image, Text } from "@chakra-ui/react";
import { DefaultContainer } from "../../elements/Container";

const reviewsData = [
  {
    id: 0,
    img: "https://7528userurl.s3.us-west-1.amazonaws.com/userImage102.jpg",
    name: "Joanne L.",
    review: `I was skeptical at first buying from Marcia's Boutique but I am glad I did.
    Communication was also on point.`,
  },

  {
    id: 1,
    img: "https://7528userurl.s3.us-west-1.amazonaws.com/userImage104.jpg",
    name: "Andre I.",
    review: `I can't say enough good things about the quality of this company. 
      Highly, highly recommend using them!`,
  },

  {
    id: 2,
    img: "https://7528userurl.s3.us-west-1.amazonaws.com/userImage39.jpg",
    name: "Brian S.",
    review: `The entire thing process was so easy and the price was very reasonable. I am buying again in the future`,
  },
];

const Reviews = () => {
  return (
    <Box>
      <DefaultContainer>
        <Text fontSize='3xl' mb='2rem'>
          Customer Reviews
        </Text>
        <Grid
          gridTemplateColumns={{
            sm: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap='3rem'
          p={{
            sm: "0rem 1rem 0rem 1rem",
            base: "0rem 1rem 0rem 1rem",
          }}
        >
          {reviewsData.map((review) => (
            <Box
              key={review.id}
              flex='1'
              borderRadius='10px'
              border='1px solid rgba(40, 146, 170, 0.4)'
              p='2rem'
              boxShadow='rgba(40, 146, 170, 0.4) 5px 5px, rgba(40, 146, 170, 0.3) 10px 10px, rgba(40, 146, 170, 0.2) 15px 15px, rgba(40, 146, 170, 0.1) 20px 20px, rgba(40, 146, 170, 0.05) 25px 25px'
            >
              <Flex alignItems='center' justifyContent='center'>
                <Image
                  borderRadius='100px'
                  src={review.img}
                  alt={review.name}
                />
              </Flex>

              <Text fontWeight='bold' p='1rem 0rem'>
                {review.name}
              </Text>
              <Text lineHeight='1.9'>{review.review}</Text>
            </Box>
          ))}
        </Grid>
      </DefaultContainer>
    </Box>
  );
};

export default Reviews;
