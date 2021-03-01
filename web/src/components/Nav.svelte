<script>
    import { slide } from 'svelte/transition';
    export let segment;

    let isActive = false;

    const openMobileNav = () => {
        if (!isActive) {
            isActive = true;
            document.body.classList.add('no-scrolling');
        } else {
            isActive = false;
            document.body.classList.remove('no-scrolling');
        }
    };
</script>

<div class="desktop-nav">
    <div class="container">
        <nav class="desktop">
            <div class="logo">
                <a href="/"
                    ><img src="logo-192.png" alt="David Flynn Design Logo" /></a
                >
                <a href="/"><h4>David Flynn Design</h4></a>
            </div>
            <ul>
                <li>
                    <a
                        rel="prefetch"
                        class:current={segment === undefined}
                        href="/">Home</a
                    >
                </li>
                <li>
                    <a
                        rel="prefetch"
                        class:current={segment === 'work'}
                        href="/work">Work</a
                    >
                </li>
                <li>
                    <a
                        rel="prefetch"
                        class:current={segment === 'about'}
                        href="/about">About</a
                    >
                </li>
                <li>
                    <a class:current={segment === 'contact'} href="contact"
                        >Contact</a
                    >
                </li>
            </ul>
        </nav>
    </div>
</div>

<div class="mobile-nav">
    <nav scroll="no">
        <div class="logo">
            <a href="/"
                ><img src="logo-192.png" alt="David Flynn Design Logo" /></a
            >

            <a href="/"><h4>David Flynn Design</h4></a>
        </div>
        <div class="toggle" class:active={isActive} on:click={openMobileNav}>
            <span />
        </div>
        {#if isActive}
            <div
                class="mobile-links"
                in:slide={{ duration: 300 }}
                out:slide={{ delay: 100, duration: 300 }}
            >
                <ul>
                    <li in:slide out:slide>
                        <a href="/" on:click={openMobileNav}>Home</a>
                    </li>
                    <li in:slide out:slide>
                        <a href="/work" on:click={openMobileNav}>Work</a>
                    </li>
                    <li in:slide out:slide>
                        <a href="/about" on:click={openMobileNav}>About</a>
                    </li>
                    <li in:slide out:slide>
                        <a href="/contact" on:click={openMobileNav}>Contact</a>
                    </li>
                </ul>
            </div>
        {/if}
    </nav>
</div>

<style>
    @media screen and (max-width: 749px) {
        .logo {
            margin-left: 20px;
        }
        .desktop-nav {
            display: none;
        }
    }

    nav {
        font-weight: lighter;
        padding: 0;
        margin: 0;
        margin-bottom: 35px;
        overflow: hidden;
        z-index: 2;
    }
    nav h4 {
        font-weight: lighter;
        font-size: 18px;
    }
    .logo {
        display: flex;
        align-items: center;
        margin-top: 15px;
    }
    .logo img {
        height: 30px;
        margin-right: 8px;
    }
    .toggle {
        position: absolute;
        top: 20px;
        right: 20px;
        height: 20px;
        width: 20px;
        cursor: pointer;
        align-self: center;
    }
    .toggle span {
        position: absolute;
        width: 20px;
        height: 1px;
        background: #424242;
        top: 50%;
        left: 50%;
        display: block;
        border-radius: 2px;
        transform: translate(-50%, -50%);
        transition: 0.3s;
        transition-delay: 0.3s;
    }
    .toggle span:before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background: #424242;
        display: block;
        top: -6px;
        left: 0;
        transition-property: top, transform;
        transition-delay: 0.3s, 0s;
        transition-duration: 0.3s, 0.3s;
    }
    .toggle span:after {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background: #424242;
        display: block;
        top: 6px;
        left: 0;
        transition-property: top, transform;
        transition-delay: 0.3s, 0s;
        transition-duration: 0.3s, 0.3s;
    }
    .toggle.active span:before {
        top: 0;
        transform: rotate(45deg);
        transition-delay: 0s, 0.3s;
    }
    .toggle.active span:after {
        top: 0;
        transform: rotate(-45deg);
        transition-delay: 0s, 0.3s;
    }
    .toggle.active span {
        background: transparent;
        transition-delay: 0s, 0s;
    }

    .mobile-links {
        position: fixed;
        padding-top: 50px;
        width: 100%;
        height: calc(100vh - 34px);
        background: white;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 0;
        z-index: 51;
    }
    .mobile-links ul {
        position: relative;
        margin: 0;
        padding: 0;
    }
    .mobile-links ul li {
        position: relative;
        list-style: none;
        text-align: center;
        text-decoration: none;
        font-size: 2.5em;
        padding: 0 10px;
        color: #424242;
        font-weight: 500;
        text-transform: uppercase;
    }

    /* tablet styles */
    @media screen and (min-width: 750px) {
        nav {
            padding: 15px 20px 0 35px;
        }

        .mobile-nav {
            display: none;
        }

        .logo {
            margin-top: 0;
        }

        .logo img {
            height: 50px;
        }

        .desktop {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    /* desktop styles */

    @media screen and (min-width: 1200px) {
        nav {
            padding: 30px 30px 0 45px;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
        }
    }

    .desktop ul {
        margin: 5px 0 0 0;
    }

    .desktop ul li {
        display: inline-block;
        list-style: none;
        padding: 0 20px;
    }

    .current:after {
        content: '';
        display: block;
        border-bottom: 1px solid #ebe8e8;
        margin-top: 5px;
    }
</style>
