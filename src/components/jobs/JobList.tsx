import { JobType as Job } from "@/types/job";
import JobListItem from "./JobListItem";

const JobList = ({ jobs }: {jobs: Job[]}) => {
    return ( 
            <div className="justify-center w-full">
                <div className="flex flex-row w-full flex-wrap justify-between gap-2">
                    {
                        jobs.map((job, index)=>(
                            <JobListItem key={`job${index}`} job={job}/>
                        ))
                    }
                </div>
            </div>
     );
}
 
export default JobList;