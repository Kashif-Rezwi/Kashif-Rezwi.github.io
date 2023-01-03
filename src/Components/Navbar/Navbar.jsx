import { UilEstate, UilUser, UilFileAlt, UilBriefcaseAlt, UilScenery, UilMessage, UilTimes, UilPalette, UilApps } from '@iconscout/react-unicons'
import { Box, Text, UnorderedList } from '@chakra-ui/react'
import { Link } from 'react-scroll'
import "./style.css"
import { useState } from 'react'

export const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <Box className="header" p={{base:"0px", sm:"0px", md:"0px", lg:"0px 5px"}}>
            <nav className="nav container">

            <UnorderedList m={"0"} display={{ base: "none", sm: "none", md: "block", lg: "block" }}>

                <Link to="home" smooth={true} duration={500} className="nav__logo">Kashif Rezwi</Link>

            </UnorderedList>

            <UnorderedList m={"0"} display={{ base: "block", sm: "block", md: "none", lg: "none" }}>

                <Link to="home" smooth={true} duration={500} className="nav__logo">Rezwi</Link>
                
            </UnorderedList>

                <div onClick={() => setShow(!show)} className={show ? "nav__menu show-menu" : "nav__menu"}> 

                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="home" smooth={true} duration={500} className="nav-link" onClick={() => setShow(!show)}>
                                <Text className="nav__icon">
                                    <UilEstate />
                                </Text> Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="about" smooth={true} duration={500} className="nav-link" onClick={() => setShow(!show)}>
                                <Text className="nav__icon">
                                    <UilUser />
                                </Text> About Me
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="skills" smooth={true} duration={500} className="nav-link" onClick={() => setShow(!show)}>
                                <Text className="nav__icon">
                                    <UilFileAlt />
                                </Text> Skills
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="projects" smooth={true} duration={500} className="nav-link" onClick={() => setShow(!show)}>
                                <Text className="nav__icon">
                                    <UilScenery />
                                </Text> Projects
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="contact" smooth={true} duration={500} className="nav-link" onClick={() => setShow(!show)}>
                                <Text className="nav__icon">
                                    <UilMessage />
                                </Text> Contact
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="resume" smooth={true} duration={500} className="nav-link" onClick={() => setShow(!show)}>
                                <Text className="nav__icon">
                                    <UilMessage />
                                </Text> Resume
                            </Link>
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