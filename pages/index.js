 
import React from "react";
 

 

 

import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN } from '../constants';
 

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';





const httpLink = createHttpLink({
  uri: 'http://localhost:4001'
});


const authLink = setContext((_, { headers }) => {
  const token = true;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
 



// components
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Budget from "../components/Budget/Budget";
import Impact from "../components/Impact/Impact";
import Services from "../components/Services/Services";
import Service from "../components/Services/Service.jsx";
import About from "../components/About/About";
import Equipment from "../components/Equipment/Equipment";
import OurServices from "../components/OurServices/OurServices";
import BudgetFooter from "../components/Budget/BudgetFooter";
import FooterBanner from "../components/Footer/FooterBanner";
import Partners from "../components/Partners/Partners";
 
import Footer from "../components/Footer/Footer";
import OurValue from "../components/OurValue/OurValue"; 
import CreateQuote from "../components/Contact/CreateQuote"; 


 

import chatIcon from '../img/icons/chat.svg';

 


function App() {

  

  return (

    <div className="App">
    <ApolloProvider client={client}>


 
          
            <Header/>
            <Banner/>
          
      
          
            <Budget/>
            <Impact/>
            <OurServices/>
            <Services/>
          
            <About/>
            <Equipment/>
            <OurValue/>
            <BudgetFooter/>
            <FooterBanner/>
            <Partners/>
            <div className="main-container container-form">
                <CreateQuote/>
            </div>
          
            <Footer/>
            
          
          
          
            </ApolloProvider>
          </div>
            
  
 

   
  );
}

export default App;
