import CodeRenderer from '@/components/blogs/CodeRenderer'
import { MarkdownRenderer } from '@/components/blogs/MarkdownRenderer'
import { RefreshRouteOnSave } from '@/components/payload/RefreshRouteOnSave'
import config from '@payload-config'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import React, { cache } from 'react'

type Props = {
  params: Promise<{
    blogs: string
  }>
}

const page = async ({ params }: Props) => {
  const { isEnabled: draft } = await draftMode()
  const page = await pageData(params)
  const docs = page.docs.blocks
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-200 via-sky-50 to-blue-100'>
      {draft && <RefreshRouteOnSave />}
     {
		docs?.map((block) => {
			return (
				<div key={block.id} className='mx-auto lg:max-w-300 px-5'>
					{block.blockType === 'content' && block.content && <MarkdownRenderer data={block.content} />}
					{block.blockType === 'codeBlock' && block.codeBlock && <CodeRenderer code={block.codeBlock} />}
				</div>
			)
		})
	 }
    </div>
  )
}

const pageData = async (paramsPromise: Props['params']) => {
	const { blogs = 'home' } = await paramsPromise;

	const parsedSlug = Array.isArray(blogs) ? blogs.join('/') : blogs;

	const page = await queryPageBySlug({
		slug: parsedSlug,
	});
	if (!page) {
		return notFound();
	}

	return page;
};

const queryPageBySlug = cache(
	async ({ slug }: { slug: string }) => {
		const payload = await getPayload({ config: config });
		const { isEnabled: draft } = await draftMode();

		const result = await payload.find({
			collection: 'pages',
			limit: 1,
			draft,
			overrideAccess: draft,
			depth: 2,
			pagination: false,
			where: {
				slug: {
					equals: `blogs/${slug}`,
				},
			},
		});

		if (result.docs?.[0]) {
			return {
				type: 'page',
				docs: result.docs[0],
			};
		}
	}
);

export default page
