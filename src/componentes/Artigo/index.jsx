import styles from './Artigo.module.scss'

const Artigo = ({ children, capa, titulo }) => {
    return (
        <article className={styles.artigo}>
            <div
                className={styles.artigo__capa}
                style={{ backgroundImage: `url(${capa})` }}
            ></div>
            <h2 className={styles.artigo__titulo}>{titulo}</h2>
            <div className={styles.artigo__conteudo}>{children}</div>
        </article>
    )
}

export default Artigo
