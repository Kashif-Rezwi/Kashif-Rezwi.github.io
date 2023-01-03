import { Box, Grid, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"

const icons = [
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
    { image: "/icons/react.png", name: "react" },
]

export const Skills = () => {
    return (
        <Stack justify={"center"} align={"center"} name={"skills"} h={{ base: "95vh", sm: "95vh", md: "100vh", lg: "100vh" }}>

            <Grid m={"auto"} maxW={"989px"} templateColumns={{ base: "repeat(5, 1fr)", sm: "repeat(6, 1fr)", md: "repeat(7, 1fr)", lg: "repeat(8, 1fr)" }}>
                {

                    icons.map((icon) => (
                        <Stack
                            w={{ base: "50px", sm: "60px", md: "80px", lg: "100px" }}
                            h={{ base: "50px", sm: "60px", md: "80px", lg: "100px" }}
                            position={"relative"} transition={"0.4s"}>

                            <Box m={"auto"} cursor={"pointer"} transition={"0.4s"}
                                w={"80%"} _hover={{ w: "90%" }} p={"5px"}
                                borderRadius={"50%"} border={"1px solid black"}>

                                <Image w={"100%"} src={icon.image} alt={icon.name}></Image>

                            </Box>

                            {/* <Text w={"100%"} textAlign={"center"} position={"absolute"} bottom={"0px"}>react</Text> */}

                        </Stack>))
                }

            </Grid>

        </Stack>
    )
}