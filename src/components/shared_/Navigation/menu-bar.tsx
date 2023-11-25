import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../theme-mode-toggle";

const MenuBar = () => {
    return ( 
        <>
            <header className='flex justify-between bg-neutral-900 pl-4 pr-4 pt-2 h-12 w-[90vw]'>
                <div id='left'>
                    <h1>Homepage</h1>
                </div>
                <div id='right' className="flex w-[100px] justify-between items-center">
                    <ModeToggle/>
                    <UserButton afterSignOutUrl="/"/>
                </div>
            </header> 
        </>
     );
}
 
export default MenuBar;