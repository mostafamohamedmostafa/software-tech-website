import introimage from "../images/intro-about.jpg"
function Intro_about() {
    return (

        <section className="container-fluid">
            <div className="Intro_about_us ">
                <div className="text-center">
                    <h1 data-aos="fade-up">About Us</h1>
                    <h4 data-aos="fade-up">We not only do coding but also  erat vitae odio placerat, vel malesuada mi convallis. In quis faucibus quam. Proin cursus et pretium!</h4>
                </div>
                <div className="card-group">
                    <div className="card" data-aos="fade-up">
                        <img src={introimage} className="card-img-top" alt="..." />
               

                    </div>
                    <div className="card" data-aos="fade-up">
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

export default Intro_about;
