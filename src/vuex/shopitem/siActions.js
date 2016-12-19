// import * as types from '../types'
// import shipItem from './shopitem'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export const getShopItemList=()=>{
	return Vue.http.get('../../../static/shoplist.json')
	.then((response) => {
		return response.body
  	}, (response) => {

 	})
	.catch((err)=>console.log(err))
}
export const getFeatItemList=()=>{
	return Vue.http.get('../../../static/shopfeat.json')
	.then((response) => {
		return response.body
  	}, (response) => {

 	})
	.catch((err)=>console.log(err))
}