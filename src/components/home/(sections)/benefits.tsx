import { Card, CardContent } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/custom/CTAButton";
import { HomeContent } from "@/content/home";
import Image from "next/image";
import Link from "next/link";

const BenefitsSection = () => {
    const content = HomeContent.benefits

    return ( 
        <section
        id="LandingPage"
        className="
            h-fit
            flex
            flex-row"
        >
        <div className="w-full justify-around items-center flex flex-col mb-10">
            <h1 className="text-4xl font-bold leading-[80px] mb-10">{content.title}</h1>
            <div id="top" className="w-full flex justify-between mb-10">
            {
            content.threeColumn.map((img, index)=>{
                return(
                    <Card key={index+img} className="w-[30%] h-[215px] flex items-center justify-center">
                        <CardContent >
                        <Image
                            width={150}
                            height={150}
                            src={img}
                            alt={"Image"}
                            />
                        </CardContent>
                    </Card>
                )
            })
            }
            </div>
            <div id="bottom" className="w-full flex justify-between">
            {
            content.twoColumn.map((img, index)=>{
                return(
                    <Card key={index+img} className=" w-[47.5%]  h-[215px] flex items-center justify-around">
                        <CardContent >
                        <Image
                            width={150}
                            height={150}
                            src={img}
                            alt={"Image"}
                            />
                        </CardContent>
                    </Card>
                )
            })
            }
            </div>
        </div>
    </section>
     );
}
 
export default BenefitsSection;