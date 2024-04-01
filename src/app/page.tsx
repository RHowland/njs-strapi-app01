// Component Name: HomePage

import { NextPage } from "next";
import Banner from "@/components/Banner";
import { apiUrl } from "@/utils";
import { IBannerProps } from '@/components/Banner';
export const revalidate = 10;

// Section 1
const getBnrData = async (): Promise<IBannerProps> => {
  const url = apiUrl();
  const res = await fetch(`${url}/api/banner?populate=*`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const {data} = await res.json();

  return ({
    bnr_heading: data?.attributes.bnr_heading as string,
    bnr_paragraph : data?.attributes.bnr_paragraph as string,
    bnr_image : {
      url: `${url}${data?.attributes.bnr_image.data.attributes.url}`,
      alt: data?.attributes.bnr_image.data.attributes.alternativeText
    }
  })  as IBannerProps;
}

const HomePage: NextPage = async () => {
  const bnrData = await getBnrData();
  return (
    <div>
      <Banner {...bnrData}/>
    </div>
  );
};
export default HomePage;

/**
 * ---------------------------------------------------------------------
 * File Name      : page.tsx
 * Component Name : HomePage
 * Component Type : Next Page
 * Date Created   : 2024-04-01
 * Dev Initials   : Elias Emon
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer  : This component was necessary to define the structure and content of the home page of the application.
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer  : The HomePage component is a Next.js page component responsible for rendering the home page of the application. 
 * It fetches banner data from an API endpoint using the getBnrData function and passes it to the Banner component for display.
 *
 * ------------------------------
 * Section Comments:   (Enter "none" if you have no comments)
 * Section 1:
 * Defines a function getBnrData responsible for fetching banner data from an API endpoint.
 * Utilizes the apiUrl function from the @/utils module to construct the API endpoint URL.
 * Sends a GET request to the API endpoint and parses the response.
 * Returns an object conforming to the IBannerProps interface, representing the banner data.
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