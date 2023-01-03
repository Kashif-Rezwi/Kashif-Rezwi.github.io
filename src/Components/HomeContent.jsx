import { Box, Button, Grid, Heading, HStack, Image, Link, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react"
import { UilLinkedinAlt, UilGithubAlt, UilBasketball, UilArrow } from '@iconscout/react-unicons'

export const HomeContent = () => {
  return (
    <>
      <UnorderedList boxSizing={"border-box"} w={"100%"} h={{base:"95vh", sm:"95vh", md:"100vh", lg:"100vh"}} bg={"#f8f7fd"} m={"auto"} display={{ base: "none", sm: "none", md: "none", lg: "block" }} border={"1px solid red"}>

        <Grid maxW={"968px"} minWidth={"767px"} h={"100%"} templateColumns={"repeat(2,70% 30%)"} m={"auto"}>

          <Stack w={"100%"} justify={"center"} align={"center"} position={"relative"}>

            <VStack justify={"space-around"} position={"absolute"} left={"0"} h={"200px"}>
              <Link _hover={{color:"cornflowerblue"}} to={""}><UilLinkedinAlt /></Link>
              <Link _hover={{color:"cornflowerblue"}} to={""}><UilBasketball /></Link>
              <Link _hover={{color:"cornflowerblue"}} to={""}><UilGithubAlt /></Link>
            </VStack>

            <Box w={"80%"} align={"left"} pl={"20px"}>
              <Heading color={"#505050"} as={"h1"} size={"2xl"}>Hi I'm Kashif Rezwi.</Heading>
              <Heading color={"cornflowerblue"} as={"h2"} size={"xl"}>Full Stack Web Developer</Heading>
              <Text w={"80%"} textAlign={"justify"} m={"10px 0px"} fontSize={"14px"}>I'm a creative frontend designer based on react development. I'm very passionate and dedicated to my work</Text>
              {/* <Link href={"Kashif-Rezwi-Resume.pdf"} attributes-list download> Resume */}
              <Button mt={"10px"} _hover={{ bg: "#4c87f1" }} _active={{ bg: "#033b9f" }} color={"#f8f7fd"} bg={"#3e75d7"}>Resume</Button>
              {/* </Link> */}
            </Box>
          </Stack>

          <Box w={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image m={"auto"} border={"5px solid cornflowerblue"} src={"https://avatars.githubusercontent.com/u/34582831?v=4"} alt={"kashif-Rezwi"} w={"85%"} borderRadius={"50%"} />
          </Box>

        </Grid>

      </UnorderedList>

      <UnorderedList boxSizing={"border-box"} w={"100%"} h={{base:"95vh", sm:"95vh", md:"100vh", lg:"100vh"}} bg={"#f8f7fd"} m={"0"} pt={"50px"} display={{ base: "block", sm: "block", md: "block", lg: "none" }} position={"relative"}>

        <Stack w={"95%"} h={"100%"} justify={"center"} align={"center"} m={"auto"}>

          <Stack w={"100%"} justify={"center"} align={"center"}>

            <Box w={"100%"} m={"auto"} position={"relative"}>

              <Stack w={"100%"} h={"100%"} justify={"center"} align={"center"} >

                <VStack justify={"space-around"} position={"absolute"} left={"0"} h={"200px"}>
                  <Link _hover={{color:"cornflowerblue"}} to={""}><UilLinkedinAlt /></Link>
                  <Link _hover={{color:"cornflowerblue"}} to={""}><UilBasketball /></Link>
                  <Link _hover={{color:"cornflowerblue"}} to={""}><UilGithubAlt /></Link>
                </VStack>

                <Box maxW={"300px"} m={"auto"}>
                  <Image m={"auto"} border={"5px solid cornflowerblue"} src={"https://avatars.githubusercontent.com/u/34582831?v=4"} alt={"kashif-Rezwi"} w={"85%"} borderRadius={"50%"} />
                </Box>

              </Stack>

            </Box>

            <Box w={"100%"} p={"30px 0px"} align={"left"}>
              <Heading color={"#505050"} as={"h1"} size={"2xl"}>Hi I'm Kashif Rezwi.</Heading>
              <Heading color={"cornflowerblue"} as={"h2"} size={"xl"}>Full Stack Web Developer</Heading>
              <Text w={"90%"} textAlign={"justify"} m={"10px 0px"} fontSize={"14px"}>I'm a creative frontend designer based on react development. I'm very passionate and dedicated to my work</Text>
              {/* <Link href={"Kashif-Rezwi-Resume.pdf"} attributes-list download> Resume */}
              <Button mt={"0px"} _hover={{ bg: "#4c87f1" }} _active={{ bg: "#033b9f" }} color={"#f8f7fd"} bg={"#3e75d7"}>Resume</Button>
              {/* </Link> */}
            </Box>

          </Stack>
        </Stack>

      </UnorderedList>

    </>
  )
}