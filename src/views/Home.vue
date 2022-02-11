<template lang="html">
    <div id="home">
        <SlideBarLeft/>

        <main class="center">
            <h1>Data Visualisation</h1>
            <div class="circle">

            </div>
            
            <SlideBarBottom/>
        </main>

        <SlideBarRight/>
    </div>
</template>

<script>
    import SlideBarLeft from '../components/SlideBarLeft';
    import SlideBarRight from '../components/SlideBarRight';
    import SlideBarBottom from '../components/SlideBarBottom';

    export default {
        name: 'Home',
        components: {
            SlideBarLeft, SlideBarRight, SlideBarBottom,
        }
    }
</script>

<style lang="css" scoped>
    #home {
        padding: 30px;
        display: grid;
        grid-template-columns: 200px 1fr 200px;
        grid-gap: 35px;
        background: #FAFAFA;
    }

    .center {
        height: 600px;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-radius: 20px;
        background: #EEF1F9;
    }

    .center h1 {
        color: #37356D;
        font-size: 40px;
    }

    .center .circle {
        width: 400px;
        height: 400px;
        border: 20px solid #F2F6FE;
        border-radius: 50%;
    }
</style>
