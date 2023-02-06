import { useEffect, useState, ChangeEvent } from "react"
import { AmiiboType } from "../../types/AmiiboType"
import axios from 'axios'
import * as Style from "./Main.styles"
import MagnifyingGlass from "../../assets/icons/MagnifyingGlass"
import ControllRight from "../../assets/icons/ControllRight"
import ControllLeft from "../../assets/icons/ControllLeft"

export const Main = () => {
   const AmiiboApi = require('../../api/AmiiboApi.json')

   const [amiibos, setAmiibos] = useState<AmiiboType[]>([])
   const [findAmiibos, setFindAmiibos] = useState<AmiiboType[]>([])
   const [loading, setLoading] = useState(false)
   const [inputSearch, setInputSearch] = useState(false)

   useEffect(() => {
      getAmiibos()
   }, [])

   const getAmiibos = async () => {
      setLoading(true)
      await axios.get('https://amiiboapi.com/api/amiibo/?amiiboSeries=Super%20Smash%20Bros.')
         .then(response => {
            // setAmiibos(JSON.parse(response.data))
            setAmiibos(response.data.amiibo)
            setFindAmiibos(response.data.amiibo)
         })
         .catch(err => {
            // Caso não consiga fazer a requição para API ONLINE, a aplicação usará o JSON local que é o mesmo da requição.
            console.log(`Erro: ${err}`)
            setAmiibos(AmiiboApi.amiibo)
            setFindAmiibos(AmiiboApi.amiibo)
         })

      setLoading(false)
   }

   const handleInputSearchEnter = () => {
      setInputSearch(true)
   }

   const handleInputSearchLeave = () => {
      let input = document.querySelector('#input') as HTMLInputElement

      if(input.value !== '') {
         setInputSearch(true) // Mantera o campo aberto caso tiver algo digitado
      } else {
         setInputSearch(false) // Se não tiver nada no campo, ele fechara
         setFindAmiibos(amiibos)
      }
   }

   const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      let valueSearch = (e.target.value).toLocaleLowerCase()
      // console.log(`ToLower: ${valueSearch}`)
      let search = valueSearch.replace(valueSearch[0], valueSearch[0].toLocaleUpperCase()) // 1 letra maiuscula
      // console.log(search)

      if(valueSearch === '') {
         setFindAmiibos(amiibos)
      } else {
         setFindAmiibos(
            amiibos.filter(character => character.name.includes(search))
         )
      }
   }

   return (
      <>
         <Style.ContainerSearch className='flex mt-2'>
            <ControllLeft w='24' h='48' />
            <Style.Span className='flex'>
               <Style.Screen onMouseEnter={handleInputSearchEnter} onMouseLeave={handleInputSearchLeave}>
                  {
                     !inputSearch ?
                        <Style.InputSearchClose className='flex'>
                           <MagnifyingGlass w='32' h='32' fill='var(--bg-nitendo)' />
                        </Style.InputSearchClose> :
                        <input type="text" placeholder='Faça sua busca' onChange={handleSearch} id='input' />
                  }
               </Style.Screen>

            </Style.Span>

            <ControllRight w='24' h='48' />
         </Style.ContainerSearch>

         <Style.Main className="flex">
            <Style.ContainerCards className="flex">
               {loading ?
                  <h1 className="inv-degrade">Carregando ...</h1> :

                  findAmiibos.map((el, index) => (
                     <Style.Card key={index}>
                        <Style.Item className="flex column">
                           <Style.Img src={el.image} />
                           <Style.Name>{el.name}</Style.Name>
                        </Style.Item>

                        <Style.Desc>
                           <p>{el.gameSeries}</p>
                           <p>{el.amiiboSeries}</p>
                           <p>Release date: {el.release.jp}</p>
                        </Style.Desc>
                     </Style.Card>
                  ))
               }
            </Style.ContainerCards>
         </Style.Main>
      </>
   )
}