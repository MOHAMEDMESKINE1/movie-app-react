import React from 'react';
import NavbarLayout from './NavbarLayout';
import  Footer  from '../layouts/Footer'
function Layout( {children}) {
  return (
    <div>
      <header>
    
      <NavbarLayout/>
      </header>


      <main className=" mx-auto ">

       {children}

      </main>
     


     <div className="">
      <Footer/>
     </div>
     

   
    </div>
    
  );
}

export default Layout;
