import { Box, Grid, Heading, Image, Stack, VStack } from "@chakra-ui/react"
import GitHubCalendar from "react-github-calendar"

export const Github = () => {
    return (
        <VStack justify={"center"} align={"center"} name={"github"} h={"100vh"} >

            <Heading mb={"30px"} as={"h1"}>Github Calender & Stats</Heading>

            <VStack w={"100%"}>
                <Box m={"auto"} p={"20px"}>
                    <GitHubCalendar username="kashif-rezwi" />
                </Box>

                <Grid templateColumns={{ base: "repeat(1,1fr)", sm: "repeat(1,1fr)", md: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} w={"100%"}>

                    <Box maxW={"380px"} m={"20px auto"}>
                        <Image
                            src="https://github-readme-stats.vercel.app/api?username=kashif-rezwi"
                            alt="github stats"
                        />
                    </Box>

                    <Box maxW={"380px"} m={"20px auto"}>
                        <Image
                            src="https://github-readme-streak-stats.herokuapp.com/?user=kashif-rezwi"
                            alt=""
                        />
                    </Box>

                </Grid>

            </VStack>

        </VStack>
    )
}