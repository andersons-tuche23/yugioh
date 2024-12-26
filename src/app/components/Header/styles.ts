import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e3a8a;
  padding: 10px 20px;
  color: #fff;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 2px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #ccc;
    }
  }
`;
