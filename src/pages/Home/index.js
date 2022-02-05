// Importações //
import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
import Api from '../../service/api';
import { saveLink } from '../../service/storeLinks';

// CSS //
import './home.css';

export default function Home(){

    // Declara o link que receberá do input //
    const [link, setLink] = useState('');

    // Declara o retorno do link encurtado //
    const [data, setData] = useState('');

    // Declara a exbição do modal //
    const [showModal, setShowModal] = useState(false);

    // Função que realiza o encurtamento do link //
    async function handleShortLink(){
        try{
            const response = await Api.post('/shorten', { 
                long_url: link 
            })

            setData(response.data);
            setShowModal(true);
            saveLink('@encurtaLink', response.data);
            setLink('');
        }catch{
            alert("Ops parece que alo deu errado");
            setLink('');
        }
        
    }
    // Fim //

    return(
        <div className="container-home">
            <div className="logo">
               <img src="/logo.svg" alt="Logo"/>
               <h1 className="title">Encurtador de Url</h1>
               <span>Cole seu link para encurtar</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="#FFF" />
                    <input
                        placeholder="Cole seu link aqui..."
                        value={link}
                        onChange={ (e) => setLink(e.target.value) }
                    />
                </div>

                <button onClick={handleShortLink}>Gerar Link</button>
            </div>

            <Menu/>


            {showModal && (
                <LinkItem
                    closeModal={ () => setShowModal(false) }
                    content={data}
                />
            )}
        </div>
    );
} 