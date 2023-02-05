import styled from "styled-components";

// Input Area

export const ContainerSearch = styled.div`
   /* height: 100px; */
`


export const Span = styled.span`
   background-color: var(--bg-nitendo);
   border: 1px solid var(--bg-border-nitendo);
   `

export const Screen = styled.span`
   padding: 4px;
   /* width: 100%; */
   
   input {
      background-color: var(--sc-nitendo);
      border: 1px solid var(--sc-border-nitendo);
      color: var(--bg-nitendo);
      outline: none;
      height: 40px;
      font-size: 24px;
      font-weight: bold;
      padding: 4px 8px;
      transition: .2;
      text-align: center;
      width: auto;

      ::placeholder {
         color: var(--bg-nitendo);
      }
   }
`

export const InputSearchClose = styled.span`
   background-color: var(--sc-nitendo);
      border: 1px solid var(--sc-border-nitendo);
      color: var(--bg-nitendo);
      height: 40px;
      padding: 4px 8px;
`

// Container Cards
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
   font-family: 'Bauhaus';
   /* font-size: 10px; */
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
   letter-spacing: 1px;
`

export const Img = styled.img `
   width: 150px;
   height: 180px;
`
export const Desc = styled.div`
`

