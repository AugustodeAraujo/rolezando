'use client'
import type { Metadata } from 'next'
import Container from '@/components/Container'
import LinkWrapper from '@/components/LinkWrapper'

import { XCircle } from '@phosphor-icons/react'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Página sobre'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Container>
      <LinkWrapper href="/">
        <XCircle size={32} />
      </LinkWrapper>

      {children}
    </Container>
  )
}
