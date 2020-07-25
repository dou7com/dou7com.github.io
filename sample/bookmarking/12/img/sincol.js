function isMatch(str1,str2) 
{  
var index = str1.indexOf(str2); 
if(index==-1) return false; 
return true; 
} 
function ResumeError() { 
return true; 
} 
window.onerror = ResumeError; 

function doClick(o){
	 o.className="nav_current";
	 var j;
	 var id;
	 var e;
	 for(var i=1;i<=8;i++){
	   id ="nav"+i;
	   j = document.getElementById(id);
	   e = document.getElementById("sub"+i);
	   if(id != o.id){
	   	 j.className="nav_link";
	   	 e.style.display = "none";
	   }else{
			e.style.display = "block";
	   }
	 }
	 }
function doClick_down(o){
	 o.className="down_current";
	 var j;
	 var id;
	 var e;
	 for(var i=1;i<=4;i++){
	   id ="down"+i;
	   j = document.getElementById(id);
	   e = document.getElementById("d_con"+i);
	   if(id != o.id){
	   	 j.className="down_link";
	   	 e.style.display = "none";
	   }else{
		e.style.display = "block";
	   }
	 }
	 }
function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
  var str = '<object ';
  for (var i in objAttrs)
    str += i + '="' + objAttrs[i] + '" ';
  str += '>';
  for (var i in params)
    str += '<param name="' + i + '" value="' + params[i] + '" /> ';
  str += '<embed ';
  for (var i in embedAttrs)
    str += i + '="' + embedAttrs[i] + '" ';
  str += ' ></embed></object>';

  document.write(str);
}

function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_SW_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
     , null
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "id":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}

function doClick_up(o){
	 o.className="up_link";
	 var j;
	 var id;
	 var e;
	 for(var i=1;i<=4;i++){
	   id ="up"+i;
	   j = document.getElementById(id);
	   e = document.getElementById("up_con"+i);
	   if(id != o.id){
	   	 j.className="sp";
	   	 e.style.display = "none";
	   }else{
		e.style.display = "block";
	   }
	 }
	 }


if (top.location !== self.location) {
top.location=self.location;
}

function doZoom(size){
	document.getElementById('textbody').style.fontSize=size+'px'
}

function doClick_inin(o){
	 o.className="box_out";
	 var j;
	 var id;
	 var e;
	 for(var i=1;i<=3;i++){
	   id ="inin"+i;
	   j = document.getElementById(id);
	   e = document.getElementById("d_cons"+i);
	   if(id != o.id){
	   	 j.className="box_in";
	   	 e.style.display = "none";
	   }else{
		e.style.display = "block";
	   }
	 }
	 }

function doClick_inins(o){
	 o.className="box_out";
	 var j;
	 var id;
	 var e;
	 for(var i=1;i<=2;i++){
	   id ="inins"+i;
	   j = document.getElementById(id);
	   e = document.getElementById("d_conss"+i);
	   if(id != o.id){
	   	 j.className="box_in";
	   	 e.style.display = "none";
	   }else{
		e.style.display = "block";
	   }
	 }
	 }

function show (th, cur) {
    if (typeof show.th == 'undefined') {
        show.th = document.getElementById('hg');
        show.cur = 1;
    }
    if (show.th == th) return;
    show.th.className = '';
    th.className = 'li_d';
    document.getElementById('info' + show.cur).style.display = 'none';
    document.getElementById('info' + cur).style.display = 'block';
    show.th = th;
    show.cur = cur;
}