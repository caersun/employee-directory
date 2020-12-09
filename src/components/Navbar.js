const Navbar = props => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">{props.logo}</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {props.children}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;