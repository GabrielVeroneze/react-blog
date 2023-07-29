import Banner from "componentes/Banner"
import Post from "componentes/Post"
import styles from './Inicio.module.scss'
import posts from 'json/posts.json'


const Inicio = () => {
    return (
        <main className={styles.principal}>
            <Banner />
            <ul className={styles.posts}>
                {posts.map(post => <Post key={post.id} {...post} />)}
            </ul>
        </main>
    )
}

export default Inicio