import { defineStore } from "pinia";

import type { TCategory } from '@/types';

export const useMain = defineStore("main", () => {
    const categories = ref<TCategory[]>([]);

    const setCategories = (items: TCategory[]) => {
        categories.value = items;
    }

    return {
        categories,
        setCategories
    };
});
