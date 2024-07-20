import useVerifyPositionDocument from '../../hooks/useVerifyPositionDocument.tsx'

export default function AumentoDePadding() {
  const positionDocument = useVerifyPositionDocument(0.1)

  console.log(positionDocument)
  return <div class={positionDocument ? 'py-2' : ''} />
}
