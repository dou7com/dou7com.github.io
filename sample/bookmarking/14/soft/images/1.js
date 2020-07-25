var imgheight
document.ns = navigator.appName == "Netscape"
window.screen.width>800 ? imgheight=100:imgheight=100
 function myload()
{
if (navigator.appName == "Netscape")
{document.dangdang.pageY=pageYOffset+window.innerHeight-imgheight;
document.dangdang.pageX=+window.innerWidth-120;
mymove();
}
else
{
dangdang.style.top=document.body.scrollTop+document.body.offsetHeight-imgheight;
dangdang.style.left=document.body.offsetWidth-120;
mymove();
}
}
 function mymove()
 {
 if(document.ns)
 {
 document.dangdang.top=pageYOffset+window.innerHeight-imgheight;
 document.dangdang.left=pageXOffset+window.innerWidth-120;
 setTimeout("mymove();",80)
 }
 else
 {
 dangdang.style.top=document.body.scrollTop+document.body.offsetHeight-imgheight;
 dangdang.style.left=document.body.scrollLeft+document.body.offsetWidth-120;
 setTimeout("mymove();",80)
 }
 }

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true)




if (navigator.appName == "Netscape")
{document.write("<layer id=dangdang top=300 width=80 height=80><a href=https://www.4399.com/ads222.htm  target=_blank><img src=https://www.7444.com/aliba/8080.gif  border=1 alt=点击这里,精彩的产品等着你. ></a></layer>");
myload()}
else
{
document.write("<div id=dangdang style='position: absolute;width:80;top:0;left:570;visibility: visible;z-index: 1'><a href=https://www.4399.com/ads222.htm  target=_blank><img src=https://www.7444.com/aliba/8080.gif  border=1 alt=点击这里,精彩的产品等着你. ></a></div>");
myload()
}