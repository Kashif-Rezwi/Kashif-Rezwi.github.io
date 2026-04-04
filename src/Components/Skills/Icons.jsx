import { Text, VStack } from "@chakra-ui/react";

export const Icons = ({ icon, name }) => {
  return (
    <VStack
      spacing={1}
      justify={"center"}
      align={"center"}
      w={{ base: "70px", sm: "80px", md: "95px" }}
      h={{ base: "70px", sm: "80px", md: "95px" }}
      border={"1.5px solid"}
      borderColor={"gray.100"}
      borderRadius={"8px"}
      bg={"white"}
      boxShadow={"sm"}
      transition={"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"}
      cursor={"default"}
      flexShrink={0}
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "md",
        borderColor: "cornflowerblue",
        bg: "blue.50",
      }}
      gap={2}
    >
      <Text
        fontSize={{ base: "22px", sm: "26px", md: "30px" }}
        lineHeight={"1"}
      >
        {icon}
      </Text>
      <Text
        fontSize={{ base: "8px", sm: "10px", md: "11px" }}
        fontWeight={"500"}
        textAlign={"center"}
        color={"gray.700"}
        whiteSpace={"nowrap"}
      >
        {name}
      </Text>
    </VStack>
  );
};
