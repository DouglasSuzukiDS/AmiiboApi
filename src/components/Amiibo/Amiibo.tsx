import { ChangeEvent, useState } from 'react'
import ControllLeft from '../../assets/icons/ControllLeft'
import ControllRight from '../../assets/icons/ControllRight'
import LogoAmiibo from '../../assets/icons/LogoAmiibo'
import MagnifyingGlass from '../../assets/icons/MagnifyingGlass'
import * as Style from './Amiibo.styles'


export const Amiibo = () => {
   

   return(
      <Style.Container className='flex column'>

         <Style.ContainerLogo className='flex'>
            <LogoAmiibo w='291' h='63' className='flex' />
            <Style.P>Super Smash Bros. amiibo Caracterer Lineup</Style.P>
         </Style.ContainerLogo>

      </Style.Container>
   )
}