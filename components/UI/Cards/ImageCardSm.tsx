import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import React from "react";

const ImageCardSm = ({
  imgsrc,
  index,
}: {
  imgsrc: StaticImageData;
  index: number;
}) => {
  const [hasViewed, setHasViewed] = React.useState(false);

  return (
    <motion.div
      initial={hasViewed ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.2 * index,
      }}
      onAnimationComplete={() => setHasViewed(true)}
      className={`w-72 aspect-square`}
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <Image
          src={imgsrc}
          width={314}
          height={305}
          alt="Vacation pictures"
          className="object-cover w-full h-full"
          placeholder="blur"
        />
      </div>
    </motion.div>
  );
};

export default ImageCardSm;
