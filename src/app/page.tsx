import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <header className='flex justify-between bg-neutral-900 pl-4 pr-4 pt-2 h-12 w-[90vw]'>
        <h1>Homepage</h1>
        <UserButton afterSignOutUrl="/"/>
      </header>
      <section id='Content'>
        <p>This is the content of the homepage</p>
      </section>
    </main>
  )
}
