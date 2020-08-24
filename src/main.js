import Vue from 'vue'
import App from './App.vue'
import myicon from './assets/icon.css'
import VueRouter from 'vue-router'

import lsButton from './components/lsButton.vue'
import lsInput from './components/lsInput.vue'
import lsSeal from './components/lsSeal.vue'
import lsNavigation from './components/lsNavigation.vue'
import lsSuspend from './components/lsSuspend.vue'
import lsButtonGroup from './components/lsButtonGroup.vue'
import lsImgResult from './components/lsImgResult.vue'
import lsGridding from './components/lsGridding.vue'
import lsItem from './components/lsItem.vue'
import lsComment from './components/lsComment.vue' 
import lsCard from './components/lsCard.vue'
import lsSection from './components/lsSection.vue'
import lsProductCard from './components/lsProductCard.vue'
import lsHeaderImage from './components/lsHeaderImage.vue'
import lsSpecialButton from './components/lsSpecialButton.vue'
import lsConciseButton from "./components/lsConciseButton"
import lsNavigationPro from "./components/lsNavigationPro";

let components = [
	lsButton,
	lsInput,
	lsSeal,
	lsNavigation,
	lsSuspend,
	lsButtonGroup,
	lsImgResult,
	lsItem,
	lsGridding,
	lsComment,
	lsCard,
	lsSection,
	lsProductCard,
	lsHeaderImage,
	lsSpecialButton,
	lsConciseButton,
	lsNavigationPro
]
// components.map(component => Vue.component(component.name, component))
let install = function(Vue) {
	if (install.installed) return
	components.map(component => Vue.component(component.name, component))
}
export default {
	install,
	lsButton,
	lsInput,
	lsSeal,
	lsNavigation,
	lsSuspend,
	lsButtonGroup,
	lsImgResult,
	lsGridding,
	lsItem,
	lsComment,
	lsCard,
	lsSection,
	lsProductCard,
	lsHeaderImage,
	lsSpecialButton,
	lsConciseButton,
	lsNavigationPro
}
Vue.use(install);
Vue.use(VueRouter)
Vue.use(myicon)
Vue.config.productionTip = false

new Vue({
	render: h => h(App)
}).$mount('#app')
