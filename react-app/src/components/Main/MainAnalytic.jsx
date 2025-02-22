import { NavLink } from "react-router-dom";
import { useScrollToTop } from "../../utils/request";

import { ReactComponent as StatsIcon } from "../../assets/svg/statsicon.svg";
import { ReactComponent as ViewIcon } from "../../assets/svg/viewicon.svg";
import { ReactComponent as MoneyIcon } from "../../assets/svg/money.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/user.svg";

export const Analytic = () => {
  useScrollToTop();

  return (
    <main className="main">
      <section className="profile-stats">
        <div className="profile-stats__wrap container">
          <div className="profile-stats__content">
            <div className="profile-stats__header">
              <div className="profile-stats__title">
                <StatsIcon className="profile-stats__header-icon svg svg--big" />
                <h1 className="profile-stats__title">Аналiтика аккаунта</h1>
              </div>
              <div className="profile-stats__btn">
                <select
                  className="profile-stats__switcher"
                  name="timeRange"
                  id="select-range"
                >
                  <option className="profile-stats__option" value="day" default>
                    1 день
                  </option>
                  <option className="profile-stats__option" value="week">
                    14 дней
                  </option>
                  <option className="profile-stats__option" value="month">
                    30 дней
                  </option>
                  <option className="profile-stats__option" value="month">
                    За весь час
                  </option>
                </select>
              </div>
            </div>
            <div className="profile-stats__table">
              <div className="profile-stats__item">
                <div className="profile-stats__general">
                  <h2 className="profile-stats__value">+25%</h2>
                  <p className="profile-stats__subtitle">Ніж минулого тижня</p>
                </div>
              </div>
              <div className="profile-stats__table-inner">
                <div className="profile-stats__item">
                  <ViewIcon className="profile-stats__icon svg svg--medium" />
                  <div className="profile-stats__general">
                    <h2 className="profile-stats__value">
                      <span className="font--fat">355</span> +23
                    </h2>
                    <p className="profile-stats__subtitle">Перегляди профілю</p>
                  </div>
                </div>
                <div className="profile-stats__item">
                  <UserIcon className="profile-stats__icon svg svg--medium" />
                  <div className="profile-stats__general">
                    <h2 className="profile-stats__value">
                      <span className="font--fat">21</span> +5
                    </h2>
                    <p className="profile-stats__subtitle">Часті відвідувачі</p>
                  </div>
                </div>
                <div className="profile-stats__item">
                  <MoneyIcon className="profile-stats__icon svg svg--medium" />
                  <div className="profile-stats__general">
                    <h2 className="profile-stats__value">
                      <span className="font--fat">2800$</span> +150
                    </h2>
                    <p className="profile-stats__subtitle">Зароблено грошей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="collection-stats">
        <div className="collection-stats__wrap container">
          <div className="collection-stats__content">
            <div className="collection-stats__header">
              <h4 className="collection-stats__title">Перегляди лотів</h4>
            </div>
            <ul className="collection-stats__list items-list">
              <li className="items-list__item">
                <NavLink to="/lot" className="items-list__link">
                  <div className="items-list__wrapper">
                    <div className="items-list__wrapper">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/paining-1.png`}
                        alt="item-img"
                        className="items-list__item-img"
                      />
                    </div>
                    <div className="items-list__wrapper items-list__wrapper--col">
                      <h4 className="items-list__title">
                        Тиша гармонії: лінії що об'єднують
                      </h4>
                      <p className="items-list__date">08 Січ. 2024</p>
                    </div>
                  </div>
                  <div className="items-list__wrapper">
                    <h3 className="items-list__counter">1203</h3>
                    <ViewIcon
                      alt="svg"
                      className="items-list__icon svg svg--black"
                    />
                  </div>
                </NavLink>
              </li>
              <li className="items-list__item">
                <NavLink to="/lot" className="items-list__link">
                  <div className="items-list__wrapper">
                    <div className="items-list__wrapper">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/paining-1.png`}
                        alt="item-img"
                        className="items-list__item-img"
                      />
                    </div>
                    <div className="items-list__wrapper items-list__wrapper--col">
                      <h4 className="items-list__title">
                        Тиша гармонії: лінії що об'єднують
                      </h4>
                      <p className="items-list__date">08 Січ. 2024</p>
                    </div>
                  </div>
                  <div className="items-list__wrapper">
                    <h3 className="items-list__counter">12403</h3>
                    <ViewIcon
                      alt="svg"
                      className="items-list__icon svg svg--black"
                    />
                  </div>
                </NavLink>
              </li>
              <li className="items-list__item">
                <NavLink to="/lot" className="items-list__link">
                  <div className="items-list__wrapper">
                    <div className="items-list__wrapper">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/paining-1.png`}
                        alt="item-img"
                        className="items-list__item-img"
                      />
                    </div>
                    <div className="items-list__wrapper items-list__wrapper--col">
                      <h4 className="items-list__title">
                        Тиша гармонії: лінії що об'єднують
                      </h4>
                      <p className="items-list__date">08 Січ. 2024</p>
                    </div>
                  </div>
                  <div className="items-list__wrapper">
                    <h3 className="items-list__counter">765</h3>
                    <ViewIcon
                      alt="svg"
                      className="items-list__icon svg svg--black"
                    />
                  </div>
                </NavLink>
              </li>
              <li className="items-list__item">
                <NavLink to="/lot" className="items-list__link">
                  <div className="items-list__wrapper">
                    <div className="items-list__wrapper">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/paining-1.png`}
                        alt="item-img"
                        className="items-list__item-img"
                      />
                    </div>
                    <div className="items-list__wrapper items-list__wrapper--col">
                      <h4 className="items-list__title">
                        Тиша гармонії: лінії що об'єднують
                      </h4>
                      <p className="items-list__date">08 Січ. 2024</p>
                    </div>
                  </div>
                  <div className="items-list__wrapper">
                    <h3 className="items-list__counter">243</h3>
                    <ViewIcon
                      alt="svg"
                      className="items-list__icon svg svg--black"
                    />
                  </div>
                </NavLink>
              </li>
              <li className="items-list__item">
                <NavLink to="/lot" className="items-list__link">
                  <div className="items-list__wrapper">
                    <div className="items-list__wrapper">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/paining-1.png`}
                        alt="item-img"
                        className="items-list__item-img"
                      />
                    </div>
                    <div className="items-list__wrapper items-list__wrapper--col">
                      <h4 className="items-list__title">
                        Тиша гармонії: лінії що об'єднують
                      </h4>
                      <p className="items-list__date">08 Січ. 2024</p>
                    </div>
                  </div>
                  <div className="items-list__wrapper">
                    <h3 className="items-list__counter">543</h3>
                    <ViewIcon
                      alt="svg"
                      className="items-list__icon svg svg--black"
                    />
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
