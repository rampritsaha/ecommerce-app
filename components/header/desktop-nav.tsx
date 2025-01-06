'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/fruits', label: 'Fruits' },
  { href: '/vegetables', label: 'Vegetables' },
  { href: '/seasonal', label: 'Seasonal' },
  { href: '/deals', label: 'Deals' },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center space-x-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            pathname === link.href ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
