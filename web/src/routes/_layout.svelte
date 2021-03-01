<script>
    import Footer from '../components/Footer.svelte';
    import Nav from '../components/Nav.svelte';
    export let segment;

    import { stores } from '@sapper/app';
    import PageLoadingBar from 'sapper-page-loading-bar/PageLoadingBar.svelte';
    const { preloading } = stores();
</script>

<Nav {segment} />

<div class="preloading">
    <PageLoadingBar {preloading} color2="#a7d11c" color1="#d3e88d" />
</div>

<div class="container">
    <main>
        <slot />
    </main>

    <Footer />
</div>

<style>
    .container {
        position: relative;
        min-height: calc(100vh - 90px);
    }
    main {
        padding-bottom: 70px;
        overflow: auto;
        margin-bottom: -2.5em;
        max-width: 100%;
        margin: 0 20px;
    }
    @media screen and (min-width: 750px) {
        .container {
            min-height: calc(100vh - 110px);
        }
        main {
            margin: 0 35px;
        }
    }
    @media screen and (min-width: 1200px) {
        .container {
            max-width: 1400px;
            margin: 0 auto;
            min-height: calc(100vh - 120px);
        }
        main {
            margin: 0 45px;
        }
    }
</style>
