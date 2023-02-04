import styled from "styled-components";

export const Footer = styled.footer`
   font-family: 'Pretento';

   p {
      background: var(--inv-degrade);
      width: fit-content; // Deixa o tamanho conforme o texto

      font-size: 40px;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }
`