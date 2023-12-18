import JobTable from "@/components/jobs/JobTable";
import AddJob from "@/components/jobs/jobTable/addJob";

const JobManagement = () => {

    return ( 
        <>
            <h1 className="text-4xl font-bold leading-[80px] mb-10 text-center">Job Table Management</h1>
            <AddJob/>
            <JobTable/>
        </>
     );
}
 
export default JobManagement;