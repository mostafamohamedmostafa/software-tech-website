import handshake1 from "../images/handshake1.jpg"
function ClientOriented() {
    return (

        <section className="container-fluid">
            <div className="ClientOriented ">
                <div className="card-group about-bg">
                    <div className="card" data-aos="fade-up">
                        <div className="card-body">
                            <h3 className="card-title">Client-Oriented</h3>
                            <p className="card-text">Mauris nisi lectus, pharetra eget leo id, hendrerit ultricies magna. Duis bibendum quam in elit accumsan, quis maximus urna venenatis. Mauris eget dapibus ipsum. Vivamus vel ante eu velit ornare scelerisque ut quis nulla. Nullam sed quam eu elit vehicula maximus.</p>
                            <h5 className="card-title">We deliver value to our clients by:</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" data-aos="fade-up" >An item</li>
                                <li class="list-group-item" data-aos="fade-up">A second item</li>
                                <li class="list-group-item" data-aos="fade-up">A third item</li>
                                <li class="list-group-item" data-aos="fade-up" >A fourth item</li>
                                <li class="list-group-item"data-aos="fade-up">And a fifth one</li>
                            </ul>
                        </div>

                    </div>
                    <div className="card" data-aos="fade-up">
                        <img src={handshake1} className="card-img-top" alt="..." />
               

                    </div>

                </div>
            </div>
        </section>

    );
}

export default ClientOriented;
