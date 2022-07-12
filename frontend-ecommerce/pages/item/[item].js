import {
  Container,
  Text,
  Box,
  Image,
  Button,
  Flex,
  transition,
} from "@chakra-ui/react";
import { useQuery } from "urql";
import { GET_ITEM_INFO } from "../../lib/query";
import { useRouter } from "next/router";

const ItemDetail = () => {
  const { query } = useRouter();

  // fectch item data from graphql api
  const [result] = useQuery({
    query: GET_ITEM_INFO,
    variables: { slug: query.item },
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  const itemData = data.inventories.data[0].attributes;
  const { title, available, description, price, slug } = itemData;

  return (
    <Container maxW='container.xl' display='flex' p='20'>
      <Box flex='1.5' display='flex' alignItems='center'>
        <Image
          _hover={{ transform: "scale(1.1)", transition: "ease 0.1s" }}
          src={itemData.image.data.attributes.formats.medium.url}
          alt={slug}
          maxW='90%'
        />
      </Box>
      <Flex p='1rem' flex='1' flexDir='column' justifyContent='center'>
        <Box>
          <Text fontSize='4xl' pt='4' pb='4'>
            {title}
          </Text>
          <Text>{description}</Text>
        </Box>
        <Box mt='5' display='flex' flexDir='row' justifyContent='space-between'>
          <Button
            _hover={{
              backgroundColor: "brand.500",
              color: "white",
              border: `3px solid`,
              borderColor: "brand.800",
            }}
            w='60%'
            disabled={!available}
          >
            {available ? "Add to cart" : "Not available"}
          </Button>
          <Text fontSize='2xl'>$ {price}</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default ItemDetail;
