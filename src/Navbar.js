const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Game Catalogue</h1>

            <div className="links">
                <a href ="/home"> Home</a>
                <a href ="/signin"> Sign In</a>
                <a href ="/create"> Create</a>
            </div>
        </nav>
     );
}
 
export default Navbar;