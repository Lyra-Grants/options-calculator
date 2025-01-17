import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LogoIcon from '../UI/Icons/OTUS'

const linkStyle = (path: string, activePath: string) => {
  if (path == activePath) {
    return 'p-3 text-sm font-bold text-white'
  } else {
    return 'p-3 text-sm font-normal text-white hover:text-zinc-500'
  }
}

const linkStyleMobile = (path: string, activePath: string) => {
  if (path == activePath) {
    return 'block p-3 text-base font-bold text-white'
  } else {
    return 'block p-3 text-base font-normal text-white hover:text-zinc-500'
  }
}

export const Navigation = () => {
  const router = useRouter()
  return (
    <Disclosure as="nav" className="border-b border-zinc-800 bg-zinc-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <span className="mt-1 block w-auto cursor-pointer">
                      <LogoIcon />
                    </span>
                  </Link>
                </div>

                <div className="hidden sm:ml-16 sm:block">
                  <div className="flex space-x-4">
                    <Link href="/">
                      <a className={linkStyle('/', router.pathname)}>
                        Options Trade Builder
                      </a>
                    </Link>
                  </div>
                </div>

              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  <button
                    disabled={false}
                    className={`items-center text-white text-sm font-normal px-8 py-2 rounded-md bg-zinc-800 shadow-sm hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2`}
                    onClick={() => router.push('https://app.otus.finance')}
                  >
                    Launch App
                  </button>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="text-white inline-flex items-center justify-center rounded-md p-2 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-zinc-200">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-zinc-200"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-zinc-200"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Link href="/">
                <Disclosure.Button
                  className={linkStyleMobile('/', router.pathname)}
                >
                  Options Trade Builder
                </Disclosure.Button>
              </Link>

            </div>
            <div className="border-zinc-800 border-t pt-4 pb-3">
              <div className="flex items-center px-5">
                <button
                  disabled={false}
                  className={`w-full items-center text-white text-md font-normal px-8 py-2 border-zinc-700 bg-zinc-800 shadow-sm hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 rounded-md`}
                  onClick={() => router.push('https://app.otus.finance')}
                >
                  Launch App
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
