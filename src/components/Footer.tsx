// Component Name: Footer

import React, { FC } from "react";
import Brand , { IBrandProps } from "@/components/ui/Brand";
import { ILink } from '@/types/index';
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// Section 1
const footerLinks: Pick<ILink, 'name' | 'url'>[] = [
  {
    name: "About Us",
    url: "#",
  },
  {
    name: "Services",
    url: "#",
  },
  {
    name: "Contact Us",
    url: "#",
  },
  {
    name: "FAQS",
    url: "#",
  },
  {
    name: "Blog",
    url: "#",
  }
];

const socialMediaLinks: ILink[] = [
  {
    name: "FaceBook",
    url: "#",
    iconSrc: <FaFacebook />
  },
  {
    name: "Instagram",
    url: "#",
    iconSrc: <FaInstagram />
  },
  {
    name: "X",
    url: "#",
    iconSrc: <BsTwitterX />
  },
  {
    name: "Linkedin",
    url: "#",
    iconSrc: <FaLinkedin />
  },
  {
    name: "Youtube",
    url: "#",
    iconSrc: <FaYoutube />
  },
]

interface IFooterProps{
  brand: IBrandProps;
}

const Footer: FC< Partial<IFooterProps> > = ({brand}) => {
  return (
    <footer className="border-t-2 border-green-600 py-10">
      <div className="container bg-white flex flex-col items-center gap-4 md:flex-row md:justify-between  ">
        {/* Section 2  */}
        <div>
          <Brand {...brand} />
        </div>
        {/* Secion 3 */}
        <div>
          <ul className="flex gap-1 flex-col md:flex-row md:gap-4">
            {footerLinks.map((v, i) => (
              <Link className="foot-link" key={`footer-link-${i}`} href={v.url}>
                <li >{v.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        {/* Section 4 */}
        <div>
          <ul className="flex gap-5">
            {socialMediaLinks.map((v, i) => (
              <Link key={`social-link-${i}`} href={v.url}>
                  <li className="social-link">{v.iconSrc}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/**
 * ---------------------------------------------------------------------
 * File Name      : Footer.tsx
 * Component Name : Footer
 * Component Type : layout
 * Date Created   : 2024-04-01
 * Dev Initials   : Elias Emon
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer  : This component was necessary to define the layout and content of the footer section of the application.
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer  : The Footer component renders the footer section of the application. It includes branding information, footer links, and social media links.
 *
 * ------------------------------
 * Section Comments:   (Enter "none" if you have no comments)
 * Section 1:
 * Defines arrays footerLinks and socialMediaLinks to hold footer navigation links and social media links, respectively.
 * The footerLinks array contains objects with name and url properties representing the footer navigation links.
 * The socialMediaLinks array contains objects with name, url, and iconSrc properties representing social media links and their corresponding icons.
 * 
 * Section 2:
 * Renders the Brand component within the footer, passing the brand prop.
 * 
 * Section 3:
 * Renders the footer navigation links by mapping over the footerLinks array. Each link is wrapped in a Link component from Next.js, with its href attribute
 * set to the corresponding URL.
 * 
 * Section 4:
 * Renders the social media links by mapping over the socialMediaLinks array. Each link is wrapped in a Link component from Next.js, with its href attribute
 * set to the corresponding URL. The icon for each social media link is rendered using the iconSrc property.
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
/**
* =====================================================================
*   COMPONENT  REVISION
* =====================================================================
* Date Revised : 2024-03-01          (last date you made a code change)
* Dev Initials : Elias Emon
* ------------------------------
* Question: Why was it necessary to revise this component?
* Answer  : The revision was necessary to add functionality or make improvements to the Footer component.
*
* ------------------------------
* Describe Your Change(s): 
* - None
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