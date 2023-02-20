import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Grid,
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
} from "react-icons/si";
import { ProjectInfo } from "./ProjectInfo";

const gitRepos = [
  {
    id: 1,
    name: "codeair.com",
    github: "https://github.com/Kashif-Rezwi/glistening-cook-4365",
    netlify: "https://codeair.netlify.app/",
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
    id: 2,
    name: "nordstrom.com",
    github: "https://github.com/Kashif-Rezwi/Nordstrom",
    netlify: "https://nord-ecommerce-website.netlify.app/",
    template: "./templates/nordstrom.PNG",
    description:
      "Complete responsive ecommerce website with all desired features such as add-to-cart, authentication, filter, sort checkout etc.",
    video: [false, ""],
    doneBy: "group",
    techstack: [
      <SiHtml5 />,
      <SiJavascript />,
      <SiReact />,
      <SiChakraui />,
      <SiRedux />,
      <SiFirebase />,
      <SiReactrouter />,
    ],
  },

  {
    id: 3,
    name: "myntra.com",
    github: "https://github.com/Kashif-Rezwi/Myntra",
    netlify: "https://grand-tarsier-842e30.netlify.app/homepage",
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
    id: 4,
    name: "herebuy.com",
    github: "https://github.com/arpit2444/grieving-driving-625-NearBuy",
    netlify: "https://soft-custard-9f29c0.netlify.app/",
    template: "./templates/herebuy.png",
    description:
      "Herebuy is a clone of nearbuy.com which is India's first hyper-local online platform that enables customers and local merchants to discover and engage with each other.",
    video: [false, ""],
    doneBy: "group",
    techstack: [
      <SiHtml5 />,
      <SiJavascript />,
      <SiReact />,
      <SiChakraui />,
      <SiRedux />,
      <SiFirebase />,
      <SiReactrouter />,
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
          All
        </Tab>
        <Tab
          _selected={{ color: "white", bg: "cornflowerblue" }}
          bg={"whiteAlpha.700"}
          borderRadius={"8px"}
        >
          Group
        </Tab>
        <Tab
          _selected={{ color: "white", bg: "cornflowerblue" }}
          bg={"whiteAlpha.700"}
          borderRadius={"8px"}
        >
          Individual
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
