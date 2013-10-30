# Piny UI
一个符合Web标准的前端框架。兼容 Mac/Windows 下的 IE6+ / Firefox / Google Chrome 浏览器。 

## 一、目录结构

```
`.
├── src                      … PinyUI 所有源文件
├── docs                     … 文档
├── server                   … 运行文档的服务器程序
├── server.js                … 运行整个文档实例 node server.js
└── readme.md                … 说明文档
````

## 二、开发规范
---

### 命名规范

1. 文件和目录名只能包含 [a-z\d\-]，并以英文字母开头
2. 首选合适的英文单词 
3. data api 命名为小写并用连字符，如 data-trigger-type


### 目录结构

整体的目录结构。

```
pinyui
  -- assets                   存放组件用到的 img 等文件
       -- css
       -- js
       -- images
  -- docs                     markdown 文档，除了 README 的其他文档
	  -- dpl                       设计模式库
  		-- base				
  			-- Reset Style		
  			-- Common Style
        -- Helper Classes
  			-- Base Style
  			-- Layout Style
  			-- Print Style
  			-- Template
  			-- Typo
        -- Media Queries
        -- CSS3 Animate
  		-- ui   
        -- simple-ui
          -- Tables
          -- Forms
          -- Buttons
          -- Images
          -- Icon Fonts
  			-- complex-ui

            box区块
            button按钮
            button-dropdown按钮菜单
            form表单
            list列表
            nav导航
            pager分页
            poptip气泡
            tab标签页
            table表格
            tipbox提示框
            tiptext提示文本
            select下拉框
            loading加载中
            step步骤

            . List
            2. Alert
            3. Modal
            4. Tab
            5. Head / Search
            6. Button
            7. Form
            8. media
            9. pager
            10. box
            11. note

            下拉菜单
            按钮组
            按钮式下拉菜单
            输入框组
            导航
            导航条
            面包屑导航
            分页
            标签
            徽章
            大屏幕介绍
            页面标题
            缩略图
            警告框
            进度条
            媒体对象
            列表组
            面版
            Well

          
      -- solutions
	  -- fed-guidelines
			-- Work Flow
			-- Web Standard
			-- Accessibility
			-- WPO		网站性能优化
			--        网站安全
	  -- wiki
			--
    -- build 构建模块和样式库 

    -- tools 工具

  -- examples                 有代表性的组件演示
       -- grid
       -- signin
       -- carousel
       -- navbar
       -- ...
  -- dist                     Grunt 构建生成代码
       -- css
       -- js
       -- fonts
  -- src                      存放 js, css,字体库文件
       -- js
	     -- overlay
	     -- tabs
	     -- tooltip
	     -- tree
	     -- form
	     -- calendar 
	     -- menu
	     -- editor
	     -- select
	     -- loader
	     -- cookie
       -- less
             -- 
       -- stylus
             -- pinyui.styl
	     -- buttons.styl
       -- fonts
  -- server		      网站模板服务运行
  -- tests                    单元测试
       -- overlay-spec.js
       -- dialog-spec.js
  -- build                    Java 构建生成代码
  -- tools                    Nodejs & Java 自动化部署工具
       --                     ant
       --                     jasmine
       --                     uglify
       --                     yuicompressor

  -- HISTORY.md               版本更新说明
  -- README.md                组件总体说明
  -- CONTRIBUTING.md          贡献代码和共同维护
  -- package.json             Grunt 自动化部署配置文件
  -- Gruntfile.js
  -- build.xml
  -- build.bat
  -- .gitignore               git 忽略某些文件
  -- .travis.yml              travis 持续集成的配置
  -- server.js                node server.js 启运服务
```

