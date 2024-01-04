import HeroSoftware from "../images/Hero-Software-4.jpg"
function Vision_About() {
    return (

        <section className="container-fluid">
            <div className="Vision_About ">
                <div className="card-group">
                    <div className="card" data-aos="fade-up">
                        <div className="card-body">
                            <h3 className="card-title">Vision</h3>

                            <h5 className="card-title">To be first choice software outsourcing company:</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" data-aos="fade-up">An item</li>
                                <li class="list-group-item" data-aos="fade-up">A second item</li>
                                <li class="list-group-item" data-aos="fade-up" >A third item</li>
                                <li class="list-group-item" data-aos="fade-up">A fourth item</li>
                                <li class="list-group-item" data-aos="fade-up">And a fifth one</li>
                            </ul>

                            <p className="card-text">Nulla laoreet in elit non porttitor. Vestibulum iaculis aliquam blandit. Vivamus posuere lorem ut sapien mollis aliquam. Vestibulum fermentum dapibus tellus, id dignissim turpis fermentum id.</p>
                            <p className="card-text">consectetur in lorem. Fusce id sodales ante. Vivamus a interdum elit. Phasellus gravida malesuada felis, non pellentesque velit pretium non.</p>

                        </div>

                    </div>
                    <div className="card" data-aos="fade-up">
                        <img src={HeroSoftware} className="card-img-top" alt="..." />


                    </div>

                </div>
            </div>
        </section>

    );
}

export default Vision_About;
