# 日期工具方法

* 返回当前的时间（年月日时分秒）

```js
    function getDateTime() {
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours() + 1,
        minute = date.getMinutes(),
        second = date.getSeconds();
        month = checkTime(month);
        day = checkTime(day);
        hour = checkTime(hour);
        minute = checkTime(minute);
        second = checkTime(second);
        function checkTime(i) {
            if (i < 10) {
                    i = "0" + i;
        }
            return i;
        }
        return "" + year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒"
    }

    function formatDate(t, str) {
        var obj = {
            yyyy: t.getFullYear(),
            yy: ("" + t.getFullYear()).slice(-2),
            M: t.getMonth() + 1,
            MM: ("0" + (t.getMonth() + 1)).slice(-2),
            d: t.getDate(),
            dd: ("0" + t.getDate()).slice(-2),
            H: t.getHours(),
            HH: ("0" + t.getHours()).slice(-2),
            h: t.getHours() % 12,
            hh: ("0" + t.getHours() % 12).slice(-2),
            m: t.getMinutes(),
            mm: ("0" + t.getMinutes()).slice(-2),
            s: t.getSeconds(),
            ss: ("0" + t.getSeconds()).slice(-2),
            w: ['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
        };
        return str.replace(/([a-z]+)/ig, function ($1) {
            return obj[$1]
        });
    }
```
