import dayjs from '@/lib/utils';

export const relativeTime = (date: string) => dayjs().to(dayjs(date));
