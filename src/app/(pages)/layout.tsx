import MenuBar from "@/components/shared_/Navigation/menu-bar";

export default function BaseLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex flex-col">
            <MenuBar/>
            <section id="Content">
                {children}
            </section>
        </div>

    )
}