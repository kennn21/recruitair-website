import JobDetail from "@/components/jobs/JobDetail";
import prisma from "@/lib/prisma"
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import ClipLoader from "react-spinners/ClipLoader";

const JobDetailPage = async ({ params }: {params: {id: string}}) => {
    const job = await prisma.job.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    
    return (
        job ?
            <>
                <JobDetail job={job}/>
            </>
        :
        <div className="flex justify-center items-center min-h-[90vh]">
            <ClipLoader
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>

     );
}
<>

</>
 
export default JobDetailPage;