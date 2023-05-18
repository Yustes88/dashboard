import { Header } from "@/components/header/Header"
import { FormLayout } from "@/components/form-layout/FormLayout"
import { Button } from "@mantine/core"
import { GET } from "./http/aviationstack";
import { MockData } from "@/components/mockdata/MockData";



export default async function Home() {
    // const data = await GET();
    console.log(MockData)

 
  return (
    <>
    <Header/>
    <main>
      <FormLayout/>
    </main>
    
    {/* <Button onClick={handleClick}>click me</Button> */}
    </>
  )
}
