# Nawa Laugh

一个基于 Vite + React + TypeScript 的极简 MP4 播放页面。页面白底全屏展示 `naiwa.mp4`，点击页面可从头播放，底部提供播放/暂停和重播按钮。

## 本地运行

```powershell
cd "C:\Users\13771\Documents\AI面试\Vibe_Coding\Nawa Laugh"
npm run dev
```

如果 PowerShell 拦截 `npm` 脚本，可改用：

```powershell
cd "C:\Users\13771\Documents\AI面试\Vibe_Coding\Nawa Laugh"
npm.cmd run dev
```

## 视频文件放置位置

请把 MP4 放到：

```text
public/video/naiwa.mp4
```

前端代码引用路径固定为：

```text
/video/naiwa.mp4
```

不要写成 `/public/video/naiwa.mp4`。

## 构建

```powershell
cd "C:\Users\13771\Documents\AI面试\Vibe_Coding\Nawa Laugh"
npm run build
```

构建成功后会生成：

```text
dist/
```

可本地预览：

```powershell
npm run preview
```

## 部署到 Vercel

导入该项目后使用以下配置：

- Build Command: `npm run build`
- Output Directory: `dist`

如果 Vercel 询问框架，可选择 `Vite`。

部署前确认：

- `public/video/naiwa.mp4` 存在
- 代码里引用的是 `/video/naiwa.mp4`
- `npm run build` 本地通过

## 部署到 Netlify

使用以下配置：

- Build Command: `npm run build`
- Publish Directory: `dist`

## 常见排查

如果页面没有播放视频，请依次检查：

- `public/video/naiwa.mp4` 是否存在
- 代码引用是否为 `/video/naiwa.mp4`
- DevTools Network 里是否出现 `404`
- Console 是否有 `play()` Promise 错误
- MP4 编码是否被 Chrome / Edge 支持
