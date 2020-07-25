	var ALLTOOLDATA = {
		lifeTool: {
			query: {				
                 "huoche":{
					href:"http://p.yiqifa.com/c?s=26390d3a&w=253302&c=6451&i=19382&l=0&e=hao6&t=http://tj.tieyou.com/gw.php",
					bg:"images/life/liecheshike.jpg",
					title:"列车时刻",
					type:"icon",
					status:'hot'
		        } ,
                "weizhang":{
					href:"haoserver/jiaotongcx.htm",
                    bg:"images/life/weizhang.jpg",
                    title:"交通违章查询",
                    type:"icon",
					status:'hot'
		        } ,
                "shoujihaoma":{
                href:"http://guishu.showji.com/search.htm",
                bg:"images/life/shoujihaoma.gif",
                title:"手机号码归属地",
                param:"m",
                type:"form",
                status:''
                },
                "kuaidi":{
                href:"haoserver/kuaidi.htm",
                bg:"images/life/kuaidi.jpg",
                title:"快递查询",
                type:"icon",
				status:'hot'
                },
                "hangban":{
                href:"http://p.yiqifa.com/c?s=15f50b00&w=253302&c=7036&i=27402&l=0&e=hao6&t=http://www.ly.com",
                bg:"images/life/hangbanchaxun.jpg",
                title:"航班查询",
                type:"icon",
				status:''
                },
                "shenfenzheng":{
                href:"http://qq.ip138.com/idsearch/index.asp",
                bg:"images/life/shenfenzheng.jpg",
                title:"身份证信息查询",
				param:"userid",
                hiddenParam:"action=idcard",
                type:"form",
				status:''
                },
                "quhao":{
                href:"http://app.baidu.com/postcode",
		bg:"images/life/quhaochaxun.png",
                title:"区号查询",
                param:"quhao",
                hiddenParam:"action=2",
                type:"icon",
				status:''
                },
                "ip":{
                href:"http://www.ip138.com/ips.asp",
                bg:"images/life/ip.jpg",
                title:"IP地址归属地",
                param:"ip",
                hiddenParam:"action=2",
                type:"form",
				status:''
                },
                "gongjiao":{
                href:"http://bus.mapbar.com/",
                title:"公交查询",
                type:"text",
				status:''
                },
                "wannianli":{
                href:"haoserver/wnl.htm",
                title:"万年历",
                type:"text",
				status:''
                },
                "ditu":{
                href:"http://map.baidu.com/",
                title:"在线地图查询",
                type:"text",
					status:''
                },
                "anquanqi":{
                href:"http://app.baidu.com/baefemale/female.html?v=1.00 ",
                title:"女性安全期",
                type:"text",
				status:''
                },
                "youbian":{
                href:"http://www.ip138.com/post/",
                title:"邮政编码查询",
                type:"text",
				status:''
                },
                "wangsuceshi":{
                href:"http://app.baidu.com/ada_nettest",
                title:"网速测试",
                subtitle:"最权威最准确的网速测试",
                type:"text",
				status:''
                },
				"chuzujiaoche":{
                href:"http://www.1hai.cn/",
                title:"出租叫车",
                type:"text",
				status:'new'
                },
                "lvyoujingdian":{
                href:"http://p.yiqifa.com/c?s=6d9eafeb&w=253302&c=5528&i=13362&l=0&e=hao6&t=http://www.uzai.com",
                title:"景点攻略",
                type:"text",
				status:''
                }
			},
            
			pay: {
				"shoujichongzhi":{
                href:"../haoserver/chongzhi.htm",
                bg:"images/life/shoujichongzhi.jpg",
                title:"手机充值",
                type:"icon",
				status:''
                },
                "yidong":{
                href:"http://www.10086.cn/index.htm",
                bg:"images/life/yidong.jpg",
                title:"移动营业厅",
                type:"icon",
				status:''
                },
                "liantong":{
                href:"http://www.10010.com/ ",
                bg:"images/life/liantong.jpg",
                title:"联通营业厅",
                type:"icon",
				status:''
                },
                "dianxin":{
                href:"http://www.ct10000.com/ ",
                bg:"images/life/dianxin.jpg",
                title:"电信营业厅",
                type:"icon",
                status:''
                },
                "youxichongzhi":{
                href:"http://s8.taobao.com/search?pid=mm_10054659_1405058_9666016&mode=63&refpos=&cat=99&commend=all&s=0&sort=commend&n=40&olu=yes&yp4p_page=0&viewIndex=1",
                title:"游戏充值",
                type:"text",
				status:''
                },
                "shuidianmei":{
                href:"https://www.alipay.com/",
                title:"水电煤缴费",
                type:"text",
				status:''
                },
                "shuidianmei":{
                href:"https://shenghuo.alipay.com/jiaofei.htm?_ad=c&_adType=lifejf_sdmjf_shsy",
                title:"水电煤缴费",
                type:"text",
				status:''
                },
                "jiaofangzhu":{
                href:"https://shenghuo.alipay.com/rent.htm?_ad=c&_adType=lifezz_jfz_shsy",
                title:"交房租",
                type:"text",
				status:''
                },
                "guhuakuandai":{
                href:"https://shenghuo.alipay.com/guhua.htm?_ad=c&_adType=lifejf_ghkd_shsy",
                title:"固话宽带",
                type:"text",
				status:''
                },
                "xinyongkahuankuan":{
                href:"https://shenghuo.alipay.com/credit.htm?_ad=c&_adType=lifejr_xykhk_shsy",
                title:"信用卡还款",
                type:"text",
				status:''
                },
                "huandaikuan":{
                href:"https://shenghuo.alipay.com/perloan.htm?_ad=c&_adType=lifejr_hdk_shsy",
                title:"还贷款",
                type:"text",
				status:''
                },
                "jiayouka":{
                href:"https://shenghuo.alipay.com/oilcard.htm",
                title:"加油卡充值",
                type:"text",
				status:''
                },
                "jiaotongfakuan":{
                href:"https://ebppprod.alipay.com/traffic.htm",
                title:"交通罚款代办",
                type:"text",
				status:''
                },
                 "jiaobaoxian":{
                href:"http://baoxian.taobao.com/",
                title:"买保险",
                type:"text",
				status:''
                },
                 "zhuce":{
                href:"http://www.1hai.cn/",
                title:"租车",
                type:"text",
				status:''
                }
            },	
			ticket: {
                "youapiaowu":{
                href:"http://s.click.taobao.com/t?e=m%3D2%26s%3DUg0by3eHzX4cQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAvBNBBfsO0cGoTbo%2Fx%2FoFw7qGo1GWvL9hts%2FT56eVHRMhavTnqV6kOpufX2viMg2An7uq6sLYIqu0Q7QOybCaQy9AmARIwX9K9E0MBlxnM%2FDnaYpFBIfC%2F0t2Svxi9YpPg%3D%3D",
                title:"景点门票",
                type:"text",
				status:''
                },
                "maicaipiao":{
                href:"http://union.500wan.com/pages/interfacehezuo.php?coopid=1605&adid=16",
                title:"买彩票",
                type:"text",
				status:''
                },
                "huochepiaodaigou":{
                href:"http://p.yiqifa.com/c?s=26390d3a&w=253302&c=6451&i=19382&l=0&e=hao6&t=http://tj.tieyou.com/gw.php",
                title:"火车票代购",
                type:"text",
				status:''
                },
                "dianyingpiao":{
                href:"http://dianying.taobao.com/",
                title:"电影票",
                type:"text",
				status:''
                },
                "jipiao":{
                href:"http://p.yiqifa.com/c?s=15f50b00&w=253302&c=7036&i=27402&l=0&e=hao6&t=http://www.ly.com",
                title:"买机票",
                type:"text",
				status:''
                },
                "hotel":{
                href:"http://p.yiqifa.com/n?k=KBAqRyWlrI6HWEKF6n4H2mLErI6H2mLS6lMH6l2O6lwlrnRlWQLErZyH2mLFWEwlMJKm6cLE&e=hao6&spm=1.1.1.1&t=http://travel.elong.com/hotel/",
                title:"订酒店",
                type:"text",
				status:''
                }
            },
			info: {

                "tianqi":{
                href:"http://weather.news.sina.com.cn/",
                bg:"images/life/tianqi.jpg",
                title:"天气预报",
                type:"icon",
				status:''
                },

                "caipiao":{
                href:"http://union.500wan.com/pages/interfacehezuo.php?coopid=1605&adid=43",
                bg:"images/life/caipiao2.jpg",
                title:"彩票开奖",
                type:"icon",
				status:''
                },

                "dianshiyugao":{
                href:"http://tuan.6164.com/",
				bg:"images/life/tuangou.jpg",
                title:"团购",
                type:"icon",
				status:''
                },
                "caipu":{
                href:"zhekou.htm",
				bg:"images/life/zhekou.jpg",
                title:"折扣",
                type:"icon",
				status:''
                },

                "beijingshijian":{
                href:"http://open.baidu.com/special/time/",
                title:"北京时间",
                subtitle:"国家授时中心标准时间",
                type:"text",
				status:''
                },
                "shencaicesuan":{
                href:"http://app.baidu.com/shencai",
                title:"身材测算",
                type:"text",
				status:''
                },
                "chidejiankang":{
                href:"http://www.tvsou.com/",
                title:"电视预告",
                type:"text",
				status:''
                },
                "yuchanqi":{
                href:"http://app.baidu.com/yunqijczx",
                title:"预产期计算器",
                type:"text",
				status:''
                }  
            }
		},
		interTool: {
			amuse: {
                
                "yingshi":{
                href:"http://v.6164.com/",
                bg:"images/life/gaoqingyingshi.png",
                title:"高清影视",
                type:"icon",
				status:''
                },
                "yinyue":{
                href:"http://fm.baidu.com",
                bg:"images/life/hao123yinyue.jpg",
                title:"在线听歌",
                type:"icon",
				status:''
                },
				"gexingqianming":{
                href:"http://www.qqgexing.com/qianming/",
                bg:"images/life/gexingqianming.jpg",
                title:"QQ个性签名",
                type:"icon",
				status:''
                },
                "gexingtouxiang":{
                href:"http://www.qqgexing.com/touxiang/",
                bg:"images/life/gexingtouxiang.jpg",
                title:"QQ个性头像",
                type:"icon",
				status:''
                },
                "qqbiaoqing":{
                href:"http://app.baidu.com/7gaoqqbq",
                title:"QQ表情",
                type:"text",
				status:''
                },
                "haoyouyinxiang":{
                href:"http://www.qqgexing.com/yinxiang/",
                title:"好友印象",
                type:"text",
				status:''
                },
                "gexingfenzu":{
                href:"http://www.qqgexing.com/fenzu/",
                title:"个性分组",
                type:"text",
				status:''
                },
				"youxi":{
                href:"xyx.htm",
                title:"小游戏",
                type:"text",
				status:''
                },
                 "jianpangangqin":{
                href:"http://app.baidu.com/widget?appid=101428",
                title:"键盘钢琴",
                type:"text",
				status:''
                },
                "zuomianbizhi":{
                href:"http://www.deskcity.com/",
                title:"桌面壁纸",
                type:"text",
				status:''
                },
                "jingpinxiaohua":{
                href:"http://app.baidu.com/xiaohuaquanji",
                title:"精品笑话大全",
                type:"text",
				status:''
                },
                "xinliceshi":{
                href:"http://www.jiqie.com/1/7/",
                title:"艺术签名",
                type:"text",
				status:''
                },
                "jizhuanwan":{
                href:"http://app.baidu.com/widget?appid=106602",
                title:"脑筋急转弯",
                type:"text",
				status:''
                },
				"weiboqunfa":{
					href:"http://app.baidu.com/baidupush",
					title:"微博在线群发",
					type:"text",
					status:''
					},
				"gaoxiaozhengjian":{
                href:"http://app.baidu.com/jobcert",
                title:"搞笑网络证件",
                type:"text",
				status:''
                },
				"jiehunzheng":{
					href:"http://app.baidu.com/jiehunzheng/index.php",
					title:"网络结婚证",
					type:"text",
					status:''
					},
				"jingdianyulu":{
					href:"http://app.baidu.com/jdyjdqw/index.html",
					title:"经典语录",
					type:"text",
					status:''
					},
				"renshengganwu":{
					href:"http://app.baidu.com/bdappgwrs",
					title:"人生感悟",
					type:"text"
					,status:''
					},
				"lengxiaohua":{
					href:"http://app.baidu.com/lengxiaohua",
					title:"冷笑话",
					type:"text",
					status:''
					},
				"changshidakaoyan":{
					href:"http://app.baidu.com/widget?appid=107265",
					title:"常识大考验",
					type:"text",
					status:''
					},
					"faxing":{
					href:"http://app.baidu.com/widget?appid=101133",
					title:"公主时尚发型",
					type:"text",
					status:''
					},
					"baobaoqiming":{
                href:"http://app.baidu.com/qimingzi/Baby.aspx",
                title:"宝宝起名工具",
                type:"text",
				status:''
                }
            },
			planet: {
                "xingmingceshi":{
                href:"http://app.baidu.com/cemingzi/CeMing.aspx",
                bg:"images/life/meimingtengceshi.jpg",
                title:"姓名测试",
                type:"icon",
					status:''
                },
                "zhougongjiemeng":{
                href:"http://www.51jiemeng.com/",
                bg:"images/life/zhougongjiemeng.jpg",
                title:"周公解梦",
                type:"icon",
					status:''
                },
                "xingzuoyunshi":{
                href:"http://www.sheup.com/luck.php",
                bg:"images/life/xingzuoyunshi3.jpg",
                title:"今年运势",
                type:"icon",
					status:''
                },
                "haomaxiongji":{
                href:"http://app.baidu.com/jixiong",
                bg:"images/life/haomaxiongji.jpg",
                title:"手机号码吉凶查询",
                type:"icon",
					status:''
                },
                "taohuayun":{
                href:"http://app.baidu.com/taohuayun",
                title:"桃花运测试",
                type:"text",
					status:''
                },
                "xinlinianling":{
                href:"http://app.baidu.com/widget?appid=117940",
                title:"心理年龄测试",
                type:"text",
					status:''
                },
				 "qianshijinsheng":{
                href:"http://app.baidu.com/qianshi",
                title:"前世今生测试",
                type:"text",
					status:''
                },
				"zhiyeceshi":{
                href:"http://app.baidu.com/zhiyeceshi",
                title:"职业测试",
                type:"text",
					status:''
                },
				"xingzuoceshi":{
				  href:"http://app.baidu.com/xingzuoceshi/constellation.php",
				  title:"星座测试",
				  type:"text",
				  status:''
				  },
			  "yuanfen":{
				  href:"http://app.baidu.com/yuanfenceshi",
				  title:"缘分测试",
				  type:"text",
				  status:''
				  },
				  "aiqingceshi":{
				  href:"http://www.yuanfenup.com/",
				  title:"爱情魔法测试",
				  type:"text",
				  status:''
				  },
				   "qingshang":{
				  href:"http://app.baidu.com/widget?appid=107376",
				  title:"情商测试",
				  type:"text",
				  status:''
				  }, 
				  "zhishangceshi":{
                href:"http://app.baidu.com/widget?appid=105981",
                title:"智商测试",
                type:"text",
					status:''
                },
                "renpinjisuanqi":{
                href:"http://cts.388g.com/",
                title:"藏头诗",
                type:"text",
					status:''
                },
                "bazi":{
                href:"http://app.baidu.com/suanming",
                title:"HttpCN 八字算命",
                type:"text",
					status:''
                },
                "suanming":{
                href:"http://app.baidu.com/ada_zhanbu",
                title:"称骨算命",
                type:"text",
					status:''
                },
				"xingmingpeidui":{
				   href:"http://www.sheup.com/xingming_wuge_peidui.php",
				   title:"姓名配对",
				   type:"text",
				   status:''
				   },
				 "xingzuopeidui":{
				  href:"http://app.baidu.com/my_with",
				  title:"星座配对",
				  type:"text",
				  status:''
				  },   
                "shengxiaopeidui":{
                href:"http://app.baidu.com/sxmatch/index.php",
                title:"生肖配对",
                type:"text",
					status:''
                },
				"shiershengxiao":{
				  href:"http://app.baidu.com/zodiacs",
				  title:"十二生肖",
				  type:"text",
				  status:''
				  },
                "shengnannv":{
                href:"http://app.baidu.com/widget?appid=128621",
                title:"生男生女预测表",
                type:"text",
					status:''
                },
                
				"xinggesecaifenxi":{
					href:"http://app.baidu.com/charcolor",
					title:"性格色彩分析",
					type:"text",
					status:''
					},
			  "taluopai":{
				  href:"http://astro.fashion.qq.com/tarot/tarot.shtml",
				  title:"塔罗牌在线占卜",
				  type:"text",
				  status:''
				  }, 
			  "taijishenshu":{
				  href:"http://music.baidu.com/",
				  title:"手机铃声下载",
				  type:"text",
				  status:''
				  }
						  },
			shop: {
                "waihui":{
                href:"http://www.boc.cn/sourcedb/whpj/",
                bg:"images/life/waihui.gif",
                title:"外汇牌价",
                type:"icon",
					status:''},
                "gupiao":{
                href:"http://quote.eastmoney.com/center/",
				bg:"images/life/gupiao.jpg",
                title:"股票行情",
                type:"icon",
					status:''
                },
                "huobiduihuan":{
                href:"http://app.baidu.com/currencyExchange",
                bg:"images/life/huobiduihuan2.gif",
                title:"货币兑换计算器",
                type:"icon",
					status:''
                },
                "tuangou":{
                href:"http://tuan.6164.com/",
                bg:"images/life/tuangou.jpg",
                title:"团购导航",
                type:"icon",
					status:''
                },
                "jijinjingzhi":{
                href:"http://fund.eastmoney.com/",
                title:"基金净值",
                type:"text",
					status:''
                },
                "zhekou":{
                href:"zhekou.htm",
                title:"hao123折扣",
                type:"text",
					status:''
                },
                "yinjia":{
                href:"http://gold.hexun.com/hjxh/",
                title:"黄金价格",
                type:"text",
					status:''
                },
				"yinjia":{
					href:"http://app.baidu.com/widget?appid=117649",
					title:"白银价格",
					type:"text",
					status:''
					},
                "cunkuan":{
                href:"http://app.baidu.com/bae_saving/index.html",
                title:"存款计算器",
                type:"text",
					status:''
                },
				"daikuan":{
					href:"http://app.baidu.com/daikuanjisuanqi/dkjsq.html",
					title:"贷款计算器",
					type:"text",
					status:''
					},
				"fangdai":{
					href:"http://www.soufun.com/house/tools.htm",
					title:"房贷计算器",
					type:"text",
					status:''
					},
				"yanglaobaoxian":{
					href:"http://finance.sina.com.cn/money/283/2005/0708/20.html",
					title:"养老保险金计算器",
					type:"text",
					status:''
					},
				"gongjijin":{
					href:"http://www.bjgjj.gov.cn/wsyw/jsq/cygj.htm",
					title:"公积金贷款计算器",
					type:"text",
					status:''
					},
				"gupiaoshouyi":{
					href:"http://app.baidu.com/bae_stock/index.htm",
					title:"股票收益计算器",
					type:"text"
					,status:''
					},
				"geshui":{
					href:"http://finance.sina.com.cn/calc/tax_pers_income.html",
					title:"个人所得税计算器",
					type:"text",
					status:''
					},
				"anjieyuegong":{
					href:"http://app.baidu.com/bae_bank/index.htm",
					title:"按揭月供计算器",
					type:"text",
					status:''
					},
				"pinganchexian":{
					href:"http://p.yiqifa.com/c?s=4e438714&w=253302&c=6299&i=18845&l=0&e=hao6&t=http://chexian.sinosig.com/simplePremium/chexian_emar.jsp",
					title:"阳光车险计算器",
					type:"text",
					status:''
					},
				"jiaoyuchuxu":{
					href:"http://app.baidu.com/edusave/index.html",
					title:"教育储蓄计算器",
					type:"text",
					status:''
					},
				"gouche":{
					href:"http://app.baidu.com/baecarTax/index.htm",
					title:"购车计算器",
					type:"text",
					status:''
					},
					"chaogu":{
					href:"http://app.baidu.com/simstock",
					bg:"images/life/chaogu.gif",
					title:"模拟炒股",
					type:"text",
					status:''
					},
				"jizhang":{
					href:"http://app.baidu.com/jizhang/user/baidu.do",
					title:"随手记",
					type:"text",
					status:''
					},
				"xianjinliu":{
					href:"http://app.baidu.com/youshang_cfs",
					title:"友商现金流量表",
					type:"text",
					status:''
					},
				"zhuangxiuyusuan":{
					href:"http://home.focus.cn/group/calc/zxjsq_zong.php",
					title:"装修预算",
					type:"text",
					status:''
					}
            },
			inter:{
				"webqq":{
                href:"http://web.qq.com/",
                bg:"images/life/webqq.jpg",
                title:"网页版QQ",
                type:"icon",
					status:''
                },
				"mianfeishadu":{
					href:"http://app.baidu.com/kis_duba/index.html",
					bg:"images/life/mianfeishadu.gif",
					title:"金山在线杀毒",
					type:"icon",
					status:''
					},
				"meituxiuxiu":{
					href:"http://app.baidu.com/meituxiuxiu",
					bg:"images/life/meituxiuxiu.gif",
					title:"美图秀秀网页版",
					type:"icon",
					status:''
					},
				"geshizhuanhuan":{
					href:"http://app.baidu.com/ada_tpgs",
					bg:"images/life/geshizhuanhuan.jpg",
					title:"图片格式转换",
					type:"icon",
					status:''
					},
					"dongtaitupian":{
					href:"http://app.baidu.com/widget?appid=120980",
					title:"GIF图片修改制作",
					type:"text",
					status:''
					},
					"luyinji":{
					href:"http://app.baidu.com/ada_luyin",
					bg:"images/life/luyinji.jpg",
					title:"录音机",
					type:"text",
					status:''
					},
					"webfeixin":{
                href:"https://webim.feixin.10086.cn/",
                title:"网页版飞信",
                type:"text",
					status:''
                },
				"wenjianyasuo":{
					href:"http://app.baidu.com/widget?appid=118683",
					title:"在线文件压缩工具",
					type:"text",
					status:''
					},
				"qudongjingling":{
					href:"http://www.drivergenius.com/",
					title:"驱动精灵",
					type:"text",
					status:''
					},
					"fantizi":{
					href:"http://app.baidu.com/ada_fanjian",
					title:"繁体字转换器",
					type:"text",
					status:''
					},
					"huoxingwen":{
					href:"http://app.baidu.com/huoxingwen/index.html",
					title:"火星文转换器",
					type:"text",
					status:''
					},
					"huoxingwen":{
					href:"http://app.baidu.com/fantihuoxing",
					title:"繁体字火星文转换",
					type:"text",
					status:''
					},
				"url":{
					href:"http://app.baidu.com/urlcode/index.aspx",
					title:"URL编码解码",
					type:"text",
					status:''
					},

				"jianli":{
					href:"http://app.baidu.com/gerenjianlimoban",
					title:"个人简历模板",
					type:"text",
					status:''
					},
					"renminbidaxie":{
					href:"http://app.baidu.com/renminbi",
					title:"人民币大写转换",
					type:"text",
					status:''
					},
				"qingjiatiao":{
					href:"http://app.baidu.com/qingjiatiao",
					title:"请假条",
					type:"text",
					status:''
					},
				"shenqingshu":{
					href:"http://app.baidu.com/rudangsq",
					title:"申请书",
					type:"text",
					status:''
					},
				"mingpiansheji":{
					href:"http://app.baidu.com/mingpian",
					title:"名片设计",
					type:"text",
					status:''
					},
				"alexa":{
					href:"http://www.alexa.com/",
					title:"Alexa排名",
					type:"text",
					status:''
					},
				"js":{
					href:"http://app.baidu.com/widget?appid=121305",
					title:"JS代码工具",
					type:"text",
					status:''
					},
				
				"kuaijiejian":{
					href:"http://app.baidu.com/apphotkey/",
					title:"快捷键大全",
					type:"text",
					status:''
					},
				"yuming":{
					href:"http://app.baidu.com/chaojizhan",
					title:"域名批量生成查询",
					type:"text",
					status:''
					},
				"katongtouxiang":{
					href:"http://app.baidu.com/widget?appid=100965",
					title:"卡通头像制作",
					type:"text",
					status:''
					},
				"tupianpinjie":{
					href:"http://app.baidu.com/qhcj_tuyaya",
					title:"非主流奇幻场景",
					type:"text",
					status:''
					},
				"jitatiaoyin":{
					href:"http://app.baidu.com/widget?appid=104466",
					title:"吉他调音",
					type:"text",
					status:''
					},
				"yansedaima":{
					href:"http://app.baidu.com/getcolortool",
					title:"颜色代码生成器",
					type:"text",
					status:''
					},
				"ascii":{
					href:"http://app.baidu.com/widget?appid=145822",
					title:"ascii码表",
					type:"text",
					status:''
					},
				"beian":{
					href:"http://app.baidu.com/www_vs0_cn",
					title:"备案查询",
					type:"text",
					status:''
					},
				"zhanzhanggongju":{
					href:"http://tool.chinaz.com/",
					title:"站长工具",
					type:"text",
					status:''
					}
				},
			study: {
                "fanyi":{
                href:"haoserver/fy.htm",
                bg:"images/life/fanyi.jpg",
                title:"在线翻译",
                type:"icon",
					status:''
                },
                
                "jisuanqi":{
                href:"http://app.baidu.com/widget?appid=116526",
                bg:"images/life/kexuejisuanqi.jpg",
                title:"科学计算器",
                type:"icon",
					status:''
                },
                "chengyuchidian":{
                href:"http://app.baidu.com/chengyucidian",
                title:"成语词典",
                type:"text",
					status:''
                },
                "chazidian":{
                href:"http://www.chazidian.com/",
                title:"查字典",
                type:"text",
					status:''
                },
                "wubidazi":{
                href:"http://app.baidu.com/widget?appid=115099",
                title:"五笔打字练习",
                type:"text",
					status:''
                },
                "jinshankuaikuai":{
                href:"http://app.baidu.com/widget?appid=117675",
                bg:"images/life/jinshankuaikuai.jpg",
                title:"金山快快打字测试",
                type:"icon",
					status:''
                },
                "wubizigen":{
                href:"http://app.baidu.com/widget?appid=107922",
                title:"五笔字根表",
                type:"text",
					status:''
                },
				"changduhuansuan":{
					href:"http://app.baidu.com/baiducdhs",
					title:"长度换算",
					type:"text",
					status:''
					},
				"mianjihuansuan":{
					href:"http://app.baidu.com/baidumjhs",
					title:"面积换算",
					type:"text",
					status:''
					},
					"zhonglianghuansuan":{
					href:"http://app.baidu.com/baiduzlhs",
					title:"重量单位换算",
					type:"text",
					status:''
					},
				"danweihuansuan":{
					href:"http://app.baidu.com/bangbangunit",
                                        bg:"images/life/danweihuansuan.jpg",
					title:"单位换算",
					type:"icon",
					status:''
					},
				 "chebiao":{
                href:"http://app.baidu.com/carlogo",
                title:"汽车标志大全",
                type:"text",
					status:''
                },
				"naoliduanlian":{
                href:"http://app.baidu.com/app/enter?appid=105986",
                title:"脑力训练",
                type:"text",
					status:''
                },
				"shizi":{
					href:"http://app.baidu.com/widget?appid=125213",
					title:"童话识字乐园",
					type:"text",
					status:''
					},
				"pinyinzimubiao":{
					href:"http://app.baidu.com/widget?appid=110331",
					title:"汉语拼音字母表",
					type:"text",
					status:''
					},
               
				"miyu":{
					href:"http://app.baidu.com/bdmiyuapp",
					title:"谜语",
					type:"text",
					status:''
					},
				"meiguihuayu":{
					href:"http://app.baidu.com/meiguihuayu",
					title:"玫瑰花语",
					type:"text",
					status:''
					},
				"baihehuayu":{
					href:"http://app.baidu.com/baihehuayu",
					title:"百合花语",
					type:"text",
					status:''
					},
				"yanyudaquan":{
					href:"http://app.baidu.com/yanyudq",
					title:"谚语大全",
					type:"text",
					status:''
					},
				"xiehouyu":{
					href:"http://app.baidu.com/xhyu_daq",
					title:"歇后语",
					type:"text"
					}
            }
		},
		softTool: {
			chart: {
                'QQ': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=QQsetup.zip',
     			bg: 'images/life/soft_qq.gif',
     			title: 'QQ',
	 			type: 'download'		
				},
                'MSN': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=wlsetup-web.zip',
     			bg: 'images/life/soft_msn.gif',
     			title: 'MSN',
	 			type: 'download'		
				},
                'MSN': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=wlsetup-web.zip',
     			bg: 'images/life/soft_msn.gif',
     			title: 'MSN',
	 			type: 'download'		
				},
                '飞信': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=Fetion.zip',
     			bg: 'images/life/soft_feixin.gif',
     			title: '飞信',
	 			type: 'download'		
				},
                '百度HI': {
	 			href:'http://www.uucall.com/tj39s2q.html',
    			bg: 'images/life/soft_hi.gif',
     			title: 'UUcall电话',
	 			type: 'download'		
				},
                'Skype': {
				href:'http://www.skycn.com/ipinfo/d_hao123.php?f=Skype.zip',
     			bg: 'images/life/soft_skype.jpg',
     			title: 'Skype',
	 			type: 'download'		
				},
                '阿里旺旺': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=AliIMsetup.zip',
     			bg: 'images/life/soft_wangwang.gif',
     			title: '阿里旺旺',
	 			type: 'download'		
					},
                '阿里通': {
	 			href:'http://www.alicall.com/down.asp?linkid=8930492',
     			bg: 'images/life/soft_alicall.gif',
     			title: '阿里通',
	 			type: 'download'		
				}
			},
			music: {
                '酷我音乐盒': {
	 			href:'http://www.koowo.com/mbox.down2?src=kwun0271',
     			bg: 'images/life/soft_kuwo.gif',
     			title: '酷我音乐盒',
	 			type: 'download'		
				},
                '千千静听': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=ttpsetup.zip',
     			bg: 'images/life/soft_qianqian.gif',
     			title: '千千静听',
	 			type: 'download'		
				},
                '酷狗': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=KuGousetup.zip',
     			bg: 'images/life/soft_kugou.gif',
     			title: '酷狗',
	 			type: 'download'		
				},
                'QQ音乐': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=QQMusic.zip',
     			bg: 'images/life/soft_qqbf.jpg',
     			title: 'QQ音乐',
	 			type: 'download'		
				},
                'Foobar': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=foobar.zip',
     			bg: 'images/life/soft_foobar.jpg',
     			title: 'Foobar',
	 			type: 'download'		
				},
                'Winamp5': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=winamp.zip',
     			bg: 'images/life/soft_winamp.jpg',
     			title: 'Winamp5',
	 			type: 'download'		
				}
            },
			video: {
                '百度播放器': {
	 			href:'http://dl.pps.tv/',
     			bg: 'images/life/soft_pps.jpg',
     			title: 'PPS网络电视',
	 			type: 'download'		
				},
                '风行': {
	 			href:'http://www.fun.tv/download',
     			bg: 'images/life/funshion.gif',
     			title: '风行',
	 			type: 'download'		
				},
                'PPTV': {
	 			href:'http://download.pptv.com/',
     			bg: 'images/life/pplive.gif',
     			title: 'PPTV',
	 			type: 'download'		
				},
                'uusee': {
	 			href:'http://download.uusee.com/',
     			bg: 'images/life/uusee.jpg',
     			title: 'uusee',
	 			type: 'download'		
				},
                '皮皮': {
	 			href:'http://www.pipi.cn/down/',
     			bg: 'images/life/soft_pipi.jpg',
     			title: '皮皮',
	 			type: 'download'		
				},
                '暴风影音': {
	 			href:'http://home.baofeng.com/',
     			bg: 'images/life/baofengyingyin16.jpg',
     			title: '暴风影音',
	 			type: 'download'		
				},
                '奇艺影音': {
	 			href:'http://app.iqiyi.com/pc/player/',
     			bg: 'images/life/soft_qiyi.jpg',
     			title: '奇艺影音',
	 			type: 'download'		
				}
            },
			download: {
                '迅雷': {
	 			href:'http://dl.xunlei.com/',
     			bg: 'images/life/Thunder.gif',
     			title: '迅雷',
	 			type: 'download'		
				},
                '快车': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=flashget.zip',
     			bg: 'images/life/soft_kuaiche.jpg',
     			title: '快车',
	 			type: 'download'		
				},
                'eMule(电驴)': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=easyMule-Setup.zip',
     			bg: 'images/life/soft_emule.gif',
     			title: 'eMule(电驴)',
	 			type: 'download'		
				},
                'QQ旋风': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=QQDownloadSetup.zip',
     			bg: 'images/life/soft_xuanfen.gif',
     			title: 'QQ旋风',
	 			type: 'download'		
				},
                'Vagaa': {
	 			href:'http://www.skycn.com/ipinfo/d_hao123.php?f=main_setup.zip',
     			bg: 'images/life/soft_vagaa.jpg',
				title: 'Vagaa',
				type: 'download'		
					},
                'Bitcomet': {
				href:'http://www.skycn.com/ipinfo/d_hao123.php?f=BitComet.zip',
				bg: 'images/life/soft_bitcomet.jpg',
				title: 'Bitcomet',
				type: 'download'		
				}
            },
			office: {
                '金山词霸': {
				href:'http://www.skycn.com/ipinfo/d_hao123.php?f=PowerWordsetup.zip',
				bg: 'images/life/jinshanciba16.jpg',
				title: '金山词霸',
				type: 'download'		
				},
                '美图秀秀': {
				 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=XiuXiu_Soft.zip',
				 bg: 'images/life/meituxiuxiu16.jpg',
				 title: '美图秀秀',
				 type: 'download'		
				},
                    'Photoshop CS4': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=ADBEPHSPCS4.zip',
     bg: 'images/life/ps16.jpg',
     title: 'Photoshop CS4',
	 type: 'download'		
					},
                    '福昕阅读器': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=FoxitReader_Setup.zip',
     bg: 'images/life/soft_foxit.jpg',
     title: '福昕阅读器',
	 type: 'download'		
					},
                    'WPS Office': {
	 href:'http://j.union.ijinshan.com/jump.php?u_key=556',
     bg: 'images/life/soft_keke.jpg',
     title: 'WPS Office',
	 type: 'download'		
					}
            },
			browser: {
            'IE8': {
	 href:'http://rj.baidu.com/soft/detail/23360.html',
     bg: 'images/life/soft_ie.gif',
     title: 'IE11',
	 type: 'download'		
					},
                    '谷歌浏览器': {
	 href:'http://rj.baidu.com/soft/detail/14744.html',
     bg: 'images/life/soft_baidullq.jpg',
     title: '猎豹浏览器',
	 type: 'download'		
					},
                    '火狐': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=Firefox-hao123-latest.zip',
     bg: 'images/life/firefox.gif',
     title: '火狐',
	 type: 'download'		
					},
                    '搜狗浏览器': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=sogou_explorer.zip',
     bg: 'images/life/soft_sogoullq.jpg',
     title: '搜狗浏览器',
	 type: 'download'		
					},
                    '傲游': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=mxsetup_hao123.zip',
     bg: 'images/life/soft_aoyou.gif',
     title: '傲游',
	 type: 'download'		
					},
                    '2345浏览器': {
	 href:'http://download.2345.com/down/2345Explorer_239391.exe',
     bg: 'images/life/soft_youxiliulanqi.jpg',
     title: '2345浏览器',
	 type: 'download'		
					}
            },
			inputMethod: {
            '搜狗输入法': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=sogou_pinyin.zip',
     bg: 'images/life/soft_sougou.gif',
     title: '搜狗输入法',
	 type: 'download'		
					},
                 '百度输入法': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=BaiduPinyinSetup.zip',
     bg: 'images/life/baidusrf.gif',
     title: '百度输入法',
	 type: 'download'		
					},
                    '紫光拼音': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=unispim.zip',
     bg: 'images/life/soft_ziguang.jpg',
     title: '紫光拼音',
	 type: 'download'		
					},
                    '万能五笔': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=wnwb_800_50.zip',
     bg: 'images/life/soft_wangnengwubi.jpg',
     title: '万能五笔',
	 type: 'download'		
					},
                    '王码五笔': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=wmwb.zip',
     bg: 'images/life/soft_wangmawubi.jpg',
     title: '王码五笔',
	 type: 'download'		
					},
                    'QQ五笔': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=QQWubi_Setup.zip',
     bg: 'images/life/soft_qqwubi.jpg',
     title: 'QQ五笔',
	 type: 'download'		
					}       
            },
			system: {
                   '金山卫士': {
	 href:'http://www.ijinshan.com/ws/index.shtml',
     bg: 'images/life/jinshanweishi16.jpg',
     title: '金山卫士',
	 type: 'download'		
					},
                    '360安全卫士': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=360setup.zip',
     bg: 'images/life/360anquanweishi16.jpg',
     title: '360安全卫士',
	 type: 'download'		
					},
                    '魔方': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=TweakCubeSetup.zip',
     bg: 'images/life/soft_mofang.jpg',
     title: '魔方',
	 type: 'download'		
					},
                    '鲁大师': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=ludashisetup.zip',
     bg: 'images/life/soft_ludashi.jpg',
     title: '鲁大师',
	 type: 'download'		
					},
                    '超级兔子': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=sr2011setup.zip',
     bg: 'images/life/soft_chaojituzi.jpg',
     title: '超级兔子',
	 type: 'download'		
					},
                    '驱动人生': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=dtl_setup.zip',
     bg: 'images/life/qudongrensheng16.jpg',
     title: '驱动人生',
	 type: 'download'		
					}
            },
			antiVirus: {
                    '金山毒霸': {
	 href:'http://j.union.ijinshan.com/jump.php?u_key=549',
     bg: 'images/life/jinshanduba16.jpg',
     title: '金山毒霸',
	 type: 'download'		
					},
            '卡巴斯基': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=kaspersky.zip',
     bg: 'images/life/kabasiji16.jpg',
     title: '卡巴斯基',
	 type: 'download'		
					},
                    '江民杀毒': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=kv_setup.zip',
     bg: 'images/life/jiangminshadu16.jpg',
     title: '江民杀毒',
	 type: 'download'		
					},
                    '瑞星杀毒': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=ravolsky.zip',
     bg: 'images/life/ruixingshadu16.jpg',
     title: '瑞星杀毒',
	 type: 'download'		
					},
                    '360杀毒': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=360sd_se.zip',
     bg: 'images/life/360.gif',
     title: '360杀毒',
	 type: 'download'		
					},
                    'NOD32': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=eav_ac_nt32.zip',
     bg: 'images/life/soft_nod32.jpg',
     title: 'NOD32',
	 type: 'download'		
					}
            
            },
			game: {
            '4399游戏盒': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=4399box_install.zip',
     bg: 'images/life/4399youxihe.jpg',
     title: '4399游戏盒',
	 type: 'download'		
					},
                    '植物大战僵尸': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=PlantsvsZombies_ndb.zip',
     bg: 'images/life/zhiwudazhanjiangshi16.jpg',
     title: '植物大战僵尸',
	 type: 'download'		
					},
                    '小霸王游戏机 84合一': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=disland.xiaopw84in1.zip',
     bg: 'images/life/xiaobawang16.jpg',
     title: '小霸王游戏机 84合一',
	 type: 'download'		
					},
                    'Kawaks游戏机': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=kawaks_skycn.zip',
     bg: 'images/life/soft_kawaks.jpg',
     title: 'Kawaks游戏机',
	 type: 'download'		
					},
                    '连连看': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=llk48.zip',
     bg: 'images/life/lianliankan16.jpg',
     title: '连连看',
	 type: 'download'		
					},
                     '祖玛': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=zuma_hh.zip',
     bg: 'images/life/zuma16.jpg',
     title: '祖玛',
	 type: 'download'		
					}
                    
            },
			others: {
            'Winrar': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=WinRAR.exe',
     bg: 'images/life/winrar16.jpg',
     title: 'Winrar',
	 type: 'download'		
					},
                    '好压软件': {
	 href:'http://download.haozip.com/uniondown/haozip_tiny.206102.exe',
     bg: 'images/life/soft_formatf.jpg',
     title: '好压软件',
	 type: 'download'		
					},
                     '有道云笔记': {
	 href:'http://codown.youdao.com/note/youdaonote_v_heima046.exe',
     bg: 'images/life/soft_zhuomiangupiao.jpg',
     title: '有道云笔记',
	 type: 'download'		
					},
                    '同花顺': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=THS_hexin.zip',
     bg: 'images/life/soft_hexin.jpg',
     title: '同花顺',
	 type: 'download'		
					},
                    '操盘手': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=wlymZL15160.zip',
     bg: 'images/life/caopanshou.jpg',
     title: '操盘手',
	 type: 'download'		
					},
                    '人人桌面': {
	 href:'http://www.skycn.com/ipinfo/d_hao123.php?f=rrsetup.zip',
     bg: 'images/life/soft_renren.jpg',
     title: '人人桌面',
	 type: 'download'		
					}
            },
			phoneSoft: {
            '手机版QQ': {
	 href:'http://mobile.qq.com/',
     bg: 'images/life/soft_qqweb.gif',
     title: '手机版QQ',
	 type: 'download'		
					},
                    'UCWEB': {
	 href:'http://www.uc.cn/',
     bg: 'images/life/soft_ucweb.gif',
     title: 'UCWEB',
	 type: 'download'		
					},
                    '百度输入法': {
	 href:'http://shouji.baidu.com/input/',
     bg: 'images/life/baidusrf.gif',
     title: '百度输入法',
	 type: 'download'		
					},
                    '搜狗输入法': {
	 href:'http://shouji.sogou.com/',
     bg: 'images/life/soft_sougou.gif',
     title: '搜狗输入法',
	 type: 'download'		
					},
                    '新浪微博手机版': {
	 href:'http://weibo.com/mobile/wap.php',
     bg: 'images/life/soft_weibo.jpg',
     title: '新浪微博手机版',
	 type: 'download'		
					},
                    '人人网手机版': {
	 href:'http://www.renren.com/mobile/web.do?ref=minifeed',
     bg: 'images/life/soft_renren.jpg',
     title: '人人网手机版',
	 type: 'download'		
					}
            }
		}
	};
var STORETOOL = [{top_toolkit: 'lifeTool', sub_toolkit: 'query', tool_id: 'kuaidi'},
							{top_toolkit: 'lifeTool', sub_toolkit: 'query', tool_id: 'huoche'},
							{top_toolkit: 'lifeTool', sub_toolkit: 'query', tool_id: 'shoujihaoma'},
							{top_toolkit: 'lifeTool', sub_toolkit: 'query', tool_id: 'kuaidi'},
							{top_toolkit: 'lifeTool', sub_toolkit: 'query', tool_id: 'wannianli'},
							{top_toolkit: 'lifeTool', sub_toolkit: 'query', tool_id: 'ditu'},
							{top_toolkit: 'lifeTool', sub_toolkit: 'query', tool_id: 'anquanqi'},
							{top_toolkit: 'lifeTool', sub_toolkit: 'query', tool_id: 'lvyoujingdian'},
							{top_toolkit: 'lifeTool', sub_toolkit: 'info', tool_id: 'caipiao'},
							{top_toolkit: 'lifeTool', sub_toolkit: 'info', tool_id: 'tianqi'},
							
							{top_toolkit: 'interTool', sub_toolkit: 'amuse', tool_id: 'gexingqianming'},
							{top_toolkit: 'interTool', sub_toolkit: 'amuse', tool_id: 'youxi'},
							{top_toolkit: 'interTool', sub_toolkit: 'amuse', tool_id: 'yingshi'},
							{top_toolkit: 'interTool', sub_toolkit: 'amuse', tool_id: 'yinyue'},
							{top_toolkit: 'interTool', sub_toolkit: 'amuse', tool_id: 'jingpinxiaohua'},
							{top_toolkit: 'interTool', sub_toolkit: 'planet', tool_id: 'xingzuoyunshi'},
							{top_toolkit: 'interTool', sub_toolkit: 'study', tool_id: 'fanyi'}
							];	
