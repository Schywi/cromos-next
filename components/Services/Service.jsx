import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
 
import BudgetFooter from "../Budget/BudgetFooter";
import {db,db1} from '../db';
 
import Image from 'next/image'



const Services = (props) => { 
  


 return (
        <div className="wrapServices">
           
            <Header/>
                <div class="dark">
               
                    {db.map((item) => {
                        console.log(window)
                    if (typeof window !== 'undefined') { 

                        let serviceid = window.location.pathname;

                        serviceid = serviceid.split(`service/`);

                            if (serviceid[1] == item.service.id) {
                                console.log(serviceid[1] == item.service.id)
                                return (
                                    <section class="main-container services services__item">
                                        
                                            <h2 data-aos="fade-right">
                                                <strong>{item.service.title}</strong>
                                            </h2>
                                            {item.service.paragraph.map(result => {
                                                return  <p data-aos="fade-right" data-aos-delay={150}>{result}</p>
                                            })}
                                            
                    
                                            <div class="services__content "> 
                                                
                                                    { item.service.image.map(result => {
                                                           
                                                        return  <Image
                                                        class={"services__content-img" + (item.service.id)} 
                                                        alt="" 
                                                        data-aos="fade-in" data-aos-delay={200}
                                                        src={result}
                                                        alt="Equipamento 1"
                                                        width={200}
                                                        height={200}
                                                    />   
                                                        
                                                    })}
                                            </div>
                            
                                    
                                </section>
                                )
                                }
                    } 
                        
                         
                       
                    })}
               
                   
                    </div>
                <BudgetFooter/>
                <Footer/>
     </div>
   
)

};

export default Services;
