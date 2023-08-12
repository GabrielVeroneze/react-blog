import { Route, Routes, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import NaoEncontrada from "paginas/NaoEncontrada"
import EstruturaPadrao from "componentes/EstruturaPadrao"
import Recomendados from "componentes/Recomendados"
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
        return <NaoEncontrada />
    }

    return (
        // Utiliza os componentes <Routes> e <Route> para implementar a estrutura padrão dentro do componente 'Post', evitando que a página não encontrada use dessa estrutura 
        <Routes>
            <Route path="*" element={<EstruturaPadrao />}>
                <Route index element={
                    <Artigo 
                        capa={`/assets/posts/${post.id}/capa-artigo.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                        <Recomendados />
                    </Artigo>
                } />
            </Route>
        </Routes>
    )
}

export default Post