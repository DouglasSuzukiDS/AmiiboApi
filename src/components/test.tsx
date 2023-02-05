import ControllLeft from "../assets/icons/ControllLeft"
import ControllRight from "../assets/icons/ControllRight"
import GithubSquare from "../assets/icons/GithubSquare"
import Linkedin from "../assets/icons/Linkedin"
import MagnifyingGlass from "../assets/icons/MagnifyingGlass"



export const Test = () => {
   return(
      <>
         <MagnifyingGlass w='24' h='24' />
         <Linkedin w='24' h='24' fill="var(--red-border-nitendo)" />
         <GithubSquare w='24' h='24' fill="var(--blue-border-nitendo)" />
         <ControllLeft w='24' h='24' />
         <ControllRight w='24' h='24' />
      </>
   )
}