import { Box, Grid, Text, UnorderedList, Heading, Stack } from "@chakra-ui/react"

export const About = () => {
    return (
        <>

            <Box w={"100%"} h={{ base: "95vh", sm: "95vh", md: "100vh", lg: "100vh" }} name={"about"}>

                <UnorderedList w={"100%"} m={"0"} h={"100%"} display={{ base: "none", sm: "none", md: "block", lg: "block" }}>

                    <Stack h={"100%"} justify={"center"} align={"center"}>

                        <Heading as={"h1"}>About Me</Heading>

                        <Grid templateColumns={"repeat(2, 1fr)"}>

                            <Stack w={"100%"} justify={"center"} align={"flex-end"}>

                                <Text color={"cornflowerblue"} w={"85%"} fontSize={{ base: "none", sm: "none", md: "28px", lg: "31px" }} fontWeight={"bolder"} textAlign={"right"} p={"0px 5px"}>
                                    Hey there! 👋 I’m a Full Stack Engineer. Take a look around to explore my work in full-stack development, AI agents, and product engineering.
                                </Text>

                            </Stack>

                            <Stack w={"100%"} justify={"center"} align={"flex-start"}>

                                <Text w={"85%"} fontSize={"17px"} fontWeight={"500"} textAlign={"left"} p={"0px 5px"}>
                                    I’m a Full Stack Engineer with 2+ years of experience in fast-paced startup environments, building production-grade web applications and AI-powered products. I’ve worked on CRM platforms, workflow automation systems, and scalable architectures, with a strong focus on system design, clean code, and maintainable software. I enjoy collaborating with cross-functional teams to deliver reliable, high-impact product features.
                                </Text>

                            </Stack>

                        </Grid>

                    </Stack>

                </UnorderedList>

                <UnorderedList w={"100%"} m={"0"} h={"100%"} display={{ base: "block", sm: "block", md: "none", lg: "none" }}>

                    <Stack h={"100%"} justify={"center"} align={"center"}>

                        <Heading as={"h1"}>About Me</Heading>

                        <Grid templateColumns={"repeat(1, 1fr)"}>

                            <Stack w={"100%"} justify={"flex-end"} align={"center"}>

                                <Text color={"cornflowerblue"} w={"100%"} fontSize={"30px"} fontWeight={"bolder"} textAlign={"justify"} p={"0px 10px"}>
                                    Hey there! 👋 I’m a Full Stack Engineer. Take a look around to explore my work in full-stack development, AI agents, and product engineering.
                                </Text>

                            </Stack>

                            <Stack w={"100%"} justify={"flex-start"} align={"center"}>

                                <Text w={"100%"} fontSize={"20px"} fontWeight={"500"} textAlign={"justify"} p={"0px 10px"}>
                                    I’m a Full Stack Engineer with 2+ years of experience in fast-paced startup environments, building production-grade web applications and AI-powered products. I’ve worked on CRM platforms, workflow automation systems, and scalable architectures, with a strong focus on system design, clean code, and maintainable software. I enjoy collaborating with cross-functional teams to deliver reliable, high-impact product features.
                                </Text>

                            </Stack>

                        </Grid>

                    </Stack>

                </UnorderedList>

            </Box>

        </>
    )
}