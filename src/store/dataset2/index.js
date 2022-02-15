import localJsonData2 from '../../data/dataset2/data.json';
import localJsonEmoji2 from '../../data/dataset2/emoji.json';

export default {
    state() {
        return {
            data2: {},
            emoji2: {},
            sorted_emoji2: [],

            total_count2: {},
            total_count_by_date2: {},

            tweet_max_like2: {},
            tweet_max_retweet2: {},
            tweet_max_comment2: {},
        }
    },
    getters: {
        getData2(state) {
            return state.data2;
        },
        getEmoji2(state) {
            return state.sorted_emoji2;
        },
        getTotalCount2(state) {
            return state.total_count2;
        },
        getTotalCountByDate2(state) {
            return state.total_count_by_date2;
        },
        getTweetMaxLike2(state) {
            return state.tweet_max_like2;
        },
        getTweetMaxRetweet2(state) {
            return state.tweet_max_retweet2;
        },
        getTweetMaxComment2(state) {
            return state.tweet_max_comment2;
        },
    },
    actions: {
        fetchData2({commit}) {
            let data = localJsonData2;
            let emoji = localJsonEmoji2;
            commit('UPDATEDATA2', [data, emoji]);
        },
        parseData2({commit, state}) {
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

            for(let i in state.data2){
                let parseDate = state.data2[i].Date.split('-')[0];

                if(current_date === '' || current_date !== parseDate) {
                    current_date = parseDate;
                    total_count_by_date[current_date] = {
                        'Tweet': 1,
                        'Like': state.data2[i].Like,
                        'TweetQuote': state.data2[i].TweetQuote,
                        'Retweet': state.data2[i].Retweet,
                        'ReplyCount': state.data2[i].ReplyCount,
                    }
                }
                else {
                    total_count_by_date[current_date].Tweet += 1;
                    total_count_by_date[current_date].Like += state.data2[i].Like;
                    total_count_by_date[current_date].TweetQuote += state.data2[i].TweetQuote;
                    total_count_by_date[current_date].Retweet += state.data2[i].Retweet;
                    total_count_by_date[current_date].ReplyCount += state.data2[i].ReplyCount;
                }

                if(total_count.Data === undefined || total_count.Data > parseInt(current_date)) {
                    total_count.Date = current_date;
                }

                total_count.Tweet += 1;
                total_count.Like += state.data2[i].Like;
                total_count.TweetQuote += state.data2[i].TweetQuote;
                total_count.Retweet += state.data2[i].Retweet;
                total_count.ReplyCount += state.data2[i].ReplyCount;

                if(max_value_number.Like < state.data2[i].Like) {
                    max_value_number.Like = state.data2[i].Like;
                    state.tweet_max_like2 = state.data2[i];
                }
                if(max_value_number.Retweet < state.data2[i].Retweet) {
                    max_value_number.Retweet = state.data2[i].Retweet;
                    state.tweet_max_retweet2 = state.data2[i];
                }
                if(max_value_number.ReplyCount < state.data2[i].ReplyCount) {
                    max_value_number.ReplyCount = state.data2[i].ReplyCount;
                    state.tweet_max_comment2 = state.data2[i];
                }
            }

            commit('PARSEDATA2', [total_count, total_count_by_date]);
        },
        parseEmoji2({commit, state}) {
            let list = [];

            for(let i in state.emoji2) {
                list.push({
                    'emoji': i,
                    'value': state.emoji2[i]
                })
            }

            const sorter = (a, b) => {
               return b.value - a.value;
            };

            const sortByValue = arr => {
               arr.sort(sorter);
            };

            sortByValue(list);
            commit('PARSEEMOJI2', list);
        },
    },
    mutations: {
        UPDATEDATA2(state, data) {
            console.log(data[0]);
            console.log(data[1]);
            state.data2 = data[0];
            state.emoji2 = data[1];
        },
        PARSEDATA2(state, list) {
            console.log(list[0]);
            console.log(list[1]);
            state.total_count2 = list[0];
            state.total_count_by_date2 = list[1];
        },
        PARSEEMOJI2(state, list) {
            state.sorted_emoji2 = list;
        },
    }
}
