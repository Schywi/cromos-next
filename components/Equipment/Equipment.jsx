import React from "react";
import Image from 'next/image'


 

const About = (props) => { 
    const arr = [1,2,3,4]
 return (
    <section class="main-container equipment" id="Equipamentos">
        <h2 data-aos="fade-right"> 
            <strong>Equipamentos</strong>
        </h2>
        <div class="equipment__content">
            <div class="equipment__items" data-aos="fade-in" data-aos-delay="200">
                <Image
                    src={'/equipament/eqp1.jpg'}
                    alt="Equipamento 1"
                    width={300}
                    height={300}
                />
             
                <h6>Centro de usinagem, ROMI, modelo D600, FANUC OI-MC</h6>
                <a class="button" href="#">Veja mais</a>
            </div>
            <div class="equipment__items" data-aos="fade-in" data-aos-delay="400">
                 <Image
                    src={'/equipament/eqp2.jpg'}
                    alt="Equipamento 1"
                    width={300}
                    height={300}
                />
                <h6>FRESADORA UNIVERSAL – ATLAS</h6>
                <a class="button" href="#">Veja mais</a>
            </div>
            <div class="equipment__items" data-aos="fade-in" data-aos-delay="600">
                 <Image
                    src={'/equipament/eqp3.jpg'}
                    alt="Equipamento 1"
                    width={300}
                    height={300}
                />
                <h6>Torno Convencional- ROMI S-30B</h6>
                <a class="button" href="#">Veja mais</a>
            </div>
            <div class="equipment__items" data-aos="fade-in" data-aos-delay="800">
                 <Image
                    src={'/equipament/eqp4.jpg'}
                    alt="Equipamento 1"
                    width={300}
                    height={300}
                />
                <h6>RETIFICA PLANA MWM</h6>
                <a class="button" href="#">Veja mais</a>
            </div>
        </div>
   
</section>
 )

};

export default About;
