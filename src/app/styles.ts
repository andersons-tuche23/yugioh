import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: 100vh;
  background-color: #111;
  color: #fff;
`;

export const Sidebar = styled.div`
  padding: 20px;
  background-color: #222;
  overflow-y: auto;
`;

export const CardDetails = styled.div`
  text-align: center;

  img {
    width: 80%;
    margin-top: 10px;
  }

  p {
    margin: 10px 0;
  }
`;

export const CardLibrary = styled.div`
  padding: 20px;
  overflow-y: auto;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
`;

export const CardItem = styled.div`
  background-color: #333;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 4px 4px 0 0;
`;

export const Title = styled.h4`
  margin: 10px 0;
  font-size: 0.9em;
`;

export const Filters = styled.div`
  padding: 20px;
  background-color: #222;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #444;
  border-radius: 4px;
  color: #fff;
  background-color: #333;

  &::placeholder {
    color: #888;
  }
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
`;
