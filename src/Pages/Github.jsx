import { Box, Grid, Heading, Image, Stack, VStack } from "@chakra-ui/react"
import GitHubCalendar from "react-github-calendar"

export const Github = () => {
    return (
        <VStack justify={"center"} align={"center"} name={"github"} h={"100vh"} >

            <Heading mb={"30px"} as={"h1"}>Github Calender & Stats</Heading>

            <VStack w={"100%"} gap={"40px"}>
                <Box m={"auto"} p={"20px"} bg={"#f5f5f5"}>
                    <GitHubCalendar username="kashif-rezwi" />
                </Box>

                {/* github info: source: http://githubreadmestatsfast.vercel.app/ */}
                <Grid justifyItems="center" alignItems={"center"} gap={"20px"} templateColumns={{ base: "repeat(1,1fr)", sm: "repeat(1,1fr)", md: "repeat(1,1fr)", lg: "repeat(3,1fr)" }} w={"70%"}>

                    <Box maxW={"315px"} bg={"#f5f5f5"}>
                        <Image
                            src="https://github-readme-stats-fast.vercel.app/api?username=Kashif-Rezwi&show_icons=true"
                            alt="github stats"
                        />
                    </Box>

                    <Box maxW={"240px"} bg={"#f5f5f5"}>
                        <Image
                            src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=Kashif-Rezwi&layout=compact"
                            alt="github top langs"
                        />
                    </Box>

                    <Box maxW={"380px"} bg={"#f5f5f5"} border={"1px solid #f3ebebd0"} borderRadius={"4px"} overflow={"hidden"}>
                        <Image
                            src="https://github-readme-stats-fast.vercel.app/api/streak?username=Kashif-Rezwi"
                            alt="github stats"
                        />
                    </Box>

                </Grid>

            </VStack>

        </VStack>
    )
}