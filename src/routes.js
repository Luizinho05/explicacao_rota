import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Qsomos from './pages/Qsomos'
import Header from './components/Header'

function Rotas(){
    
    return(
         <BrowserRouter>
              <Routes>
              <Header />
                   <Route path='/' element={ <Inicio/> }/>
                   <Route path='/Qsomos' element={ <Qsomos/> }/>
              </Routes>
         </BrowserRouter>
    )
}

export default Rotas