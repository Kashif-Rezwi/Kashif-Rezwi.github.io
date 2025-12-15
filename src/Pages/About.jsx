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
                                Hey there! 👋 I'm a Software Engineer. Please have a look around to know more about my professional journey.
                            </Text>

                        </Stack>

                        <Stack w={"100%"} justify={"center"} align={"flex-start"}>

                            <Text w={"90%"} fontSize={"17px"} fontWeight={"500"} textAlign={"left"} p={"0px 5px"}>
                                With 2+ years of experience in a fast-paced startup environment, delivering production-grade web applications and AI-powered solutions. Proven track record with CRM platforms, workflow automation, and scalable architectures. Proficient in MERN stack, with a strong understanding of software design patterns, clean code principles, and production deployment. Experienced in collaborating with cross-functional teams to deliver key product features within project timelines.
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
                            Hey there! 👋 I'm a Software Engineer. Please have a look around to know more about my professional journey.
                            </Text>

                        </Stack>

                        <Stack w={"100%"} justify={"flex-start"} align={"center"}>

                            <Text w={"100%"} fontSize={"20px"} fontWeight={"500"} textAlign={"justify"} p={"0px 10px"}>
                                With 2+ years of experience in a fast-paced startup environment, delivering production-grade web applications and AI-powered solutions. Proven track record with CRM platforms, workflow automation, and scalable architectures. Proficient in MERN stack, with a strong understanding of software design patterns, clean code principles, and production deployment. Experienced in collaborating with cross-functional teams to deliver key product features within project timelines.
                            </Text>

                        </Stack>

                    </Grid>

                </Stack>

            </UnorderedList>

            </Box>

        </>
    )
}