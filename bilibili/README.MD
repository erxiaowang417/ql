# BilibiliTask
一个老牌的b站自动化项目，
@https://hub.docker.com/r/superng6/bilibili-helper
此项目支持docker、docker compose、云函数、GitLab CI/CD等多种方式，安装教程来源  公众号：少年歌行Pro 

#### 一、安装青龙面板
#### 二、为青龙面版安装openjdk

    docker exec -it qinglong bash
    cd scripts
    apk add openjdk8
   - 注释：
   
      qinglong是你的容器名，青龙面板项目的默认名字就是这个，如果你自定义过，对应修改；
      
      cd  scripts 指的是进入青龙面板的scripts文件夹（脚本目录），默认就是这个路径，如果自定义过路径对应修改
 
 #### 三、下载脚本文件备用
- 「BILIBILI-HELPER-v2.1.0.jar」
- 「config.json」
 
  - 打开config.json文件，首先修改账号信息和登录信息
  - 下方的名称（name）栏中找到“nav”
  - 点开nav文件，点击标头（header），找到cookie，右键点击选择“复制值”
  - nav文件中，找到usr-agent
 
 #### 四、配置青龙面板
 - 在青龙面板脚本目录中新建文件，命名为bili.sh
 
  写入如下代码，并保存
  
      java -jar /ql/scripts/BILIBILI-HELPER-v2.1.0.jar /ql/scripts/config.json
 - 在青龙面板中添加自动化任务
 
        task raw bili.sh
        10 10 * * *
        
  ##### 五、运行即可
