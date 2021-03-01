<script>
    const year = new Date().getFullYear();
</script>

<div class="border" />
<footer>
    <div class="copyright">&copy; {year} David Flynn Design</div>
    <div class="web-provider">
        Website by
        <a href="https://www.cumulus-creative.com/">
            Cumulus Creative Services</a
        >
    </div>
</footer>

<style>
    footer {
        position: absolute;
        width: 100%;
        height: auto;
        text-align: center;
        color: #4b4949;
        padding: 15px 0;
        clear: both;
        font-weight: 300;
        max-width: 1400px;
        margin: 0 auto;
        bottom: 0;
        z-index: 100;
    }
    footer div {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    a {
        font-weight: 400;
    }
    .border {
        z-index: 100;
        position: absolute;
        bottom: 90px;
        height: 1px;
        background-color: #e6e6e6;
        width: 100%;
        background-image: -webkit-gradient(
            linear,
            left bottom,
            right bottom,
            color-stop(0.02, white),
            color-stop(0.5, #ebe8e8),
            color-stop(0.98, white)
        );
    }
    @media screen and (min-width: 750px) {
        footer {
            display: flex;
            justify-content: space-evenly;
        }
        .border {
            bottom: 68px;
        }
    }
</style>
