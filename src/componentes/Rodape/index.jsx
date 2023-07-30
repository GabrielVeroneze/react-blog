import styles from './Rodape.module.scss'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            <p className={styles.rodape__texto}>
                Desenvolvido por <a href="https://github.com/GabrielVeroneze" target='_blank' rel='noreferrer'>Gabriel</a>.
            </p>
        </footer>
    )
}

export default Rodape
