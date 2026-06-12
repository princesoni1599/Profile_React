import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Project'
import Contact from './components/Contact'
import About from './components/About'
import ProjectDesc from './components/ProjectDescription'

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <ProjectDesc />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Contact />
    </>
  );
  }