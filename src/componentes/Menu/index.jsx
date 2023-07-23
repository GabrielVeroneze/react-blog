import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

const Menu = () => {
    return (
        <header className={styles.cabecalho}>
            <nav className={styles.cabecalho__navegacao}>
                <Link className={styles.cabecalho__link} to="/">
                    Início
                </Link>
                <Link className={styles.cabecalho__link} to="/sobremim">
                    Sobre mim
                </Link>
            </nav>
        </header>
    )
}

export default Menu
