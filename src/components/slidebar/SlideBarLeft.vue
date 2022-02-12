<template lang="html">
    <div id="slideBarRight">
        <div class="slide">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  laborum</p>
        </div>
        <div class="slide tweet">
            <h3>Most Liked Tweet</h3>

            <div class="item">
                <i class="fas fa-heart"></i>
                <div class="content">
                    <span>Like</span>
                    <h4>{{ this.tweetMaxLike.Like.toLocaleString('fr-FR') }}</h4>
                </div>
            </div>

            <div class="item">
                <i class="fas fa-retweet"></i>
                <div class="content">
                    <span>Retweet</span>
                    <h4>{{ this.tweetMaxLike.Retweet.toLocaleString('fr-FR') }}</h4>
                </div>
            </div>

            <div class="item">
                <i class="fas fa-comments"></i>
                <div class="content">
                    <span>Comments</span>
                    <h4>{{ this.tweetMaxLike.ReplyCount.toLocaleString('fr-FR') }}</h4>
                </div>
            </div>

            <!-- <div class="item">
                <i class="fas fa-align-justify"></i>
                <div class="content">
                    <span>Content : </span>
                </div>
            </div>
            <p>{{ this.tweetMaxLike.Content }}</p> -->
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
        padding: 20px 20px;
        background: #FFF;
        box-shadow: 5px 10px 20px #D9D5EC;
        border-radius: 10px;
    }

    .tweet {
        display: grid;
        grid-gap: 10px;
    }

    .tweet h3 {
        text-align: center;
    }

    .tweet .item {
        padding: 5px 0;
        border-top: 1px solid #ddd;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .tweet .item span {
        color: #696B69;
    }

    .tweet .item i {
        padding: 9px;
        color: #EC8294;
        background: #FFF;
        border-radius: 10px;
        font-size: 23px;
    }

    .other {
        padding: 5px 0;
        border-top: 1px solid #ddd;
    }

</style>
