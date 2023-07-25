import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.scss'

const MenuLink = ({ children, caminho }) => {
    const localizacao = useLocation()

    return (
        <Link 
            className={`
                ${styles.link}
                ${localizacao.pathname === caminho ? styles['link--ativo'] : ''}
            `}
            to={caminho}
        >
            {children}
        </Link>
    )
}

export default MenuLink