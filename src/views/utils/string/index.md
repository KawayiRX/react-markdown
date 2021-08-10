# 字符串工具方法

- 去重

```typescript
String.prototype.unique = function () {
  const obj = {}
  let str = ''
  const len = this.length
  for (let i = 0; i < len; i++) {
    if (!obj[this[i]]) {
      str += this[i]
      obj[this[i]] = true
    }
  }
  return str
}

// 去除连续的字符串
function uniq(str) {
  return str.replace(/(\w)\1+/g, '$1')
}
```

- 找出字符串中第一次只出现一次的字母

```typescript
String.prototype.firstAppear = function () {
  const obj = {}
  const len = this.length
  for (let i = 0; i < len; i++) {
    if (obj[this[i]]) {
      obj[this[i]]++
    } else {
      obj[this[i]] = 1
    }
  }
  for (const prop in obj) {
    if (obj[prop] == 1) {
      return prop
    }
  }
}
```

- 检验字符串是否是回文

```typescript
function isPalina(str) {
  if (Object.prototype.toString.call(str) !== '[object String]') {
    return false
  }
  const len = str.length
  for (let i = 0; i < len / 2; i++) {
    if (str[i] != str[len - 1 - i]) {
      return false
    }
  }
  return true
}

function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase()
  console.log(str)
  return str == str.split('').reverse().join('')
}
```

- 获取 url 参数

```typescript
function getWindonHref() {
  const sHref = window.location.href
  const args = sHref.split('?')
  if (args[0] === sHref) {
    return ''
  }
  const hrefarr = args[1].split('#')[0].split('&')
  const obj = {}
  for (let i = 0; i < hrefarr.length; i++) {
    hrefarr[i] = hrefarr[i].split('=')
    obj[hrefarr[i][0]] = hrefarr[i][1]
  }
  return obj
}

function getUrlParam(sUrl, sKey) {
  const result = {}
  sUrl.replace(/(\w+)=(\w+)(?=[&|#])/g, (ele, key, val) => {
    if (!result[key]) {
      result[key] = val
    } else {
      const temp = result[key]
      result[key] = [].concat(temp, val)
    }
  })
  if (!sKey) {
    return result
  }
  return result[sKey] || ''
}
```
