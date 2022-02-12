<template lang="html">
    <div id="slideBarRight">
        <div class="slide">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  laborum</p>
        </div>
        <div class="slide">
            <p>{{ this.tweetMaxLike.Content }}</p>
            <br>
            <p>{{ this.tweetMaxRetweet.Content }}</p>
            <br>
            <p>{{ this.tweetMaxComment.Content }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SlideBarRight',
        props: ['tweetMaxLike', 'tweetMaxRetweet', 'tweetMaxComment'],
    }
</script>

<style lang="css" scoped>
    #slideBarRight {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .slide {
        padding: 10px 20px;
        background: #FFF;
        box-shadow: 5px 10px 20px #D9D5EC;
        border-radius: 10px;
    }
</style>
