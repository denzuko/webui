<template>
    <v-container>
        <v-card><h1>Hello World</h1></v-card>
        <ais-instant-search
            :search-client="searchClient"
            index-name="dev_pages"
        >
        <ais-search-box placeholder="Search here…" class="searchbox" />

        <ais-hits>
            <v-card>
                <template slot="item" slot-scope="item">
                    <h2><ais-highlight :hit="item"
                            attribute="meta[0].value"/></h2>
                    <p><ais-highlight :hit="item" attribute="body"/></p>

                </template>
            </v-card>
        </ais-hits>

        <ais-pagination />

        </ais-instant-search>
    </v-container>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/algolia-min.css';

export default {
  name: 'LandingPage',
  data() {
    return {
      searchclient: algoliasearch(
        'JH6JMX67ZR',
        '368cc493ba2de909d37a68b6489065dc',
      ),
    };
  },
};
</script>
