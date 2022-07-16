import React from "react";
import { Box, Select } from "@chakra-ui/react";

const SortItem = () => {
  return (
    <Box p='2.5rem 0rem' display='flex' justifyContent='right'>
      <Select placeholder='Sort by' w='150px'>
        <option value='philo'>Price: Hi-Low</option>
        <option value='plohi'>Price: Low-Hi</option>
      </Select>
    </Box>
  );
};

export default SortItem;
