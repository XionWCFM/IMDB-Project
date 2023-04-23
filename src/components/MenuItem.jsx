import Link from 'next/link';
import React from 'react';

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="mx-4 hover:text-amber-600 lg:mx-6">
        <Icon className="mx-4 text-2xl sm:hidden" />
        <p className=" my-2 hidden text-sm sm:inline">{title}</p>
      </Link>
    </div>
  );
}
