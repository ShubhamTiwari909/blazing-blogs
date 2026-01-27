const BlogCardSkeleton = () => {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
      {/* Image skeleton */}
      <div className="h-48 w-full animate-pulse bg-gray-200"></div>

      <div className="space-y-4 p-6">
        {/* Title skeleton */}
        <div className="space-y-2">
          <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>
          <div className="h-6 w-1/2 animate-pulse rounded bg-gray-200"></div>
        </div>

        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
        </div>

        {/* Tags skeleton */}
        <div className="flex gap-2">
          <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200"></div>
          <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200"></div>
          <div className="h-6 w-14 animate-pulse rounded-full bg-gray-200"></div>
        </div>

        {/* Metadata skeleton */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-1">
            <div className="h-3 w-24 animate-pulse rounded bg-gray-200"></div>
            <div className="h-3 w-32 animate-pulse rounded bg-gray-200"></div>
          </div>
        </div>

        {/* Footer skeleton */}
        <div className="flex items-center justify-between gap-2 border-t border-gray-100 pt-4">
          <div className="h-8 w-24 animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-6 w-20 animate-pulse rounded bg-gray-200"></div>
        </div>
      </div>
    </article>
  )
}

const BlogsListSkeleton = () => {
  return (
    <div className="space-y-8">
      {/* Header skeleton */}
      <div className="mb-16 text-center">
        <div className="mb-6 inline-flex animate-pulse items-center gap-2 rounded-full bg-gray-200 px-4 py-2">
          <div className="h-4 w-4 rounded bg-gray-300"></div>
          <div className="h-4 w-20 rounded bg-gray-300"></div>
        </div>

        {/* Title skeleton */}
        <div className="mb-6 space-y-3">
          <div className="mx-auto h-12 w-96 animate-pulse rounded-lg bg-gray-200"></div>
        </div>

        {/* Description skeleton */}
        <div className="mx-auto max-w-3xl space-y-2">
          <div className="h-5 animate-pulse rounded bg-gray-200"></div>
          <div className="mx-auto h-5 w-5/6 animate-pulse rounded bg-gray-200"></div>
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export default BlogsListSkeleton
