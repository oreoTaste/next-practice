import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function NavBar() {
    const {pathname} = useRouter();
    return (
        <nav>
            <Image src="/vercel.svg" alt="logo" width="100px" height={"100%"} />
            <div className='navbar'>
                <Link href="/">
                    <a>
                        <div className={pathname === "/" ? "active" : ""}>Home</div>
                    </a>
                </Link>
                <Link href="/test">
                    <a>
                        <div className={pathname === "/test" ? "active" : ""}>Test</div>
                    </a>
                </Link>
            </div>
            <style jsx>{`
                .navbar {
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 1.2rem;
                    padding: 1.2rem;
                }
                .navbar div {
                    text-decoration: none;
                    text-align: center;
                    height: 2rem;
                    line-height: 2rem;
                    font-weight: 600;
                    font-size: 1.3rem;
                    background: rgba(0,0,0,.05);
                    border-radius: 10px;
                    color: rgba(0,0,0,0.5);
                    border: 1px solid rgba(0,0,0,0.4);
                }
                .navbar .active {
                    color: darkblue;
                    background: rgba(0, 0, 0, .3);
                    border: 1px solid rgba(0,0,0,0.4);
                }
                .navbar div:hover {
                    color: black;
                    border: 1px solid red;
                }
            `}</style>
        </nav>
    )
}