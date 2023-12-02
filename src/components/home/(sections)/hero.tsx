import { CTAButton } from "@/components/ui/custom/CTAButton";
import { HomeContent } from "@/content/home";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
    const content = HomeContent.hero

    return ( 
        <>
            <section
                id="Hero"
                className="
                    h-[700px]
                    bg-shadepurple
                    flex
                    flex-row"
                >
                <div id='left' className="flex justify-end w-1/2 h-full items-center">
                    <div className=" w-3/4 flex flex-col">
                        <h1 className="text-6xl font-bold leading-[80px]">{content.title}</h1>
                        <p>{content.body}</p>
                        <Link href={content.CTARedirectURL} className="w-fit">
                            <CTAButton>
                                {content.CTAButton}
                            </CTAButton>
                        </Link>
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
        </>
     );
}
 
export default HeroSection;