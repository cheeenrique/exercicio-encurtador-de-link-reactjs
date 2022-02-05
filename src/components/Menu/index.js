// Importações //
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// CSS //
import './menu.css';

export default function Menu(){
    return(
        <div className="menu">
            <a className="social" href="https://www.youtube.com.br">
                <BsYoutube size={24} color="#FFF" />
            </a>
            <a className="social" href="https://www.instagram.com">
                <BsInstagram size={24} color="#FFF" />
            </a>

            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    );
}