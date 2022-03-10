const params_menu = new URLSearchParams(window.location.search);
var str_school=params_menu.get("school");
var str_year=params_menu.get("year");
var str_season=params_menu.get("season");
var str_weak=params_menu.get("weak");
if (str_school=="" && str_year==""){str_year=3};
if(str_weak==1){str_weak=""}else{str_weak=1}

document.write(
    "<a href='year_select.htm'>年</a>　",
    "<a href='index6.htm?school="+str_school+"&year="+str_year+"&season="+str_season+"&weak="+str_weak+"'>表示切替</a>　",
    "学期　",
    "パス"
)