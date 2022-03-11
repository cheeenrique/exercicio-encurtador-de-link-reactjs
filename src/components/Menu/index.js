// Importações //
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// CSS //
import './menu.css';

export default function Menu(){
    return(
        <div className="menu">
            <a className="social" href="https://www.instagram.com/c.heeenrique">
                <BsInstagram size={24} color="#FFF" />
            </a>

            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    );
}