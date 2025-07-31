<!--
  @x2d/azure-func-http
  Originally created by Kamil Myśliwiec (https://github.com/kamilmysliwiec)
  Currently maintained by X2D (https://github.com/X2Digital)
  
  This package is a community-maintained fork of the NestJS Azure Functions HTTP adapter,
  preserving the original work while ensuring continued support and updates.
-->

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Azure Functions](https://code.visualstudio.com/tutorials/functions-extension/getting-started) HTTP module for [Nest](https://github.com/nestjs/nest).

## Maintainership

This package is currently maintained by [X2D](https://github.com/X2Digital) as a community fork. We are committed to keeping this package updated, secure, and functional for the NestJS and Azure Functions community.

### Original Work

This package was originally created and authored by [Kamil Myśliwiec](https://twitter.com/kammysliwiec), the creator of NestJS. We maintain this fork with deep respect for the original work and continue to build upon the solid foundation provided.

## Installation

Using the Nest CLI:

```bash
$ nest add @x2d/azure-func-http
```

Example output:

```bash
✔ Installation in progress... ☕
CREATE /.funcignore (66 bytes)
CREATE /host.json (23 bytes)
CREATE /local.settings.json (116 bytes)
CREATE /proxies.json (72 bytes)
CREATE /main/function.json (294 bytes)
CREATE /main/index.ts (287 bytes)
CREATE /main/sample.dat (23 bytes)
CREATE /src/main.azure.ts (321 bytes)
UPDATE /package.json (1827 bytes)
```

## Tutorial

You can read more about this integration [here](https://trilon.io/blog/deploy-nestjs-azure-functions).

## Native routing

If you don't need the compatibility with `express` library, you can use a native routing instead:

```typescript
import { AzureHttpRouter } from '@x2d/azure-func-http';

const app = await NestFactory.create(AppModule, new AzureHttpRouter());
```

`AzureHttpRouter` is exported from `@x2d/azure-func-http`. Since `AzureHttpRouter` doesn't use `express` underneath, the routing itself is much faster.

## Additional options

You can pass additional flags to customize the post-install schematic. For example, if your base application directory is different than `src`, use `--rootDir` flag:

```bash
$ nest add @x2d/azure-func-http --rootDir app
```

Other available flags:

- `rootModuleFileName` - the name of the root module file, default: `app.module`
- `rootModuleClassName` - the name of the root module class, default: `AppModule`
- `skipInstall` - skip installing dependencies, default: `false`

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
