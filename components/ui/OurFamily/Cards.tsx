import Card, { ICard } from "site/components/ui/OurFamily/Card.tsx";

export interface Cards {
  cards: ICard[],
}

export default function Cards({ cards }: Cards) {
  return (
    <div>
      { cards.map((item, index: number) => <Card index={index} {...item} />) }
    </div>
  )
}
