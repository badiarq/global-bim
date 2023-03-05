import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div className="navbar">
            <nav className="flex bg-gray-200">
                <Link to="/login" className="mr-8">
                    <h1>Login</h1>
                </Link>
                <Link to="/building" className="mr-8">
                    <h1>Building Viewer</h1>
                </Link>
                <Link to="/map" className="mr-8">
                    <h1>Map Viewer</h1>
                </Link>
            </nav>
        </div>
    )
}
