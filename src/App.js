import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Subjects from "./pages/Subjects";
import AboutUs from "./pages/AboutUs";
import PremiumMembership from "./pages/PremiumMembership";
import WhyAnswerSheet from "./pages/WhyAnswerSheet";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Faqs from "./pages/Faqs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Subjects />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/premium-membership" element={<PremiumMembership />} />
        <Route path="/why-anwsersheet" element={<WhyAnswerSheet />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
