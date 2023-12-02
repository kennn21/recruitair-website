import JobList from "@/components/jobs/JobList";
import { dummyJobs } from "@/data/dummy/jobs";

const JobListPage = () => {
    return ( 
        <>
            <h1 className="text-4xl font-bold leading-[80px]">Job List</h1>
            <JobList jobs={dummyJobs} />
        </>
     );
}
 
export default JobListPage;