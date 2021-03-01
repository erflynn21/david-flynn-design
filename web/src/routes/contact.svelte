<script>
    import { fade } from 'svelte/transition';

    let formData = {
        name: '',
        email: '',
        message: '',
    };

    let displaySuccess = false;

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&');
    };

    function handleSubmit() {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...formData }),
        })
            .then(() => (displaySuccess = true))
            .catch((error) => alert(error));

        formData = {
            name: '',
            email: '',
            message: '',
        };
    }
</script>

<svelte:head>
    <title>Contact - David Flynn Design</title>
</svelte:head>

<div class="container" in:fade|local={{ delay: 200 }}>
    <div class="form">
        <div class="form-header">
            <h1>Let's make something incredible together!</h1>
            <h5 class="email">
                <a
                    href="mailto:dflynn@flynndesign.com"
                    target="_self"
                    data-content="dflynn@flynndesign.com"
                    data-type="mail"
                    class="email"> dflynn@flynndesign.com </a>
            </h5>
            <h5 class="phone-number">
                <a href="tel:3306661431">Tel: 330-666-1431</a>
            </h5>
            <div class="social">
                <a
                    href="https://www.linkedin.com/in/dflynndesign/"
                    target="_blank">
                    <img src="linkedin.png" alt="LinkedIn Profile" />
                </a>
                <a
                    href="https://www.instagram.com/dflynndesign/"
                    target="_blank">
                    <img src="instagram.png" alt="Instragram Profile" />
                </a>
            </div>
        </div>

        <form
            name="contact"
            action="POST"
            netlify
            on:submit|preventDefault={handleSubmit}
        >
            <input type="hidden" name="form-name" value="contact" />
            <label for="name">Name:</label>
            <input
                type="text"
                name="name"
                id="name"
                bind:value={formData.name}
            />
            <label for="email">Email Address:</label>
            <input type="email" name="email" bind:value={formData.email} />
            <label for="message">Message:</label>
            <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                bind:value={formData.message}
            />
            <div class="success" class:displaySuccess>
                Thanks for contacting us! We've got your message and we'll get
                back to you shortly!
            </div>
            <button type="submit" on:click|preventDefault={handleSubmit}
                >Send</button
            >
        </form>

        <form
            class="honeypot"
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
        >
            <p class="hidden">
                <label
                    >Don’t fill this out if you're human:
                    <input name="bot-field" /></label
                >
            </p>
            <p><label>Email: <input type="text" name="email" /></label></p>
            <p><label>Message: <textarea name="message" /></label></p>
            <p><button type="submit">Send</button></p>
        </form>
    </div>
</div>

<style>
    .form {
        margin-left: 0;
        text-align: center;
    }

    input {
        width: 100%;
        border-radius: 6px;
    }

    textarea {
        width: 100%;
        border-radius: 6px;
    }

    label {
        text-align: left;
        font-weight: 350;
        font-size: 18px;
        margin-bottom: 5px;
    }

    button,
    button:visited {
        background: transparent;
        border: 1px solid #a7d11c;
        width: 60%;
        font-size: 18px;
        font-weight: 350;
        margin-bottom: 20px;
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

    input:focus,
    textarea:focus {
        outline-color: #a7d11c;
    }

    h5 {
        font-weight: 300;
        font-size: 18px;
        margin-bottom: 10px;
    }

    .email {
        margin-top: 5px;
        color: #424242;
    }

    .phone-number {
        margin-top: 10px;
        color: #424242;
    }

    .phone-number a,
    a:visited,
    a:link {
        color: #424242;
    }

    .form-header {
        color: #424242;
        width: 100vw;
        padding: 25px 0;
        margin-bottom: 10px;
        max-width: 100%;
    }

    .social img {
        height: 50px;
    }

    .honeypot {
        display: none;
    }

    .success {
        display: none;
        background-color: #a7d11c;
        color: white;
        padding: 10px;
        border-radius: 10px;
        margin: 10px 10px 20px 10px;
    }

    .displaySuccess {
        display: block;
    }

    /* tablet styles */
    @media screen and (min-width: 750px) {
        .container {
            margin: 0 35px;
        }
        form {
            width: 60%;
            margin: 0 auto;
        }
        .form-header {
            width: 100%;
            margin: 0 auto;
        }
    }

    /* contact form laptop styles*/
    @media screen and (min-width: 1200px) {
        form {
            width: 40%;
        }

        .form-header {
            width: 100%;
            margin: 0 auto;
        }

        .container {
            margin: 0 45px;
        }
    }
</style>
