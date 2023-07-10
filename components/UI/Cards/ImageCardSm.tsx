import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import React, { useState } from "react";

const ImageCardSm = ({
  imgsrc,
  index,
}: {
  imgsrc: StaticImageData;
  index: number;
}) => {
  const [hasViewed, setHasViewed] = useState(false);
  return (
    <motion.div
      initial={hasViewed ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.2 * index,
      }}
      onAnimationComplete={() => setHasViewed(true)}
      className={`w-72 aspect-square`}
    >
      <div className="relative w-full h-full overflow-hidden border border-black rounded-xl dark:border-white">
        <Image
          src={imgsrc}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt=""
          placeholder="blur"
        />
      </div>
    </motion.div>
  );
};

export default ImageCardSm;
