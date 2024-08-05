import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AllRoutes from './routes/AllRoutes';
import CustomNavbar from './components/CustomNavbar';

function App() {
  return (
    <>
      <CustomNavbar/>
      <AllRoutes/>
    </>
  )
}

export default App
