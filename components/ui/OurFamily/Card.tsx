export type ICard = {
  title: string,
  description: string,
  link: string,
}

export interface CardProps extends ICard {
  index: number
}

export default function Card({ description, link, title, index }: CardProps) {
  return (
    <div class="">
      Teste
    </div>
  )
}
