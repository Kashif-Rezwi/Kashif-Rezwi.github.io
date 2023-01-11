import { Stack, Heading, UnorderedList, Grid, Box, Image } from "@chakra-ui/react"
import { ProjectStackTab } from "../Components/Projects/ProjectStackTab"
import GitHubCalendar from "react-github-calendar";

export const Project = () => {
    return (
        <Stack justify={"flex-start"} pt={"70px"} align={"center"} w={"100%"} name={"projects"} h={{ base: "95vh", sm: "95vh", md: "100vh", lg: "100vh" }}>
            {/* pt={{base: "200px", sm: "100px", md: "70px", lg: "70px"}} */}

            <Heading mb={"30px"} as={"h1"}>Projects</Heading>

            <ProjectStackTab />

            
            <UnorderedList display={{ base: "block", sm: "block", md: "block", lg: "none" }}></UnorderedList>

        </Stack>
    )
}