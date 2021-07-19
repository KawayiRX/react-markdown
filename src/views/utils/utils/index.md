# 工具

* 运动函数

```js
    function animate(obj, json, callback) {
    clearInterval(obj.timer);
    var speed,
        current;
    obj.timer = setInterval(function () {
        var lock = true;
        for (var prop in json) {
            if (prop == 'opacity') {
                current = parseFloat(window.getComputedStyle(obj, null)[prop]) * 100;
            } else {
                current = parseInt(window.getComputedStyle(obj, null)[prop]);
            }
            speed = (json[prop] - current) / 7;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (prop == 'opacity') {
                obj.style[prop] = (current + speed) / 100;
            } else {
                obj.style[prop] = current + speed + 'px';
            }
            if (current != json[prop]) {
                lock = false;
            }
        }
        if (lock) {
            clearInterval(obj.timer);
            typeof callback == 'function' ? callback() : '';
        }
    }, 30)
}
```

* 弹性运动

```js
    function ElasticMovement(obj, target) {
        clearInterval(obj.timer);
        var iSpeed = 40,
            a, u = 0.8;
        obj.timer = setInterval(function () {
            a = (target - obj.offsetLeft) / 8;
            iSpeed = iSpeed + a;
            iSpeed = iSpeed * u;
            if (Math.abs(iSpeed) <= 1 && Math.abs(a) <= 1) {
                console.log('over')
                clearInterval(obj.timer);
                obj.style.left = target + 'px';
            } else {
                obj.style.left = obj.offsetLeft + iSpeed + 'px';
            }
        }, 30);
    }
```

* Ajax

```js
    function ajax(method, url, callback, data, flag) {
        var xhr;
        flag = flag || true;
        method = method.toUpperCase();
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHttp');
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(2)
                callback(xhr.responseText);
            }
        }

        if (method == 'GET') {
            var date = new Date(),
            timer = date.getTime();
            xhr.open('GET', url + '?' + data + '&timer' + timer, flag);
            xhr.send()
            } else if (method == 'POST') {
            xhr.open('POST', url, flag);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(data);
        }
    }
```

* 异步加载script

```js
    function loadScript(url, callback) {
        var oscript = document.createElement('script');
        if (oscript.readyState) { // ie8及以下版本
            oscript.onreadystatechange = function () {
                if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {
                    callback();
                }
            }
        } else {
            oscript.onload = function () {
                callback()
            };
        }
        oscript.src = url;
        document.body.appendChild(oscript);
    }
```

* cookie管理

```js
    var cookie = {
        set: function (name, value, time) {
            document.cookie = name + '=' + value + '; max-age=' + time;
            return this;
        },
        remove: function (name) {
            return this.setCookie(name, '', -1);
        },
        get: function (name, callback) {
            var allCookieArr = document.cookie.split('; ');
            for (var i = 0; i < allCookieArr.length; i++) {
                var itemCookieArr = allCookieArr[i].split('=');
                if (itemCookieArr[0] === name) {
                    return itemCookieArr[1]
                }
            }
            return undefined;
        }
    }
```

* bind call apply

```js
    Function.prototype.myBind = function (target) {
        var target = target || window;
        var _args1 = [].slice.call(arguments, 1);
        var self = this;
        var temp = function () {};
        var F = function () {
            var _args2 = [].slice.call(arguments, 0);
            var parasArr = _args1.concat(_args2);
            return self.apply(this instanceof temp ? this : target, parasArr)
        }
        temp.prototype = self.prototype;
        F.prototype = new temp();
        return F;
    }

    Function.prototype.myCall = function () {
        var ctx = arguments[0] || window;
        ctx.fn = this;
        var args = [];
        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i])
        }
        var result = ctx.fn(...args);
        delete ctx.fn;
        return result;
    }

    Function.prototype.myApply = function () {
        var ctx = arguments[0] || window;
        ctx.fn = this;
        if (!arguments[1]) {
            var result = ctx.fn();
            delete ctx.fn;
            return result;
        }
        var result = ctx.fn(...arguments[1]);
        delete ctx.fn;
        return result;
    }
```

* 防抖 节流

```js

    function debounce(handle, delay) {
        var timer = null;
        return function () {
            var _self = this,
                _args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                handle.apply(_self, _args)
            }, delay)
        }
    }

    function throttle(handler, wait) {
        var lastTime = 0;
        return function (e) {
            var nowTime = new Date().getTime();
            if (nowTime - lastTime > wait) {
                handler.apply(this, arguments);
                lastTime = nowTime;
            }
        }
    }
```

* requestAnimFrame， cancelAnimFrame兼容性方法

```js
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    window.cancelAnimFrame = (function () {
        return window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            function (id) {
                window.clearTimeout(id);
            };
    })();
```

* jsonP

```js
    function jsonp(url, callback) {
        var oscript = document.createElement('script');
        if (oscript.readyState) { // ie8及以下版本
            oscript.onreadystatechange = function () {
                if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {
                    callback();
                }
            }
        } else {
            oscript.onload = function () {
                callback()
            };
        }
        oscript.src = url;
        document.body.appendChild(oscript);
    }
```

* 邮箱正则

```js
    function isAvailableEmail(sEmail) {
        var reg = /^([\w+\.])+@\w+([.]\w+)+$/
        return reg.test(sEmail)
    }
```

* 函数柯里化

```js
//是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术

    function curryIt(fn) {
        var length = fn.length,
            args = [];
        var result = function (arg) {
            args.push(arg);
            length--;
            if (length <= 0) {
                return fn.apply(this, args);
            } else {
                return result;
            }
        }
        return result;
    }
```

* 大数相加

```js
    function sumBigNumber(a, b) {
        var res = '', //结果
            temp = 0; //按位加的结果及进位
        a = a.split('');
        b = b.split('');
        while (a.length || b.length || temp) {
            //~~按位非 1.类型转换，转换成数字 2.~~undefined==0 
            temp += ~~a.pop() + ~~b.pop();
            res = (temp % 10) + res;
            temp = temp > 9;
        }
        return res.replace(/^0+/, '');
    }
```

* 单例

```js
    function getSingle(func) {
        var result;
        return function () {
            if (!result) {
                result = new func(arguments);
            }
            return result;
        }
    }
```