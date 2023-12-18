import { Job } from "@prisma/client";
import { Button } from "../ui/button";
import { PinTopIcon } from "@radix-ui/react-icons";


const JobDetail = ({job}:{job: Job}) => {
    return(
        <>
          <header className="w-full">
            <h1>{job.title}</h1>
            <div id='grid' className="flex justify-between w-fit">
              <div id="job-location">
                <PinTopIcon/>
                <span>{job.location}</span>
              </div>
              <div id="job-req-experience">
                {job.requirements}
              </div>
            </div>
            <section id="content">
              <h2>Job Description</h2>
                {job.description}
              <br/>
              <h2>Requirements</h2>
              <p>{job.requirements}</p>
            </section>
          </header>
        </>
    );
}

export default JobDetail;