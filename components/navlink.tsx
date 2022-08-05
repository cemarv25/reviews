import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';

interface NavLinkProps {
  href: string;
  exact: boolean;
  children: ReactNode;
}

export default function NavLink({
  href,
  exact,
  children,
  ...props
}: NavLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const newIsActive = exact ? pathname === href : pathname.startsWith(href);
    setIsActive(newIsActive);
  }, [exact, href, pathname]);

  return (
    <Link href={href}>
      <a className={isActive ? 'active' : ''} {...props}>
        {children}
      </a>
    </Link>
  );
}
