[English](README.md) · **简体中文**

> 英文版是规范版本。本页与 [README.md](README.md) 不一致时，以英文版为准。

<!-- translation-of: README.md sha256:685d40a8079bea02 -->

<!-- Source: Best-README-Template BLANK_README (Unlicense) — https://github.com/othneildrew/Best-README-Template -->
<a id="readme-top"></a>

# GoReactResourceManagementAdmin

一个 React-admin 单页管理面板，通过端口 8080 上的 JWT 鉴权 JSON API 进行身份验证，并根据登录用户是 SuperAdmin 还是普通 User，展示不同的一组用于管理客户端、任务、任务队列和 Web 服务的增删改查界面。

[![CI](https://github.com/anyingiit/GoReactResourceManagementAdmin/actions/workflows/ci.yml/badge.svg)](https://github.com/anyingiit/GoReactResourceManagementAdmin/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/anyingiit/GoReactResourceManagementAdmin)](LICENSE)

[报告问题](https://github.com/anyingiit/GoReactResourceManagementAdmin/issues/new?template=bug_report.yml) · [提出需求](https://github.com/anyingiit/GoReactResourceManagementAdmin/issues/new?template=feature_request.yml)

<details>
  <summary>目录</summary>
  <ol>
    <li><a href="#about-the-project">关于本项目</a></li>
    <li><a href="#getting-started">开始使用</a></li>
    <li><a href="#usage">用法</a></li>
    <li><a href="#contributing">参与贡献</a></li>
    <li><a href="#license">许可证</a></li>
    <li><a href="#contact">联系方式</a></li>
  </ol>
</details>

## 关于本项目

GoReactResourceManagementAdmin 是一个用 Vite 和 TypeScript 构建的 [react-admin](https://marmelab.com/react-admin/) 单页应用。它渲染哪些资源界面并非在构建期决定，而是在运行期决定：`src/App.tsx` 会读取 `src/authProvider.ts` 在登录后写入 `localStorage` 的 `role` 值，据此挂载 `SuperAdmin` 应用或 `User` 应用。`src/SuperAdmin.tsx` 注册了完整的资源集合——角色、用户、客户端、邀请码、客户端会话、任务与任务队列、服务、Web 服务类型、Web 服务以及内部服务；而 `src/User.tsx` 只为当前登录用户注册一个只读视图，用于查看其自己的 Web 服务及其结果。

上述每一个界面都通过 `src/dataProvider.ts` 进行读写，该文件调用位于 `http://localhost:8080/v1` 的 JSON API，并附带 `src/authProvider.ts` 从 `POST /v1/public/token` 获取的 Bearer 令牌。这两个文件都没有通过环境变量做成可配置项，地址是写死的——这也是为什么运行本项目本身就需要一个在该端口监听的后端服务。

计划中的功能与已知问题，见 [open issues](https://github.com/anyingiit/GoReactResourceManagementAdmin/issues)。

## 开始使用

### 环境要求

- Node.js，以及 Yarn —— 仓库提交的是 `yarn.lock`，而不是 `package-lock.json`
- `package.json` 中锁定的工具链：Vite 4、TypeScript 5、React 18 和 react-admin 4
- 一个正在运行的后端 JSON API 实例，本管理面板正是它的客户端，地址为 `http://localhost:8080/v1` —— `src/authProvider.ts` 和 `src/dataProvider.ts` 都把这个地址写死在代码里，没有它任何界面都不会显示真实数据

### 安装

```sh
git clone https://github.com/anyingiit/GoReactResourceManagementAdmin.git
cd GoReactResourceManagementAdmin
yarn install
```

## 用法

启动 Vite 开发服务器：

```sh
yarn dev
```

Vite 会打印一个本地地址；打开它，并使用后端 API 认可的账号登录。你最终看到的是完整的 SuperAdmin 资源集合，还是单一资源的 User 视图，取决于后端为该账号返回的 `role`，而不是本应用里的任何选择。

若要改为生成静态生产构建并在本地预览：

```sh
yarn build
yarn preview
```

## 参与贡献

欢迎参与。[CONTRIBUTING.md](CONTRIBUTING.md) 说明如何提交 issue 或 pull request，[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) 说明对所有参与者的行为要求。

请不要在公开的 issue 或 pull request 中报告安全问题。[SECURITY.md](SECURITY.md) 说明了私下报告的方式。

## 许可证

以 MIT 许可证分发。详见 [LICENSE](LICENSE)。

## 联系方式

项目地址：[https://github.com/anyingiit/GoReactResourceManagementAdmin](https://github.com/anyingiit/GoReactResourceManagementAdmin)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
