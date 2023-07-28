import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'
import styles from './Banner.module.scss'

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.banner__conteudo}>
                <h1 className={styles.banner__titulo}>React Blog</h1>
                <p className={styles.banner__texto}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    possimus hic minima sunt similique quasi ipsum nemo, dolore
                    fuga error ducimus labore incidunt id laborum :)
                </p>
            </div>
            <div className={styles.banner__imagem}>
                <img
                    className={styles['banner__imagem--circulo']}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className={styles['banner__imagem--foto']}
                    src={minhaFoto}
                    alt='Foto da silhueta de uma pessoa'
                />
            </div>
        </section>
    )
}

export default Banner
