<template lang="html">
    <div id="slideBarRight">
        <div class="slide description">
            <h3>{{ this.description.title}}</h3>
            <img :src="getImgUrl(this.description.img)" alt="Portrait Twitter Account">
            <div class="bottom">
                <div class="item">
                    <p>Club : </p>
                    <p>Follers :</p>
                    <p>Subscribers :</p>
                    <p>Tweets Posted :</p>
                </div>
                <div class="item">
                    <p>{{ this.description.club}}</p>
                    <p>{{ this.description.followers}}</p>
                    <p>{{ this.description.sub}}</p>
                    <p>{{ this.totalCount.Tweet.toLocaleString('en-EN')}}</p>
                </div>
            </div>
            <p>{{ this.description.text }}</p>
        </div>
        <div class="slide tweet">
            <h3>Most Liked Tweet</h3>

            <div class="item">
                <i class="fas fa-heart"></i>
                <div class="content">
                    <span>Like</span>
                    <h4>{{ this.tweetMaxLike.Like.toLocaleString('en-EN') }}</h4>
                </div>
            </div>

            <div class="item">
                <i class="fas fa-retweet"></i>
                <div class="content">
                    <span>Retweet</span>
                    <h4>{{ this.tweetMaxLike.Retweet.toLocaleString('en-EN') }}</h4>
                </div>
            </div>

            <div class="item">
                <i class="fas fa-comments"></i>
                <div class="content">
                    <span>Comments</span>
                    <h4>{{ this.tweetMaxLike.ReplyCount.toLocaleString('en-EN') }}</h4>
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
        props: ['description', 'totalCount', 'tweetMaxLike', 'tweetMaxRetweet', 'tweetMaxComment'],
        methods: {
            getImgUrl(pic) {
                return require('../../assets/' + pic + '.png');
            },
        },
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

    .description {
        box-sizing: border-box;
    }

    .description img {
        width: 180px;
        margin: 10px auto;
        display: flex;
        border-radius: 10px;
    }

    .description .bottom {
        margin: 0 15px 5px;
        display: flex;
        justify-content: space-between;
        gap: 10px;
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
