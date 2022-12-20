import { Box } from "@chakra-ui/react"
import { HomeContent } from "../Components/HomeContent"
import { Navbar } from "../Components/Navbar/Navbar"
import { About } from "./About"
import { Contact } from "./Contact"
import { Project } from "./Project"
import { Skills } from "./Skills"

export const Home = () => {
    return(
        <Box name={"home"} boxSizing={"border-box"} h={"100vh"} w={"100%"} m={"auto"}>
            <Navbar/>
            <HomeContent />
            <About/>
            <Skills/>
            <Project/>
            <Contact/>
        </Box>
    )
}