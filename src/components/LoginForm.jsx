import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

const LoginForm = () => {
    const [inputUsername, setInputUsername] = useState('');
    const {login} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputUsername.trim()) {
            login(inputUsername);
            setInputUsername('');
        }
    };


    return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
        placeholder="Enter username"
        className="border border-gray-300 p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full"
      >
        Login
      </button>
    </form>
  );
}
export default LoginForm;