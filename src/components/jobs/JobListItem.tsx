import { Job } from "@/types/job";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";

const JobListItem = ({ job }: {job: Job}) => {
    return ( 
        <Card className="w-full h-[100px] flex flex-row justify-between">
            <div id="left" className="flex  items-center pl-1">
                <div className="relative h-[90px] w-[90px]">
                    <Image fill style={{objectFit: "cover"}} alt="" src={job.imageUrl}/>
                </div>
                <CardContent>
                    <h1>{job.title}</h1>
                    <CardDescription>
                        {job.description}
                    </CardDescription>
                </CardContent>
            </div>
            <CardFooter className="flex items-end">
                <h6
                    className="text-gray-400 text-xs"
                >
                    Ends at {job.endDate.toISOString()}
                </h6>
            </CardFooter>
        </Card>
     );
}
 
export default JobListItem;