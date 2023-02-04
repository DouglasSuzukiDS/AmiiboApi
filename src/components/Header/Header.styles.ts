import styled from "styled-components"

export const Header = styled.header`
  background: var(--degrade);
  font-family: 'Pretento';
  padding: 32px 0;
  width: 100%;

  p {
    background: var(--inv-degrade);
    width: fit-content; // Deixa o tamanho conforme o texto

    font-size: 40px;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`