import { ICard } from "site/components/ui/OurFamily/Card.tsx";
import Card from "site/islands/Card.tsx";

export interface Cards {
  cards: ICard[],
}

export default function Cards({ cards }: Cards) {
  return (
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      { cards.map((item, index: number) => <Card index={index} {...item} />) }
    </div>
  )
}
