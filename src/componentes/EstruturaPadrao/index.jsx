import Banner from "componentes/Banner"
import { Outlet } from "react-router-dom"

const EstruturaPadrao = () => {
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}

export default EstruturaPadrao