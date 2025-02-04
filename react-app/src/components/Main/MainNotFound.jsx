import { useScrollToTop } from "../../utils/request";

export const NotFound = () => {
  useScrollToTop();

  return (
    <main className="main">
      <div className="container">Не найдено 404</div>
    </main>
  );
};
