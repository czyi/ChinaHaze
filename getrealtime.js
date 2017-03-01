var http=require("http"),
    fs=require("fs");

var citys=new Array("alidiqu","benxi","sansha","sanya","xinganmeng","hainanzhou","jixi","dandong","liangshanzhou","qitaihe","baicheng","guoluozhou","yichunshi","mudanjiang","lijiang","meizhou","daxinganlingdiqu","huangnanzhou","tachengdiqu","changdudiqu","liaoyuan","haimen","anshun","chuxiongzhou","diqingzhou","shanghai","shuangyashan","shenzhen","yuxi","xilinguolemeng","jiamusi","yushuzhou","heyuan","changchun","abazhou","linzhidiqu","qiqihaer","zhoushan","huizhou","wenshanzhou","jincheng","yanbianzhou","haixizhou","xingtai","rongcheng","rikazediqu","hulunbeier","shenyang","haikou","qiandongnanzhou","zhangye","honghezhou","fushun","zhongwei","nanping","naqudiqu","shijiazhuang","jilin","bijie","wulanchabu","zhuhai","anshan","dingxi","shanwei","chaoyang","sanming","siping","changshu","dalizhou","guyuan","yancheng","yantai","xishuangbannazhou","longnan","zunyi","alashanmeng","sanmenxia","wuwei","nantong","zhongshan","qingyuan","handan","bazhong","weihai","jinchang","puer","tieling","eerduosi","yulinshi","shannandiqu","baoding","suihua","taicang","longyan","enshizhou","liaoyang","jieyang","qiannanzhou","lasa","puyang","panzhihua","tongliao","neijiang","jiuquan","xinyang","rushan","ankang","zhangzhou","qujing","aletaidiqu","zhumadian","chaozhou","nujiangzhou","anyang","kunshan","dongguan","gannanzhou","shangluo","maoming","wuhai","shantou","ganzizhou","guiyang","yulin","jiayuguan","haerbin","tongchuan","wafangdian","shaoguan","hamidiqu","tianshui","shuozhou","loudi","luzhou","zhangjiakou","wendeng","qingdao","bayannaoer","xiaogan","zhanjiang","jingmen","jiangmen","guangzhou","ningbo","yunfu","zhaoqing","zhangjiajie","daqing","jiaozuo","yueyang","yangjiang","yangquan","shiyan","yichang","chifeng","kunming","wuxi","luoyang","jingdezhen","changzhi","zhangjiagang","luan","xianning","linxiazhou","pingxiang","xinxiang","chongqing","foshan","hechi","meishan","huangshan","guigang","taiyuan","qingyang","changde","nanning","beihai","chongzuo","yingkou","yibin","panjin","lincang","xining","xiangxizhou","xiamen","penglai","qianxinanzhou","wuzhong","heihe","pingdingshan","baoshan","liupanshui","chengde","haidongdiqu","lvliang","langfang","zhengzhou","jiaonan","hebi","wuzhou","yinchuan","nanchang","hezhou","zhoukou","chenzhou","dehongzhou","jinzhong","hetiandiqu","fuzhou","fangchenggang","xuchang","hengyang","luohe","jiaozhou","jiangyin","huaian","suizhou","qinzhou","hanzhong","pingliang","zhuzhou","tongrendiqu","bozhou","nanyang","songyuan","xinyu","yaan","quanzhou","akesudiqu","suzhou","guangan","baiyin","taizhoushi","yiyang","dalian","suining","zhaotong","changsha","shizuishan","baoji","zhaoyuan","kuerle","wujiang","liuzhou","jiujiang","hegang","tulufandiqu","jimo","xiangtan","lanzhou","jingzhou","changzhou","huludao","guangyuan","nanchong","yichun","yongzhou","anqing","guilin","putian","lishui","ziyang","zibo","wuhan","heze","yixing","datong","jinhua","huaihua","kaifeng","rizhao","hengshui","lianyungang","yingtan","chengdu","baise","jiaxing","huangshi","quzhou","leshan","huanggang","jinzhou","tonghua","laibin","shangqiu","xianyang","jian","pingdu","weifang","weinan","laizhou","ganzhou","cangzhou","fuxin","dongying","shaoyang","linyi","beijing","ezhou","dazhou","laixi","fuzhoushi","jinan","shouguang","ningde","yanan","jining","fuyang","shangrao","xiangyang","zaozhuang","qinhuangdao","zhangqiu","yangzhou","suqian","xinzhou","linfen","boertala","yiwu","nanjing","jintan","wuhu","xuzhou","wenzhou","tongling","linan","taian","chizhou","binzhou","mianyang","zhenjiang","hefei","taizhou","yuncheng","huainan","baishan","chuzhou","deyang","huaibei","maanshan","laiwu","bengbu","liyang","tangshan","jurong","fuyangshi","huzhou","xuancheng","tianjin","suzhoushi","yilihasakezhou","xian","dezhou","zigong","liaocheng","baotou","kelamayi","huhehaote","shaoxing","hangzhou","changjizhou","kezhou","wulumuqi","wujiaqu","shihezi","kashediqu");

console.log(citys);
var url = 'http://www.pm25.in/api/querys/pm2_5.json?city=';
var filename = "t6.json";
var outfile="";

for (var i=0; i<citys.length; i++)
{
    console.log(citys[i]);
    req = http.request({
        'host'  : 'www.pm25.in',
        'path'  : '/api/querys/pm2_5.json?city='+citys[i],
        'method': 'GET',
        'headers' : {
            'user-agent'    : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
            'cookie' : '__utma=162682429.268311765.1485284201.1488168617.1488210456.4; __utmc=162682429; __utmz=162682429.1488168617.3.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); _aqi_query_session=BAh7CUkiD3Nlc3Npb25faWQGOgZFRkkiJWE5ZDZkYTU2YTk3Y2NiZWJhMGM2NjIwOGFlN2NhNjRhBjsAVEkiEF9jc3JmX3Rva2VuBjsARkkiMXB5RTNiNTZwKy94SzdyeHJ0TC9vK0kvZDRMUW5hNjB5UzJTT1hGMTMwb2c9BjsARkkiDGNhcHRjaGEGOwBGIi1kMjdjMmRmNGNhNzJjYjAyNzU0ZWZjZTJlZTkyNjEzMjM1MGZjODRlSSIdd2FyZGVuLnVzZXIuYXBpX3VzZXIua2V5BjsAVFsHWwZpAkIDSSIiJDJhJDEwJFhGQzRsazhwOFdOOFZUWHVQaXl3R08GOwBU--f3ad1c46a2912ad5eb7bfb14291321a5cf9fa114'
            //'cookie' : '__utma=162682429.268311765.1485284201.1488167317.1488168617.3; __utmc=162682429; __utmz=162682429.1488168617.3.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); _aqi_query_session=BAh7CEkiD3Nlc3Npb25faWQGOgZFRkkiJTEzZDU2MGQ3OGUyM2MyMGVmNDRlNzUxZTdmYzBmZjYwBjsAVEkiEF9jc3JmX3Rva2VuBjsARkkiMWlTNlgweEh6NmJMZ3JtZzNSTEdXSXZ5aTk1b2JFSEZWWnRqQmcyRHdaSlE9BjsARkkiHXdhcmRlbi51c2VyLmFwaV91c2VyLmtleQY7AFRbB1sGaQJCA0kiIiQyYSQxMCRYRkM0bGs4cDhXTjhWVFh1UGl5d0dPBjsAVA%3D%3D--1a26dbf937e81eb3036482bc2f8efcfae36b8034'
        }

    }, function(res){
        var strs = '';
        res.on('data', function (d) {
            strs += d;
        });

        res.on('end',function(){
            console.log(strs)
            //data='{"'+citys[i]+'":'+strs+"},\n";
            json = JSON.parse(strs);
            console.log(json);
            console.log(json[0].area);

            fs.appendFile(filename, '{"'+json[0].area+'":'+strs+"},\n", 'utf8',function(err){  
                if(err)  
                {  
                    console.log(err);  
                }  
            });  

        });

    })

    req.write('');
    req.end();

    // http.get(url+, function (res) {
    //     res.on('end', (rawData) => {
    //         var json = '';
    //         res.on('data', function (d) {
    //             json += d;
    //     });

    //     res.on('end',function(){
    //         console.log(json)
    //         json = JSON.parse(json);
    //         console.log(json)
    //     });


    // }).on('error', function (e) {
    //     console.error(e);
    // });    
}


// fs.writeFileSync(filename, outfile);



// http.get(url, function (res) {
//     res.on('end', (rawData) => {
//     try {
//         console.log(rawData)
//           let parsedData = JSON.parse(rawData);
//           console.log(parsedData);
//         } catch (e) {
//           console.log(e.message);
//         }
//       });

//     var json = '';
//     res.on('data', function (d) {
//         json += d;
//     });

//     res.on('end',function(){
//         console.log(json)
//         json = JSON.parse(json);
//         console.log(json)
//     });


// }).on('error', function (e) {
//     console.error(e);
// });
