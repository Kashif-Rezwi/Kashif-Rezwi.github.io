import {
  Box,
  Button,
  Grid,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  VStack,
  Link,
  Text,
  UnorderedList,
  HStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

import { HiDocumentText } from "react-icons/hi";
import resume from "../Components/Home/resume/Kashif-Rezwi-Resume.pdf";

export const Contact = () => {
  return (
    <Stack
      justify={"space-between"}
      pt={"70px"}
      align={"center"}
      h={"100vh"}
      w={"100%"}
      name={"contact"}
      position={"relative"}
    >
      <Box>
        <Heading mb={"30px"} as={"h1"}>
          Contact Me
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}
          maxW={"989px"}
          m={"auto"}
        >
          <UnorderedList
            w={"100%"}
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
            m={"auto"}
            pr={{ base: "0px", sm: "0px", md: "20px", lg: "50px" }}
          >
            <Box m={"auto"} w={"350px"}>
              <Link
                transition={"0.5s"}
                p={"15px 10px"}
                borderRadius={"8px"}
                m={"15px"}
                display={"flex"}
                flexDir={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                href="tel:9883909187"
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                  color: "cornflowerblue",
                  textDecoration: "none",
                }}
              >
                <MdPhone size="25px" />
                <Text ml={"5px"}>+91-9883909187</Text>
              </Link>

              <Link
                href="mailto:kashifrezwi850@gmail.com"
                transition={"0.5s"}
                p={"15px 10px"}
                borderRadius={"8px"}
                m={"15px"}
                display={"flex"}
                flexDir={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                  color: "cornflowerblue",
                  textDecoration: "none",
                }}
              >
                <MdEmail size="25px" />
                <Text ml={"5px"}>kashifrezwi850@gmail.com</Text>
              </Link>

              <Link
                href={"https://goo.gl/maps/KXPijYNRofykEkeP7"}
                isExternal
                transition={"0.5s"}
                p={"15px 10px"}
                borderRadius={"8px"}
                m={"15px"}
                display={"flex"}
                flexDir={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                  color: "cornflowerblue",
                  textDecoration: "none",
                }}
              >
                <MdLocationOn size="25px" />
                <Text ml={"5px"}>Kolkata, India</Text>
              </Link>

              <Link
                href={"https://www.linkedin.com/in/kashif-rezwi/"}
                isExternal
                transition={"0.5s"}
                p={"15px 10px"}
                borderRadius={"8px"}
                m={"15px"}
                display={"flex"}
                flexDir={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                  color: "cornflowerblue",
                  textDecoration: "none",
                }}
              >
                <FaLinkedin size="25px" />
                <Text ml={"5px"}>Kashif Rezwi</Text>
              </Link>

              <Link
                href={"https://github.com/Kashif-Rezwi"}
                isExternal
                transition={"0.5s"}
                p={"15px 10px"}
                borderRadius={"8px"}
                m={"15px"}
                display={"flex"}
                flexDir={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                  color: "cornflowerblue",
                  textDecoration: "none",
                }}
              >
                <FaGithub size="25px" />
                <Text ml={"5px"}>Kashif-Rezwi</Text>
              </Link>

              <Link
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/13lXkje4gkeewEEel2amsvXtRmjPLmUEG/view?usp=sharing"
                  )
                }
                href={resume}
                download
                transition={"0.5s"}
                p={"15px 10px"}
                borderRadius={"8px"}
                m={"15px"}
                display={"flex"}
                flexDir={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                  color: "cornflowerblue",
                  textDecoration: "none",
                }}
              >
                <FaFilePdf size="25px" />
                <Text ml={"5px"}>Download Resume</Text>
              </Link>
            </Box>
          </UnorderedList>

          <Stack pl={{ base: "0px", sm: "0px", md: "20px", lg: "50px" }}>
            <Stack
              m={"auto"}
              w={"350px"}
              p={"40px 20px"}
              borderRadius={"10px"}
              boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
              _hover={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
              transition={"0.5s"}
            >
              <FormControl mb={"10px"}>
                <FormLabel>Your Name</FormLabel>
                <Input type="text" />

                <FormLabel mt={"10px"}>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="We'll never share your email."
                />

                <FormLabel mt={"10px"}>Feedback</FormLabel>
                <Textarea
                  maxH={"200px"}
                  placeholder="Write your valueable feeback here..."
                />
              </FormControl>

              <Button
                _hover={{ bg: "#4c87f1" }}
                _active={{ bg: "#033b9f" }}
                color={"#f8f7fd"}
                bg={"#3e75d7"}
              >
                Send
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Box>

      <UnorderedList
        w={"100%"}
        display={{ base: "block", sm: "block", md: "none", lg: "none" }}
      >
        <Stack
          pt={"10px"}
          justify={"center"}
          align={"center"}
          mt={"20px"}
          bg={"cornflowerblue"}
          color={"white"}
          w={"100%"}
          p={"20px"}
          pb={"70px"}
        >
          <Link
            transition={"0.5s"}
            display={"flex"}
            flexDir={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            _hover={{ textDecoration: "none" }}
            href="mailto:kashifrezwi850@gmail.com"
          >
            <MdEmail size="25px" />
            <Text ml={"5px"}>kashifrezwi850@gmail.com</Text>
          </Link>

          <HStack
            pt={"10px"}
            w={"100%"}
            justify={"space-evenly"}
            align={"center"}
          >
            <Link
              transition={"0.5s"}
              display={"flex"}
              flexDir={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              href="tel:9883909187"
              _hover={{ textDecoration: "none" }}
            >
              <MdPhone size="25px" />
              <Text ml={"5px"}>+91-9883909187</Text>
            </Link>

            <Link
              transition={"0.5s"}
              display={"flex"}
              flexDir={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              _hover={{ textDecoration: "none" }}
              href={"https://goo.gl/maps/KXPijYNRofykEkeP7"}
              isExternal
            >
              <MdLocationOn size="25px" />
              <Text ml={"5px"}>Kolkata, India</Text>
            </Link>
          </HStack>

          <HStack
            pt={"10px"}
            h={"35px"}
            justify={"space-evenly"}
            align={"center"}
            w={"100%"}
          >
            <Stack justify={"center"} align={"center"}>
              <Link href={"https://github.com/Kashif-Rezwi"} isExternal>
                <Text
                  cursor={"pointer"}
                  textAlign={"center"}
                  _hover={{ fontSize: "30px" }}
                  fontSize={"25px"}
                  transition={"0.3s"}
                >
                  <FaGithub />
                </Text>
              </Link>
            </Stack>
            <Stack justify={"center"} align={"center"}>
              <Link
                href={"https://www.linkedin.com/in/kashif-rezwi/"}
                isExternal
              >
                <Text
                  cursor={"pointer"}
                  textAlign={"center"}
                  _hover={{ fontSize: "30px" }}
                  fontSize={"25px"}
                  transition={"0.3s"}
                >
                  <FaLinkedin />
                </Text>
              </Link>
            </Stack>
            <Stack justify={"center"} align={"center"}>
              <Link href={resume} download>
                <Text
                  cursor={"pointer"}
                  textAlign={"center"}
                  _hover={{ fontSize: "30px" }}
                  fontSize={"25px"}
                  transition={"0.3s"}
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/13lXkje4gkeewEEel2amsvXtRmjPLmUEG/view?usp=sharing"
                    )
                  }
                >
                  <FaFilePdf />
                </Text>
              </Link>
            </Stack>
          </HStack>
        </Stack>
      </UnorderedList>

      <UnorderedList
        w={"100%"}
        display={{ base: "none", sm: "none", md: "block", lg: "block" }}
      >
        <Stack
          justify={"center"}
          align={"center"}
          bg={"cornflowerblue"}
          color={"white"}
          w={"100%"}
          p={"5px"}
        >
          <Text fontSize={"12px"}>
            Kashif-Rezwi.github.io <span>&#169;</span>
          </Text>
        </Stack>
      </UnorderedList>
    </Stack>
  );
};
