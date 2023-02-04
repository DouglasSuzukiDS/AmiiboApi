import styled from "styled-components";

export const Main = styled.main`
   border: 2px solid var(--blue-nitendo);
   border-radius: 8px;
   max-width: 1024px;
   /* height: 100%; */
   margin: 16px 16px 4px 16px;
   transition: .2 ease;
`

export const ContainerCards = styled.div`
   width: 100%;
   height: 450px;
   gap: 16px;
   padding: 16px;
   
   flex-wrap: wrap;
   flex: 1;

   overflow-y: auto;
   scroll-behavior: smooth;

   &::-webkit-scrollbar {
      width: 8px; /* width of the entire scrollbar */
   }

   &::-webkit-scrollbar-track {
      background: var(--red-nitendo); /* color of the tracking area */
      border-radius: 8px;
   }

   &::-webkit-scrollbar-thumb {
      background: var(--blue-nitendo); /* color of the scroll thumb */
      border-radius: 8px; /* roundness of the scroll thumb */
      height: 160px;
      /*border: 2px solid var(--bg-nitendo);  /* creates padding around scroll thumb */
   }

   h1 { 
      font-size: 40px; 
      font-style: italic 
   }
`


export const Card = styled.div`
   border: 1px solid var(--blue-nitendo);
   border-radius: 4px;
   padding: 8px;
   transition: .2 ease;

   &:nth-child(even) {
      color: var(--blue-nitendo);
   }

   &:nth-child(odd) {
      color: var(--red-nitendo);
   }
   
   &:hover {
      scale: 1.08;
      box-shadow: 2px 2px 8px var(--blue-nitendo);
   }
`

export const Item = styled.div``

export const Name = styled.p`
   font-size: 18px;
   font-weight: bold;
   text-align: center;
`

export const Img = styled.img `
   width: 150px;
   height: 180px;
`
export const desc = styled.div``

