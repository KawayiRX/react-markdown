import {Button} from 'antd'
import {H1} from 'components/highlight/styles.tsx'
import {Space, Text} from 'components/styled'
import Image from 'components/image'
import Husky1 from 'assets/images/husky1.png'
import Husky2 from 'assets/images/husky2.png'
import Husky3 from 'assets/images/husky3.png'
import Husky4 from 'assets/images/husky4.png'

## 代码规范 (EditorConfig + Prettier + ESLint)

- 解决团队之间代码不规范导致的可读性差和可维护性差的问题。
- 解决团队成员不同编辑器导致的编码规范不统一问题。
- 提前发现代码风格问题，给出对应规范提示，及时修复。
- 减少代码审查过程中反反复复的修改过程，节约时间。
- 自动格式化，统一编码风格。

## 集成 EditorConfig 配置

<Button href="https://editorconfig.org/" type="link" target="_blank">Editorconfig</Button> 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

在项目根目录下增加 .editorconfig 文件：

```shell
# Editor configuration, see http://editorconfig.org

# 表示是最顶层的 EditorConfig 配置文件
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false


```

- VSCode 使用 EditorConfig 需要去插件市场下载插件 EditorConfig for VS Code 。

## 集成 Prettier 配置

<Button href="https://prettier.io/" type="link" target="_blank">Prettier</Button> 是一款强大的代码格式化工具 基本支持前端的所有文件格式。

1. 安装 Prettier

```shell
npm i prettier -D

```

2. 创建 Prettier 配置文件(在本项目根目录下创建 <Text type="danger">_.prettierrc_</Text> 文件。)

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "semi": false
}
```

3. 格式化所有文件

```shell
# 格式化所有文件（. 表示所有文件）
npx prettier --write .
```

- VSCode 编辑器使用 Prettier 配置需要下载插件 Prettier - Code formatter 并 setting.json 增加配置

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[mdx]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.markdownlint": true
  },
```

## 集成 ESLint 配置

<Button href="https://github.com/eslint/eslint" type="link" target="_blank">ESLint</Button>是一款用于查找并报告代码中问题的工具，并且支持部分问题自动修复。

```shell
# 安装
npm i eslint -D

# 配置 ESLint
npx eslint --init

# 根据选项配置如果下载依赖失败 手动安装
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-plugin-import eslint-plugin-vue -D

```

- VSCode 使用 ESLint 配置文件需要去插件市场下载插件 ESLint 。
- VSCode 在 settings.json 设置文件中，增加以下代码：

```json
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
 }

```

## 解决 Prettier 和 ESLint 的冲突

- eslint-plugin-prettier 和 eslint-config-prettier。
- <Text type="danger">eslint-plugin-prettier</Text> 将 Prettier 的规则设置到 ESLint 的规则中。
- <Text type="danger">eslint-config-prettier</Text> 关闭 ESLint 中与 Prettier 中会发生冲突的规则。

```shell
# 安装
npm i eslint-plugin-prettier eslint-config-prettier -D

```

在 .eslintrc.js 添加 prettier 插件

```js
module.exports = {
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ]
}
```

## 集成 husky 和 lint-staged

虽然在项目中集成了 ESLint 和 Prettier 代码检查工具可以保证一定代码质量，可是有时候开发开发者还是会禁用掉或者忽略代码检查，所以需要在代码提交阶段也进行检查

** <Button href="https://github.com/typicode/husky" type="link" target="_blank">husky</Button> Git Hook 工具，可以设置在 git 各个阶段（pre-commit、commit-msg、pre-push 等）触发我们的命令。**

** <Button href="https://github.com/okonet/lint-staged" type="link" target="_blank">lint-staged </Button> 在 git 暂存的文件上运行 linters。**

- ## 配置 husky

  - 使用 <Text type="danger">husky-init</Text> 命令快速在项目初始化一个 husky 配置。

  ```shell
  npx husky-init && npm install
  ```

  1. 安装 husky 到开发依赖<br/>
     <Image src={Husky1}/>
  2. 在项目根目录下创建 .husky 目录<br/>
     <Image src={Husky2}/>
  3. 在 .husky 目录创建 pre-commit hook，并初始化 pre-commit 命令为 npm test<br/>
  4. 修改 <Text type="danger">package.json</Text> 的 scripts 增加 <Text type="danger">"prepare": "husky install"</Text><br/>
     <Image src={Husky3}/>

husky 包含很多 hook（钩子），常用有：<Text type="danger">pre-commit</Text>、<Text type="danger">commit-msg</Text>、<Text type="danger">pre-push</Text>。这里，我们使用 pre-commit 来触发 ESLint 命令。

```shell
# 修改 .husky/pre-commit hook 文件的触发命令：
eslint --fix ./src --ext .tsx,.js,.ts
# 上面这个 pre-commit hook 文件的作用是：当我们执行 git commit -m "xxx" 时，会先对 src 目录下所有的 .tsx.js、.ts  文件执行 eslint --fix 命令，如果 ESLint 通过，成功 commit，否则终止 commit。
```

- 但是又存在一个问题：有时候我们明明只改动了一两个文件，却要对所有的文件执行 eslint --fix。假如这是一个历史项目，我们在中途配置了 ESLint 规则，那么在提交代码时，也会对其他未修改的 “历史” 文件都进行检查，可能会造成大量文件出现 ESLint 错误，显然不是我们想要的结果。
- 我们要做到只用 ESLint 修复自己此次写的代码，而不去影响其他的代码。所以我们还需借助一个神奇的工具 **lint-staged**

  - 安装

  ```shell
  npm i lint-staged -D

  ```

  - 在 package.json 里增加 lint-staged 配置项

  ```json
   // 这行命令表示：只对 git 暂存区的 .tsx.js、.ts 文件执行 eslint --fix。
  "lint-staged": {
    "*.{tsx,js,ts}": "eslint --fix"
  },

  ```

  - 修改 .husky/pre-commit hook 的触发命令为：<Text type="danger">npx lint-staged</Text><br/>
    <Image src={Husky4}/>

## 提交规范

- 多人协作的项目中，在提交代码这个环节，也存在一种情况：不能保证每个人对提交信息的准确描述，因此会出现提交信息紊乱、风格不一致的情况。
- 目前流行的提交规范是 Angular 项目提交规范<Button href="https://github.com/angular/angular/commits/master" type="link" target="_blank">Angular 项目的提交记录</Button>

# commit message 格式规范

commit message 由 Header、Body、Footer 组成。

```jsx
<Header>

<Body>

<Footer>

```

## Header 部分包括三个字段 type（必需）、scope（可选）和 subject（必需）。

# type

| 值       | 描述                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增一个功能                                                                           |
| fix      | 修复一个 Bug                                                                           |
| docs     | 文档变更                                                                               |
| refactor | 代码重构                                                                               |
| style    | 代码格式（不影响功能，例如空格、分号等格式修正）                                       |
| perf     | 改善性能                                                                               |
| test     | 测试                                                                                   |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具                                                                 |
| chore    | 代码回退                                                                               |

# scope 用于指定本次 commit 影响的范围。scope 依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。（scope 可省略）

# subject 是本次 commit 的简洁描述，

## Body

# body 是对本次 commit 的详细描述，可以分成多行。（body 可省略）

## Footer(项目开发可以省略)

- 如果本次提交的代码是突破性的变更或关闭缺陷，则 Footer 必需，否则可以省略。
  当前代码与上一个版本有突破性改变，则 Footer 以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动的理由。
- 关闭缺陷
  如果当前提交是针对特定的 issue，那么可以在 Footer 部分填写需要关闭的单个 issue 或一系列 issues。

```shell
fix(compile): couple of unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

Closes #392
Breaks foo.bar api, foo.baz should be used instead

```

**规范 commit message 的好处**

- 首行就是简洁实用的关键信息，方便在 git history 中快速浏览。
- 具有更加详细的 body 和 footer，可以清晰的看出某次提交的目的和影响。
- 可以通过 type 过滤出想要查找的信息，也可以通过关键字快速查找相关提交。
- 可以直接从 commit 生成 change log。

## 集成 Commitizen 实现规范提交

Commitizen 是一个帮助撰写规范 commit message 的工具。它有一个命令行工具 cz-cli。

# 安装 Commitizen

```shell
npm install commitizen -D
```

# 初始化项目

成功安装 Commitizen 后，我们用 **cz-conventional-changelog** 适配器来初始化项目：

```shell
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

这行命令做了两件事：

- 安装 cz-conventional-changelog 到开发依赖（devDependencies）
- 安装 cz-conventional-changelog 到开发依赖（devDependencies）

```json
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```

# 使用 Commitizen

- 以前我们提交代码都是 git commit -m "xxx"，现在改为 git cz，然后按照终端操作提示，逐步填入信息，就能自动生成规范的 commit message。<br/>
  <Image src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5bc364437b54bad9946fd43daaf10e7~tplv-k3u1fbpfcp-watermark.awebp"/><br/>
  <Image src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/39d3441db8f54398b8344c803ef1325e~tplv-k3u1fbpfcp-watermark.awebp" />

由于都是英文所以改用**cz-customizable**

```shell
npx commitizen init cz-customizable --save-dev --save-exact --force
```

- 安装 cz-customizable 到开发依赖（devDependencies）

```json
"devDependencies": {
  "cz-customizable": "^6.3.0",
},

```

- 修改 package.json 中的 config.commitizen 字段为：

```json
"config": {
  "commitizen": {
    "path": "./node_modules/cz-customizable"
  }
}
```

## 使用 cz-customizable

在项目根目录下创建 .cz-config.js 文件，然后按照官方提供的<Button type="link" href="https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js" target="_blank">示例</Button>来配置。

```js
module.exports = {
  // type 类型（定义之后，可通过上下键选择）
  types: [
    { value: 'feat', name: 'feat:     新增功能' },
    { value: 'fix', name: 'fix:      修复 bug' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式（不影响功能，例如空格、分号等格式修正）' },
    { value: 'refactor', name: 'refactor: 代码重构（不包括 bug 修复、功能新增）' },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     添加、修改测试用例' },
    {
      value: 'build',
      name: 'build:    构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）'
    },
    { value: 'ci', name: 'ci:       修改 CI 配置、脚本' },
    { value: 'chore', name: 'chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）' },
    { value: 'revert', name: 'revert:   回滚 commit' }
  ],

  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['element-ui', '对 element-ui 的调整'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['auth', '对 auth 修改'],
    ['other', '其他修改'],
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
  // allowCustomScopes: true,

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // 针对每一个 type 去定义对应的 scopes，例如 fix
  /*
  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'style' },
      { name: 'e2eTest' },
      { name: 'unitTest' }
    ]
  },
  */

  // 交互提示信息
  messages: {
    type: '确保本次提交遵循 Angular 规范！\n选择你要提交的类型：',
    scope: '\n选择一个 scope（可选）：',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入自定义的 scope：',
    subject: '填写简短精炼的变更描述：\n',
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行：\n',
    breaking: '列举非兼容性重大的变更（可选）：\n',
    footer: '列举出所有变更的 ISSUES CLOSED（可选）。 例如: #31, #34：\n',
    confirmCommit: '确认提交？'
  },

  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: ['feat', 'fix'],

  // 跳过要询问的步骤
  // skipQuestions: ['body', 'footer'],

  // subject 限制长度
  subjectLimit: 100,
  breaklineChar: '|' // 支持 body 和 footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
}
```

# 集成 commitlint 验证提交规范

由于只在项目上做了约束，也可以进行忽略所以集成 commit 检查

- # 安装 commitlint

```shell
npm i @commitlint/config-conventional @commitlint/cli -D
```

- # 配置 commitlint

  - 创建 commitlint.config.js 文件 在项目根目录下创建 commitlint.config.js 文件

  ```js
  module.exports = { extends: ['@commitlint/config-conventional'] }
  ```

  - 使用 husky 的 commit-msg hook 触发验证提交信息的命令
    我们使用 husky 命令在 .husky 目录下创建 commit-msg 文件，并在此执行 commit message 的验证命令。

  ```shell
  #!/bin/sh
  . "$(dirname "$0")/\_/husky.sh"

    npx --no-install commitlint --edit

  ```
