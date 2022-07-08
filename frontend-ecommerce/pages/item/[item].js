import { Container, Text, Box, Image, Button, Flex } from "@chakra-ui/react";
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
    <Container maxW='container.xl' display='flex' gap='8'>
      <Box>
        <Image
          src={itemData.image.data.attributes.formats.medium.url}
          alt={slug}
          maxW='80%'
        />
      </Box>
      <Flex flexDir='column' justifyContent='center'>
        <Box w='500px'>
          <Text fontSize='4xl'>{title}</Text>
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
          <Text>$ {price}</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default ItemDetail;
