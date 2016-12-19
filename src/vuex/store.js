import Vue from 'vue'
import Vuex from 'vuex'
// import shopitem from './shopitem/shopitem'
import {SHOP_ITEM,FEAT_DETAIL} from './types'
Vue.use(Vuex)


export default new Vuex.Store({
	state:{
		shopitem:'',
		featitem:[]
	},
	mutations:{
		[SHOP_ITEM](state,shopitem){
			state.shopitem=shopitem
		},
		[FEAT_DETAIL](state,featitem){
			state.featitem=featitem
		}
	},
	actions:{
		setList({commit},shopitem){
			commit("SHOP_ITEM",shopitem)
		},
		setFeat({commit},featitem){
			commit([FEAT_DETAIL],featitem)
		}
	},
	getters:{
		getList:(state)=>{
			return state.shopitem
		},
		getFeat:(state)=>state.featitem
	}
})