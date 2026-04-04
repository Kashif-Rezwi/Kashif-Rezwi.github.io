import React from "react";
import {
  VStack,
  Heading,
  Box,
} from "@chakra-ui/react";
import TechStackGrid from "./TechStackGrid";
import { techStackData } from "./techStackData";

const CATEGORIES = [
  { label: "Languages", key: "languages" },
  { label: "Frontend", key: "frontend" },
  { label: "Backend", key: "backend" },
  { label: "Databases & Storage", key: "Databases & Caching" },
];

export const TechStackTab = () => {
  return (
    <VStack spacing={6} w="100%" px={4} maxW="968px" m="auto" align="stretch">
      {CATEGORIES.map((cat, index) => {
        const isEven = index % 2 === 0;
        const filteredIcons = techStackData.filter((el) => el.category === cat.key);
        
        if (filteredIcons.length === 0) return null;

        return (
          <Box 
            key={cat.key} 
            w="100%" 
            display="flex" 
            flexDirection="column" 
            alignItems={isEven ? "flex-start" : "flex-end"}
          >
            <Heading
              as="h3"
              fontSize={{ base: "xs", md: "sm" }}
              mb={2}
              textAlign={isEven ? "left" : "right"}
              color="gray.600"
              textTransform="uppercase"
              letterSpacing="wider"
              w="fit-content"
            >
              {cat.label}
            </Heading>
            <TechStackGrid
              icons={filteredIcons}
              justify={isEven ? "flex-start" : "flex-end"}
            />
          </Box>
        );
      })}
    </VStack>
  );
};
