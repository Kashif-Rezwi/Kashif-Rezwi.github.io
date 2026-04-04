import { Text, VStack } from "@chakra-ui/react";

export const Icons = ({ icon, name }) => {
  return (
    <VStack
      spacing={1}
      justify={"center"}
      align={"center"}
      w={{ base: "62px", sm: "72px", md: "80px" }}
      h={{ base: "62px", sm: "72px", md: "80px" }}
      border={"1px solid"}
      borderColor={"gray.200"}
      borderRadius={"8px"}
      bg={"#f5f5f5"}
      transition={"background 0.2s, border-color 0.2s"}
      cursor={"default"}
      flexShrink={0}
      _hover={{
        bg: "gray.50",
        borderColor: "cornflowerblue",
      }}
    >
      <Text
        fontSize={{ base: "20px", sm: "24px", md: "28px" }}
        lineHeight={"1"}
      >
        {icon}
      </Text>
      <Text
        fontSize={{ base: "9px", sm: "10px", md: "11px" }}
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
