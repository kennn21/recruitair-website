import React from 'react';
import { dummyJobsDetail } from '@/data/dummy/jobsDetail';

const JobDetailItem = ({ job }: { job: typeof dummyJobsDetail[number] }): JSX.Element => {
    // Rest of your component code
    return (
        <div>
            <h1>{job.title}</h1>
            <p>{job.location}</p>
            <p>{job.yearsOfWorkExperience}</p>
            <p>{job.descriptionJob.join('\n')}</p>
            <p>{job.requirements.join('\n')}</p>
        </div>
    );
}

export default JobDetailItem;