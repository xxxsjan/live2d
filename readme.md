### live2d-看板娘

[看板娘教程](https://www.xiaoweigod.com/share/2068.html)
[项目](https://github.com/stevenjoezhang/live2d-widget.git)
[api](https://github.com/fghrsh/live2d_api.git)


girls/autoload是自动加载脚本，

里面有两个函数，一个是异步加载本地文件loadExternalResource和初始化模型initWidget，

initWidget是异步引入的waifu-tips.js的一个方法，传三参数waifuPath，apiPath，cdnPath

waifuPath--鼠标移入，信息提示
apiPath--不用cdnPath的模型，用这个得
apiPath--没有自己的api的话，使用改api的模型
waifu-tips.js-loadWidget的自执行函数initModel，设置modelid即可改变默认显示的模型

api/model是模型文件夹
api/XuexiaoBan是血小板的模型
api/XuexiaoBan/xxb是血小板的模型之一
api/XuexiaoBan/xxb/expressions  表情
api/XuexiaoBan/xxb/motions   动作
api/XuexiaoBan/xxb/physics.json
api/XuexiaoBan/xxb/pose.json

loadlive2d("live2d", '模型对应的json文件')
