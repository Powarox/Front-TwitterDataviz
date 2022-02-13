<template lang="html">
    <div id="apexRadialChart"></div>
</template>

<script>
    import ApexCharts from 'apexcharts';

    export default {
        name: 'ApexRadialChart',
        props: ['id', 'data'],
        mounted() {
            console.log(this.data);

            // let keys = Object.keys(this.data);
            // let result =  keys.sort(function(a,b){return this.data[b] - this.data[a]});

            // let result = this.data?.sort((a, b) => (a.price > b.price ? -1 : 1))

            // console.log(result);


            var options = {
                series: [{
                        name: 'Desktops',
                        data: [{
                                x: '❤️',
                                y: 30
                            },
                            {
                                x: '😳',
                                y: 60
                            },
                            {
                                x: '🎯',
                                y: 41
                            }
                        ]
                    },
                    {
                        name: 'Mobile',
                        data: [{
                                x: '😭',
                                y: 10
                            },
                            {
                                x: '😈',
                                y: 20
                            },
                            {
                                x: '😢',
                                y: 51
                            },
                            {
                                x: '😍',
                                y: 30
                            },
                            {
                                x: '😆',
                                y: 20
                            },
                            {
                                x: '😄',
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
