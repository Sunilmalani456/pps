"use client";

import { useEffect, useRef } from "react";
import icon1 from "@/public/icon1.png";
import icon2 from "@/public/icon2.png";
import icon3 from "@/public/icon3.png";
import icon4 from "@/public/icon4.png";
import Image from "next/image";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

type CounterProps = {
  from: number;
  to: number;
};

const arr = [
  {
    icon: icon1,
    title: "Members",
    count: 2245341,
  },
  {
    icon: icon2,
    title: "Clubs",
    count: 46328,
  },
  {
    icon: icon3,
    title: "Event Bookings",
    count: 828867,
  },
  {
    icon: icon4,
    title: "Payments",
    count: 1926436,
  },
];

const Counter = () => {
  return (
    <div className="w-full flex max-sm:flex-col justify-center px-5 py-8 items-center bg-neutral-100 max-sm:gap-3">
      <div className="w-full max-w-sm max-sm:text-center py-5">
        <h1 className="text-2xl font-bold">Helping a local</h1>
        <h1 className="text-xl text-primary-500 font-bold">
          business reinvent itself
        </h1>
        <p className="text-gray-500 text-xs">
          We reached here with our hard work and dedication.
        </p>
      </div>
      <div className="flex items-center max-w-xs flex-wrap justify-around gap-4">
        {arr.map((index) => (
          <div key={index.title} className="flex items-center gap-2">
            <Image
              src={index.icon}
              alt={index.title}
              width={30}
              height={30}
              className="object-cover"
            />
            <div>
              {/* <h1 className="font-bold">{index.count}</h1> */}
              <AnimatedCounter from={0} to={index.count} />
              <p className="text-gray-500 text-xs">{index.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function AnimatedCounter({ from, to }: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest);
  });
  const ref = useRef(null);
  const inView = useInView(ref);

  // while in view animate the count
  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 1 });
    }
  }, [count, inView, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default Counter;
