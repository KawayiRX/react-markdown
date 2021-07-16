# 部署前端项目

## 前端项目

1. 配置 publicPath(webpack)

```js
    output.publicPath = "/music"
```

2. 配置入口 html 文件的 meta 标签的 base 属性

```js
    <meta base="/music"/>
```

3. 配置路由 basename 属性

```jsx
    <HistoryRouter basename="/music"></HistoryRouter>
```

### 服务器

1. 配置 nginx.conf 文件

```shell
listen       80; # 监听的端口
        server_name  localhost; # 地址
        
  location / {
      root  /app/docs/; # 本地资源前缀，从根路径写
      index  index.html ; # 默认访问的地址
  }
        location /music {
      alias  /app/ts-music/build/; # 路径别名 替换uri
            #try_files $uri $uri/ /music/index.html;
      index  index.html ; # 默认访问的地址
  }
```

<https://gitee.com/leijianggitee/docs/raw/master/_media/nginx.jpeg>
