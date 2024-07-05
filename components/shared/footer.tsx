import dribble from "@/public/dribble.png";
import insta from "@/public/insta.png";
import logo from "@/public/logo1.png";
import twitter from "@/public/twitter.png";
import youtube from "@/public/youtube.png";
import { Send } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const arr = [twitter, youtube, dribble, insta];

const Footer = () => {
  return (
    <div className="w-full flex py-8 max-lg:flex-col justify-center lg:gap-48 text-white bg-secondary-500">
      <div className="flex flex-col lg:items-start items-center gap-5 py-4">
        <div className="flex gap-1 items-center">
          <Image
            src={logo}
            alt="logo"
            width={35}
            height={35}
            className="object-cover"
          />
          <span>Nexcent</span>
        </div>
        <div className="flex flex-col max-lg:text-center small-regular gap-2">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved.</p>
        </div>
        <div className="w-full flex lg:justify-around justify-center gap-4 lg:gap-0">
          {arr.map((item, index) => (
            <Button
              key={index}
              size={"icon"}
              className="rounded-full flex items-center p-1 justify-center"
            >
              <Image src={item} alt="icon" width={20} height={20} />
            </Button>
          ))}
        </div>
      </div>

      <div className="flex lg:gap-20 flex-col md:flex-row justify-around gap-3 items-center lg:items-start">
        <div className="gap-14 flex">
          {[
            {
              title: "Company",
              data: ["About", "Blog", "Contact As", "Pricing", "Testimonials"],
            },
            {
              title: "Company",
              data: [
                "Help center",
                "Terms of service",
                "Legal",
                "Privacy policy",
                "Status",
              ],
            },
          ].map((item, index) => (
            <div key={index} className="h-full flex flex-col">
              <p className="text-sm font-bold py-2">{item.title}</p>
              <ul className="text-xs flex flex-col gap-2">
                {item.data.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 max-sm:pt-5 max-md:items-center">
          <h3>Stay up to date</h3>
          <div className="relative ml-auto rounded-lg text-white bg-neutral-500 flex-1 md:grow-0">
            <Input
              placeholder="Your email address"
              className="w-full rounded-lg placeholder:text-white bg-transparent border-none outline-none pr-8 focus-visible:ring-0 text-white md:w-[260px]"
            />
            <Send className="absolute right-2.5 top-3 h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
