<%
rem 娓呴櫎session
session("admin")=""
Session.Abandon()
response.redirect("index.asp")
rem 杩斿洖admin_index.php鏄垽鏂璼ession鏄惁娓呴櫎鎴愬姛锛屾垚鍔熷垯杩斿洖index.php
%>