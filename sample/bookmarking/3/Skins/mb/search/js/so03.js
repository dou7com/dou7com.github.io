(function(){var e=qboot.cookie.get("guid")||qboot.cookie.get("__guid")||"",t=hao360.queryUrl(location.href,"ls")||"",n={},r="tiyan",i=function(e,t){setTimeout(function(){var t=+(new Date)+Math.random(),n="slog"+t,i=window[n]=new Image;i.src=e+"&refer="+r+"&_t="+t,i.onload=i.onerror=function(){window[n]=null}},t||0)};i.setReferTag=function(e){r=e},i.setLs=function(e){t=e},n.suggest=function(t,n){n=n||{};if(!n.inputKw)return!1;var r="";switch(t){case"directShow":r="show";break;case"directClk":r="directclk";break;case"commonClk":r="sugclk";break;case"nosuggestClk":r="noclk"}var s=["https://s.360.cn/wzdh/search_direct.html?type="+r+"&inputkw="+encodeURIComponent(n.inputKw)];n.subApp&&s.push("class="+n.subApp),n.directKw&&s.push("directkw="+encodeURIComponent(n.directKw)),n.suggestKw&&s.push("sugkw="+encodeURIComponent(n.suggestKw)),s.push("guid="+e),i(s.join("&"));if(t=="commonClk"){var o=n.eng=="so360"||n.eng=="somulti"?"360":n.eng,u="https://s.360.cn/sou/suggest.gif?guid="+e+"&pro=hao&pid=hao_home&brand="+o+"&input="+encodeURIComponent(n.inputKw)+"&click="+encodeURIComponent(n.suggestKw)+"&pos="+(+n.index+1);i(u)}},n.search=function(e,t){t=t||{};if(e=="query"){var n=search.get()||[],r=n[0],s=n[1],o=encodeURIComponent(t.query.replace(/password|pass|pwd/i,"--")||"");i("https://s.360.cn/wzdh/searcheng.html?tab="+r+"&eng="+s+"&type=query&kw="+o+"&guid="+qboot.cookie.get("sessionID")+"&mid="+(hao360.mid||"")),i("https://haostat.qihoo.com/haokw.gif?tab="+r+"&radio="+s+"&content="+o)}e=="toggle"&&i("https://s.360.cn/wzdh/searcheng.html?eng="+t.eng+"&type=toggle&guid="+qboot.cookie.get("sessionID")),e=="custom"&&i("https://s.360.cn/wzdh/searcheng.html?eng="+t.eng+"&type=custom&guid="+qboot.cookie.get("sessionID"))},n.channeldata=function(t,n){n=n||{},t=="click"&&i("https://s.360.cn/wzdh/stat.html?p=channeldata&action=click&cate="+(n.cate||"")+"&pm="+(n.p||"")+"&text="+encodeURIComponent(n.text||"")+"&link="+encodeURIComponent(n.link||"")+"&guid="+e),t=="pv"&&i("https://s.360.cn/wzdh/stat.html?p=channeldata&action=pv&pm="+(n.pm||"")+"&guid="+e)},n.reci=function(t,n){n=n||{},t=="show"&&i("https://s.360.cn/wzdh/stat.html?p=hotword&action=show&cate="+(n.cate||"")+"&guid="+e),t=="click"&&i("https://s.360.cn/wzdh/stat.html?p=hotword&action=click&cate="+(n.cate||"")+"&text="+encodeURIComponent(n.text||"")+"&link="+encodeURIComponent(n.link||"")+"&guid="+e)},n.iguess=function(n,r,s){r=r||{};if(n=="click"){var o="https://stats.guess.tf.360.cn/guess/clk.js?asin="+(r.asin||"")+"&mid="+e+"&sumid="+(hao360.mid||"")+"&channel="+(r.channel||"")+"&tagid="+(r.tagid||"")+"&source=favor";o+="&st="+r.st+"&dd="+r.dd+"&ud="+r.ud,t&&(o+="&ls="+t),i(o);if(s||s==undefined)i("https://s.360.cn/wzdh/guess_visit.html?type=iguessclk&version=v7&mid="+(hao360.mid||"")+"&guid="+e+"&text="+encodeURIComponent(r.text||"")+"&mtype="+(r.res||"")+"&siteid="+(r.siteid||0)+"&link="+encodeURIComponent(r.link||""),400),i("https://top.h.qhimg.com/guess.gif?asin="+(r.asin||"")+"&mid="+e+"&sumid="+(hao360.mid||"")+"&channel="+(r.channel||"")+"&tagid="+(r.tagid||"")+"&source=favor")}(n=="refresh"||n=="tap")&&i("https://s.360.cn/wzdh/guess_visit.html?type=iguess"+n+"&version=v7&guid="+e)},n.iguessShowed=function(e,n){var r="https://stats.guess.tf.360.cn/guess/vt",s="?asin="+e.join(";")+"&mid="+hao360.mid,o="https://top.h.qhimg.com/gas.gif";t&&(s+="&ls="+t),i(r+s),n&&i(o+s)},n.newIguessShowed=function(t,n){n=n||-1;var r="https://s.360.cn/wzdh/newiguesslv.html";i(r+"?p="+encodeURIComponent(t.join(","))+"&v="+n+"&dhid="+hao360.mid+"&guid="+e)},n.newIguessClk=function(t,n){n=n||-1;var r="https://s.360.cn/wzdh/newiguessclk.html";i(r+"?p="+encodeURIComponent(t)+"&v="+n+"&dhid="+hao360.mid+"&guid="+e)},n.mysiteShow=function(t){var n="https://s.360.cn/wzdh/mysite.html",r="?p=mysite&t=show&sites="+t.join(";")+"&guid="+e;i(n+r)},n.mysiteClk=function(t){var n="https://s.360.cn/wzdh/mysite.html",r="?p=mysite&t=click&site="+t+"&guid="+e;i(n+r)},n.netcafe=function(e,t,n){var r="https://s.360.cn/wzdh/netcafe.html";e?e="-"+e:e="";var s="?p=netcafe"+e+"&t="+t+"&data="+(n||"")+"&guid="+qboot.cookie.get("sessionID");i(r+s)},n.sidebar=function(e,t){var n="https://s.360.cn/wzdh/sidebar.html",r="?p=sidebar&t="+e+"&data="+encodeURIComponent(t||"")+"&guid="+qboot.cookie.get("sessionID");i(n+r)},n.behavior=function(t,n){i("https://s.360.cn/wzdh/behavior.html?ns="+t+"&act="+encodeURIComponent(n)+"&guid="+e)},window.LogHub=n,window.logSender=window.LogSender=i})();(function(){var e="https://top.h.qhimg.com/",t={"hao.h.qhimg.com":function(e){try{var t=e.match(/\/(\w+)\.php\S+(?:keys|m\[\])=(\w+)/i);if(t)return t[1]+":"+t[2]}catch(n){}},"d.hao.h.qhimg.com":function(e){try{var t=e.match(/\/(\w+)\.php\S+(?:keys|m\[\])=(\w+)/i);if(t)return t[1]+":"+t[2]}catch(n){}},"guess.h.qhimg.com":function(e){return"guess"},"cdn.weather.hao.360.cn":function(e){try{var t=e.match(/\/(\w+)\.php\S+(?:param|grade)=(\w+)/i);if(t)return t[1]+":"+t[2]}catch(n){}}},n=document.createElement("a"),r=ObjectH.values(hao360.area.get()).join(),i={report:function(t,n){var i,s=qboot.mix,o=qboot.encodeURIJson,u=s({cc:r},n,!0),a={hao360:1,hao360i:8};if(a[t])u=s({appid:a[t]},u,!0),i=e+"stat.gif",f=i+"?"+o(u),logSender(f);else{i=e+(t||"unknow")+".gif";var f=i+"?"+o(u);logSender(f)}},reportJsError:function(e,t,n){i.report("jserror",{msg:e,jsurl:t,line:n,url:location.href})}};window.HaoMonit=i})();var Page=function(){function r(e,n,r){r=t({tabs:".tabview-tabs>*",conts:".tabview-cont",links:".tabview-cont a",event:"click",tabsOnClass:"on",contsOnClass:"on",playTime:25e3,delayTime:0},r,!0);var i=-1,s=[],o=0,u=null,a=function(t,u){if(i===t)return;clearTimeout(o),t=t!==undefined?t:(i+1)%s.length,QW.TweetH.tweet(document,"tabview-change",{channelName:W(r.conts,e).item(t).parentNode()[0].id.split("-")[1],prevTabIndex:i,currentTabIndex:t});var f=W(r.conts,e).item(t);f?(W(r.tabs,e).removeClass(r.tabsOnClass),W(r.tabs,e).item(t).addClass(r.tabsOnClass),W(r.conts,e).removeClass(r.contsOnClass),f.addClass(r.contsOnClass)):u&&window.open(W(r.tabs,e).item(t).query("a").attr("href")),i=t,n&&(o=setTimeout(a,r.playTime))};a(0),W(r.tabs,e).forEach(function(t,n){var t=W(t),i=W(r.conts,e).item(n),o=[];s[n]={tab:t,view:i},t.on(r.event,function(e){W(this).hasClass(r.tabsOnClass)||(e.preventDefault(),a(n,!0),clearTimeout(u))})}),n&&(u=setTimeout(function(){a(0)},r.delayTime))}function i(){W(".tabview-tabs>li").hover(function(e){W(this).addClass("hover")},function(){W(this).removeClass("hover")})}function s(){}function f(){W(document).tweet("page-size-changed",{spaceWidth:a()})}var e={},t=ObjectH.mix,n=function(){var e="placeholder"in document.createElement("input"),t="placeholder";if(!e){var n=function(e){var n=W(e),r=n.attr("placeholder");n.val()==""&&r&&!e.__focused&&n.val(r).addClass(t)};W("input[placeholder]").attr("autocomplete","off").focus(function(){var e=W(this);this.__focused=!0,e.val()===e.attr("placeholder")&&e.hasClass(t)&&e.val("").removeClass(t).select()}).blur(function(){this.__focused=!1,n(this)}),setTimeout(function(){W("input[placeholder]").forEach(function(e){W(e).val()===W(e).attr("placeholder")&&W(e).val(""),n(e)})},0),W("input[placeholder]").parentNode("form").submit(function(){W("input[placeholder]",W(this)).forEach(function(e){var r=W(e);r.val()===r.attr("placeholder")&&r.hasClass(t)&&(r.val("").removeClass(t),setTimeout(function(){n(e)},150))})})}var r=function(e){if(!(this instanceof r))return new r(e);this.elem=null,QW.DomU.isElement(e)&&(this.elem=e)};r.prototype.getVal=function(){return this.elem?!e&&W(this.elem).hasClass(t)?"":this.elem.value:""},r.prototype.setVal=function(r){this.elem&&(r=r||"",r==""&&!e?(this.elem.value="",this.elem!==this.elem.ownerDocument.activeElement&&n&&n(this.elem)):W(this.elem).val(r).removeClass(t))},window.placeholderHook=r},o=W("body"),u=W("#doc-main").getSize().width,a=function(){return(o.getSize().width-u)/2};return e.spaceWidth=a,e.init=function(){n(),i();var e={tabview:r};QW.NodeW.pluginHelper(e,"operator"),W(window).on("resize",f).on("load",f),s()},e}();Page.init();(function(){var e=QW.ObjectH.mix,t=QW.CustEvent,n=QW.DomU.g,r=QW.StringH.trim,i=t.createEvents({},[]),s={"*":[]};i.on("*",function(t){var n=t.type,r=t.sender,i=(s[n]||[]).concat(s["*"]);for(var o=0,u=i.length;o<u;o++){var a=i[o];e(t,{target:a.receiver,receiver:a.receiver,type:t.trueType},!0),a.callback.call(a.receiver,t)}});var o={tweet:function(e,t,n,s){var o=t.split(",");for(var u=0;u<o.length;u++){t=r(o[u]);var a={data:n,sender:e,trueType:t};i.createEvents([t]),i.fire(t,a)}QW.Async&&s&&QW.Async.wait("twitter."+t,function(){i.fire(t,a)})},receive:function(e,t,n){typeof t=="function"&&(n=t,t="@"+e.id);if(typeof t!="string")for(var r in t)o.receive(e,r,t[r]);var i=s[t]=s[t]||[];i.push({receiver:e,callback:n}),QW.Async&&QW.Async.signal("twitter."+t,!0)},unreceive:function(e,t){var n=s[t];for(var r=0;r<n.length;r++)n[r].receiver==e&&n.splice(r,1)}};QW.provide("TweetH",o)})();(function(){var e=QW.TweetH;QW.NodeW.pluginHelper(e,"operator")})();window.qSuggest=window.qSuggest||{},function(){var e=function(){var e=function(e){return};return function(){e([].slice.call(arguments))}}(),t=QW.CustEvent.createEvents,n=QW.ObjectH.mix,r=document.body,i=QW.DomU.isElement,s=function(e){return this._config={recAllTimeout:150},n(this._config,e,!0),this._handler={},this._recAllStarted=!1,this._recAllTimer=null,this._recData={},this._init()};s.prototype={},s.prototype._init=function(){var e=this;return t(e,["receiveAll","receiveOne"]),!0},s.prototype.setOne=function(e,t,n){var r=this;t=t.toLowerCase(),r._recData[t]||(r._recData[t]={}),r._recData[t][e]=n},s.prototype.setAll=function(e,t){e=e.toLowerCase(),this._recData[e]=t},s.prototype.getAll=function(e){var t=this;return e=e.toLowerCase(),this._requestAll(e)},s.prototype.getOne=function(e,t){var n=this;return t=t.toLowerCase(),n._recData[t]&&n._recData[t][e]?(n.fire("receiveOne",{name:e,query:t,data:n._recData[t][e]}),!0):this._requestOne(e,t)},s.prototype.bindGroupHandler=function(e,t){this._handler[e]=t},s.prototype._requestAll=function(e){var t=this;e=e.toLowerCase(),t._recAllStarted&&(t._recAllStarted=!1,clearTimeout(t._recAllTimer)),t._recData[e]||(t._recData[e]={});var n;for(n in t._handler)t._handler[n].request&&function(n){t._recData[e]&&t._recData[e][n]?(t._recAllStarted||(t._recAllStarted=!0,t._recAllTimer=setTimeout(function(){t.fire("receiveAll",{query:e,data:t._recData[e]})},t._config.recAllTimeout)),t._receiveOne(n,t._recData[e][n])):t._handler[n].request(e,function(r){t._recAllStarted||(t._recAllStarted=!0,t._recAllTimer=setTimeout(function(){t.fire("receiveAll",{query:e,data:t._recData[e]})},t._config.recAllTimeout)),t._receiveOne(n,r)})}(n);return!0},s.prototype._requestOne=function(e,t){var n=this;return t=t.toLowerCase(),n._recData[t]||(n._recData[t]={}),n._handler[e]&&n._handler[e].request&&function(e){n._handler[e].request(t,function(t){n._receiveOne(e,t)})}(e),!0},s.prototype._receiveOne=function(e,t){var n=this,r;return n._handler[e]&&n._handler[e].receive&&(r=n._handler[e].receive(t),r&&r.query&&(r.query=r.query.toLowerCase(),n._recData[r.query]||(n._recData[r.query]={})),r&&r.query&&r.data&&(n._recData[r.query][e]=r.data,n.fire("receiveOne",{name:e,query:r.query,data:r.data}))),!0};var o=function(e){e.style.visibility=""},u=function(e){e.style.visibility="hidden"},a={DOWN:40,UP:38,ESC:27,ENTER:13,BACKSPACE:8},f=[40,39,38,37,27,13,18,17,16],l=function(e,t){return this._config={uiReferElem:null,uiContainerElem:null,posAdjust:{}},n(this._config,t,!0),this.container=null,this.searchForm=null,this.isWatching=!1,this._groupHandlerNames=[],this._groupHandler={},this._groupTotal={},this._focusedItemIndex={},this._focusedGroupIndex=-1,this.textInput=null,this.query="",this.lastInputVal="",this._init(e)};l.prototype={config:function(){var e=[].slice.call(arguments);if(e.length===1)return this._config[e[0]]||null;if(e.length===2)return this._config[e[0]]=e[1],e[1]}},l.prototype._init=function(n){t(this);var r=this,s=r.setupTextInput(n);return s?r.config("uiReferElem")&&!i(r.config("uiReferElem"))?(e.error("uiReferElem is not exist"),!1):(r.config("uiReferElem")||r.config("uiReferElem",n),r.config("uiContainerElem")&&!i(r.config("uiContainerElem"))?(e.error("uiContainerElem is not exist"),!1):r.config("uiWrapElem")&&!i(r.config("uiWrapElem"))?(e.error("uiWrapElem is not exist"),!1):(r.config("uiWrapElem")||r.config("uiWrapElem",r.config("uiContainerElem")),r.searchForm=W(n.form),r.wrap=W(r.config("uiWrapElem")),r.container=W(r.config("uiContainerElem")),this._initSuggest())):(e.error("setup textInput["+n+"] error"),!1)},l.prototype.setupTextInput=function(t){return!t||!i(t)?(e.error("textInput["+t+"] is not exist"),!1):(this.textInput=W(t),this.query="",this.lastInputVal="",this.container&&this.fillContent(),W(t).attr("qsugInited")==1?!0:this._initTextInput()&&this.textInput.attr("qsugInited",1))},l.prototype.focusTextInput=function(){var e=this;setTimeout(function(){e.textInput.focus(),e.fire("focus")},0)},l.prototype.setTextInputVal=function(e){this.textInput.val(e||"")},l.prototype.getTextInputVal=function(){return this.textInput.val()||""},l.prototype.resetTextInput=function(){this.query="",this.lastInputVal="",this.container&&this.fillContent()},l.prototype._initTextInput=function(){var t=this,n,r=function(){var e=t.getTextInputVal(),n=e.trim();if(e===t.lastInputVal)return;t.lastInputVal=e,t.query=n,n||(t.fillContent(""),t.hide()),t.fire("change",{query:t.query})},i=function(){if(t.isWatching)return;n=setTimeout(function(){r(),n=setTimeout(arguments.callee,200)},100),t.isWatching=!0},s=function(){n&&clearTimeout(n),t.isWatching=!1};return t.textInput.attr("autocomplete","off").on("blur",function(){t.fire("stopWatch"),t.fire("blur")}).on("paste",function(e){t.fire("startWatch")}).on("keydown",function(e){t.keyEventHandler(e)}),t.on("startWatch",i),t.on("stopWatch",s),t.on("restoreQuery",function(e){t.setTextInputVal(t.query)}),e("initTextInput finished"),!0},l.prototype.keyEventHandler=function(){var e=function(e){return f.indexOf(e)===-1};return function(t){var n=this,r="",i={trigger:"keyboard"};switch(t.keyCode){case a.UP:r="up",n.isVisible()&&n.previous(),t.preventDefault&&t.preventDefault(),n.fire("stopWatch");break;case a.DOWN:r="down",n.isVisible()?n.next():n.displayContainer(),t.preventDefault&&t.preventDefault(),n.fire("stopWatch");break;case a.ESC:r="esc",n.hide(),n.fire("stopWatch");break;case a.BACKSPACE:r="backspace",n.fire("startWatch");break;case a.ENTER:n.isVisible()&&(r="itemSelect",i.group=n.getFocusedGroup(),i.index=n._focusedItemIndex[i.group]),n.fire("stopWatch");break;default:e(t.keyCode)&&n.fire("startWatch")}r!=""&&n.fire(r,i)}}(),l.prototype._initSuggest=function(){var t=this;return t.fillContent(),t.on("enter",function(n){t.fire("stopWatch");if(n.trigger==="mouse"){var r=t.searchForm[0],i=!0,s=window.document;if(!r)return;if(s.createEvent){var o=s.createEvent("MouseEvents");o.initEvent("submit",!0,!0),i=r.dispatchEvent(o)}else s.createEventObject&&(i=r.fireEvent("onsubmit"));i&&r.submit()}e("enter with:"+t.getTextInputVal())}),t.on("itemFocus",function(){var e="";return function(n){if(n.group!=e){var r=t._groupHandlerNames;for(var i=r.length-1;i>=0;i--)r[i]!=n.group&&t.restoreGroup(r[i]);e=n.group}}}()),W(window).on("resize",function(){setTimeout(function(){t.setContainerRegion()})}),t.container.on("mousedown",function(e){var n=t.textInput[0];n.onbeforedeactivate=function(e){return window.event.returnValue=!1,n.onbeforedeactivate=null,!1}}),e("initEvent finished"),!0},l.prototype.setFocusedGroup=function(e){this._focusedGroupIndex=this._groupHandlerNames.indexOf(e||"")},l.prototype.getFocusedGroup=function(){return this._groupHandlerNames[this._focusedGroupIndex]||null},l.prototype.bindGroupHandler=function(e,t){var n=this;n._groupHandlerNames.push(e),n._groupHandler[e]=t,n._focusedItemIndex[e]=-1,t.init&&t.init()},l.prototype.restoreGroup=function(e){var t=this;t.fire("itemBlur",{group:e,index:t._focusedItemIndex[e]}),t._focusedItemIndex[e]=-1,t._groupHandlerNames[t._focusedGroupIndex]&&(t._focusedGroupIndex=-1)},l.prototype.initGroupMouseBehavior=function(e,t){var n=this;n.container.delegate(t,"mouseover",function(r){var i=W(this).attr("data-index"),s=i===null?W(t,n.container).core.indexOf(this):i,o=n._groupHandlerNames;for(var u=o.length-1;u>=0;u--)n.fire("itemBlur",{group:o[u],index:n._focusedItemIndex[o[u]],trigger:"mouse"});n.fire("itemFocus",{group:e,index:s,trigger:"mouse"}),n.setFocusedGroup(e,s),n._focusedItemIndex[e]=s}),n.container.delegate(t,"click",function(r){var i=W(this).attr("data-index"),s=i===null?W(t,n.container).core.indexOf(this):i;n.fire("itemSelect",{group:e,index:s,trigger:"mouse"})})},l.prototype.render=function(t){var n=this,r,i,s=[],o,u;t=t||{};for(o=0,u=n._groupHandlerNames.length;o<u;o++)r=n._groupHandlerNames[o],i=n._groupHandler[r],i&&i.render&&(i.render.setup&&(i.render.setup(),n.setGroupTotal(r,0),n.restoreGroup(r),e("Render setup ["+r+"]")),i.render.build&&(s.push(i.render.build(t[r])),e("Render buildui ["+r+"]:",t[r])));n.fillContent(s.join(""));for(o=0,u=n._groupHandlerNames.length;o<u;o++)r=n._groupHandlerNames[o],i=n._groupHandler[r],i&&i.render&&i.render.teardown&&(i.render.teardown(),e("Render teardown ["+r+"]"))},l.prototype.setGroupTotal=function(e,t){this._groupTotal[e]=t},l.prototype.groupPrevious=function(e){var t=this,n=t._groupTotal[e],r=t._focusedItemIndex[e],i=-1;return n>0&&(r<=-1?r=n-1:r>=0&&(i=r,r--)),t.fire("itemBlur",{group:e,index:i,trigger:"keyboard"}),t.fire("itemFocus",{group:e,index:r,trigger:"keyboard"}),t._focusedItemIndex[e]=r,r},l.prototype.groupNext=function(e){var t=this,n=t._groupTotal[e],r=t._focusedItemIndex[e],i=-1;return n>0&&(r<=-1?r=0:r<n&&(i=r,r++),r>=n&&(r=-1)),t.fire("itemBlur",{group:e,index:i,trigger:"keyboard"}),t.fire("itemFocus",{group:e,index:r,trigger:"keyboard"}),t._focusedItemIndex[e]=r,r},l.prototype.displayContainer=function(){var e=this;e.container.html().trim()?e.show():e.hide()},l.prototype.fillContent=function(t){var n=this;n.container.html(t||""),n.displayContainer(),n.isVisible(),e("fillContent :"+t)},l.prototype.setContainerRegion=function(){var e=this,t=W(e.config("uiReferElem")).getRect(),n=e.config("posAdjust"),r=e.wrap.attr("width")?parseInt(e.wrap.attr("width"),10):t.width;e.wrap.css({position:"absolute",top:(n.top?n.top+t.bottom:t.bottom)+"px",left:(n.left?n.left+t.left:t.left)+"px",width:(n.width?n.width+r:r)+"px","z-index":n["z-index"]?n["z-index"]:99},1)},l.prototype.isVisible=function(){return this.wrap.css("visibility")!="hidden"},l.prototype.show=function(){var e=this;e.fire("show");if(e.isVisible())return;e.setContainerRegion(),o(e.wrap[0])},l.prototype.hide=function(){var e=this;e.fire("hide");if(!e.isVisible())return;u(e.wrap[0])},l.prototype.previous=function(){var t=this,n=t._focusedGroupIndex,r=t._groupHandlerNames[n],i=t._groupHandlerNames.length,s=-1;n<=-1&&(n=i-1,r=t._groupHandlerNames[n]);while(s===-1&&n>-1)t._groupHandler[r]&&(s=t.groupPrevious(r)),s===-1&&(n>0?(n--,r=t._groupHandlerNames[n]):(n=-1,r=""),e("changeGroup",n));n===-1&&s===-1&&t.fire("restoreQuery"),t._focusedGroupIndex=n,e(r+" previous:"+s)},l.prototype.next=function(){var t=this,n=t._focusedGroupIndex,r=t._groupHandlerNames[n],i=t._groupHandlerNames.length,s=-1;n>=i&&(n=-1),n<=-1&&(n=0,r=t._groupHandlerNames[n]);while(s===-1&&n<i)t._groupHandler[r]&&(s=t.groupNext(r)),s===-1&&(n<i?(n++,r=t._groupHandlerNames[n]):(n=-1,r=""),e("changeGroup",n));n===i&&s===-1&&t.fire("restoreQuery"),t._focusedGroupIndex=n,e(r+" next:"+s)};var c=function(e,t){var r=this;if(!(r instanceof c))return new c(e,t);r._config={ui:null,data:null},n(r._config,t,!0),r.query="",r.renderQuery="",r.ui=null,r.data=null,r._init(e,t)};c.prototype={config:function(){var e=[].slice.call(arguments);if(e.length===1)return this._config[e[0]]||null;if(e.length===2)return this._config[e[0]]=e[1],e[1]}},c.prototype._init=function(n,r){var i=this;return i.isWatching=!1,i.ui=i.config("ui")||i.config("ui",new l(n,r)),i.ui?(i.data=i.config("data")||i.config("data",new s(r)),i.data?(t(i),i._initEvent()):(e.error("init data error"),!1)):(e.error("init ui error"),!1)},c.prototype._initEvent=function(){var t=this,n=t.data,r=t.ui;return r.on("change",function(r){var i=t.query=r.query.toLowerCase();i&&(n.getAll(i),e("input query:"+i))}),n.on("receiveAll",function(e){e.query.toLowerCase()===t.query&&(t.renderQuery=e.query.toLowerCase(),r.render(e.data))}),!0},window.qSuggest=c,window.qSuggest.log=e,window.qSuggest.log.error=e}();(function(){function e(e,t){function i(e){return typeof e=="string"&&!/^</.test(e)?n.query(e):W(e)}typeof e=="string"&&(e={container:e});var n=W(e.container),r=e.requires;if(!n[0])return;r?qboot.load.apply(null,r.concat(function(){t(i,n)})):t(i,n)}window.M=e})();(function(){var e=QW.ObjectH.mix,t=QW.ArrayH.forEach,n=QW.CustEvent,r=QW.NodeH,i=r.query,s=r.g,o=QW.EventTargetH,u=o.delegate,a=QW.Anim,f=o.on,l=QW.Jss,c=QW.JssTargetH,h=c.getJss,p=c.setJss,d=function(){this.node=null,this._Anim=null,this.navItemSelector=".PageNavigator",this.easing=Easing.easeBothStrong,this.duration=0,this.threshold=0,this.visible=!0,this.enableAutoSelect=!1,this.navigators=[],this.initialize.apply(this,arguments)};d.EVENTS=["scrolling","afterActiveNavigatorChange","afterVisibleChange"],e(d.prototype,function(){var i=navigator.userAgent.indexOf("MSIE 6.0")!==-1,o=null;return{initialize:function(t){n.createEvents(this,d.EVENTS),e(this,t||{},!0);if(!this.node){console.log&&console.log("\u521d\u59cb\u5316\u5931\u8d25:\u6ca1\u6709\u6307\u5b9a\u5bfc\u822a\u6240\u5728\u8282\u70b9");return}this._parseHtmlToNavigators(this.node,this.navItemSelector),this.setNavigatorsTop(this.navigators),this.bindUI()},bindUI:function(){var e=this;u(this.node,this.navItemSelector,"click",function(t){e._clickNavigatorHandler(t)}),f(window,"scroll",function(){o||(o=setTimeout(function(){e._scrollHandler(),o=null},200))}),this.on("afterActiveNavigatorChange",function(e){e.prevVal&&r.removeClass(e.prevVal.srcNode,"selected"),e.newVal.srcNode&&r.addClass(e.newVal.srcNode,"selected")}),this.on("afterVisibleChange",function(e){})},_scrollHandler:function(){var e=this.threshold;e>0?this.visible=Dom.getDocRect().scrollY>e:this.visible=!0,this.fire("afterVisibleChange",{newVal:this.visible,currentScrollY:Dom.getDocRect().scrollY}),this.fire("currentPositionChange",{scrollY:Dom.getDocRect().scrollY}),this.enableAutoSelect&&this._checkRegion(),i&&(this.node[0].className=this.node[0].className)},_checkRegion:function(){var e=this.navigators,t={},n=[],i=null;for(var s=0,o=e.length;s<o;s++){var u=e[s].scrollTo.to;if(typeof u=="string"){u=W(u);var a=r.getRect(u);p(u[0],"region",a);var f=this.viewportRect();DomU.rectContains(f,a)&&(e[s].insertsectRegion=DomU.rectIntersect(h(u[0],"region"),f),n.push(e[s]))}}if(n.length>0){n.sort(function(e,t){return t.insertsectRegion.height-e.insertsectRegion.height}),i=n[0];if(this.clickedNavigator!==null)for(s=0,o=n.length;s<o;s++)n[s]===this.clickedNavigator&&(i=this.clickedNavigator);this.fire("afterActiveNavigatorChange",{prevVal:this.activeNavigator,newVal:i}),this.activeNavigator=i}},viewportRect:function(){var e=DomU.getDocRect();return{left:e.scrollX,right:e.width+e.scrollX,top:e.scrollY,bottom:e.height+e.scrollY,width:e.width,height:e.height}},_clickNavigatorHandler:function(e){var t=this;e.preventDefault();var n=e.target;n.tagName.toLowerCase()!=="a"&&(n=r.ancestorNode(n,"a")),this.clickedNavigator=h(n,"ext"),setTimeout(function(){t.clickedNavigator=null},this.duration+200),this.scrollTo(h(n,"ext"))},_parseHtmlToNavigators:function(e,t){var n=[];e.query(t).forEach(function(e){e=s(e);var t={},r=/#([\d\D]*)/gi.exec(e.getAttribute("href")),i=r[1].length>0&&r[0]||null,o=h(e,"threshold")||0,u=i||h(e,"to")||0;t={srcNode:e,scrollTo:{threshold:o,to:u}},n.push(t),p(e,"ext",t)}),this.navigators=n},setNavigatorsTop:function(e){t(e,function(e){e.top=this._getTop(e.scrollTo.to)+parseInt(e.scrollTo.threshold,10)},this)},_getTop:function(e){if(typeof e=="number")return e;if(typeof e=="string")return r.getXY(QW.DomU.query(e)[0])[1]},getScrollDoc:function(){var e=document.documentElement,t=document.documentElement.scrollTop++;return t===document.documentElement.scrollTop&&(document.documentElement.scrollTop--,t==document.documentElement["scrollTop"]&&(e=document.body)),e},scrollTo:function(e){var t=this;if(this._Anim!==null&&this._Anim.isPlaying()){this._Anim.pause();return}this.fire("scrolling",{scrolling:!0,data:e});var n=this._getTop(e.scrollTo.to)+e.scrollTo.threshold;e.top=n,this._Anim=new QW.ScrollAnim(this.getScrollDoc(),{scrollTop:{to:n}},this.duration,this.easing),this._Anim.onend=function(){t.fire("scrolling",{scrolling:!1,data:e})},this._Anim.play()}}}()),QW.provide("PageSidebar",d)})();(function(){function i(e,t){this.opts={parent:document.body,expires:0,count:Infinity,tipName:"mysite"};if("object"==typeof e){var t=e;this.el=t&&t.el}else this.el=W(e);n(this.opts,t,1),this.cookieName=t.tipName+"_tips",this.flag=!0}var e=1,t=0,n=ObjectH.mix,r=qboot.cookie;i.prototype={show:function(e){var t=this.opts.lastDate,n=+(new Date);if(t&&n-new Date(t))return;if(this.flag){var r=this.getTipInfo(),i=this,s=!0;r?r[0]?this.insert(function(){var e=[--r[0],1].join(",");i.setCookie(e)}):s=!1:this.opts.count?this.insert(function(){var e=[--i.opts.count,1].join(",");i.setCookie(e)}):s=!1,s&&(e&&e(this),this.el&&this.el.show().delegate(".close","click",function(e){e.preventDefault(),i.hide()}))}},hide:function(e){this.el.hide(),this.setCookie("0,1"),e&&e()},setCookie:function(e){r.set(this.cookieName,e,{expires:864e5*this.opts.expires})},getTipInfo:function(){var e=r.get(this.cookieName);if(e){var t=e.split(",");return t.forEach(function(e,t,n){n[t]=e==Infinity?Infinity:parseInt(e,10)}),t}return null},insert:function(e){this.flag=!1,W(this.opts.parent).insertAdjacentElement("beforeend",this.el),this.opts.style&&typeof this.opts.style=="object"&&this.el.css(this.opts.style),e&&e()}},window.Tips=i})();var ZeroClipboard={version:"1.0.7",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(e){return typeof e=="string"&&(e=document.getElementById(e)),e.addClass||(e.hide=function(){this.style.display="none"},e.show=function(){this.style.display=""},e.addClass=function(e){this.removeClass(e),this.className+=" "+e},e.removeClass=function(e){var t=this.className.split(/\s+/),n=-1;for(var r=0;r<t.length;r++)t[r]==e&&(n=r,r=t.length);return n>-1&&(t.splice(n,1),this.className=t.join(" ")),this},e.hasClass=function(e){return!!this.className.match(new RegExp("\\s*"+e+"\\s*"))}),e},setMoviePath:function(e){this.moviePath=e},dispatch:function(e,t,n){var r=this.clients[e];r&&r.receiveEvent(t,n)},register:function(e,t){this.clients[e]=t},getDOMObjectPosition:function(e,t){var n={left:0,top:0,width:e.width?e.width:e.offsetWidth,height:e.height?e.height:e.offsetHeight};while(e&&e!=t)n.left+=e.offsetLeft,n.top+=e.offsetTop,e=e.offsetParent;return n},Client:function(e){this.handlers={},this.id=ZeroClipboard.nextId++,this.movieId="ZeroClipboardMovie_"+this.id,ZeroClipboard.register(this.id,this),e&&this.glue(e)}};ZeroClipboard.Client.prototype={id:0,ready:!1,movie:null,clipText:"",handCursorEnabled:!0,cssEffects:!0,handlers:null,glue:function(e,t,n){this.domElement=ZeroClipboard.$(e);var r=99;this.domElement.style.zIndex&&(r=parseInt(this.domElement.style.zIndex,10)+1),typeof t=="string"?t=ZeroClipboard.$(t):typeof t=="undefined"&&(t=document.getElementsByTagName("body")[0]);var i=ZeroClipboard.getDOMObjectPosition(this.domElement,t);this.div=document.createElement("div");var s=this.div.style;s.position="absolute",s.left=""+i.left+"px",s.top=""+i.top+"px",s.width=""+i.width+"px",s.height=""+i.height+"px",s.zIndex=r;if(typeof n=="object")for(addedStyle in n)s[addedStyle]=n[addedStyle];t.appendChild(this.div),this.div.innerHTML=this.getHTML(i.width,i.height)},getHTML:function(e,t){var n="",r="id="+this.id+"&width="+e+"&height="+t;if(navigator.userAgent.match(/MSIE/)){var i=location.href.match(/^httpss/i)?"httpss://":"https://";n+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+i+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+e+'" height="'+t+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+"?vyp="+Math.random()+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+r+'"/><param name="wmode" value="transparent"/></object>'}else n+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+e+'" height="'+t+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" flashvars="'+r+'" wmode="transparent" />';return n},hide:function(){this.div&&(this.div.style.left="-2000px")},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide(),this.div.innerHTML="";var e=document.getElementsByTagName("body")[0];try{e.removeChild(this.div)}catch(t){}this.domElement=null,this.div=null}},reposition:function(e){e&&(this.domElement=ZeroClipboard.$(e),this.domElement||this.hide());if(this.domElement&&this.div){var t=ZeroClipboard.getDOMObjectPosition(this.domElement),n=this.div.style;n.left=""+t.left+"px",n.top=""+t.top+"px"}},setText:function(e){this.clipText=e,this.ready&&this.movie.setText(e)},addEventListener:function(e,t){e=e.toString().toLowerCase().replace(/^on/,""),this.handlers[e]||(this.handlers[e]=[]),this.handlers[e].push(t)},setHandCursor:function(e){this.handCursorEnabled=e,this.ready&&this.movie.setHandCursor(e)},setCSSEffects:function(e){this.cssEffects=!!e},receiveEvent:function(e,t){e=e.toString().toLowerCase().replace(/^on/,"");switch(e){case"load":this.movie=document.getElementById(this.movieId);if(!this.movie){var n=this;setTimeout(function(){n.receiveEvent("load",null)},1);return}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){var n=this;setTimeout(function(){n.receiveEvent("load",null)},100),this.ready=!0;return}this.ready=!0,this.movie.setText(this.clipText),this.movie.setHandCursor(this.handCursorEnabled);break;case"mouseover":this.domElement&&this.cssEffects&&(this.domElement.addClass("hover"),this.recoverActive&&this.domElement.addClass("active"));break;case"mouseout":this.domElement&&this.cssEffects&&(this.recoverActive=!1,this.domElement.hasClass("active")&&(this.domElement.removeClass("active"),this.recoverActive=!0),this.domElement.removeClass("hover"));break;case"mousedown":this.domElement&&this.cssEffects&&this.domElement.addClass("active");break;case"mouseup":this.domElement&&this.cssEffects&&(this.domElement.removeClass("active"),this.recoverActive=!1)}if(this.handlers[e])for(var r=0,i=this.handlers[e].length;r<i;r++){var s=this.handlers[e][r];typeof s=="function"?s(this,t):typeof s=="object"&&s.length==2?s[0][s[1]](this,t):typeof s=="string"&&window[s](this,t)}}},function(){function t(e,t){ZeroClipboard.setMoviePath("https://s1.qhimg.com/static/dd0f0a62aea2c1cb.swf");var n=new ZeroClipboard.Client;n.setHandCursor(!0),n.setCSSEffects(!0);var r=this;n.addEventListener("mouseup",function(e){e.setText(r.data)}),e&&n.glue(e,t),this.clip=n}var e=function(){var e=!1;return function(){if(e===!1){var t=navigator;if(t.plugins&&t.mimeTypes.length){var n=t.plugins["Shockwave Flash"];n&&n.description&&(e=n.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0")}else if(window.ActiveXObject&&!window.opera)for(var r=12;r>=2;r--)try{var i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+r);if(i){var s=i.GetVariable("$version");e=s.replace(/WIN/g,"").replace(/,/g,".")}}catch(o){}}return e}}();t.prototype.on=function(e,t){this.clip.addEventListener(e,t)},t.prototype.glue=function(e,t){this.clip.glue(e,t)},t.prototype.copy=function(e){this.data=e},t.canUse=e()&&parseInt(e())>=10,window.ZClipboard=t}();