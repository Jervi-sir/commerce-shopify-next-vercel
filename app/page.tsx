import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';
import Marquee from 'react-fast-marquee';

import { Unbounded } from 'next/font/google';
const unbounded = Unbounded({ subsets: ['latin'] });

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <div className="">
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
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </div>
  );
}
