<template>
    <header class="header">
        <nav class="nav">
            <router-link to="/" class="logo">
                <i class="fas fa-chart-pie"></i>
                <h2>Dataviz</h2>
            </router-link>

            <input type="text" name="" value="">

            <router-link to="/" :class="{activeView: view1}" @click="switchViews('view1')">Dataset 1</router-link>
            <router-link to="/" :class="{activeView: view2}" @click="switchViews('view2')">Dataset 2</router-link>
            <router-link to="/" :class="{activeView: view3}" @click="switchViews('view3')">Dataset 3</router-link>
            <router-link to="/" :class="{activeView: view4}" @click="switchViews('view4')">Dataset 4</router-link>
        </nav>
    </header>

    <main class="main">
        <router-view/>
    </main>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'App',
        components: {

        },
        data() {
            return {
                view1: true,
                view2: false,
                view3: false,
                view4: false,
            }
        },
        created() {
            this.fetchData();
            this.parseData();
            this.parseEmoji();
        },
        methods: {
            ...mapActions([
                'fetchData', 'parseData', 'parseEmoji',
            ]),
            switchViews(chart) {
                if(chart === 'view1') {
                    this.view1 = true;
                    this.view2 = false;
                    this.view3 = false;
                    this.view4 = false;
                }
                else if(chart === 'view2') {
                    this.view1 = false;
                    this.view2 = true;
                    this.view3 = false;
                    this.view4 = false;
                }
                else if(chart === 'view3') {
                    this.view1 = false;
                    this.view2 = false;
                    this.view3 = true;
                    this.view4 = false;
                }
                else {
                    this.view1 = false;
                    this.view2 = false;
                    this.view3 = false;
                    this.view4 = true;
                }
            }
        },
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
        color: #425486;
        font-family: 'Cabin', sans-serif;
    }

    .header .nav {
        padding: 10px;
        display: grid;
        grid-template-columns: 1.5fr 3fr 1fr 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;
    }

    .header .nav .logo {
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        border-bottom: 2px solid #FFFFFF;
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
        font-size: 20px;
        transition: 0.4s;
    }

    .header .nav a:hover {
        color: #696B69;
        border-bottom: 2px solid #EC8294;
    }

    .header .nav .activeView {
        color: #696B69;
        border-bottom: 2px solid #EC8294;
    }

    /* .header .nav a:focus {
        color: #696B69;
        border-bottom: 2px solid #EC8294;
    } */
</style>
