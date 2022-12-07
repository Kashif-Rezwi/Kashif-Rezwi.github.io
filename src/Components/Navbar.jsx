import { HStack, Spacer, Text, UnorderedList } from "@chakra-ui/react"
export const Navbar = () => {
  return (

    <UnorderedList boxSizing={"border-box"} w={"100%"} bg={"white"} m={"0"} p={{base:"0", md:"15px 0px", lg:"15px 0px"}} display={{ base: "none", md: "block", lg: "block" }} position={"sticky"} top={"0"}>

      <HStack m={"auto"} w={"100%"}>
        <Text fontSize={"14px"} cursor={"pointer"} align={"center"} fontWeight={"bolder"}>Kashif Rezwi</Text>

        <Spacer/>

        <HStack w={{ base: "none", md: "65%", lg: "50%" }} justify={"space-around"} fontSize={"14px"}>
          <Text className="TopNavbar">Home</Text>
          <Text className="TopNavbar">About Me</Text>
          <Text className="TopNavbar">Skills</Text>
          <Text className="TopNavbar">Project</Text>
          <Text className="TopNavbar">Contact</Text>
          <Text className="TopNavbar">Resume</Text>
        </HStack>

      </HStack>

    </UnorderedList>
  )
}