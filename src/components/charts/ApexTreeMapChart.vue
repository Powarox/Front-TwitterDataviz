<template lang="html">
    <div id="apexRadialChart"></div>
</template>

<script>
    import ApexCharts from 'apexcharts';

    export default {
        name: 'ApexRadialChart',
        props: ['id', 'data', 'height'],
        mounted() {
            let set1 = [];
            let set2 = [];
            let set3 = [];
            let set4 = [];
            let set5 = [];
            let count = 0;

            for(let i in this.data){
                if(count < 3) {
                    set1.push({'x': this.data[i].emoji, 'y': this.data[i].value});
                    count++;
                }
                if(2 < count && count < 6) {
                    set2.push({'x': this.data[i].emoji, 'y': this.data[i].value});
                    count++;
                }
                if(5 < count && count < 9) {
                    set3.push({'x': this.data[i].emoji, 'y': this.data[i].value});
                    count++;
                }
                if(8 < count && count < 12) {
                    set4.push({'x': this.data[i].emoji, 'y': this.data[i].value});
                    count++;
                }
                if(11 < count && count < 15) {
                    set5.push({'x': this.data[i].emoji, 'y': this.data[i].value});
                    count++;
                }
            }

            var options = {
                series: [
                    { data: set1},
                    { data: set2},
                    { data: set3},
                    { data: set4},
                    { data: set5},
                ],
                chart: {
                    width: 275,
                    height: 275,
                    // height: this.height,
                    type: 'treemap'
                },
                title: {
                  text: 'Most Used Emojis',
                  align: 'center'
                }
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
