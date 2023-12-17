import JobForm from "@/components/jobs/JobForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Recruitair - Job Application",
  };

type ApplicationPageProps = {
    params: {
        id: string
    };
};
const ApplicationPage = ({ params }: ApplicationPageProps) => {
    const jobId = params.id;

    return ( 
        <>
            <h1 className="text-4xl font-bold leading-[80px] mb-10 text-center">Form Job Application</h1>
            <JobForm jobId={Number(jobId)}/>
        </>
     );
}
 
export default ApplicationPage;