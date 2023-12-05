import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function PopularProducts() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products, ...products];

  return (
    <div className="pattern-4 w-full overflow-x-hidden pb-6 pt-1">
      <h1 className='px-10 pt-14 text-4xl xs4:text-4xl font-bold text-center tracking-tight select-none text-white'>
        Popular Products
      </h1>
      <section className='container mx-auto flex gap-12 flex-wrap justify-center items-center py-16'

      >
        {carouselProducts.map((product, i) => (
          <div
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
