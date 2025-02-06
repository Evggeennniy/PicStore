import { NavLink } from "react-router-dom";

import { useScrollToTop } from "../../utils/request";

export const Login = () => {
  useScrollToTop();

  return (
    <main className="main">
      <section className="auth">
        <div className="auth__wrapper container">
          <div className="auth__header auth__block">
            <h4 className="auth__title">Увійдіть в акаунт</h4>
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
              <p className="auth__subtitle">
                Не маэте аккаунту?{" "}
                <NavLink to="/registration">Створити</NavLink>
              </p>
              <button className="auth__btn" type="submit">
                Увійти
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
