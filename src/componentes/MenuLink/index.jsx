import { NavLink } from 'react-router-dom'
import styles from './MenuLink.module.scss'

const MenuLink = ({ children, caminho }) => {
    return (
        <NavLink 
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles['link--ativo'] : ""}
            `}
            to={caminho}
        >
            {children}
        </NavLink>
    )
}

export default MenuLink