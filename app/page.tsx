'use client'

import LinkWrapper from '@/components/LinkWrapper'
import dynamic from 'next/dynamic'
import { Info } from '@phosphor-icons/react'

const Map = dynamic(() => import('../components/Map'), { ssr: false })

// https://www.google.com/maps/place/Deboche!+Bar/@-15.783964,-47.8788494,20z/data=!4m6!3m5!1s0x935a3b745e1c9db7:0x5af7d3c9f7e9548e!8m2!3d-15.783964!4d-47.8785275!16s%2Fg%2F11q35_lxnm?entry=ttu

export default function Home() {
  return (
    <>
      <LinkWrapper href="/sobre">
        <Info size={32} />
      </LinkWrapper>

      <Map
        places={[
          {
            id: '1',
            name: 'Deboche',
            slug: 'debochebar',
            location: {
              lat: -15.783964,
              long: -47.8788494
            }
          }
        ]}
      />
    </>
  )
}
