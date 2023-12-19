import { Job as Job } from "@/types/job";
import JobListItem from "./JobListItem";
import Link from 'next/link'

const JobList = ({ jobs }: {jobs: Job[]}) => {
    return ( 
            <div className="justify-center w-full mt-10">
                <div className="flex flex-col w-full flex-wrap justify-start gap-2 items-center min-h-[50vh]">

                    {
                        jobs.length > 0 ?
                        jobs.map((job, index)=>(
                            <Link key={`job${index}`} href={`/jobs/${job.id}`}><JobListItem job={job}/></Link>
                        ))
                        :
                        <h1>No vacancies at the moment. Keep sharpening your skills for upcoming job openings!</h1>
                    }

                </div>
            </div>
     );
}
 
export default JobList;