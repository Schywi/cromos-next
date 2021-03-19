import React from "react";
import logo from '../../img/logo.png';

import Image from 'next/image'

import Link from 'next/link';

const Header = (props) => { 
 return (
    <header id="Home">
        <div class="header-container">
            <div class="logo">
                
                <Image
                    src={logo}
                    alt="Equipamento 1"
                    width={300}
                    height={100}
                    />
            </div>
            <nav class="nav">
                <ul class="nav__list">
                <li class="nav__item nav__item--active"><a href="/pt/#Home">Home</a></li>
                    <li class="nav__item">
                        <Link href="/#Sobre">
                                <a  >  Sobre</a>
                        </Link>
                        </li>
                    <li class="nav__item">
                        
                            <Link href="/#Servicos">
                                    <a  >  Serviços</a>
                            </Link>
                    </li>
                    <li class="nav__item">
                        
                    <Link href="/#Equipamentos">
                                    <a  >  Equipamentos</a>
                            </Link>
                    
                    </li>
                    <li class="nav__item">
                        
                    <Link href="/#Contato">
                                    <a  >  Contato</a>
                            </Link>
                    
                    </li>
                   
                       
                
                    
                            
                    </ul>
            </nav>
        </div>
  </header>

 )

};

export default Header;
