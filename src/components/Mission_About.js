import handshake2 from "../images/handshake2.jpg"
function Mission_About() {
    return (

        <section className="container-fluid">
            <div className="Mission_About ">

                <div className="card-group">

                    <div className="card">
                        <img src={handshake2} className="card-img-top" alt="..." />


                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Mission</h3>
                            <p className="card-text">Nulla laoreet in elit non porttitor. Vestibulum iaculis aliquam blandit. Vivamus posuere lorem ut sapien mollis aliquam. Vestibulum fermentum dapibus tellus, id dignissim turpis fermentum id.</p>
                            <p className="card-text">Ullamcorper ex vestibulum velit dapibus, non gravida ligula imperdiet. Quisque eget bibendum tortor. Nulla felis purus, ultrices sit amet lectus sit amet, mattis rhoncus sem. Aenean ipsum augue, condimentum at condimentum non, consectetur in lorem. Fusce id sodales ante. Vivamus a interdum elit. Phasellus gravida malesuada felis, non pellentesque velit pretium non.</p>

                        </div>

                    </div>


                </div>

            </div>
        </section>

    );
}

export default Mission_About;
