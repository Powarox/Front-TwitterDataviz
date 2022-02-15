<template lang="html">
    <div id="slideBarRight">
        <div class="slide chart">
            <h3>Some statistics</h3>

            <div id="apexRightSlideChart">
                <ApexRadialChart :id="'apexRightSlideChart'" :choose="'Retweet'" :data="dataRadial" :height="200" :font-size="12"/>
            </div>

            <div class="item" v-for="(item, id) in this.dataRadial" v-bind:key="item.Tweet">
                <p>Tweet {{ id }}</p>
                <p>{{ item.Tweet }}</p>
            </div>
        </div>
        <div class="slide special">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim d minim veniam, quis nostrud  laborum.</p>
        </div>
        <div class="slide">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim d minim veniam, quis nostrud  laborum.</p>
        </div>
    </div>
</template>

<script>
    import ApexRadialChart from '../charts/ApexRadialChart';

    export default {
        name: 'SlideBarRight',
        props: ['dataRadial'],
        components: {
            ApexRadialChart,
        },
    }
</script>

<style lang="css" scoped>
    #slideBarRight {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .slide {
        padding: 10px 20px;
        background: #FFF;
        box-shadow: 5px 10px 20px #D9D5EC;
        border-radius: 10px;
    }

    .special {
        color: #DDD;
        background: #8674FE;
    }

    .chart h3 {
        text-align: center;
    }

    .chart .item {
        display: flex;
        justify-content: space-between;
        /* grid-template-columns: 1fr 1fr; */
        /* justify-items: left; */
        align-items: center;
    }

    .chart .item .left {
        display: grid;
    }
</style>
