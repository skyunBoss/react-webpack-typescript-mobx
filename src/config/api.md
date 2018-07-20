状态码       |说明
------------|-----------
************|***********
************|***********

## 1. 资源

#### 1.1 获取资源列表
> 请求方式：GET
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
orgName     |否         |单位名称
pageNum      |否        |页数
limit        |否      |条数

##### 返回参数说明

字段              |字段说明
------------|-----------
id               |资源ID
orgName              |单位名称
trade               |行业类别
count               |网站数量
orgAddress               |单位地址

```json  
{
  "count": '', //总条数
  "total": '', //当前第几页
  "data": [{
      id: '',
      orgName: '',
      trade: '',
      count: '',
      orgAddress: ''
  }],
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 1.2 删除资源列表
> 请求方式：Delete
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
id          |是    |资源ID

##### 返回参数说明

字段             |字段说明
------------|-----------
id              |资源ID

```json  
{
  "data": {
      id: []
  },
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 1.3 获取资源详情
> 请求方式：GET
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
id          |是     |资源ID

##### 返回参数说明

字段              |字段说明
------------|-----------
id              |资源ID
orgName              |单位名称
trade              |行业类别
tradeID              |行业类别ID
superior              |上级资源
superiorID              |上级资源ID
prison               |监督单位
contact               |联系人
job               |职务
tel               |手机号
mail               |邮箱
orgAddress               |单位地址

```json  
{
  "data": {
      id: '',
      orgName: '',
      trade: '',
      superior: '',
      count: '',
      prison: '',
      contact: '',
      job: '',
      tel: '',
      mail: '',
      orgAddress: ''
  },
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 1.4 新增 / 修改资源列表
> 请求方式：POST / PUT
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
orgName       |是       |单位名称
tradeID          |是    |行业类别
superiorID     |否         |上级资源
prison        |否       |监督单位
contact      |否         |联系人
job       |否        |职务
tel       |否        |手机号
mail       |否        |邮箱
orgAddress    |是           |单位地址

##### 返回参数说明

```json  
{
  "data": [],
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 1.5 获取机构结构
> 请求方式：POST
请求URL ：[](#)

##### 请求参数说明
字段       |必选       |字段说明
------------|------------|-----------
userID       |是       |用户ID

##### 返回参数说明

```json  
{
  "data": {
      level1: {
          id: '',
          name: '苏州市公安局',
          level2: [{
              id: '',
              name: '吴中分局',
              level3: [{
                  id: '',
                  name: '指挥中心'
              }, {
                  id: '',
                  name: '办公室（外事处）'
              }, {
                  id: '',
                  name: '装备财务处'
              }, {
                  id: '',
                  name: '治安管理处'
              }]
          }, {
              id: '',
              name: '园区分局',
              level3: [{
                  id: '',
                  name: '指挥中心'
              }, {
                  id: '',
                  name: '办公室（外事处）'
              }, {
                  id: '',
                  name: '装备财务处'
              }, {
                  id: '',
                  name: '治安管理处'
              }]
          }, {
              id: '',
              name: '昆山分局',
              level3: [{
                  id: '',
                  name: '指挥中心'
              }, {
                  id: '',
                  name: '办公室（外事处）'
              }, {
                  id: '',
                  name: '装备财务处'
              }, {
                  id: '',
                  name: '治安管理处'
              }]
          }]
      }
  },
  "code": "200",
  "msg": "SUCCESS"
}
```

## 2.站点

#### 2.1 获取站点列表
> 请求方式：GET
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
resoureID     |否         |资源ID
siteName     |否         |站点名称
pageNum    |否          |页数
limit       |否       |条数

##### 返回参数说明

字段              |字段说明
------------|-----------
id               |站点ID
siteName               |站点名称
orgName               |所属单位
siteDomain               |域名
monitorModel               |监控模板
warningGroup               |报警组
createTime	               |创建时间

```json  
{
  "count": '', //总条数
  "total": '', //当前第几页
  "data": [{
      id: '',
      siteName: '',
      orgName: '',
      siteDomain: '',
      monitorModel: '',
      warningGroup: '',
      createTime: ''
  }],
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 2.2 删除站点
> 请求方式：Delete
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
id       |是        |站点ID

##### 返回参数说明

```json  
{
  "data": [],
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 2.3 获取站点详情
> 请求方式：GET
请求URL ：[](#)

##### 请求参数说明
字段       |必选       |字段说明
------------|------------|-----------
id       |是        |站点ID

##### 返回参数说明
字段       |必选       |字段说明
------------|------------|-----------
siteName     |是         |站点名称
resoure     |是         |所属资源
resoureID     |是         |所属资源ID
siteDomain    |是          |域名
siteSafeLevel   |否           |安全等级
siteIcpCode     |否         |Icp备案号
siteIpList      |否        |IP列表 
siteDesc        |否      |站点介绍 
siteOsVersion    |否          |操作系统及版本 
sitePort          |否    |主要协议/端口 
siteAddress      |否        |物理位置 
siteOperator     |否         |所属运营商 
siteOperatorMan     |否         |联系人 
siteOperatorMobile     |否         |手机号 
siteOperatorBandwidth     |否         |接入总宽带 
siteOperatorAddress       |否       |物理接入位置 
siteRegOrgName      |否        |注册服务机构-名称 
siteRegOrgMan        |否      |注册服务机构-联系人 
siteRegOrgmobile      |否        |注册服务机构-手机号 
siteDregOrgName       |否       |域名注册服务机构-名称 
siteDregOrgMan       |否       |域名注册服务机构-联系人
siteDregOrgMobile     |否         |域名注册服务机构-手机号
siteDregOrgNs       |否       |域名注册服务机构-NS记录 
siteDregOrgA       |否       |域名注册服务机构-A记录 
siteDregOrgCname       |否       |域名注册服务机构-cname记录 
siteThirdDesignUnit     |否         |第三方单位-设计单位
siteThirdDesignMan       |否       |第三方单位-联系人 
siteThirdDesignMobile     |否         |第三方单位-手机号 
siteThirdBuildUnit      |否        |第三方单位-建设单位
siteThirdBuildMan      |否        |第三方单位-建设单位-联系人
siteThirdBuildMobile     |否         |第三方单位-建设单位-手机号
siteThirdCheckUnit      |否        |第三方单位-维保单位
siteThirdCheckMan     |否         |第三方单位-维保单位-联系人
siteThirdCheckMobile      |否        |第三方单位-维保单位-手机号
siteThirdSupportUnit      |否        |第三方单位-支撑单位
siteThirdSupportMan	      |否        |第三方单位-支撑单位-联系人
siteThirdSupportMobile	     |否         |第三方单位-支撑单位-手机号
siteCdnName	     |否         |CDN信息机构-名称
siteCdnMan	     |否         |CDN信息机构-联系人
siteCdnMobile	   |否           |CDN信息机构-手机号
siteCdnIP	     |否         |CDN信息机构-IP
monitorModelID	   |是           |监控模板ID
monitorModel	   |是           |监控模板
warningGroupID	    |是          |报警组ID
warningGroup	    |是          |报警组
status	     |是         |是否保存为新模版
tplName	      |是        |模板名称

```json  
{
  "data": {
        siteName: '', 
        resoure: '',
        resoureID: '',
        siteDomain: '',
        siteSafeLevel: '',
        siteIcpCode: '',
        siteIpList: '',
        siteDesc: '',
        siteOsVersion: '',
        sitePort: '',
        siteAddress: '',
        siteOperator: '',
        siteOperatorMan: '',
        siteOperatorMobile: '',
        siteOperatorBandwidth: '',
        siteOperatorAddress: '',
        siteRegOrgName: '',
        siteRegOrgMan: '',
        siteRegOrgmobile: '',
        siteDregOrgName: '',
        siteDregOrgMan: '',
        siteDregOrgMobile: '',
        siteDregOrgNs: '',
        siteDregOrgA: '',
        siteDregOrgCname: '',
        siteThirdDesignUnit: '',
        siteThirdDesignMan: '',
        siteThirdDesignMobile: '',
        siteThirdBuildUnit: '',
        siteThirdBuildMan: '',
        siteThirdBuildMobile: '',
        siteThirdCheckUnit: '',
        siteThirdCheckMan: '',
        siteThirdCheckMobile: '',
        siteThirdSupportUnit: '',
        siteThirdSupportMan: '',
        siteThirdSupportMobile: '',
        siteCdnName: '',
        siteCdnMan: '',
        siteCdnMobile: '',
        siteCdnIP: '',
        monitorModel: '',
        monitorModelID: '',
        warningGroupID: '',
        warningGroup: '',
        status: '',
        tplName: '' 
    },
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 2.4 新增 / 修改站点列表
> 请求方式：POST / PUT
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
orgNameID      |是        |单位名称
siteName     |是         |站点名称
siteDomain    |是          |域名
siteSafeLevel   |否           |安全等级
siteIcpCode     |否         |Icp备案号
siteIpList      |否        |IP列表 
siteDesc        |否      |站点介绍 
siteOsVersion    |否          |操作系统及版本 
sitePort          |否    |主要协议/端口 
siteAddress      |否        |物理位置 
siteOperator     |否         |所属运营商 
siteOperatorMan     |否         |联系人 
siteOperatorMobile     |否         |手机号 
siteOperatorBandwidth     |否         |接入总宽带 
siteOperatorAddress       |否       |物理接入位置 
siteRegOrgName      |否        |注册服务机构-名称 
siteRegOrgMan        |否      |注册服务机构-联系人 
siteRegOrgmobile      |否        |注册服务机构-手机号 
siteDregOrgName       |否       |域名注册服务机构-名称 
siteDregOrgMan       |否       |域名注册服务机构-联系人
siteDregOrgMobile     |否         |域名注册服务机构-手机号
siteDregOrgNs       |否       |域名注册服务机构-NS记录 
siteDregOrgA       |否       |域名注册服务机构-A记录 
siteDregOrgCname       |否       |域名注册服务机构-cname记录 
siteThirdDesignUnit     |否         |第三方单位-设计单位
siteThirdDesignMan       |否       |第三方单位-联系人 
siteThirdDesignMobile     |否         |第三方单位-手机号 
siteThirdBuildUnit      |否        |第三方单位-建设单位
siteThirdBuildMan      |否        |第三方单位-建设单位-联系人
siteThirdBuildMobile     |否         |第三方单位-建设单位-手机号
siteThirdCheckUnit      |否        |第三方单位-维保单位
siteThirdCheckMan     |否         |第三方单位-维保单位-联系人
siteThirdCheckMobile      |否        |第三方单位-维保单位-手机号
siteThirdSupportUnit      |否        |第三方单位-支撑单位
siteThirdSupportMan	      |否        |第三方单位-支撑单位-联系人
siteThirdSupportMobile	     |否         |第三方单位-支撑单位-手机号
siteCdnName	     |否         |CDN信息机构-名称
siteCdnMan	     |否         |CDN信息机构-联系人
siteCdnMobile	   |否           |CDN信息机构-手机号
siteCdnIP	     |否         |CDN信息机构-IP
monitorModelID	   |是           |监控模板ID
warningGroupID	    |是          |报警组ID
status	     |是         |是否保存为新模版
tplName	      |是        |模板名称

```json  
{
    orgNameID: '', //(必填)
    siteName: '', //(必填)
    siteDomain: '', //(必填)
    siteSafeLevel: '',
    siteIcpCode: '',
    siteIpList: '',
    siteDesc: '',
    siteOsVersion: '',
    sitePort: '',
    siteAddress: '',
    siteOperator: '',
    siteOperatorMan: '',
    siteOperatorMobile: '',
    siteOperatorBandwidth: '',
    siteOperatorAddress: '',
    siteRegOrgName: '',
    siteRegOrgMan: '',
    siteRegOrgmobile: '',
    siteDregOrgName: '',
    siteDregOrgMan: '',
    siteDregOrgMobile: '',
    siteDregOrgNs: '',
    siteDregOrgA: '',
    siteDregOrgCname: '',
    siteThirdDesignUnit: '',
    siteThirdDesignMan: '',
    siteThirdDesignMobile: '',
    siteThirdBuildUnit: '',
    siteThirdBuildMan: '',
    siteThirdBuildMobile: '',
    siteThirdCheckUnit: '',
    siteThirdCheckMan: '',
    siteThirdCheckMobile: '',
    siteThirdSupportUnit: '',
    siteThirdSupportMan: '',
    siteThirdSupportMobile: '',
    siteCdnName: '',
    siteCdnMan: '',
    siteCdnMobile: '',
    siteCdnIP: '',
    config: [{
        http_https: "{   //http/https设置
            depth: '', //监控深度
            grade: '', //等保定级
            isOpen: '', //开关true / false
            method: '', //HTTP请求方式
            responseTime: '', //响应时间值
            responsesBody: '' //响应内容
        }",rate: '',kindName: 'http_https'}, {
        ping: "{
            depth: '', //监控深度
            grade: '', //等保定级        
            isOpen: '', //开关true / false
            responseTime: '', //响应时间值
            lossRate: '' //丢包率
        }",rate: '',kindName: 'ping'}, {
        dns: "{
            depth: '', //监控深度
            grade: '', //等保定级        
            isOpen: '', //开关true / false
            dnsType: '', //DNS类型 
            analysis: '' //DNS服务器地址
        }",rate: '',kindName: 'dns'}, {
        page: "{ //页面防篡改检测
            depth: '', //监控深度
            grade: '', //等保定级        
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'page'}, {
        foreignlink: "{ //外链监测/iframe外链
            outerChain: [],  //外链白名单    
            depth: '', //监控深度
            grade: '', //等保定级        
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'foreignlink'}, {
        header: "{ //头监测
            depth: '', //监控深度
            grade: '', //等保定级     
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'header'}, {
        invalidlink: "{ //无效链接监测
            depth: '', //监控深度
            grade: '', //等保定级     
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'invalidlink'}, {
        portIntegrity: "{ //端口完整性
            depth: '', //监控深度
            grade: '', //等保定级     
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'portIntegrity'}, {
        illegalkeywords: "{ //非法关键字
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
            keyword: []  //非法关键字黑名单        
        }",rate: '',kindName: 'illegalkeywords'}, {
        illegalredirect: "{ //非法重定向
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'illegalredirect'}, {
        illegalseo: "{ //非法SEO
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'illegalseo'}, {
        icpapprove: "{ //ICP备案/公安备案
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'icpapprove'}, {
        ip2domain: "{ //IP反查域名
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
            ip: ''
        }",rate: 0,kindName: 'ip2domain'}, {
        portLegality: "{ //端口监控
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
            group: [{
                port: '',
                serverName: ''
            }]
        }",rate: 0,kindName: 'portLegality'}, {
        Loophole: "{ //漏洞扫描
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
            host: '', //开关true / false
            site: '' //开关true / false
        }",rate: 0,kindName: 'Loophole'}, {
        waf: "{ //WAF防护
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '' //开关true / false
        }",rate: 0,kindName: 'waf'}
    ]
    monitorModelID: '',
    warningGroupID: '', //(必填)
    status: '',
    tplName: '' 
}
```

##### 返回参数说明

```json  
{
  "data": [],
  "code": "200",
  "msg": "SUCCESS"
}
```

## 3.监控模板

#### 3.1 获取监控模板列表
> 请求方式：GET
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
tplName      |否        |模板名称
pageNum     |否         |页数
limit      |否        |条数

##### 返回参数说明

字段              |字段说明
------------|-----------
id               |模板ID
tplName               |模板名称
count               |应用站点数量
author               |创建人
createTime               |创建时间
status               |状态

```json  
{
  "count": '', //总条数
  "total": '', //当前第几页
  "data": [{
      id: '',
      tplName: '',
      count: '',
      author: '',
      createTime: '',      
      status: ''
  }],
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 3.2 删除监控模板
> 请求方式：Delete
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
id       |是        |模板ID

##### 返回参数说明

```json  
{
  "data": [],
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 3.3 获取监控模板详情
> 请求方式：GET
请求URL ：[](#)

##### 请求参数说明
字段       |必选       |字段说明
------------|------------|-----------
id       |是        |模板ID

##### 返回参数说明

```json  
{
  "data": {
    tplName: '', //模板名称
    config: [{
        http_https: "{   //http/https设置
            depth: '', //监控深度
            grade: '', //等保定级
            isOpen: '', //开关true / false
            method: '', //HTTP请求方式
            responseTime: '', //响应时间值
            responsesBody: '' //响应内容
        }",rate: '',kindName: 'http_https'}, {
        ping: "{
            depth: '', //监控深度
            grade: '', //等保定级        
            isOpen: '', //开关true / false
            responseTime: '', //响应时间值
            lossRate: '' //丢包率
        }",rate: '',kindName: 'ping'}, {
        dns: "{
            depth: '', //监控深度
            grade: '', //等保定级        
            isOpen: '', //开关true / false
            dnsType: '', //DNS类型 
            analysis: '' //DNS服务器地址
        }",rate: '',kindName: 'dns'}, {
        page: "{ //页面防篡改检测
            depth: '', //监控深度
            grade: '', //等保定级        
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'page'}, {
        foreignlink: "{ //外链监测/iframe外链
            outerChain: [],  //外链白名单    
            depth: '', //监控深度
            grade: '', //等保定级        
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'foreignlink'}, {
        header: "{ //头监测
            depth: '', //监控深度
            grade: '', //等保定级     
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'header'}, {
        invalidlink: "{ //无效链接监测
            depth: '', //监控深度
            grade: '', //等保定级     
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'invalidlink'}, {
        portIntegrity: "{ //端口完整性
            depth: '', //监控深度
            grade: '', //等保定级     
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'portIntegrity'}, {
        illegalkeywords: "{ //非法关键字
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
            keyword: []  //非法关键字黑名单        
        }",rate: '',kindName: 'illegalkeywords'}, {
        illegalredirect: "{ //非法重定向
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'illegalredirect'}, {
        illegalseo: "{ //非法SEO
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'illegalseo'}, {
        icpapprove: "{ //ICP备案/公安备案
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'icpapprove'}, {
        ip2domain: "{ //IP反查域名
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
            ip: ''
        }",rate: 0,kindName: 'ip2domain'}, {
        portLegality: "{ //端口监控
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
            group: [{
                port: '',
                serverName: ''
            }]
        }",rate: 0,kindName: 'portLegality'}, {
        Loophole: "{ //漏洞扫描
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
            host: '', //开关true / false
            site: '' //开关true / false
        }",rate: 0,kindName: 'Loophole'}, {
        waf: "{ //WAF防护
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '' //开关true / false
        }",rate: 0,kindName: 'waf'}
    ]
  },
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 3.4 新增 / 修改监控模板
> 请求方式：POST / PUT
请求URL ：[](#)

##### 请求参数说明

```json  
{
    tplName: '', //模板名称
    config: [{
        http_https: "{   //http/https设置
            depth: '', //监控深度
            grade: '', //等保定级
            isOpen: '', //开关true / false
            method: '', //HTTP请求方式
            responseTime: '', //响应时间值
            responsesBody: '' //响应内容
        }",rate: '',kindName: 'http_https'}, {
        ping: "{
            depth: '', //监控深度
            grade: '', //等保定级        
            isOpen: '', //开关true / false
            responseTime: '', //响应时间值
            lossRate: '' //丢包率
        }",rate: '',kindName: 'ping'}, {
        dns: "{
            depth: '', //监控深度
            grade: '', //等保定级        
            isOpen: '', //开关true / false
            dnsType: '', //DNS类型 
            analysis: '' //DNS服务器地址
        }",rate: '',kindName: 'dns'}, {
        page: "{ //页面防篡改检测
            depth: '', //监控深度
            grade: '', //等保定级        
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'page'}, {
        foreignlink: "{ //外链监测/iframe外链
            outerChain: [],  //外链白名单    
            depth: '', //监控深度
            grade: '', //等保定级        
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'foreignlink'}, {
        header: "{ //头监测
            depth: '', //监控深度
            grade: '', //等保定级     
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'header'}, {
        invalidlink: "{ //无效链接监测
            depth: '', //监控深度
            grade: '', //等保定级     
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'invalidlink'}, {
        portIntegrity: "{ //端口完整性
            depth: '', //监控深度
            grade: '', //等保定级     
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'portIntegrity'}, {
        illegalkeywords: "{ //非法关键字
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
            keyword: []  //非法关键字黑名单        
        }",rate: '',kindName: 'illegalkeywords'}, {
        illegalredirect: "{ //非法重定向
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'illegalredirect'}, {
        illegalseo: "{ //非法SEO
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'illegalseo'}, {
        icpapprove: "{ //ICP备案/公安备案
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
        }",rate: '',kindName: 'icpapprove'}, {
        ip2domain: "{ //IP反查域名
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
            ip: ''
        }",rate: 0,kindName: 'ip2domain'}, {
        portLegality: "{ //端口监控
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
            group: [{
                port: '',
                serverName: ''
            }]
        }",rate: 0,kindName: 'portLegality'}, {
        Loophole: "{ //漏洞扫描
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '', //开关true / false
            host: '', //开关true / false
            site: '' //开关true / false
        }",rate: 0,kindName: 'Loophole'}, {
        waf: "{ //WAF防护
            depth: '', //监控深度
            grade: '', //等保定级       
            isOpen: '' //开关true / false
        }",rate: 0,kindName: 'waf'}
    ]
}
```

##### 返回参数说明

```json  
{
  "data": [],
  "code": "200",
  "msg": "SUCCESS"
}
```

## 4.报警组

#### 4.1 获取报警组列表
> 请求方式：GET
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
warningName      |否        |报警组名称
pageNum     |否         |页数
limit      |否        |条数

##### 返回参数说明
字段              |字段说明
------------|-----------
id               |报警组ID
warningName               |报警组名称
sourceName               |所属资源
userList               |接收报警人
warningMethod	               |报警方式
status               |状态

```json  
{
  "count": '', //总条数
  "total": '', //当前第几页
  "data": [{
      id: '',
      warningName: '',
      sourceName: '',
      userList: '',
      warningMethod: '',
      status: ''
  }],
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 4.2 获取报警用户列表
> 请求方式：GET
请求URL ：[](#)

##### 返回参数说明
字段              |字段说明
------------|-----------
id               |用户ID
name               |用户名

```json  
{
  "data": [{
      id: '',
      name: ''
  }],
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 4.3 新增 / 修改报警组列表
> 请求方式：POST / PUT
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
warningName      |是        |报警组名称
resoureID       |否        |所属资源ID
userlist     |是         |接收报警人
des      |否        |描述
warningMethod	  |是             |报警方式

```json  
{
    warningName： '',
    resoureID: '',
    userlist: [],
    des: '',
    warningMethod: {
        weixin: true/false,
        mail: true/false
    }
}
```

##### 返回参数说明

```json  
{
  "data": [],
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 4.4 获取报警组详情
> 请求方式：GET
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
id      |否        |报警组ID

##### 返回参数说明
字段       |字段说明
------------|-----------
warningName       |报警组名称
resoure           |所属资源
resoureID           |所属资源ID
userlist        |接收报警人
des            |描述
warningMethod	         |报警方式

```json  
{
  "data": {
      warningName： '',
      resoure: '',
      resoureID: '',
      userlist: [],
      des: '',
      warningMethod: {
          weixin: true/false,
          mail: true/false
      }
  },
  "code": "200",
  "msg": "SUCCESS"
}
```

## 5.用户

#### 5.1 获取用户列表
> 请求方式：GET
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
userName      |否        |用户名
pageNum     |否         |页数
limit      |否        |条数

##### 返回参数说明
字段              |字段说明
------------|-----------
id               |用户ID
userName               |用户名
resoure               |所属资源
role               |角色名称
roleAuth	               |角色域名权限
tel               |手机号
mail               |邮箱
weixin               |微信
status               |状态

```json  
{
  "count": '', //总条数
  "total": '', //当前第几页
  "data": [{
      id: '',
      warningName: '',
      resoure: '',
      userList: '',
      warningMethod: '',
      status: ''
  }],
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 5.2 新增 / 修改用户
> 请求方式：POST / PUT
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
userName      |是        |用户名
password      |是        |密码
sourceID       |是        |所属资源ID
role     |是         |角色名称
roleAuth      |否        |用户域名权限(选择站点)
tel	  |是             |手机号
mail	  |否             |邮箱
weixin	  |否            |微信

```json  
{
  "data": {
      userName: '',
      password: '',
      sourceID: '',
      role: 0/1,
      roleAuth: [],
      tel: '',
      mail: '',
      weixin: ''
  },
  "code": "200",
  "msg": "SUCCESS"
}
```

##### 返回参数说明

```json  
{
  "data": [],
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 5.3 修改密码
> 请求方式：PUT
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
oldPass      |是        |原密码
newPass       |是        |新密码
confimPass      |是        |确认密码

##### 返回参数说明

```json  
{
  "data": [],
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 5.4 获取域名权限站点列表
> 请求方式：GET
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
id      |是        |资源ID

##### 返回参数说明
字段              |字段说明
------------|-----------
id               |站点ID
userName               |站点名称

```json  
{
  "data": [{
      id: '',
      name: ''
  }],
  "code": "200",
  "msg": "SUCCESS"
}
```

#### 5.5 获取用户详情
> 请求方式：GET
请求URL ：[](#)

##### 请求参数说明

字段       |必选       |字段说明
------------|------------|-----------
id      |是        |用户ID

##### 返回参数说明
字段              |字段说明
------------|-----------
id               |用户ID
userName               |用户名
resoure               |所属资源
resoureID               |所属资源ID
role               |角色名称
roleAuth	               |角色域名权限(选择站点)
tel               |手机号
mail               |邮箱
weixin               |微信

```json  
{
  "data": {
      id： '',
      userName: '',
      resoure: '',
      resoureID: '',
      role: 0/1,
      roleAuth: [],
      tel: '',
      mail: '',
      weixin: ''
  },
  "code": "200",
  "msg": "SUCCESS"
}
```