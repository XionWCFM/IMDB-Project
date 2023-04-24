import React from 'react';
import NavbarItem from './NavbarItem';
export default function Navbar() {
  return (
    <div className=" flex items-center justify-center bg-amber-100 p-4 dark:bg-gray-600 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
