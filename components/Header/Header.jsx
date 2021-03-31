import React from "react";


import Image from 'next/image'
 
import Link from 'next/link';

const Header = (props) => { 
 return (
    <header id="Home">
        <div class="header-container">
            <div class="logo">
            <Link href="/">
                 <a  >  
                 <Image
                    src={'/logo.png'}
                    alt="Equipamento 1"
                    width={400}
                    height={150}
                    /> 
                </a>
        
        
         </Link>
              
            </div>
            <nav class="nav">
                <ul class="nav__list">
                <li class="nav__item nav__item--active">
                        
                         <Link href="/">
                                <a  >  Home</a>
                        </Link>
                        
                        </li>


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
