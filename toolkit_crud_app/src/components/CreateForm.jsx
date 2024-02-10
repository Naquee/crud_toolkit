import {
  FormControl,
  FormLabel,
  Input,
  Box,
  HStack,
  Radio,
  RadioGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";

const CreateForm = () => {
  return (
    <Box width="50%" m="auto" mt="1rem">
      <form>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormLabel>Age</FormLabel>
          <Input type="number" />
          <FormLabel as="legend">Gender</FormLabel>

          <RadioGroup defaultValue="male" pb="2rem">
            <HStack spacing="24px">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </HStack>
          </RadioGroup>
          <Button width="100%" colorScheme="green">
            Submit
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default CreateForm;
