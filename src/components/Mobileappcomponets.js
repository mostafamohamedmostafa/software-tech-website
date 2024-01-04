import Mobileintro from "../images/mobile-intro.jpg"
import apptech from "../images/app-tech.jpg"
import { Mobiletech_data } from "./Webistedata";
function IntroMobileapp() {
    return (

        <section className="container-fluid">
            <div className="IntroMobileapp ">
     
            <div className="text-center">
                    <h1>Mobile Applications Development</h1>
                    <h4>Lorem hendrerit laoreet. Integer scelerisque dapibus quam!</h4>
                </div>
                <div className="card-group">
                    <div className="card">
                        <img src={Mobileintro} className="card-img-top" alt="..." />


                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
Aenean elementum, velit at porttitor pretium, elit libero condimentum purus, sed pharetra eros velit vitae leo. Phasellus rhoncus, sem in finibus dignissim, nunc urna semper ante, eget viverra mi nisl vitae lectus. Nam sed ullamcorper justo, vitae consequat ante.</p>
                            <p className="card-text">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin ac ultricies ex, in finibus libero. Donec vehicula rhoncus bibendum. Donec porta sollicitudin mauris, at sodales lacus aliquet a. Praesent mollis tempus ante eget dapibus. Phasellus cursus ultrices nisi, quis auctor sapien posuere in</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>

    );
}

function MobileTechnologies() {
    return (

        <section className="container-fluid">
            <div className="MobileTechnologies ">


                <div className="card-group">

                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-text">Technologies used</h2>
 
                            <h3 className="card-text">Software development kits:</h3>
                            <p className="card-text">iOS SDK, Android SDK, Windows Phone SDK</p>


                            <h3 className="card-text">Development tools:</h3>
                            <p className="card-text">SQLite, Core Data, Lucene</p>


                        


                        </div>

                    </div>


                    <div className="card">
                        <img src={apptech} className="card-img-top" alt="..." />


                    </div>

                </div>


            </div>
        </section>

    );
}


function MobileBenefits() {
    return (

        <section className="container-fluid">
            <div className="Benefits  ">
                <h3 className="text-center">Benefits of web application development with us</h3>


                <div className="row  row-cols-md-2 g-4 ">



                    { Mobiletech_data.map(( Mobiletech_data_Imported, index) => {
                        return (

                            <div className="col" key={index}>
                                <div className="card h-100 ">

                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={ Mobiletech_data_Imported.img} className="img-fluid rounded-start" alt={ Mobiletech_data_Imported.alt} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{ Mobiletech_data_Imported.title}</h5>
                                                <p className="card-text">{ Mobiletech_data_Imported.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        )
                    })}






                </div>



            </div>
        </section>

    );
}


export {IntroMobileapp , MobileTechnologies , MobileBenefits};
