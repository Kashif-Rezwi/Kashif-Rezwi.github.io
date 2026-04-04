import { Heading, VStack } from "@chakra-ui/react";
import { TechStackTab } from "../Components/Skills/TechStackTab";

export const Skills = () => {
  return (
    <VStack
      justify={"center"}
      align={"center"}
      w={"100%"}
      name={"skills"}
      minH={{ base: "auto", md: "100vh" }}
      py={"24px"}
    >
      <Heading mb={"16px"} as={"h1"} fontSize={{ base: "xl", md: "2xl" }}>
        Tech Stack and Tools
      </Heading>

      <TechStackTab />
    </VStack>
  );
};
