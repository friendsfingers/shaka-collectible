(window.webpackJsonp=window.webpackJsonp||[]).push([[5,7],{136:function(t,e,o){"use strict";o.r(e);var n={components:{ListToken:o(67).default}},s=o(4),i=Object(s.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",[o("b-row",[o("b-col",{staticClass:"p-2"},[o("b-jumbotron",{staticClass:"mt-4",attrs:{"bg-variant":"light"}},[o("template",{slot:"lead"},[o("b",[t._v("Shaka Collectible Tokens")]),t._v(" represent a Digital Collectible issued by "),o("b",[t._v("FriendsFingers")]),t._v(",\n                    the Smart Contracts based Crowdfunding platform.\n                ")]),t._v(" "),o("hr",{staticClass:"my-4"}),t._v(" "),o("p",[t._v("Each Shaka Collectible is an ERC721 Token born by a Smart Contract living on the Ethereum Blockchain... 🤔")]),t._v(" "),o("p",[t._v("Want to learn more about Collectibles?\n                    Read our "),o("b-link",{attrs:{target:"_blank",href:"https://medium.com/friendsfingers/wtf-are-collectible-or-non-fungible-tokens-54b36eda2af"}},[t._v("blog post")]),t._v("\n                    or explore the "),o("b-link",{attrs:{target:"_blank",href:"https://github.com/friendsfingers/shaka-collectible"}},[t._v("Source Code")]),t._v(".")],1)],2)],1)],1),t._v(" "),o("list-token")],1)},[],!1,null,null,null);i.options.__file="Home.vue";e.default=i.exports},67:function(t,e,o){"use strict";o.r(e);o(127),o(128);var n=o(129),s={components:{ShakaCollectible:o(26).default},mixins:[n.a],data:function(){return{progressiveId:0,tokenList:[]}},methods:{web3Ready:function(){var t=this;this.instances.token.progressiveId(function(e,o){t.progressiveId=o.valueOf(),t.progressiveId>0&&t.getToken(1)})},getToken:function(t){var e=this;this.instances.token.getToken(t,function(o,n){o?console.log(o):e.formatStructure(t,n)})},formatStructure:function(t,e){var o={};o.id=t,o.beneficiary=e[0],"0x0000000000000000000000000000000000000000"===o.beneficiary.toString()?console.log("Token ".concat(t," not found!")):(o.mainColor="#"+this.web3.toAscii(e[1]),o.backgroundColor="#"+this.web3.toAscii(e[2]),o.borderColor="#"+this.web3.toAscii(e[3])),this.tokenList.push(o),this.tokenList.length<this.progressiveId&&this.getToken(++t)}}},i=o(4),r=Object(i.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",this._l(this.tokenList,function(t){return e("b-col",{key:t.id,staticClass:"p-2",attrs:{md:"2",sm:"4"}},[e("b-link",{attrs:{to:{path:"view.html",query:{id:t.id}}}},[e("shaka-collectible",{attrs:{"main-color":t.mainColor,"background-color":t.backgroundColor,"border-color":t.borderColor,message:t.message,"show-message":!1}})],1)],1)}))},[],!1,null,null,null);r.options.__file="ListToken.vue";e.default=r.exports}}]);