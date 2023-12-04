import { Carousel } from 'components/carousel';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { GridTileImage } from 'components/grid/tile';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <>
   
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="mx-auto max-w-full ">
        <div className="flex flex-col dark:bg-black lg:flex-row lg:gap-8 border-b-2 border-solid border-black">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery
              images={product.images.map((image: Image) => ({
                src: image.url,
                altText: image.altText
              }))}
            />
          </div>

          <div className="pattern-1 basis-full lg:basis-2/6 p-10 border-l-2 border-solid border-black">
            <ProductDescription product={product} />
          </div>
        </div>
        <Marquee
        className="w-full select-none border-b-4 border-yellow-400 bg-yellow-300 px-4 text-center text-lg font-extrabold"
        autoFill
      >
        <img
          src="https://res.cloudinary.com/dbnslnawc/image/upload/v1698364896/DullWeen/dk6kn0nddn2iboxt4zsc.png"
          alt=""
          style={{ height: '29px' }}
        />
      </Marquee>
        <Suspense>
          <RelatedProducts id={product.id} />
        </Suspense>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  

  return (
    <div className="pattern-4 py-15">
      <h2 className="mb-4 text-2xl font-bold text-white text-center">You May Also Like: </h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1 no-scroll-bar">
        <Carousel />
        
      </ul>
    </div>
  );
}


const RecommendedProducts = async ({ id }: { id: string }) => {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;
  return (
    <>
    {relatedProducts.map((product) => (
      <li
        key={product.handle}
        className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
      >
        <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
          <GridTileImage
            alt={product.title}
            label={{
              title: product.title,
              amount: product.priceRange.maxVariantPrice.amount,
              currencyCode: product.priceRange.maxVariantPrice.currencyCode
            }}
            src={product.featuredImage?.url}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
          />
        </Link>
      </li>
    ))}
    </>
  )
}