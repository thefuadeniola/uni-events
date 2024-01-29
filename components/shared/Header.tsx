import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className='w-full border-b'>
            <div className='wrapper flex items-center justify-between'>
                <Link href='/' className="w-36">
                    <Image src='/assets/images/logo.svg' width={128} height={28} alt="evts logo" />
                </Link>

                <SignedIn>
                    <nav className="hidden md:flex-between w-full max-w-lg">
                        <NavItems />
                    </nav>
                </SignedIn>

                <div className="flex w-32 justify-end gap-3">
                    <SignedIn>
                        <UserButton afterSignOutUrl='/' />
                        <MobileNav />
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="rounded-full" size='lg'>
                            <Link href='/sign-in'>Login</Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}

export default Header