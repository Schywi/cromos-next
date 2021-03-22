import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import BudgetFooter from "../../components/Budget/BudgetFooter";
import {db,db1} from '../../components/db';
import {useRouter} from 'next/router'; 




const Services = (props) => { 
  
    const router = useRouter();
    const id = router.query.id;
    console.log(id)

 return (
        <div className="wrapServices">
           
            <Header/>
                <div class="dark">
                    {db.map((item) => {
                      
                    if (typeof window !== 'undefined') { 

    

                            if (id == item.service.id) {
                                console.log("teste" , id== item.service.id)
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
                                                                
                                                        return   <img class={"services__content-img" + (item.service.id)} src={result} alt="" data-aos="fade-in" data-aos-delay={200}/>
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
