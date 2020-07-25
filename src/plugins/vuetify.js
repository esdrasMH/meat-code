import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#D8AD3D',
                secondary: '#009CD9',
                accent: '#8c9eff',
                error: '#b72c2c'
            },
        },
    },
    icons: {
        iconfont: 'mdi'
    }
});
