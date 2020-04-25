import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

const base_url = ' http://localhost:3000/';

export default new Vuex.Store({
    state: {
        content: [],
        options: [],
        onCart: [],
        orders: []
    },

    actions: {
        loadContent({commit}) {
            axios
                .get(base_url + 'content')
                .then(data => {
                    let content = data.data;
                    commit('LOAD_CONTENT', content);
                })
                .catch(error => {
                    console.error(error);
                })
        },

        loadOptions({commit}) {
            axios
                .get(base_url + 'options')
                .then(data => {
                    let options = data.data;
                    commit('LOAD_OPTIONS', options);
                })
                .catch(error => {
                    console.error(error);
                })
        },

        loadCart({commit}) {
            axios
                .get(base_url + 'onCart')
                .then(data => {
                    let cart = data.data;
                    commit('LOAD_CART', cart);
                })
                .catch(error => {
                    console.error(error);
                })
        },

        loadOrders({commit}) {
            axios
                .get(base_url + 'orders')
                .then(data => {
                    let orders = data.data;
                    commit('LOAD_ORDERS', orders);
                })
                .catch(error => {
                    console.error(error);
                })
        },
    },

    getters: {
        content: state => state.content,
        options: state => state.options,
        onCart: state => state.onCart,
        orders: state => state.orders
    },

    mutations: {
        LOAD_CONTENT(state, content) {
            state.content = content;
        },

        LOAD_OPTIONS(state, options) {
            state.options = options;
        },

        LOAD_CART(state, cart) {
            state.onCart = cart;
        },

        LOAD_ORDERS(state, orders) {
            state.orders = orders;
        }
    }
})
