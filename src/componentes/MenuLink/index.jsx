import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.scss'

const MenuLink = ({ caminho, texto }) => {
    const localizacao = useLocation()

    console.log(caminho);
    console.log(texto);

    return (
        <Link className={styles.link} to={caminho}>
            {texto}
        </Link>
    )
}

export default MenuLink