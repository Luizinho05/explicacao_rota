
import { Link } from 'react-router-dom'
//import './app.header.css'
function Header(){

    return(
        <div>
             <h1>
                  <Link to='/'>Início</Link>
                  <Link to='/Qsomos'>Quem somos</Link>

             </h1>
        </div>
    )
}

export default Header