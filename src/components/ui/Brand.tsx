// Component Name: Brand

import React, { FC } from "react";
import Image from "next/image";

//Section 1
export interface IBrandProps {
  src: string;
  alt: string;
}

//Section 2
const Brand: FC<Partial<IBrandProps>> = ({ src , alt }) => {
  return (
    <div>
      <Image
        src= {src ? src : "/Logo.png"}
        alt= {alt ? alt: "brand logo"}
        width={100}
        height={80}
      />
    </div>
  );
};

export default Brand;

/**
 * ---------------------------------------------------------------------
 * File Name      : Brand.tsx
 * Component Name : Brand
 * Component Type : ui
 * Date Created   : 2024-03-31
 * Dev Initials   : Elias Emon
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer  : This component was created to provide a reusable and standardized way of displaying a brand logo or image throughout the application.
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer  : This component renders a brand logo or image. It accepts a src prop, which specifies the image URL, and an alt prop for alternative text. If the src prop is not provided, it defaults to a local logo image ("/Logo.png").
 *
 * ------------------------------
 * Section Comments:   (Enter "none" if you have no comments)
 * Section 1: Defines the interface IBrandProps, specifying the expected props for the Brand component, including src and alt attributes for the image.
 * 
 * Section 2: Implements the Brand functional component using React's FC (FunctionComponent) type. It accepts Partial<IBrandProps> as props, allowing some
 * props to be optional. The component renders an Image component from Next.js, displaying the brand logo specified by the src prop. If src is not provided,
 * it defaults to a local logo image.
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
 * 
 */
/**
* =====================================================================
*   COMPONENT  REVISION
* =====================================================================
* Date Revised : 2024-03-01          (last date you made a code change)
* Dev Initials : Elias Emon
* ------------------------------
* Question: Why was it necessary to revise this component?
* Answer  : The revision was necessary to improve accessibility by providing a more descriptive alt text for the brand logo image.
*
* ------------------------------
* Describe Your Change(s): 
* - Implemented dynamic updating of the alt tag for the image in the Brand component, allowing developers to pass alternative text as a prop and enhance
* accessibility for users with screen readers.
* 
* ------------------------------
* Section Comments:    (Enter "none" if you have no comments)
* none
* ------------------------------
* Input Comments:      (Enter "none" if you have no comments)
* none
* ------------------------------
* Output Comments:     (Enter "none" if you have no comments)
* None
* ------------------------------
* Additional Comments:
* Question: Did you have to write any unusual code? 
* Answer  : NO
*
*/