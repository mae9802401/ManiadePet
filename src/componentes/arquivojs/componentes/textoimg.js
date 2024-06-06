import style from "./textoimg.module.css"


export default function TextoImagem(params){
    return(
        
        <div className={style.corpo}> 
        <div className={style.divflex}>  
            <img className={style.imagem} src={params.imagem} />

            <div className={style.textos}>
                
            
                <p className={style.titulotx}>   {params.titulo1} </p> 
                <p className={style.texto}> {params.texto1} </p>
                <p className={style.titulotx}>   {params.titulo2} </p> 
                <p className={style.texto}> {params.texto2} </p>
                <p className={style.titulotx}>   {params.titulo3} </p> 
                <p className={style.texto}> {params.texto3} </p>
 

              
            </div>
            </div>

            </div>
    )

}