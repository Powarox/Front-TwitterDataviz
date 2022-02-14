import localJsonData from '../../data/data.json';
import localJsonEmoji from '../../data/emoji.json';

export default {
    state() {
        return {
            data: {},
            emoji: {},
            sorted_emoji: [],

            total_count: {},
            tweet_max_like: {},
            tweet_max_retweet: {},
            tweet_max_comment: {},
        }
    },
    getters: {
        getData(state) {
            return state.data;
        },
        getEmoji(state) {
            return state.sorted_emoji;
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
            let emoji = localJsonEmoji;
            commit('UPDATEDATA', [data, emoji]);
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

            commit('PARSEDATA', total_count);
        },
        parseEmoji({commit, state}) {
            let list = [];

            for(let i in state.emoji) {
                list.push({
                    'emoji': i,
                    'value': state.emoji[i]
                })
            }

            const sorter = (a, b) => {
               return b.value - a.value;
            };

            const sortByValue = arr => {
               arr.sort(sorter);
            };

            sortByValue(list);
            commit('PARSEEMOJI', list);
        },
    },
    mutations: {
        UPDATEDATA(state, data) {
            console.log(data[0]);
            console.log(data[1]);
            state.data = data[0];
            state.emoji = data[1];
        },
        PARSEDATA(state, total_count) {
            state.total_count = total_count;
        },
        PARSEEMOJI(state, list) {
            state.sorted_emoji = list;
        },
    }
}
