import type { PageWithLayout } from '@T/pages'
import type { GetServerSidePropsContext } from 'next'
import Link from 'next/link'

type Props = {}

export const getServerSideProps = async (_ctx: GetServerSidePropsContext) => {
    return { props: {} }
}

const Home: PageWithLayout<Props> = () => {
    return (
        <main className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-center mb-2.5 text-3xl lg:text-5xl lg:mb-3">
                Hello, We&apos;re{' '}
                <u className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                    Systach.
                </u>
            </h1>
            <p className="mb-5 lg:mb-6 text-center font-light text-neutral-400 uppercase tracking-[0.075rem lg:text-lg">
                We{' '}
                <Link href="/explore" rel="noreferrer">
                    <a className="transition-all duration-[0.35s] ease-in-out lg:hover:text-blue-500/50 lg:hover:underline">
                        Build Systems
                    </a>
                </Link>{' '}
                Your Business Needs.
            </p>
            <div className="flex justify-center items-center mb-4 lg:mb-6">
                <Link rel="noreferrer" href="/explore">
                    <a className="inline-block px-8 py-4 rounded-md font-medium border border-neutral-900 lg:hover:bg-neutral-900 lg:hover:text-white">
                        Explore What We Built
                    </a>
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <a
                    href="mailto:systachgate@gmail.com"
                    className="text-sm transition-all duration-[0.35s] ease-in-out text-neutral-400 lg:hover:text-neutral-400 lg:hover:underline"
                >
                    systachgate@gmail.com
                </a>
            </div>
        </main>
    )
}

Home.getLayout = (page) => page

export default Home
