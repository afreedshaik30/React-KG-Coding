import {
  Armchair,
  Check,
  Heart,
  Info,
  Search,
  ShoppingCart,
  User,
  Menu
} from "lucide-react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  return (
    <>
      {/* 1. Top Navbar */}
      <div className="navbar-top bg-black py-2">
        <div className="lg:container mx-auto px-4 flex justify-between items-center">
          {/* Left message */}
          <p className="text-sm font-montserrat text-white capitalize flex items-center gap-2">
            <Check />
            Free on all orders over $50
          </p>

          {/* 1.1 Top-right language & links */}
          <div className="navbar-top-right flex items-center gap-6">
            <select
              defaultValue="english"
              className="bg-[#029fae] h-[18px] w-[70px] text-sm font-montserrat text-black capitalize"
            >
              <option>english</option>
              <option>telugu</option>
              <option>hindi</option>
            </select>

            <Link className="text-sm text-white font-montserrat capitalize">
              FAQs
            </Link>

            <Link className="flex items-center text-sm text-white font-montserrat capitalize gap-1">
              <Info />
              Need help
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Middle Navbar */}
      <div className="navbar-middle flex items-center justify-center bg-[#ebe9e9] w-full h-[75px]">
        <div className="lg:container grid grid-cols-4 items-center gap-4">
          {/* Logo Section */}
          <div className="logo-wrapper">
            <Link
              to="/"
              className="text-3xl text-black font-montserrat capitalize flex items-center gap-2"
            >
              <Armchair size="2rem" color="#029fae" />
              UrbanCraft
            </Link>
          </div>

          {/* Search Box */}
          <div className="search-box col-span-2">
            <form className="relative h-[40px] max-w-[400px] w-full">
              <input
                type="text"
                placeholder="Search Here..."
                className="max-w-[400px] w-full h-full bg-white rounded-lg pl-4 pr-10" // note: pr-10 gives space for button
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Search size="20px" color="#272343" />
              </button>
            </form>
          </div>

          {/* Right Buttons: Cart, Wishlist, User */}
          <div className="navbar-middle-right flex items-center justify-end gap-4">
            <button className="btn flex items-center gap-1">
              <ShoppingCart />
              Cart
              <div className="badge badge-sm bg-[#029fae]">2</div>
            </button>

            <button className="btn flex items-center gap-1">
              <Heart />
              Wishlist
            </button>

            {/* User Dropdown */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 bg-[#02a0aec3]">
                <User />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
              >
                <li>
                  <Link to="/account">Account</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        {/* navbar bottom */}
        <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
                <div className="lg:container flex items-center justify-between">

                    <div className="navbar_bottom_left flex items-center gap-8">
                        <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-5 capitalize"> <Menu /> all categories</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Chair</a></li>
                                <li><a>Pant</a></li>
                                <li><a>Shirt</a></li>
                                <li><a>T-Shirt</a></li>
                                <li><a>T-Shirt</a></li>
                            </ul>
                        </div>

                        <nav className="flex items-center gap-8">
                            <NavLink to='/' className='text-sm text-[#029fae] font-inter font-medium capitalize'>Home</NavLink>
                            <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>shop</NavLink>
                            <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>product</NavLink>
                            <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>pages</NavLink>
                            <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>about</NavLink>
                        </nav>
                    </div>


                    <div className="navbar_bottom_right">
                        <p className="text-sm text-[#636270] font-inter font-normal capitalize">contact: <span className="text-[#272343]">(808)555-0111</span></p>
                    </div>

                </div>
            </div>

    </>
  );
};

export default NavBar;
