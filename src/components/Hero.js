import { Hero_data } from "./Webistedata";
import Heroimg from '../images/Hero-Software-3.jpg'
function Hero() {
    return (

        <div className="Hero  container- ">


            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Heroimg} className="d-block w-100  " alt="heroimg1" />

                        <div class="centered">
                            <h1 className="HeroTitle">Software</h1>
                            <h2 className="HeroSlogan">DONE RIGHT</h2>
                        </div>

                    </div>

                    {Hero_data.map((Hero_Data_Imported, index) => {
                        return (
                            <div className="carousel-item" key={index}>
                                <img src={Hero_Data_Imported.img} className="d-block w-100  " alt={Hero_Data_Imported.alt} />
                                <div class="centered">
                                    <h1 className="HeroTitle  kenburns-top">{Hero_Data_Imported.title}</h1>
                                    <h2 className="HeroSlogan kenburns-top">{Hero_Data_Imported.slogan}</h2>
                                </div>

                            </div>
                        )
                    })}


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>















        </div>

    );
}

export default Hero;
