import JobForm from "@/components/jobs/JobForm";

const ApplicationPage = () => {

    return ( 
        <>
            <h1 className="text-4xl font-bold leading-[80px] mb-10 text-center">Form Job Application</h1>
            <JobForm jobId={0}/>
        </>
     );
}
 
export default ApplicationPage;