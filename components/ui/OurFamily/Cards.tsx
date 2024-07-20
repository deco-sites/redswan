import Card, { ICard } from "site/components/ui/OurFamily/Card.tsx";

export interface Cards {
  cards: ICard[],
}

export default function Cards({ cards }: Cards) {
  return (
    <div class="grid grid-cols-4">
      { cards.map((item, index: number) => <Card index={index} {...item} />) }
    </div>
  )
}
