import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { format } from "date-fns"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
  } from "@/components/ui/table"
import UpdateJobTable from "./jobTable/updateJob";
import DeleteJobTable from "./jobTable/deleteJob";


const JobTable = async() => {

    const jobs = await prisma.job.findMany();

    return (
        <Table>
        <TableCaption>A list of jobs available.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"><strong>ID</strong></TableHead>
            <TableHead><strong>Title</strong></TableHead>
            <TableHead><strong>Image Url</strong></TableHead>
            <TableHead><strong>Start Date</strong></TableHead>
            <TableHead><strong>End Date</strong></TableHead>
            <TableHead><strong>Created By</strong></TableHead>
            <TableHead><strong>Updated By</strong></TableHead>
            <TableHead><strong>Description</strong></TableHead>
            <TableHead><strong>Requirements</strong></TableHead>
            <TableHead><strong>Location</strong></TableHead>
            <TableHead><strong>Salary</strong></TableHead>
            <TableHead><strong>Options</strong></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell className="font-medium">{job.id}</TableCell>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.imageUrl}</TableCell>
              <TableCell>{format(job.startDate, "PPP")}</TableCell>
              <TableCell>{format(job.endDate, "PPP")}</TableCell>
              <TableCell>{job.createdBy}</TableCell>
              <TableCell>{job.updatedBy}</TableCell>
              <TableCell>{job.description}</TableCell>
              <TableCell>{job.requirements}</TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell>{job.salary}</TableCell>
              <TableCell><UpdateJobTable key={job.id} jobProp={job}/><br/><DeleteJobTable key={job.id} job={job}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={12}>Total Jobs: {jobs.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

}

export default JobTable;