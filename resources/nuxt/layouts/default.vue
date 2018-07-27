<template>
    <div id="app">
        <v-app id="inspire" dark>
            <v-navigation-drawer
                clipped
                fixed
                v-model="drawer"
                app
            >
                <v-list dense>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title @click="onNavigate('/')">
                                Home
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>settings</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content @click="onNavigate('/about')">
                            <v-list-tile-title>About us</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar app fixed clipped-left>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title>Application</v-toolbar-title>
            </v-toolbar>
            <v-content>
                <nuxt/>
            </v-content>
            <v-footer app fixed>
                <span>&copy; 2018</span>
            </v-footer>
        </v-app>
    </div>
</template>
<script>
    export default {
        data: () => ({
            drawer: true
        }),

        props: {
            source: String
        },

        methods:{
            onClick(){
                this.$store.commit('increment');
            },

            onNavigate(link){
                this.$router.push({path: link});
            }
        }
    }
</script>
