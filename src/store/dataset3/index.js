import localJsonData3 from '../../data/dataset3/data.json';
import localJsonEmoji3 from '../../data/dataset3/emoji.json';

export default {
    state() {
        return {
            data3: {},
            emoji3: {},
            sorted_emoji3: [],

            total_count3: {},
            total_count_by_date3: {},

            tweet_max_like3: {},
            tweet_max_retweet3: {},
            tweet_max_comment3: {},
        }
    },
    getters: {
        getData3(state) {
            return state.data3;
        },
        getEmoji3(state) {
            return state.sorted_emoji3;
        },
        getTotalCount3(state) {
            return state.total_count3;
        },
        getTotalCountByDate3(state) {
            return state.total_count_by_date3;
        },
        getTweetMaxLike3(state) {
            return state.tweet_max_like3;
        },
        getTweetMaxRetweet3(state) {
            return state.tweet_max_retweet3;
        },
        getTweetMaxComment3(state) {
            return state.tweet_max_comment3;
        },
    },
    actions: {
        fetchData3({commit}) {
            let data = localJsonData3;
            let emoji = localJsonEmoji3;
            commit('UPDATEDATA3', [data, emoji]);
        },
        parseData3({commit, state}) {
            let current_date = '';
            let total_count_by_date = {};

            let total_count = {
                'date': '',
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

            for(let i in state.data3){
                let parseDate = state.data3[i].Date.split('-')[0];

                if(current_date === '' || current_date !== parseDate) {
                    current_date = parseDate;
                    total_count_by_date[current_date] = {
                        'Tweet': 1,
                        'Like': state.data3[i].Like,
                        'TweetQuote': state.data3[i].TweetQuote,
                        'Retweet': state.data3[i].Retweet,
                        'ReplyCount': state.data3[i].ReplyCount,
                    }
                }
                else {
                    total_count_by_date[current_date].Tweet += 1;
                    total_count_by_date[current_date].Like += state.data3[i].Like;
                    total_count_by_date[current_date].TweetQuote += state.data3[i].TweetQuote;
                    total_count_by_date[current_date].Retweet += state.data3[i].Retweet;
                    total_count_by_date[current_date].ReplyCount += state.data3[i].ReplyCount;
                }

                if(total_count.Data === undefined || total_count.Data > parseInt(current_date)) {
                    total_count.Date = current_date;
                }

                total_count.Tweet += 1;
                total_count.Like += state.data3[i].Like;
                total_count.TweetQuote += state.data3[i].TweetQuote;
                total_count.Retweet += state.data3[i].Retweet;
                total_count.ReplyCount += state.data3[i].ReplyCount;

                if(max_value_number.Like < state.data3[i].Like) {
                    max_value_number.Like = state.data3[i].Like;
                    state.tweet_max_like3 = state.data3[i];
                }
                if(max_value_number.Retweet < state.data3[i].Retweet) {
                    max_value_number.Retweet = state.data3[i].Retweet;
                    state.tweet_max_retweet3 = state.data3[i];
                }
                if(max_value_number.ReplyCount < state.data3[i].ReplyCount) {
                    max_value_number.ReplyCount = state.data3[i].ReplyCount;
                    state.tweet_max_comment3 = state.data3[i];
                }
            }

            commit('PARSEDATA3', [total_count, total_count_by_date]);
        },
        parseEmoji3({commit, state}) {
            let list = [];

            for(let i in state.emoji3) {
                list.push({
                    'emoji': i,
                    'value': state.emoji3[i]
                })
            }

            const sorter = (a, b) => {
               return b.value - a.value;
            };

            const sortByValue = arr => {
               arr.sort(sorter);
            };

            sortByValue(list);
            commit('PARSEEMOJI3', list);
        },
    },
    mutations: {
        UPDATEDATA3(state, data) {
            console.log(data[0]);
            console.log(data[1]);
            state.data3 = data[0];
            state.emoji3 = data[1];
        },
        PARSEDATA3(state, list) {
            console.log(list[0]);
            console.log(list[1]);
            state.total_count3 = list[0];
            state.total_count_by_date3 = list[1];
        },
        PARSEEMOJI3(state, list) {
            state.sorted_emoji3 = list;
        },
    }
}
