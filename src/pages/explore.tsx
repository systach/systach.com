import { PageWithLayout } from '@T/pages'
import Link from 'next/link'

const Explore: PageWithLayout = () => {
    return (
        <main className="w-full h-screen flex flex-col justify-center items-center relative">
            <p className="w-full flex justify-center gap-x-1 border-b  border-neutral-400/40 border-dotted uppercase text-neutral-400 pb-4 pt-5 lg:pb-6 lg:pt-7 lg:text-lg fixed top-0 z-40 bg-white/90 backdrop-blur-md">
                The systems that{' '}
                <Link href="/">
                    <span className="uppercase cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                        SYSTACH
                    </span>
                </Link>{' '}
                Built
            </p>
            <ul className="w-full max-w-[400px] p-10 mx-auto">
                <a
                    href="https://github.com/systach/systach.com/blob/master/README.md"
                    target="_blank"
                    className="w-full flex justify-center px-8 py-4 rounded-md bg-neutral-900 text-white border border-neutral-900 lg:hover:bg-white lg:hover:text-neutral-900 font-medium uppercase tracking-[0.075rem] ring ring-transparent lg:hover:ring-neutral-900 transition-all duration-[0.25s]"
                    rel="noreferrer"
                >
                    On-site Systems
                </a>
            </ul>
        </main>
    )
}

Explore.getLayout = (page) => page

export default Explore
