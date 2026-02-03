const SearchInputSkeleton = () => {
  return (
    <div className="mb-10">
      <div className="mb-2 flex w-full flex-col items-center gap-5 lg:flex-row">
        <div className="relative flex w-full items-center overflow-hidden">
          <div className="absolute top-0 left-0 z-10 px-5 py-3">
            <div className="h-4 w-4 animate-pulse rounded bg-gray-200"></div>
          </div>
          <div className="h-10 w-full animate-pulse rounded-lg rounded-br-lg border-2 border-gray-200 bg-gray-200 pl-12 md:pl-16"></div>
        </div>
        <div className="h-10 w-24 animate-pulse rounded-md bg-gray-200"></div>
      </div>
    </div>
  )
}

const loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="mb-16 text-center">
          <SearchInputSkeleton />
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
      </div>
    </div>
  )
}

export default loading
