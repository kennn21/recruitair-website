import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col h-[100vh] justify-center items-center overflow-hidden">
      <h1>Landing Page</h1>
      <br/>

      <Link href={'/home'}>
        <Button>Get Started <ChevronRight/></Button>
      </Link>
    </main>
  )
}
