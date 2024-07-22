import useBackToTop from "site/hooks/useBackToTop.tsx";
import useVerifyPositionDocument from '../../hooks/useVerifyPositionDocument.tsx'

export default function AumentoDePadding() {
  const positionDocument = useBackToTop('HeaderSection')

  return <div
    data-testid="HeaderSection"
    class={positionDocument ? 'h-2 w-full' : ''} 
  />
}
