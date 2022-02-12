<template lang="html">
    <div id="slideBarBottom">
        <div class="items">
            <i class="fas fa-heart"></i>
            <div class="content">
                <span>Total Like</span>
                <p>333</p>
            </div>
        </div>

        <div class="items">
            <i class="fas fa-retweet"></i>
            <div class="content">
                <span>Total Retweet</span>
                <p>1877</p>
            </div>
        </div>

        <div class="items">
            <i class="fas fa-comments"></i>
            <!-- <i class="fab fa-twitter"></i> -->
            <div class="content">
                <span>Total Comment</span>
                <!-- <span>Total Tweet</span> -->
                <p>999</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SlideBarBottom',
    }
</script>

<style lang="css" scoped>
    #slideBarBottom {
        width: 90%;
        display: flex;
        justify-content: space-between;
    }

    .items {
        display: flex;
        align-items: center;
    }

    .items i {
        margin: 10px;
        padding: 9px;
        color: #EC8294;
        background: #FFF;
        border-radius: 10px;
        font-size: 23px;
    }

    .items .content {
        font-size: 15px;
    }

    .items .content span {
        color: #696B69;
    }
</style>
