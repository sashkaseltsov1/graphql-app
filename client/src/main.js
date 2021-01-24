import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import {InMemoryCache} from "apollo-cache-inmemory";
import {typeDefs} from "./resolvers";

Vue.use(VueApollo);
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  cache,
  typeDefs,
  resolvers: {},
});
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  apolloProvider
}).$mount('#app');
