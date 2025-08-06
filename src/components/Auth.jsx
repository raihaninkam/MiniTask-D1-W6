import AuthProvider from "../context/AuthProvider"
import Header from "./Header"
import LoginForm from "./LoginForm"

const Auth = () => {
    return (
        <AuthProvider>
            <div className="flex flex-col">
                <Header/>
                <div className="container mx-auto p-4">
                    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Login Form</h2>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </AuthProvider>
    );
};
export default Auth;