'use client';

import { signOut } from 'next-auth/react';
import { HiChat, HiUsers } from 'react-icons/hi';
import { IoMdLogOut } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const useRoutes = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: 'Chat',
        href: '/chat',
        icon: HiChat,
        active: pathname === '/chat',
      },
      {
        label: 'Users',
        href: '/users',
        icon: HiUsers,
        active: pathname === '/users',
      },
      {
        label: 'Logout',
        href: '#',
        onClick: () => signOut(),
        icon: IoMdLogOut,
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;
