<template>
    <v-container fluid fill-height>
        <v-layout justify-center align-center>
            <v-flex shrink class="text-xs-center">
                <h1>Hello {{ name }}!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto, assumenda doloribus dolorum fugiat in, molestiae nostrum possimus quo sequi sunt voluptas! Aliquam cupiditate dolor eligendi nemo nobis quas sit?</p>
                <v-btn dark raised @click="$store.commit('increment')">Click me {{ $store.getters.getCounter}}</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => {
            return { name: 'About page' };
        },

        head(){
            return {
                title: 'About us page',
                meta: [
                    { hid: 'description', name: 'description', content: 'This is about us page description' }
                ]
            }

        }
    };
</script>
