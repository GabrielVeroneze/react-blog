import { useParams } from "react-router-dom"

const Post = () => {
    const parametros = useParams()

    console.log(parametros)

    return (
        <div>Post {parametros.id}</div>
    )
}

export default Post