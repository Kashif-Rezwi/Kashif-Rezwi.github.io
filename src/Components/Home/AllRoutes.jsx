import { Routes, Route } from "react-router-dom"
import { About } from "../../Pages/About"
import { Contact } from "../../Pages/Contact"
import { Github } from "../../Pages/Github"
import { Home } from "../../Pages/Home"
import { Project } from "../../Pages/Project"
import { Skills } from "../../Pages/Skills"
export const AllRoutes = () => {
    return(
        <Routes>

            <Route path="/" element={<Home/>}></Route>
            <Route path="/about-me" element={<About/>}></Route>
            <Route path="/skills" element={<Skills/>}></Route>
            <Route path="/project" element={<Project/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/resume" element={<Github/>}></Route>

        </Routes>
    )
}