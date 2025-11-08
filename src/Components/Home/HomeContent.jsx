import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  UnorderedList,
  useToast,
  VStack,
} from "@chakra-ui/react";
import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilAt,
  UilTelegramAlt,
} from "@iconscout/react-unicons";
import resume from "../Home/resume/Kashif-Rezwi-Resume.pdf";

export const HomeContent = () => {
  const toast = useToast();
  const copyEmail = () => {
    const email = "kashifrezwi850@gmail.com";
    navigator.clipboard.writeText(email);
    toast({
      title: "Copied kashifrezwi850@gmail.com",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  const debounce = (func, delay) => {
    let id;
    return () => {
      id && clearTimeout(id);

      id = setTimeout(() => {
        func();
      }, delay);
    };
  };

  return (
    <>
      <UnorderedList
        boxSizing={"border-box"}
        w={"100%"}
        h={{ base: "95vh", sm: "95vh", md: "100vh", lg: "100vh" }}
        m={"auto"}
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
      >
        <Grid
          maxW={"968px"}
          minWidth={"767px"}
          h={"100%"}
          templateColumns={"repeat(2,70% 30%)"}
          m={"auto"}
        >
          <Stack
            w={"100%"}
            justify={"center"}
            align={"center"}
            position={"relative"}
          >
            <VStack
              justify={"space-around"}
              position={"absolute"}
              left={"0"}
              pt={"20px"}
              h={"200px"}
            >
              <Link
                _hover={{ color: "cornflowerblue" }}
                href={"https://www.linkedin.com/in/kashif-rezwi/"}
                isExternal
              >
                <UilLinkedinAlt />
              </Link>
              <Link
                _hover={{ color: "cornflowerblue" }}
                onClick={debounce(copyEmail, 500)}
              >
                <UilAt />
              </Link>
              <Link
                _hover={{ color: "cornflowerblue" }}
                href={"https://github.com/Kashif-Rezwi"}
                isExternal
              >
                <UilGithubAlt />
              </Link>
            </VStack>

            <Box w={"90%"} align={"left"} pl={"20px"}>
              <Heading color={"#505050"} as={"h1"} size={"xl"}>
                Hi I'm Kashif Rezwi.
              </Heading>
              <Heading color={"cornflowerblue"} as={"h2"} size={"2xl"}>
                Full Stack Web Developer
              </Heading>
              <Text
                w={"100%"}
                textAlign={"justify"}
                m={"10px 0px 20px 0px"}
                fontSize={"14px"}
              >
                I'm a Full Stack Web Developer with 2+ years of experience crafting production-grade web applications and AI-powered solutions. I specialize in React.js, TypeScript, and Node.js, with a passion for building scalable architectures and delivering exceptional user experiences.
              </Text>
              <Link
                href={resume}
                download
                mt={"20px"}
                _hover={{ bg: "#4c87f1" }}
                _active={{ bg: "#033b9f" }}
                color={"#f8f7fd"}
                bg={"#3e75d7"}
                p={"10px 20px"}
                borderRadius={"5px"}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/13lXkje4gkeewEEel2amsvXtRmjPLmUEG/view?usp=sharing"
                  )
                }
              >
                Resume
              </Link>
            </Box>
          </Stack>

          <Box
            w={"100%"}
            display={"flex"}
            overflow={"hidden"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              m={"auto"}
              border={"5px solid cornflowerblue"}
              src={"/profile/ME.png"}
              alt={"kashif-Rezwi"}
              w={"85%"}
              borderRadius={"50%"}
            />
          </Box>
        </Grid>
      </UnorderedList>

      <UnorderedList
        boxSizing={"border-box"}
        w={"100%"}
        h={{ base: "95vh", sm: "95vh", md: "100vh", lg: "100vh" }}
        m={"0"}
        pt={"50px"}
        display={{ base: "block", sm: "block", md: "block", lg: "none" }}
        position={"relative"}
      >
        <Stack
          w={"95%"}
          h={"100%"}
          justify={"center"}
          align={"center"}
          m={"auto"}
        >
          <Stack w={"100%"} justify={"center"} align={"center"}>
            <Box w={"100%"} m={"auto"} position={"relative"}>
              <Stack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
                <VStack
                  justify={"space-around"}
                  position={"absolute"}
                  left={"0"}
                  h={"200px"}
                >
                  <Link
                    _hover={{ color: "cornflowerblue" }}
                    href={"https://www.linkedin.com/in/kashif-rezwi/"}
                    isExternal
                  >
                    <UilLinkedinAlt />
                  </Link>
                  <Link
                    _hover={{ color: "cornflowerblue" }}
                    onClick={debounce(copyEmail, 500)}
                  >
                    <UilAt />
                  </Link>
                  <Link
                    _hover={{ color: "cornflowerblue" }}
                    href={"https://github.com/Kashif-Rezwi"}
                    isExternal
                  >
                    <UilGithubAlt />
                  </Link>
                </VStack>

                <Box maxW={"300px"} m={"auto"}>
                  <Image
                    m={"auto"}
                    border={"5px solid cornflowerblue"}
                    src={"/profile/ME.png"}
                    alt={"kashif-Rezwi"}
                    w={"85%"}
                    borderRadius={"50%"}
                  />
                </Box>
              </Stack>
            </Box>

            <Box w={"100%"} p={"30px 0px"} align={"left"}>
              <Heading color={"#505050"} as={"h1"} size={"xl"}>
                Hi I'm Kashif Rezwi.
              </Heading>
              <Heading
                color={"cornflowerblue"}
                as={"h2"}
                size={{ base: "xl", sm: "xl", md: "2xl", lg: "2xl" }}
              >
                Full Stack Web Developer
              </Heading>
              <Text
                w={"90%"}
                textAlign={"justify"}
                m={"10px 0px 20px 0px"}
                fontSize={"14px"}
              >
                I'm a Full Stack Web Developer with 2+ years of experience crafting production-grade web applications and AI-powered solutions. I specialize in React.js, TypeScript, and Node.js, with a passion for building scalable architectures and delivering exceptional user experiences.
              </Text>

              <Link
                href={resume}
                download
                mt={"10px"}
                _hover={{ bg: "#4c87f1" }}
                _active={{ bg: "#033b9f" }}
                color={"#f8f7fd"}
                bg={"#3e75d7"}
                p={"10px 20px"}
                borderRadius={"5px"}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/13lXkje4gkeewEEel2amsvXtRmjPLmUEG/view?usp=sharing"
                  )
                }
              >
                Resume
              </Link>
            </Box>
          </Stack>
        </Stack>
      </UnorderedList>
    </>
  );
};
