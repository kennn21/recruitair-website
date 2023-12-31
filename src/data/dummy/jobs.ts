import { Job as Job } from "@/types/job";

export const dummyJobs: Job[] = [
    {
        title: "Software Engineer",
        imageUrl: "https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png",
        description: "Develops and maintains software applications",
        salary: 100_000,
        startDate: new Date('2023-01-01'),
        endDate: new Date('2023-12-31'),
        createdAt: new Date(),
        createdBy: "John Doe",
        updatedAt: new Date(),
        updatedBy: "Jane Smith",
    },
    {
        title: "Marketing Manager",
        imageUrl: "https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png",
        description: "Plans and executes marketing strategies",
        salary: 90_000,
        startDate: new Date('2023-02-15'),
        endDate: new Date('2024-02-14'),
        createdAt: new Date(),
        createdBy: "Emily Johnson",
        updatedAt: new Date(),
        updatedBy: "Alex Brown",
    },
    {
        title: "Data Analyst",
        imageUrl: "https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png",
        description: "Analyzes and interprets data for insights",
        salary: 85_000,
        startDate: new Date('2023-03-10'),
        endDate: new Date('2024-03-09'),
        createdAt: new Date(),
        createdBy: "Michael Wilson",
        updatedAt: new Date(),
        updatedBy: "Sophia Garcia",
    },
    {
        title: "Graphic Designer",
        imageUrl: "https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png",
        description: "Creates visual concepts for various projects",
        salary: 75_000,
        startDate: new Date('2023-04-20'),
        endDate: new Date('2024-04-19'),
        createdAt: new Date(),
        createdBy: "Olivia Brown",
        updatedAt: new Date(),
        updatedBy: "Daniel Miller",
    },
];