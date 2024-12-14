import Link from 'next/link'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { SignOutButton } from "@clerk/nextjs"

const Navbar = () => {
    const userLoggedIn = false;

    return (
        <nav className='sticky z-[100] h-16 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg'>
            <MaxWidthWrapper>
                <div className='flex h-16 items-center justify-between'>
                    <Link href="/" className="flex-40 font-semibold ">
                        <span className='text-2xl sm:3xl'>
                            Ping.it
                        </span>
                    </Link>
                    <div className='h-full flex items-center space-x-4'>
                        {userLoggedIn ? 
                            <>
                                <SignOutButton>
                                    <button>
                                        
                                    </button>
                                    </SignOutButton>
                                
                            </>
                            
                            : null}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar
