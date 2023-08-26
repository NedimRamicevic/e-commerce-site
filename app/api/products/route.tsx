import { NextResponse } from "next/server";

const data_url = 'https://fakestoreapi.com/products'

export async function GET () {
    const res = await fetch(data_url)
    const data = await res.json()
    return NextResponse.json(data)
}