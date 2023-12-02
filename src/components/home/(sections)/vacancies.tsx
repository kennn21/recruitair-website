import JobList from "@/components/jobs/JobList";
import JobListItem from "@/components/jobs/JobListItem";
import { dummyJobs } from "@/data/dummy/jobs";

const VacanciesSection = () => {
    const content = {
        title: 'Job Vacancies',
    }

    return ( 
        <section
        id="LandingPage"
        className="
            bg-shadeyellow
            h-fit
            flex
            flex-col
            p-10
            "
        >
            <h1 className="text-4xl font-bold leading-[80px] text-center w-full h-fit mb-10">{content.title}</h1>
            <JobList jobs={dummyJobs} />
        </section>
     );
}
 
export default VacanciesSection;