import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PopularServices from "./ui/PopularServices";
import ServiceSection from "./ui/ServiceSection";
import SubHeroSection from "./ui/SubHeroSection";
import SearchSystem from "./ui/SearchSystem";
import HomeImageSlider from "./ui/HomeImageSlider";

function Home() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <>
      <SearchSystem />
      <HomeImageSlider />
      <SubHeroSection />
      <PopularServices />
      <ServiceSection />
    </>
  );
}

export default Home;
