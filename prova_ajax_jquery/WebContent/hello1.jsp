<jsp:directive.page contentType="application/json"/>
<%@page import="org.json.simple.JSONObject"%>
<%
String name = request.getParameter("name");
JSONObject json = new JSONObject();
json.put("name", name);
out.print(json);
out.flush();
%>
