import { useEffect, useState } from "preact/hooks";

function useBackToTop(elementDataTestid: string) {
  const [isVisible, setIsVisible] = useState(false);
  const [funcionou, setFuncionou] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (!funcionou) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const elementInDocument = document.querySelector(`div[data-testid=${elementDataTestid}]`) as HTMLElement
        const positionToAppear = elementInDocument.offsetTop;

        if (elementDataTestid === 'HeaderSection') {
          console.log({
            clientScroll: scrollY + windowHeight,
            elementInDocument,
            positionToAppear
          })
        }
  
        if (scrollY + windowHeight < positionToAppear) {
          setIsVisible(scrollY + windowHeight >= positionToAppear);
        } else {
          setFuncionou(true)
          setIsVisible(true)
        }
      }
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
      const windowHeight = window.innerHeight;
      const elementInDocument = document.querySelector(`div[data-testid=${elementDataTestid}]`) as HTMLElement
      const positionToAppear = elementInDocument.offsetHeight + elementInDocument.offsetTop;

      setIsVisible(scrollY + windowHeight >= positionToAppear);
    }

    if (!isVisible) {
      handleScroll()
    }
  }, []);

  return isVisible;
}

export default useBackToTop;
