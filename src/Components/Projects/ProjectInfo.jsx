import {
  Stack,
  Box,
  Link,
  Grid,
  Image,
  Text,
  VStack,
  Button,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { TbPlayerPlay } from "react-icons/tb";
import { BsStack } from "react-icons/bs";

export const ProjectInfo = ({
  template,
  name,
  description,
  github,
  netlify,
  video,
  techstack,
}) => (
  <Stack
    m={{ base: "10px auto", sm: "10px auto", md: "10px", lg: "10px" }}
    borderRadius={"10px"}
    minW={"350px"}
    maxW={"450px"}
    pl={"5px"}
    boxShadow={
      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
    }
    _hover={{
      boxShadow:
        "rgba(100, 149, 237, 0.7) 0px 10px 36px 0px, rgba(100, 149, 237, 0.3) 0px 0px 0px 1px",
    }}
    p={{ base: "10px", sm: "10px", md: "15px", lg: "15px" }}
    transition={"0.5s"}
  >
    <Box>
      <Heading textAlign={"left"} as={"h3"} size={"md"}>
        {" "}
        <span>&#10173;</span> {name}
      </Heading>
    </Box>

    <Stack justify={"center"} align={"center"}>
      <Box
        cursor={"pointer"}
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        }
        mt={"5px"}
        borderRadius={"5px"}
        overflow={"hidden"}
        transition={"0.5s"}
      >
        <Image src={template} w={"100%"} alt={name} />
      </Box>
    </Stack>

    <HStack justify={"space-between"} align={"center"} m={"10px 0 0 0"}>
      <Link _hover={{ textDecor: "none" }} href={github} isExternal>
        <Button leftIcon={<FaGithub />} fontSize={"14px"} h={"30px"}>
          Code
        </Button>
      </Link>

      <Link _hover={{ textDecor: "none" }} href={netlify} isExternal>
        <Button leftIcon={<SiNetlify />} fontSize={"14px"} h={"30px"}>
          Live
        </Button>
      </Link>

      <Link _hover={{ textDecor: "none" }} href={video[1]} isExternal>
        <Button
          disabled={!video[0]}
          leftIcon={<TbPlayerPlay />}
          fontSize={"14px"}
          h={"30px"}
        >
          Video
        </Button>
      </Link>
    </HStack>

    <Stack w={"100%"}>
      <Box>
        <Text
          textAlign={"justify"}
          fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "15px" }}
        >
          {" "}
          <span>&#10173;</span> {description}
        </Text>
      </Box>

      <Box
        w={"100%"}
        flexWrap={"wrap"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Button
          w={"150px"}
          mr={"5px"}
          h={"30px"}
          fontSize={"14px"}
          leftIcon={<BsStack />}
        >
          Techstack
        </Button>
        {techstack?.map((el, i) => (
          <Text m={"5px 10px"} cursor={"pointer"} key={i} fontSize={"20px"}>
            {el}
          </Text>
        ))}
      </Box>
    </Stack>
  </Stack>
);
