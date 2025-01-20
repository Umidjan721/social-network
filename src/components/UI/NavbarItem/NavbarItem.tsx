
interface INavbarItem {
    navbarIcon:string,
    navbarBox:string,
    navbarId:string, 
    navbarD: string, 
    navbarMainText: string, 
}


export const NavbarItem = ({navbarIcon, navbarBox, navbarId, navbarD, navbarMainText,} :INavbarItem) => {
    return(
        <li className="navbar__item">
        <svg
          className={navbarIcon}
          viewBox={navbarBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id={navbarId}
            d={navbarD}
          />
        </svg>
        <p className="item__name">{navbarMainText}</p>
        <span className="Badge">1</span>
      </li>
    )
}