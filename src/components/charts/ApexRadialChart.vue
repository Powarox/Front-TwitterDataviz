<template lang="html">
    <div id="apexRadialChart"></div>
</template>

<script>
    import ApexCharts from 'apexcharts';

    export default {
        name: 'ApexRadialChart',
        props: ['id', 'data', 'choose', 'height', 'fontSize'],
        mounted() {
            let total = 0;
            let years = [];
            let values = [];
            let max = 0;
            let stop = true;

            for(let i in this.data) {
                if(i === '2017' || stop === false) {
                    stop = false;
                    years.push(i);
                    switch(this.choose) {
                        case 'Like':
                            values.push(this.data[i].Like);
                            total += this.data[i].Like;
                            if(this.data[i].Like > max){
                                max = this.data[i].Like;
                            }
                            break;
                        case 'Retweet':
                            values.push(this.data[i].Retweet);
                            total += this.data[i].Retweet;
                            if(this.data[i].Retweet > max){
                                max = this.data[i].Retweet;
                            }
                            break;
                        case 'ReplyCount':
                            values.push(this.data[i].ReplyCount);
                            total += this.data[i].ReplyCount;
                            if(this.data[i].ReplyCount > max){
                                max = this.data[i].ReplyCount;
                            }
                            break;
                        default:
                            break;
                    }
                }
            }

            let options = {
                series: [
                    (values[0]*100/max).toFixed(2), (values[1]*100/max).toFixed(2),
                    (values[2]*100/max).toFixed(2), (values[3]*100/max).toFixed(2),
                    (values[4]*100/max).toFixed(2), (values[5]*100/max).toFixed(2)
                ],
                chart: {
                    height: this.height,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: this.fontSize,
                            },
                            value: {
                                fontSize: this.fontSize,
                            },
                            total: {
                                show: true,
                                fontSize: this.fontSize,
                                label: 'Total ' + this.choose,
                                formatter: function() {
                                    return total.toLocaleString('en-EN');
                                }
                            }
                        }
                    }
                },
                labels: [years[0], years[1], years[2], years[3], years[4], years[5]],
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
