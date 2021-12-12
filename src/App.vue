<template>
    <v-app>
        <v-app-bar app></v-app-bar>

        <v-main>
            <v-container>
                <p>Hello, {{ name }}!</p>
            </v-container>
        </v-main>
      </v-app>
</template>

<script>
export default {
    name: 'App',
    data: () => {
    }
}
<script>
