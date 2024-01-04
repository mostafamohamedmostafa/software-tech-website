import { Link, Route, Routes } from 'react-router-dom';


function Nav() {
    return (

        <section>
            <div className="Nav ">

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ms-auto p-2">
                                <li className="nav-item ">
                                    <Link className="nav-link  " aria-current="page" to="https://mostafamohamedmostafa.github.io/software-tech-website/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Aboutus">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Webtech">Web Apps</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Mobiletech">Web Apps</Link>
                                </li>
                       
                                <li className="nav-item">
                                    <Link className="nav-link" to="Agiletech">Agile Team</Link>
                                </li>
                              

                                <li className="nav-item">
                                    <Link className="nav-link "  to="Techused">Technologies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="" >Showcase</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="" >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </section>

    );
}

export default Nav;
