import { illustrationVisualAssetsData } from './data';
import ProductCard from '../ProductCard';

export default function IllustrationVisualAssets() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-1.5 gap-y-6">
      {illustrationVisualAssetsData.map(item => (
        <ProductCard key={item.id} id={item.id}  coverImg={item.coverImg} tags={item.tags} />
      ))}
    </div>
  );
}
