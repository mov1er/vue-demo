import {SHOP_ITEM} from '../types'

export const itemModule = {
  state: { itemList: [] },

  getters: {
    [types.SHOP_ITEM] (state) {
      // ...
    }
  },

  actions: {
    [types.SHOP_ITEM] (context, payload) {
      // ...
      state.itemList=payload
    }
  },
}