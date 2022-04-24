import {Link} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <Link to="/">Anasayfa</Link>
                </div>
                <div className="bg-dark p-4">
                    <Link to="CompanyList">Şirketler</Link>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    )
}
export default Navbar;