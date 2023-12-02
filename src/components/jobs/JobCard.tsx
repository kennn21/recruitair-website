import { Job } from "@/types/job";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";

const JobCard = ({ job }: {job: Job}) => {
    return ( 
        <Card className="w-2/10 h-[400px]">
            <CardHeader className="h-fit">
                <div className="relative h-[200px] w-fill">
                    <Image fill style={{objectFit: "cover"}} alt="" src={job.imageUrl}/>
                </div>
                {job.title}
            </CardHeader>
            <CardContent>
                <CardDescription>
                    {job.description}
                </CardDescription>

            </CardContent>
            <CardFooter>
                {job.endDate.toISOString()}
            </CardFooter>
        </Card>
     );
}
 
export default JobCard;