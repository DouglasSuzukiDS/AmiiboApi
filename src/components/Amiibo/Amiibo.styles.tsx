import styled from "styled-components";

export const Container = styled.div`
   margin-top: 16px;
`

export const P = styled.p`
   color: var(--bg-nitendo);
   font-family: 'Pretendo';
   font-size: 24px;
   margin-left: 16px;

   @media (max-width: 650px) {
      font-size: 20px;
   }

   @media (max-width: 650px) {
      font-size: 16px;
   }

   @media (max-width: 450px) {
      font-size: 14px;
   }
`

export const ContainerLogo = styled.div `
   @media (max-width: 950px) {
      flex-direction: column;

      p {
         margin: 16px 0px;
      }
   }
`
