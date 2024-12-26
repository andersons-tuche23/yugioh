import { GetServerSideProps } from "next";
import { fetchCards } from "../../services/ygoprodeck";

interface Card {
  id: string;
  name: string;
  type: string;
  desc: string;
  card_images: { image_url: string }[];
}

interface CardsPageProps {
  cards: Card[];
}

export function CardsPage({ cards }: CardsPageProps) {
  return (
    <div>
      <h1>Lista de Cartas</h1>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <h2>{card.name}</h2>
            <p>{card.desc}</p>
            {card.card_images[0] && (
              <img
                src={card.card_images[0].image_url}
                alt={card.name}
                width={200}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const cards = await fetchCards();

  return {
    props: {
      cards: cards.data.slice(0, 20),
    },
  };
};

export default CardsPage;
