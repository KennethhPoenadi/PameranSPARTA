'use client';

import {
  MapPinIcon,
  HomeIcon,
  TrophyIcon,
  MagnifyingGlassIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { signOut } from 'next-auth/react';  // Import signOut from next-auth

// Map of links to display in the side navigation.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Map',
    href: '/',
    icon: MapPinIcon,
  },
  { name: 'Rewards', href: '/dashboard/rewards', icon: TrophyIcon },
  {
    name: 'About Us',
    href: '/dashboard/about-us',
    icon: MagnifyingGlassIcon,
  },
  // Sign Out option using signOut function
  {
    name: 'Sign Out',
    href: '', 
    icon: PowerIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: '/' }); // Specify the URL to redirect after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href; // Determine if the link is active

        if (link.name === 'Sign Out') {
          return (
            <button
              key={link.name}
              onClick={handleLogout} 
              className={clsx(
                'flex text-lg font-semibold hover:bg-light-green hover:text-custom-green transition rounded-full gap-2 items-center justify-center px-5 py-3',
                {
                  'text-custom-green bg-light-green': isActive, // Active state
                  'text-light-green': !isActive, // Non-active state
                },
              )}
            >
              <LinkIcon className="w-5 sm:w-6" />
              <p className="hidden lg:block">{link.name}</p>
            </button>
          );
        }

        // Normal link for other navigation items
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex text-lg font-semibold hover:bg-light-green hover:text-custom-green transition rounded-full gap-2 items-center justify-center px-5 py-3',
              {
                'text-custom-green bg-light-green': isActive, // Active state with text and background color
                'text-light-green': !isActive, // Non-active state
              },
            )}
          >
            <LinkIcon className="w-5 sm:w-6" />
            <p className="hidden lg:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
