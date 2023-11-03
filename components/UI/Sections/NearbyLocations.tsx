"use client";

import React from "react";
import Image from "next/image";
import { getNearbyLocations } from "@/sanity/lib/getNearbyLocations";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { LocationInfo } from "@/types/LocationInfo";

import CarouselSkeleton from "../Carousel/CarouselSkeleton";
import LeftArrow from "../Carousel/LeftArrow";
import RightArrow from "../Carousel/RightArrow";
import { Button } from "../ShadUI/button";

const NearbyLocations = ({
  title,
  experience,
}: {
  title: string;
  experience: string;
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [permission, setPermission] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [items, setItems] = React.useState<LocationInfo[] | null>(null);

  React.useEffect(() => {
    if (permission) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          async function fetchLocations(longitude: number, latitude: number) {
            try {
              const queryResult = await getNearbyLocations(
                experience,
                longitude,
                latitude
              );
              setItems(queryResult);
              setIsLoading(false);
            } catch (error) {
              setIsLoading(false);
              setError(true);
            }
          }

          fetchLocations(position.coords.longitude, position.coords.latitude);
        },
        () => {
          setIsLoading(false);
          setPermission(false);
        }
      );
    }
  }, [isLoading, permission, experience]);

  return isLoading && permission ? (
    <CarouselSkeleton />
  ) : items !== null ? (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-right text-4xl md:text-5xl xl:px-8">
        Nearby {title} locations
      </h1>

      <Swiper
        slidesPerView={4}
        spaceBetween={32}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".button-swipe-next",
          prevEl: ".button-swipe-prev",
        }}
        breakpoints={{
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
          // when window width is >= 1440px
          1440: {
            slidesPerView: 4,
          },
        }}
        allowTouchMove
        modules={[Navigation, Pagination]}
        className="w-full"
      >
        <LeftArrow />

        {items.length === 0 ? (
          <div className="flex h-[300px] w-full flex-col items-center justify-center gap-4 rounded-xl border md:flex-row">
            <p className="text-xl">No related locations were found nearby</p>
            <Button
              onClick={() => setIsLoading(true)}
              className="gap-1 px-6 text-base"
              variant={"plain"}
            >
              Search
            </Button>
          </div>
        ) : (
          items.map((item) => {
            return (
              <SwiperSlide
                key={item._id}
                className="relative flex flex-col gap-5 overflow-hidden rounded-xl border-white"
              >
                <div className="h-[300px] bg-white">
                  <Image
                    src={item.displayImage.url}
                    width={314}
                    height={305}
                    placeholder="blur"
                    className="h-full w-full object-cover"
                    alt={item.displayImage.alt ? item.displayImage.alt : ""}
                  />
                </div>
                <div className="absolute bottom-0 w-full rounded-b-xl p-4 text-white backdrop-blur-sm backdrop-brightness-[25%]">
                  <p className="text-2xl">{item.name}</p>
                </div>
              </SwiperSlide>
            );
          })
        )}

        <RightArrow />
      </Swiper>
    </section>
  ) : (
    <section className="flex flex-col gap-8 px-6 xl:p-8">
      <h1 className="text-4xl md:text-5xl">Nearby {title} locations</h1>

      <div className="flex h-[300px] w-full flex-col items-center justify-center gap-4 rounded-xl border md:flex-row">
        {!permission && (
          <>
            <p className="text-xl">Get nearby related locations</p>
            <Button
              onClick={() => {
                setPermission(true);
              }}
              className="gap-1 px-6 text-base"
              variant={"plain"}
            >
              Search
            </Button>
          </>
        )}

        {error && (
          <>
            <p className="text-xl">
              An error occurred while searching for nearby related locations,
              please retry
            </p>
            <Button
              onClick={() => {
                setIsLoading(true);
              }}
              className="gap-1 px-6 text-base"
              variant={"plain"}
            >
              Retry
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default NearbyLocations;
