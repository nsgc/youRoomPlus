Date.prototype.dateFormat = function(){
    year = this.getYear();
    month = this.getMonth() + 1;
    date = this.getDate();
    hour = this.getHours();
    minute = this.getMinutes();
    var yy, mm = month, dd = date, HH = hour, MM = minute;
    if (year < 2000) { yy = 1900 + year; }
    if (month < 10) { mm = "0" + month; }
    if (date < 10) { dd = "0" + date; }
    if (hour < 10) { HH = "0" + hour; }
    if (minute < 10) { MM = "0" + minute; }
    var today = new Date;

    if (today.getYear() > year) {
	return (yy + "/" + mm + "/" + dd + " " + HH + ":" + MM);
    } else if ( (diff = today - this) < 24*60*60*1000 + 30) {
	return Math.ceil(diff / (60*60*1000)) + "ŽžŠÔˆÈ“à" ;
    } else {
	return (mm + "/" + dd + " " + HH + ":" + MM);
    }
}
