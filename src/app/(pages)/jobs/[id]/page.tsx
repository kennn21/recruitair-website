// import JobDetail from "@/components/jobs/JobDetail";
// import { dummyJobsDetail } from "@/data/dummy/jobsDetail";

// const JobDetailPage = ({ jobId }: { jobId: number }) => {
//   // Find the job with the specified ID from the dummyJobsDetail array
//   const job = dummyJobsDetail.find((j) => j.id === jobId);

//   if (!job) {
//     // Handle case where the job with the specified ID is not found
//     return <div>jobdetailpage- Job not found!</div>;
//   }

//   return (
//     <>
//       <h1 className="text-4xl font-bold leading-[80px]">{job.title}</h1>
//       <h1>here's job details</h1>
//       <JobDetail jobId={1} />
//     </>
//   );
// };

// export default JobDetailPage;
// import React from 'react';
// import { dummyJobsDetail } from '@/data/dummy/jobsDetail';

// const JobDetailPage = ({ job }: { job: typeof dummyJobsDetail[number] }): JSX.Element => {
//     // Rest of your component code
//     return (
//         <div>
//             <h1>{job.title}</h1>
//             <p>{job.location}</p>
//             <p>{job.yearsOfWorkExperience}</p>
//             <p>{job.descriptionJob.join('\n')}</p>
//             <p>{job.requirements.join('\n')}</p>
//         </div>
//     );
// }

// export default JobDetailPage;

import JobDetail from "@/components/jobs/JobDetail";
export default JobDetail;
