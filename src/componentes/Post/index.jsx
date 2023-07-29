import Botao from 'componentes/Botao'
import styles from './Post.module.scss'

const Post = ({ id, titulo }) => {
    return (
        <li className={styles.post}>
            <img 
                className={styles.post__capa}
                src={`/assets/posts/${id}/capa.png`}
                alt="Imagem de capa do post"
            />
            <div className={styles.post__conteudo}>
                <h2 className={styles.post__titulo}>{titulo}</h2>
                <Botao texto='Ler' />
            </div>
        </li>
    )
}

export default Post