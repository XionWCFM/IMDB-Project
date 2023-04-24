'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  console.log(searchParams);
  console.log(genre);
  return (
    <div>
      <Link
        className={`m-4 p-2 font-semibold hover:text-amber-600 ${
          genre === param
            ? 'rounded-lg  underline decoration-amber-500 decoration-4 underline-offset-8'
            : 'text-gray-500'
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
