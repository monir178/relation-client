import { AddToCart } from "./AddCart";
import { Carousel } from "./ProductCausel";
import { ProductDetails } from "./ProductDetails";
import { ProductInfo } from "./ProductInfo";
import { RelatedProducts } from "./RelatedProduct";
import { SizeSelector } from "./SizeSelect";
import { ShareButtons } from "./SocialButton";

export default function SingleProduct() {
  return (
    <div>
      <div className="container mx-auto px-4 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Product Images */}
          <div className="relative">
            <Carousel images={["/bag.jpg", "/bag.jpg", "/bag.jpg"]} />
          </div>

          {/* Right column - Product Info */}
          <div className="space-y-6">
            <ProductInfo name="Luxury Sandal" price="$67 USD" />

            <SizeSelector sizes={["36", "37", "38", "39", "40", "41"]} />

            <AddToCart />

            <ShareButtons />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="mt-12">
          <ProductDetails />
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-semibold mb-6 text-center">You May Also Like</h2>
        <RelatedProducts />
      </div>
    </div>
  );
}
