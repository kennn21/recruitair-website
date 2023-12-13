import { dummyJobsDetail } from '@/data/dummy/jobsDetail';
import { Heading1 } from 'lucide-react';

// const JobDetail = ({ jobId }: { jobId: number }) => {
//     // Find the job with the specified ID from the dummyJobsDetail array
//     const job = dummyJobsDetail.find((j) => j.id === jobId);

//     if (!job) {
//         // Handle case where the job with the specified ID is not found
//         return <div>JobDetail- Job not found!</div>;
//     }

//     return (
//         <div>
//             <JobDetailItem job={job} />
//             {/* Add more details or components related to job detail as needed */}
//         </div>
//     );
// }

// export default JobDetail;

// src/app/pages/jobs/[id]/page.tsx

const JobDetail = () => {
  return (
    <div className="justify-center w-full">
        <h1 className="text-4xl font-bold leading-[80px] mb-10">job detail page</h1>
    </div>
  );
};

export default JobDetail;


