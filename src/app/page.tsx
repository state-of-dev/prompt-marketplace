import { Header } from '../features/shared/components/header';
import { HeroSection } from '../features/home/components/hero-section';
import { CategoriesSection } from '../features/home/components/categories-section';
import { PromptsGrid } from '../features/home/components/prompts-grid';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <PromptsGrid />
    </div>
  );
}
