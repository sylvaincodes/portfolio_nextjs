"use client";
import clsx from 'clsx';
import PostPreview from './post-preview';
import type { TPostFrontMatter } from '@/types';
import { slugsBlog } from '@/constants';

// for api 
// import useContentMeta from '@/hooks/useContentMeta';

export type BlogContentsProps = {
    posts: Array<{
        slug: string | any;
        frontMatter: TPostFrontMatter;
    }>;
};

type TPostPreview = TPostFrontMatter & {
    slug: string;
    shares: number;
    views: number;
};

function BlogContents({ posts }: BlogContentsProps) {


    let pinnedPost: TPostPreview | any = {};
    const postsPreview: Array<TPostPreview> = [];

    posts?.forEach(({ slug, frontMatter }) => {
        
        const { shares, views } = slugsBlog[slug]
            ? slugsBlog[slug].meta
            : { shares: 0, views: 0 };

        const preview: TPostPreview = {
            slug,
            views,
            shares,
            ...frontMatter,
        };

        if (frontMatter.pinned === true) {
            pinnedPost = preview;
        } else {
            postsPreview.push(preview);
        }
    });



    return (
        <div className={clsx('content-wrapper')}>
            <div
                className={clsx(
                    'flex flex-col gap-8',
                    'md:flex-row md:gap-8 lg:gap-24'
                )}
            >
                <div className={clsx('md:w-64')}>{/* TODO: Filter Posts */}</div>
                <div className={clsx('flex-1')}>
                    {pinnedPost && (
                        <div
                            className={clsx(
                                'mb-8 flex items-start gap-4',
                                'md:mb-12 md:gap-6'
                            )}
                        >
                            <div className={clsx('flex-1')}>
                                <PostPreview
                                    caption={pinnedPost.caption}
                                    pinned={pinnedPost.pinned}
                                    slug={pinnedPost.slug}
                                    category={pinnedPost.category}
                                    title={pinnedPost.title}
                                    description={pinnedPost.description}
                                    date={pinnedPost.date}
                                    lang={pinnedPost.lang}
                                    tags={pinnedPost.tags}
                                    views={pinnedPost.views}
                                    shares={pinnedPost.shares}
                                />
                            </div>
                        </div>
                    )}

                    {postsPreview.map(
                        ({
                            caption,
                            pinned,
                            slug,
                            category,
                            title,
                            description,
                            date,
                            lang,
                            tags,
                            views,
                            shares,
                        }) => (
                            <div
                                key={slug}
                                className={clsx(
                                    'mb-8 flex items-start gap-4',
                                    'md:mb-4 md:gap-6'
                                )}
                            >
                                <div
                                    className={clsx(
                                        'border-divider-light mt-14 hidden w-8 -translate-y-1 border-b',
                                        'md:mt-16 md:w-20 lg:block',
                                        'dark:border-divider-dark'
                                    )}
                                />
                                <div className={clsx('flex-1')}>
                                    <PostPreview
                                        caption={caption}
                                        pinned={pinned}
                                        slug={slug}
                                        category={category}
                                        title={title}
                                        description={description}
                                        date={date}
                                        lang={lang}
                                        tags={tags}
                                        views={views}
                                        shares={shares}
                                    />
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogContents;
