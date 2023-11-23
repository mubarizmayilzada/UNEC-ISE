import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/haeder/header";
import AcademicStaff from "./pages/academic-staff/academicStaff";
import AdminstrativStaff from "./pages/adminstrativ-staff/adminstrativStaff";
import Home from "./pages/homePage/Home";
import AcademicStaffDetails from "./pages/academic-staff/components/academic-staff-details";
import StudentClub from "./pages/student_club/studentClub";
import AboutUs from "./pages/about-us/about-us";
import StudentAlumni from "./pages/student-alumni/studentAlumni";
import Publication from "./pages/publications/publication";
import Clubsingle from "./pages/student_club/club-single/clubsingle";
import Events from "./pages/news/events/events";
import Newsletter from "./pages/news/newsletter/newsletter";
import Contact from "./pages/Contact";
import NewsletterDetails from "./pages/news/newsletter/newsletterDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/adminstrative-staff" element={<AdminstrativStaff />} />
        <Route path="/academic-staff" element={<AcademicStaff />} />
        <Route path="/student-club" element={<StudentClub />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/student-clubs" element={<StudentClub />} />
        <Route path="/student-alumni" element={<StudentAlumni />} />
        <Route path="/publications" element={<Publication />} />
        <Route path="/events" element={<Events />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/newsletter/details/:id" element={<NewsletterDetails />} />
        <Route path="/student-clubs/details/:id" element={<Clubsingle />} />
        <Route
          path="/academic-staff/details/:id"
          element={<AcademicStaffDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
