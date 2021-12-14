<template>
  <section class="NotFound">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card height="400" color="transparent" flat>
            <section class="display-3 mt-5">Page Not Found.</section>
            <section class="grey--text lighten-5">
              <p>The page you have reached may have taken the red pill or
                migrated to another location</p>
            </section>
            <section class="paragraph-text mt-2">
              <p>Try going back to the home page or repeating the action. Or
                reach out to our help desk for support.</p>
            </section>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<style scope lang="scss">
  paragraph-text { font-size: 18px; }
</style>

<script>
export default { name: 'NotFound' };
</script>
