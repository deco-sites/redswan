import { useEffect, useState } from "preact/hooks";

function useTopToBack(elementDataTestid: string) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      setIsVisible(scrollY === 0);
    }

    if (!isVisible) {
      addEventListener("scroll", handleScroll)
    }

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, [elementDataTestid]);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      setIsVisible(scrollY === 0);
    }

    if (!isVisible) {
      handleScroll()
    }
  }, []);

  return isVisible;
}

export default useTopToBack;
