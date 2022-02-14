<template lang="html">
    <div id="apexRadialChart"></div>
</template>

<script>
    import ApexCharts from 'apexcharts';

    export default {
        name: 'ApexRadialChart',
        props: ['id', 'data', 'height'],
        mounted() {
            console.log(this.data);

            let like = this.data.Like;
            let retweet = this.data.Retweet;
            let comment = this.data.ReplyCount;
            let quote = this.data.TweetQuote;

            let count = like + retweet + comment + quote;

            console.log(like, retweet, comment, quote);

            let options = {
                // series: [quote, comment, retweet, like],
                series: [50, 50, 50, 50],
                chart: {
                    height: this.height,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function() {
                                    return count.toLocaleString('fr-FR');
                                }
                            }
                        }
                    }
                },
                labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
            };

            let chart = new ApexCharts(document.querySelector("#" + this.id), options);
            chart.render();
        },
    }
</script>

<style lang="css" scoped>
    #apexRadialChart {

    }
</style>
