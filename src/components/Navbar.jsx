const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a>About Us</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>LogIn</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="Home">Home</a></li>
      <li><a href="About">About us</a></li>
      <li><a href="registration">Registration</a></li>
      <li><a href="Dashboard">Dashboard</a></li>
      {/* <li><a href="Login">Login</a></li> */}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <Link to="/Login" className="btn">Login</Link> */}
    <a className="btn">Log In</a>
    <a className="btn">Register</a>
  </div>
</div>
    );
};

export default Navbar;