'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="mx-auto flex max-w-6xl items-center justify-between px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" h-14 w-full flex-1 rounded-sm bg-transparent placeholder-gray-500 outline-none"
        type="text"
        placeholder="Search keyword..."
      />
      <button
        disabled={!search}
        type="submit"
        className=" text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
