<!-- Source: Best-README-Template BLANK_README (Unlicense) — https://github.com/othneildrew/Best-README-Template -->
<a id="readme-top"></a>

# GoReactResourceManagementAdmin

A React-admin single-page dashboard that authenticates against a JWT-based JSON API on port 8080 and shows a different set of CRUD screens for managing clients, tasks, task queues and web services depending on whether the signed-in user is a SuperAdmin or a plain User.

**English** · [简体中文](README.zh-CN.md)

[![CI](https://github.com/anyingiit/GoReactResourceManagementAdmin/actions/workflows/ci.yml/badge.svg)](https://github.com/anyingiit/GoReactResourceManagementAdmin/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/anyingiit/GoReactResourceManagementAdmin)](LICENSE)

[Report a bug](https://github.com/anyingiit/GoReactResourceManagementAdmin/issues/new?template=bug_report.yml) · [Request a feature](https://github.com/anyingiit/GoReactResourceManagementAdmin/issues/new?template=feature_request.yml)

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

GoReactResourceManagementAdmin is a [react-admin](https://marmelab.com/react-admin/) single-page app built with Vite and TypeScript. Which resource screens it renders is decided at runtime, not at build time: `src/App.tsx` reads the `role` value that `src/authProvider.ts` writes to `localStorage` after login, and mounts either the `SuperAdmin` app or the `User` app. `src/SuperAdmin.tsx` registers the full resource set -- roles, users, clients, invite codes, client sessions, tasks and task queues, services, web service types, web services and internal services -- while `src/User.tsx` registers only a read-only view of the signed-in user's own web services and their results.

Every one of those screens reads and writes through `src/dataProvider.ts`, which calls a JSON API at `http://localhost:8080/v1` and attaches the bearer token that `src/authProvider.ts` obtained from `POST /v1/public/token`. Neither file is configurable through an environment variable; the origin is hardcoded, which is why a working backend on that port is part of running this project at all.

See the [open issues](https://github.com/anyingiit/GoReactResourceManagementAdmin/issues) for planned features and known issues.

## Getting Started

### Prerequisites

- Node.js, and Yarn -- the repository commits `yarn.lock`, not a `package-lock.json`
- The toolchain pinned in `package.json`: Vite 4, TypeScript 5, React 18 and react-admin 4
- A running instance of the backend JSON API this admin panel is a client for, reachable at `http://localhost:8080/v1` -- `src/authProvider.ts` and `src/dataProvider.ts` both hardcode that origin, so no screen shows real data without it

### Installation

```sh
git clone https://github.com/anyingiit/GoReactResourceManagementAdmin.git
cd GoReactResourceManagementAdmin
yarn install
```

## Usage

Start the Vite development server:

```sh
yarn dev
```

Vite prints a local URL; open it and sign in with an account the backend API recognizes. Which resource screens you land on -- the full SuperAdmin set or the single-resource User view -- depends on the `role` the backend returns for that account, not on anything chosen in this app.

To produce a static production build instead, and preview it locally:

```sh
yarn build
yarn preview
```

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) for how to open an issue or a pull request, and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for the standards expected of everyone taking part.

Please do not report security issues in public issues or pull requests. [SECURITY.md](SECURITY.md) explains how to report them privately.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

Project link: [https://github.com/anyingiit/GoReactResourceManagementAdmin](https://github.com/anyingiit/GoReactResourceManagementAdmin)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
