<script context="module">
    import apiClient from '../../../sanityClient';

    export async function preload({ params }) {
        try {
            const slug = params.category;
            const query = `*[_type == "category" && slug.current == $slug][0] | {
                title, 
                slug, 
                description, 
                _id, 
                "relatedClients": *[_type=="client" && references(^._id)]{ 
                client, 
                slug, 
                "mainImage": mainImage.asset->url, slug
                }
            }`;
            const category = await apiClient.fetch(query, { slug });
            return { category, params };
        } catch (err) {
            this.error(500, err);
        }
    }
</script>

<script>
    import { fade } from 'svelte/transition';
    export let category;
</script>

<svelte:head>
    <title>{category.title} - David Flynn Design</title>
</svelte:head>

<div class="container" in:fade|local={{ delay: 200 }}>
    <div class="category-details">
        <h1>{category.title}</h1>
        <h2>{category.description}</h2>
        <div class="image-grid">
            {#each category.relatedClients as client}
                <div class="image-wrapper">
                    <a
                        rel="prefetch"
                        href={`work/${category.slug.current}/${client.slug.current}/`}>
                        <img
                            in:fade|local={{ delay: 500 }}
                            src="{client.mainImage}?w=450"
                            alt="project image"
                            loading="lazy"
                        />
                    </a>
                    <div class="title-wrapper">
                        <h3>{client.client}</h3>
                    </div>
                </div>
            {:else}
                <div>Nothing found here, that's odd....</div>
            {/each}
        </div>
    </div>

    <a href="/work"><button>Back</button> </a>
</div>

<style>
    .category-details {
        text-align: left;
    }

    .image-grid {
        margin-bottom: 40px;
        align-items: center;
        margin-top: 20px;
    }

    .image-wrapper {
        width: 100%;
        margin: 0;
        overflow: hidden;
        position: relative;
        margin-bottom: 20px;
    }

    .image-wrapper img {
        width: 100%;
    }

    img {
        object-fit: contain;
        max-width: 100%;
    }

    h1 {
        border-bottom: none;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 18px;
        font-weight: 400;
    }

    .title-wrapper h3 {
        margin-bottom: 15px;
        font-weight: lighter;
        font-size: 16px;
        text-align: left;
    }

    button,
    button:visited {
        margin-top: 30px;
        background: transparent;
        border: 1px solid #a7d11c;
        width: 100px;
        font-size: 18px;
        font-weight: 350;
        margin-bottom: 30px;
        color: #a7d11c;
    }

    button:hover {
        color: white;
        background: #a7d11c;
        border: 1px solid #a7d11c;
        cursor: pointer;
    }

    button:focus {
        outline: none;
    }

    button:not(:disabled):active {
        color: white;
        background: #a7d11c;
        border: 1px solid #a7d11c;
    }

    /* tablet styles */
    @media screen and (min-width: 620px) {
        .image-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 40px;
        }

        .image-wrapper {
            margin-bottom: 0;
        }
    }

    /* desktop styles */
    @media screen and (min-width: 1000px) {
        .image-grid {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>
