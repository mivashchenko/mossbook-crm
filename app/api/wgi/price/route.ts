import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(JSON.stringify({
    "data": {
      "price": 100
    }
  }), { status: 200 })
}