import { useEffect, useState } from "react"
import { AmiiboType } from "../../types/AmiiboType"
import axios from 'axios'
import * as Style from "./Main.styles"

export const Main = () => {
   const AmiiboApi = require('../../api/AmiiboApi.json')  

   const [amiibos, setAmiibos] = useState<AmiiboType[]>([])
   const [findAmiibo, setFindAmiibo] = useState<AmiiboType[]>([])
   const [loading, setLoading] = useState(false)
 
   useEffect(() => {
     getAmiibos()
   }, [])
   
   const getAmiibos = async() => {
      setLoading(true)
      await axios.get('https://amiiboapi.com/api/amiibo/?amiiboSeries=Super%20Smash%20Bros.')
       .then(response => {
         // setAmiibos(JSON.parse(response.data))
         setAmiibos(response.data.amiibo)
         setFindAmiibo(response.data.amiibo)
       })
       .catch(err => {
         // Caso não consiga fazer a requição para API ONLINE, a aplicação usará o JSON local que é o mesmo da requição.
         console.log(`Erro: ${err}`)
         setAmiibos(AmiiboApi.amiibo)
         setFindAmiibo(AmiiboApi.amiibo)
       })
 
 
     setLoading(false)
   }

   return(
      <Style.Main className="flex">
         <Style.ContainerCards className="flex">
            { loading ?
               <h1 className="inv-degrade">Carregando ...</h1> :
               
               amiibos.map((el, index) => (
                  <Style.Card key={index}>
                     <Style.Item  className="flex column">
                        <Style.Img src={ el.image } />
                        <Style.Name>{ el.name }</Style.Name>
                     </Style.Item>

                     <Style.desc>

                     </Style.desc>
                  </Style.Card>
               ))
            }
         </Style.ContainerCards>
      </Style.Main>
   )
}