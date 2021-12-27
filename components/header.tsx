import { FunctionComponent, useEffect } from 'react'

import { useState } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'

import IconGithub from './icon/github'
import IconTwitter from './icon/twitter'

const Header: FunctionComponent = () => {
  let router = useRouter()
  let [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [router.asPath])

  return (
    <div className="relative">
      <header className="sticky inset-x-0 top-0 z-50 bg-white border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <nav role="navigation" className="flex items-center space-x-4">
            <Link href="/">
              <a className="text-sm font-medium">
                HyperUI
                <span role="img" className="ml-1.5">
                  🚀
                </span>
              </a>
            </Link>

            <span className="block w-px h-6 bg-gray-100"></span>

            <Link href="/">
              <a className="hidden text-xs font-medium lg:block hover:opacity-75">
                Components
              </a>
            </Link>

            <Link href="/ecommerce">
              <a className="block text-xs font-medium hover:opacity-75">
                Ecommerce
              </a>
            </Link>
          </nav>

          <div className="flex items-center justify-end flex-1">
            <a
              href="https://twitter.com/itsmarkmead"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:opacity-75"
            >
              <IconTwitter />
            </a>

            <a
              href="https://github.com/markmead/hyperui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:opacity-75"
            >
              <IconGithub />
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header