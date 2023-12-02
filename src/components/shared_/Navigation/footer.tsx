import { Input } from "@/components/ui/input";
import SiteLogo from "../site-logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {

    const footerLinks = {
        ourStory: [
            {
                label: "FAQ",
                href: "/about/#faq"
            },
            {
                label: "Contact",
                href: "/about/#contact"
            },
        ],
        vacancies: [
            {
                label: "Job list",
                href: "/jobs"
            }
        ],
        memberships: [
            {
                label: "Plus",
                href: '/memberships/plus',
            },
            {
                label: "Pro",
                href: '/memberships/pro',
            },
            {
                label: "Premium",
                href: '/memberships/premium',
            },
        ],
    }

    return ( 
        <footer className="flex flex-row pb-10 justify-between w-full gap-10 pt-10">
            <div id="left" className="w-1/2 flex flex-col gap-5">
                <SiteLogo/>
                <div id="email">
                    <h6 className="mb-2">Updates right to your inbox</h6>
                    <div className="flex gap-5 mb-2">
                        <Input/>
                        <Button>Send</Button>
                    </div>
                    <div id="rights" className="flex gap-5">
                        <h6>RecruitAIR 2023</h6>
                        <h6>Privacy Policy</h6>
                        <h6>Terms of Use</h6>
                    </div>
                </div>
            </div>
            <div id="right" className="w-1/2 flex flex-row justify-end">
                <div id="footer-our-story" className="flex flex-col w-1/5">
                    {
                        footerLinks.ourStory.map((link, index)=>(
                            <Link key={link.label+index} href={link.href}>
                                <h6>{link.label}</h6>
                            </Link>
                        ))
                    }
                </div>
                <div id="footer-vacancies" className="flex flex-col w-1/5">
                {
                        footerLinks.vacancies.map((link, index)=>(
                            <Link key={link.label+index} href={link.href}>
                                <h6>{link.label}</h6>
                            </Link>
                        ))
                    }
                </div>
                <div id="footer-membership" className="flex flex-col w-1/5">
                {
                        footerLinks.memberships.map((link, index)=>(
                            <Link key={link.label+index} href={link.href}>
                                <h6>{link.label}</h6>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;