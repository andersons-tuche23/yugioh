import styled from 'styled-components';

interface ContainerProps {
  darkMode: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ darkMode }) => (darkMode ? '#121212' : '#ffffff')};
  color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#121212')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
`;

export const Card = styled.div`
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  &:hover {
    color: #007bff;
  }
`;
