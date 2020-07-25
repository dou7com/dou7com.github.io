(function() {         
    window.fengyundomready = function(f){
        /in/.test(document.readyState)?setTimeout('fengyundomready('+f+')',9):f()
    }    
    function loadFengYunMini() {
        var tar = document.getElementById('feng-yun-mini-wrap');
        /*
        if (tar == null || channelInfo == null) {
            window.alert("Embed Code Error. Please copy the code again and don't do any modification. http://www.fengyunzhibo.com");
            return;
        } 
        */
        var width=960,height=480;
        var tuiguang = "benbenla";
        if(window.fengyunminicongf){
            width = Number(window.fengyunminicongf.width);            
            if(isNaN(width)){
                width = 960;
            }
            height = window.fengyunminicongf.height;
            if(isNaN(height)){
                height = 480;
            }
            tuiguang = window.fengyunminicongf.tuiguangid;
        }
        var code = "<iframe src='http://mini.fengyunzhibo.com/mini/fymini.htm?f="+tuiguang+"#width="+width+"&height="+height+"' frameborder='0' scrolling='no' width='"+width+"' height='"+height+"'></iframe>"
        tar.innerHTML = code;
    }
    fengyundomready(loadFengYunMini);
})()