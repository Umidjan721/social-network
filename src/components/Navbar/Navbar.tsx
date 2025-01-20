import { NavbarItem } from "../UI/NavbarItem/NavbarItem";
import { dataNavbar } from "./dataNavbar";

export const Navbar = () =>{
    return(
        <nav className="Navbar">
        <ul className="navbar__list">
          {dataNavbar.map((elem)=>(
            <NavbarItem 
              navbarIcon={elem.navbarIcon}
              navbarBox={elem.navbarBox}
              navbarD={elem.navbarD}
              navbarId={elem.navbarId}
              navbarMainText={elem.navbarMain}/>
          ))}
        </ul>
      </nav>
    );
};