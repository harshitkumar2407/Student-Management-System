import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import {useState , useEffect} from 'react'
import Button from './Button/Button'

const Navbar = () => {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // useEffect(() => {
  //   document.body.classList.remove("light","dark")
  //   document.body.classList.add(theme)
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}, [theme]);

  const toggleTheme = () =>{
    setTheme(theme === "light"? "dark" : "light")
  }

  return (
    <nav className='Navbar'>
      <Link to="/">Home  </Link>
      
      <Link to="/About"> About </Link>
      
      <Link to="/contact"> Contact  </Link>
      
      <Link to="/department"> Department </Link>
      
      <Button 
          onClick={toggleTheme} 
          style={{boxShadow:"var(--shadow-md)"
          }} >
        {theme === "light" ? "🌘Dark" : "☀️Light"}
      </Button>
      <Button variant='Secondary'>Login</Button>
    </nav>
  )
}

export default Navbar

