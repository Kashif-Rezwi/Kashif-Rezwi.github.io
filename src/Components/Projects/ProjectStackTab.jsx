import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Grid,
  HStack,
  Text,
} from "@chakra-ui/react";
import {
  SiCss3,
  SiHtml5,
  SiReactrouter,
  SiJavascript,
  SiReact,
  SiChakraui,
  SiRedux,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNestjs,
  SiPostgresql,
} from "react-icons/si";
import { ProjectInfo } from "./ProjectInfo";
import { BiCodeCurly } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { BsFillPersonFill, BsTextareaResize, BsGrid } from "react-icons/bs";
import { FaNode, FaIcons } from "react-icons/fa";
import { IconBrandRadixUi } from "@tabler/icons-react";
import { DiNodejs } from "react-icons/di";

const gitRepos = [
  {
    id: 0,
    name: "betterdev.in",
    github: "https://github.com/Kashif-Rezwi/better-dev-ui",
    live: "https://www.betterdev.in",
    template: "./templates/betterDev.png",
    description:
      "Better DEV is a modern chat interface for AI conversations. Built with the latest web technologies, it provides a seamless, real-time experience with streaming responses, tool visibility, and conversation management.",
    video: [
      false,
      "",
    ],
    doneBy: "individual",
    techstack: [
      <SiTypescript />,
      <SiReact />,
      <SiReactrouter />,
      <SiTailwindcss />,
      <IconBrandRadixUi />,
      <DiNodejs />,
      <SiNestjs />,
      <SiPostgresql />,
    ],
  },

  {
    id: 1,
    name: "automa.com",
    github: "https://github.com/Kashif-Rezwi/Automa-Clone-App",
    live: "https://automa-clone.netlify.app/",
    template: "./templates/automa.png",
    description:
      "Automa is a browser extension for browser automation. From auto-fill forms, doing a repetitive task, taking a screenshot, to scraping data of the website, it's up to user what they want to do with this extension.",
    video: [
      false,
      "",
    ],
    doneBy: "individual",
    techstack: [
      <SiCss3 />,
      <SiHtml5 />,
      <SiJavascript />,
      <SiReact />,
      <BsGrid />,
      <SiChakraui />,
      <BsTextareaResize />,
      <FaIcons />
    ],
  },

  {
    id: 2,
    name: "codeair.com",
    github: "https://github.com/Kashif-Rezwi/glistening-cook-4365",
    live: "https://codeair.netlify.app/",
    template: "./templates/codeair.jpg",
    description:
      "Airtable is a online platform where people can create and share the relational databases to build powerful custom applications.",
    video: [
      true,
      "https://www.linkedin.com/feed/update/urn:li:activity:6997921662746652672/",
    ],
    doneBy: "individual",
    techstack: [
      <SiCss3 />,
      <SiHtml5 />,
      <SiJavascript />,
      <SiReact />,
      <SiChakraui />,
      <SiFirebase />,
      <SiReactrouter />,
    ],
  },

  {
    id: 3,
    name: "nordstrom.com",
    github: "https://github.com/Kashif-Rezwi/Nordstrom",
    live: "https://nord-ecommerce-website.netlify.app/",
    template: "./templates/nordstrom.PNG",
    description:
      "Complete responsive ecommerce website with all desired features such as add-to-cart, authentication, filter, sort checkout etc.",
    video: [false, ""],
    doneBy: "group",
    techstack: [
      <SiHtml5 />,
      <SiCss3 />,
      <SiJavascript />,
      <SiReact />,
      <SiChakraui />,
      <SiRedux />,
      <SiFirebase />,
      <SiReactrouter />,
    ],
  },

  {
    id: 4,
    name: "myntra.com",
    github: "https://github.com/Kashif-Rezwi/Myntra",
    live: "https://grand-tarsier-842e30.netlify.app/homepage",
    template: "./templates/myntra.PNG",
    description:
      "Myntra is a popular online fashion store. We have implemented the Login/Signup, home page, navbar, products page, sorting and filtering of the products, view product, cart and dummy payment features.",
    video: [
      true,
      "https://www.linkedin.com/feed/update/urn:li:activity:6944263136359104512/",
    ],
    doneBy: "group",
    techstack: [<SiCss3 />, <SiHtml5 />, <SiJavascript />],
  },

  {
    id: 5,
    name: "herebuy.com",
    github: "https://github.com/arpit2444/grieving-driving-625-NearBuy",
    live: "https://soft-custard-9f29c0.netlify.app/",
    template: "./templates/herebuy.png",
    description:
      "Herebuy is a clone of nearbuy.com which is India's first hyper-local online platform that enables customers and local merchants to discover and engage with each other.",
    video: [false, ""],
    doneBy: "group",
    techstack: [
      <SiHtml5 />,
      <SiCss3 />,
      <SiJavascript />,
      <SiReact />,
      <SiChakraui />,
      <SiRedux />,
      <SiFirebase />,
      <SiReactrouter />,
    ],
  },
  {
    id: 6,
    name: "trendsy.com",
    github: "https://github.com/Shalini1908/prickly-expert-9128",
    live: "https://trendsy.vercel.app/",
    template: "./templates/myntra2.png",
    description:
      "Trendsy is a ecommerce website where users can purchase lifestyle products. In this project we use our own backend using node, express and mongodb.",
    video: [false, ""],
    doneBy: "group",
    techstack: [
      <SiHtml5 />,
      <SiCss3 />,
      <SiJavascript />,
      <SiReact />,
      <SiChakraui />,
      <SiRedux />,
      <SiReactrouter />,
      <FaNode />,
      <SiExpress />,
      <SiMongodb />,
    ],
  },
];

const group = gitRepos?.filter((el) => el.doneBy === "group");
const individual = gitRepos?.filter((el) => el.doneBy === "individual");

export const ProjectStackTab = () => {
  return (
    <Tabs variant="soft-rounded" m={"auto"} w={"100%"}>
      <TabList
        justifyContent={"space-around"}
        transition={"1s"}
        maxW={"989px"}
        m={"auto"}
      >
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
              <BiCodeCurly />
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
            <Text fontWeight={"700"}>Group</Text>
            <Text fontWeight={"700"}>
              <HiUserGroup />
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
            <Text fontWeight={"700"}>Individual</Text>
            <Text fontWeight={"700"}>
              <BsFillPersonFill />
            </Text>
          </HStack>
        </Tab>
      </TabList>

      <TabPanels w={"100%"} p={"0px"}>
        <TabPanel>
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
            }}
            maxW={"989px"}
            m={"auto"}
            bg={"#f5f5f5"}
          >
            {/* <Carousel projects={gitRepos} /> */}
            {gitRepos?.map((repo) => (
              <ProjectInfo key={repo.id} {...repo} />
            ))}
          </Grid>
        </TabPanel>

        <TabPanel>
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
            }}
            maxW={"989px"}
            m={"auto"}
            bg={"#f5f5f5"}
          >
            {/* <Carousel projects={group} /> */}
            {group?.map((repo) => (
              <ProjectInfo key={repo.id} {...repo} />
            ))}
          </Grid>
        </TabPanel>

        <TabPanel>
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
            }}
            maxW={"989px"}
            m={"auto"}
            bg={"#f5f5f5"}
          >
            {/* <Carousel projects={individual} /> */}
            {individual?.map((repo) => (
              <ProjectInfo key={repo.id} {...repo} />
            ))}
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
