'use client'
import About from '@/components/About'
import client from '@/graphql/client'
import { GET_PAGES } from '@/graphql/querys'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { useState, useEffect } from 'react'

export const getStaticProps: GetStaticProps = async () => {
  console.log('hit')
  const pages = await client.request(GET_PAGES)
  console.log(pages)

  return {
    props: {}
  }
}



export default function Sobre() {

  useEffect(()=>{
    const get = async()=> {
      const pages = await client.request(GET_PAGES)
      console.log(pages)
    }
    
  
  }, [])

  return (
    <About
      title="What is Lorem Ipsum?"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    />
  )
}
