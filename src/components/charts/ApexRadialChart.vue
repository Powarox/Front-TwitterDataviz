<template lang="html">
    <div id="apexRadialChart"></div>
</template>

<script>
    import ApexCharts from 'apexcharts';

    export default {
        name: 'ApexRadialChart',
        props: ['id', 'data', 'height'],
        mounted() {
            let like = this.data.Like;
            let retweet = this.data.Retweet;
            let comment = this.data.ReplyCount;
            let quote = this.data.TweetQuote;
            let total = like + retweet + comment + quote;

            let options = {
                series: [like*100/total, retweet*100/total, comment*100/total, quote*100/total],
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
                                    return total.toLocaleString('fr-FR');
                                }
                            }
                        }
                    }
                },
                labels: ['Like', 'Retweet', 'comment', 'quote'],
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
