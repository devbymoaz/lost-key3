import NewsHeroSection from "../components/sections/newsHeroSection";
import ShopCard from "../components/sections/ShopCard";
import { shopItems } from "../utils/data";
export default function Page() {
  return <div>
    <NewsHeroSection
      imageSrc="/pexels-busra-altin-60338887-30780540.jpg"
      title="Secure your treasures"
      subtitle="Save 10% when you buy 3 products or more"
      overlayOpacity="bg-opacity-80"
    />
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Shop Items</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shopItems.map((item, index) => (
          <ShopCard
            key={index}
        
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  </div>;
}
