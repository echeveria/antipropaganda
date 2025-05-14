'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import LogoBlack from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { useTheme } from 'next-themes'

const Header = () => {
  const { theme } = useTheme()
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <div className="mr-3">{theme === 'dark' ? <LogoBlack /> : <Logo />}</div>
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={
                link.href === '/blog/book'
                  ? 'bg-primary-500 hover:bg-primary-700 focus:ring-primary-600 dark:hover:bg-primary-400 w-auto rounded-md px-4 py-2 font-medium text-white focus:ring-2 focus:ring-offset-2 focus:outline-none dark:ring-offset-black'
                  : 'hidden font-medium text-gray-900 sm:block dark:text-gray-100'
              }
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
