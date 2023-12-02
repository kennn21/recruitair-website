import { cn } from "@/lib/utils";
import { SquareUserRound } from "lucide-react";

const SiteLogo = () => {
    return ( 
        <div className="flex flex-nowrap gap-1 items-center">
            <SquareUserRound className="light:text-neutral-800 dark:text-gray-100"/>
            <h1 className={cn([, "font-extrabold text-xl light:text-neutral-800 dark:text-gray-100"])}>RECRUIT<span className=" text-purple-600">AI</span>R</h1>
        </div>
     );
}
 
export default SiteLogo;