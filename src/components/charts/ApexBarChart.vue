<template lang="html">
    <div id="apexBarChart"></div>
</template>

<script>
    import ApexCharts from 'apexcharts';

    export default {
        name: 'ApexBarChart',
        props: ['id', 'data', 'height'],
        mounted() {
            let years = [];
            let like = [];
            let quote = [];
            let retweet = [];
            let comment = [];

            for(let i in this.data) {
                years.push(i);
                like.push(this.data[i].Like);
                quote.push(this.data[i].TweetQuote);
                retweet.push(this.data[i].Retweet);
                comment.push(this.data[i].ReplyCount);
            }

            let options = {
                series: [{
                    name: 'Like',
                    data: like
                }, {
                    name: 'Retweet',
                    data: retweet
                }, {
                    name: 'Comment',
                    data: comment
                }],
                chart: {
                    type: 'bar',
                    height: 200
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: years,
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return val.toLocaleString('fr-FR');
                        }
                    }
                }
            };

            let chart = new ApexCharts(document.querySelector("#" + this.id), options);
            chart.render();

        },
    }
</script>

<style lang="css" scoped>
    #apexBarChart {

    }
</style>
