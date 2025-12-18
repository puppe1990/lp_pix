import { getAllPostSummaries } from '@/lib/blog';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = getAllPostSummaries();
  return NextResponse.json(posts);
}
