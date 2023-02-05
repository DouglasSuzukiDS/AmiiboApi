import { useState } from "react"
import ControllLeft from "../../assets/icons/ControllLeft"
import ControllRight from "../../assets/icons/ControllRight"
import GithubSquare from "../../assets/icons/GithubSquare"
import Linkedin from "../../assets/icons/Linkedin"
import UserTieHair from "../../assets/icons/UserTieHair"
import * as Styles from "./Footes.styles"

export const Footer = () => {
   const [contactOpen, setContactOpen] = useState(false)

   const handleContactEnter = () => {
      setContactOpen(true)
   }

   const handleContactLeave = () => {
      setContactOpen(false)
   }

   return(
      <Styles.Footer className="flex column my-2">
         <p className="mb-1">
            Codado com ❤ por Doug
         </p>

         <Styles.ContainerContact className='flex mb-3'>
            <ControllLeft w='24' h='48' />

            <Styles.Span className='flex'>
               <Styles.Screen onMouseEnter={handleContactEnter} onMouseLeave={handleContactLeave}>
                  {  
                     !contactOpen ?
                        <Styles.Contact className="flex">
                           <UserTieHair w='32' h='32' fill="var(--bg-nitendo)" />
                        </Styles.Contact> :
                        <Styles.Contact className='flex'>
                           <a href="https://github.com/DouglasSuzukiDS" target="_blank" className="flex">
                              <GithubSquare w='32' h='32' fill='var(--red-border-nitendo)' className="hover-opacity" />
                           </a>

                           <a href="https://linkedin.com/in/douglas-suzuki" target="_blank" className="flex">
                              <Linkedin w='32' h='32' fill='var(--blue-border-nitendo)' className="hover-opacity" />
                           </a>
                        </Styles.Contact> 
                  }
               </Styles.Screen>

            </Styles.Span>

            <ControllRight w='24' h='48' />
         </Styles.ContainerContact>
      </Styles.Footer>
   )
}