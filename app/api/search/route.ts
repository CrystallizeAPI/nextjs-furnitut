import { NextResponse } from 'next/server';
import { apiRequest } from '@/utils/api-request';
import { GlobalSearchDocument } from '@/generated/discovery/graphql';

export async function POST(req: Request) {
  try {
    const { term } = await req.json();
    const response = await apiRequest(GlobalSearchDocument, { term });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}