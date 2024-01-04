import HeroSoftware3 from "../images/Hero-Software-3.jpg"
import { Aglietech_data } from "./Webistedata"

function IntroTeam() {
    return (

        <section className="container-fluid">
            <div className="IntroWebtechapp ">

                <div className="text-center">
                    <h1>Agile Team</h1>
                    <h4>Dedicated staff sed ullamcorper vitae consequat!</h4>
                </div>
                <div className="card-group">
                    <div className="card" data-aos="fade-up">
                        <img src={HeroSoftware3} className="card-img-top" alt="..." />
                    </div>
                </div>


                <div className="card-group">
                    <div className="card" data-aos="fade-up">
                        <p className="card-text">Morbi et pellentesque erat. Nulla luctus imperdiet pharetra. Nam dignissim risus at ultricies elementum. Nullam sit amet dolor quis libero sollicitudin commodo. Mauris sit amet quam enim. Fusce vel imperdiet orci. Aenean id quam non lorem condimentum venenatis. Nam ut dolor ullamcorper, imperdiet nunc vitae, pellentesque purus. Nulla ut turpis sed leo ornare consectetur. Duis vulputate eu risus eu sollicitudin. Mauris nisi lectus, pharetra eget leo id, hendrerit ultricies magna. Duis bibendum quam in elit accumsan, quis maximus urna venenatis. Mauris eget dapibus ipsum.</p>
                    </div>



                    <div className="card" data-aos="fade-up">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac tincidunt dui, vitae tempor ipsum. Suspendisse potenti. Curabitur sed dolor eget nibh volutpat posuere facilisis et libero. Nulla laoreet in elit blandit. Vivamus us tellus, id dignissim turpis fermentum id. Nullam ullamcorper ex vestibulum velit dapibus, non gravida ligula imperdiet.</p>
                        <p className="card-text">Quisque eget bibendum tortor. Nulla felis purus, ultrices sit amet lectus sit amet, mattis rhoncus sem. Vivamus a interdum elit. Phasellus gravida malesuada felis, non pellentesque velit pretium non.</p>
                    </div>

                </div>





            </div>
        </section>

    );
}


function TeamBenefits() {
    return (

        <section className="container-fluid">
            <div className="Benefits  ">
                <h3 className="text-center">Benefits of hiring dedicated team from us</h3>


                <div className="row  row-cols-md-2 g-4 ">



                    {Aglietech_data.map((Aglietech_data_Imported, index) => {
                        return (

                            <div className="col" data-aos="fade-up" key={index}>
                                <div className="card h-100 ">

                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={Aglietech_data_Imported.img} className="img-fluid rounded-start" alt={Aglietech_data_Imported.alt} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{Aglietech_data_Imported.title}</h5>
                                                <p className="card-text">{Aglietech_data_Imported.description}</p>
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

export { IntroTeam, TeamBenefits };