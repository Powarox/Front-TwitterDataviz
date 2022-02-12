import localJsonData from '../../data/data.json'

export default {
    state() {
        return {
            data: {},
            total: {},
            max: {},
        }
    },
    getters: {
        getData(state) {
            return state.feedback;
        },
    },
    actions: {
        fetchData({commit}) {
            let data = localJsonData;
            commit('UPDATEDATA', data);
        },
        parseData({commit, state}) {
            let data = state.data;
            console.log(data);

            // Content: "Big Up Legend…😉 https://t.co/7jI4obAd1Y"
            // Like: 290370
            // ReplyCount: 1889
            // Retweet: 23757
            // TweetQuote: 1614
            // Username: "KMbappe"
            // id: 1492268658038644700

            // let nb_tweet = 0
            //
            // let total_like = 0;
            // let total_retweet = 0;
            // let total_comment = 0;

            // let max_num_like = 0;
            // let max_num_retweet = 0;
            // let max_num_comment = 0;
            // let current_tweet = {}

            // for(let i in data){
            //     console.log(data[i]);
            //     // nb_tweet += 1;
            //     //
            //     // total_like += data[i].like;
            //     // total_retweet += data[i].retweet;
            //     // total_comment += data[i].comment;
            //
            //     // Find tweet with max like retweet comment
            //     // if(max_num_like < data[i].like) {
            //     //     max_num_like = data[i].like;
            //     //     current_tweet = data[i];
            //     // }
            //     // if(max_num_retweet < data[i].retweet) {
            //     //     max_num_retweet = data[i].retweet;
            //     // }
            //     // if(max_num_comment < data[i].comment) {
            //     //     max_num_comment = data[i].comment;
            //     // }
            // }

            commit('PARSEDATA', data);
        },
    },
    mutations: {
        UPDATEDATA(state, data) {
            state.data = data;
            console.log(state.data);
        },
        PARSEDATA(state, data) {
            state.parse = data;
        },
    }
}
