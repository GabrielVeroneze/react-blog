import styles from './NaoEncontrada.module.scss'
import erro404 from 'assets/erro_404.png'

const NaoEncontrada = () => {
    return (
        <section className={styles.erro}>
            <div className={styles.erro__codigo}>404</div>
            <h3 className={styles.erro__titulo}>Ops! Página não encontrada.</h3>
            <p className={styles.erro__texto}>
                Tem certeza de que era isso que você estava procurando?<br />
                Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>
            <div className={styles.erro__container}>
                <button className={styles.erro__botao}>Voltar</button>
                <img className={styles.erro__imagem} src={erro404} alt="" />
            </div>
        </section>
    )
}

export default NaoEncontrada