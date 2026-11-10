# 天水风物志

一份以甘肃天水为主题的六页个人网页作业。崖壁、庙宇、古城与早饭，全部原创撰写；页面之间一律使用相对路径，克隆到本地双击 `index.html` 即可浏览。

## 页面结构

| 文件 | 章次 | 内容 |
| --- | --- | --- |
| `index.html` | 卷首 | 分栏题签主图、卷首语、五章目录、天水速览 |
| `maijishan.html` | 章壹 | 麦积山石窟：沿革、时间轴、四幅图版 |
| `fuximiao.html` | 章贰 | 伏羲庙：中轴线图解、公祭大典、三幅图版 |
| `gucheng.html` | 章叁 | 南郭寺、玉泉观、胡氏民居、大地湾 |
| `shiwei.html` | 章肆 | 呱呱、面皮、浆水面、花牛苹果（支持按味型筛选） |
| `about.html` | 卷末 | 作业信息、工具清单、图片版权、数据来源 |

```
tianshui-fengwuzhi/
├── index.html
├── maijishan.html
├── fuximiao.html
├── gucheng.html
├── shiwei.html
├── about.html
├── css/style.css
├── js/main.js
├── images/          # 全部本地图片与 favicon
└── README.md
```

## 本地预览

直接双击 `index.html` 即可。若要用服务器方式预览（避免个别浏览器的本地文件限制）：

```bash
python -m http.server 8000
# 然后访问 http://localhost:8000/
```

## 发布到 GitHub Pages

1. 在 GitHub 新建仓库（例如 `tianshui-fengwuzhi`），不要勾选初始化 README。
2. 在本目录执行：

```bash
git init
git add .
git commit -m "天水风物志：六页个人网页"
git branch -M main
git remote add origin https://github.com/<你的用户名>/tianshui-fengwuzhi.git
git push -u origin main
```

3. 打开仓库 **Settings → Pages**，Source 选 `Deploy from a branch`，Branch 选 `main` / `(root)`，保存。
4. 等一两分钟，主页地址形如 `https://<你的用户名>.github.io/tianshui-fengwuzhi/`。

> 注意：`index.html` 必须在仓库根目录，Pages 才会自动作为首页；如果放进子文件夹，链接里就要带上文件夹名。

## 说明

- 图片来自公开报道与图库检索页（人民网、新华社、视觉中国、图虫创意、中新网等），仅用于课程作业演示，版权归原作者；替换时把同名文件放入 `images/` 即可，页面无需改动。
- 数据出处：天水市人民政府、甘肃省文物局、秦安县人民政府、甘肃省人民政府、敦煌研究院等公开页面，逐条列在 `about.html` 的「资料与来源」。
- 字体通过 CDN 加载思源宋体／思源黑体，断网时自动回退到系统宋体与黑体，页面不会变形。
