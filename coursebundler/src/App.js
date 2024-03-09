import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Layout/Header/Header';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Layout/Footer/Footer';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Forgetpassword from './Components/Auth/Forgetpassword';
import ResetPassword from './Components/Auth/ResetPassword';
import Contact from './Components/Contact/Contact';
import Request from './Components/Request/Request';
import About from './Components/About/About';
import Subscribe from './Components/Subscribe/Subscribe';
import NotFound from './Components/Layout/NotFound/NotFound';
import PaymentFail from './Components/Subscribe/PaymentFail';
import PaymentSuccess from './Components/Subscribe/PaymentSuccess';
import CourseDetail from './Components/CoursePage/CourseDetail';
import Profile from './Components/Profile/Profile';

function App() {

  window.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
  })
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />


        <Route path="/profile" element={<Profile />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />

        <Route path="/ResetPassword/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
