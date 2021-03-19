import React from "react";
import Link from 'next/link';
 

const BudgetFooter = () => { 
 return (
    <section class="budget budget__footer" data-aos="fade-in">
        <h3 class="budget__title">Solicite um orçamento</h3>
      
        <Link href="/#Contato">
            <a class="budget__link button button__contact"  >  Entre em contato{'>'}</a>
        </Link>
    </section>

       
 )

};

export default BudgetFooter;
