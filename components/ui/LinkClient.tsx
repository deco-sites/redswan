export interface LinkClientProps {
  url: string,
  text: string,
  class?: string
  insertClass: string
}

export default function LinkClient({ url, text, class: className = '', insertClass }: LinkClientProps) {
  return (
    <a
      href={url}
      aria-label={text}
      class={className}
      onMouseLeave={(e: any) => {
        console.log({ target: e.target, classList: e.target.classList }, 'DENTRO DA FUNÇÃO')
        e.target.classList.add(insertClass)
        setTimeout(() => {
          e.target.classList.remove(insertClass)
        }, 450)
      }}
    >
      {text}
    </a>
  )
}
