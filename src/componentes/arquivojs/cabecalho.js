import style from '../estilizacao/cabecalho.module.css'
import Logo from '../imagens/logo_fundo.jpeg'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default function cabecalho(){
    return (
        <div className={style.cabecalho}>
            <img className={style.imagem} src={Logo}/> 
            <div className={style.nomeempresa}>
            <h1 className={style.texto}>Mania de</h1>
            <h1 className={style.texto2}> Pets</h1>
            </div>
            <h1 className={style.direcionador}>Home</h1>
            <h1 className={style.direcionador}>Cadastro</h1>
            <h1 className={style.direcionador}>Dúvidas</h1>
            <h1 className={style.direcionador}>Parcerias</h1>
            <h1 className={style.direcionador}>Contatos</h1>
        

            <button className={style.insta}> Acesse nosso instagram!!</button>
           
        </div>


    )
}