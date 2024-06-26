// Component Name: Header

import React,{ FC }  from "react";
import Brand, { IBrandProps } from "@/components/ui/Brand";
import Link from "next/link";
import { ILink } from '@/types/index';
// Section 1


const navLinks: Pick<ILink, 'name' | 'url'>[] = [
  {
    name: "About Us",
    url: "#",
  },
  {
    name: "Services",
    url: "#",
  },
  {
    name: "Contact",
    url: "#",
  },
];

interface IHeaderProps{
  brand: IBrandProps;
}

const Header: FC<Partial<IHeaderProps>> = ({brand}) => {
  return (
    <header className="bg-white py-2 sticky top-0 z-50">
      <div className="container flex gap-5 items-center">
        <Brand {...brand}/>

{/* Section 2 */}
        <ul className="flex gap-2 sm:gap-5">
          {navLinks.map((v,i)=>(
            <Link className="nav-link" key={i} href={v.url}>
              <li>{v.name}</li>
          </Link>
          ))}
        </ul>

      </div>
    </header>
  );
};

export default Header;


/**
 * ---------------------------------------------------------------------
 * File Name      : Header.tsx
 * Component Name : Header
 * Component Type : layout
 * Date Created   : 2024-03-31
 * Dev Initials   : Elias Emon
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer  : This component was necessary to establish a standardized header layout for the application, incorporating a brand logo and navigation links.
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer  :  The Header component renders the application's header section. It includes a brand logo displayed using the Brand component, passed through the
 * brand prop. Additionally, it renders navigation links defined in the navLinks array, allowing users to navigate to different sections of the website.
 *
 * ------------------------------
 * Section Comments:   (Enter "none" if you have no comments)
 * Section 1:
 * Defines the interface INavLink to represent the structure of each navigation link object, containing name and url properties.
 * Also initializes the navLinks array with objects conforming to the INavLink interface. This array holds the navigation links used in the header component.
 * 
 * Section 2: Renders the navigation links by mapping over the navLinks array. Each link is wrapped in a Link component from Next.js, with its href attribute
 * set to the corresponding URL.
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
* Answer  : The revision was necessary to add functionality or make improvements to the Header component.
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