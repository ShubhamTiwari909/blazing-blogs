import { cn } from '@/lib/utils';
import AnimationBox from '@/components/ui/animations/AnimationBox';
import { LuDock } from 'react-icons/lu';
import { Typography } from '@/components/atoms/typography';
import { Suspense } from 'react';
import ArticlesWrapper from '@/components/articles/ArticlesWrapper';
import ArticlesSkeleton from '@/components/articles/ArticlesSkeleton';

const DevToArticles = async () => {
    return (
        <section id="blogs" className={cn("py-20 bg-gray-50 dark:bg-gray-800")}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <AnimationBox className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                        <LuDock className="h-4 w-4" />
                        Dev.to
                    </AnimationBox>
                    <AnimationBox>
                        <Typography
                            as="h1"
                            variant="h1"
                            size="5xl"
                            weight="bold"
                            className="mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-center text-transparent"
                        >
                            Latest Articles from Dev.to
                        </Typography>
                    </AnimationBox>
                    <AnimationBox>
                        <Typography
                            as="p"
                            size="base"
                            color="inherit"
                            className="mx-auto max-w-3xl text-center text-gray-600"
                        >
                            Discover insights, tutorials, and stories from our community of passionate developers and
                            creators
                        </Typography>
                    </AnimationBox>
                </div>
                <Suspense fallback={<ArticlesSkeleton />}>
                    <ArticlesWrapper />
                </Suspense>
            </div>
        </section>
    )
}

export default DevToArticles;