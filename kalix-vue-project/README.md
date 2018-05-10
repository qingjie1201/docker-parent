# kalix-vue-project

> use centos7 docker 构建kalix-vue-project镜像

前提：

```
git clone https://github.com/minikiller/kalix-vue-project.git
通过 windows npm run build 打包 kalix-vue-project 项目，生成 dist 替换文件
git clone https://github.com/qingjie1201/kalix-express-project.git
通过 windows npm install 安装 kalix-express-project 项目，替换文件
```

## 使用Dockerfile构建镜像

```
$ cd /home/vue-develop/project

$ git clone https://github.com/qingjie1201/docker-parent.git

$ docker build -t kalix-vue-project:v0.0.1 /home/vue-develop/project/docker-parent/kalix-vue-project
```

## 运行Docker镜像

```
$ docker run -d --name kalix-vue-project -p 8282:8282 -e "KALIX_SERVER_URL=http://192.168.0.221:8181" kalix-vue-project:v0.0.1

$ docker run -d --name kalix-vue-project -p 8282:8282 -p 3000:3000 -e "KALIX_SERVER_URL=http://192.168.0.221:8181" kalix-vue-project:v0.0.1
```

## 查看运行结果

```
$ docker ps
```

访问 http://192.168.0.227:8282
