import styled from "styled-components";

export const Footer = styled.footer`
   font-family: 'Pretento';
   /* padding: 16px; */

   p {
      background: var(--inv-degrade);
      width: fit-content; // Deixa o tamanho conforme o texto

      font-size: 40px;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   @media (max-width: 550px) {
    padding: 24px;

    p {
      font-size: 32px;
    }
  }

  @media (max-width: 450px) {
    p {
      font-size: 24px;
    }
  }

  @media (max-width: 350px) {
    padding: 16px;
    
    p {
      font-size: 20px;
    }
  }
`

export const ContainerContact = styled.div`
  /* margin: 0; */
`

export const Span = styled.span`
   background-color: var(--bg-nitendo);
   border: 1px solid var(--bg-border-nitendo);
`

export const Screen = styled.span`
   padding: 4px;
   /* width: 100%; */
`

export const Contact = styled.span`
   background-color: var(--sc-nitendo);
   border: 1px solid var(--sc-border-nitendo);
   color: var(--bg-nitendo);
   height: 38px;
   padding: 4px;
`