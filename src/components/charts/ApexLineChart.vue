<template lang="html">
    <div id="apexLineChart">

    </div>
</template>

<script>
    import ApexCharts from 'apexcharts';

    export default {
        name: 'ApexLineChart',
        props: ['id', 'data', 'height'],
        mounted() {
            let years = [];
            let like = [];
            let retweet = [];

            for(let i in this.data) {
                years.push(i);
                like.push(this.data[i].Like/10000);
                retweet.push(this.data[i].Retweet/10000);
            }


            var options = {
                series: [{
                    name: 'Like',
                    data: like
                }, {
                    name: 'Retweet',
                    data: retweet
                }],
                chart: {
                    height: this.height,
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                },
                xaxis: {
                    type: 'datetime',
                    categories: years
                },
                tooltip: {
                    x: {
                        format: 'yy'
                    },
                },
            };

            let chart = new ApexCharts(document.querySelector("#" + this.id), options);
            chart.render();
        },
    }
</script>

<style lang="css" scoped>
    #apexLineChart {

    }
</style>
