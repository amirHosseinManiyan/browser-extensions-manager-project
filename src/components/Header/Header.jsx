import "./Header.css";
import headerLogoBlack from "/images/logo-black.svg";
import headerLogoWhite from "/images/logo-white.svg";
import iconMoon from "/images/icon-moon.svg";
import iconSun from "/images/icon-sun.svg";

export default function Header({ theme, onChangeTheme }) {
   return(
      <header className="header">
            <img 
               src={
                  theme === "light"
                  ? headerLogoBlack
                  : headerLogoWhite
               } 
               className="header-logo" alt="header logo" 
            />
            <button 
               className="change-theme-button"
               onClick={onChangeTheme}
            >
               <img 
                  src={
                     theme === "light"
                     ? iconMoon
                     : iconSun
                  }
                  alt="change mode button" 
               />
            </button>
      </header>
   );
}