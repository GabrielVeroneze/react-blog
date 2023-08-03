import PostCard from "componentes/PostCard"
import styles from './Inicio.module.scss'
import posts from 'json/posts.json'


const Inicio = () => {
    return (
        <ul className={styles.posts}>
            {posts.map(post => <PostCard key={post.id} {...post} />)}
        </ul>
    )
}

export default Inicio