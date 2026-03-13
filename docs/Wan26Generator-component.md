# Wan26Generator 组件说明文档

组件路径：`components/wan26/Generator.vue`  
用途：Wan 2.6 页的 AI 视频生成表单与预览区，支持 **Text To Video**、**Image To Video**、**Reference To Video** 三种模式。

---

## 一、区块标题与副标题

| 类型 | 原文 |
|------|------|
| 主标题 | Wan 2.6 AI Video Generator |
| 副标题 | Transform text prompts or images into cohesive multi-shot videos with smooth scene transitions, consistent characters, and synchronized audio — all powered by a unified AI video model. |

---

## 二、生成模式（Generation mode）

- **标签**: Generation mode
- **选项**（三个按钮）:
  - Text To Video
  - Image To Video
  - Reference To Video

---

## 三、Text To Video 表单

### 3.1 Prompt

| 项 | 原文 |
|----|------|
| 标签 | Prompt * |
| 说明 | Describe the scene, motion, camera, and style you want. |
| Inspiration Mode 标签 | Inspiration Mode |
| Inspiration Mode 说明 | More exploratory interpretation |
| 占位符 | Describe the video you want — scene, motion, camera, style (English or Chinese supported)... |
| 字数提示 | Supports both English and Chinese prompts |
| 字数显示 | `{{ form.text.prompt.length }}/1500`（maxlength 1500） |

### 3.2 Multi-Shot

| 项 | 原文 |
|----|------|
| 标签 | Multi-Shot |
| 说明 | Generate multi-shot sequences in one go |

### 3.3 Resolution

- **标签**: Resolution
- **选项**: 720P、1080P

### 3.4 Duration

- **标签**: Duration
- **选项**: 5s、10s、15s

### 3.5 Aspect ratio

- **标签**: Aspect ratio
- **选项**: 16:9、9:16、1:1、4:3、3:4（来自 `aspectOptions`）

---

## 四、Image To Video 表单

### 4.1 上传图片

| 项 | 原文 |
|----|------|
| 标签 | Upload image * |
| 空状态主文案 | Click to upload the first frame |
| 空状态副文案 | Supports JPEG / JPG / PNG / BMP / WEBP · 360–2000px · Max 5MB |
| 删除按钮 | ✕ |

### 4.2 Prompt

| 项 | 原文 |
|----|------|
| 标签 | Prompt * |
| 说明 | Describe how the still image should animate. |
| Inspiration Mode 说明 | More imaginative variations |
| 占位符 | Describe how the still image should animate — motion, camera moves, lighting changes... |
| 字数提示 | Supports both English and Chinese prompts |
| 字数显示 | `{{ form.image.prompt.length }}/1500` |

### 4.3 Multi-Shot

| 项 | 原文 |
|----|------|
| 标签 | Multi-Shot |
| 说明 | Create a sequence of shots from one image |

### 4.4 Resolution / Duration

- **Resolution**: 720P、1080P
- **Duration**: 5s、10s、15s  
- **Image 模式无 Aspect ratio 表单项**（内部固定 16:9）

---

## 五、Reference To Video 表单

### 5.1 参考视频 1

| 项 | 原文 |
|----|------|
| 标签 | Reference video 1 * |
| 空状态主文案 | Click to upload reference video |
| 空状态副文案 | Supports MP4 / MOV · 2–30s · Max 30MB |
| 删除按钮 | ✕ |
| 视频不支持时 | Your browser does not support video playback. |

### 5.2 参考视频 2（可选）

| 项 | 原文 |
|----|------|
| 标签 | Reference video 2 (optional) |
| 空状态主文案 | Click to upload optional reference |
| 空状态副文案 | Supports MP4 / MOV · 2–30s · Max 30MB |

### 5.3 Prompt

| 项 | 原文 |
|----|------|
| 标签 | Prompt * |
| 说明 | Use character1, character2 to reference your uploaded videos. |
| Inspiration Mode 说明 | Looser, more creative output |
| 占位符 | Use character1, character2 to refer to your videos (e.g., 'character1 singing, character2 dancing'). Always use character1 for the first video. |
| 字数提示 | Supports both English and Chinese prompts |
| 字数显示 | `{{ form.reference.prompt.length }}/1500` |

### 5.4 Multi-Shot

| 项 | 原文 |
|----|------|
| 标签 | Multi-Shot |
| 说明 | Story-driven multi-shot video output |

### 5.5 Resolution / Duration / Aspect ratio

- **Resolution**: 720P、1080P
- **Duration**: 5s、10s（仅两档，无 15s）
- **Aspect ratio**: 16:9、9:16、1:1、4:3、3:4（与 Text 模式相同逻辑，部分分辨率下 4:3、3:4 可能禁用）

---

## 六、提交与积分说明

| 项 | 原文 |
|----|------|
| 按钮文案（未加载） | 🎬 Generate Video |
| 按钮文案（加载中） | Generating... |
| 积分标签 | 动态显示 `creditCostLabel`（如 `100 Credits`、`1 Free` 等） |
| 底部说明 | Wan 2.6 pricing: credits are consumed based on resolution and duration. Multi-Shot uses the same tier. |

### 积分计算逻辑（script 内）

- **Text / Image 模式**  
  - 480P: 5s=100, 10s=200, 15s=300  
  - 720P: 5s=170, 10s=340, 15s=510  
  - 1080P: 5s=285, 10s=570, 15s=855  
- **Reference 模式**  
  - 480P: 5s=100, 10s=200  
  - 720P: 5s=170, 10s=340  
  - 1080P: 5s=285, 10s=570  
- 当 480P + 5s 且 `free_times > 0` 时显示为 `N Free`。

---

## 七、右侧预览区

| 项 | 原文 |
|----|------|
| 标题 | Your generated video will appear here. |
| 加载中文案 | Your video is being generated.<br/>You can check the result in your [dashboard](/profile) in about 5 minutes |
| 默认封面 alt | Wan 2.6 default preview |
| 配置摘要 - Mode | Mode |
| 配置摘要 - Resolution | Resolution |
| 配置摘要 - Duration | Duration |
| 配置摘要 - Aspect ratio | Aspect ratio |
| 下载按钮 | Download Video |
| 视频不支持时 | Your browser does not support video playback. |

### 预览区 Mode 显示（modeLabel）

- Text To Video
- Image To Video
- Reference To Video

---

## 八、默认资源（script）

| 变量 | 值 |
|------|-----|
| defaultPoster | https://cfsource.wan2video.com/wan2video/26/Wan-2-6.webp |
| defaultVideoSrc | https://cfsource.wan2video.com/wan2video/26/Wan-2-6.mp4 |

---

## 九、表单默认值（script reactive form）

| 模式 | 字段 | 默认值 |
|------|------|--------|
| text | prompt | '' |
| text | inspiration | false |
| text | multiShot | true |
| text | resolution | '720P' |
| text | duration | '5s' |
| text | aspect | '16:9' |
| image | prompt | '' |
| image | inspiration | false |
| image | multiShot | true |
| image | resolution | '720P' |
| image | duration | '5s' |
| reference | prompt | '' |
| reference | inspiration | false |
| reference | multiShot | true |
| reference | resolution | '720P' |
| reference | duration | '5s' |
| reference | aspect | '16:9' |

---

## 十、校验与 Toast / 错误文案（script）

| 场景 | 原文 |
|------|------|
| Prompt 为空 | Prompt is required / Prompt cannot be empty. |
| Image 模式未上传图 | Image is required for Image To Video mode / Please upload an image first. |
| Reference 模式未上传参考视频 1 | Reference video 1 is required / Please upload Reference video 1. |
| 分辨率或宽高比无效 | Invalid resolution or aspect ratio |
| 图片校验失败 | Image is invalid. Please follow the upload requirements. |
| 视频校验失败 | Video is invalid. Please follow the upload requirements. |
| 任务创建成功 | Video generation task created successfully! |
| 任务创建失败 | Failed to create task. |
| 积分不足（接口返回） | Credits is insufficient, Please recharge（会跳转 /pricing） |
| 用户用量超限 | insufficient user usage limit（会跳转 /pricing） |
| 轮询任务状态失败 | Failed to query task status. |
| 下载失败 | Failed to download video, please try again. |
| 图片上传失败 | Image upload failed. |

---

## 十一、预览标题占位（previewTitle 计算属性）

| 模式 | 无内容时默认文案 |
|------|------------------|
| text | Video preview generated based on text prompt words |
| image | Video preview generated based on the first frame image |
| reference | Video preview generated based on the reference video |

---

## 十二、分辨率与宽高比尺寸映射（getSizeByConfig）

- **720P**: 16:9 → 1280*720，9:16 → 720*1280，1:1 → 960*960，4:3 → 1088*832，3:4 → 832*1088  
- **1080P**: 16:9 → 1920*1080，9:16 → 1080*1920，1:1 → 1440*1440，4:3 → 1632*1248，3:4 → 1248*1632  

（Image 模式内部固定 aspect 为 16:9。）

---

## 十三、Aspect 禁用逻辑（isAspectDisabled）

- 当 **Resolution === '480P'** 时，**4:3** 和 **3:4** 禁用。  
- 当前代码中 Reference 模式对 4:3 / 3:4 的单独禁用已注释，仅按 480P 判断。

---

*文档根据 `components/wan26/Generator.vue` 当前实现整理，后续若改文案或逻辑请同步更新此 MD。*
