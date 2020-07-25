import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { baseURL } from '../config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    articlesByCategory: [],
    buttons: [{
        id: 0,
        color: "primary",
        name: "youtube-icon"
      }, {
        id: 1,
        color: "error",
        name: "instagram-icon"
      }, {
        id: 2,
        color: "secondary",
        name: "facebook-icon"
    }],
    loading: false,
    notification: false
  },
  mutations: {
    setArticles(state, payload) {
      state.loading = false
      state.articles = payload
    },
    setFilter(state, payload) {
      if(payload === "Todos") {
        state.articlesByCategory = state.articles
      } else {
        state.articlesByCategory = state.articles.filter((i) => i.category === payload)
      }
    },
    setloading(state) {
      state.loading = !state.loading
    },
    setNotification(state) {
      state.notification = !state.notification
    }
  },
  actions: {
    getArticles({ commit }) {
      return axios({
        method: 'get',
        url: `${baseURL}/articles`,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((result) => {

        commit('setArticles', result.data);
        commit('setFilter', "Todos");

      }).catch((err) => {

        console.log('error in getArticles', err)

      })
    },
    postSubscription({ commit }, payload) {
      return axios({
        method: 'post',
        url: `${baseURL}/subscribe`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: payload
      }).then((result) => {
        console.log("result", result)
        commit('setNotification',);
        commit('setloading',);

      }).catch((err) => {

        console.log('error in getArticles', err)

      })
    }
  }
})
