export default {
  getShopItemList(){
    return  this.$http.get('../../../static/1.json').then((response) =>{
      return response
      }, (response) => {
        // error callback

      });
  }
}
