import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

function useVerifyPositionDocument(percentageToAppear: number) {
  const isVisible = useSignal(false);
  

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      console.log({scrollY, windowHeight, documentHeight})

      const positionToAppear = documentHeight * percentageToAppear;
      isVisible.value = scrollY + windowHeight >= positionToAppear;
    }

    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, [percentageToAppear]);

  return isVisible.value;
}

export default useVerifyPositionDocument;