'use server'
import { NextResponse } from "next/server";


export async function GET() {
  const accessKey = process.env.API_KEY;

  const res = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${accessKey}&limit=10`, 
  
  );
  const data = await res.json();
 
  return data;
}