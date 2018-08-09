/*
 ********************************************************
 * Glabal package
 ********************************************************
 */

import 'babel-polyfill';

window.axios = require('axios');
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';


/*
 ********************************************************
 * Vuex package (store)
 ********************************************************
 */

Vue.use(Vuetify);
Vue.use(VueRouter);


/*
 ********************************************************
 * axios package & header setup
 ********************************************************
 */

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');


/*
 ********************************************************
 * Twitter widget for twitter widget loader
 ********************************************************
 */
window.TwitterWidgetsLoader = require('twitter-widgets');

/*
 ********************************************************
 * Root component
 ********************************************************
 */

import NavigationComponent from './layouts/NavigationComponent.vue';
import FooterComonent from './layouts/FooterComponent.vue';

import {routes} from './routes.js';
import {store} from './store/store';

/*
 ********************************************************
 * Global Filters
 ********************************************************
 */

require('./filters/filters');


/*
 ********************************************************
 * Plugins & root Vue init
 ********************************************************
 */

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#sniffr',
    store: store,
    components: {
        navigationComponent: NavigationComponent,
        footerComponent: FooterComonent
    },
    router,
    data() {
        return {
            sniffrStateReady : false
        }
    },

    created(){
        // initialize code go here before load any of component. like user, settings
        this.$store.dispatch('setSettingObjectFromServer')
            .then((data) => {
                this.$store.commit('setUserStatus', data.sniffr_app);
                this.sniffrStateReady = true
            })
    },

    methods: {}
});
