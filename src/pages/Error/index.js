// Importações //
import { Link } from 'react-router-dom';

// CSS //
import './error.css';

export default function Error(){
    return(
        <div className="container-error">
            <img src="notfound.svg" alt="Página não encontrada!" />
            <h1 className="title">Página não encontrada!</h1>
            <Link to="/">
                Voltar para home
            </Link>   
        </div>
    );
}