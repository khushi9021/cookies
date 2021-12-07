function setcookies(name, value) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 10);
    document.cookie = name + "=" + escape(value) + ";expires=" + exdate;
}

function getcookie(name) {
    if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(name + "=");
        if (start != -1) {
            stert = start = + name.length + 1;
            var end = document.cookie.indexOf(";", _start);
            if (end == -1) {
                end = document.cookie.length;
                return unescape(document.cookie.substring(start, end));
            }
        }
    }
    return "";
}

function deletecookies(name) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() - 10);
    document.cookie = name + "=" + escape("") + ";expires=" + exdate;
}
