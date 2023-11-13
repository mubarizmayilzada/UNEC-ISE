import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/haeder/header";
import AcademicStaff from "./pages/academic-staff/academicStaff";
import AdminstrativStaff from "./pages/adminstrativ-staff/adminstrativStaff";
import Home from "./pages/homePage/Home";
import AcademicStaffDetails from "./pages/academic-staff/components/academic-staff-details";
import StudentClub from "./pages/student_club/studentClub";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <AboutUs /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/adminstrative-staff" element={<AdminstrativStaff />} />
        <Route path="/academic-staff" element={<AcademicStaff />} />
        <Route path="/student-club" element={<StudentClub />} />

        <Route
          path="/academic-staff/details"
          element={<AcademicStaffDetails />}
        />
      </Routes>
      {/* <AcademicStaff /> */}
      <Footer />
    </div>
  );
}

export default App;
