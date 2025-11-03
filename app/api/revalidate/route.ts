'use server';

import { NextResponse } from 'next/server';
import { updateTag } from 'next/cache';

export async function POST(request: Request) {
    const { item } = await request.json();
    const path = item.get.tree.path;
    
    try {
        updateTag(path);
        return NextResponse.json({ path, success: true, message: 'Success' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}