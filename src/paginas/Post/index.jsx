import { useParams } from "react-router-dom"
import Artigo from "componentes/Artigo"
import posts from 'json/posts.json'

const Post = () => {
    const { id } = useParams()

    const post = posts.find(post => {
        return post.id === Number(id)
    })

    return (
        <Artigo 
            capa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            texto...
        </Artigo>
    )
}

export default Post