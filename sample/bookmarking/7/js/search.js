var cur_sc=0;var sitePath ="/";var sc_sel=[0,0,0,0,0,0,0,0];
var sc_logo=[
["bd","sg","gg","bing","360"],
["bd","sg","yyt"],
["bd","gg"],
["bd","yk","go","td"],
["bd","gg","so"],
["bd","gg","sg"],
["tb","jd","dd","zy","tg"],
["wb","zr"]];
var sc_sb=[
["百度","搜狗","谷歌","必应","360"],
["百度","搜狗","音悦台"],
["百度","谷歌","Zcool","花瓣","Topit"],
["百度","优酷","土豆","奇艺","酷6"],
["百度","豆瓣","来吧"],
["百度","谷歌","搜狗"],
["淘宝","京东","当当",
"卓越","百度","一淘"],
["新浪","新浪"]];
var sc_url=[["百度","www.baidu.com/s?ie=utf-8&wd={$query}&tn=benbenla.com","搜狗","www.sogou.com/sogou?query={$query}&pid=sogou-site-42a6845a557bef70","Google","www.google.com.hk/search?hl=zh-CN&source=hp&biw=1278&bih=933&q={$query}&aq=f&aqi=&aql=&oq=","Bing","cn.bing.com/search?q={$query}","So","www.so.com/s?ie=utf-8&q={$query}"],["百度","music.baidu.com/search?key={$query}", "搜狗","http://www.wozaixianshang.comjs/mp3.sogou.com/music.so?query={$query}&ie=utf8&p=40040201", "MV","so.yinyuetai.com/mv?keyword={$query}"],["百度","image.baidu.com/i?ct=201326592&cl=2&lm=-1&tn=baiduimage&pv=&z=0&word={$query}&ie=utf-8", "Google","images.google.com.hk/images?gbv=2&source=hp&hl=zh-CN&q={$query}&aq=f&oe=UTF-8","Zcool","http://www.wozaixianshang.comjs/www.zcool.com.cn/tosearch.do?page=0&world={$query}","花瓣","huaban.com/search/?q={$query}","Topit","www.topit.me/items/search?query={$query}"],["百度","video.baidu.com/v?word={$query}&pn=0&rn=20&tn=&ct=301989888&ie=utf-8", "优酷","www.soku.com/search_video/q_{$query}", "土豆","so.tudou.com/nisearch/{$query}/","奇艺","so.iqiyi.com/so/q_{$query}_f_2","酷6","my.ku6.com/search?q={$query}"],["百度","tieba.baidu.com/f?kw={$query}&ie=utf-8","豆瓣","www.douban.com/search?q={$query}","天涯","http://www.wozaixianshang.comjs/laiba.tianya.cn/searchGroup.jsp?isFromStock=false&searchType=0&nameOrStockCode={$query}"],["百度","map.baidu.com/m?word={$query}","Google","ditu.google.cn/maps?q={$query}&hl=zh-CN","搜狗","map.sogou.com/#lq={$query}"],["淘宝","s8.taobao.com/search?commend=all&q={$query}&pid=mm_26141474_0_0&mode=66","京东","search.360buy.com/Search?keyword={$query}","当当","search.dangdang.com/?key={$query}","卓越","www.amazon.cn/gp/search?ie=UTF8&camp=536&creative=3200&index=books&keywords={$query}&linkCode=ur2&tag=benbenla-23","团购","tuan.baidu.com/?do=search&wd={$query}&today=1","一淘比价","s8.etao.com/search?tb_lm_id=etao_mmsearch_ziya&q={$query}&initiative_id=etao_20120811"],["微博","s.weibo.com/weibo/{$query}","找人","s.weibo.com/user/{$query}&Refer=weibo_user"]];
function $(i){ return document.getElementById(i);}
function set_so(n){
var spk=""; 
if(cur_sc==n)return; 
$("sbmkeys").innerHTML=""; 
s_sd("sbmkeys",0); 
obj=$("sc"+n); 
s_n(obj,"cur"); 
s_n("sc"+cur_sc,""); 
cur_sc=n; so_img(n); 
if(sc_url[n].length>3){  
s_sd("sbmkeys",1);  
for(i=0;i<sc_url[n].length/2;i++)
spk+="<label for=sp"+i+n+"><input id=sp"+i+n+" type=radio"+(sc_sel[n]==i ? " checked" : "")+" name=sp>"+sc_url[n][i*2]+"</label>";  
$("sbmkeys").innerHTML=spk; 
}$("keyword").focus();}
function so_img(n){ 
$("sblogo").src="images/"+sc_logo[n][sc_sel[cur_sc]]+n+".gif";
$("s-btn").value=sc_sb[n][sc_sel[cur_sc]]+"搜索";}
function do_so(o) { 
var k=$("keyword").value;
var s=sc_sel[cur_sc];  
if(s==1&&cur_sc==1||cur_sc==7)q=k;else q=euc(k); 
var t=sc_url[cur_sc][s*2+1];  
window.open("http://"+t.replace("{$query}",q),""); 
go(2,["kw", k,"t",cur_sc]); 
return false;}
function change_sp(){ 
var es=els("sbmkeys", "input"); 
for(var i=0; i<es.length; i++){ 
if(es[i].checked){sc_sel[cur_sc]=i;so_img(cur_sc)
}}$("keyword").focus();}
function do_so_bd(v){ var f=document.so_bd;f.wd.value=v;f.submit();}
function euc(s) {
return encodeURIComponent(s)}
function go(a, s) {
var b = ["act=" + a];
for (var i = 0; i < s.length; i += 2) b.push(s[i] + "=" + (s[i + 1]));
$('go').src = sitePath + "goUrlCount.do?" + b.join("&")}
function s_sd(i, d) {
if (typeof(i) == "string") i = $(i);
if (d == "1") d = "block";
else if (d == "2") d = "";
else d = "none";
i.style.display = d}
function s_n(a, b) {
if (typeof(a) == "string") a = $(a);
a.className = b}
function s_nc(a, b) {
if (typeof(a) == "string") a = $(a);
if (a.className == b) return true;
else return false}
function els(i, t) {
if (typeof(i) == "string") i = $(i);
return i.getElementsByTagName(t)}
function addLoadEvent(func){
var oldonload=window.onload;
if(typeof window.onload!='function'){
window.onload=func;
}else{
window.onload=function(){
oldonload();
func();
}}};
function startmarquee(high,speed,delay){
var t;
var p=false;
var o=$("shine");
o.innerHTML+=o.innerHTML;
o.onmouseover=function(){p=true;};
o.onmouseout=function(){p=false;};
o.scrollTop=0;
function start(){
t=setInterval(scrolling,speed);
if(!p){
o.scrollTop+=1;
}}
function scrolling(){
if(o.scrollTop%high!=0){
o.scrollTop+=1;
if(o.scrollTop>=o.scrollHeight/2){
o.scrollTop=0;
}}else{
clearInterval(t);
setTimeout(start,delay);
}}setTimeout(start,delay);
}
function setHomepage(){
if(document.all){document.body.style.behavior='url(#default#homepage)';
document.body.setHomePage('../index.htm');}
else if(window.sidebar){if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}catch(e){return ture;alert("亲爱的用户你好：\n非IE浏览器请手动将本站设为首页！\n给您带来的不便,本站深表歉意。感谢您的支持~");}}}};
window.onerror=function(){return true;}