import useTopToBack from "site/hooks/useTopToBack.tsx";

export default function AumentoDePadding() {
  const positionDocument = useTopToBack('HeaderSection')

  return <div
    data-testid="HeaderSection"
    class={`transition-all duration-200 ${positionDocument ? 'w-full py-2' : 'py-0'}`} 
  />
}
