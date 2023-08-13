import PostCard from "componentes/PostCard"
import styles from './Inicial.module.scss'
import posts from 'json/posts.json'


const Inicial = () => {
    return (
        <ul className={styles.posts}>
            {posts.map(post => <PostCard key={post.id} {...post} />)}
        </ul>
    )
}

export default Inicial