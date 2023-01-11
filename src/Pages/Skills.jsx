import {Heading, Box, Stack} from "@chakra-ui/react"
import { TechStackTab } from "../Components/Skills/TechStackTab"

export const Skills = () => {
    return (
        <Stack justify={"center"} align={"center"} w={"100%"} name={"skills"} h={{ base: "95vh", sm: "95vh", md: "100vh", lg: "100vh" }}>

            <Heading m={"20px auto"} as={"h1"}>Techstack Skills</Heading>

           <TechStackTab />

        </Stack>
    )
}