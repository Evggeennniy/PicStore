import { NavLink } from "react-router-dom";

import { useScrollToTop } from "../../utils/request";

import { ReactComponent as BasketIcon } from "../../assets/svg/basket.svg";
import { ReactComponent as ExperienceIcon } from "../../assets/svg/experience.svg";
import { ReactComponent as PlaceIcon } from "../../assets/svg/place.svg";
import { ReactComponent as ClosedDealsIcon } from "../../assets/svg/closeddeals.svg";
import { ReactComponent as OpenDealsIcon } from "../../assets/svg/opendeals.svg";
import { ReactComponent as StatsIcon } from "../../assets/svg/statsicon.svg";
// import { ReactComponent as FilterIcon } from "../../assets/svg/filter.svg";
// import { ReactComponent as SortIcon } from "../../assets/svg/sort.svg";
import { ReactComponent as ViewIcon } from "../../assets/svg/viewicon.svg";
import { ReactComponent as MoneyIcon } from "../../assets/svg/money.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/user.svg";

export const Index = () => {
  useScrollToTop();

  return (
    <main className="main">
      <div className="container">Главная страница</div>
    </main>
  );
};

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

export const Lot = () => {
  useScrollToTop();

  return (
    <main className="main">
      <section className="product">
        <div className="product__wrapper container">
          <div className="product__view">
            <div className="product__img-wrap product__img-wrap--big">
              <img
                src={`${process.env.PUBLIC_URL}/images/general-lot-img.png`}
                alt="current-product-img"
                className="product__img product__img--big"
                id="current-product-img"
              />
            </div>
            <ul className="product__list">
              <li className="product__list-item">
                <div className="product__img-wrap product__img-wrap--small">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/paining-1.png`}
                    alt="product__img"
                    className="product__img product__img--sml"
                  />
                </div>
              </li>
              <li className="product__list-item">
                <div className="product__img-wrap product__img-wrap--small">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/paining-2.png`}
                    alt="product__img"
                    className="product__img product__img--sml"
                  />
                </div>
              </li>
              <li className="product__list-item">
                <div className="product__img-wrap product__img-wrap--small">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/paining-3.png`}
                    alt="product__img"
                    className="product__img product__img--sml"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="product__info">
            <div className="product__info-wrap">
              <h4 className="product__title product__title--bold">
                Тиша гармонії: лінії що об'єднують
              </h4>
              <h4 className="product__price">
                3500$ <span className="font--light">фікс лот</span>
              </h4>
              <div className="product__props">
                <div className="product__property">
                  <h6 className="product__title product__label">Розмір:</h6>
                  <h6 className="product__value">123x103</h6>
                </div>
                <div className="product__property">
                  <h6 className="product__title product__label">Техніка:</h6>
                  <h6 className="product__value">Масляна</h6>
                </div>
              </div>
            </div>
            <div className="product__info-wrap">
              <h6 className="product__title product__title--bold">Опис лоту</h6>
              <h6 className="product__title">
                Картина наповнена яскравими теплими тонами, що переносять у світ
                східних мотивів. У композиції гармонійно переплітаються фігури,
                архітектурні елементи та декоративні візерунки, які символізують
                багатство культури. Центральні образи — схожі на музикантів або
                жителів стародавнього міста, створюють відчуття руху та мелодії.
                Полотно передає атмосферу свята та спокою одночасно.
              </h6>
            </div>
            <div className="product__info-wrap product__nav">
              <button className="btn btn--action" id="buy-btn">
                <BasketIcon />
                <h6 className="btn__title">Купити</h6>
              </button>
              <button className="btn" id="ask-btn">
                <h6 className="btn__title">Запитати</h6>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="collection">
        <div className="collection__wrapper container">
          <div className="collection__content">
            <div className="collection__header">
              <h4 className="collection__title">Рекомендації</h4>
              <div className="line"></div>
            </div>
            <ul className="collection__list">
              <li className="collection__item">
                <NavLink href="/lot.html" className="collection__item-link">
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
                <NavLink href="/lot.html" className="collection__item-link">
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
                <NavLink href="/lot.html" className="collection__item-link">
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
                <NavLink href="/lot.html" className="collection__item-link">
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
                <NavLink href="/lot.html" className="collection__item-link">
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
                <NavLink href="/lot.html" className="collection__item-link">
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
                <NavLink href="/lot.html" className="collection__item-link">
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
                <NavLink href="/lot.html" className="collection__item-link">
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
                <NavLink href="/lot.html" className="collection__item-link">
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
                <NavLink href="/lot.html" className="collection__item-link">
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
                <NavLink href="/lot.html" className="collection__item-link">
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
                <NavLink href="/lot.html" className="collection__item-link">
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

export const Stats = () => {
  useScrollToTop();

  return (
    <main className="main">
      <section className="stats">
        <div className="stats__wrap container">
          <div className="stats__content">
            <div className="stats__header">
              <div className="stats__title">
                <StatsIcon className="stats__header-icon svg svg--big" />
                <h1 className="stats__title">Аналiтика аккаунта</h1>
              </div>
              <div className="stats__btn">
                <select
                  className="stats__switcher"
                  name="Тиждень"
                  id="select-range"
                >
                  <option className="stats__option" value="day" default>
                    1 день
                  </option>
                  <option className="stats__option" value="week">
                    14 дней
                  </option>
                  <option className="stats__option" value="month">
                    30 дней
                  </option>
                </select>
              </div>
            </div>
            <div className="stats__table">
              <div className="stats__item">
                <div className="stats__general">
                  <h2 className="stats__value">+25%</h2>
                  <p className="stats__subtitle">Ніж минулого тижня</p>
                </div>
              </div>
              <div className="stats__table-inner">
                <div className="stats__item">
                  <ViewIcon className="stats__icon svg svg--medium" />
                  <div className="stats__general">
                    <h2 className="stats__value">
                      <span className="font--fat">355</span> +23
                    </h2>
                    <p className="stats__subtitle">Перегляди профілю</p>
                  </div>
                </div>
                <div className="stats__item">
                  <MoneyIcon className="stats__icon svg svg--medium" />
                  <div className="stats__general">
                    <h2 className="stats__value">
                      <span className="font--fat">2800$</span> +150
                    </h2>
                    <p className="stats__subtitle">Зароблено грошей</p>
                  </div>
                </div>
                <div className="stats__item">
                  <UserIcon className="stats__icon svg svg--medium" />
                  <div className="stats__general">
                    <h2 className="stats__value">
                      <span className="font--fat">21</span> +5
                    </h2>
                    <p className="stats__subtitle">Часті відвідувачі</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="collections">
        <div className="collections__wrap container">
          <div className="collections__content">
            <div className="collections__list"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export const Registration = () => {
  useScrollToTop();

  return (
    <main className="main">
      <div className="container">Регистрацiя</div>
    </main>
  );
};

export const Login = () => {
  useScrollToTop();

  return (
    <main className="main">
      <div className="container">Логiн</div>
    </main>
  );
};

export const NotFound = () => {
  useScrollToTop();

  return (
    <main className="main">
      <div className="container">Не знайдено</div>
    </main>
  );
};
