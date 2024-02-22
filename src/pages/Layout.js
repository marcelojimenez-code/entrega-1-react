import React from 'react';
import { Outlet } from "react-router-dom";
import  NavBar from "../Components/NavBar";


function Layout(props) {
    
    const parametros = props.parametros;

    console.log(parametros);

    return (

        <div>

            <NavBar />   

            <section className='hero is-primary'>
            <div className='hero-body'>
                


            <Outlet/>

            </div>
            </section>

            <footer className="footer">
            <div className="content has-text-centered">
                
                <p>
               footer
                </p>
            </div>
            </footer>

        </div>

        

    )

}

 

export default Layout;