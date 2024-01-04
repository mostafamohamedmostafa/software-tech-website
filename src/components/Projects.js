import { Projects_data } from "./Webistedata";

function Projects() {
    return (

        <section>
            <div className="Projects container-fluid">

                <div className="container">

                    <h2 data-aos="fade-up">Our latest projects</h2>
                    <h5 data-aos="fade-up">We provides a full spectrum s nisi lectus, pharetra eget leo id, hendrerit ultricies magna. Duis bibendum quam in elit accumsan venenatis.</h5>

                    <div className="row  row-cols-md-2 g-4 ">



                        {Projects_data.map((Projects_data_Imported, index) => {
                            return (

                                <div className="col " key={index}>
                                    <div className="card h-100 " data-aos="fade-up">

                                        <img src={Projects_data_Imported.img} className="img-fluid rounded-start " alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">{Projects_data_Imported.title}</p>
                                        </div>
                                    </div>
                                </div>



                            )
                        })}






                    </div>

                </div>





            </div>
        </section>

    );
}

export default Projects;
