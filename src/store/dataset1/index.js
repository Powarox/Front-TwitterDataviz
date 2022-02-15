import localJsonData from '../../data/data.json';
import localJsonEmoji from '../../data/emoji.json';

export default {
    state() {
        return {
            data: {},
            emoji: {},
            sorted_emoji: [],

            total_count: {},
            total_count_by_date: {},

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
        getTotalCountByDate(state) {
            return state.total_count_by_date;
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
            let current_date = '';
            let total_count_by_date = {};

            let total_count = {
                'Tweet': 0,
                'Like': 0,
                'TweetQuote': 0,
                'Retweet': 0,
                'ReplyCount': 0,
            }

            let max_value_number = {
                'Like': 0,
                'Retweet': 0,
                'ReplyCount': 0,
            };

            max_value_number['Like'] = 0;
            max_value_number['Retweet'] = 0;
            max_value_number['ReplyCount'] = 0;

            for(let i in state.data){
                let s1 = state.data[i].date.split('(');
                let parseDate = s1[1].split(',')[0];

                if(current_date === '' || current_date !== parseDate) {
                    current_date = parseDate;
                    total_count_by_date[current_date] = {
                        'Tweet': 1,
                        'Like': state.data[i].Like,
                        'TweetQuote': state.data[i].TweetQuote,
                        'Retweet': state.data[i].Retweet,
                        'ReplyCount': state.data[i].ReplyCount,
                    }
                }
                else {
                    total_count_by_date[current_date].Tweet += 1;
                    total_count_by_date[current_date].Like += state.data[i].Like;
                    total_count_by_date[current_date].TweetQuote += state.data[i].TweetQuote;
                    total_count_by_date[current_date].Retweet += state.data[i].Retweet;
                    total_count_by_date[current_date].ReplyCount += state.data[i].ReplyCount;
                }

                total_count.Tweet += 1;
                total_count.Like += state.data[i].Like;
                total_count.TweetQuote += state.data[i].TweetQuote;
                total_count.Retweet += state.data[i].Retweet;
                total_count.ReplyCount += state.data[i].ReplyCount;

                if(max_value_number.Like < state.data[i].Like) {
                    max_value_number.Like = state.data[i].Like;
                    state.tweet_max_like = state.data[i];
                }
                if(max_value_number.Retweet < state.data[i].Retweet) {
                    max_value_number.Retweet = state.data[i].Retweet;
                    state.tweet_max_retweet = state.data[i];
                }
                if(max_value_number.ReplyCount < state.data[i].ReplyCount) {
                    max_value_number.ReplyCount = state.data[i].ReplyCount;
                    state.tweet_max_comment = state.data[i];
                }
            }

            commit('PARSEDATA', [total_count, total_count_by_date]);
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
        PARSEDATA(state, list) {
            console.log(list[0]);
            console.log(list[1]);
            state.total_count = list[0];
            state.total_count_by_date = list[1];
        },
        PARSEEMOJI(state, list) {
            state.sorted_emoji = list;
        },
    }
}
