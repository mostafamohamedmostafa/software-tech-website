import webtech1 from "../images/web-tech-1.jpg"
import webtech2 from "../images/web-tech-2.jpg"
import handshake1 from "../images/handshake1.jpg"

import { Webtech_data } from "./Webistedata"


function IntroWebtechapp() {
    return (

        <section className="container-fluid">
            <div className="IntroWebtechapp ">

                <div className="text-center">
                    <h1>Web Application Development</h1>
                    <h4>When we do web application development, we believe they should be beautiful, functional, easy to use and responsive.</h4>
                </div>
                <div className="card-group">
                    <div className="card">
                        <img src={webtech1} className="card-img-top" alt="..." />


                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">Nam ut dolor ullamcorper, imperdiet nunc vitae, pellentesque purus. Nulla ut turpis sed leo ornare consectetur. Duis vulputate eu risus eu sollicitudin. Mauris nisi lectus, pharetra eget leo id, hendrerit ultricies magna. Duis bibendum quam in elit accumsan!</p>
                            <p className="card-text">Nam ut dolor ullamcorper, imperdiet nunc vitae, pellentesque purus. Nulla ut turpis sed leo ornare consectetur. Duis vulputate eu risus eu sollicitudin. Mauris nisi lectus, pharetra eget leo id, hendrerit ultricies magna. Duis bibendum quam in elit accumsan!</p>
                        </div>

                    </div>

                </div>


            </div>
        </section>

    );
}



function Technologies() {
    return (

        <section className="container-fluid">
            <div className="Technologies ">


                <div className="card-group">

                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-text">Front-end:</h3>
                            <p className="card-text">AngularJS, Twitter Boostrap, HTML5/CSS3</p>

                            <h3 className="card-text">Back-end:</h3>
                            <p className="card-text">Restful Web API in .NET, Node.js, JAVA, PHP.</p>


                            <h3 className="card-text">Database:</h3>
                            <p className="card-text">MongoDB, MySQL, SQL Server</p>


                            <h3 className="card-text">Testing:</h3>
                            <p className="card-text">Mocha, Jasmine, Karma, NUnit</p>



                        </div>

                    </div>


                    <div className="card">
                        <img src={webtech2} className="card-img-top" alt="..." />


                    </div>

                </div>


            </div>
        </section>

    );
}


function Benefits() {
    return (

        <section className="container-fluid">
            <div className="Benefits  ">
                <h3 className="text-center">Benefits of web application development with us</h3>


                <div className="row  row-cols-md-2 g-4 ">



                    {Webtech_data.map((Webtech_data_Imported, index) => {
                        return (

                            <div className="col" key={index}>
                                <div className="card h-100 ">

                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={Webtech_data_Imported.img} className="img-fluid rounded-start" alt={Webtech_data_Imported.alt} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{Webtech_data_Imported.title}</h5>
                                                <p className="card-text">{Webtech_data_Imported.description}</p>
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


function Webtechcontact() {
    return (

        <section className="container-fluid">
            <div className="Webtechcontact ">


                <div className="card-group">



                    <div className="card">
                        <img src={handshake1} className="card-img-top" alt="..." />


                    </div>




                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
                                Dolor ullamcorper, imperdiet nunc vitae, pellentesque purus. Nulla ut turpis sed leo ornare consectetur. Duis vulputate eu risus eu sollicitudin. Mauris nisi lectus, pharetra eget leo id, hendrerit ultricies magna. Duis bibendum quam in elit accumsan, quis maximus urna venenatis. Mauris eget dapibus ipsum.</p>

                            <p className="card-text"><strong>We have been bibendum quam in elit accumsan, quis maximus urna venenatis lorem ipsum company!</strong></p>


                            <p className="card-text">Please get in touch hendrerit laoreet. Integer scelerisque dapibus quam lorem ipsum dolor amet!</p>
                            <button type="button" class="btn btn-primary">Contact-Us</button>





                        </div>

                    </div>

                </div>


            </div>
        </section>

    );
}

export { IntroWebtechapp, Technologies, Benefits, Webtechcontact };
