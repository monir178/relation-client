import Banner from "@/components/Home/Banner";
import Campaign from "@/components/Home/Showcase/Campaign";
import Carousel from "@/components/Home/Showcase/Carousel";
import NewArrivals from "@/components/Home/Showcase/NewArraival";
import Product from "@/components/Home/Showcase/ProductCategory";
import MessageModal from "@/components/Payment/MassageModal";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Carousel/>
      <NewArrivals/>
      <Campaign/>
      <Product/>
      <MessageModal/>
   
    </div>
  );
}
