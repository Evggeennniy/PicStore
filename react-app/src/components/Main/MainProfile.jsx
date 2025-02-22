import { NavLink, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { useScrollToTop } from "../../utils/request";

import { ReactComponent as ExperienceIcon } from "../../assets/svg/experience.svg";
import { ReactComponent as PlaceIcon } from "../../assets/svg/place.svg";
import { ReactComponent as ClosedDealsIcon } from "../../assets/svg/closeddeals.svg";
import { ReactComponent as OpenDealsIcon } from "../../assets/svg/opendeals.svg";

// import { ReactComponent as FilterIcon } from "../../assets/svg/filter.svg";
// import { ReactComponent as SortIcon } from "../../assets/svg/sort.svg";

export const Profile = () => {
  useScrollToTop();

  const { username } = useParams();

  const userBackGroundRef = useRef();
  const userAvatarRef = useRef();
  const userFullNameRef = useRef();
  const userTelegramLinkRef = useRef();
  const userTiktokLinkRef = useRef();
  const userInstagramLinkRef = useRef();
  const userExperienceRef = useRef();
  const userCountryRef = useRef();
  const userCityRef = useRef();
  const userAboutRef = useRef();
  const userClosedDealsRef = useRef();
  const userOpenedDealsRef = useRef();
  const [userCollections, setUserCollections] = useState([]);

  function fillUpPage(json) {
    const user = json.user;

    userBackGroundRef.current.style = `background: url('${process.env.REACT_APP_API_STATIC_URL}/${user.background}')`;
    userAvatarRef.current.style = `content: url('${process.env.REACT_APP_API_STATIC_URL}/${user.avatar}')`;
    userFullNameRef.current.textContent = `${user.name} ${user.surname}`;
    userTelegramLinkRef.current.to = user.telegram;
    userTiktokLinkRef.current.to = user.tiktok;
    userInstagramLinkRef.current.to = user.instagram;
    userExperienceRef.current.textContent = `${user.experience}`;
    userCountryRef.current.textContent = user.country;
    userCityRef.current.textContent = user.city;
    userAboutRef.current.textContent = user.about;
    userClosedDealsRef.current.textContent = user.open_deals;
    userOpenedDealsRef.current.textContent = user.closed_deals;
    setUserCollections(user.collections);
  }

  async function getUserData(username) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${username}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.user !== null) {
          console.log(json.user);
          fillUpPage(json);
        } else {
          throw TypeError("User not found");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    getUserData(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <main className="main">
      <section className="author">
        <div className="author__wrapper container">
          <div className="author__intro">
            <div className="author__intro-left">
              <div className="author__background" ref={userBackGroundRef}></div>
              <div className="author__about">
                <div className="author__about-top">
                  <div className="author__img-wrap">
                    <div ref={userAvatarRef} className="author__img"></div>
                  </div>
                  <ul className="author__contact-list">
                    <li className="author__contact-link">
                      <NavLink
                        to="/errors/404"
                        className="author__contact-wrap"
                        ref={userTelegramLinkRef}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/telegram-icon.png`}
                          alt="social-media"
                          className="author__contact-img"
                        />
                      </NavLink>
                    </li>
                    <li className="author__contact-link">
                      <NavLink
                        to="/errors/404"
                        className="author__contact-wrap"
                        ref={userTiktokLinkRef}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/tiktok-icon.png`}
                          alt="social-media"
                          className="author__contact-img"
                        />
                      </NavLink>
                    </li>
                    <li className="author__contact-link">
                      <NavLink
                        to="/errors/404"
                        className="author__contact-wrap"
                        ref={userInstagramLinkRef}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/instagram-icon.png`}
                          alt="social-media"
                          className="author__contact-img"
                        />
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="author__about-bottom">
                  <h4 className="author__userFullNameRef" ref={userFullNameRef}>
                    -
                  </h4>
                  <div className="author__props">
                    <div className="author__exp author__prop">
                      <ExperienceIcon />
                      <h5 className="author__exp-text">
                        <span id="exp-value" ref={userExperienceRef}>
                          -
                        </span>{" "}
                        років досвіду
                      </h5>
                    </div>
                    <div className="author__place author__prop">
                      <PlaceIcon />
                      <h5 className="author__place-text">
                        <span id="place-county" ref={userCountryRef}>
                          -
                        </span>
                        ,{" "}
                        <span id="place-county" ref={userCityRef}>
                          -
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="author__intro-right">
              <div className="author__bio">
                <h4 className="author__title">Про себе</h4>
                <p className="author__text" ref={userAboutRef}>
                  -
                </p>
              </div>
              <div className="author__stats">
                <div className="author__stats-item">
                  <ClosedDealsIcon />
                  <h5 className="author__stats-title">
                    Закритих угод:{" "}
                    <span id="closed-deals" ref={userClosedDealsRef}>
                      -
                    </span>
                  </h5>
                </div>
                <div className="author__stats-item">
                  <OpenDealsIcon />
                  <h5 className="author__stats-title">
                    Відкритих угод:{" "}
                    <span id="closed-deals" ref={userOpenedDealsRef}>
                      -
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {userCollections.length > 0 &&
        userCollections.map((collection) => (
          <section className="collection" key={collection.id}>
            <div className="collection__wrapper container">
              <div className="collection__content">
                <div className="collection__header">
                  <h4 className="collection__title">{collection.name}</h4>
                  <div className="line"></div>
                  {/* !!! TODO FILTER/SORT */}
                  {/* <div className="collection__nav">
                  <button id="filter-btn" className="collection__nav-btn">
                    <FilterIcon />
                  </button>
                  <button
                    id="sort-btn"
                    className="collection__nav-btn collection__nav-btn--primary"
                  >
                    <SortIcon />
                  </button>
                </div> */}
                </div>
                <ul className="collection__list">
                  {collection.paintings.length > 0 &&
                    collection.paintings.map((painting) => (
                      <li className="collection__item" key={painting.id}>
                        <NavLink
                          to={`/lots/${painting.id}`}
                          className="collection__item-link"
                        >
                          <div className="collection__img-wrap">
                            <img
                              className="collection__item-img"
                              src={`${process.env.PUBLIC_URL}/images/paining-1.png`}
                              alt="painting"
                            />
                          </div>
                          <div className="collection__item-info">
                            <h5 className="collection__item-title">
                              {painting.name}
                            </h5>
                            <h5 className="collection__item-price">
                              {painting.price} $
                            </h5>
                          </div>
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
    </main>
  );
};
