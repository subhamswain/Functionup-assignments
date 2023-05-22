import { useState } from "react";
import './navbar.css'
import Logo from "../../Atoms/Logo/logo";
import {BsList} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";



export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const navigate = useNavigate()


  return (
    <nav className="navigation">
      <a  href="/" className="brand-name">
        <Logo  />
      </a>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <a onClick={() => navigate('/home')} href="/home">Home</a>
          </li>
          <li>
            <a onClick={() =>  navigate('/about')} href="/about">About</a>
          </li>
          <li>
            <a onClick={() => navigate('/projects')} href="/Projects">Projects</a>
          </li>
          <li>
            <a onClick={() => navigate('/videos')}href="/Videos">Videos</a>
          </li>
          <li>
            <a onClick={() => navigate('/contact')}href="/contact">Contact</a>
          </li>
          <li>
            <a href="/LogIn"><button onClick={() => navigate('/login')}>Log In</button></a>
          </li>
        </ul>
      </div>
      <button className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        <BsList />
      </button>
    </nav>
  );
}