import React from "react";
import Link from 'next/link';


const Budget = () => { 
 return (
    <section class="budget" data-aos="fade-up" data-aos-delay="200"  >
        <h3 class="budget__title">Solicite um orçamento</h3>
        <Link href="/#Contato">
            <a class="budget__link button button__contact"  >  Entre em contato{'>'}</a>
        </Link>
    </section>
       
 )

};

export default Budget;
