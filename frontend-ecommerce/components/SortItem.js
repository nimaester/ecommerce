import React from "react";
import { Box, Select } from "@chakra-ui/react";

const SortItem = () => {
  return (
    <Box p='2rem 0rem' display='flex' justifyContent='end'>
      <Select placeholder='Sort by' w='180px'>
        <option value='philo'>Price: High-Low</option>
        <option value='plohi'>Price: Low-High</option>
      </Select>
    </Box>
  );
};

export default SortItem;
