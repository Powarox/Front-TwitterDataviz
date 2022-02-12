<template lang="html">
    <div id="apexBarChart">

    </div>
</template>

<script>
    import ApexCharts from 'apexcharts';

    export default {
        name: 'ApexBarChart',
        mounted() {
            let options = {
                series: [{
                    name: 'A',
                    data: [44, 55, 57, 56, 61]
                }, {
                    name: 'B',
                    data: [76, 85, 101, 98, 87]
                }, {
                    name: 'C',
                    data: [35, 41, 36, 26, 45]
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
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
                },
                // yaxis: {
                //     title: {
                //         text: '$ (thousands)'
                //     }
                // },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return "$ " + val + " thousands"
                        }
                    }
                }
            };

            let chart = new ApexCharts(document.querySelector("#apexBarChart"), options);
            chart.render();

        },
    }
</script>

<style lang="css" scoped>
    #apexBarChart {

    }
</style>
