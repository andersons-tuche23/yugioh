"use client";

import React, { useState, useEffect } from "react";
import { fetchCards } from "../app/services/ygoprodeck";
import {
  Container,
  Sidebar,
  CardDetails,
  CardLibrary,
  Filters,
  CardGrid,
  CardItem,
  Image,
  Title,
  Input,
  Select,
} from "./styles";
import Header from "./components/Header";

interface CardData {
  id: string;
  name: string;
  type: string;
  desc: string;
  archetype: string;
  frameType: string;
  atk?: number;
  def?: number;
  card_images: { image_url: string }[];
}

export default function Home() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardData[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const getCards = async () => {
      const data = await fetchCards();
      setCards(data.data.slice(0, 1000));
      setFilteredCards(data.data.slice(0, 20));
    };
    getCards();
  }, []);

  const handleFilterChange = () => {
    const filtered = cards.filter(
      (card) =>
        (selectedType ? card.type === selectedType : true) &&
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  useEffect(() => {
    handleFilterChange();
  }, [searchQuery, selectedType]);

  const playSound = () => {
    const audio = new Audio("/Sounds/som01.mp3"); 
    audio.play();
  };

  return (
    <>
      <Header />
      <Container>
        <Sidebar>
          {selectedCard ? (
            <CardDetails>
              <h2>{selectedCard.name}</h2>
              <Image
                src={selectedCard.card_images[0]?.image_url}
                alt={selectedCard.name}
              />
              <p>{selectedCard.desc}</p>
              <p>
                <strong>ATK:</strong> {selectedCard.atk} | <strong>DEF:</strong>{" "}
                {selectedCard.def}
              </p>
            </CardDetails>
          ) : (
            <p>Selecione uma carta</p>
          )}
        </Sidebar>
        <CardLibrary>
          <h2>Cards Library</h2>
          <CardGrid>
            {filteredCards.map((card) => (
              <CardItem
              key={card.id}
              onClick={() => {
                setSelectedCard(card); 
                playSound(); 
              }}
            >
                <Image src={card.card_images[0]?.image_url} alt={card.name} />
                <Title>{card.name}</Title>
              </CardItem>
            ))}
          </CardGrid>
        </CardLibrary>
        <Filters>
          <h2>Cards Options</h2>
          <Input
            type="text"
            placeholder="Buscar por nome"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Filtrar por Tipo</option>
            <option value="Effect Monster">Monstro de Efeito</option>
            <option value="Spell Card">Carta de Magia</option>
          </Select>
        </Filters>
      </Container>
    </>
  );
}
