// Component Name: RootLayout

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import { IBrandProps } from "@/components/ui/Brand";
import { apiUrl } from "@/utils";

// Section 1
const inter = Inter({
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	subsets: ["latin"],
	variable: "--inter",
});

export const metadata: Metadata = {
  title: "simple site",
  description: "This is simple site description",
};

// Section 2
const getBrandData = async (): Promise<IBrandProps> => {
  const url = apiUrl();
  const res = await fetch(`${url}/api/brand?populate=*`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const {data} = await res.json();

  return ({
    src:`${url}${data?.attributes.brand_logo.data.attributes.url}`,
    alt: data?.attributes.brand_logo.data.attributes.alternativeText
  })  as IBrandProps;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const brandData = await getBrandData();
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header brand={brandData} />
        {children}
        <Footer brand={brandData} />
      </body>
        
    </html>
  );
}

export const revalidate = 10;

/**
 * ---------------------------------------------------------------------
 * File Name      : layout.tsx
 * Component Name : RootLayout
 * Component Type : Next Layout
 * Date Created   : 2024-04-01
 * Dev Initials   : Elias Emon
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer  : This component was necessary to define the layout structure of the application, ensuring consistent header and footer sections across all pages.
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer  : The RootLayout component is a Next.js layout component responsible for wrapping the application's content with a consistent header and footer. It
 * fetches brand data from an API endpoint using the getBrandData function and passes it to the Header and Footer components for display.
 *
 * ------------------------------
 * Section Comments:   (Enter "none" if you have no comments)
 * Section 1:
 * Defines the font Inter from the Google Fonts API with specific weights and configurations using the Inter function.
 * Specifies font display properties, subsets, and CSS variable for Inter font.
 * 
 * Section 2:
 * Defines a function getBrandData responsible for fetching brand data from an API endpoint.
 * Utilizes the apiUrl function from the @/utils module to construct the API endpoint URL.
 * Sends a GET request to the API endpoint and parses the response.
 * Returns an object conforming to the IBrandProps interface, representing the brand logo and alt text.
 * Handles errors if the fetch operation fails.
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
* Answer  : This component underwent revision to optimize font loading performance and refine the dynamic data fetching process for the header and footer sections.
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
