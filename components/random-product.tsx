import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts, getRandomProduct } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

function ProdcutContainer({
  item,
}: {
  item: Product;
}) {

  
  return (
    <section>
      <div className='bg-white flex items-center border-black border-b-2 flex-col sm:flex-row'>
        {/* PRODUCT DETAILS */}
        <div
          className='pattern-1 relative flex justify-center items-center w-full h-96 sm:h-96 sm:w-1/2 py-12 px-1 xs5:px-4 xs3:px-8 lg:p-16 bg-fuchsia-300 border-black border-b-2 sm:border-r-2 sm:border-b-0'
        >
          <div style={{ position: 'relative', zIndex: 10 }}>
            {/* Hero Text */}
            <h2 className='text-lg xs4:text-3xl xs3:text-5xl font-bold wordSpacingTight tracking-tight uppercase select-none mb-2 text-white'>
              Random Offer
            </h2>

            {/* Product Name */}
            <p className='text-2xl font-medium wordSpacingTight tracking-tight text-slate-100 mb-2'>
              {item.title}
            </p>

            {/* Price */}
            <p className='text-4xl xs3:text-7xl font-black wordSpacingPrice tracking-tight text-emerald-400 mb-5'>
              {true ? (
                // If discounted, show discount price and original price with strikethrough
                <>
                  {/* &euro;  price.unit_amount */}
                  {item.priceRange.maxVariantPrice.amount}
                  <span className=' text-emerald-800 text-xl xs3:text-3xl font-extrabold relative -top-4 left-2 xs3:-top-9 select-none'>
                    {item.priceRange.maxVariantPrice.currencyCode}
                  </span>
                </>
              ) : (
                // If not discounted, show original price
                null
              )}
            </p>

            {/* CTA Button */}
            <Link
              href={`/product/${item.handle}`}
              id='heroButtonCTA'
              className='tripleCardEffect bg-slate-900 text-white text-2xl flex justify-center items-center max-w-[12rem] wordSpacingTight tracking-tight font-medium px-1 xs4:px-11 py-1 rounded-md select-none border-slate-700 border-2 active:border-white'
              style={{
                fontSize: '1.5rem',
              }}
            >
              Own now
            </Link>
          </div>
        </div>

        {/* PRODUCT IMAGE */}
        <div className='relative bg-white w-full h-80 sm:h-96 py-10 sm:w-1/2 flex items-center justify-center'>
          <Image
            className='object-contain max-h-full max-w-full select-none'
            src={item.featuredImage.url}
            alt={item.title}
            width={600}
            height={600}
          />

          {/* Description */}
          <p className='absolute bottom-1 right-3 hidden xs3:block'>
            {item.description}
          </p>
        </div>
      </div>

      {true && (
        <Marquee
          className='w-full bg-yellow-300 text-lg font-extrabold px-4 text-center border-yellow-400 border-b-4 select-none'
          autoFill
        >
          <img src="https://res.cloudinary.com/dbnslnawc/image/upload/v1698364896/DullWeen/dk6kn0nddn2iboxt4zsc.png" alt="" style={{ height: '29px' }} />
        </Marquee>
      )}
    </section>
  );
}

export async function RandomProduct() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getRandomProduct();
 
  return (
    <section className="mx-auto  max-w-screen-4xl ">
      <ProdcutContainer item={homepageItems} />
    </section>
  );
}
