import JobList from "@/components/jobs/JobList";
import { Job } from "@/types/job";
import prisma from "@/lib/prisma"

const JobListPage = async () => {
    const jobs = await prisma.job.findMany()

    return ( 
        <>
            <h1 className="text-4xl font-bold leading-[80px]">Job List</h1>
            <JobList jobs={jobs as Job[]} />
        </>
     );
}
 
export default JobListPage;