import { UilEstate, UilUser, UilLayerGroup , UilCommentsAlt , UilTelegramAlt ,  UilTimes, UilRocket , UilApps, UilBracketsCurly } from '@iconscout/react-unicons'
import { Box, Text, UnorderedList} from '@chakra-ui/react'
import { Link as ChakraLink} from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'
import "./style.css"
import { useState } from 'react'
import resume from '../Home/Kashif-Rezwi-Resume.pdf'

export const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <Box className="header" p={{base:"0px", sm:"0px", md:"0px", lg:"0px 5px"}}>
            <nav className="nav container">

            <UnorderedList m={"0"} display={{ base: "none", sm: "none", md: "block", lg: "block" }}>

                <ScrollLink to="home" smooth={true} duration={500} className="nav__logo">Kashif Rezwi</ScrollLink>

            </UnorderedList>

            <UnorderedList m={"0"} display={{ base: "block", sm: "block", md: "none", lg: "none" }}>

                <ScrollLink to="home" smooth={true} duration={500} className="nav__logo">Rezwi</ScrollLink>
                
            </UnorderedList>

                <div onClick={() => setShow(!show)} className={show ? "nav__menu show-menu" : "nav__menu"}> 

                    <ul className="nav__list">
                        <li className="nav__item">
                            <ScrollLink to="home" smooth={true} duration={500} className="nav-link" onClick={() => setShow(!show)}>
                                <Text className="nav__icon">
                                    <UilEstate />
                                </Text> Home
                            </ScrollLink>
                        </li>
                        <li className="nav__item">
                            <ScrollLink to="about" smooth={true} duration={500} className="nav-link" onClick={() => setShow(!show)}>
                                <Text className="nav__icon">
                                    <UilUser />
                                </Text> About Me
                            </ScrollLink>
                        </li>
                        <li className="nav__item">
                            <ScrollLink to="skills" smooth={true} duration={500} className="nav-link" onClick={() => setShow(!show)}>
                                <Text className="nav__icon">
                                    <UilLayerGroup  />
                                </Text> Skills
                            </ScrollLink>
                        </li>
                        <li className="nav__item">
                            <ScrollLink to="projects" smooth={true} duration={500} className="nav-link" onClick={() => setShow(!show)}>
                                <Text className="nav__icon">
                                    <UilBracketsCurly  />
                                </Text> Projects
                            </ScrollLink>
                        </li>
                        <li className="nav__item">
                            <ScrollLink to="contact" smooth={true} duration={500} className="nav-link" onClick={() => setShow(!show)}>
                                <Text className="nav__icon">
                                    <UilCommentsAlt/>
                                </Text> Contact
                            </ScrollLink>
                        </li>
                        <li className="nav__item" onClick={() => setShow(!show)}>
                            <ChakraLink href={resume} _hover={{textDecor:"none"}} download className="nav-link" onClick={() => window.open('https://drive.google.com/file/d/1x_dWmE-vlZi17mONRhmqm6M9Xrl_7hXc/view?usp=share_link')}>
                                <Text className="nav__icon">
                                    <UilTelegramAlt  />
                                </Text> Resume
                            </ChakraLink>
                        </li>
                    </ul>
                    <Text onClick={() => setShow(!show)} className="nav__close">
                        <UilTimes />
                    </Text>
                </div>

                <div onClick={() => setShow(!show)} className="nav__toggle">
                    <Text>
                        <UilApps />
                    </Text>
                </div>

            </nav>
        </Box>
    )
}