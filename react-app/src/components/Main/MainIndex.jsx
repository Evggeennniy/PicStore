import { useScrollToTop } from "../../utils/request";

export const Index = () => {
  useScrollToTop();

  return (
    <main className="main">
      <div className="container">Главная страница</div>
    </main>
  );
};
