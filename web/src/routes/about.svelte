<script>
    import { fade } from 'svelte/transition';
    import MediaQuery from '../MediaQuery.svelte';
</script>

<svelte:head>
    <title>About - David Flynn Design</title>
</svelte:head>

<div class="container" in:fade|local={{ delay: 200 }}>
    <h1>About</h1>
    <div class="content-wrapper">
        <MediaQuery query="(max-width: 749px)" let:matches>
            {#if matches}
                <div class="about">
                    <p>
                        I started David Flynn Design in 1994 with the goal of
                        doing great work with great people. I had 14 years
                        experience working in advertising agencies and corporate
                        in-house, and felt that it was time to go out on my own.
                        That was almost 27 years ago and I’m still going strong.
                        I thrive on creating concepts that tell a story that
                        people can connect with,for advertising, corporate
                        identity and all types of collateral for print, web,
                        packaging and multi-media communications. Thank you!
                    </p>
                    <p>
                        I also started teaching in 2009 at my Alma Mater, The
                        University of Akron. I am very proud to be an Associate
                        Professor teaching Graphic Design to students from
                        Freshman to Senior.
                    </p>
                    <p>
                        It’s been an amazing creative journey and I believe my
                        best work is yet to come. Please review my site and let
                        me know if I can help with anything coming up!
                    </p>
                </div>
                <img class="img" src="headshot.webp" alt="" />
            {/if}
        </MediaQuery>
        <MediaQuery query="(min-width: 750px)" let:matches>
            {#if matches}
                <img class="img" src="headshot.webp" alt="" />
                <div class="about">
                    <p>
                        I started David Flynn Design in 1994 with the goal of
                        doing great work with great people. I had 14 years
                        experience working in advertising agencies and corporate
                        in-house, and felt that it was time to go out on my own.
                        That was almost 27 years ago and I’m still going strong.
                        I thrive on creating concepts that tell a story that
                        people can connect with,for advertising, corporate
                        identity and all types of collateral for print, web,
                        packaging and multi-media communications. Thank you!
                    </p>
                    <p>
                        I also started teaching in 2009 at my Alma Mater, The
                        University of Akron. I am very proud to be an Associate
                        Professor teaching Graphic Design to students from
                        Freshman to Senior.
                    </p>
                    <p>
                        It’s been an amazing creative journey and I believe my
                        best work is yet to come. Please review my site and let
                        me know if I can help with anything coming up!
                    </p>
                </div>
            {/if}
        </MediaQuery>
    </div>
</div>

<style>
    .about {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 300;
        line-height: 1.4em;
    }
    .img {
        width: 100%;
        height: auto;
        margin-bottom: 50px;
        border-radius: 3px;
    }
    h1 {
        margin-bottom: 15px;
    }
    /* tablet styles */
    @media screen and (min-width: 750px) {
        .img {
            float: right;
            width: auto;
            max-width: 50%;
            max-height: 600px;
            margin: 0 0 20px 20px;
        }
    }
</style>
