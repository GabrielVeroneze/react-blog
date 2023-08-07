import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import Artigo from "componentes/Artigo"
import './Post.scss'
import posts from 'json/posts.json'

const Post = () => {
    const { id } = useParams()

    // Retorna o objeto que possuir o identificador igual ao valor do parâmetro "id" da URL
    const post = posts.find(post => {
        return post.id === Number(id)
    })

    if(!post) {
        return <h1>Post não encontrado...</h1>
    }

    return (
        <Artigo 
            capa={`/assets/posts/${post.id}/capa-artigo.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </Artigo>
    )
}

export default Post