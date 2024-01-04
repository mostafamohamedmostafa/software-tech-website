import contactusimg from '../images/Hero-Software-3.jpg'

function Contactus() {
    return (

        <section>
            <div className="Contactus container-fluid">
                <div className="carousel-item active  ">
                    <img src={contactusimg} className="d-block w-100" alt="heroimg1" />

                    <div class="centered">
                        <h4 className="HeroTitle">Have a project you'd like to talk about?</h4>
                        <h5 className="HeroSlogan">Sed consequat erat vitae odio placerat, vel malesuada mi convallis we can help!</h5>
                        <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
                            <button type="button" className="btn btn-outline-primary Contactus-btn">Contact Us</button>
                            <button type="button" className="btn btn-outline-primary Contactus-btn">Our Projects</button>
                        </div>

                    </div>

                </div>

            </div>
        </section>

    );
}

export default Contactus;
