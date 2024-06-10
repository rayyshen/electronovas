import Image from "next/image";
import SiteHeader from "@/components/site-header";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Marquee from "react-fast-marquee";


export default function Home() {
  return (
    <main>
      <SiteHeader />
      <div className="grid max-w-screen-xl px-4 py-4 md:py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="flex md:mt-10 lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/team.png" alt="Team Picture" className="rounded-lg md:max-h-full px-12 py-5" />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">The Electronovas</h1>
          <h1 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none dark:text-white text-[#A3B4DA]">FTC #18264</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The Electronovas are an award-winning community robotics team composed of eleven high school
            students from the Northern Virginia Area. The 2024 season will mark our 4th year participating in FIRST Tech Challenge (FTC), an annual competition where students from around the world build robots
            to complete game challenges. For more information on FIRST and the FTC competition, visit the <a className="underline" href="https://www.firstinspires.org/robotics/frc">official FIRST website.</a></p>
          <Button asChild>
            <Link href="about"><ArrowRight className="mr-2" />Learn More</Link>
          </Button>
        </div>
      </div>
      <section className="flex flex-col items-center pb-12">
        <h2 className="text-center text-3xl leading-6 px-2 md:px-0">Thank you to our wonderful sponsors that support our team!</h2>
        <div className="mt-8 flex flex-wrap justify-center items-center max-w-full sm:max-w-xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-full gap-8 lg:gap-12 2xl:gap-16 slider">
          <Marquee gradient={true}>
              <Image
                src="/bechtel.jpg"
                height={300}
                width={300}
                alt="bechtel"
                className="mx-5"
              />
              <Image
                src="/leidos.png"
                height={300}
                width={300}
                alt="leidos"
                className="mx-5"
              />
              <Image
                src="/octo.png"
                height={300}
                width={300}
                alt="octo"
                className="mx-5"
              />
              <Image
                src="/raytheon.png"
                height={300}
                width={300}
                alt="raytheon"
                className="mx-5"
              />
              <Image
                src="/lockheedmartin.png"
                height={300}
                width={300}
                alt="lockheedmartin"
                className="mx-5"
              />
          </Marquee>
        </div>
      </section>
    </main>
  );
}
