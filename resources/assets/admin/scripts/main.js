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
 * Root component
 ********************************************************
 */
import MailerStoriesComponent from './pages/mailer/MailerComponent'


/*
 ********************************************************
 * Filter library
 ********************************************************
 */
require('../../frontend/scripts/filters/filters');


/*
 ********************************************************
 * Plugins & root Vue init
 ********************************************************
 */
import {store} from './store/index';

import {routes} from './routes';

const router = new VueRouter({
    mode: 'history',
    routes
});


new Vue({
    el: '#admin-mailer',
    store,
    router,

    data() {
        return {}
    },

    created() {
    },

    methods: {}
})
