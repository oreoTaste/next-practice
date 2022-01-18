import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
    const {pathname} = useRouter();
    return (
        <nav>
            <Link href="/">
                <a className={pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/test">
                <a className={pathname === "/test" ? "active" : ""}>Test</a>
            </Link>
            <style jsx>{`
                a {
                    color: black;
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