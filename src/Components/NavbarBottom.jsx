import { Box, Button, Grid, HStack, Text, UnorderedList } from "@chakra-ui/react"
import { useState } from "react"
export const NavbarBottom = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <UnorderedList boxSizing={"border-box"} bg={"white"} m={"0"} p={ "5px 15px 10px 15px"} display={{ base: "block", md: "none", lg: "none" }} position={"sticky"} bottom={"0"}>

                <UnorderedList boxSizing={"border-box"} bg={"white"} m={"0"} p={"10px 0px"} display={{ base: toggle ? "block" : "none", md: "none", lg: "none" }} position={"sticky"} bottom={"0"}>

                    <Grid  onClick={() => setToggle(false)} templateColumns={"repeat(3, 1fr)"} gap={"10px 0px"}>

                        <Box className="BottomNavbar">
                            <Text cursor={"pointer"}>Home</Text>
                        </Box>
                        <Box className="BottomNavbar" m={"0px 10px"}>
                            <Text cursor={"pointer"}>About Me</Text>
                        </Box>
                        <Box className="BottomNavbar">
                            <Text cursor={"pointer"}>Skills</Text>
                        </Box>
                        <Box className="BottomNavbar">
                            <Text cursor={"pointer"}>Project</Text>
                        </Box>
                        <Box className="BottomNavbar" m={"0px 10px"}>
                            <Text cursor={"pointer"}>Contact</Text>
                        </Box>
                        <Box className="BottomNavbar">
                            <Text cursor={"pointer"}>Resume</Text>
                        </Box>

                    </Grid>

                </UnorderedList>

                <HStack justify={"space-between"} align={"center"}>
                    <button>Kashif Rezwi</button>
                    <button onClick={() => setToggle(!toggle)}>Menu</button>
                </HStack>

            </UnorderedList>

        </>
    )
}