<template lang="html">
    <div id="dataset3">
        <SlideBarLeft
            :description="description"
            :total-count="totalCount()"
            :tweet-max-like="tweetMaxLike()"
            :tweet-max-retweet="tweetMaxRetweet()"
            :tweet-max-comment="tweetMaxComment()"/>

        <main class="center">
            <h1>Data Visualisation</h1>

            <div class="switchCharts">
                <h4 :class="{activeChart: chart1}" @click="switchChartViews('chart1')">Chart 1</h4>
                <h4 :class="{activeChart: chart2}" @click="switchChartViews('chart2')">Chart 2</h4>
                <h4 :class="{activeChart: chart3}" @click="switchChartViews('chart3')">Chart 3</h4>
            </div>

            <div class="circle" id="apexMainChart3" v-if="chart1">
                <ApexTreeMapChart :id="'apexMainChart3'" :height="175" :data="emoji()"/>
            </div>

            <div class="circle" id="apexMainChart1" v-if="chart2">
                <ApexRadialChart :id="'apexMainChart1'" :choose="'Like'" :data="totalCountByDate()" :height="400" :font-size="20"/>
            </div>

            <div class="circle" id="apexMainChart2" v-if="chart3">
                <ApexBarChart :id="'apexMainChart2'" :data="totalCountByDate()"/>
            </div>

            <SlideBarBottom :total-count="totalCount()"/>
        </main>

        <SlideBarRight
            :total-count="totalCount()"
            :dataRadial="totalCountByDate()"/>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    import SlideBarLeft from '../components/slidebar/SlideBarLeft';
    import SlideBarRight from '../components/slidebar/SlideBarRight';
    import SlideBarBottom from '../components/slidebar/SlideBarBottom';

    import ApexBarChart from '../components/charts/ApexBarChart';
    import ApexRadialChart from '../components/charts/ApexRadialChart';
    import ApexTreeMapChart from '../components/charts/ApexTreeMapChart';

    export default {
        name: 'Dataset3',
        components: {
            SlideBarLeft, SlideBarRight, SlideBarBottom,
            ApexRadialChart, ApexBarChart, ApexTreeMapChart,
        },
        data() {
            return {
                chart1: true,
                chart2: false,
                chart3: false,

                description: {
                    'title': 'Neymar Jr',
                    'img': 'dataset3',
                    'club': 'PSG',
                    'followers': '9 M',
                    'sub': '631',
                    'text': 'Brazilian footballer, born February 5, 1992 in Mogi Cruzes',
                }
            }
        },
        methods: {
            ...mapGetters([
                'getEmoji3', 'getTotalCount3', 'getTotalCountByDate3',
                'getTweetMaxLike3', 'getTweetMaxRetweet3', 'getTweetMaxComment3',
            ]),
            switchChartViews(chart) {
                if(chart === 'chart1') {
                    this.chart1 = true;
                    this.chart2 = false;
                    this.chart3 = false;
                }
                else if(chart === 'chart2') {
                    this.chart1 = false;
                    this.chart2 = true;
                    this.chart3 = false;
                }
                else {
                    this.chart1 = false;
                    this.chart2 = false;
                    this.chart3 = true;
                }
            },
        },
        computed: {
            emoji() {
                return this.getEmoji3;
            },
            totalCount() {
                return this.getTotalCount3;
            },
            totalCountByDate(){
                return this.getTotalCountByDate3;
            },
            tweetMaxLike() {
                return this.getTweetMaxLike3;
            },
            tweetMaxRetweet() {
                return this.getTweetMaxRetweet3;
            },
            tweetMaxComment() {
                return this.getTweetMaxComment3;
            },
        }
    }
</script>

<style lang="css" scoped>
    #dataset3 {
        padding: 23px 80px;
        display: grid;
        grid-template-columns: 250px 1fr 250px;
        grid-gap: 50px;
        background: #F9F9F9;
    }

    .center {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        border-radius: 20px;
        background: #EEF1F9;
    }

    .center .switchCharts {
        display: flex;
        justify-content: center;
        gap: 20px;
        background: #FFF;
        border-radius: 10px;
    }

    .center .switchCharts h4 {
        padding: 7px;
        border-radius: 10px;
        transition: 0.4s;
        cursor: pointer;
    }

    .center .switchCharts h4:hover, .activeChart {
        color: #EC8294;
        box-shadow: 0 0 5px #EC8294;
    }

    .center h1 {
        color: #37356D;
        font-size: 40px;
    }

    .center .circle {
        width: 420px;
        height: 420px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 20px solid #F2F6FE;
        border-radius: 50%;
    }
</style>
