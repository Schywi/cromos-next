import '../styles/css/style.css';
 
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
 

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms

  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;