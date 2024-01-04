import { Whyus_data } from "./Webistedata";


function Whyus() {
    return (

        <section>
            <div className="Whyus container-fluid">
                <div className="container">
                    <h1>How can we help you?</h1>
                    <h3>Our job is nisi lectus, pharetra eget leo id, hendrerit ultricies magna. Duis bibendum quam in elit accumsan, quis maximus urna venenatis.</h3>

                    <div className="row  row-cols-md-3 g-4 ">



                        {Whyus_data.map((Whyus_data_Imported, index) => {
                            return (

                                <div className="col" key={index}>
                                    <div className="card h-100 ">

                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={Whyus_data_Imported.img} className="img-fluid rounded-start" alt="..."/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className="card-text">{Whyus_data_Imported.title}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                   
                    )
                        })}






                </div>
            </div>


        </div>
        </section >

    );
}

export default Whyus;
