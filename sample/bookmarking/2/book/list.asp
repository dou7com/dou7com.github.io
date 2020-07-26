 <!-- #include file="include/conn.asp" -->
 <title>鍏ㄩ儴鐣欒█</title>
   <%   Set rs = server.CreateObject("ADODB.Recordset")
     sql="select * from contents order by id desc"
	 rs.Open sql,conn,1,1
     Do While Not rs.eof  
             
              response.write ("<table><tr>")
              response.write ("<td>&nbsp;&nbsp;濮撳悕:"&rs("name")&"</td>")
			  response.write ("<td>&nbsp;&nbsp;鐣欒█鏃堕棿:"&rs("time")&"</td>")
			  response.write ("</tr>")
              response.write ("<tr><td colspan='4'>鐣欒█:"&rs("content")&"</td></tr></table><br/>")
              response.write ("<hr/>")
              
	  rs.movenext
	  Loop
	  rem 閲婃斁璧勬簮
	  rs.close
	  Set rs = Nothing
	  
 %>