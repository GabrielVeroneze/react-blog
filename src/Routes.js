import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/reset.css'
import './styles/estilosGlobais.scss'
import Inicial from 'paginas/Inicial';
import SobreMim from './paginas/SobreMim';
import Post from 'paginas/Post';
import NaoEncontrada from 'paginas/NaoEncontrada';
import ScrollToTop from 'componentes/ScrollToTop';
import Menu from './componentes/Menu';
import Rodape from 'componentes/Rodape';
import EstruturaPadrao from 'componentes/EstruturaPadrao';


function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Menu />
            <Routes>
                <Route path='/' element={<EstruturaPadrao />}>
                    <Route index element={<Inicial />}  />    
                    <Route path='sobremim' element={<SobreMim />} />
                </Route>
                <Route path='posts/:id/*' element={<Post />} />
                <Route path='*' element={<NaoEncontrada />} />
            </Routes>         
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes
