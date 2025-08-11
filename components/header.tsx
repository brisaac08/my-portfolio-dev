import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="container justify-beetwen max-w-6xl mx-auto md:flex">
                <Link href="/">
                    <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                        Brayan
                        <span className="text-secondary">
                            Dev
                        </span>
                    </h1>
                </Link>
            </div>
        </header>
    )
}

export default Header