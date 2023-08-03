import styles from './PostCard.module.scss'
import { Link } from 'react-router-dom'

const PostCard = ({ id, titulo }) => {
    return (
        <li className={styles.card}>
            <img
                className={styles.card__capa}
                src={`/assets/posts/${id}/capa.png`}
                alt="Imagem de capa do post"
            />
            <div className={styles.card__conteudo}>
                <h2 className={styles.card__titulo}>{titulo}</h2>
                <Link className={styles.card__botao} to={`/posts/${id}`}>
                    Ler
                </Link>
            </div>
        </li>
    )
}

export default PostCard