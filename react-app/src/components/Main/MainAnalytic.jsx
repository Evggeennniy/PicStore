import { useScrollToTop } from "../../utils/request";

import { ReactComponent as StatsIcon } from "../../assets/svg/statsicon.svg";
import { ReactComponent as ViewIcon } from "../../assets/svg/viewicon.svg";
import { ReactComponent as MoneyIcon } from "../../assets/svg/money.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/user.svg";

export const Analytic = () => {
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
                  <option className="stats__option" value="month">
                    За весь час
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
