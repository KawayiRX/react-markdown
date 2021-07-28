export const Lines = () => {
return <div style={{margin: 40}} />
}

# Nginx 是一款轻量级的**网页服务器、反向代理服务器**。相较于 Apache、lighttpd 具有占有内存少，稳定性高等优势。它最常的用途是提供反向代理服务

1. 下载 nginx 压缩包

```shell
    cd /usr/local/nginx
    wget -c https://nginx.org/download/nginx-1.10.1.tar.gz
```

<Lines />

2. 安装 gcc(安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境)

```shell
    yum install gcc-c++
```

<Lines />

3. 安装 PCRE pcre-devel(Nginx 的 Rewrite 模块和 HTTP 核心模块会使用到 PCRE 正则表达式语法。这里需要安装两个安装包 pcre 和 pcre-devel。第一个安装包提供编译版本的库，而第二个提供开发阶段的头文件和编译项目的源代码。)

```shell
    yum install -y pcre pcre-devel
```

<Lines />

4. 安装 zlib(zlib 库提供了开发人员的压缩算法，在 Nginx 的各种模块中需要使用 gzip 压缩。)

```shell
    yum install -y zlib zlib-devel
```

<Lines />

5. 安装 Open SSL(ginx 不仅支持 http 协议，还支持 https（即在 ssl 协议上传输 http），如果使用了 https，需要安装 OpenSSL 库。)

```shell
    yum install -y openssl openssl-devel
```

<Lines />

6. 解压 nginx 压缩包并安装(如果需要开始 https 支持，这里请不要直接执行./configure，即不要直接执行该脚本，而是在该脚本后面加上 SSL 模块，请执行如下命令替代 ./confingure)

```shell
    tar -zxvf nginx-1.10.1.tar.gz
    cd nginx-1.10.1
    ./configure or ./configure --with-http_ssl_module
```

<Lines />

7. 编译安装 nginx(这里和 redis 的编译安装比较类似，首先在当前目录（/usr/local/nginx-version）进行编译。输入 make 即可)

```shell
    make && make install
```

<Lines />

8. 启动(进入 /usr/local/nginx/sbin 目录，输入./nginx 即可启动 nginx)

```shell
    cd /usr/local/nginx/sbin
    ./nginx

    ./nginx -s quit  或者 ./nginx -s stop // 关闭

    ./nginx -s reload // 重启

    ps aux|grep nginx // 查看

    vim /etc/rc.local 开机启动
    // 然后在底部增加 /usr/local/nginx/sbin/nginx

    // 修改配置文件
    vim nginx.conf
```
