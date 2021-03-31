import React from "react";

import Image from 'next/image';
 

const FooterBanner = (props) => { 
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12]
 return (
    <section class="partners">
        <h2 data-aos="fade-right">
            <strong>Partner Companies</strong>
        </h2>

    
    <div class="partners__content">
    {arr.map(item => {
    
        return (
            <div class="partners__items"  data-aos="fade-in" data-aos-delay="400">
            <a  href="">
            <Image
                src={"/partners/" + item+ ".jpg"}
                alt="Equipamento 1"
                 width={150}
                 height={150}
                />
            </a>
        </div>
        )
        


    })}
        
        
    </div>
   
</section>
 )

};

export default FooterBanner;
