<script>
    import { fade } from 'svelte/transition';
    import MediaQuery from '../MediaQuery.svelte';
</script>

<svelte:head>
    <title>David Flynn Design</title>
</svelte:head>

<div class="container" in:fade|local={{ delay: 200 }}>
    <MediaQuery query="(max-width: 999px)" let:matches>
        {#if matches}
            <div class="text">
                <p>I draw on anything that doesn’t move.</p>
                <p>
                    It’s not that I draw very well, but I’m constantly thinking,
                    and I love the creative process.
                </p>
                <p>
                    And if I’ve learned anything it’s that little sketches
                    always lead to big ideas...
                </p>
            </div>
            <img src="home.jpg" alt="" />
        {/if}
    </MediaQuery>
    <MediaQuery query="(min-width: 1000px)" let:matches>
        {#if matches}
            <img src="home.jpg" alt="" />
            <div class="text">
                <p>I draw on anything that doesn’t move.</p>
                <p>
                    It’s not that I draw very well, but I’m constantly thinking,
                    and I love the creative process.
                </p>
                <p>
                    And if I’ve learned anything it’s that little sketches
                    always lead to big ideas...
                </p>
            </div>
        {/if}
    </MediaQuery>
</div>

<style>
    img {
        width: 100%;
        height: auto;
    }
    .text p {
        font-weight: lighter;
    }

    @media screen and (min-width: 1000px) {
        .container {
            display: grid;
            grid-template-columns: 1fr 0.2fr;
        }

        .text {
            margin: auto 10px;
        }

        .text p {
            line-height: 25px;
        }
    }
</style>
