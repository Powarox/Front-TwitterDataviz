<template lang="html">
    <div id="apexRadialChart"></div>
</template>

<script>
    import ApexCharts from 'apexcharts';

    export default {
        name: 'ApexRadialChart',
        props: ['id'],
        mounted() {
            var options = {
                series: [{
                        name: 'Desktops',
                        data: [{
                                x: 'ABC',
                                y: 10
                            },
                            {
                                x: 'DEF',
                                y: 60
                            },
                            {
                                x: 'XYZ',
                                y: 41
                            }
                        ]
                    },
                    {
                        name: 'Mobile',
                        data: [{
                                x: 'ABCD',
                                y: 10
                            },
                            {
                                x: 'DEFG',
                                y: 20
                            },
                            {
                                x: 'WXYZ',
                                y: 51
                            },
                            {
                                x: 'PQR',
                                y: 30
                            },
                            {
                                x: 'MNO',
                                y: 20
                            },
                            {
                                x: 'CDE',
                                y: 30
                            }
                        ]
                    }
                ],
                legend: {
                    // show: false
                },
                chart: {
                    // height: 350,
                    type: 'treemap'
                },
                title: {
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
