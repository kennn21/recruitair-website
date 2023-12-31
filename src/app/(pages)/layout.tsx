import AIChatButton from "@/components/chatbot/AIChatButton";
import Footer from "@/components/shared_/Navigation/footer";
import MenuBar from "@/components/shared_/Navigation/menu-bar";
import { ModeToggle } from "@/components/shared_/theme-mode-toggle";

export default function BaseLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex flex-col w-[90vw] justify-start items-center">
            <MenuBar/>
            <section id="Content" className="w-full min-h-[100vh] mt-12">
                {children}
            </section>
            <Footer/>
            <div id="floating" className="fixed bottom-10 right-10 flex gap-2">
                <AIChatButton />
                <ModeToggle/> 
            </div>
        </div>

    )
}