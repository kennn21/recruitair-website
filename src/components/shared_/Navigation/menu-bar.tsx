import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../theme-mode-toggle";
import Link from "next/link";
import { SquareUserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import SiteLogo from "../site-logo";
import { GetCurrentRole } from "@/actions/user";
import { Role } from "@prisma/client";

type menuItem = {
    label: string,
    path: string,
}
const MenuBar = async () => {
    
    const role: Role | {error: any} = await GetCurrentRole()

    const links: menuItem[] = 
    role === "RECRUITER" ?
    [
        {
            label: "Home",
            path: '/home',
        },
        {
            label: "Job List",
            path: '/jobs',
        },
        {
            label: "About",
            path: '/about',
        },
        {
            label: "Add Info",
            path: "/info",
        },
        {
            label: "Profile",
            path: '/profile/edit',
        },

    ] :
    [
        {
            label: "Home",
            path: '/home',
        },
        {
            label: "Job List",
            path: '/jobs',
        },
        {
            label: "About",
            path: '/about',
        },
        {
            label: "Profile",
            path: '/profile/edit',
        },

    ]

    return ( 
        <>
            <header className='flex justify-between pl-4 pr-4 pt-2 h-14 w-[90vw]'>
                <div id='left' className="flex w-[fit-content] justify-between items-center">
                    <SiteLogo/>
                </div>
                <div id='right' className="flex items-center">
                    {
                        links.map((link, index)=>(
                            <Link
                                key={index+link.label}
                                href={link.path}
                                className="ml-5 mr-5"
                                >
                                {link.label}
                            </Link>
                        ))
                    }
                    <UserButton afterSignOutUrl="/"/>

                </div>
            </header>
        </>
     );
}
 
export default MenuBar;