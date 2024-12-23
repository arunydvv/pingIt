import Link from 'next/link'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { SignOutButton, SignInButton } from "@clerk/nextjs"
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { currentUser } from '@clerk/nextjs/server'

const Navbar = async () => {
    const userLoggedIn = await currentUser();

    return (
        <nav className='sticky  z-[100] h-16 top-0 w-full border-b bg-transparent backdrop-blur-lg'>
            <MaxWidthWrapper>
                <div className='flex h-16 items-center justify-between'>
                    <Link href="/" className="flex-40 font-semibold ">
                        <span className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">PingIt</span> 
                    </Link>
                    <div className='h-full flex items-center space-x-4'>
                        {userLoggedIn ? 
                            <>
                                <SignOutButton>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                       
                                    >Sign Out</Button>
                                </SignOutButton>
                                <Link
                                    href="/dashboard"
                                    className={
                                        buttonVariants({
                                            size: "sm",
                                            className: "flex items-center gap-1 bg-blue-600 ", 
                                        })
                                    }
                                >
                                    Dashboard
                                    <ArrowRight className='size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x[2px]' />
                                </Link>

                                
                            </>
                            
                            : 
                            <>
                                <Link
                                    href="/sign-in"
                                    className={
                                        buttonVariants({
                                            size: "sm",
                                            className: "flex items-center gap-1",
                                        })
                                    }
                                >
                                    Sign In
                                    <ArrowRight className='size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x[2px]' />
                                </Link>
                                
                            </>
                        }
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar
