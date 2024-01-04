import Contactus from "./Contactus";
import Hero from "./Hero";
import Nav from "./Nav";
import Projects from "./Projects";
import Services from "./Services";
import Whyus from "./Whyus";

function Homepage() {
    return (

        <section>
            <div className="Home ">
        
           <Hero/>
           <Services/>
           <Whyus/>
           <Projects/>
            
            </div>
        </section>

    );
}

export default Homepage;
