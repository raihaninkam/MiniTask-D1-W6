import { Link } from 'react-router-dom';
// import Auth from './Auth';
import LoginForm from './LoginForm';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <div>
          <Header/>
          <LoginForm/>
          </div>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">E-Commerce</Link>
            <Link to="/survey/table" className="hover:underline">Survey</Link>
            <Link to="/todo-app" className="hover:underline">Todo App</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;