# most-people.github.io

本仓库用于将 `https://most-people.github.io/` 的访问直接跳转到
`https://most.red/` 首页。

所有旧路径统一通过 `404.html` 跳到首页，不再维护旧页面或逐路径映射；
旧查询参数与锚点不传递到新站。浏览器使用 JavaScript 立即跳转，
禁用 JavaScript 时由零秒刷新兜底，页面同时保留手动访问链接。

实际内容统一在 `most.red` 仓库维护。
