"use strict";(self["webpackChunkhome"]=self["webpackChunkhome"]||[]).push([[283],{4564:function(t,s,e){e.d(s,{Z:function(){return l}});var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"list-item"},[e("img",{attrs:{src:"/img/list/"+t.item.src,alt:""}}),e("p",[t._v(t._s(t.item.title))]),e("p",[t._v(t._s(t.item.price)+"￥")]),e("div",[e("svg",{staticClass:"icon",attrs:{t:"1651922528997",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"766",width:"200",height:"200"},on:{touchend:function(s){return t.$store.commit("reduceShop",t.item)}}},[e("path",{attrs:{d:"M512 853.333333c-187.733333 0-341.333333-153.6-341.333333-341.333333s153.6-341.333333 341.333333-341.333333 341.333333 153.6 341.333333 341.333333-153.6 341.333333-341.333333 341.333333z m0-85.333333c140.8 0 256-115.2 256-256s-115.2-256-256-256-256 115.2-256 256 115.2 256 256 256z m-170.666667-298.666667h341.333334v85.333334H341.333333v-85.333334z",fill:"#444444","p-id":"767"}})]),e("span",[t._v(t._s(t.item.count))]),e("svg",{staticClass:"icon",attrs:{t:"1651922544516",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"906",width:"200",height:"200"},on:{touchend:function(s){return t.$store.commit("addShop",t.item)}}},[e("path",{attrs:{d:"M469.333333 469.333333V341.333333h85.333334v128h128v85.333334h-128v128h-85.333334v-128H341.333333v-85.333334h128z m42.666667 384c-187.733333 0-341.333333-153.6-341.333333-341.333333s153.6-341.333333 341.333333-341.333333 341.333333 153.6 341.333333 341.333333-153.6 341.333333-341.333333 341.333333z m0-85.333333c140.8 0 256-115.2 256-256s-115.2-256-256-256-256 115.2-256 256 115.2 256 256 256z",fill:"#444444","p-id":"907"}})])])])},n=[],o={props:["item"],created(){console.log("listBar",this.data)},mounted(){console.log("listBar",this.data,this)}},r=o,a=e(1001),c=(0,a.Z)(r,i,n,!1,null,"37ff2011",null),l=c.exports},963:function(t,s,e){e.r(s),e.d(s,{default:function(){return u}});var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return this.$store.state.BuyCar.length>0?e("div",{staticClass:"BuyList"},[e("div",{staticClass:"top"},[e("p",[t._v(" 商品总价:"),e("span",[t._v("￥"+t._s(t.$store.state.allPrice))])]),e("div",[e("span",{on:{touchend:function(s){return t.$router.back(-1)}}},[t._v("取消购买")]),t._v(" "),e("span",{on:{touchend:t.submit}},[t._v("立即购买")])]),e("p",[t._v("已购商品")])]),e("div",t._l(t.$store.state.BuyCar,(function(t){return e("ListC",{key:t.id,attrs:{item:t}})})),1)]):t._e()},n=[],o=e(4564),r={components:{ListC:o.Z},created(){let t;clearTimeout(t),this.$store.state.BuyCar.length<=0&&(alert("未购买商品"),t=setTimeout((()=>{this.$router.push({path:"/"})}),1e3))},methods:{submit(){this.$http.post("/data/buy",{params:this.$store.state.BuyCar}).then((t=>{console.log(t)}),(t=>{console.log(t)}))}}},a=r,c=e(1001),l=(0,c.Z)(a,i,n,!1,null,"4c10ca6b",null),u=l.exports}}]);
//# sourceMappingURL=buy.9ec5f0d4.js.map