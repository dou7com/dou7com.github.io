    //获取文档元素
    function $(id)
    {
        return document.getElementById(id);
    }

    //检查是否非空
    function notEmpty(obj, msg)
    {
      str = obj.value;
      str1 = "";
      for (i = 0; i < str.length; i++)
      {
        if (str.charAt(i) != " ")
        {
          str1 = str.substr(i, str.length);
          break;
        }
      }
    
      if (str1 == "")
      {
        alert(msg);
        obj.value = "";
        obj.focus();
        return false;
      }
      else
      {
        return true;
      }
    }
    
    //检查是否为数字
    function isNumber(obj, msg)
    {
      if(isNaN(obj.value))
      {
        if (undefined == msg)
        {
          msg = "请输入数字！";
        }

        alert(msg);
        obj.select();
        return false;
      }
      else
      {
        return true;
      }
    }
    
    //检查密码是否相同
    function isSamePwd(objPwd1, objPwd2, msg)
    {
      pwd1 = objPwd1.value;
      pwd2 = objPwd2.value;
    
      if (pwd1 != pwd2)
      {
        if (null == msg)
        {
            alert("密码不相同！");
         }
         else
         {
             alert(msg);
         }
         
        objPwd2.value = "";
        objPwd2.focus();
        return false;
      }
      else
      {
        return true;
      }
    }
    
    //检查邮件地址
    function isEmail(obj, msg)
    {
      ch = obj.value;
      if((ch.indexOf("@") < 1) || (ch.indexOf(".") < 1) || (ch.indexOf(".") == ch.length - 1))
      {
        if (null == msg)
        {
          alert("Email不正确！");
        }
        else
        {
          alert(msg);
        }
        obj.select();
        return false;
      }
      else
      {
        return true;
      }
    }
    
    //取出Cookie值
    function getCookie(name)
    {
         var result = null;
         var myCookie = "" + document.cookie + ";";
         var searchName = "" + name + "=";
         var startOfCookie = myCookie.indexOf(searchName);
         var endOfCookie;
         
         if(startOfCookie != -1)
         {
              startOfCookie += searchName.length;
              endOfCookie = myCookie.indexOf(";",startOfCookie);
              result = unescape(myCookie.substring(startOfCookie,endOfCookie));
         }
         
         return result; 
    }
    
    //设置Cookie
    function setCookie(name, value, expireSeconds, path, domain, secure)
    {
         expireSeconds = ((expireSeconds == null) ? 86400 * 365 : expireSeconds);
         var objDate = new Date();
         objDate.setTime(objDate.getTime() + expireSeconds * 1000);
         var expString = ";expires=" + objDate.toGMTString();
         var pathString = ((path == null) ? ";path=/" : (";path=" + path));
         var domainString = ((domain == null) ? "" : (";domain=" + domain));
         var secureString = ((secure == null) ? "" : ";secure=1");
         var cookieString = name +"=" + escape(value) + expString + pathString + domainString + secureString;
         document.cookie = cookieString;                  
    }
    
function urlEncode(str)
{ 
    var ret=""; 
    var strSpecial="!\"#$%&()*+,/:;<=>?[]^`{|}~%"; 
    for(var i=0;i<str.length;i++)
    { 
        var chr = str.charAt(i); 
        var c=str2asc(chr); 
        tt += chr+":"+c+"n"; 
        if(parseInt("0x"+c) > 0x7f)
        { 
            ret+="%"+c.slice(0,2)+"%"+c.slice(-2); 
        }
        else
        { 
            if(chr==" ") 
                ret+="+"; 
            else if(strSpecial.indexOf(chr)!=-1) 
                ret+="%"+c.toString(16); 
            else 
                ret+=chr; 
        } 
    } 
    return ret; 
} 

function urlDecode(str){ 
    var ret=""; 
    for(var i=0;i<str.length;i++)
    { 
        var chr = str.charAt(i); 
        if(chr == "+")
        { 
            ret+=" "; 
        }
        else if(chr=="%")
        { 
            var asc = str.substring(i+1,i+3); 
            if(parseInt("0x"+asc)>0x7f)
            { 
                ret+=asc2str(parseInt("0x"+asc+str.substring(i+4,i+6))); 
                i+=5; 
            }
            else
            { 
                ret+=asc2str(parseInt("0x"+asc)); 
                i+=2; 
            } 
        }
        else
        { 
            ret+= chr; 
        } 
    } 
    return ret; 
} 