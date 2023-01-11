import { Tabs, TabList, TabPanels, Tab, TabPanel, Grid } from '@chakra-ui/react'
import { FaReact, FaNpm, FaGithub, FaGitAlt } from 'react-icons/fa';
import { DiNodejs } from 'react-icons/di';
import { SiHtml5, SiCss3, SiTypescript, SiReactrouter, SiVercel, SiNetlify, SiRedux, SiJest, SiCypress, SiJavascript, SiChakraui, SiMaterialui, SiNextdotjs, SiVisualstudiocode, SiExpress, SiMongodb, SiFirebase } from 'react-icons/si';
import { Icons } from './Icons';

const reactIcons = [

    { icon: <SiHtml5 />, name: "Html", category: "frontend" },
    { icon: <SiCss3 />, name: "Css", category: "frontend" },
    { icon: <SiJavascript />, name: "Javascript", category: "frontend" },
    { icon: <FaReact />, name: "React", category: "frontend" },
    { icon: <SiTypescript />, name: "Typescript", category: "others" },
    { icon: <DiNodejs />, name: "Node", category: "backend" },
    { icon: <SiExpress />, name: "Express", category: "backend" },
    { icon: <SiMongodb />, name: "Mongodb", category: "backend" },
    { icon: <SiNextdotjs />, name: "Next js", category: "frontend" },
    { icon: <SiFirebase />, name: "Firebase", category: "backend" },
    { icon: <FaGitAlt />, name: "Git", category: "others" },
    { icon: <SiRedux />, name: "Redux", category: "frontend" },
    { icon: <SiReactrouter />, name: "React router", category: "others" },
    { icon: <SiChakraui />, name: "Chakra ui", category: "frontend" },
    { icon: <SiMaterialui />, name: "Material ui", category: "frontend" },
    { icon: <FaGithub />, name: "Github", category: "others" },
    { icon: <SiJest />, name: "Jest", category: "others" },
    { icon: <SiCypress />, name: "Cypress", category: "others" },
    { icon: <FaNpm />, name: "Npm", category: "others" },
    { icon: <SiVercel />, name: "Vercel", category: "others" },
    { icon: <SiNetlify />, name: "Netlify", category: "others" },
    { icon: <SiVisualstudiocode />, name: "Vs code", category: "others" },
]

export const TechStackTab = () => {

    return (
        <Tabs variant='soft-rounded' m={"auto"} maxW={"968px"}>
            <TabList justifyContent={"space-around"} transition={"1s"} w={"100%"} >
                <Tab _selected={{ color: 'white', bg: 'cornflowerblue' }} bg={"whiteAlpha.700"} borderRadius={"8px"}>All</Tab>
                <Tab _selected={{ color: 'white', bg: 'cornflowerblue' }} bg={"whiteAlpha.700"} borderRadius={"8px"}>Frontend</Tab>
                <Tab _selected={{ color: 'white', bg: 'cornflowerblue' }} bg={"whiteAlpha.700"} borderRadius={"8px"}>Backend</Tab>
                <Tab _selected={{ color: 'white', bg: 'cornflowerblue' }} bg={"whiteAlpha.700"} borderRadius={"8px"}>Others</Tab>
            </TabList>
            <TabPanels w={"100%"}>

                <TabPanel >
                    <Grid gap={"5"} m={"auto"} templateColumns={{ base: "repeat(4, 1fr)", sm: "repeat(5, 1fr)", md: "repeat(6, 1fr)", lg: "repeat(7, 1fr)" }}>
                        {
                            reactIcons.map((el, i) => <Icons key={i} {...el} />)
                        }

                    </Grid>
                </TabPanel>


                <TabPanel mt={"20px"}>
                    <Grid gap={"5"} m={"auto"} templateColumns={{ base: "repeat(4, 1fr)", sm: "repeat(5, 1fr)", md: "repeat(6, 1fr)", lg: "repeat(7, 1fr)" }}>
                        {
                            reactIcons?.filter((el) => el.category==="frontend").map((el, i) => <Icons key={i} {...el} />)
                        }

                    </Grid>
                </TabPanel>

                <TabPanel mt={"20px"}>
                    <Grid gap={"5"} m={"auto"} templateColumns={{ base: "repeat(4, 1fr)", sm: "repeat(5, 1fr)", md: "repeat(6, 1fr)", lg: "repeat(7, 1fr)" }}>
                        {
                            reactIcons?.filter((el) => el.category==="backend").map((el, i) => <Icons key={i} {...el} />)
                        }

                    </Grid>
                </TabPanel>


                <TabPanel mt={"20px"}>
                    <Grid gap={"5"} m={"auto"} templateColumns={{ base: "repeat(4, 1fr)", sm: "repeat(5, 1fr)", md: "repeat(6, 1fr)", lg: "repeat(7, 1fr)" }}>
                        {
                            reactIcons?.filter((el) => el.category==="others").map((el, i) => <Icons key={i} {...el} />)
                        }

                    </Grid>
                </TabPanel>

            </TabPanels>
        </Tabs>
    )
}