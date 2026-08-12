import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEstablishment } from "@/sanity/lib/getEstablishment(s)";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

import { Review } from "@/types/EstablishmentInfo";
import { getApprovedReviews } from "@/lib/db/reviews";
import FaqCard from "@/components/UI/Cards/FaqCard";
import ReviewCard from "@/components/UI/Cards/ReviewCard";
import { AddReviewModal } from "@/components/UI/Modals/AddReviewModal";
import BadRequest from "@/components/UI/Sections/BadRequest";

export const dynamic = "force-dynamic";

function PriceLevel({ level }: { level?: number }) {
  if (!level) {
    return null;
  }

  return (
    <span className="text-lg">
      <span className="text-brandDark">{"$".repeat(level)}</span>
      <span className="opacity-30">{"$".repeat(4 - level)}</span>
    </span>
  );
}

export default async function EstablishmentPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;

  const {
    slug
  } = params;

  let establishmentInfo;

  try {
    establishmentInfo = await getEstablishment(slug);
  } catch (error) {
    return <BadRequest />;
  }

  if (establishmentInfo.length === 0) {
    notFound();
  }

  const establishment = establishmentInfo[0];
  const {
    _id,
    name,
    displayImage,
    about,
    place,
    country,
    category,
    rating,
    priceLevel,
    address,
    contact,
    coordinates,
    faqs,
  } = establishment;

  const approvedReviews = await getApprovedReviews(_id);
  const reviews: Review[] = approvedReviews.map((review) => ({
    _key: review.id,
    name: `${review.firstName} ${review.lastName}`,
    title: review.title,
    description: review.description,
    rating: review.rating,
    date: review.createdAt.toISOString(),
  }));

  return (
    <main className="mx-auto max-w-[1440px] space-y-24 pt-20 lg:pt-24 xl:pt-0">
      <section className="relative min-h-[400px] xl:min-h-[50dvh]">
        {displayImage?.url && (
          <Image
            src={displayImage.url}
            fill
            alt={displayImage.alt || name}
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 flex flex-col justify-end gap-2 p-6 text-white backdrop-brightness-40 xl:p-8">
          {category && <p className="text-brandLight">{category}</p>}
          <h1 className="text-5xl md:text-7xl">{name}</h1>
          <p className="text-lg opacity-80">
            {[place, country].filter(Boolean).join(", ")}
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-12 px-6 lg:grid-cols-3 xl:px-8">
        <div className="space-y-6 lg:col-span-2">
          <div className="flex items-center gap-4">
            {typeof rating === "number" && (
              <p className="text-2xl">
                <span className="text-brandDark">{rating.toFixed(1)}</span>{" "}
                rating
              </p>
            )}
            <PriceLevel level={priceLevel} />
          </div>

          {about && <p className="text-lg opacity-80">{about}</p>}
        </div>

        <div className="space-y-4 rounded-xl border border-black p-6 dark:border-gray-400">
          <p className="text-2xl">Contact</p>

          {address && (
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 shrink-0" size={18} />
              <span>{address}</span>
            </p>
          )}

          {contact?.telephone && (
            <p className="flex items-center gap-3">
              <Phone size={18} />
              <span>{contact.telephone}</span>
            </p>
          )}

          {contact?.email && (
            <p className="flex items-center gap-3">
              <Mail size={18} />
              <a href={`mailto:${contact.email}`} className="underline">
                {contact.email}
              </a>
            </p>
          )}

          {contact?.website && (
            <p className="flex items-center gap-3">
              <Globe size={18} />
              <a
                href={contact.website}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Visit website
              </a>
            </p>
          )}

          {coordinates && (
            <Link
              href={`https://www.openstreetmap.org/?mlat=${coordinates.lat}&mlon=${coordinates.lng}#map=16/${coordinates.lat}/${coordinates.lng}`}
              target="_blank"
              className="inline-block underline"
            >
              View on map
            </Link>
          )}
        </div>
      </section>

      <section className="space-y-8 px-6 xl:px-8">
        <p className="text-center text-4xl dark:text-white md:text-5xl">
          Reviews
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          <AddReviewModal establishmentId={_id} />
          {reviews.map((review) => (
            <ReviewCard review={review} key={review._key} />
          ))}
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="space-y-8 px-6 pb-24 xl:px-8">
          <p className="text-center text-4xl dark:text-white md:text-5xl">
            FAQs
          </p>

          <div className="grid grid-cols-1 gap-12 text-white md:grid-cols-2 lg:grid-cols-3">
            {faqs.map((faq) => (
              <FaqCard key={faq._key} faq={faq} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
