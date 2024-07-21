import { useEffect, useState } from "preact/hooks";

function useBackToTop(elementDataTestid: string) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementInDocument = document.querySelector(`div[data-testid=${elementDataTestid}]`) as HTMLElement

      const positionToAppear = elementInDocument.offsetHeight + elementInDocument.offsetTop;

      setIsVisible(scrollY + windowHeight >= positionToAppear);
    }

    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, [elementDataTestid]);

  return isVisible;
}

export default useBackToTop;
