import React from "react";
import Image from 'next/image';


const FooterBanner = (props) => { 
 return (
    <section class="footer-banner" data-aos="fade-in">
           <Image
                class="banners"
                src={"/banners/b" + 3+ ".jpeg"}
                alt="Equipamento 1"
                layout='fill'
                objectFit='cover'
                objectPosition='center'

                />
        <div class="footer-banner__wrap">
            <h2> A mais de 23 Anos no Mercado</h2>
            <h3> <strong>CROMOS MECÂNICA</strong></h3>
        </div>
    
    </section>
 )

};

export default FooterBanner;
