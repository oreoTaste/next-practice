import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function NavBar() {
    const {pathname} = useRouter();
    return (
        <nav>
            <Image src="/vercel.svg" alt="logo" width="100px" height={"100%"}/>
            <Link href="/">
                <a className={pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/test">
                <a className={pathname === "/test" ? "active" : ""}>Test</a>
            </Link>
            <style jsx>{`
                a {
                    text-decoration: none;
                }
                .active {
                    color: red;
                    background: yellow;
                }
            `}</style>
        </nav>
    )
}