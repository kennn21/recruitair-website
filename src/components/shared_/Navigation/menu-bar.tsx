import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../theme-mode-toggle";
import Link from "next/link";
import { SquareUserRound } from "lucide-react";
import { cn } from "@/lib/utils";


type menuItem = {
    label: string,
    path: string,
}
const MenuBar = () => {

    const links: menuItem[] = [
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
    ]

    return ( 
        <>
            <header className='flex justify-between pl-4 pr-4 pt-2 h-14 w-[90vw]'>
                <div id='left' className="flex w-[fit-content] justify-between items-center">
                    <SquareUserRound className="light:text-neutral-800 dark:text-gray-100"/>
                    <h1 className={cn([, "font-extrabold text-xl light:text-neutral-800 dark:text-gray-100"])}>RECRUIT<span className=" text-purple-600">AI</span>R</h1>
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