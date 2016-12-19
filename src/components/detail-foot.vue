<template>
	<div class="footer">
	    <span id="animate" class="carticon empty" :attr-quantity="message"> 
	    	<span class="icon icon-cart"></span>
	    </span>
		<div class="cartprice">
			<span class="carttotal"></span> 
			<span class="cartdelivery">配送费¥3</span>
		</div>
		<a href="javascript:" class="submitbutton " :class="message?'':'disabled'" v-html="message?'去结算':'还差¥18起送'"></a>
	</div>
</template>
<script>
	export default{
		props: ['message'],
    data(){
      return {

      }
    },
    watch:{
      message:function(val, oldVal) {
        this.animate(val, oldVal)
      }
    },
    methods:{
      animate(val, oldVal){
        function hasClass( elements,cName ){ 
          return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
        }
        function addClass( elements,cName ){ 
          if( !hasClass( elements,cName ) ){ 
            elements.className += " " + cName; 
          }
        }
        function removeClass( elements,cName ){ 
          if( hasClass( elements,cName ) ){ 
            elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); 
          }
        }
        if(this.message)removeClass(document.getElementById('animate'),'empty')
        else addClass(document.getElementById('animate'),'empty')
        if(val-oldVal>0){
          addClass(document.getElementById('animate'),'move')
          var timer=setTimeout(function(){
            removeClass(document.getElementById('animate'),'move')
          },2000)
        }
        
      }
    }
	}
</script>
<style lang="scss" scoped>
  @-moz-keyframes tips {
    0% {transform:scale(0.8)}
    25% {transform:scale(1.2)}
    50% {transform:scale(0.8)}
    100% {transform:scale(1)}
  }
  @-moz-keyframes tips {
    0% {transform:scale(0.8)}
    25% {transform:scale(1.2)}
    50% {transform:scale(0.8)}
    100% {transform:scale(1)}
  }
  @keyframes tips {
    0% {transform:scale(0.8)}
    25% {transform:scale(1.2)}
    50% {transform:scale(0.8)}
    100% {transform:scale(1)}
  }

	.footer{
		position: fixed;
		right:0;
		left: 0;
		bottom: 0;
		display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 2.164384rem;
    background-color: #3d3d3f;
    height: 1.315068rem;
    opacity: .95;
	}
	.carticon {
    position: absolute;
    left: .328767rem;
    bottom: .136986rem;
    width: 1.534247rem;
    height: 1.534247rem;
    box-sizing: border-box;
    border-radius: 100%;
    background-color: #3190e8;
    border: .123288rem solid #444;
    box-shadow: 0 -.082192rem .054795rem 0 rgba(0,0,0,.1);
    will-change: transform;
    color: #fff;
    font-size: .8rem;
    padding:0 .2rem;
  }
  .carticon.move{
    -webkit-animation:tips .5s .5s;
    -moz-animation:tips .5s .5s;
  }
  
  
  .carticon:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: .753425rem;
    content: "";
  }
  .carticon:after {
    position: absolute;
    right: -.123288rem;
    top: -.136986rem;
    line-height: 1;
    background-color: #ff461d;
    color: #fff;
    border-radius: .328767rem;
    padding: .054795rem .136986rem;
    content: attr(attr-quantity);
    font-size: .273973rem;
  }
  .cartprice .carttotal{
    font-size: .493151rem;
    color: #fff;
  }
  .cartprice .cartdelivery {
    margin-top: .068493rem;
    color: #f5f5f5;
    font-size: .273973rem;
  }
  .submitbutton {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2.876712rem;
    background-color: #4cd964;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: .410959rem;
    font-weight: 700;
    line-height: 1.315068rem;
  }
  .submitbutton.disabled{
    background-color: #535356;
  }
  .carticon.empty {
    background-image: -webkit-radial-gradient(circle,#363636 .643836rem,#444 0);
    background-image: radial-gradient(circle,#363636 .643836rem,#444 0);
}
</style>