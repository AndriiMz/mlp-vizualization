import Vue from 'vue';
import dotenv from 'dotenv';
import moment from 'moment';

import BootstrapVue, {BFormTextarea} from "bootstrap-vue";
import bRow from 'bootstrap-vue/es/components/layout/row';
import bCol from 'bootstrap-vue/es/components/layout/col';
import bForm from 'bootstrap-vue/es/components/form/form';
import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
import bButton from 'bootstrap-vue/es/components/button/button';
import bBadge from 'bootstrap-vue/es/components/badge/badge';
import bCard from 'bootstrap-vue/es/components/card/card';
import bInputGroup from 'bootstrap-vue/es/components/input-group/input-group';
import bAlert from 'bootstrap-vue/es/components/alert/alert';
import bFormFile from 'bootstrap-vue/es/components/form-file/form-file';
import vBModal from 'bootstrap-vue/es/components/modal/modal';
import BNav from 'bootstrap-vue/es/components/nav/nav';
import bNavItem from 'bootstrap-vue/es/components/nav/nav-item';
import bCardGroup from 'bootstrap-vue/es/components/card/card-group';
import bCardText from 'bootstrap-vue/es/components/card/card-text';
import bFormSelect from 'bootstrap-vue/es/components/form-select/form-select';
import bTabs from 'bootstrap-vue/es/components/tabs/tabs';
import bTab from 'bootstrap-vue/es/components/tabs/tab';
import bFormCheckboxGroup from 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group';
import bFormCheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox';
import {bDropdown, bDropdownItem, bPagination, bTable} from 'bootstrap-vue/es/components';
import Chart from 'v-chart-plugin'



import vLoading from 'vuex-loading/src/components/v-loading.vue';

import Vuex from 'vuex';
import VueLoading from 'vuex-loading';
import VueKonva from 'vue-konva'

import router from './router';
import store from "./store";

import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


import ErrorFilter from "Common/error.filter";

import './utils/array';

dotenv.config();



//Bootstrap vue
Vue.component('b-card', bCard);
Vue.component('b-input-group', bInputGroup);
Vue.component('b-row', bRow);
Vue.component('b-col', bCol);
Vue.component('b-form', bForm);
Vue.component('b-form-group', bFormGroup);
Vue.component('b-form-input', bFormInput);
Vue.component('b-button', bButton);
Vue.component('b-badge', bBadge);
Vue.component('b-alert', bAlert);
Vue.component('b-form-file', bFormFile);
Vue.component('b-modal', vBModal);
Vue.component('b-nav', BNav);
Vue.component('b-nav-item', bNavItem);
Vue.component('b-card-group', bCardGroup);
Vue.component('b-card-text', bCardText);
Vue.component('b-form-select', bFormSelect);
Vue.component('b-tabs', bTabs);
Vue.component('b-tab', bTab);
Vue.component('b-form-checkbox-group', bFormCheckboxGroup);
Vue.component('b-form-checkbox', bFormCheckbox);
Vue.component('b-dropdown', bDropdown);
Vue.component('b-dropdown-item', bDropdownItem);
Vue.component('b-table', bTable);
Vue.component('b-pagination', bPagination);
Vue.component('b-form-textarea', BFormTextarea);

Vue.component('v-loading', vLoading);

Vue.use(Chart);
Vue.use(Vuex);
Vue.use(VueLoading);
Vue.use(BootstrapVue);
Vue.use(VueKonva);

Vue.use(require('vue-moment'), {
  moment
});

Vue.config.productionTip = false;
// Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
  vueLoading: new VueLoading({
      useVuex: true
  }),
});
