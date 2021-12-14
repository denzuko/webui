<script>
export default {
    name: 'App',
    data: {
    }
}
<script>

<template>
    <v-app>
        <v-app-bar app></v-app-bar>

        <v-main>
            <v-container>
                <router-view/> 
            </v-container>
        </v-main>
      </v-app>
</template>
