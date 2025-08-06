// import Auth from "./components/Auth"
import ShoppingApp from "./components/EcommercePage"
import TodoApp from "./components/TodoApp"
import { BrowserRouter, Route, Routes } from "react-router"



function Router() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShoppingApp/>}/>
        <Route path="/todo-app" element={<TodoApp/>}/>
      </Routes>
    </BrowserRouter>
  )
      
}

export default Router;
