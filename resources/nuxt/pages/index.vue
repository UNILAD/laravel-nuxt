<template>
    <div>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <v-flex shrink class="text-xs-center">
                    <h1>Hello {{ name }}!</h1>
                    <v-btn dark raised @click="$store.commit('increment')">Click me {{ $store.getters.getCounter}}</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        asyncData (context) {
            // called every time before loading the component
            return {
                name: 'Async data'
            }
        },
        fetch () {
            // The `fetch` method is used to fill the store before rendering the page
        },
        head () {
            return {
                title: 'new title',
                meta: [
                    { hid: 'description', name: 'description', content: 'My custom description' }
                ]
            }
        },
        data: () => {
            return {

            };
        },
    };
</script>
