import { Box } from "@chakra-ui/react"
import { HomeContent } from "../Components/Home/HomeContent"
import { Navbar } from "../Components/Navbar/Navbar"
import { About } from "./About"
import { Contact } from "./Contact"
import { Github } from "./Github"
import { Project } from "./Project"
import { Skills } from "./Skills"

export const Home = () => {
    return(
        <Box bg={"#f8f7fd"} name={"home"} boxSizing={"border-box"} w={"100%"} m={"auto"}>
            <Navbar/>
            <HomeContent/>
            <About/>
            <Skills/>
            <Project/>
            <Github/>
            <Contact/>
        </Box>
    )
}