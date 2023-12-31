import { Job as Job } from "@/types/job";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

const JobListItem = ({ job }: {job: Job}) => {
    return ( 
        <Link href={`jobs/${job.id}`} className="w-full h-fit">
            <Card
                className="w-full h-[100px] flex flex-row justify-between"
                >
                <div id="left" className="flex  items-center pl-1">
                    <div className="relative h-[90px] w-[90px]">
                        <Image fill style={{objectFit: "cover"}} alt="" src={job.imageUrl as string}/>
                    </div>
                    <CardContent className="pt-4">
                        <h1>{job.title}</h1>
                        <CardDescription>
                            {job.description}
                        </CardDescription>
                        <h1 className="text-md font-semibold">{job.salary?.toLocaleString("en-US", {style: "currency", currency: "USD",})}</h1>
                    </CardContent>
                </div>
                <CardFooter className="flex items-end">
                    <h6
                        className="text-gray-400 text-xs"
                    >
                        Ends at {job.endDate?.toISOString()}
                    </h6>
                </CardFooter>
            </Card>
        </Link>
     );
}
 
export default JobListItem;