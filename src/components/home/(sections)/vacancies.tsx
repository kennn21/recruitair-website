import JobList from "@/components/jobs/JobList";
import prisma from "@/lib/prisma"

const VacanciesSection = async () => {
    const content = {
        title: 'Job Vacancies',
    }
    const jobs = await prisma.job.findMany()

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
            <JobList jobs={jobs} />
        </section>
     );
}
 
export default VacanciesSection;