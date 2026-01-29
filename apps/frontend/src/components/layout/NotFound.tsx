import { Typography } from '@/components/atoms/typography'
import { Button } from '@/components/atoms/button/Button'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-10">
            {/* Elegant background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
            </div>

            {/* Floating elements */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 h-32 w-32 animate-pulse rounded-full bg-blue-100 opacity-30"></div>
                <div className="absolute top-40 right-20 h-24 w-24 animate-pulse rounded-full bg-indigo-100 opacity-40 delay-1000"></div>
                <div className="absolute bottom-32 left-1/4 h-20 w-20 animate-pulse rounded-full bg-purple-100 opacity-35 delay-2000"></div>
                <div className="absolute right-1/3 bottom-20 h-28 w-28 animate-pulse rounded-full bg-pink-100 opacity-25 delay-3000"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                {/* 404 Number */}
                <div className="mb-8">
                    <Typography
                        as="h1"
                        variant="h1"
                        size="8xl"
                        weight="bold"
                        className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-center text-transparent"
                    >
                        404
                    </Typography>
                </div>

                {/* Error Message */}
                <div className="mb-8">
                    <Typography as="h2" variant="h2" size="4xl" weight="bold" className="mb-4 text-center">
                        Oops! Page Not Found
                    </Typography>
                    <Typography
                        as="p"
                        size="base"
                        color="secondary"
                        className="mx-auto max-w-2xl text-center"
                    >
                        The page you&apos;re looking for seems to have wandered off into the digital void.
                        Don&apos;t worry, even the best explorers sometimes take a wrong turn!
                    </Typography>
                </div>

                {/* Illustration */}
                <div className="mb-12 flex justify-center">
                    <div className="relative">
                        <div className="flex h-32 w-32 animate-bounce items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
                            <svg
                                className="h-16 w-16 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </div>
                        <div className="absolute -top-2 -right-2 h-6 w-6 animate-ping rounded-full bg-red-500"></div>
                        <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500"></div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link href="/">
                        <Button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                            <Typography
                                as="p"
                                size="xxs"
                                color="inherit"
                                weight="medium"
                                className="relative z-10 flex items-center gap-2"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                Go Home
                            </Typography>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </Button>
                    </Link>

                    <Link href="/blogs">
                        <Button
                            variant="outline"
                            className="group rounded-lg border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:text-blue-600"
                        >
                            <Typography
                                as="p"
                                size="xxs"
                                color="inherit"
                                weight="medium"
                                className="flex items-center gap-2"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                                Browse Blogs
                            </Typography>
                        </Button>
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
                    <Link
                        href="/about"
                        className="group rounded-xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-colors duration-300 group-hover:bg-blue-200">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <Typography
                                as="h3"
                                variant="h3"
                                size="lg"
                                weight="semibold"
                                color="secondary"
                                className="mb-2 text-center"
                            >
                                About Me
                            </Typography>
                            <Typography as="p" size="xxs" color="secondary" className="text-center">
                                Learn more about my journey
                            </Typography>
                        </div>
                    </Link>

                    <Link
                        href="/contact"
                        className="group rounded-xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 transition-colors duration-300 group-hover:bg-purple-200">
                                <svg
                                    className="h-6 w-6 text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <Typography
                                as="h3"
                                variant="h3"
                                size="lg"
                                weight="semibold"
                                color="secondary"
                                className="mb-2 text-center"
                            >
                                Contact
                            </Typography>
                            <Typography as="p" size="xxs" color="secondary" className="text-center">
                                Get in touch with me
                            </Typography>
                        </div>
                    </Link>

                    <Link
                        href="/blogs"
                        className="group rounded-xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 transition-colors duration-300 group-hover:bg-indigo-200">
                                <svg
                                    className="h-6 w-6 text-indigo-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                    />
                                </svg>
                            </div>
                            <Typography
                                as="h3"
                                variant="h3"
                                size="lg"
                                weight="semibold"
                                color="secondary"
                                className="mb-2 text-center"
                            >
                                Latest Posts
                            </Typography>
                            <Typography as="p" size="xxs" color="secondary" className="text-center">
                                Discover my recent articles
                            </Typography>
                        </div>
                    </Link>
                </div>

                {/* Fun Message */}
                <div className="mt-12 rounded-xl border border-blue-200/50 bg-gradient-to-r from-blue-50 to-purple-50 p-6">
                    <Typography
                        as="p"
                        color="inherit"
                        weight="medium"
                        className="text-center text-gray-700"
                    >
                        <Typography as="strong" size="xxs" color="inherit" weight="medium">
                            Pro tip:
                        </Typography>{' '}
                        Use the navigation menu to find what you&apos;re looking for!
                    </Typography>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 h-2 w-2 animate-ping rounded-full bg-blue-400"></div>
            <div className="absolute top-32 left-16 h-1 w-1 animate-ping rounded-full bg-purple-400 delay-1000"></div>
            <div className="absolute right-16 bottom-20 h-1.5 w-1.5 animate-ping rounded-full bg-indigo-400 delay-2000"></div>
        </div>
    )
}

export default NotFound
