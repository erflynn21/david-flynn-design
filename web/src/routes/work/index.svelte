<script context="module">
    import apiClient from '../../sanityClient';

    export async function preload() {
        try {
            const categories = await apiClient.fetch(
                '*[_type == "category"] | { title, "mainImage": mainImage.asset->url, slug}'
            );
            return { categories };
        } catch (err) {
            this.error(500, err);
        }
    }
</script>

<script>
    import { fade } from 'svelte/transition';
    import CategoriesList from '../../components/CategoriesList.svelte';
    export let categories;
</script>

<svelte:head>
    <title>Work - David Flynn Design</title>
</svelte:head>

<div class="container" in:fade|local={{ delay: 200 }}>
    <div class="categories">
        <CategoriesList {categories} />
    </div>
</div>
