'use client';

import React, { useState, useEffect } from 'react';
import { fetchCards } from '../app/services/ygoprodeck';
import { Container, Grid, Card, Image, Title, Description, ToggleButton } from './styles';

interface CardData {
  id: string;
  name: string;
  type: string;
  desc: string;
  card_images: { image_url: string }[];
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [cards, setCards] = useState<CardData[]>([]);

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    const getCards = async () => {
      try {
        const data = await fetchCards();
        setCards(data.data.slice(0, 20)); 
      } catch (error) {
        console.error('Erro ao buscar as cartas:', error);
      }
    };

    getCards();
  }, []);

  return (
    <Container darkMode={darkMode}>
      <ToggleButton onClick={toggleTheme}>
        {darkMode ? '🌞 Claro' : '🌙 Escuro'}
      </ToggleButton>
      <Grid>
        {cards.map((card) => (
          <Card key={card.id}>
            <Image src={card.card_images[0]?.image_url} alt={card.name} />
            <Title>{card.name}</Title>
            <Description>{card.desc}</Description>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
