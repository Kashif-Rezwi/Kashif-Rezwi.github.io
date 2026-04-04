import React from "react";
import { Flex } from "@chakra-ui/react";
import { Icons } from "./Icons";

const TechStackGrid = ({ icons }) => {
  return (
    <Flex
      flexWrap={"wrap"}
      gap={4}
      justifyContent={{ base: "center", md: "start" }}
    >
      {icons.map((el, i) => (
        <Icons key={i} {...el} />
      ))}
    </Flex>
  );
};

export default React.memo(TechStackGrid);
