<script>
    export let categories;
    if (process.browser) {
        if ('loading' in HTMLImageElement.prototype) {
            var lazyEls = document.querySelectorAll('[loading=lazy]');
            lazyEls.forEach(function (lazyEl) {
                lazyEl.setAttribute('src', lazyEl.getAttribute('data-src'));
            });
        } else {
            var script = document.createElement('script');
            script.async = true;
            script.src =
                'https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.0.0/dist/lazyload.min.js';
            window.lazyLoadOptions = {
                elements_selector: '[loading=lazy]',
            };
            document.body.appendChild(script);
        }
    }
</script>

<div class="image-grid">
    {#each categories as category}
        <div class="categories">
            <div class="title-wrapper">
                <h3>{category.title}</h3>
            </div>
            <div class="image-wrapper">
                <a rel="prefetch" href={`work/${category.slug.current}`}>
                    <img
                        loading="lazy"
                        src="{category.mainImage}?w=450"
                        alt="category"
                    />
                </a>
            </div>
        </div>
    {/each}
</div>

<style>
    .image-grid {
        margin-bottom: 40px;
        align-items: center;
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
        object-fit: cover;
        max-width: 100%;
    }

    .title-wrapper h3 {
        margin-bottom: 15px;
        font-weight: lighter;
        font-size: 16px;
        text-align: left;
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
            height: 250px;
        }
    }

    /* desktop styles */
    @media screen and (min-width: 1000px) {
        .image-grid {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>
