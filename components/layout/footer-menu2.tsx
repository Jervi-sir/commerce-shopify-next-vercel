'use client';

import clsx from 'clsx';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FooterMenu2({isFooter = false}) {
  return (
    <nav>
      <ul className='flex justify-center '>
        <MenuItem path={'/'} title={'Home'} isFooter={isFooter}/>
        <MenuItem path={'/about-us'} title={'About us'} isFooter={isFooter}/>
      </ul>
    </nav>
  );
}

const MenuItem = ({path, title, isFooter = false}) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === path);
  console.log(pathname)

  useEffect(() => {
    setActive(pathname === path);
  }, [pathname, path]);


  
  return (
    <li>
          <Link
            href={'/' + path}
            className={clsx(
              `block p-2 text-lg ${isFooter && 'text-indigo-300'} underline-offset-4 hover:text-red-700 hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm font-semibold`,
              {
                'underline': active
              }
            )}
          >
            {title}
          </Link>
        </li>
  )
}