import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import main from "@/public/main.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const ScrollBar = () => {
  return (
    <div className="w-full flex justify-center">
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <>
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-none m-0 bg-neutral-100">
                    <CardContent className="flex border-none items-center justify-around p-8">
                      <div className="flex max-sm:flex-col items-center gap-20">
                        <div className="max-w-xl flex flex-col gap-5 max-sm:items-center max-sm:text-center items-start">
                          <div className="max-sm:px-3">
                            <h2 className="lg:text-5xl text-3xl font-bold lg:leading-[50px]">
                              Lessons and insights{" "}
                              <span className="text-primary-500">
                                from 8 years
                              </span>
                            </h2>
                            <p className="text-sm py-2 max-sm:px-5">
                              Where to grow your business as a photographer:
                              site or social media?
                            </p>
                          </div>
                          <div>
                            <Button className="bg-primary-500 hover:bg-primary-500/90">
                              Register
                            </Button>
                          </div>
                        </div>
                        <Image src={main} alt="1" width={300} height={300} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <CarouselDots className="mt-2" />
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ScrollBar;
