import { BrowserRouter,Route,Routes } from "react-router-dom"
import Cabecalho from '../componentes/arquivojs/cabecalho'
import Duvidas from "../componentes/arquivojs/duvidas"
import Inicio from "../componentes/arquivojs/Inicio"

export default function Rotas(){
    return(

        <BrowserRouter> 
    
        
        <Routes>

            <Route 
             path="/duvidas"
            element={<Duvidas 
            titulo="Lesly lindissima"
             texto="kdddddddddddddoedeijffjfejfivnijfrijdsjoigjsjv
             oifgrfs0igir9gogjjg9gkgggggggggggggggggggggggggggggjjj
             jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjooooooooo
             oooooooooooooooooooooooooooooooooooaaaaaaaaaaaaaaaaaaaaaa
             aaaaaoooooooooooooojjrgj9"/>}/> 
            <Route path="/" element={<Inicio/>}/>
            

        </Routes>

        </BrowserRouter>

    )

}