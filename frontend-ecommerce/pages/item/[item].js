import { Container, Text, Box, Image, Button, Flex } from "@chakra-ui/react";
import { useQuery } from "urql";
import { GET_ITEM_INFO } from "../../lib/query";
import { useRouter } from "next/router";
import { MdKeyboardBackspace } from "react-icons/md";
import { ButtonDefault } from "../../elements/Buttons";
import { ItemNameText } from "../../elements/Text";

const ItemDetail = () => {
  const { query } = useRouter();
  const router = useRouter();

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
    <Box>
      <Container
        maxW='container.xl'
        display={{
          sm: "block",
          md: "flex",
          lg: "flex",
          xl: "flex",
          base: "block",
        }}
        p={{
          sm: "4rem 2rem",
          md: "5rem",
          lg: "5rem",
          xl: "5rem",
          base: "4rem 2rem",
        }}
      >
        <Box
          flex='1.5'
          display='flex'
          alignItems='center'
          p={{
            sm: "2rem 0rem",
            base: "2rem 0rem",
          }}
        >
          <Image
            _hover={{ transform: "scale(1.1)", transition: "ease 0.1s" }}
            src={itemData.image.data.attributes.formats.medium.url}
            alt={slug}
            maxW='90%'
            minW='90%'
          />
        </Box>
        <Flex p='1rem' flex='1' flexDir='column' justifyContent='center'>
          <Box>
            <ItemNameText pt='4' pb='4'>
              {title}
            </ItemNameText>
            <Text pt='4' pb='4'>
              {description}
            </Text>
          </Box>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            p='2rem 0rem'
          >
            <ButtonDefault onClick={() => router.back()}>
              {available ? "Add to cart" : "Not available"}
            </ButtonDefault>
            <Text fontSize='2xl'>$ {price}</Text>
          </Box>
        </Flex>
      </Container>
      <Box pb='10' display='flex' justifyContent='center'>
        <Button
          backgroundColor='transparent'
          p='8'
          w='90%'
          cursor='pointer'
          onClick={() => router.back()}
          _hover={{ outline: "none", color: "button.primary" }}
          _active={{ outline: "none", transform: "scale(1.05)" }}
        >
          <MdKeyboardBackspace size='30' /> Back to previous page
        </Button>
      </Box>
    </Box>
  );
};

export default ItemDetail;
