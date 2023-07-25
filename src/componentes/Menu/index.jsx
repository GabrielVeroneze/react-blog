import styles from './Menu.module.scss'
import MenuLink from '../MenuLink'

const Menu = () => {
    return (
        <header className={styles.cabecalho}>
            <nav className={styles.cabecalho__navegacao}>
                <MenuLink caminho='/'>
                    Início
                </MenuLink>
                <MenuLink caminho='/sobremim'>
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu
