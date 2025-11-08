import { Box, Grid, Text, UnorderedList, Heading, Stack } from "@chakra-ui/react"

export const About = () => {
    return (
        <>

        <Box w={"100%"} h={{base:"95vh", sm:"95vh", md:"100vh", lg:"100vh"}} name={"about"}>

            <UnorderedList  w={"100%"} m={"0"} h={"100%"} display={{ base: "none", sm: "none", md: "block", lg: "block" }}>

                <Stack h={"100%"} justify={"center"} align={"center"}>

                    <Heading as={"h1"}>About Me</Heading>

                    <Grid templateColumns={"repeat(2, 1fr)"}>

                        <Stack w={"100%"} justify={"center"} align={"flex-end"}>

                            <Text color={"cornflowerblue"} w={"90%"} fontSize={{base:"none", sm:"none", md:"30px", lg:"32px"}} fontWeight={"bolder"} textAlign={"right"} p={"0px 5px"}>
                                Hello there👋 I'm a Aspiring Full Stack Web Developer. Please have a look around to know more about me.
                            </Text>

                        </Stack>

                        <Stack w={"100%"} justify={"center"} align={"flex-start"}>

                            <Text w={"90%"} fontSize={"17px"} fontWeight={"500"} textAlign={"left"} p={"0px 5px"}>
                                A Full Stack Web Developer with 2+ years of experience delivering production-grade web applications and complex business logic. Proven track record with CRM platforms, workflow automation, and scalable architectures. Expert in the MERN stack, with a strong grasp of software design patterns, clean code principles, and production deployment.
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
                            Hello there👋 I'm a Aspiring Full Stack Web Developer. Please have a look around to know more about me.
                            </Text>

                        </Stack>

                        <Stack w={"100%"} justify={"flex-start"} align={"center"}>

                            <Text w={"100%"} fontSize={"20px"} fontWeight={"500"} textAlign={"justify"} p={"0px 10px"}>
                                A dedicated full-stack web developer with 2000+ hours of coding, strong in design and integration with intuitive problem-solving skills. Proficient in JavaScript, React, Express, Node, and MongoDB. Passionate about implementing and launching new projects. Looking to start my career as an entry-level full-stack web developer with a reputed firm driven by technology.
                            </Text>

                        </Stack>

                    </Grid>

                </Stack>

            </UnorderedList>

            </Box>

        </>
    )
}