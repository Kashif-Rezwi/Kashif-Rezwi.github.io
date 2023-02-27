import { Box, Stack, Text } from "@chakra-ui/react";

export const Icons = ({ icon: Icon, name }) => {
  return (
    <Stack
      justify={"center"}
      align={"center"}
      m={"auto"}
      w={{ base: "55px", sm: "70px", md: "75px", lg: "75px" }}
      h={{ base: "55px", sm: "70px", md: "75px", lg: "75px" }}
      // border={"1px solid black"} borderRadius={"50%"}
      transition={"0.5s"}
    >
      <Text fontSize={{ base: "25px", sm: "35px", md: "40px", lg: "40px" }}>
        {Icon}
      </Text>
      {/* <Text>{name}</Text> */}
    </Stack>
  );
};
