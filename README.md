# XSS-Phishing
xss钓鱼，cna插件配合php后端收杆

借鉴大佬们的想法，并结合实际情况，优化弹框，效果更加良好

## Usage:
搭建bobo.php, 路径为`http://www.xxx.com/bobo.php`

把test.js里的路径修改为真实路径

在php根目录新建botIPs.txt文件用于存储已上线ip

test.js可远程加载也可本地加载，修改xss内容即可

修改test.js里的下载地址为免杀exe的地址

使用cobalt strike 的agscript加载cna插件

*** ！！！需要更改cna内返回地址 ***

`./agscript [ip] [port] [username] [password] sendip.cna`

等待上线即可

## 致谢：
此项目借鉴如下:

\[timwhitez师傅]: https://github.com/timwhitez/Doge-XSS-Phishing

\[鸭王师傅]: https://github.com/TheKingOfDuck/XSS-Fishing2-CS

\[xq17师傅]: https://xz.aliyun.com/t/7958

## todo:
1. 在出口一致的情况下加入多个判断依据

2. 对x64与x86区分

## 🚀Star Trend
[![Stargazers over time](https://starchart.cc/timwhitez/Doge-XSS-Phishing.svg)](https://starchart.cc/timwhitez/Doge-XSS-Phishing)
