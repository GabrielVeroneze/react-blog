import { useParams } from 'react-router-dom'
import styles from './Recomendados.module.scss'
import PostCard from 'componentes/PostCard'
import posts from 'json/posts.json'

const Recomendados = () => {
    const { id } = useParams()

    const postsRecomendados = posts
        .filter(post => post.id !== Number(id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        <section className={styles.recomendados}>
            <h3 className={styles.recomendados__titulo}>Outros posts que você pode gostar:</h3>
            <ul className={styles.recomendados__posts}>
                {postsRecomendados.map(post => {
                    return <PostCard key={post.id} {...post} />    
                })}
            </ul>
        </section>
    )
}

export default Recomendados
