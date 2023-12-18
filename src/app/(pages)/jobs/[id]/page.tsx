import JobDetail from "@/components/jobs/JobDetail";
import prisma from "@/lib/prisma"
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

const JobDetailPage = async ({ params }: {params: {id: string}}) => {
    const job = await prisma.job.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    
    return ( 
        <>
            <JobDetail job={job}/>
        </>
     );
}
<>

</>
 
export default JobDetailPage;