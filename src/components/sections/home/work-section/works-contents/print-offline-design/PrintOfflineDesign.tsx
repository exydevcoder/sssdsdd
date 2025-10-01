import { printOfflineDesignData } from './data';
import ProductCard from '../ProductCard';

export default function PrintOfflineDesign() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-1.5 gap-y-6">
      {printOfflineDesignData.map(item => (
        <ProductCard key={item.id} id={item.id}  coverImg={item.coverImg} tags={item.tags} title={item.title}  />
      ))}
    </div>
  );
}
