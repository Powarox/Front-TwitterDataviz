import localJsonData from '../../data/data.json'

export default {
    state() {
        return {
            data: {},
            total_count: {},
            tweet_max_like: {},
            tweet_max_retweet: {},
            tweet_max_comment: {},
        }
    },
    getters: {
        getData(state) {
            return state.feedback;
        },
        getTotalCount(state) {
            console.log(state.total_count);
            return state.total_count;
        },
        getTweetMaxLike(state) {
            return state.tweet_max_like;
        },
        getTweetMaxRetweet(state) {
            return state.tweet_max_retweet;
        },
        getTweetMaxComment(state) {
            return state.tweet_max_comment;
        },
    },
    actions: {
        fetchData({commit}) {
            let data = localJsonData;
            console.log(data);
            commit('UPDATEDATA', data);
        },
        parseData({commit, state}) {
            let total_count = {};
            let max_value_number = {};

            total_count['tweet'] = 0;
            total_count['like'] = 0;
            total_count['quote'] = 0;
            total_count['retweet'] = 0;
            total_count['comment'] = 0;

            max_value_number['like'] = 0;
            max_value_number['retweet'] = 0;
            max_value_number['comment'] = 0;

            for(let i in state.data){
                total_count['tweet'] += 1;
                total_count['like'] += state.data[i].Like;
                total_count['quote'] += state.data[i].TweetQuote;
                total_count['retweet'] += state.data[i].Retweet;
                total_count['comment'] += state.data[i].ReplyCount;

                // Find tweet with max like retweet comment
                if(max_value_number['like'] < state.data[i].Like) {
                    max_value_number['like'] = state.data[i].Like;
                    state.tweet_max_like = state.data[i];
                }
                if(max_value_number['retweet'] < state.data[i].Retweet) {
                    max_value_number['retweet'] = state.data[i].Retweet;
                    state.tweet_max_retweet = state.data[i];
                }
                if(max_value_number['comment'] < state.data[i].ReplyCount) {
                    max_value_number['comment'] = state.data[i].ReplyCount;
                    state.tweet_max_comment = state.data[i];
                }
            }

            console.log(state.tweet_max_retweet);

            commit('PARSEDATA', total_count);
        },
    },
    mutations: {
        UPDATEDATA(state, data) {
            state.data = data;
            console.log(state.data);
        },
        PARSEDATA(state, total_count) {
            state.total_count = total_count;
        },
    }
}
