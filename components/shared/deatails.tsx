import Image from "next/image";
import React from "react";
import cover1 from "@/public/cover1.png";
import cover2 from "@/public/cover2.png";
import { Button } from "../ui/button";
import client1 from "@/public/client1.png";
import client2 from "@/public/client2.png";
import client3 from "@/public/client3.png";
import client4 from "@/public/client4.png";
import client5 from "@/public/client5.png";
import client6 from "@/public/client6.png";
import { ArrowRight } from "lucide-react";

const arr = [client1, client2, client3, client4, client5, client6];

const Detail = ({
  type,
  leftImage,
}: {
  type: "one" | "two";
  leftImage: "yes" | "no";
}) => {
  return (
    <div
      className={`w-full flex my-5 max-sm:flex-col items-center justify-around ${
        leftImage === "yes" ? "" : "bg-neutral-100 py-6 my-2"
      }`}
    >
      {type === "one" ? (
        <Image
          src={cover1}
          alt="client"
          width={380}
          height={380}
          className="object-cover"
        />
      ) : (
        <>
          {leftImage === "yes" ? (
            <Image
              src={cover2}
              alt="client"
              width={380}
              height={380}
              className="object-cover"
            />
          ) : (
            <div className="w-[210px]"></div>
          )}
        </>
      )}
      <div className="w-full max-w-xl flex flex-col sm:gap-1 sm:text-start text-center px-5 gap-3 items-center sm:items-start">
        {type === "one" ? (
          <>
            <h2 className="h1-bold">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="body-regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </>
        ) : (
          <>
            {leftImage === "yes" ? (
              <>
                <h2 className="h1-bold max-sm:px-3 py-5">
                  How to design your site footer like we did{" "}
                </h2>
                <p className="body-regular max-sm:px-3">
                  Donec a eros justo. Fusce egestas tristique ultrices. Nam
                  tempor, augue nec tincidunt molestie, massa nunc varius arcu,
                  at scelerisque elit erat a magna. Donec quis erat at libero
                  ultrices mollis. In hac habitasse platea dictumst. Vivamus
                  vehicula leo dui, at porta nisi facilisis finibus. In euismod
                  augue vitae nisi ultricies, non aliquet urna tincidunt.
                  Integer in nisi eget nulla commodo faucibus efficitur quis
                  massa. Praesent felis est, finibus et nisi ac, hendrerit
                  venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </p>
              </>
            ) : (
              <p className="body-regular">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
            )}
          </>
        )}
        {leftImage === "yes" ? (
          <div className="pt-5">
            <Button
              className="bg-shade-100 text-white hover:bg-shade-100"
              size={"sm"}
            >
              Learn More
            </Button>
          </div>
        ) : (
          <div>
            <div className="flex flex-col gap-1 py-2">
              <h3 className="text-primary-500 h3-semibold">Tim Smith</h3>
              <p className="small-regular text-slate-500">
                British Dragon Boat Racing Association
              </p>
            </div>
            <div className="flex flex-col items-center sm:flex-row justify-around gap-6 py-3">
              <div className="flex justify-around gap-5 items-center">
                {arr.map((client, index) => (
                  <Image
                    key={index}
                    src={client}
                    alt="card"
                    width={30}
                    height={30}
                    className="object-cover"
                  />
                ))}
              </div>
              <p className="flex gap-2 text-primary-500 items-center">
                Meet all customers{" "}
                <span>
                  <ArrowRight className="text-primary-500 w-4 h-4" />
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
