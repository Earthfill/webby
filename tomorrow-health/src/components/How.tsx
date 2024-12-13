import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { pages } from "@/data";

interface HowProps {
  name: string;
}

export default function How({ name }: HowProps) {
  const renderedPages = pages.filter((page) => page.title !== name);
  return (
    <div className="pt-10 px-3 xl:px-36 lg:px-28">
      <h1 className="text-center textGray tracking-wide">How can we help you?</h1>
      <div className="grid lg:grid-cols-3 px-5 gap-5 [&>*]:cursor-pointer py-16">
        {renderedPages.map((section, index) => (
          <Link
            key={index}
            href={section.path}
            className="lg:relative rounded-2xl overflow-hidden group"
          >
            <Image
              src={section.image}
              alt={`${section.title.toLowerCase()} image`}
              className="hidden lg:block w-full h-auto transition-transform duration-500 hover:scale-110"
            />
            <div className="lg:absolute lg:bottom-10 w-full flex justify-between px-8">
              <div className="lg:text-white hover:text-gray-600 text-2xl font-bold tracking-wider">
                {section.title}
              </div>
              <div className="text-black lg:text-white border-2 lg:border-none bg-white lg:bg-gray-400/40 p-2 rounded-full lg:transition-colors lg:duration-300 lg:group-hover:bg-gray-400/80">
                <ChevronRight />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}