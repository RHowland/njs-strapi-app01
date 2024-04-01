// Component Name: Banner

import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";


interface IBannerProps {
  bnr_heading: string;
  bnr_paragraph: string;
  bnr_image: {
    url: string;
    alt: string;
  };
}

const Banner: FC<Partial<IBannerProps>> = ({bnr_heading,bnr_image,bnr_paragraph}) => {
  return (
    <div className="container my-24 flex gap-10 flex-col justify-center items-center md:flex-row">
      {/* Section 1 */}
      <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="font-bold text-4xl">{bnr_heading ? bnr_heading : "Discover the Power of Our Services"}</h1>
          <p>{bnr_paragraph ? bnr_paragraph : "Transform your business with our innovative solutions."}</p>
          {/* Section 2 */}
          <div className="flex gap-2 justify-center md:justify-start">
            <Link className="bg-primary-900 hover:bg-primary-700 text-white px-4 py-2" href="#">Learn More</Link>
            <Link className=" text-primary-900 hover:text-primary-500 px-4 py-2" href="#">Sign Up</Link>
          </div>
      </div>
      {/* Secction 3 */}
      <div>
        <Image 
          src= {bnr_image ? bnr_image.url : "/PicturePlaceholder.png"}
          alt={bnr_image ? bnr_image.alt : "This is simple placeholder image"}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Banner;


/**
 * ---------------------------------------------------------------------
 * File Name      : Banner.tsx
 * Component Name : Banner
 * Component Type : Banner
 * Date Created   : 2024-04-01
 * Dev Initials   : Elias Emon
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer  : This component was necessary to provide a reusable and standardized way of displaying banners with dynamic content and images throughout the
 * application.
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer  :  The Banner component renders a banner section containing a heading, paragraph, and image. It allows customization of the banner content and
 * image through props. If props are not provided, default content and placeholder image are displayed.
 *
 * ------------------------------
 * Section Comments:   (Enter "none" if you have no comments)
 * Section 1:
 * Renders the banner content, including heading, paragraph, and action buttons, with dynamic content or default values.
 * 
 * Section 2:
 * Renders action buttons, such as "Learn More" and "Sign Up", wrapped in Link components.
 * 
 * Section 3:
 * Renders the banner image, either using the provided image URL or a default placeholder image if no URL is provided.
 * 
 * ------------------------------
 * Input Comments:     (Enter "none" if you have no comments)
 * None
 * ------------------------------
 * Output Comments:    (Enter "none" if you have no comments)
 * None
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer  : NO.
 *
 */