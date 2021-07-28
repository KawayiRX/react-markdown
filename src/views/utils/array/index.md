# 数组工具方法

- 数组去重

```ts
function unique1(arr) {
  return [...new Set(arr)];
}

function unique2(arr) {
  var obj = {};
  return arr.filter((ele) => {
    if (!obj[ele]) {
      obj[ele] = true;
      return true;
    }
  });
}

function unique3(arr) {
  var result = [];
  arr.forEach((ele) => {
    if (result.indexOf(ele) == -1) {
      result.push(ele);
    }
  });
  return result;
}
```

- reverse 底层原理和扩展

```js
Array.prototype.myReverse = function () {
  const len = this.length;
  for (let i = 0; i < len; i++) {
    const temp = this[i];
    this[i] = this[len - 1 - i];
    this[len - 1 - i] = temp;
  }
  return this;
};
```

- forEach

```js
Array.prototype.myForEach = function (func, obj) {
  const len = this.length;
  const _this = arguments[1] ? arguments[1] : window;
  // var _this=arguments[1]||window;
  for (let i = 0; i < len; i++) {
    func.call(_this, this[i], i, this);
  }
};
```

- filter

```js
Array.prototype.myFilter = function (func, obj) {
  const len = this.length;
  const arr = [];
  const _this = arguments[1] || window;
  for (let i = 0; i < len; i++) {
    func.call(_this, this[i], i, this) && arr.push(this[i]);
  }
  return arr;
};
```

- map

```js
Array.prototype.myMap = function (func) {
  const arr = [];
  const len = this.length;
  const _this = arguments[1] || window;
  for (let i = 0; i < len; i++) {
    arr.push(func.call(_this, this[i], i, this));
  }
  return arr;
};
```

- every

```js
Array.prototype.myEvery = function (func) {
  let flag = true;
  const len = this.length;
  const _this = arguments[1] || window;
  for (let i = 0; i < len; i++) {
    if (func.apply(_this, [this[i], i, this]) == false) {
      flag = false;
      break;
    }
  }
  return flag;
};
```

- reduce

```js
Array.prototype.myReduce = function (func, initialValue) {
  const len = this.length;
  let nextValue;
  let i;
  if (!initialValue) {
    // 没有传第二个参数
    nextValue = this[0];
    i = 1;
  } else {
    // 传了第二个参数
    nextValue = initialValue;
    i = 0;
  }
  for (; i < len; i++) {
    nextValue = func(nextValue, this[i], i, this);
  }
  return nextValue;
};
```

- 排序

```js
// 快排 [left] + min + [right]
function quickArr(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const left = [];
  const right = [];
  const pIndex = Math.floor(arr.length / 2);
  const p = arr.splice(pIndex, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= p) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 递归
  return quickArr(left).concat([p], quickArr(right));
}

// 冒泡
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```
