import React,{ FC }  from "react";
import Brand, { IBrandProps } from "@/components/ui/Brand";
import Link from "next/link";

// Section 1
interface INavLink {
  name: string;
  url: string;
}

const navLinks: INavLink[] = [
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

const Header: FC< Partial<IHeaderProps>> = ({brand}) => {
  return (
    <header className="bg-white py-2 sticky top-0 z-50">
      <div className="container flex gap-5 items-center">
        <Brand {...brand}/>

{/* Section 2 */}
        <ul className="hidden sm:flex">
          {navLinks.map((v,i)=>(
            <Link key={i} href={v.url}>
              <li className="nav-link">{v.name}</li>
          </Link>
          ))}
        </ul>

      </div>
    </header>
  );
};

export default Header;