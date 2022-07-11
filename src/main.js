import Vue from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'

Vue.mixin({
  data: function() {
    return {
      get app_title() {
        return "UpMind";
      }
    }
  }
});

Vue.component('navbar', NavBar);

new Vue({
  el: '#app',
  render: h => h(App)
})
