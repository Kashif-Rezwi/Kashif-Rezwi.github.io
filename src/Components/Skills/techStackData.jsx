import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiReactrouter,
  SiExpress,
  SiNestjs,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiClickhouse,
  SiRedis,
  SiPython,
} from "react-icons/si";

export const techStackData = [
  { icon: <SiJavascript />, name: "Javascript", category: "languages" },
  { icon: <SiTypescript />, name: "Typescript", category: "languages" },
  { icon: <SiPython />, name: "Python", category: "languages" },

  { icon: <FaReact />, name: "React", category: "frontend" },
  { icon: <SiNextdotjs />, name: "Next js", category: "frontend" },
  { icon: <SiTailwindcss />, name: "Tailwindcss", category: "frontend" },
  { icon: <SiRedux />, name: "Redux", category: "frontend" },
  { icon: <SiReactquery />, name: "Tanstack query", category: "frontend" },
  { icon: <SiReactrouter />, name: "React router", category: "frontend" },

  { icon: <FaNodeJs />, name: "Node", category: "backend" },
  { icon: <SiExpress />, name: "Express", category: "backend" },
  { icon: <SiNestjs />, name: "Nestjs", category: "backend" },
  { icon: <SiSocketdotio />, name: "WebSocket", category: "backend" },

  { icon: <SiMongodb />, name: "Mongodb", category: "Databases & Caching" },
  { icon: <SiPostgresql />, name: "Postgresql", category: "Databases & Caching" },
  { icon: <SiClickhouse />, name: "Clickhouse", category: "Databases & Caching" },
  { icon: <SiRedis />, name: "Redis", category: "Databases & Caching" },
];
