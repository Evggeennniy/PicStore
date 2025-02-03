import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { isMobile } from "../../utils/request";

import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

export const Header = () => {
  const navBtn = useRef();
  const navList = useRef();
  const searchRef = useRef();
  const [searchInput, setSearchInput] = useState("");

  const handleNavToggle = () => {
    const currentNavBtn = navBtn.current;
    const currentNavList = navList.current;

    if (isMobile()) {
      const isActive = currentNavBtn.classList.contains("active");

      currentNavBtn.classList.toggle("active", !isActive);
      currentNavList.classList.toggle("active", !isActive);
    }
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    const currentSearch = searchRef.current;

    if (isMobile()) {
      currentSearch.classList.toggle("active");
    }

    setSearchInput("");
  };

  return (
    <header className="header">
      <div className="header__wrapper container">
        <div
          className="header__nav-btn"
          id="mobile-nav-btn"
          onClick={handleNavToggle}
          ref={navBtn}
        >
          <div className="stick"></div>
          <div className="stick"></div>
          <div className="stick"></div>
        </div>
        <h2 className="header__logo">
          <span className="font--fat">Pic</span>Store
        </h2>
        <div className="search">
          <input
            id="search-input"
            className="search__input"
            type="text"
            value={searchInput}
            onInput={(event) => handleSearchInput(event)}
            ref={searchRef}
            placeholder="Швидкий пошук"
          />
          <button id="search-btn">
            <SearchIcon onClick={handleSearchClick} />
          </button>
        </div>
        <nav className="header__nav" id="nav-menu" ref={navList}>
          <ul className="header__list">
            <li className="header__item">
              <NavLink
                to="/profile"
                className="header__link"
                onClick={handleNavToggle}
              >
                Профіль
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/stats"
                className="header__link"
                onClick={handleNavToggle}
              >
                Аналiтика
              </NavLink>
            </li>
          </ul>
          <ul className="header__list">
            <li className="header__item">
              <NavLink
                to="/registration"
                className="header__link"
                onClick={handleNavToggle}
              >
                Реєстрація
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/login"
                id="login-btn"
                className="header__link header__link--primary"
                onClick={handleNavToggle}
              >
                Увійти
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
