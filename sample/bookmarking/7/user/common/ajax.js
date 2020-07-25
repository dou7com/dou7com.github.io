

 function Ajax(){
	this.get = get;
	
	this.requestors = Array();
	this.urlEncode = _urlEncode;
	this.getRequestor = _getRequestor;
     
	function get(strUrl, contentContainer, resultFunc, waitingStr){
		var requestor = this.getRequestor();
		try
		{
        	requestor.open("GET", strUrl, true);   
			requestor.onreadystatechange = function()
			{
				if ((requestor.readyState == 4) && (requestor.status == 200))
				{   
					if ((contentContainer != undefined) && ('' != contentContainer))
					{
						document.getElementById(contentContainer).innerHTML = requestor.responseText;
					 }
					
					if (undefined != resultFunc)
					{                              
						strCmd = resultFunc + '(requestor.responseText)';
						eval(strCmd);
					}

					return true;
				}
			}
			
			requestor.send(null);
			if ((contentContainer != undefined) && ('' != contentContainer)){
			    if (undefined == waitingStr)
			    {
			        waitingStr = '请稍候…';
			    }
			    
				document.getElementById(contentContainer).innerHTML = waitingStr;
			}

			return true;                
		}
		catch (e)
		{
			alert(e);
			return false;
		}
	}
	
	//编码中文字符
    function _urlEncode(str)
    {
        return encodeURIComponent(str);
    }
	
	function _getRequestor()
	{
		for (i = 0; i < this.requestors.length; i++)
		{
			if ((0 == this.requestors[i].readyState) || (4 == this.requestors[i].readyState))
			{
				return this.requestors[i];
			}
		}
		
		var requestor = null;
	    if (window.XMLHttpRequest)
	    { 
			requestor = new XMLHttpRequest(); 
		}
		else
		{
			if (window.ActiveXObject)
			{ 
				requestor = new ActiveXObject("Microsoft.XMLHTTP"); 
			}
		}  
			
		if (!requestor)
		{
			alert("远程调用不可用。");
	
			return false;				
		}
			
		this.requestors[this.requestors.length] = requestor;
			
		return requestor;
	}
}

ajax = new Ajax();