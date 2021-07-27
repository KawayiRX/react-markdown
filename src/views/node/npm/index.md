import {H1} from 'components/highlight/styles.tsx'
import {Space, Text} from 'components/styled'
import Image from 'components/image'

<H1>概述</H1>

- package.json 文件是一个 JSON 对象，定义了当前项目所需要的各种模块信息，以及项目的配置信息。

<H1>name</H1>

- name 字段定义项目名称,是必填项。
- name 不能以 "."(点) 或者 "\_"(下划线) 开头。
- name 中不能包含大写字母。。
- 名称会被添加到 URL 中因此不能包含任何非 URL 安全字符
- npm 官方建议我们不要使用与核心节点模块相同的名称。不要在名称中加 js 或 node。如果需要可以使用 engines 来指定运行环境。
- 一个 name 可以用 scope 来指定一个前缀，比如 @myorg/mypackage，可以参考 <a href="https://docs.npmjs.com/misc/scope"> npm-scope。</a>。

<H1>version</H1>

- version 一般的格式是 x.x.x。是项目的版本
  - 第一部分为主版本号，<Text type="danger">变化了表示有了一个不兼容上个版本的大更改</Text>。
  - 第二部分为次版本号，<Text type="danger">变化了表示增加了新功能，并且可以向后兼容。</Text>
  - 第三部分为修订版本号，<Text type="danger">变化了表示有 bug 修复，并且可以向后兼容。</Text>
  - 第四部分为日期版本号加希腊字母版本号，<Text type="danger">希腊字母版本号共有五种，分别为 base、alpha、beta 、RC 、 release</Text>
    - Base: 此版本表示该软件仅仅是一个假页面链接，通常包括所有的功能和页面布局，但是 页面中的功能都没有做完整的实现，只是做为整体网站的一个基础架构。
    - Alpha: 软件的初级版本，表示该软件在此阶段以实现软件功能为主，通常只在软件开发者 内部交流，一般而言，该版本软件的 Bug 较多，需要继续修改，是测试版本。测试 人员提交 Bug 经开发人员修改确认之后，发布到测试网址让测试人员测试，此时可 将软件版本标注为 alpha 版。
    - Beta: 该版本相对于 Alpha 版已经有了很大的进步，消除了严重错误，但还需要经过多次 测试来进一步消除，此版本主要的修改对象是软件的 UI。修改的的 Bug 经测试人 员测试确认后可发布到外网上，此时可将软件版本标注为 beta 版。
    - RC：该版本已经相当成熟，基本上不存在导致错误的 Bug，与即将发行的正式版本相差无几。
    - Release 该版本意味 “最终版本”，在前面版本的一系列测试版之后，终归会有一个正式的版本，是最终交付用户使用的一个版本。该版本有时也称标准版

<Space />

<Image src="https://img-blog.csdnimg.cn/20190118111447199.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDgxNzExNQ==,size_16,color_FFFFFF,t_70" width={300}/>

<H1>description</H1>

- description 是一个字符串，项目描述

<H1>keywords </H1>

- 是一个字符串组成的数组，有助于人们在 npm 库中搜索的时候发现你的模块。

<H1>homepage</H1>

- 项目的主页地址。

<H1>bugs</H1>

- bugs 用于项目问题的反馈 issue 地址或者一个邮箱。

<H1>license</H1>

- license 是当前项目的协议，让用户知道他们有何权限来使用你的模块，以及使用该模块有哪些限制。

<H1>author&contributors </H1>

- author 是一个人，contributors 是一些人的数组。person 是一个对象，拥有必须的 name 字段和可选的 url 和 email 字段，像这样：

```json

{
    "name": "Barney Rubble",
    "email": "b@rubble.com",
    "url": "http://barnyrubble.tumblr.com/"
}

// 或者
{"author": "Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"}

```

<H1>files</H1>

- files 字段是一个被项目包含的文件名数组，如果你在里面放一个文件夹名，那么这个文件夹中的所有文件都会被包含进项目中 (除非是那些在其他规则中被忽略的文件)。
- 你还可以在包的根目录或子目录下提供一个 ".npmignore" 文件来忽略项目包含文件，即使这些文件被包含在 files 字段中。.npmignore 文件和.gitignore 的功能很像。

```json
"files": [
    "dist",
    "lib",
    "es"
],
```

<H1>main</H1>

- 指定项目入口文件，假如模块名为'foo',当使用者使用 require('foo'), 则 main 字段指定的模块导出对象会被返回。

<H1>bin</H1>

- 一个可执行程序的命令和本地文件名的映射关系。
- 这需要在你的 package.json 中提供一个 bin 字段，它是一个命令名和本地文件名的映射。在安装时，如果是全局安装，npm 将会使用符号链接把这些文件链接到 prefix/bin，如果是本地安装，会链接到./node_modules/.bin/。

```json
{
  "bin": {
    "myapp": "./bin/index.js"
  }
}
```

- 这样当安装 myappnpm 会从 index.js 创建一个到 /usr/local/bin/myapp 的符号链接 (这使你可以直接在命令行执行 myapp)。

<H1>repository</H1>

- 指明你的代码被托管在何处，这对那些想要参与到这个项目中的人来说很有帮助。如果 git 仓库在 github 上，用 npm docs 命令将会找到你。

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/npm/npm.git"
  }
}
```

- url 应该是公开且可用的 (可能是只读的)，这个 url 应该可以被版本控制系统不经修改地处理。不应该是一个在浏览器中打开的 html 项目页面，这个 url 是给计算机使用的。

```json
"repository": "npm/npm"
"repository": "gist:11081aaa281"
"repository": "bitbucket:example/repo"
"repository": "gitlab:another/repo"
```

<H1>scripts</H1>

- scripts 字段是一个由脚本命令组成的字典，这些命令运行在包的各个生命周期中。这里的键是生命周期事件名，值是要运行的命令。可以参考 npm-scripts 获取配置 scripts 的更多信息。

<H1>config</H1>

- config 字段是一个对象，可以用来配置包脚本中的跨版本参数，比如如下这个实例：

```json
{
  "name": "foo",
  "config": {
    "port": "8080"
  }
}
```

- 然后有一个 start 命令引用 npm_package_config_port 环境变量，用户也可以用如下方式改写：<a href="https://docs.npmjs.com/misc/config">npm-config </a> <a href="https://docs.npmjs.com/misc/scripts">npm-script </a>

```json
npm config set foo:port 8001
```

<H1>dependencies</H1>

- 指定了项目上线依赖包, 以及包的版本 <a href="https://docs.npmjs.com/misc/semver">semver</a>

## version 依赖版本

```json
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl"
  }
}
```

## URLs 作为依赖项

- 可以在 version 上指定一个压缩包的 url。
- 当执行 npm install 时这个压缩包会被下载并且安装到本地。

## Git URLs 作为依赖项

```shell
git://github.com/user/project.git#commit-ish
git+ssh://user@hostname:project.git#commit-ish
git+ssh://user@hostname/project.git#commit-ish
git+http://user@hostname/project/blah.git#commit-ish
git+https://user@hostname/project/blah.git#commit-ish
```

## 本地路径

- 从版本 2.0.0 开始你可以提供一个包的本地路径。本地路径可以在你使用 npm install -S 或 npm install --save 时被保存，

```json
{
  "name": "baz",
  "dependencies": {
    "bar": "file:../foo/bar"
  }
}
```

<H1>devDependencies</H1>

- 项目开发阶段依赖模块

<H1>engines</H1>

- 你可以指定 node 的工作版本：和 dependencies 类似，如果你不指定一个 node 版本 (或者你用 '\*' 指定)，则任何一个 node 版本都可以。

```json
{ "engines": { "node": ">=0.10.3 <0.12" } }
```

<H1>private</H1>

- 如果你在包的 package.json 中设置 "private": true，则 npm 会拒绝发布它。

<H1>peerDependency </H1>

- 使各模块依赖相同的依赖项，避免重复下载相同依赖

```md
.
├── helloWorld
│ └── node_modules
│ ├── packageA
│ ├── plugin1
│ │ └── nodule_modules
│ │ └── packageA
│ └── plugin2
│ │ └── nodule_modules
│ │ └── packageA
```

- 使用

```md
.
├── helloWorld
│ └── node_modules
│ ├── packageA
│ ├── plugin1
│ └── plugin2
```
