import { Flex, Box, Input, Button } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex width="100%" justifyContent="space-between" p="1rem">
      <Flex gap="1rem">
        <Box>RTK</Box>
        <Box>
          <a href="#">Create Post</a>
        </Box>
        <Box>
          {" "}
          <a href="#">All Post</a>
        </Box>
      </Flex>
      <Flex>
        <Input placeholder="Search..." />
        <Button colorScheme="teal">Search</Button>
      </Flex>
      {/* <Box></Box> */}
    </Flex>
  );
};

export default Navbar;
