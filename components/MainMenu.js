// Author: Jdr785
import Link from 'next/link';
import { useState } from 'react';

const parties = [
  { name: "Labour", color: "#e4003b" },
  { name: "Conservative", color: "#0087dc" },
  { name: "Lib Dem", color: "#fdbb30" },
  { name: "Reform", color: "#12b6cf" },
  { name: "Greens", color: "#6ab023" },
  { name: "SNP", color: "#fdf38e" },
  { name: "Plaid Cymru", color: "#3f8428" },
  { name: "Independents", color: "#888" },
  { name: "Raving Looneys", color: "#ff69b4" },
];

export default function MainMenu() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="w-full flex justify-center bg-white shadow-md z-10 sticky top-0">
      <ul className="flex space-x-4 py-3 font-semibold">
        <li><Link href="/">Home</Link></li>
        <li
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="focus:outline-none">UK Politics</button>
          {showDropdown && (
            <ul className="absolute left-0 top-full bg-white border rounded shadow-lg z-20">
              {parties.map(party => (
                <li key={party.name}>
                  <a
                    href={`#party-${party.name.replace(/\s/g, '').toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                    style={{ color: party.color }}
                  >
                    {party.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li><a href="#economy">UK Economy</a></li>
        <li><Link href="/articles">Articles</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
