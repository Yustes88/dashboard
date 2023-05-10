'use client'

import { Header } from "@/components/header/Header"
import { FormLayout } from "@/components/form-layout/FormLayout"
import Test from "@/components/test/Test"

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <FormLayout/>
      <Test/>
    </main>
    </>
  )
}
