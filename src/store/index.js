import { createStore } from 'vuex'

// import global from './modules/global.js'
// import user from './modules/user.js'

export default createStore({
     state: {
      isLoading: false,
      showSection: 'introSec'
    },
    mutations: {
      Loaded(state) {
        state.isLoading = !state.isLoading
        // state沒有age這個屬性
        // state.age = 18
      },
      change(state, name){
        state.showSection = name
      }
    }
})


// const store = new Vuex.Store({
//     state: {
//       isLoading: false,
//       showSection: 'introSec'
//     },
//     mutations: {
//       Loaded(state) {
//         state.isLoading = !state.isLoading
        
//         // state沒有age這個屬性
//         state.age = 18
        
//       },
//       change(state, name){
//         state.showSection = name
//       }
//     }

// })
// export default store;