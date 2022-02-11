<template>
    <header class="header">
        <nav class="nav">
            <router-link to="/" class="logo">
                <i class="fas fa-chart-pie"></i>
                <h2>Dataviz</h2>
            </router-link>

            <input type="text" name="" value="">

            <router-link to="/">Statistics</router-link>
            <router-link to="/">Overviews</router-link>
            <router-link to="/">Dashboard</router-link>
            <router-link to="/">Analytics</router-link>
        </nav>
    </header>

    <main class="main">
        <router-view/>
    </main>
</template>

<script>
    export default {
        name: 'App',
        components: {

        }
    }
</script>

<style>
    *, ::before, ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        outline: none;
    }

    :root {
        --main-font-color: #425486;
    }

    #app {
        display: grid;
        font-family: 'Cabin', sans-serif;
    }

    .header .nav {
        padding: 10px;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;
    }

    .header .nav .logo {
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        border-bottom: 2px solid #FFF;
        transition: 0.4s;
        cursor: pointer;
    }

    .header .nav .logo i {
        margin-right: 10px;
    }

    .header .nav .logo:hover {
        border-bottom: 2px solid #EC8294;
    }

    .header .nav .logo h2 {
        color: #7AB8FE;
    }

    .header .nav .logo i {
        color: #FFC4A8;
        font-size: 22px;
    }

    .header .nav input {
        padding: 10px;
        width: 90%;
        border: 1px solid #EEF1F9;
        border-radius: 5px;
        background: #EEF1F9;
        height: 25px;
    }

    .header .nav input:focus {
        outline: none;
    }

    .header .nav a {
        padding-bottom: 5px;
        color: #C3C3C0;
        border-bottom: 1px solid #FFF;
        text-decoration: none;
        transition: 0.4s;
    }

    .header .nav a:hover {
        color: #696B69;
        border-bottom: 2px solid #EC8294;
    }

    .header .nav a:focus {
        color: #696B69;
    }
</style>
