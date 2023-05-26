'use server'
import { NextResponse } from "next/server";


export async function GET() {
  const accessKey = process.env.API_KEY;

  const res = await fetch('https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2023-05-30&adults=1&nonStop=false&max=250', {
    headers: {
      'Authorization':  `Bearer ${accessKey}` ,
    },
  })
  const data = await res.json();
 
  return data;
}