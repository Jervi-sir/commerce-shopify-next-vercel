'use client';

import clsx from 'clsx';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FooterMenu2() {
  return (
    <nav>
      <ul className='flex justify-center'>
        <MenuItem path={''} title={'Home'} />
        <MenuItem path={'about-us'} title={'About us'} />
      </ul>
    </nav>
  );
}

const MenuItem = ({path, title}) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === path);

  useEffect(() => {
    setActive(pathname === path);
  }, [pathname, path]);


  
  return (
    <li>
          <Link
            href={'/' + path}
            className={clsx(
              'block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm',
              {
                'text-black dark:text-neutral-300': active
              }
            )}
          >
            {title}
          </Link>
        </li>
  )
}