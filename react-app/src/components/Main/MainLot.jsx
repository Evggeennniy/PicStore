import { NavLink } from "react-router-dom";

import { useScrollToTop } from "../../utils/request";

import { ReactComponent as BasketIcon } from "../../assets/svg/basket.svg";

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
