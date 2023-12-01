import MenuBar from "@/components/shared_/Navigation/menu-bar";
import { ModeToggle } from "@/components/shared_/theme-mode-toggle";

export default function BaseLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex flex-col w-[90vw]">
            <MenuBar/>
            <section id="Content">
                {children}
            </section>
            <div id="floating" className="fixed bottom-10 right-10 flex">
                <ModeToggle/> 
            </div>
        </div>

    )
}