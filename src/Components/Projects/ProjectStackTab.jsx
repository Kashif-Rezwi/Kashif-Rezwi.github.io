import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack } from '@chakra-ui/react'
import { Carousel } from './Carousel'

const gitRepos = [
    { id: 1, name: "codeair.com", github: "https://github.com/Kashif-Rezwi/glistening-cook-4365", netlify: "codeair.netlify.app/", template: "./templates/codeair.jpg", description: "Airtable is a online platform where people can create and share the relational databases to build powerful custom applications.", video: "https://www.linkedin.com/feed/update/urn:li:activity:6997921662746652672/", doneBy: "individual" },
    { id: 2, name: "codeair.com", github: "https://github.com/Kashif-Rezwi/glistening-cook-4365", netlify: "codeair.netlify.app/", template: "./templates/codeair.jpg", description: "Airtable is a online platform where people can create and share the relational databases to build powerful custom applications.", video: "https://www.linkedin.com/feed/update/urn:li:activity:6997921662746652672/", doneBy: "group" },
    { id: 3, name: "codeair.com", github: "https://github.com/Kashif-Rezwi/glistening-cook-4365", netlify: "codeair.netlify.app/", template: "./templates/codeair.jpg", description: "Airtable is a online platform where people can create and share the relational databases to build powerful custom applications.", video: "https://www.linkedin.com/feed/update/urn:li:activity:6997921662746652672/", doneBy: "individual" },
    { id: 4, name: "codeair.com", github: "https://github.com/Kashif-Rezwi/glistening-cook-4365", netlify: "codeair.netlify.app/", template: "./templates/codeair.jpg", description: "Airtable is a online platform where people can create and share the relational databases to build powerful custom applications.", video: "https://www.linkedin.com/feed/update/urn:li:activity:6997921662746652672/", doneBy: "group" },
]

const group = gitRepos?.filter((el) => el.doneBy === "group")
const individual = gitRepos?.filter((el) => el.doneBy === "individual")

export const ProjectStackTab = () => {

    return (
        <Tabs variant='soft-rounded' m={"auto"} w={"100%"} maxH={"350px"}>

            <TabList justifyContent={"space-around"} transition={"1s"} w={"100%"}>
                <Tab _selected={{ color: 'white', bg: 'cornflowerblue' }} bg={"whiteAlpha.700"} borderRadius={"8px"}>All</Tab>
                <Tab _selected={{ color: 'white', bg: 'cornflowerblue' }} bg={"whiteAlpha.700"} borderRadius={"8px"}>Group</Tab>
                <Tab _selected={{ color: 'white', bg: 'cornflowerblue' }} bg={"whiteAlpha.700"} borderRadius={"8px"}>Individual</Tab>
            </TabList>

            <TabPanels w={"100%"} p={"0px"}>

                <TabPanel>
                    <Stack justify={"center"} align={"center"}>
                        <Carousel projects={gitRepos} />
                    </Stack>

                </TabPanel>


                <TabPanel>
                    <Stack justify={"center"} align={"center"}>
                        <Carousel projects={group} />
                    </Stack>

                </TabPanel>


                <TabPanel>
                    <Stack justify={"center"} align={"center"}>
                        <Carousel projects={individual} />
                    </Stack>

                </TabPanel>

            </TabPanels>

        </Tabs>
    )
}