 import Imagem from '../imagens/veterinario.jpeg'
 import Style from '../estilizacao/inicio.module.css'

 export default function(){
    return(
        <div className={Style.corpo}>
            <img className={Style.imagem} src={Imagem}></img>

            <div className={Style.texto}>
            <h1 className={Style.titulo}>Feito para você cuidar </h1>
            <h1 className={Style.subtitulo}> ainda melhor dos seus pets!</h1>
            <button className={Style.botao}>botao</button>
            </div>
           

        </div>
    )
 }