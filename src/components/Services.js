import { Services_data } from "./Webistedata";

function Services() {
    return (

        <section>
            <div className="Services container ">
                <h1>What are you looking for?</h1>
                <h3>We are software outsourcing company lorem ipsum dolor. We provide bibendum leo scelerisque glavrida dolor.</h3>

                <div className="card-group">

                {Services_data.map((Services_dataImported, index) => {
                        return (

                            <div className="card" key={index} >
                            <img src={Services_dataImported.img} className="card-img-top" alt={Services_dataImported.alt} />
                            <div className="card-body">
                                <h3 className="card-title">{Services_dataImported.title} </h3>
                            </div>
    
                        </div>
                        )
                    })}


                </div>
            </div>
        </section>

    );
}

export default Services;
