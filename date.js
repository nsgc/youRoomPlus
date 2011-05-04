function dateFormat(indate){
    var thisdate = new Date(indate);
    year = thisdate.getYear();
    month = thisdate.getMonth() + 1;
    date = thisdate.getDate();
    hour = thisdate.getHours();
    minute = thisdate.getMinutes();
    var yy, mm = month, dd = date, HH = hour, MM = minute;
    if (year < 2000) { yy = 1900 + year; }
    if (month < 10) { mm = "0" + month; }
    if (date < 10) { dd = "0" + date; }
    if (hour < 10) { HH = "0" + hour; }
    if (minute < 10) { MM = "0" + minute; }
    var today = new Date;

    if (today.getYear() > year) {
	return (yy + "/" + mm + "/" + dd + " " + HH + ":" + MM);
    } else if ( (diff = today - thisdate) < 24*60*60*1000 + 30) {
	return Math.ceil(diff / (60*60*1000)) + "ŠÔˆÈ“à" ;
    } else {
	return (mm + "/" + dd + " " + HH + ":" + MM);
    }
}
