// components/Layout.tsx
import { ReactNode } from 'react'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Meu Site Institucional</title>
        <meta name="description" content="Descrição do meu site institucional" />
      </Head>

      <div className="min-h-screen bg-gray-50 p-20">
        {children}
      </div>
    </>
  )
}
