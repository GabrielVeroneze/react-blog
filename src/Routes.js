import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/reset.css'
import './styles/estilosGlobais.scss'
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './componentes/Menu';
import Rodape from 'componentes/Rodape';
import EstruturaPadrao from 'componentes/EstruturaPadrao';


function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<EstruturaPadrao />}>
                    <Route path='/' element={<Inicio />}  />    
                    <Route path='/sobremim' element={<SobreMim />} />
                </Route>
                <Route path='*' element={<div>Página não encontrada</div>}/>
            </Routes>         
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes
