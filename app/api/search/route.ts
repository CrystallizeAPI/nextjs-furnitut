import { NextResponse } from "next/server";
import { apiRequest } from '@/utils/api-request';
import { GlobalSearchDocument } from '@/generated/discovery/graphql';

export async function POST(req: Request) {
  const { term } = await req.json();
  const response = await apiRequest(GlobalSearchDocument, { term });
  return NextResponse.json(response);
}