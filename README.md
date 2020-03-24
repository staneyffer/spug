<h1 align="center">Spug</h1>

<div align="center">

Spug是面向中小型企业设计的无 Agent的自动化运维平台，整合了主机管理、主机批量执行、主机在线终端、应用发布、任务计划、配置中心、监控、报警等一系列功能。

</div>


## Fork 功能介绍
### 主要特性
- 主机批量添加
- 添加执行引擎的概念（引擎类型支持运行python2 python3 shell, 后续可扩展为java等)
- 支持编写自定义引擎脚本(模板选择执行引擎, 运行时将模板内容传给引擎)


### 执行引擎技术实现
本质上将原来的命令发送到目标机器执行改为将需要执行的内容写入到目标机器的临时文件, 然后执行启动命名。

```bash
执行命令 + 执行引擎脚本路径 + 执行文件的路径
```
例如执行引擎类型为python2, 引擎内容为修改主机/etc/hosts的引擎的执行路径大致是：
```
python2  /tmp/spug/engine/python3/1584813680149/change_hosts.py /tmp/spug/exec/python3/1584813680149/hosts_content.py
```

其中引擎内容(```/tmp/spug/engine/python3/1584813680149/change_hosts.py```)和传递的模板内容(```/tmp/spug/exec/python3/1584813680149/hosts_content.py```)
都是提前写到目标机器

执行引擎的核心代码在 [spug_api/libs/engine.py](https://github.com/staneyffer/spug/blob/master/spug_api/libs/engine.py)


### 功能截图：
![主机批量添加1.jpg](https://my-blog-images.oss-cn-qingdao.aliyuncs.com/15850524484297703.jpg)

![主机批量添加验证用户密码.jpg](https://my-blog-images.oss-cn-qingdao.aliyuncs.com/15850524484894800.jpg)

![执行引擎添加.jpg](https://my-blog-images.oss-cn-qingdao.aliyuncs.com/15850524483825890.jpg)


![模板新建选择执行引擎.jpg](https://my-blog-images.oss-cn-qingdao.aliyuncs.com/15850524481352757.jpg)


![执行任务之shell.jpg](https://my-blog-images.oss-cn-qingdao.aliyuncs.com/15850524483308611.jpg)

![执行任务之python2.jpg](https://my-blog-images.oss-cn-qingdao.aliyuncs.com/15850524482943866.jpg)

![执行任务选择多种执行引擎的类型.jpg](https://my-blog-images.oss-cn-qingdao.aliyuncs.com/15850524482601126.jpg)


![执行任务例子之hosts修改.jpg](https://my-blog-images.oss-cn-qingdao.aliyuncs.com/15850524482118884.jpg)




Fork功能介绍完毕

#Spug原wiki

- 演示地址：https://demo.spug.dev
- 官网地址：https://www.spug.dev
- 使用文档：https://www.spug.dev/docs/about-spug/
- 更新日志: https://www.spug.dev/docs/change-log/
- 常见问题：https://www.spug.dev/docs/faq/

## 演示环境

演示地址：https://demo.spug.dev
```
演示账号: admin 
演示密码：spug
```

## 特性

- **批量执行**: 命令可以在线批量执行
- **在线终端**: 主机支持浏览器在线终端登录
- **任务计划**: 灵活的任务计划
- **发布部署**: 支持自定义发布流程
- **配置中心**: 支持KV、文本、json等格式的配置
- **监控中心**: 支持站点、端口、进程、自定义等监控
- **报警中心**: 支持短信、邮件、钉钉、微信等报警方式
- **优雅美观**: 基于 Ant Design 的UI界面


## 环境

* Python 3.6+
* Django 2.2
* Node 12.14
* React 16.11

## 安装

[官网文档](https://spug.dev/docs/install/)

更多使用帮助请参考 [使用文档](https://www.spug.dev/docs/host-manage/)。

## 预览

#### 主机批量执行
![image](http://image.qbangmang.com/host-exec-2.0.png
)

#### 主机在线终端
![image](http://image.qbangmang.com/host-console-2.0.png)

#### 应用管理
![image](http://image.qbangmang.com/app-2.0.png)
![image](http://image.qbangmang.com/app-apply-2.0.png)

#### 任务管理
![image](http://image.qbangmang.com/task-2.0.png)
![image](http://image.qbangmang.com/task-detail-2.0.png)
#### 配置管理(支持KV,txt,json等格式)
![image](http://image.qbangmang.com/service-conf-2.0.png)
![image](http://image.qbangmang.com/service-conf-json-2.0.png)
![image](http://image.qbangmang.com/conf-history-2.0.png)

#### 监控报警
![image](http://image.qbangmang.com/monitor-alarm-2.0.png)
![image](http://image.qbangmang.com/monitor-add-2.0.png)

#### 角色权限
![image](http://image.qbangmang.com/role-2.0.png)

## 更多功能
如果你还想 Spug 支持新的特性，请点击打开 [FeatHub](https://feathub.com/openspug/spug) 进行投票，我们将综合考虑投票结果等因素来确定开发的优先级。

[![Feature Requests](https://feathub.com/openspug/spug?format=svg)](https://feathub.com/openspug/spug)


## 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我们一起共建 :smiley:：

- 在你的公司使用 Spug。
- 通过 [Issue](https://github.com/openspug/spug/issues) 报告 bug 或进行咨询。
- 提交 [Pull Request](https://github.com/openspug/spug/pulls) 改进Spug的代码。

## 开发者群
#### QQ群号: 783951751
![image](http://image.qbangmang.com/spug.png)

## License & Copyright
[MIT](https://opensource.org/licenses/MIT)
