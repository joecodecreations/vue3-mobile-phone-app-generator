import { createStore } from 'vuex'
import axios from 'axios'

const apiUrl = process.env.VUE_APP_API_URL

export default createStore({
  state: {
    projects: [],
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects
    },
    addProject(state, project) {
      state.projects.push(project)
    },
  },
  actions: {
    async fetchProjects({ commit }) {
      const response = await axios.get(`${apiUrl}/projects`)
      commit('setProjects', response.data)
    },
    async addProject({ commit }, project) {
      const response = await axios.post(`${apiUrl}/projects`, project)
      commit('addProject', response.data)
    },
  },
  modules: {},
})