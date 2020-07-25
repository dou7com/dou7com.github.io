//==========================================================================================
//软件名称：魅魔MacCMS
//开发作者：MagicBlack    '官方网站：httpss://www.maccms.com/
//Copyright (C) 2009 - 2010 ... maccms.com  All Rights Reserved.
//郑重声明:
//    1、任何个人或组织不得以盈利为目的发布,修改,本软件及其他副本上一切关于版权的信息；
//    2、本人保留此软件的法律追究权利；
//==========================================================================================

String.prototype.replaceAll  = function(s1,s2){
   return this.replace(new RegExp(s1,"gm"),s2);
}
String.prototype.trim=function(){
   return this.replace(/(^\s*)|(\s*$)/g, "");
}
function copyData(text){
	if (window.clipboardData){
		window.clipboardData.setData("Text",text);
	} 
	else{
		var flash_copy = null;
		if( !$('#flash_copy') ){
			var flash_copy = document.createElement("div");
	    	flash_copy.id = 'flash_copy';
	    	document.body.appendChild(flash_copy);
		}
		flash_copy = $('#flash_copy');
		flash_copy.innerHTML = '<embed src='+maccms_path+'"images/_clipboard.swf" FlashVars="clipboard='+escape(text)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';
	}
	alert("复制成功,您可以使用 Ctrl+V 贴到需要的地方去了哦!");
	return true;
}

function copyToClipBoard(){
	var clipBoardContent="";
	clipBoardContent+="给您推荐一个好网址 ---淘宝购物导航---本站所有上榜网店是由数万名热心网友推荐整理而成，真实可信赖！";
	clipBoardContent+="\n";
	clipBoardContent+="网址：httpss://www.688dh.com";
	copyData(clipBoardContent);
}

function sitehome(obj,strUrl){
    try{
    	obj.style.behavior='url(#default#homepage)';
    	obj.setHomePage(strUrl);
	}
    catch(e){
         if(window.netscape){
         	try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}
            catch (e){alert("此操作被浏览器拒绝！请手动设置");}
            var moz = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            moz.setCharPref('browser.startup.homepage',strUrl);
          }
     }
}
function sitefav(strUrl,strTitle){
	try{ window.external.addFavorite(strUrl, strTitle);}
	catch (e){
		try{window.sidebar.addPanel(strTitle, strUrl, "");}
		catch (e){alert("加入收藏出错，请使用键盘Ctrl+D进行添加");}
	}
}