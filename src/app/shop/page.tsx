import ShopCard from "../components/sections/ShopCard";
import ShopSection from "../components/sections/ShopSection";
import { shopItems } from "../utils/data";
export default function Page() {
  return <div>
    <ShopSection />
    <div className="max-w-6xl mx-auto py-16 px-12">
      <h1 className="text-4xl font-bold text-center mb-6">Shop Items</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
        {shopItems.map((item, index) => (
          <ShopCard
          hoverImage="/Teste_die_Funktion.jpg"
            key={index}
            id={item.id}
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
