import BenefitsSection from "../../../components/home/(sections)/benefits";
import HeroSection from "../../../components/home/(sections)/hero";
import MissionSection from "../../../components/home/(sections)/mission";
import VacanciesSection from "../../../components/home/(sections)/vacancies";
import VisionSection from "../../../components/home/(sections)/vision";

const HomePage = () => {

    return ( 
        <>
            <HeroSection/>
            <VisionSection/>
            <MissionSection/>
            <BenefitsSection/>
            <VacanciesSection/>
        </>
     );
}
 
export default HomePage;