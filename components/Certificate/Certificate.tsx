import Image from "next/image";
import React from "react";

type Props = {};

const Certificate = (props: Props) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <Image
        width={800}
        height={800}
        src="/assets/images/certi2.jpeg"
        alt="certi"
      />
    </div>
  );
};

export default Certificate;
