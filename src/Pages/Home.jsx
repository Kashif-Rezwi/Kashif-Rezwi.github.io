import { Box } from "@chakra-ui/react"
import { HomeContent } from "../Components/HomeContent"
import { Navbar } from "../Components/Navbar"
import { NavbarBottom } from "../Components/NavbarBottom"

export const Home = () => {
    return(
        <Box boxSizing={"border-box"} h={"100vh"} w={{base:"100%", md:"90%", lg:"90%"}} m={"auto"} p={{base:"0", md:"0px 10px", lg:"0px 20px"}}>
            <Navbar />
            <HomeContent />
            <NavbarBottom />
        </Box>
    )
}