import { webDesignData } from './data';
import ProductCard from '../ProductCard';

export default function WebDesign() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-1.5 gap-y-6">
      {webDesignData.map(item => (
        <ProductCard key={item.id} id={item.id}  coverImg={item.coverImg} tags={item.tags} />
      ))}
    </div>
  );
}
