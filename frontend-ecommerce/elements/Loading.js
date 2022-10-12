import { Flex, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex justifyContent='center' alignItems='center' h='90vh'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.100'
        color='brand.900'
        size='xl'
      />
    </Flex>
  );
};
