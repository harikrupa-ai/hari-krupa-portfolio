import "./App.css";
import { useState } from "react";

import profilePic from "./assets/profile.jpeg";
import resume from "./assets/Hari_Krupa_Business_Analyst_Resume.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaPython,
  FaFileAlt,
} from "react-icons/fa";
import { SiStreamlit } from "react-icons/si";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: "Multi-Agent AI Business Analyst Platform",
      desc: "AI-powered BA platform that automates requirements analysis, user story generation, risk analysis, architecture recommendations, semantic memory search, and report generation.",
      tech: "Python • LangGraph • Gemini • Streamlit • ChromaDB",
      github: "https://github.com/harikrupa-ai/multi-agent-ai-business-analyst",
      demo: "https://multi-agent-ai-business-analyst-45z4issbf2fdhdppkkpgt7.streamlit.app/",
    },
    {
      title: "AI Resume Intelligence Platform",
      desc: "AI resume analysis platform for resume-job matching, ATS scoring, missing skill detection, semantic search, and interview preparation.",
      tech: "Python • Streamlit • FAISS • NLP • Sentence Transformers",
      github: "https://github.com/harikrupa-ai/ai-resume-intelligence-platform",
      demo: "https://resume-intelligence-platform.streamlit.app/",
    },
    {
      title: "Sales Profitability Analytics Dashboard",
      desc: "Business intelligence dashboard for sales, profit, margin, KPI reporting, and performance insights.",
      tech: "SQL • Tableau • Power BI • Data Analytics",
      github: "https://github.com/harikrupa-ai/sales-profitability-analytics-dashboard",
      demo: "#",
    },
  ];

  const skills = [
    "Business Analysis",
    "Requirements Gathering",
    "BRD / FRD",
    "User Stories",
    "Acceptance Criteria",
    "UAT",
    "Agile Scrum",
    "SQL",
    "Power BI",
    "Tableau",
    "Python",
    "Generative AI",
    "LangGraph",
    "RAG",
    "Streamlit",
  ];

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <section className="hero">
        <p className="intro">Hi, I'm</p>

        <img src={profilePic} alt="Hari Krupa" className="profile-pic" />

        <h1>Hari Krupa Cheguri</h1>

        <h2>Business Analyst | Generative AI | Data Analytics</h2>

        <p className="description">
          I build AI-powered business solutions using Python, LangGraph,
          Streamlit, SQL, Power BI, Tableau, and Generative AI.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href={resume} target="_blank" rel="noreferrer" className="btn-outline">
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/hari-krupa-ch/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
        </div>

        <div className="contact-icons">
          <a href="https://github.com/harikrupa-ai" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/hari-krupa-ch/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href={resume} target="_blank" rel="noreferrer">
            <FaFileAlt />
          </a>
        </div>
      </section>

      <section className="section">
        <h2>About Me</h2>
        <p className="about-text">
          I am a Business Analyst and AI enthusiast with experience in
          requirements analysis, Agile delivery, SQL, Power BI, Tableau,
          Python, and Generative AI application development. I focus on
          building practical business and analytics solutions that improve
          decision-making, automation, and operational efficiency.
        </p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section tech-icons">
        <h2>Tools & Technologies</h2>
        <div className="icons">
          <FaPython />
          <SiStreamlit />
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <small>{project.tech}</small>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Experience Focus</h2>

        <div className="experience-card">
          <h3>Business Analysis, Agile Delivery & AI Solutions</h3>

          <p>
            Focused on translating business requirements into scalable
            solutions, writing user stories, analyzing workflows, building
            dashboards, and developing AI-powered tools for automation and
            decision support.
          </p>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Let's Connect</h2>

        <p>
          Open to Business Analyst, Data Analyst, AI Business Analyst, and
          Generative AI roles.
        </p>

        <div className="contact-icons">
          <a href="https://github.com/harikrupa-ai" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/hari-krupa-ch/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href={resume} target="_blank" rel="noreferrer">
            <FaFileAlt />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;