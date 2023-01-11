import { Stack, Box, Link, Grid, Image, Text } from "@chakra-ui/react"
import { FaGithub, FaStar } from "react-icons/fa"
import { SiNetlify } from "react-icons/si"
import { TbPlayerPlay } from "react-icons/tb"
import { BsStack } from "react-icons/bs"

export const ProjectInfo = ({template, name, description, github, netlify, video}) => {
    return (
        <Grid  m={{base:"5px", sm:"35px auto", md:"35px auto", lg:"35px auto"}}  borderRadius={"10px"} 
        templateColumns={"repeat(2, 90% 10%)"} minW={"350px"} maxW={"450px"} pl={"5px"} 
        boxShadow={"rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"} transition={"0.5s"}
         _hover={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }}>

            <Stack flexDir={"column"} justify={"center"} align={"center"} 
            p={{base:"5px 0px 5px 5px", sm:"10px 0px 10px 10px", md: "15px 0px 15px 15px", lg:"15px 0px 15px 15px"}}>

                <Box cursor={"pointer"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"} _hover={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }} mt={"5px"} borderRadius={"5px"} overflow={"hidden"} transition={"0.5s"}>
                    <Image src={template} w={"100%"} alt={name} />
                </Box>


                <Box>
                    <Text textAlign={"justify"} fontSize={{base:"13px", sm:"14px", md:"15px", lg:"15px"}}> <span>&#10173;</span> {description}</Text>
                </Box>

            </Stack>

            <Grid templateRows={"repeat(5, 1fr)"}>
                <Stack justify={"center"} align={"center"}>
                    <Link href={github} isExternal><Text cursor={"pointer"} textAlign={"center"} _hover={{ fontSize: "30px" }} fontSize={"20px"} transition={"0.3s"}><FaGithub /></Text></Link>
                </Stack>
                <Stack justify={"center"} align={"center"}>
                    <Link href={netlify} isExternal><Text cursor={"pointer"} textAlign={"center"} _hover={{ fontSize: "30px" }} fontSize={"20px"} transition={"0.3s"}><SiNetlify /></Text></Link>
                </Stack>
                <Stack justify={"center"} align={"center"}>
                    <Link href={video} isExternal><Text cursor={"pointer"} textAlign={"center"} _hover={{ fontSize: "30px" }} fontSize={"20px"} transition={"0.3s"}><TbPlayerPlay /></Text></Link>
                </Stack>
                <Stack justify={"center"} align={"center"}>
                    <Text cursor={"pointer"} textAlign={"center"} _hover={{ fontSize: "30px" }} fontSize={"20px"} transition={"0.3s"}><FaStar /></Text>
                </Stack>
                <Stack justify={"center"} align={"center"}>
                    <Text cursor={"pointer"} textAlign={"center"} _hover={{ fontSize: "30px" }} fontSize={"20px"} transition={"0.3s"}><BsStack /></Text>
                </Stack>
            </Grid>

        </Grid>
    )
}