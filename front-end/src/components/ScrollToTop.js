import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // فوراً أول الصفحة بدون أي smooth scroll
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}