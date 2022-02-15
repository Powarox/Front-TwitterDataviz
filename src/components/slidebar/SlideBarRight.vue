<template lang="html">
    <div id="slideBarRight">
        <div class="slide chart special">
            <h3>Some statistics</h3>

            <div id="apexRightSlideChart1">
                <ApexRadialChart :id="'apexRightSlideChart1'" :choose="'Retweet'" :data="dataRadial" :height="200" :font-size="12"/>
            </div>

            <!-- <div class="item" v-for="(item, id) in this.dataRadial" v-bind:key="item.Tweet">
                <p>Tweet {{ id }}</p>
                <p>{{ item.Tweet }}</p>
            </div> -->
        </div>

        <div class="slide">
            <p>Total Tweet since : 2012</p>
            <h2>3 222 444 <span>(2002)</span></h2>
            <p>un petit truc juste ici</p>
        </div>

        <div class="slide chart special">
            <h3>Some Statistics</h3>
            <br>
            <div id="apexRightSlideChart2">
                <ApexLineChart :id="'apexRightSlideChart2'" :data="dataRadial" :height="210"/>
            </div>
        </div>

        <!-- <div class="slide disclaimer special">
            <p>All the data present in this application is public and comes directly from the official Twitter accounts of the players.</p>
            <div class="bottomBar"></div>
            <p>They were retrieved through a Python script using the Snscrape library which is used to crawl data directly from Twitter.</p>
        </div>
        <div class="slide disclaimer special">
            <p>All the data present in this application is public and comes directly from the official Twitter accounts of the players.</p>
        </div>
        <div class="slide disclaimer special">
            <p>They were retrieved through a Python script using the Snscrape library which is used to crawl data directly from Twitter.</p>
        </div> -->
    </div>
</template>

<script>
    import ApexLineChart from '../charts/ApexLineChart';
    import ApexRadialChart from '../charts/ApexRadialChart';

    export default {
        name: 'SlideBarRight',
        props: ['totalCount', 'dataRadial'],
        components: {
            ApexRadialChart, ApexLineChart,
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
        color: #111;
        background: #A89BFF;
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

    .disclaimer {
        text-align: justify;
    }

    .disclaimer .bottomBar {
        margin: 5px 0;
        border-bottom: 1px solid #AAA;
    }
</style>
