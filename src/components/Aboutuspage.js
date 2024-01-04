import Intro_about from "./Intro-about";
import ClientOriented from "./ClientOriented_About"
import Mission_About from "./Mission_About"
import Vision_About from "./Vision_About";
import Nav from "./Nav";
function Aboutusspage() {
    return (

       
        <section>
         
            <div className="About-us-page ">
                <Intro_about/>
                <ClientOriented/>
                <Mission_About/>
                <Vision_About/>
    
           
            </div>
        </section>

    );
}

export default Aboutusspage;
