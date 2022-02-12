import localJsonData from '../../data/data.json'

export default {
    state() {
        return {
            data: {},
            total: {},
            max: {},

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

            max_value_number['like'] = 0;
            max_value_number['retweet'] = 0;
            max_value_number['comment'] = 0;

            for(let i in state.data){
                total_count['tweet'] += 1;
                total_count['like'] += state.data[i].Like;
                total_count['retweet'] += state.data[i].Retweet;
                total_count['comment'] += state.data[i].ReplyCount;
                total_count['quote'] += state.data[i].TweetQuote;

                // Find tweet with max like retweet comment
                if(max_value_number['like'] < state.data[i].like) {
                    max_value_number['like'] = state.data[i].like;
                    state.tweet_max_like = state.data[i];
                }
                if(max_value_number['retweet'] < state.data[i].retweet) {
                    max_value_number['retweet'] = state.data[i].retweet;
                    state.tweet_max_retweet = state.data[i];
                }
                if(max_value_number['comment'] < state.data[i].comment) {
                    max_value_number['comment'] = state.data[i].comment;
                    state.tweet_max_comment = state.data[i];
                }
            }

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
