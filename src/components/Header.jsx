import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Header = () => {
  const { isLoggedIn, username, logout } = useContext(AuthContext);

  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Inkam Shopping App</h1>
        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {username}!</span>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <span className="text-gray-500">Please log in</span>
        )}
      </div>
    </header>
  );
};
export default Header;
