import { Header } from "@/components/header/Header"
import { FormLayout } from "@/components/form-layout/FormLayout"
import { Button } from "@mantine/core"
import { GET } from "./http/flight-offers";
import { MockData } from "@/components/mockdata/MockData";
import { SwitchesCard } from "@/components/card/Card";



export default async function Home() {
    // const data = await GET();
    // console.log(JSON.stringify(data, null, 2));
    // console.log(MockData)

 
  return (
    <>
    <Header/>
    <main>
      <FormLayout/>
      <SwitchesCard data={MockData.data}/>
    </main>
    
    <div>
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
    </>
  )
}
