import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FaReact, FaNpm, FaGithub, FaGitAlt } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReactrouter,
  SiVercel,
  SiNetlify,
  SiRedux,
  SiJest,
  SiCypress,
  SiJavascript,
  SiChakraui,
  SiMaterialui,
  SiNextdotjs,
  SiVisualstudiocode,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiSocketdotio,
} from "react-icons/si";
import { Icons } from "./Icons";
import { RxCodesandboxLogo } from "react-icons/rx";
import { HiOutlineServerStack } from "react-icons/hi2";
import { BsStack } from "react-icons/bs";
import { RiToolsFill } from "react-icons/ri";

const reactIcons = [
  { icon: <SiHtml5 />, name: "Html", category: "frontend" },
  { icon: <SiCss3 />, name: "Css", category: "frontend" },
  { icon: <SiJavascript />, name: "Javascript", category: "frontend" },
  { icon: <FaReact />, name: "React", category: "frontend" },
  { icon: <SiTypescript />, name: "Typescript", category: "frontend" },
  { icon: <DiNodejs />, name: "Node", category: "backend" },
  { icon: <SiExpress />, name: "Express", category: "backend" },
  { icon: <SiMongodb />, name: "Mongodb", category: "backend" },
  { icon: <SiNextdotjs />, name: "Next js", category: "frontend" },
  { icon: <SiFirebase />, name: "Firebase", category: "backend" },
  { icon: <FaGitAlt />, name: "Git", category: "tools" },
  { icon: <SiRedux />, name: "Redux", category: "frontend" },
  { icon: <SiReactrouter />, name: "React router", category: "frontend" },
  { icon: <SiChakraui />, name: "Chakra ui", category: "frontend" },
  { icon: <SiMaterialui />, name: "Material ui", category: "frontend" },
  { icon: <SiSocketdotio />, name: "WebSocket", category: "backend" },
  { icon: <FaGithub />, name: "Github", category: "tools" },
  { icon: <SiJest />, name: "Jest", category: "tools" },
  { icon: <SiCypress />, name: "Cypress", category: "tools" },
  { icon: <SiVercel />, name: "Vercel", category: "tools" },
  { icon: <SiNetlify />, name: "Netlify", category: "tools" },
  { icon: <SiVisualstudiocode />, name: "Vs code", category: "tools" },
  { icon: <SiPostman />, name: "Postman", category: "tools" },
];

export const TechStackTab = () => {
  return (
    <Tabs variant="soft-rounded" m={"auto"} maxW={"968px"}>
      <TabList justifyContent={"space-around"} transition={"1s"} w={"100%"}>
        <Tab
          _selected={{ color: "white", bg: "cornflowerblue" }}
          bg={"whiteAlpha.700"}
          borderRadius={"8px"}
        >
          <HStack
            fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "16px" }}
          >
            <Text fontWeight={"700"}>All</Text>
            <Text fontWeight={"700"}>
              <BsStack />
            </Text>
          </HStack>
        </Tab>
        <Tab
          _selected={{ color: "white", bg: "cornflowerblue" }}
          bg={"whiteAlpha.700"}
          borderRadius={"8px"}
        >
          <HStack
            fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "16px" }}
          >
            <Text fontWeight={"700"}>Frontend</Text>
            <Text fontWeight={"700"}>
              <RxCodesandboxLogo />
            </Text>
          </HStack>
        </Tab>
        <Tab
          _selected={{ color: "white", bg: "cornflowerblue" }}
          bg={"whiteAlpha.700"}
          borderRadius={"8px"}
        >
          <HStack
            fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "16px" }}
          >
            <Text fontWeight={"700"}>Backend</Text>
            <Text fontWeight={"700"}>
              <HiOutlineServerStack />
            </Text>
          </HStack>
        </Tab>
        <Tab
          _selected={{ color: "white", bg: "cornflowerblue" }}
          bg={"whiteAlpha.700"}
          borderRadius={"8px"}
        >
          <HStack
            fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "16px" }}
          >
            <Text fontWeight={"700"}>Tools</Text>
            <Text fontWeight={"700"}>
              <RiToolsFill />
            </Text>
          </HStack>
        </Tab>
      </TabList>
      <TabPanels w={"100%"}>
        <TabPanel>
          <Grid
            gap={"5"}
            m={"auto"}
            templateColumns={{
              base: "repeat(5, 1fr)",
              sm: "repeat(5, 1fr)",
              md: "repeat(6, 1fr)",
              lg: "repeat(7, 1fr)",
            }}
          >
            {reactIcons.map((el, i) => (
              <Icons key={i} {...el} />
            ))}
          </Grid>
        </TabPanel>

        <TabPanel mt={"20px"}>
          <Grid
            gap={"5"}
            m={"auto"}
            templateColumns={{
              base: "repeat(5, 1fr)",
              sm: "repeat(5, 1fr)",
              md: "repeat(6, 1fr)",
              lg: "repeat(7, 1fr)",
            }}
          >
            {reactIcons
              ?.filter((el) => el.category === "frontend")
              .map((el, i) => (
                <Icons key={i} {...el} />
              ))}
          </Grid>
        </TabPanel>

        <TabPanel mt={"20px"}>
          <Grid
            gap={"5"}
            m={"auto"}
            templateColumns={{
              base: "repeat(5, 1fr)",
              sm: "repeat(5, 1fr)",
              md: "repeat(6, 1fr)",
              lg: "repeat(7, 1fr)",
            }}
          >
            {reactIcons
              ?.filter((el) => el.category === "backend")
              .map((el, i) => (
                <Icons key={i} {...el} />
              ))}
          </Grid>
        </TabPanel>

        <TabPanel mt={"20px"}>
          <Grid
            gap={"5"}
            m={"auto"}
            templateColumns={{
              base: "repeat(5, 1fr)",
              sm: "repeat(5, 1fr)",
              md: "repeat(6, 1fr)",
              lg: "repeat(7, 1fr)",
            }}
          >
            {reactIcons
              ?.filter((el) => el.category === "tools")
              .map((el, i) => (
                <Icons key={i} {...el} />
              ))}
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
