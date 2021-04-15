import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    kumatti: []
  },
  mutations: {
    addUser(state, payload) {
      state.user = payload;
    },
    addKumatti(state, payload) {
      state.kumatti.push(payload);
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getCurrentUser: state => {
      return state.user;
    },
    getAllKumatti: state => {
      return state.kumatti;
    },
    getKumattiById: (state, payload) => {
      return state.kumatti.find(x => x.id === payload);
    }
  }
})
