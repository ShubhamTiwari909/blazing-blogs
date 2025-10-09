// app/api/preview/route.js
import { NextResponse, NextRequest } from 'next/server';
import { load } from 'cheerio';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');
  if (!url) {
    return NextResponse.json({ error: 'Missing URL' }, { status: 400 });
  }
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'NextMetadataBot/1.0' },
    });

    if (!res.ok) throw new Error('Fetch failed');

    const html = await res.text();
    const $ = load(html);

    const getMeta = (name: string) =>
      $(`meta[property="${name}"]`).attr('content') ||
      $(`meta[name="${name}"]`).attr('content');

    const metadata = {
      title: getMeta('og:title') || getMeta('twitter:title') || $('title').text(),
      description: getMeta('og:description') || getMeta('twitter:description') || getMeta('description'),
      image: getMeta('og:image') || getMeta('twitter:image'),
      site: getMeta('og:site_name') || new URL(url).hostname,
      url: getMeta('og:url') || url,
    };

    return NextResponse.json(metadata, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch metadata' }, { status: 500 });
  }
}
