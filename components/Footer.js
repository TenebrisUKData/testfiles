// Author: Jdr785
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h4 className="font-bold mb-2">Sitemap</h4>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#politics">UK Politics</Link></li>
            <li><Link href="/#economy">UK Economy</Link></li>
            <li><Link href="/articles">Articles</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0 text-center">
          <p>&copy; {new Date().getFullYear()} Reinformed.uk. All rights reserved.</p>
          <p>Code by Jakob Rose.</p>
        </div>
      </div>
    </footer>
  );
}
