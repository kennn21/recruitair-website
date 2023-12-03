import JobList from "@/components/jobs/JobList";
import { dummyJobs } from "@/data/dummy/jobs";
import { JobType } from "@/types/job";
import prisma from "@/lib/prisma"

const JobListPage = async () => {
    const jobs = await prisma.job.findMany()

    return ( 
        <>
            <h1 className="text-4xl font-bold leading-[80px]">Job List</h1>
            <JobList jobs={jobs as JobType[]} />
        </>
     );
}
 
export default JobListPage;