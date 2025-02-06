import Banner from "@/components/Banner";
import Campaign from "@/components/Showcase/Campaign";
import Carousel from "@/components/Showcase/Carousel";
import NewArrivals from "@/components/Showcase/NewArraival";
import Product from "@/components/Showcase/Product";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Carousel/>
      <NewArrivals/>
      <Campaign/>
      <Product/>
   
    </div>
  );
}
