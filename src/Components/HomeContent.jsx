import { Box, Button, Grid, Heading, HStack, Image, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react"

export const HomeContent = () => {
  return (
    <>
      <UnorderedList boxSizing={"border-box"} w={"100%"} h={"90%"} bg={"white"} m={"0"} display={{ base: "none", md: "block", lg: "block" }}>

        <Grid w={"100%"} h={"100%"} templateColumns={"repeat(2,1fr)"}>

          <Box h={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>

          <VStack justify={"center"} align={"center"} mr={"20px"}>
              <Text>Git</Text>
              <Text>Lin</Text>
              <Text>Ins</Text>
            </VStack>

            <Box w={"400px"} align={"left"}>
              <Heading as={"h1"}>Kashif Rezwi🖐</Heading>
              <Text m={"10px 0px"} fontSize={"14px"}>Full Stack Web Developer</Text>
              <Text m={"10px 0px"} fontSize={"14px"}>I'm a creative frontend designer based on react development. I'm very passionate and dedicated to my work</Text>
              <Button mt={"10px"} colorScheme={"blackAlpha"}>Resume</Button>
            </Box>
          </Box>

          <Box h={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Image src={"https://avatars.githubusercontent.com/u/34582831?v=4"} alt={"kashif-Rezwi"} w={"200px"} borderRadius={"50%"} />
          </Box>

        </Grid>

      </UnorderedList>

      <UnorderedList boxSizing={"border-box"} w={"100%"} h={"90%"} bg={"white"} m={"0"} pt={"50px"} display={{ base: "block", md: "none", lg: "none" }} position={"relative"}>

        <Box w={"100%"}>

          <VStack ml={"15px"} position={"absolute"} left={"0"} top={"100px"} align={"left"}>
            <Text>Git</Text>
            <Text>Lin</Text>
            <Text>Ins</Text>
          </VStack>

          <Box h={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Image src={"https://avatars.githubusercontent.com/u/34582831?v=4"} alt={"kashif-Rezwi"} w={"200px"} borderRadius={"50%"} />
          </Box>

        </Box>

        <Box m={"50px 0px 0px 15px"} w={{base:"90%",sm:"80%", md:"400px", lg:"400px"}} align={"left"}>
          <Heading as={"h1"}>Kashif Rezwi🖐</Heading>
          <Text m={"10px 0px"} fontSize={"14px"}>Full Stack Web Developer</Text>
          <Text m={"10px 0px"} fontSize={"14px"}>I'm a creative frontend designer based on react development. I'm very passionate and dedicated to my work</Text>
          <Button mt={"10px"} colorScheme={"blackAlpha"}>Resume</Button>
        </Box>

      </UnorderedList>

    </>
  )
}