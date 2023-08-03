import Artigo from 'componentes/Artigo'
import sobreCapa from 'assets/sobre_mim_capa.png'
import sobreFoto from 'assets/sobre_mim_foto.png'
import styles from './SobreMim.module.scss'

const SobreMim = () => {
    return (
        <Artigo capa={sobreCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>Olá, eu sou o Gabriel!</h3>
            <img className={styles.imagem} src={sobreFoto} alt="Foto da silhueta de uma pessoa" />
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus ligula eu felis.
            </p>
            <p className={styles.paragrafo}>
                Etiam efficitur leo nisl, in elementum erat pharetra id. Aliquam laoreet tincidunt dui, et eleifend mauris fringilla at. Vestibulum sit amet condimentum ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla laoreet a nibh nec vestibulum. Sed mattis sapien ut sem elementum, et posuere lacus luctus. Vivamus vel est vel turpis.
            </p>
            <p className={styles.paragrafo}>
                Vivamus sit amet metus in lacus consequat volutpat at nec nunc. Quisque laoreet odio vel tortor ultricies, ac auctor turpis venenatis. Nunc euismod nisl ac quam tempor, vitae tempus sapien luctus. Integer vel nunc id mauris laoreet egestas eu ut nulla. Nunc egestas, justo a malesuada ultrices, enim nisl consectetur velit.
            </p>
            <p className={styles.paragrafo}>
                Nunc sed augue lacinia, egestas neque id, fermentum turpis. Suspendisse potenti. In nec sem id dui convallis maximus a eu tellus quisque auctor.
            </p>
            <p className={styles.paragrafo}>
                Suspendisse eget est eu elit bibendum laoreet. Mauris id massa vel mi elementum tristique. Nunc euismod, turpis in tempus semper, mauris lacus aliquam odio, vel pharetra lectus elit eu nisi. Donec eu turpis a erat hendrerit interdum, donec eu diam lectus integer.
            </p>
            <p className={styles.paragrafo}>
                Fusce tempor scelerisque ex, ac tincidunt odio vehicula nec. Nunc sit amet nulla id sem ultrices tempus. Etiam nec nunc nec purus malesuada luctus. Integer venenatis dui in odio dictum, eu luctus nulla suscipit. Fusce ut finibus est. Vivamus nec lacus sem. In convallis ac tortor non pellentesque.
            </p>
        </Artigo>
    )
}

export default SobreMim
