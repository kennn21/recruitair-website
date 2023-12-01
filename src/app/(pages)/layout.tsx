import MenuBar from "@/components/shared_/Navigation/menu-bar";

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
        </div>

    )
}