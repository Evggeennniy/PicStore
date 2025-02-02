import { useEffect } from "react";

export function isMobile() {
  return window.innerWidth < 1100;
}

export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
};
