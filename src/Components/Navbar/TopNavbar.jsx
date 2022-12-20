import { HStack, Spacer, Text, UnorderedList } from "@chakra-ui/react"
export const TopNavbar = () => {
  return (

    <UnorderedList boxSizing={"border-box"} w={"100%"} bg={"white"} m={"0"} p={"15px 0px"} display={{ base: "none", sm:"block", md: "block", lg: "block" }} position={"sticky"} top={"0"} border={"1px solid red"}>

      <HStack m={"auto"} w={{ base: "95%", sm:"95%", md: "90%", lg: "90%" }} border={"1px solid red"} >
        <Text fontSize={{ base: "14px", sm:"15px", md: "16px", lg: "18px" }} cursor={"pointer"} align={"left"} fontWeight={"bolder"}>Rezwi</Text>

        <Spacer/>

        <HStack w={{ base: "none", sm:"80%", md: "70%", lg: "65%" }} justify={"space-between"} fontSize={{ base: "14px", sm:"15px", md: "16px", lg: "18px" }} border={"1px solid green"}>
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