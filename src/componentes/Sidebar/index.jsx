import Logo from './assets/Logo.svg';
import feed from './assets/feed.svg';
import account_circle from './assets/account_circle.svg';
import info from './assets/info.svg';
import logout from './assets/logout.svg';
import './styles.css';

export default function Sidebar(){
    return(
        <aside>
            <img src={Logo} alt="Logo do CodeConnect" />
            <nav>   
                <ul className='lista-sidebar'>
                    <li>
                        <a href='#' className='item__linkpublicacao'>Publicar</a>
                    </li>
                    <li>
                        <a href='#' className='item__link item__link--ativo'>
                            <img src={feed} alt='' />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={account_circle} alt='' />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={info} alt='' />
                            <span>Sobre Nós</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={logout} alt='' />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}