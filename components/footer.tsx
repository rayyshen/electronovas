import { Instagram, Facebook, Youtube } from "lucide-react"


export default function Footer() {
    return (
        <div className="bg-white pt-4 sm:pt-10 lg:pt-12">

            <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="flex flex-col items-center border-t pt-6">
                    <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
                        <a href="/team" className="text-[#3E3E40] transition duration-100 hover:text-[#A3B4DA] active:text-[#A3B4DA]">Our Team</a>
                        <a href="/apply" className="text-[#3E3E40] transition duration-100 hover:text-[#A3B4DA] active:text-[#A3B4DA]">Apply</a>
                        <a href="/donate" className="text-[#3E3E40] transition duration-100 hover:text-[#A3B4DA] active:text-[#A3B4DA]">Donate</a>
                        <a href="/sponsors" className="text-[#3E3E40] transition duration-100 hover:text-[#A3B4DA] active:text-[#A3B4DA]">Sponsor</a>
                        <a href="/contact" className="text-[#3E3E40] transition duration-100 hover:text-[#A3B4DA] active:text-[#A3B4DA]">Contact</a>
                    </nav>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/theelectronovas/" target="_blank" className="text-gray-400 transition duration-100 hover:text-[#A3B4DA] active:text-[#A3B4DA]">
                            <Instagram />
                        </a>
                        <a href="https://www.youtube.com/channel/UCo6M3wszS3-yfnVCcm0eDEQ" target="_blank" className="text-gray-400 transition duration-100 hover:text-[#A3B4DA] active:text-[#A3B4DA]">
                            <Youtube />
                        </a>
                    </div>
                </div>
                <div className="py-8 text-center text-sm text-gray-400">© 2024 - The Electronovas. All rights reserved.</div>
            </footer>
        </div>
    )
}