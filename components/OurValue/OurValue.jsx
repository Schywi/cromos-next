import React from "react";
import Image from 'next/image';


const OurValue = (props) => { 
 return (
     <section class="main-container wrap-background not-hidden">
        
        <div class="main-container__wrap">

        <div class="main-container__image  fix-vision  " data-aos="fade-in" data-aos-delay="600">
            
             <Image
                class="banners"
                src={"/banners/b" + 3+ ".jpeg"}
                alt="Equipamento 1"
                layout='fill'
                objectFit='cover'
                objectPosition='center'

                />
            <div class="main-container__image-text main-container__content  main-container__wrap-content not-hidden">
                <h3>Política de qualidade</h3>
                <p>
                A Cromos Mêcanica promove a melhoria continua para atender a necessidade de nossos clientes, garantindo sua satisfação e buscando superar as expectativas, através da nossa atuação em equipe e do trabalho eficiente para alcançar a excelência nos resultados. 
                </p>
            </div>
        </div>
        
        <div class="main-container__image  fix-vision " data-aos="fade-in" data-aos-delay="400">
        <Image
                class="banners"
                src={"/banners/b" + 3+ ".jpeg"}
                alt="Equipamento 1"
                layout='fill'
                objectFit='cover'
                objectPosition='center'

                />
            <div class="main-container__image-text main-container__content  main-container__wrap-content wrap-padding">
                <h3>Nossa Missão</h3>
                <p>
                Atender as necessidades do nosso cliente, garantir a sua satisfação e superar suas expectativas, através da nossa atuação em equipe e do trabalho eficiente para alcançar a excelência nos resultados. 
                </p>
            </div>
        </div>
        <div class="main-container__image fix-vision  " data-aos="fade-in" data-aos-delay="200">
            <Image
                class="banners"
                src={"/banners/b" + 3+ ".jpeg"}
                alt="Equipamento 1"
                layout='fill'
                objectFit='cover'
                objectPosition='center'

                />
            <div class="main-container__image-text main-container__content  main-container__wrap-content wrap-padding">
                <h3>Nossa Missão</h3>
                <p>
                Ser referência em fabricação e fornecimento de dispositivos de controle dimensional no estado de Minas Gerais por meio da garantia do controle de qualidade do processo e do produto. 
                </p>
            </div>
        </div>

        </div>

    </section>
 
    ) 

};

export default OurValue;
