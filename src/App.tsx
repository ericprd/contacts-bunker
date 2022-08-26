import Dashboard from "./pages/dashboard/Dashboard";
import "./app.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div className='app overflow-hidden'>
      {/* <Dashboard /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
