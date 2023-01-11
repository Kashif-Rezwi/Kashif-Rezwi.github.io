import { Box, Stack, Text } from "@chakra-ui/react"

export const Icons = ({ icon: Icon, name }) => {
    return ( 

        <Stack justify={"center"} align={"center"} m={"auto"}
            w={{ base: "80px", sm: "80px", md: "85px", lg: "90px" }}
            h={{ base: "80px", sm: "80px", md: "85px", lg: "90px" }}
            // border={"1px solid black"} borderRadius={"50%"} 
            transition={"0.5s"}>

                <Text fontSize={{ base: "45px", sm: "45px", md: "50px", lg: "50px" }}>{Icon}</Text>
                {/* <Text>{name}</Text> */}

        </Stack>

    )
}