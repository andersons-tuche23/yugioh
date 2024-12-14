import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { HeaderContainer, Logo, SocialIcons } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>Yu-Gi-Oh Cards</Logo>
      <SocialIcons>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} color="#fff" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} color="#fff" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} color="#fff" />
        </a>
      </SocialIcons>
    </HeaderContainer>
  );
};

export default Header;
