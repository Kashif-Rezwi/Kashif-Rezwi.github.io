import { UilEstate, UilUser, UilFileAlt, UilBriefcaseAlt, UilScenery, UilMessage, UilTimes, UilPalette, UilApps } from '@iconscout/react-unicons'
import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-scroll'
import "./style.css"

export const Navbar = () => {

    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

    /*===== MENU SHOW =====*/
    /* Validate If Constant Exists */
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    /*===== MENU HIDDEN =====*/
    /* Validate If Constant Exists */
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }


    if (navMenu) {
        navMenu.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <Link to="home" smooth={true} duration={500}  className="nav__logo">Kashif Rezwi</Link>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="home" smooth={true} duration={500} className="nav__link">
                                <Text className="uil uil-estate nav__icon">
                                    <UilEstate />
                                </Text> Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="about" smooth={true} duration={500} className="nav__link">
                                <Text className="uil uil-user nav__icon">
                                    <UilUser />
                                </Text> About Me
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="skills" smooth={true} duration={500} className="nav__link">
                                <Text className="uil uil-file-alt nav__icon">
                                    <UilFileAlt />
                                </Text> Skills
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="projects" smooth={true} duration={500} className="nav__link">
                                <Text className="uil uil-scenery nav__icon">
                                    <UilScenery />
                                </Text> Projects
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="contact" smooth={true} duration={500} className="nav__link">
                                <Text className="uil uil-message nav__icon">
                                    <UilMessage />
                                </Text> Contact
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="resume" smooth={true} duration={500} className="nav__link">
                                <Text className="uil uil-message nav__icon">
                                    <UilMessage />
                                </Text> Resume
                            </Link>
                        </li>
                    </ul>
                    <Text className="uil uil-times nav__close" id="nav-close">
                        <UilTimes />
                    </Text>
                </div>

                <div className="nav__btns">

                    <div className="nav__toggle nav__btns" id="nav-toggle">
                        <Text className="uil uil-apps">
                            <UilApps />
                        </Text>
                    </div>

                </div>

            </nav>
        </header>
    )
}