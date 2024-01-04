import { Technologiespage_data } from "./Webistedata";


function Technologiespage() {
    return (

        <section>
            <div className="Technologiespage container-fluid">
                <div className="container">
                    <h3>Technologies</h3>

                </div>

                <div className="row  row-cols-md-2 g-4 ">



                    { Technologiespage_data.map(( Technologiespage_data_Imported, index) => {
                        return (

                            <div className="col  " data-aos="fade-up" key={index}>
                                <div className="card h-100 ">

                                    <img src= {Technologiespage_data_Imported.img} className="img-fluid rounded-start " alt={ Technologiespage_data_Imported.alt} />
                                    <div className="card-body">
                                    <h3 className="card-title">{ Technologiespage_data_Imported.title}</h3>
                                    <p className="card-text">{ Technologiespage_data_Imported.description}</p>

                                    </div>
                                </div>
                            </div>



                        )
                    })}






                </div>


            </div>
        </section >

    );
}

export default Technologiespage;
