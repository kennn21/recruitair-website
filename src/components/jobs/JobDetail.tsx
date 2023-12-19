import { Job } from "@prisma/client";
import { Button } from "../ui/button";
import { extractTitleFromGoogleMapsLink } from "@/lib/location";
import Link from "next/link";
import { MapPin } from "lucide-react";

type JobDetailProps = {
  job: {  
    id: number;  
    title: string;  
    imageUrl: string;  
    createdAt: Date;  
    updatedAt: Date;  
    startDate: Date;  
    endDate: Date;  
    createdBy: string;  
    updatedBy: string;  
    description: string;  
    requirements: string;  
    location: string;  
    salary: number;  
  };
}

const JobDetail = ({job}:JobDetailProps) => {

    const locationName = extractTitleFromGoogleMapsLink(job.location)

    return(
        <>
          <header className="w-full flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold leading-[80px]">{job.title}</h1>
            <div id='grid' className="flex justify-between w-fit">
              <a target="_blank" href={job.location} rel="noopener noreferrer">
                <div id="job-location" className="flex gap-1">
                    <MapPin/>
                    <span>{locationName}</span>
                </div>
              </a>
            </div>

            <section id="content" className="mt-10 bg-shadeyellow w-full min-h-[50vh]">
              <h2 className="text-2xl font-bold leading-[80px]">Job Description</h2>
                {job.description}
              <br/>
              <h2 className="text-2xl font-bold leading-[80px]">Requirements</h2>
              {
                job.requirements ?
                <p>{job.requirements}</p> :
                <p className=" text-neutral-400"><i>The recruiter did not put the base requirement here. Please contact the recruiter for further information..</i></p>
              }
              
            </section>

            <Link href={`/jobs/${job.id}/application/`}>
              <Button
                className="mt-5"
                >
                  Apply
              </Button>
            </Link>
          </header>
        </>
    );
}

export default JobDetail;