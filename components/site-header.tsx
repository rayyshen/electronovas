import { Github } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { PropsWithChildren } from "react";
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function SiteHeader({ children }: PropsWithChildren) {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-24 items-center">
                <div className="mr-4 md:flex">
                    <a href="/" className="mr-6 flex items-center space -x-2">
                        <Image
                            className="mr-5"
                            src="/head.png"
                            height={55}
                            width={45}
                            alt="Logo"
                            quality={100}

                        />
                        <span className="font-bold sm:inline-block sm:text-5xl text-4xl">The Electronovas</span>
                    </a>
                    <nav className="flex items-center gap-6 text-sm"></nav>
                </div>
                <div className="margin-auto"></div>
                <div className="flex flex-1 items-center space-x-2 justify-end">
                    <nav className="hidden sm:inline-flex flex items-center space-x-10">
                        <a href="team">
                            <span>Our Team</span>
                        </a>
                        <a href="apply">
                            <span>Apply</span>
                        </a>
                        <a href="donate">
                            <span>Donate</span>
                        </a>
                    </nav>
                    <nav className="inline-flex sm:hidden px-8">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Our Team</DropdownMenuItem>
                                <DropdownMenuItem>Apply</DropdownMenuItem>
                                <DropdownMenuItem>Donate</DropdownMenuItem>
                                <DropdownMenuItem>Contact Us</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>
                </div>
            </div>

        </header>
    );
}