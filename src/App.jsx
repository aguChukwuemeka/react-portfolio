import './App.css'
import Hero from "./sections/hero.jsx";
import Showcase from "./sections/showcase.tsx";
import Navbar from "./components/navbar.jsx";

export default function App() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Showcase/>
    </>
  )
}
