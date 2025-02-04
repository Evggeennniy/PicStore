import { NavLink } from "react-router-dom";

import { useScrollToTop } from "../../utils/request";

import { ReactComponent as ExperienceIcon } from "../../assets/svg/experience.svg";
import { ReactComponent as PlaceIcon } from "../../assets/svg/place.svg";
import { ReactComponent as ClosedDealsIcon } from "../../assets/svg/closeddeals.svg";
import { ReactComponent as OpenDealsIcon } from "../../assets/svg/opendeals.svg";

// import { ReactComponent as FilterIcon } from "../../assets/svg/filter.svg";
// import { ReactComponent as SortIcon } from "../../assets/svg/sort.svg";

export const Profile = () => {
  useScrollToTop();

  return (
    <main className="main">
      <section className="author">
        <div className="author__wrapper container">
          <div className="author__intro">
            <div className="author__intro-left">
              <div
                className="author__background"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/author-background.png)`,
                }}
              ></div>
              <div className="author__about">
                <div className="author__about-top">
                  <div className="author__img-wrap">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/author-img.png`}
                      alt="author-image"
                      className="author__img"
                    />
                  </div>
                  <ul className="author__contact-list">
                    <li className="author__contact-link">
                      <NavLink to="/" className="author__contact-wrap">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/telegram-icon.png`}
                          alt="social-media"
                          className="author__contact-img"
                        />
                      </NavLink>
                    </li>
                    <li className="author__contact-link">
                      <NavLink to="/" className="author__contact-wrap">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/tiktok-icon.png`}
                          alt="social-media"
                          className="author__contact-img"
                        />
                      </NavLink>
                    </li>
                    <li className="author__contact-link">
                      <NavLink to="/" className="author__contact-wrap">
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
                  <h4 className="author__fullname">Опалинський Роман</h4>
                  <div className="author__props">
                    <div className="author__exp author__prop">
                      <ExperienceIcon />
                      <h5 className="author__exp-text">5 років досвіду</h5>
                    </div>
                    <div className="author__place author__prop">
                      <PlaceIcon />
                      <h5 className="author__place-text">Україна, Одеса</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="author__intro-right">
              <div className="author__bio">
                <h4 className="author__title">Про себе</h4>
                <p className="author__text">
                  Я український художник, який знаходить натхнення в природі,
                  культурі та людських емоціях. Моя творчість — це поєднання
                  традиційного і сучасного.
                </p>
              </div>
              <div className="author__stats">
                <div className="author__stats-item">
                  <ClosedDealsIcon />
                  <h5 className="author__stats-title">Закритих угод: 5</h5>
                </div>
                <div className="author__stats-item">
                  <OpenDealsIcon />
                  <h5 className="author__stats-title">Відкритих угод: 9</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="collection">
        <div className="collection__wrapper container">
          <div className="collection__content">
            <div className="collection__header">
              <h4 className="collection__title">Картини автора</h4>
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
              <li className="collection__item">
                <NavLink to="/lot" className="collection__item-link">
                  <div className="collection__img-wrap">
                    <img
                      className="collection__item-img"
                      src={`${process.env.PUBLIC_URL}/images/paining-1.png`}
                      alt="painting"
                    />
                  </div>
                  <div className="collection__item-info">
                    <h5 className="collection__item-title">
                      Тиша гармонії: лінії що об'єднують
                    </h5>
                    <h5 className="collection__item-price">2500 $</h5>
                  </div>
                </NavLink>
              </li>
              <li className="collection__item">
                <NavLink to="/lot" className="collection__item-link">
                  <div className="collection__img-wrap">
                    <img
                      className="collection__item-img"
                      src={`${process.env.PUBLIC_URL}/images/paining-2.png`}
                      alt="painting"
                    />
                  </div>
                  <div className="collection__item-info">
                    <h5 className="collection__item-title">
                      Тиша гармонії: лінії що об'єднують
                    </h5>
                    <h5 className="collection__item-price">2500 $</h5>
                  </div>
                </NavLink>
              </li>
              <li className="collection__item">
                <NavLink to="/lot" className="collection__item-link">
                  <div className="collection__img-wrap">
                    <img
                      className="collection__item-img"
                      src={`${process.env.PUBLIC_URL}/images/paining-3.png`}
                      alt="painting"
                    />
                  </div>
                  <div className="collection__item-info">
                    <h5 className="collection__item-title">
                      Тиша гармонії: лінії що об'єднують
                    </h5>
                    <h5 className="collection__item-price">2500 $</h5>
                  </div>
                </NavLink>
              </li>
              <li className="collection__item">
                <NavLink to="/lot" className="collection__item-link">
                  <div className="collection__img-wrap">
                    <img
                      className="collection__item-img"
                      src={`${process.env.PUBLIC_URL}/images/paining-4.png`}
                      alt="painting"
                    />
                  </div>
                  <div className="collection__item-info">
                    <h5 className="collection__item-title">
                      Тиша гармонії: лінії що об'єднують
                    </h5>
                    <h5 className="collection__item-price">2500 $</h5>
                  </div>
                </NavLink>
              </li>
              <li className="collection__item">
                <NavLink to="/lot" className="collection__item-link">
                  <div className="collection__img-wrap">
                    <img
                      className="collection__item-img"
                      src={`${process.env.PUBLIC_URL}/images/paining-1.png`}
                      alt="painting"
                    />
                  </div>
                  <div className="collection__item-info">
                    <h5 className="collection__item-title">
                      Тиша гармонії: лінії що об'єднують
                    </h5>
                    <h5 className="collection__item-price">2500 $</h5>
                  </div>
                </NavLink>
              </li>
              <li className="collection__item">
                <NavLink to="/lot" className="collection__item-link">
                  <div className="collection__img-wrap">
                    <img
                      className="collection__item-img"
                      src={`${process.env.PUBLIC_URL}/images/paining-2.png`}
                      alt="painting"
                    />
                  </div>
                  <div className="collection__item-info">
                    <h5 className="collection__item-title">
                      Тиша гармонії: лінії що об'єднують
                    </h5>
                    <h5 className="collection__item-price">2500 $</h5>
                  </div>
                </NavLink>
              </li>
              <li className="collection__item">
                <NavLink to="/lot" className="collection__item-link">
                  <div className="collection__img-wrap">
                    <img
                      className="collection__item-img"
                      src={`${process.env.PUBLIC_URL}/images/paining-3.png`}
                      alt="painting"
                    />
                  </div>
                  <div className="collection__item-info">
                    <h5 className="collection__item-title">
                      Тиша гармонії: лінії що об'єднують
                    </h5>
                    <h5 className="collection__item-price">2500 $</h5>
                  </div>
                </NavLink>
              </li>
              <li className="collection__item">
                <NavLink to="/lot" className="collection__item-link">
                  <div className="collection__img-wrap">
                    <img
                      className="collection__item-img"
                      src={`${process.env.PUBLIC_URL}/images/paining-4.png`}
                      alt="painting"
                    />
                  </div>
                  <div className="collection__item-info">
                    <h5 className="collection__item-title">
                      Тиша гармонії: лінії що об'єднують
                    </h5>
                    <h5 className="collection__item-price">2500 $</h5>
                  </div>
                </NavLink>
              </li>
              <li className="collection__item">
                <NavLink to="/lot" className="collection__item-link">
                  <div className="collection__img-wrap">
                    <img
                      className="collection__item-img"
                      src={`${process.env.PUBLIC_URL}/images/paining-1.png`}
                      alt="painting"
                    />
                  </div>
                  <div className="collection__item-info">
                    <h5 className="collection__item-title">
                      Тиша гармонії: лінії що об'єднують
                    </h5>
                    <h5 className="collection__item-price">2500 $</h5>
                  </div>
                </NavLink>
              </li>
              <li className="collection__item">
                <NavLink to="/lot" className="collection__item-link">
                  <div className="collection__img-wrap">
                    <img
                      className="collection__item-img"
                      src={`${process.env.PUBLIC_URL}/images/paining-2.png`}
                      alt="painting"
                    />
                  </div>
                  <div className="collection__item-info">
                    <h5 className="collection__item-title">
                      Тиша гармонії: лінії що об'єднують
                    </h5>
                    <h5 className="collection__item-price">2500 $</h5>
                  </div>
                </NavLink>
              </li>
              <li className="collection__item">
                <NavLink to="/lot" className="collection__item-link">
                  <div className="collection__img-wrap">
                    <img
                      className="collection__item-img"
                      src={`${process.env.PUBLIC_URL}/images/paining-3.png`}
                      alt="painting"
                    />
                  </div>
                  <div className="collection__item-info">
                    <h5 className="collection__item-title">
                      Тиша гармонії: лінії що об'єднують
                    </h5>
                    <h5 className="collection__item-price">2500 $</h5>
                  </div>
                </NavLink>
              </li>
              <li className="collection__item">
                <NavLink to="/lot" className="collection__item-link">
                  <div className="collection__img-wrap">
                    <img
                      className="collection__item-img"
                      src={`${process.env.PUBLIC_URL}/images/paining-4.png`}
                      alt="painting"
                    />
                  </div>
                  <div className="collection__item-info">
                    <h5 className="collection__item-title">
                      Тиша гармонії: лінії що об'єднують
                    </h5>
                    <h5 className="collection__item-price">2500 $</h5>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
