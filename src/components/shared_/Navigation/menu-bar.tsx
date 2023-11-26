import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../theme-mode-toggle";
import Link from "next/link";
import { SquareUserRound } from "lucide-react";


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
            <header className='flex justify-between bg-menubar pl-4 pr-4 pt-2 h-12 w-[90vw] rounded-b-xl'>
                <div id='left' className="flex w-[fit-content] justify-between items-center">
                    <SquareUserRound className="text-neutral-800"/>
                    <h1 className="font-extrabold text-xl text-neutral-800">RECRUIT<span className=" text-purple-600">AI</span>R</h1>
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
            <div id="floating" className="absolute bottom-10 right-10 flex">
                <ModeToggle/>
            </div>
        </>
     );
}
 
export default MenuBar;