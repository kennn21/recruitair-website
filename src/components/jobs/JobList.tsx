import { Job as Job } from "@/types/job";
import JobListItem from "./JobListItem";

const JobList = ({ jobs }: {jobs: Job[]}) => {
    return ( 
            <div className="justify-center w-full">
                <div className="flex flex-row w-full flex-wrap justify-center gap-2 items-center min-h-[50vh]">
                    
                    { jobs.length > 0 ?
                        jobs.map((job, index)=>(
                            <JobListItem key={`job${index}`} job={job}/>
                        ))
                        :
                        <h1>No vacancies at the moment. Keep sharpening your skills for upcoming job openings!</h1>
                    }
                </div>
            </div>
     );
}
 
export default JobList;