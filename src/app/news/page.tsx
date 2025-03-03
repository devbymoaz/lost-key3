import NewsHeroSection from "../components/sections/newsHeroSection";

export default function Page() {
  return (
    <div>
      <NewsHeroSection
        imageSrc="/pexels-busra-altin-60338887-30780540.jpg"
        title="Latest News"
        subtitle="Stay updated with the latest information."
        overlayOpacity="bg-opacity-80"
      /> 
    </div>
  );
}
