"use client";
import useSWR from 'swr';

import { fetcher } from '@/lib/utils';

import type { TContentMeta } from '@/types';

export default function useContentMeta() {
    const {
        data,
        error: isError,
        isLoading,
    } = useSWR<Record<string, TContentMeta>>('/api/content', fetcher, {
        fallbackData: {},
    });

    return {
        isLoading,
        isError,
        data,
    };
}
