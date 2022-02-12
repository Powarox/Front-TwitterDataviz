<template lang="html">
    <div id="apexRadialChart">

    </div>
</template>

<script>
    import ApexCharts from 'apexcharts';

    export default {
        name: 'ApexRadialChart',
        mounted() {
            let optionsRadial = {
                series: [44, 55, 67, 83],
                chart: {
                    height: 350,
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
                                    return 249
                                }
                            }
                        }
                    }
                },
                labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
            };

            let chartRadial = new ApexCharts(document.querySelector("#apexRadialChart"), optionsRadial);
            chartRadial.render();
        },
    }
</script>

<style lang="css" scoped>
    #apexRadialChart {
        
    }
</style>
