import { HomeContent } from "@/content/home";
import Image from "next/image";
import AIChatButton from "@/components/chatbot/AIChatButton";
import Link from "next/link";

const MissionSection = () => {
    const content = HomeContent.mission

    return ( 
        <section
        id="LandingPage"
        className="
            h-[700px]
            flex
            flex-row"
        >
        <div id='left' className="flex justify-end w-1/2 h-full items-center">
            <div className=" w-3/4 flex flex-col">
                <h1 className="text-6xl font-bold leading-[80px]">{content.title}</h1>
                <p>{content.body}</p>
            </div>
        </div>
        <div id='right' className="w-1/2 justify-around items-center flex">
            <Image
                width={500}
                height={500}
                src={content.imageUrl}
                alt={"Hero Image"}
                />
        </div>
        
    </section>
     );
}
 
export default MissionSection;