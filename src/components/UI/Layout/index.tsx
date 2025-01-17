import React, { ReactChild } from 'react'

import { Navigation } from "../../../components/Navigation";
import { FooterNav } from "../../../components/Navigation/footer";


interface Props {
  children: ReactChild
}

export default function Layout({ children }: Props) {

  return (
    <div className="bg-zinc-900 font-sans flex flex-col h-screen">


      <Navigation />

      <main className="bg-zinc-900 px-2 sm:px-4 md:px-6 lg:px-8">
        {children}
      </main>

      <FooterNav />

    </div>
  )
}
