import styles from './Menu.module.scss'

const Menu = () => {
    return (
        <header className={styles.cabecalho}>
            <nav className={styles.cabecalho__menu}>
                <a className={styles.cabecalho__link} href="/">Início</a>
                <a className={styles.cabecalho__link} href="/sobremim">Sobre mim</a>
            </nav>
        </header>
    )
}

export default Menu