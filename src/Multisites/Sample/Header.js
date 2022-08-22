import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faContactCard } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute flex items-center pr-2 sm:static sm:justify-start sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative">
                <Link to="/">
                  <div className="bg-gray-800 flex text-sm">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="/image320.jpeg"
                      alt=""
                    />
                    <span className="px-2 text-gray-200 text-xl"><b>Mohit Gupta</b></span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-end inset-y-0 right-0">
              <div className="sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    <span className="hidden sm:block">Home</span>
                    <span className="block sm:hidden"><FontAwesomeIcon icon={faHome} /></span>
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <span className="hidden sm:block">Contact</span>
                    <span className="block sm:hidden"><FontAwesomeIcon icon={faContactCard} /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
