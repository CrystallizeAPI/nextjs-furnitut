'use server';

import type { NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
    const { item } = await request.json();
    console.log(item)
    const path = item.get.tree.path;
    
    if (path) {
        revalidatePath(path)
        return Response.json({ revalidated: true, now: Date.now() });
    }
 
    return Response.json({ revalidated: false, now: Date.now(), message: 'Missing path to revalidate'});
}