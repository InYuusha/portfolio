import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
    


          dark: {

            background: colors.indigo.base, // If not using lighten/darken, use base to return hex

        },
      },


});
