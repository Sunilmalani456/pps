import React from "react";
import client1 from "@/public/client1.png";
import client2 from "@/public/client2.png";
import client3 from "@/public/client3.png";
import client4 from "@/public/client4.png";
import client5 from "@/public/client5.png";
import client6 from "@/public/client6.png";
import client7 from "@/public/client7.png";
import Image from "next/image";
import card1 from "@/public/card1.png";
import card2 from "@/public/card2.png";
import card3 from "@/public/card3.png";

const arr = [client1, client2, client3, client4, client5, client6, client7];
const arr2 = [
  {
    image: card1,
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    image: card2,
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    image: card3,
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
];
const Client = () => {
  return (
    <div className="w-full">
      {/* SECTION FIRST */}
      <div className="w-full flex flex-col gap-5 pt-5">
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          <h2 className="h1-bold">Our Clients</h2>
          <p className="subtle-medium text-slate-600">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="w-full flex justify-around items-center">
          {arr.map((client, index) => (
            <Image
              key={index}
              src={client}
              alt="client"
              width={50}
              height={50}
            />
          ))}
        </div>
      </div>

      {/* SECTION TWO */}
      <div className="w-full flex pt-10 flex-col items-center text-center gap-3">
        <div className="flex flex-col text-xl text-gray-600 gap-1 sm:text-4xl font-bold">
          <h2>Manage your entire community</h2>
          <h2>in a single system </h2>
        </div>

        <p className="small-regular">Who is Nextcent suitable for?</p>
      </div>

      <div className="w-full flex justify-around flex-wrap py-12">
        {arr2.map((card, index) => (
          <>
            <Card card={card} />
          </>
        ))}
      </div>
    </div>
  );
};

const Card = ({
  card,
}: {
  card: {
    image: any;
    title: string;
    description: string;
  };
}) => {
  return (
    <div className="w-full max-w-[270px] p-3 py-4 shadow-md rounded-md flex flex-col gap-2 items-center">
      <Image
        src={card.image}
        alt="card"
        width={40}
        height={40}
        className="object-cover"
      />
      <div className="w-full flex gap-3 flex-col items-center text-center">
        <h2 className="text-3xl leading-12 font-bold">{card.title}</h2>
        <p className="small-medium px-3">{card.description}</p>
      </div>
    </div>
  );
};

export default Client;
