import { NavLink } from "react-router-dom";

import { useScrollToTop } from "../../utils/request";

export const Registration = () => {
  useScrollToTop();

  return (
    <main className="main">
      <section className="auth">
        <div className="auth__wrapper container">
          <div className="auth__header auth__block">
            <h4 className="auth__title">Створіть акаунт</h4>
            <div className="auth__status-line"></div>
          </div>
          <div className="auth__main auth__block">
            <form action="" method="POST" className="auth__form">
              <div className="auth__field">
                <label htmlFor="username" className="auth__label">
                  Юзернейм
                </label>
                <input
                  name="username"
                  type="text"
                  className="auth__input"
                  placeholder="bluejohn"
                  required
                />
              </div>
              <div className="auth__field">
                <label htmlFor="password" className="auth__label">
                  Пароль
                </label>
                <input
                  name="password"
                  type="password"
                  className="auth__input"
                  placeholder="******"
                  required
                />
              </div>
              <div className="auth__field">
                <label htmlFor="confirm-password" className="auth__label">
                  Повторіть пароль
                </label>
                <input
                  name="confirm-password"
                  type="password"
                  className="auth__input"
                  placeholder="******"
                  required
                />
              </div>
              <div className="auth__field">
                <p className="auth__checkbox">
                  <input type="checkbox" />
                  <span class="checkmark">
                    {" "}
                    Реєструючись я погоджуюсь з політикою конф. та умовами
                    використання
                  </span>
                </p>
              </div>
              <p className="auth__subtitle">
                Маэте аккаунт? <NavLink to="/login">Увійти</NavLink>
              </p>
              <button className="auth__btn" type="submit">
                Створити
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
