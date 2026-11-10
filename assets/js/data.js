/* 游戏美术分析数据；window.DATA 可直接离线加载。 */
window.DATA = {
  "date": "2026-11-10",
  "axes": {
    "form": {
      "name": "形体写实度",
      "low": "卡通 / 抽象",
      "high": "写实",
      "description": "只看比例、轮廓与结构接近自然形体的程度；不计材质逼真度、画质、面数和制作成本。采用最近一版形体评分。"
    },
    "expression": {
      "name": "表现风格化",
      "low": "自然主义",
      "high": "风格化",
      "description": "看色彩、明暗与表面如何被主观组织。低分偏自然材料与光照，高分偏平涂、描线、笔触或强图形处理。"
    },
    "complexity": {
      "name": "造型装饰复杂度",
      "low": "简约",
      "high": "繁复",
      "description": "比较角色轮廓、服装装备层次与装饰信息。沿用复杂度分析，不计背景、技能特效、分辨率或开发成本。"
    },
    "era": {
      "name": "世界年代",
      "low": "远古",
      "high": "未来",
      "description": "0远古、50现代、100遥远未来。按主要故事年代或架空社会类比定位；这是分段序位，不是等距年份。无法确定的样本放在独立待定带。"
    }
  },
  "datasets": {
    "games": {
      "name": "原100款游戏",
      "short": "GAME CASES",
      "colors": {
        "写实与体块": "#b26934",
        "卡通与图形": "#268a86",
        "动漫与手绘": "#7263ae",
        "材质与几何": "#447fa8"
      },
      "axes": [
        "form",
        "expression",
        "complexity",
        "era"
      ],
      "items": [
        {
          "key": "g-1",
          "code": "G001",
          "name": "最后生还者 Part II",
          "style": "自然主义写实",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 1,
          "scope": "艾莉等主要人类角色的游戏内常态造型",
          "values": {
            "form": 100,
            "expression": 10,
            "complexity": 40,
            "era": 55
          },
          "description": "真实人体比例，保留面部不对称、疲态与皮肤细节。衣物按实际穿着逻辑叠加，用磨损、污渍和装备位置交代生活经历；骨相、年龄和体态承担角色差异。",
          "comparison": "观察肩颈姿态、衣物叠穿与实用装备。此图是艾莉同一角色的多视角设定。",
          "formReason": "人体骨相、比例与五官接近现实；皮肤、旧布和连续明暗主要服从自然观察，仅有克制的电影式调色。",
          "complexityReason": "日常叠穿和少量装备使造型复杂度中低。",
          "eraReason": "按主要故事的近未来背景定位；角色使用的枪械、背包与服装大多延续当代。末世和破旧外观不等于远古。",
          "eraLabel": "近未来的末世社会",
          "eraRange": [
            50,
            55
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.creativeuncut.com/gallery-38/art/tlou2-ellie-design.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-1"
            },
            {
              "label": "图像来源",
              "url": "https://www.creativeuncut.com/gallery-38/tlou2-ellie-design.html"
            }
          ]
        },
        {
          "key": "g-2",
          "code": "G002",
          "name": "艾尔登法环",
          "style": "写实暗黑奇幻",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 2,
          "scope": "常见骑士、士兵与主要人形角色",
          "values": {
            "form": 90,
            "expression": 20,
            "complexity": 85,
            "era": 30
          },
          "description": "可信的金属、皮革、锁甲和布料，结合宗教纹样与异常装饰。配色偏灰暗，锈蚀与破损明显；面部常被头盔遮蔽，靠盔甲轮廓和武器建立身份。",
          "comparison": "比较同阵营的纹章与配色，以及盔甲复杂度如何区分兵种等级。",
          "formReason": "常见人形骑士结构较自然；金属、皮革和布料保留物理质感。暗黑题材、复杂甲胄本身不增加Y。",
          "complexityReason": "不以最复杂Boss代表全作。",
          "eraReason": "盔甲、盾剑、封建王权与宗教服饰指向中古类比；交界地没有可直接换算的公元年代。",
          "eraLabel": "中古王国式暗黑奇幻",
          "eraRange": [
            25,
            35
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.creativeuncut.com/gallery-43/art/er-godrick-knight-soldier-and-foot-soldier.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-2"
            },
            {
              "label": "图像来源",
              "url": "https://www.creativeuncut.com/gallery-43/er-godrick-knight-soldier-and-foot-soldier.html"
            }
          ]
        },
        {
          "key": "g-3",
          "code": "G003",
          "name": "赛博朋克2077",
          "style": "赛博朋克写实",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 3,
          "scope": "主要人形角色的服装与义体",
          "values": {
            "form": 95,
            "expression": 15,
            "complexity": 75,
            "era": 55
          },
          "description": "真实人体与机械义体并置，皮肤切线、接口和植入物成为身体的一部分。街头潮流、军装与高级时装混合，通过塑料、金属、皮革的材质冲突表达阶层。",
          "comparison": "观察不同角色的衣着等级、义体暴露程度与身体改造方式。",
          "formReason": "主要人物维持真实人体与五官；霓虹和配色有设计倾向，但角色表面的光照材质仍较自然，不计城市场景。",
          "complexityReason": "真实人物和物理材质为基础，义体接口、机能拼接与配件使设计层次高于朴素日常写实。",
          "eraReason": "以作品明确的2077年定位；义体与都市科技强化未来感，但不据此把年代推到数千年后。",
          "eraLabel": "2077年 · 近未来",
          "eraRange": [
            55,
            55
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.notebookcheck.com/fileadmin/Notebooks/News/_nc3/Cyberpunk_2077_Phantom_Liberty_chars.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-3"
            },
            {
              "label": "图像来源",
              "url": "https://www.notebookcheck.com/Cyberpunk-2077-Phantom-Liberty-ist-jetzt-erhaeltlich-Launch-Trailer-geht-viral.755629.0.html"
            }
          ]
        },
        {
          "key": "g-4",
          "code": "G004",
          "name": "魔兽世界",
          "style": "厚重夸张奇幻",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 4,
          "scope": "典型种族角色及常用职业装备",
          "values": {
            "form": 50,
            "expression": 65,
            "complexity": 85,
            "era": 30
          },
          "description": "放大肩部、手掌、下颌、武器和护甲，以夸张比例换取辨识度。不同种族从脊柱姿态、四肢长度到头部形状都有明显差异；大块面装备适合远距离识别。",
          "comparison": "社区体型对照图，仅用于剪影观察，不作为官方身高依据。",
          "formReason": "肩部、手脚及种族体块明显夸张；大色面、概括高光和手绘感表面提高表现风格化程度。",
          "complexityReason": "三维体积仍清楚，厚甲、武器与纹饰形成高造型复杂度。",
          "eraReason": "典型种族与职业装备以甲胄、长袍和冷兵器为主，故主点放在中古类比；地精工程、飞船等使范围显著跨代。",
          "eraLabel": "中古奇幻为主，混合工程与星际元素",
          "eraRange": [
            25,
            70
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://i.imgur.com/Y6g9g6M.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-4"
            },
            {
              "label": "图像来源",
              "url": "https://wowpedia.fandom.com/wiki/Talk%3AHeight"
            }
          ]
        },
        {
          "key": "g-5",
          "code": "G005",
          "name": "守望先锋",
          "style": "动画电影式英雄卡通",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 5,
          "scope": "英雄的基础皮肤与常态装备",
          "values": {
            "form": 55,
            "expression": 45,
            "complexity": 70,
            "era": 55
          },
          "description": "美化并概括人体，表情清楚，装甲和衣物边缘较圆润。明确的主色、标志性发型及大型装备形成记忆点；材质有体积感，却不过度堆积微小纹理。",
          "comparison": "比较重装、敏捷和支援角色单靠轮廓形成的区别。两部作品的比例与材质处理并不完全相同。",
          "formReason": "英雄体型和面部带动画式夸张；色彩与明暗被整理，但金属、皮肤和布料仍保留可辨的三维材料反应。",
          "complexityReason": "职业装备轮廓中高复杂。",
          "eraReason": "基础英雄装备中的机器人、动力装甲和城市科技指向近未来；不以限定皮肤或联动服装改变年代判断。",
          "eraLabel": "近未来英雄社会",
          "eraRange": [
            55,
            65
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://cdn.myportfolio.com/3ec45c2d-f674-4524-ad8f-ded5ad647b2c/e7ee8ba7-11a4-4ac7-8cad-e9f1de911429_rw_1920.jpg?h=425aadf3817021a4729e637474534831"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-5"
            },
            {
              "label": "图像来源",
              "url": "https://christiannahaywood.com/overwatch-payload-tour"
            }
          ]
        },
        {
          "key": "g-6",
          "code": "G006",
          "name": "军团要塞2",
          "style": "复古商业插画式卡通",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 6,
          "scope": "九大职业默认服装",
          "values": {
            "form": 40,
            "expression": 60,
            "complexity": 40,
            "era": 45
          },
          "description": "三角形、梯形和矩形概括身体，放大手、下巴和肩背。服装细节克制、配色集中，用姿态、体型和道具表达职业气质，具有复古广告插画的概括性。",
          "comparison": "比较侦察兵与机枪手的体量，以及统一队服颜色下的职业差异。",
          "formReason": "宽肩细腿、几何脸型与轮廓高度设计化；材质、明暗块和配色延续复古商业插画的概括方式。",
          "complexityReason": "统一制服与少量道具控制结构密度。",
          "eraReason": "九职业制服、军用物件和商业插画气质偏20世纪中后期，传送器等是复古科幻例外；不强行把全作归为纯历史。",
          "eraLabel": "20世纪中后期式复古科幻",
          "eraRange": [
            45,
            55
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/1456162428757-I36BFTN179ZGHEKBGAMD/valve-is-prepping-team-fortress-2-for-esports-beta-is-opening-soon-social.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-6"
            },
            {
              "label": "图像来源",
              "url": "https://gametyrant.com/news/valve-is-prepping-team-fortress-2-for-esports-beta-is-opening-soon"
            }
          ]
        },
        {
          "key": "g-7",
          "code": "G007",
          "name": "无主之地3",
          "style": "美式漫画描线",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 7,
          "scope": "秘藏猎人的游戏内默认造型",
          "values": {
            "form": 60,
            "expression": 75,
            "complexity": 75,
            "era": 75
          },
          "description": "黑色轮廓、局部排线和硬边阴影强化漫画感。磨损、褶皱与机械细节被画成清楚的线条；身体和武器比例夸张，强调粗粝、戏谑与危险感。",
          "comparison": "观察外轮廓和服装内部线条如何共同塑造漫画印刷感。",
          "formReason": "人物比例中度夸张；描线、笔触化表面与人为组织的阴影让呈现明显偏漫画，即使体积仍是三维。",
          "complexityReason": "多层服装和武器结构仍然繁复。",
          "eraReason": "跨星球活动、机器人与高科技武器构成星际时代；废土牛仔服装只是造型母题，不将故事退回19世纪。",
          "eraLabel": "星际殖民未来",
          "eraRange": [
            65,
            85
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://cdn.mos.cms.futurecdn.net/RxF68SpGWqssT67PhHVEKS.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-7"
            },
            {
              "label": "图像来源",
              "url": "https://www.gamesradar.com/borderlands-3-character-class-best/"
            }
          ]
        },
        {
          "key": "g-8",
          "code": "G008",
          "name": "原神",
          "style": "精致日式动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 8,
          "scope": "可玩角色的游戏内常态模型",
          "values": {
            "form": 45,
            "expression": 70,
            "complexity": 85,
            "era": 30
          },
          "description": "大眼、小鼻口与纤细四肢，头发组织成清楚的大束形状。服装围绕主题色、纹样、饰品及不对称结构展开；脸部美感和个体装饰是识别核心。",
          "comparison": "比较主色、发型和衣摆；宣传插画的细腻上色不完全等于游戏实际渲染。",
          "formReason": "动漫脸、头身与发束进行概括；分段明暗、干净色块和被简化的材料使Y较高。",
          "complexityReason": "衣摆、层叠服饰和主题配件提高造型复杂度。",
          "eraReason": "各国服装借鉴不同历史文化，主体仍是前工业奇幻；枫丹机械与部分未来技术拉宽范围，不给提瓦特指定公元年份。",
          "eraLabel": "多文化前工业奇幻",
          "eraRange": [
            20,
            55
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://t.ctcdn.com.br/k9AuNWxuMIbGeTHie-OHBI8nSRU%3D/1200x675/smart/i505301.jpeg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-8"
            },
            {
              "label": "图像来源",
              "url": "https://canaltech.com.br/games/genshin-impact-e-o-formato-de-sucesso-dos-gachas-196202/"
            }
          ]
        },
        {
          "key": "g-9",
          "code": "G009",
          "name": "罪恶装备 -Strive-",
          "style": "夸张格斗与动漫形体",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 9,
          "scope": "常规战斗模型，排除特效与夸张镜头",
          "values": {
            "form": 40,
            "expression": 90,
            "complexity": 80,
            "era": 60
          },
          "description": "肌肉与服装被概括为锐利块面，明暗边界明确，发束和衣角富有攻击性。超大武器、皮带、文字与金属配件形成节奏，动作强调漫画式透视和关键姿势。",
          "comparison": "观察静态服装的轮廓如何支持夸张动作和高速战斗识别。",
          "formReason": "夸张肌肉、肢体和五官强调漫画节奏；模型以硬边阴影与线条模拟二维动画，表现风格化很强。",
          "complexityReason": "大武器、皮带和非对称服装构成丰富设计。",
          "eraReason": "现代摇滚时装、机械身体与魔法军事并存；按未来社会类比，而不是按腰带、皮衣的现实流行年代定年。",
          "eraLabel": "魔法与科技并存的未来",
          "eraRange": [
            50,
            75
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://blacknerdproblems.com/wp-content/uploads/2021/06/GG_Roster.jpeg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-9"
            },
            {
              "label": "图像来源",
              "url": "https://blacknerdproblems.com/guilty-gear-strive-review/"
            }
          ]
        },
        {
          "key": "g-10",
          "code": "G010",
          "name": "女神异闻录5 皇家版",
          "style": "都市波普动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 10,
          "scope": "怪盗团默认战斗服与模型",
          "values": {
            "form": 45,
            "expression": 80,
            "complexity": 65,
            "era": 50
          },
          "description": "修长身形结合时装和舞台表演式服装。黑白大色块搭配高饱和强调色，面具、手套和长外套形成符号；人物姿态像杂志封面，带有鲜明都市感。",
          "comparison": "观察单人服装识别点与群像红黑白节奏。《美妙世界》的线条更加尖锐。",
          "formReason": "怪盗人物有修长动漫比例和符号化五官；黑白关系、平面色块与刻意的材质概括提高Y。",
          "complexityReason": "长外套、面具和武器提供适中服饰层次。",
          "eraReason": "现实生活层的学生制服、手机与东京社会是年代锚点；怪盗服和异世界符号不改变主要故事的当代属性。",
          "eraLabel": "当代日本都市",
          "eraRange": [
            50,
            50
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://i.blogs.es/a2f15a/p5r_1920_1200/1366_2000.jpeg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-10"
            },
            {
              "label": "图像来源",
              "url": "https://www.vidaextra.com/analisis/persona-5-royal-analisis-review-precio-experiencia-juego-para-ps4"
            }
          ]
        },
        {
          "key": "g-11",
          "code": "G011",
          "name": "勇者斗恶龙XI",
          "style": "经典冒险漫画",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 11,
          "scope": "勇者斗恶龙XI主要队员的3D造型",
          "values": {
            "form": 40,
            "expression": 50,
            "complexity": 55,
            "era": 30
          },
          "description": "干净轮廓与简洁面部结构，眼眉、发型和表情辨识度强。衣物与装备偏圆润，细节适中；人物英勇而不失幽默、朴实，怪物也强调容易记住的形状。",
          "comparison": "不同年龄、体型与职业如何在同一线条语言下保持统一。",
          "formReason": "大眼、漫画发束和头身偏卡通；三维渐变与材料虽经过概括，仍有柔和、完整的体积表达。",
          "complexityReason": "服装结构完整但装饰密度适中。",
          "eraReason": "王国、旅装、盔甲与法师职业指向中古欧洲式奇幻；埃尔德雷亚属于架空世界。",
          "eraLabel": "中古童话王国",
          "eraRange": [
            25,
            35
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.dq11.jp/funkit/_img/wallpaper/DQXI-D-1920x1080.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-11"
            },
            {
              "label": "图像来源",
              "url": "https://www.dq11.jp/funkit/"
            }
          ]
        },
        {
          "key": "g-12",
          "code": "G012",
          "name": "勇气默示录II",
          "style": "日式Q版职业角色",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 12,
          "scope": "勇气默示录II的Q版游戏内角色",
          "values": {
            "form": 20,
            "expression": 50,
            "complexity": 60,
            "era": 30
          },
          "description": "放大头部，压缩躯干与四肢，但保留完整职业装束。眼睛、发型和帽子承担识别任务，手脚简化、装备适当放大，兼顾可爱感与战斗表现。",
          "comparison": "比较短身比例下的衣摆、帽子、发型与装备。",
          "formReason": "大头短身与小型五官使形体高度卡通；表现保留三维塑形，不能因为Q版就把Y直接拉满。",
          "complexityReason": "职业帽饰、衣摆和装备保留较多设计信息。",
          "eraReason": "主角职业服装、王国体系与冷兵器为主要依据；Q版比例与年代无关。",
          "eraLabel": "中古职业奇幻",
          "eraRange": [
            25,
            35
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.nintendo.com/eu/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_bravelydefaultii/CI_NSwitch_BravelyDefaultII_BlindedByTheLight.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-12"
            },
            {
              "label": "图像来源",
              "url": "https://www.nintendo.com/de-de/Spiele/Nintendo-Switch-Spiele/BRAVELY-DEFAULT-II-1698006.html"
            }
          ]
        },
        {
          "key": "g-13",
          "code": "G013",
          "name": "奥丁领域：里普特拉西尔",
          "style": "华丽手绘奇幻",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 13,
          "scope": "实际二维角色形象与常态服饰",
          "values": {
            "form": 45,
            "expression": 75,
            "complexity": 85,
            "era": 25
          },
          "description": "人体比例带有舞台化和装饰性，羽毛、头发、裙摆和铠甲形成复杂流线。颜色具有丰富冷暖与渐变，金属和布料通过绘画表现，像精细插画在运动。",
          "comparison": "观察羽翼、布料与武器如何组织连续的外轮廓。",
          "formReason": "人物比例和服饰轮廓有装饰化变形；手绘渐变、边缘组织与绘画表面形成明显媒介语言。",
          "complexityReason": "羽翼、裙装和武器造型复杂，不把背景笔触计入纵轴。",
          "eraReason": "神话诸国、战士甲胄和古典衣裙混合；按古典到中古的文化类比定位，不将北欧神话换成真实年份。",
          "eraLabel": "北欧神话与中古幻想",
          "eraRange": [
            20,
            30
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://atlus-vanillaware.jp/osl/news/wp-content/uploads/2016/01/wp_pc1_1920x1080_osl.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-13"
            },
            {
              "label": "图像来源",
              "url": "https://atlus-vanillaware.jp/osl/news/special/page/2/"
            }
          ]
        },
        {
          "key": "g-14",
          "code": "G014",
          "name": "哈迪斯",
          "style": "图形化神话插画",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 14,
          "scope": "哈迪斯对话立绘，不是俯视小模型",
          "values": {
            "form": 65,
            "expression": 90,
            "complexity": 80,
            "era": 20
          },
          "description": "概括的轮廓与阴影结合有张力的人体姿态，局部撞色鲜明。神格与性格被转译为植物、兵器、首饰和纹样，使立绘本身就传递角色身份。",
          "comparison": "观察雷电、海洋与植物等主题如何直接参与头发、身体和服饰设计。",
          "formReason": "对话立绘仍能读出较完整的人体骨架和肌肉；图形化阴影、色彩重组及线条使表现高度风格化。",
          "complexityReason": "神格饰物与衣装本身复杂。",
          "eraReason": "希腊诸神、披裹服装、金属饰物与古典武器是年代依据；冥界没有可确认的现实历法。",
          "eraLabel": "古希腊神话",
          "eraRange": [
            15,
            25
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://static.wixstatic.com/media/21a631_aea31924b27a416ea02a6f9b2d105324~mv2.jpeg/v1/fill/w_980%2Ch_980%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/21a631_aea31924b27a416ea02a6f9b2d105324~mv2.jpeg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-14"
            },
            {
              "label": "图像来源",
              "url": "https://www.erscream.com/post/video-games-an-art-analysis"
            }
          ]
        },
        {
          "key": "g-15",
          "code": "G015",
          "name": "暗黑地牢",
          "style": "哥特黑块漫画",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 15,
          "scope": "暗黑地牢一代英雄战斗立绘",
          "values": {
            "form": 45,
            "expression": 90,
            "complexity": 65,
            "era": 35
          },
          "description": "黑色阴影占比高，眼睛经常隐藏，粗硬线条与棱角制造紧张感。土黄、暗红、灰绿配合脸、手和武器的局部亮面，强调精神压力和危险。",
          "comparison": "观察站姿、帽子和武器如何在五官较少的条件下区分职业。",
          "formReason": "英雄形体仍可识别，但比例与面部被概括；粗线、黑块和木刻感表面明显偏离自然成像。",
          "complexityReason": "护甲、面具、武器形成中高造型层次。",
          "eraReason": "甲胄、长袍与宗教职业偏中古，燧发枪、瘟疫医生等偏近代早期；以主要角色装备的混合中心定位。",
          "eraLabel": "中古至近代早期哥特",
          "eraRange": [
            30,
            40
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://d1m9vqlvl3fy94.cloudfront.net/project/attachment/116212/69365DarkestDungeon_Characters.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-15"
            },
            {
              "label": "图像来源",
              "url": "https://www.castingcall.club/projects/darkest-dungeon-ancestor-s-journal-readings-23042095-69fa-4499-b71a-ffb09f6ed49e"
            }
          ]
        },
        {
          "key": "g-16",
          "code": "G016",
          "name": "饥荒联机版",
          "style": "怪诞手绘童话",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 16,
          "scope": "饥荒联机版默认幸存者形象",
          "values": {
            "form": 15,
            "expression": 90,
            "complexity": 40,
            "era": 40
          },
          "description": "大头、细肢、尖角发型与略僵硬的姿态组合，人物脆弱而古怪。轮廓有手绘抖动感，配色偏旧纸与低饱和色，滑稽中带有不安。",
          "comparison": "比较发型、胡须与脸型，以及怪物和人类共用的线条语言。",
          "formReason": "尖头、细肢和异常头身高度卡通化；线稿、平涂与刻意粗糙的笔触形成统一的非自然表现。",
          "complexityReason": "默认衣物通常并不繁复，不能把怪诞程度等同复杂度。",
          "eraReason": "马甲、礼服、科学家装束与机械发明带有近代工业气质；永恒领域是架空空间，不能由荒野生存玩法推定为史前。",
          "eraLabel": "19世纪至20世纪初式怪诞生存",
          "eraRange": [
            35,
            45
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://a.storyblok.com/f/259446/1200x1079/3d9b461919/ds10_decal.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-16"
            },
            {
              "label": "图像来源",
              "url": "https://www.klei.com/games/dont-starve-together"
            }
          ]
        },
        {
          "key": "g-17",
          "code": "G017",
          "name": "茶杯头",
          "style": "复古动画与橡皮管",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 17,
          "scope": "茶杯头、马克杯人与圣杯小姐常态形象",
          "values": {
            "form": 10,
            "expression": 90,
            "complexity": 25,
            "era": 45
          },
          "description": "四肢像软管般弯曲，关节结构弱化，搭配大手套、大鞋和饼切形眼睛。日常物品被拟人化，夸张表情与挤压、拉伸、弹跳动作形成复古动画气质。",
          "comparison": "观察杯子、把手和吸管如何成为头部识别元素。",
          "formReason": "杯头、橡皮管四肢与手套大鞋形成高度符号化身体；角色以传统动画线条和概括明暗呈现。",
          "complexityReason": "大鞋手套与少量纯色服装属于低复杂造型。",
          "eraReason": "服饰、爵士娱乐和机械意象类比20世纪前期；官方1930年代指动画灵感，不能单凭此认定剧情发生在1930年。",
          "eraLabel": "20世纪前期复古卡通世界",
          "eraRange": [
            40,
            45
          ],
          "evidence": "已查阅下列官方资料；资料支持背景或灵感，数值位置与跨度仍是本图人工判断。",
          "images": [
            {
              "src": "https://images.nintendolife.com/8d0e5314bfcfd/cuphead-1.large.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-17"
            },
            {
              "label": "图像来源",
              "url": "https://www.nintendolife.com/features/cuphead-creators-on-the-perfect-physical-edition-animation-and-working-with-netflix"
            },
            {
              "label": "官方：1930年代动画灵感",
              "url": "https://studiomdhr.com/press-kits/"
            }
          ]
        },
        {
          "key": "g-18",
          "code": "G018",
          "name": "旗帜的传说",
          "style": "史诗平涂动画",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 18,
          "scope": "旗帜的传说对话及角色插画",
          "values": {
            "form": 65,
            "expression": 75,
            "complexity": 65,
            "era": 30
          },
          "description": "流畅长线条组织人体、胡须和披风，大面积平涂配少量清晰阴影。造型克制，以肩宽、身高、毛皮、编发和武器表达身份，具有传统二维动画的庄重感。",
          "comparison": "比较人类与巨人的体量，以及服装大轮廓的疏密节奏。",
          "formReason": "人体比例相对克制，面部与衣纹被简化；平涂、统一线条和经过编排的明暗让Y明显高于X。",
          "complexityReason": "披风、毛皮和武器中等复杂。",
          "eraReason": "披风、盾牌、斧矛与部族服饰偏北欧中古；按文化装备类比，不将架空族群当成历史民族。",
          "eraLabel": "北欧中古史诗",
          "eraRange": [
            25,
            30
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://stoicstudio.com/images/main-banner.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-18"
            },
            {
              "label": "图像来源",
              "url": "https://stoicstudio.com/"
            }
          ]
        },
        {
          "key": "g-19",
          "code": "G019",
          "name": "战场女武神",
          "style": "水彩与铅笔动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 19,
          "scope": "战场女武神角色的常态游戏画面",
          "values": {
            "form": 45,
            "expression": 70,
            "complexity": 60,
            "era": 45
          },
          "description": "动漫人物结合铅笔轮廓、水彩晕染和纸面留白。阴影轻、颜色通透，制服与武器保持结构，却用柔软边缘减弱冰冷感，呈现战争绘本般气质。",
          "comparison": "统一军装如何通过发型、表情和穿着变化产生个性。",
          "formReason": "人物为动漫比例与五官；铅笔边缘、水彩化颜色及材料处理形成绘画表达，不把纸纹密度当细节复杂度。",
          "complexityReason": "制服层次适中，水彩纸纹本身不增加服装复杂度。",
          "eraReason": "军服、坦克、步枪与工业国家接近两次世界大战之间的视觉语汇；游戏自身历法不当作真实世界纪年。",
          "eraLabel": "20世纪前期式架空战争",
          "eraRange": [
            45,
            50
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.creativeuncut.com/gallery-09/art/vc-characters.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-19"
            },
            {
              "label": "图像来源",
              "url": "https://www.creativeuncut.com/gallery-09/vc-characters.html"
            }
          ]
        },
        {
          "key": "g-20",
          "code": "G020",
          "name": "大神",
          "style": "水墨和风绘卷",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 20,
          "scope": "大神主要角色的游戏内造型",
          "values": {
            "form": 25,
            "expression": 95,
            "complexity": 45,
            "era": 20
          },
          "description": "轮廓具有毛笔的粗细、顿挫与飞白感，身体高度概括。红、黑和纸白形成强关系，云纹、火焰、旋涡和植物纹样融入身体，运动带有书写般流动感。",
          "comparison": "观察天照的红色纹样与墨线如何同时表现神性和运动方向。",
          "formReason": "身体、面部与生物特征被概括成符号；笔墨轮廓、色彩和表面语言都强烈依赖水墨媒介。",
          "complexityReason": "纹样有辨识度，但不能把笔触丰富等同复杂甲胄。",
          "eraReason": "神祇与古代日本村落是主基调，服饰和民俗吸收多个历史时期；只定位文化年代感，不指定统一朝代。",
          "eraLabel": "古代日本神话与历史母题",
          "eraRange": [
            15,
            35
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.maxoe.com/img/uploads/2018/01/Okami-HD_une.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-20"
            },
            {
              "label": "图像来源",
              "url": "https://www.maxoe.com/games/jeux-articles/tests-ps3/okami-hd-retour-dun-art-oublie-a-decouvrir/"
            }
          ]
        },
        {
          "key": "g-21",
          "code": "G021",
          "name": "极乐迪斯科",
          "style": "表现主义油画肖像",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 21,
          "scope": "极乐迪斯科对话肖像，不是场景模型",
          "values": {
            "form": 75,
            "expression": 90,
            "complexity": 35,
            "era": 45
          },
          "description": "保留明显笔触，面部边缘可以溶解、破碎或变形。肤色不严格服从自然光，而用冷暖冲突、异常色块与背景笔势表达精神状态和社会气质。",
          "comparison": "比较肖像背景、笔触方向及面部处理，不将肖像画风等同于全部游戏模型。",
          "formReason": "仅评对话肖像：脸部骨相较可信，形体变形相对有限；非自然配色、破碎笔触和色面重组使Y很高。",
          "complexityReason": "肖像所见日常领口配件较少。此点只代表肖像方向。",
          "eraReason": "西装、警务、汽车、工业港口与政治社会接近现代；游戏的“51年”不是公元1951年的直接证据。",
          "eraLabel": "20世纪中后期式架空现代",
          "eraRange": [
            45,
            50
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://images.stopgame.ru/articles/2020/02/12/ot_glubokogo_zapoya_do_revolyucii_v_rpg_istoriya_razrabotki_disco_elysium-1581535444-s.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-21"
            },
            {
              "label": "图像来源",
              "url": "https://stopgame.ru/show/107801/ot_glubokogo_zapoya_do_revolyucii_v_rpg_istoriya_razrabotki_disco_elysium"
            }
          ]
        },
        {
          "key": "g-22",
          "code": "G022",
          "name": "Spiritfarer",
          "style": "温暖绘本拟人",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 22,
          "scope": "Spiritfarer主要角色常态全身形象",
          "values": {
            "form": 30,
            "expression": 80,
            "complexity": 40,
            "era": null
          },
          "description": "动物形态结合人类衣着与习惯动作，轮廓舒展、色块柔和、细节适中。胖瘦、高矮和弯腰方式参与性格表达，强调陪伴感与情绪交流。",
          "comparison": "比较不同体型的站姿、服装及道具如何传递个性。",
          "formReason": "动物拟人的头身与五官明显卡通；轮廓线、平面色块与柔和的绘本着色提高Y。",
          "complexityReason": "衣物和道具适中，不计背景画面细节。",
          "eraReason": "角色生前经历、现代衣装、渡船神话与灵界共存；缺少能代表全体角色的单一历史年代，列入待定带。",
          "eraLabel": "跨时代灵界 · 无单一年代",
          "eraRange": null,
          "evidence": "不作确定年代判断；参考对象见原图鉴。",
          "images": [
            {
              "src": "https://www.touchtapplay.com/wp-content/uploads/2022/01/All-Characters-and-Stories-in-Spiritfarer-scaled.jpeg?fit=2560%2C1440"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-22"
            },
            {
              "label": "图像来源",
              "url": "https://www.touchtapplay.com/spiritfarer-character-guide-all-characters-and-stories-in-spiritfarer/"
            }
          ]
        },
        {
          "key": "g-23",
          "code": "G023",
          "name": "空洞骑士",
          "style": "极简面具式暗黑童话",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 23,
          "scope": "空洞骑士主要NPC与主角基础形象",
          "values": {
            "form": 10,
            "expression": 90,
            "complexity": 25,
            "era": 30
          },
          "description": "面部简化为面具与少量孔洞，角、触须和披风承担识别。黑白关系鲜明，躯干细节少，通过头形及姿态传递情绪，兼具可爱与疏离感。",
          "comparison": "比较头部轮廓。媒体整理图用于视觉参考，不作为官方设定表。",
          "formReason": "面具五官、短身和简化披风接近符号形象；角色主要以平面线条和少量色块塑造，而不是自然材料。",
          "complexityReason": "不以大型Boss替代主角群体。",
          "eraReason": "骑士、披风、遗迹与衰亡王国指向中古奇幻类比；虫族历史不可换算为人类纪年。",
          "eraLabel": "中古王国式虫族文明",
          "eraRange": [
            20,
            40
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://n.sinaimg.cn/translate/584/w841h543/20180705/-5jf-hevauxk8215801.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-23"
            },
            {
              "label": "图像来源",
              "url": "https://games.sina.cn/wm/2018-07-05/detail-ihevauxk8216601.d.html"
            }
          ]
        },
        {
          "key": "g-24",
          "code": "G024",
          "name": "纸片马力欧 RPG",
          "style": "纸片剪贴",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 24,
          "scope": "纸片马力欧RPG的纸片角色本体",
          "values": {
            "form": 10,
            "expression": 80,
            "complexity": 25,
            "era": 40
          },
          "description": "人物像裁切的纸片，黑色轮廓明确、内部上色简洁。图标化表情配合翻转、折叠与替换姿态的动作，视觉材质和表演都服务于纸质设定。",
          "comparison": "观察外轮廓、平涂色和简化五官。",
          "formReason": "角色本体的比例、五官和剪影高度漫画化；纸边可呈现真实质感，但纸面人物仍依赖平涂和描线。",
          "complexityReason": "环境光照不把纸片角色推到写实侧。",
          "eraReason": "王国、海盗、铁路、舞台和现代设施并存；主点只是所选作品的粗略混合定位，纸片工艺不决定故事年代。",
          "eraLabel": "童话、航海与近现代设施混合",
          "eraRange": [
            30,
            55
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.nintendo.com/tw/switch/a9qda/assets/img/character/chara_header.webp"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-24"
            },
            {
              "label": "图像来源",
              "url": "https://www.nintendo.com/tw/switch/a9qda/character/index.html"
            }
          ]
        },
        {
          "key": "g-25",
          "code": "G025",
          "name": "小小大星球3",
          "style": "布偶与手工拼接",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 25,
          "scope": "小小大星球3默认布偶，排除复杂联动换装",
          "values": {
            "form": 25,
            "expression": 25,
            "complexity": 35,
            "era": null
          },
          "description": "角色像实际制作的布娃娃，针织、毛毡、粗布、纽扣和拉链成为主要元素。身体柔软，接缝与填充感明确，换装像给玩偶添加手工配件。",
          "comparison": "观察角色身体结构，以及可见纤维和缝线的尺度。",
          "formReason": "布偶的大头短肢高度卡通；纤维、缝线、拉链和接触阴影接近可拍摄的现实玩偶，因此Y较低。",
          "complexityReason": "缝线拉链数量有限，纹理细腻不等于服饰繁复。",
          "eraReason": "布偶与拼接是表现材料，多个关卡世界可以跨越时代；没有可靠依据把整个作品归入某个历史阶段。",
          "eraLabel": "手工幻想世界 · 无单一年代",
          "eraRange": null,
          "evidence": "不作确定年代判断；参考对象见原图鉴。",
          "images": [
            {
              "src": "https://images.pushsquare.com/17611b2a4dd30/1280x720.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-25"
            },
            {
              "label": "图像来源",
              "url": "https://www.pushsquare.com/games/ps4/littlebigplanet_3"
            }
          ]
        },
        {
          "key": "g-26",
          "code": "G026",
          "name": "动物森友会",
          "style": "圆润亲和人物",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 26,
          "scope": "动物森友会居民默认衣装",
          "values": {
            "form": 20,
            "expression": 50,
            "complexity": 30,
            "era": 50
          },
          "description": "大头、短肢、圆柱或梨形躯干，动物特征概括为耳朵、口鼻和尾巴。眼嘴接近平面图案，服装以简洁花纹为主，强调亲切与日常感。",
          "comparison": "不同动物种类如何共享相近身体模板，同时保留辨识度。",
          "formReason": "动物与居民五官符号化、头身夸张；表面和色彩高度整理，但有柔和三维光照，不属于纯平面图形。",
          "complexityReason": "服装层数少、配件低密度。",
          "eraReason": "居民日常服装、手机、家居与公共服务指向当代；岛屿生活与动物拟人不改变年代判断。",
          "eraLabel": "当代日常生活",
          "eraRange": [
            50,
            50
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.vodafone.de/featured/media/cache/hero_teaser_image/cms/2020/02/Animal-Crossing-Nintendo-Pressebild.jpg?v=1f1f98960b7fd126863b394b254326b6"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-26"
            },
            {
              "label": "图像来源",
              "url": "https://www.vodafone.de/featured/article/animal-crossing-nintendo-direct-zeigt-reif-fuer-die-insel-paket-co-91707"
            }
          ]
        },
        {
          "key": "g-27",
          "code": "G027",
          "name": "糖豆人",
          "style": "极简软体角色",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 27,
          "scope": "糖豆人基础豆形身体，排除主题套装",
          "values": {
            "form": 10,
            "expression": 45,
            "complexity": 15,
            "era": 50
          },
          "description": "人体压缩为豆形或胶囊形主体，几乎没有解剖细节。短肢、极简眼睛和高饱和色搭配软胶般表面，个性主要来自颜色、外套和肢体倾斜。",
          "comparison": "观察最少的身体结构如何表现动作与情绪。",
          "formReason": "胶囊身体与面部高度抽象；基础豆形保留软体玩具式体积与高光，Y不会因极简比例自动到顶。",
          "complexityReason": "基础造型的结构装饰都很少。",
          "eraReason": "基础豆人置于电视竞技与主题乐园式舞台，按当代娱乐社会类比；未来赛季和历史服装不代表统一正史年份。",
          "eraLabel": "当代综艺式竞技世界",
          "eraRange": [
            50,
            60
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://staticg.sportskeeda.com/editor/2025/01/47be8-17373397243642-1920.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-27"
            },
            {
              "label": "图像来源",
              "url": "https://www.sportskeeda.com/esports/is-worth-playing-fall-guys-2025"
            }
          ]
        },
        {
          "key": "g-28",
          "code": "G028",
          "name": "宝可梦",
          "style": "图标化萌系生物",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 28,
          "scope": "初代御三家官方二维角色图；不泛指所有世代模型",
          "values": {
            "form": 20,
            "expression": 75,
            "complexity": 25,
            "era": 50
          },
          "description": "以动物为基础，把植物、火焰、水或矿物等主题融合进身体。轮廓简洁、主色较少、表情亲和，少量结构特征使角色在小尺寸下仍容易辨认。",
          "comparison": "比较背部植物、尾端火焰和龟壳如何成为核心记忆点。",
          "formReason": "仅评初代御三家二维图：生物特征被压缩为可识别的大形状；线条、平涂和概括阴影明显风格化。",
          "complexityReason": "此点只定位图鉴中的二维生物设计样本。",
          "eraReason": "本案例是初代宝可梦角色图像，年代参照其现代训练师世界、实验室与城市生活；精灵球科技不单独推出遥远未来。",
          "eraLabel": "现代生活与超常科技共存",
          "eraRange": [
            50,
            60
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://images.nintendolife.com/419360808c6be/gen1starters.original.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-28"
            },
            {
              "label": "图像来源",
              "url": "https://www.nintendolife.com/news/2020/02/feature_best_pokemon_starters_from_all_gens_as_voted_by_you?page=3"
            }
          ]
        },
        {
          "key": "g-29",
          "code": "G029",
          "name": "斯普拉遁3",
          "style": "街头潮流卡通",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 29,
          "scope": "斯普拉遁3玩家角色的常态衣装",
          "values": {
            "form": 30,
            "expression": 50,
            "complexity": 55,
            "era": 100
          },
          "description": "大头、修长四肢与夸张鞋子结合，服装借鉴滑板、运动和街头品牌。非人类特征转化为发型、眼部纹样及身体材质，配色鲜艳，动作有弹性。",
          "comparison": "观察触手发型、鞋子、帽子与武器的组合。",
          "formReason": "大头、手脚和触手头发明显卡通；色彩有强设计性，墨液、鞋和衣物仍有可信三维材料反应。",
          "complexityReason": "装备复杂度中等。",
          "eraReason": "任天堂年表将人类灭绝相关事件放在约一万两千年前；潮流服饰看似当代，世界历史仍属于遥远未来。",
          "eraLabel": "人类时代约一万多年之后",
          "eraRange": [
            95,
            100
          ],
          "evidence": "已查阅下列官方资料；资料支持背景或灵感，数值位置与跨度仍是本图人工判断。",
          "images": [
            {
              "src": "https://mms.businesswire.com/media/20220909005154/en/1566648/5/Splatoon_3_Key_Art.jpg?download=1"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-29"
            },
            {
              "label": "图像来源",
              "url": "https://www.businesswire.com/news/home/20220909005154/en/Nintendo-News-Ink-Your-Mark-on-the-Splatlands-in-the-Fast-and-Fresh-Splatoon-3-Out-Now"
            },
            {
              "label": "任天堂：世界历史年表",
              "url": "https://splatoon.nintendo.com/base/en/story/"
            }
          ]
        },
        {
          "key": "g-30",
          "code": "G030",
          "name": "我的世界",
          "style": "方块与体素感",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 30,
          "scope": "我的世界默认Steve与Alex，无写实材质包",
          "values": {
            "form": 5,
            "expression": 80,
            "complexity": 20,
            "era": 25
          },
          "description": "立方体和长方体概括头部、躯干及四肢，曲面和解剖大幅简化。像素贴图、颜色分区与附件建立身份，与方块世界共享统一几何语言。",
          "comparison": "配图为任天堂联动渲染图。这里描述视觉方向，并不表示各游戏建模技术相同。",
          "formReason": "方块身体与关节极度符号化；默认像素表面、有限色块与概括照明使呈现也高度风格化。",
          "complexityReason": "默认服饰几乎没有层叠。",
          "eraReason": "石木工具、冶炼与冷兵器是常见生存进程，红石等又跨越技术类比；25只是主视觉定位，不是官方年代。",
          "eraLabel": "原始采集、中古工艺与机制装置混合",
          "eraRange": [
            0,
            65
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://mms.businesswire.com/media/20201003005002/en/827177/5/SSBU_Steve_%26_Alex_1.jpg?download=1"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-30"
            },
            {
              "label": "图像来源",
              "url": "https://www.businesswire.com/news/home/20201003005002/en/Steve-and-Alex-From-Minecraft-Block-Off-Some-Time-to-Join-the-Cast-of-Super-Smash-Bros.-Ultimate"
            }
          ]
        },
        {
          "key": "g-31",
          "code": "G031",
          "name": "深岩银河",
          "style": "低多边形切面",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 31,
          "scope": "深岩银河默认职业矮人",
          "values": {
            "form": 30,
            "expression": 70,
            "complexity": 60,
            "era": 70
          },
          "description": "保留明显多边形转折，用大块明暗塑造体积。头发、胡须、手臂与装甲都可组织成硬朗几何体，细节集中在轮廓和装备分块，而非微小纹理。",
          "comparison": "观察胡须、肩甲和工具的几何分块，以及各职业颜色差异。",
          "formReason": "矮人短壮体态与结构被切面化概括；块面明暗和低多边形表面共同构成显著视觉语言。",
          "complexityReason": "肩甲、背包和职业工具形成中等结构复杂度。",
          "eraReason": "太空矿业、动力装备、机器人与外星作业明确属于未来；矮人母题和低多边形表现不降低故事科技时代。",
          "eraLabel": "星际采矿时代",
          "eraRange": [
            60,
            85
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://cdn.mos.cms.futurecdn.net/KWFF3SDU5sWCoJKNgV2RRA.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-31"
            },
            {
              "label": "图像来源",
              "url": "https://www.pcgamer.com/meet-one-of-the-last-positive-communities-left-in-gaming/"
            }
          ]
        },
        {
          "key": "g-32",
          "code": "G032",
          "name": "八方旅人",
          "style": "精细像素角色",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 32,
          "scope": "八方旅人战斗与行走像素角色，不是高清设定画",
          "values": {
            "form": 25,
            "expression": 80,
            "complexity": 45,
            "era": 30
          },
          "description": "有限像素组织头发、面部、服装和武器，强调清楚轮廓、颜色簇与明暗层级。少量关键像素建立职业差别，再配合现代场景光照也能形成新的整体观感。",
          "comparison": "社区职业对照图。像素边缘是风格特征；HD-2D描述整体呈现方式，不是独立的人体造型风格。",
          "formReason": "仅评游戏内像素人物：头身被压缩，面部符号化；材料和明暗由有限像素簇表达，不纳入场景景深。",
          "complexityReason": "职业装备清楚但受可见像素限制，场景景深不计入角色真实度。",
          "eraReason": "旅人服装、城镇、王权与传统职业偏前工业世界；不将HD-2D像素技术的制作年代当成故事年代。",
          "eraLabel": "中古至近代早期职业冒险",
          "eraRange": [
            25,
            40
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://i.pinimg.com/originals/e6/58/8f/e6588f8dfb151e57217a3611ba2b6206.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-32"
            },
            {
              "label": "图像来源",
              "url": "https://www.pinterest.com/pin/octopath-job-sprites--382946774564062833/"
            }
          ]
        },
        {
          "key": "g-33",
          "code": "G033",
          "name": "神秘海域4",
          "style": "自然主义写实",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 1,
          "scope": "神秘海域4主要人类角色游戏模型",
          "values": {
            "form": 100,
            "expression": 10,
            "complexity": 40,
            "era": 50
          },
          "description": "卷袖衬衫、皮革枪套和运动员体态接近日常实物，胡茬、布料褶皱与轻便装备塑造可信的冒险者。",
          "comparison": "较《最后生还者》更强调敏捷与亲和力，而非生存疲惫。配图为双角色概念稿。",
          "formReason": "自然人体比例和面部使X靠右；角色皮肤、布料与光照接近现实观察，电影化色调只作轻度处理。",
          "complexityReason": "自然人体与材料靠写实端，轻便衬衫、枪套和裤装只形成中低造型层次。",
          "eraReason": "主要人物处于当代社会，服装、通信与交通是锚点；海盗遗址只是探索对象，不代表主角所处时代。",
          "eraLabel": "当代探险",
          "eraRange": [
            50,
            50
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://cdn.vox-cdn.com/thumbor/eF0mjDNcMroLdH3ny6yqKTmu_Dc%3D/cdn.vox-cdn.com/uploads/chorus_asset/file/3840584/AOUC4_Preview_PG_01.0.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-33"
            },
            {
              "label": "图像来源",
              "url": "https://www.polygon.com/2015/7/2/8878173/the-art-of-uncharted-4-a-thiefs-end"
            }
          ]
        },
        {
          "key": "g-34",
          "code": "G034",
          "name": "荒野大镖客：救赎2",
          "style": "自然主义写实",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 1,
          "scope": "荒野大镖客2主要帮派成员常态衣着",
          "values": {
            "form": 100,
            "expression": 10,
            "complexity": 60,
            "era": 40
          },
          "description": "长外套、马甲、衬衫、枪带和帽型形成历史服饰层次，胡须与身材差异强化年龄和社会身份。",
          "comparison": "同属写实，更依赖年代服饰与风尘感。海报化宣传图不能代替实际皮肤材质参考。",
          "formReason": "主要成员人体结构接近现实；皮革、布料、毛发和明暗连续可信，西部题材不改变表现维度。",
          "complexityReason": "马甲、外套、枪带和帽子层叠比现代休闲装复杂，但不按宣传海报评分。",
          "eraReason": "主线1899年，尾声跨入20世纪初；以主线时代为主点，区间保留前后跨度。",
          "eraLabel": "1899年为主 · 美国西部",
          "eraRange": [
            40,
            45
          ],
          "evidence": "已查阅下列官方资料；资料支持背景或灵感，数值位置与跨度仍是本图人工判断。",
          "images": [
            {
              "src": "https://miro.medium.com/v2/1%2AnKC1VQvFpFknUxwsXEpUIg.jpeg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-34"
            },
            {
              "label": "图像来源",
              "url": "https://medium.com/%40AdamR19/red-dead-redemption-2-sobering-melancholy-and-very-fun-7ece16c69a9d"
            },
            {
              "label": "官方商店：1899年",
              "url": "https://www.playstation.com/en-us/games/red-dead-redemption-2/"
            }
          ]
        },
        {
          "key": "g-35",
          "code": "G035",
          "name": "死亡搁浅",
          "style": "科幻机能与工业装甲",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 33,
          "scope": "死亡搁浅Sam默认工作装，含常态运输背架",
          "values": {
            "form": 95,
            "expression": 15,
            "complexity": 85,
            "era": 55
          },
          "description": "防水服、背架、扣具和货箱改变人体轮廓，装备围绕运输、连接与环境防护组织，强调负载逻辑。",
          "comparison": "与军事装甲相比，主要识别点是负重系统和仪器，而非护甲厚度。",
          "formReason": "人物骨相与比例高度写实，背架是功能装备而非身体变形；材料和光影可信，科幻物件不自动增加Y。",
          "complexityReason": "负重背架、扣具和仪器增加功能结构，不计极端满载货堆。",
          "eraReason": "配送装备、感知装置与重建社会属于未来科技背景；荒凉环境不等于古代，未以具体年表作精确换算。",
          "eraLabel": "近未来灾变之后",
          "eraRange": [
            55,
            65
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://images.stopgame.ru/uploads/users/2025/707889/00015.4itwg1r.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-35"
            },
            {
              "label": "图像来源",
              "url": "https://stopgame.ru/blogs/topic/117763/death_stranding_i_ego_odinochestvo"
            }
          ]
        },
        {
          "key": "g-36",
          "code": "G036",
          "name": "生化危机：村庄",
          "style": "写实暗黑奇幻",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 2,
          "scope": "村庄主要人形角色，排除怪物变身",
          "values": {
            "form": 90,
            "expression": 20,
            "complexity": 65,
            "era": 50
          },
          "description": "真实皮肤、礼服、面纱和宗教装饰并置，熟悉人体被异常比例或怪物特征打破。低饱和衣物制造不安。",
          "comparison": "较暗黑骑士方向更侧重贵族、村民和家庭形象。配图为壁纸站人物合成。",
          "formReason": "主要人形角色有少量身高和面部夸张；皮肤及衣物仍按自然材料塑造，哥特服饰不直接推高Y。",
          "complexityReason": "礼服、面纱与宗教饰物比日常衣着更繁复。",
          "eraReason": "现代主人公、枪械与生化科技决定主时代；古堡、乡村服饰和哥特反派是复古造型，不把故事判成中世纪。",
          "eraLabel": "当代生化恐怖",
          "eraRange": [
            50,
            55
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://images6.alphacoders.com/114/thumb-1920-1149542.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-36"
            },
            {
              "label": "图像来源",
              "url": "https://wall.alphacoders.com/big.php?i=1149542"
            }
          ]
        },
        {
          "key": "g-37",
          "code": "G037",
          "name": "博德之门3",
          "style": "写实暗黑奇幻",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 2,
          "scope": "博德之门3起源伙伴的基础造型",
          "values": {
            "form": 90,
            "expression": 25,
            "complexity": 75,
            "era": 30
          },
          "description": "尖耳、角、肤色和骨相区分种族，刺绣、皮革与金属区分职业；丰富面部表演让奇幻身份具有亲近感。",
          "comparison": "较遮面盔甲风更重视可见面部、伙伴气质与职业服装。",
          "formReason": "伙伴身体与五官维持自然逻辑，异族特征只算实际变形；皮肤、金属和布料接近自然，配色略作设计。",
          "complexityReason": "甲胄、刺绣、层叠服饰与配件增加设计密度。",
          "eraReason": "费伦人形角色的甲胄、长袍与冷兵器接近中古奇幻；DR历法1492年不等于公元1492年。",
          "eraLabel": "中古式高魔奇幻",
          "eraRange": [
            25,
            35
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://assetsio.gnwcdn.com/baldurs-gate-3-key-art-crop.jpg?auto=webp&fit=bounds&format=jpg&height=1920&quality=70&width=1920"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-37"
            },
            {
              "label": "图像来源",
              "url": "https://www.eurogamer.pt/personagens-de-origem-explicados-em-baldurs-gate-3"
            }
          ]
        },
        {
          "key": "g-38",
          "code": "G038",
          "name": "巫师3：狂猎",
          "style": "自然主义写实",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 1,
          "scope": "巫师3主要人物的常态衣甲",
          "values": {
            "form": 90,
            "expression": 20,
            "complexity": 65,
            "era": 30
          },
          "description": "猎魔人以皮革、链甲和剑鞘形成实用轮廓，法师通过剪裁、毛皮和首饰体现地位，发色和疤痕形成标志。",
          "comparison": "重点是民俗背景下的职业阶层，以及朴素装束和精致时装的并置。",
          "formReason": "人物与五官略理想化，主要结构可信；旧皮革、锁甲及皮肤以自然光影呈现，不将奇幻题材当风格化分。",
          "complexityReason": "职业束带、衣料层次与兵器使复杂度中高。",
          "eraReason": "猎魔人装备、王权、城镇与民众衣装提供中古类比；大陆自己的历法不能直接换算公元。",
          "eraLabel": "中古欧洲式奇幻",
          "eraRange": [
            25,
            35
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.weareplaystation.fr/cdn-cgi/image/w%3D3840%2Cf%3Dauto%2Cq%3D80/api/upload/media/post/0006/16/thumb_515125_post_big.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-38"
            },
            {
              "label": "图像来源",
              "url": "https://www.weareplaystation.fr/communautes/the-witcher-3-wild-hunt/astuces/wiki/les-personnages-1"
            }
          ]
        },
        {
          "key": "g-39",
          "code": "G039",
          "name": "血源诅咒",
          "style": "写实暗黑奇幻",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 2,
          "scope": "血源主要猎人与人偶常态造型，不计兽化Boss",
          "values": {
            "form": 80,
            "expression": 30,
            "complexity": 75,
            "era": 40
          },
          "description": "高领、披肩、长裙、礼帽与皮革长衣构成纵向轮廓，面部遮挡和陈旧织物增强神秘感。",
          "comparison": "相比中世纪板甲，更瘦长、轻薄，黑色织物更重要。配图为人偶的多视角单角色设定。",
          "formReason": "猎人与人偶略有修长和雕塑化形体；材料较真实，但色调与明暗比自然记录更经过编排。",
          "complexityReason": "披肩、长衣、蕾丝和多层遮盖比简洁现代装复杂。",
          "eraReason": "猎人长外套、礼帽、火器与都市服装更接近19世纪，虽有古老宗教与超自然设定，主点仍按近代类比。",
          "eraLabel": "维多利亚式哥特工业年代感",
          "eraRange": [
            35,
            40
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.creativeuncut.com/gallery-29/art/bb-doll.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-39"
            },
            {
              "label": "图像来源",
              "url": "https://www.creativeuncut.com/gallery-29/bb-doll.html"
            }
          ]
        },
        {
          "key": "g-40",
          "code": "G040",
          "name": "只狼：影逝二度",
          "style": "自然主义写实",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 1,
          "scope": "只狼主角与主要人形角色常态造型",
          "values": {
            "form": 90,
            "expression": 20,
            "complexity": 60,
            "era": 35
          },
          "description": "褪色外衣、绑腿、绳结与义手围绕活动需求组织，破损旧布传达长期战斗经历，轮廓保持收束。",
          "comparison": "相较《仁王2》华丽甲胄，装饰更克制，识别集中在围巾、旧衣和义手。",
          "formReason": "人体、面部和肢体结构较自然；旧布、皮肤、金属与连续光影占主导，忍者题材不决定Y。",
          "complexityReason": "绑腿、围巾、义手与刀具增加层次，纹饰较克制。",
          "eraReason": "官方明确为16世纪末战国日本；忍者与武士造型围绕该时代，超自然敌人不改变主历史锚点。",
          "eraLabel": "16世纪末 · 日本战国",
          "eraRange": [
            35,
            35
          ],
          "evidence": "已查阅下列官方资料；资料支持背景或灵感，数值位置与跨度仍是本图人工判断。",
          "images": [
            {
              "src": "https://www.activision.com/cdn/sekiro/artbook/sekiro-page-21-ru.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-40"
            },
            {
              "label": "图像来源",
              "url": "https://www.sekirothegame.com/ru/digitalartbook"
            },
            {
              "label": "官方：16世纪末日本",
              "url": "https://www.playstation.com/en-vn/games/sekiro-shadows-die-twice/"
            }
          ]
        },
        {
          "key": "g-41",
          "code": "G041",
          "name": "黑神话：悟空",
          "style": "写实暗黑奇幻",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 2,
          "scope": "悟空与主要人形神怪，排除巨大怪物特例",
          "values": {
            "form": 85,
            "expression": 15,
            "complexity": 85,
            "era": 30
          },
          "description": "动物骨相、毛发和拟人身体结合，传统衣冠、宗教意象与繁复甲片建立神怪身份，材料保持写实触感。",
          "comparison": "与西方暗黑奇幻比较，关注传统纹饰、雕塑感和动物原型的融合。",
          "formReason": "只评悟空与主要人形神怪：非人骨相有实际变形，但结构可信；毛发、金属和布料高度接近自然材料。",
          "complexityReason": "冠甲、纹饰及服装组织复杂。",
          "eraReason": "西游神话与传统衣冠、甲胄、佛教造像是主线索；艺术参考跨朝代，不能因故事源自唐僧取经便将所有造型定成唐代。",
          "eraLabel": "中国古代神话与多朝代艺术母题",
          "eraRange": [
            20,
            35
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.gry-online.pl/i/h/22/471548302.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-41"
            },
            {
              "label": "图像来源",
              "url": "https://www.gry-online.pl/newsroom/black-myth-wukong-nareszcie-z-mapa-wielka-aktualizacja-dodaje-tak/z02bafe"
            }
          ]
        },
        {
          "key": "g-42",
          "code": "G042",
          "name": "仁王2",
          "style": "写实暗黑奇幻",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 2,
          "scope": "仁王2常见人类武士装备，不计临时妖化特效",
          "values": {
            "form": 85,
            "expression": 25,
            "complexity": 85,
            "era": 35
          },
          "description": "层叠札甲、绳结、面具与武器形成密集结构，鬼角和妖怪元素打破人体边界，局部红黑金强化威势。",
          "comparison": "相较《只狼》，装备轮廓更繁复，妖化特征更突出。配图以单角色为主。",
          "formReason": "武士比例略理想化；材料与照明以自然表现为主，纹饰和甲片丰富不等于表现风格化更强。",
          "complexityReason": "层叠札甲、绳结、头盔和武器具有高造型密度。",
          "eraReason": "官方以1555年的日本为开端，主要历史服饰与武备属于战国至近世早期；本点不含穿越到更早年代的扩展内容。",
          "eraLabel": "1555年起 · 日本战国",
          "eraRange": [
            35,
            35
          ],
          "evidence": "已查阅下列官方资料；资料支持背景或灵感，数值位置与跨度仍是本图人工判断。",
          "images": [
            {
              "src": "https://img.gamewith.jp/img/8d35a1064e2c18050e800aa42216ecc9.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-42"
            },
            {
              "label": "图像来源",
              "url": "https://gamewith.jp/gamedb/3954/articles/15544"
            },
            {
              "label": "官方商店：1555年日本",
              "url": "https://store.playstation.com/en-us/product/UP9000-CUSA15532_00-NIOH2NA000000000"
            }
          ]
        },
        {
          "key": "g-43",
          "code": "G043",
          "name": "怪物猎人：世界",
          "style": "厚重夸张奇幻",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 4,
          "scope": "怪物猎人世界常见猎人套装及固定NPC",
          "values": {
            "form": 80,
            "expression": 30,
            "complexity": 90,
            "era": 30
          },
          "description": "护甲吸收怪物的角、鳞片、骨骼和皮毛，来源感强；大武器、手套与靴子夸张体量，保留装配逻辑。",
          "comparison": "与种族差异相比，更适合研究同一人体因素材套装改变而获得的新轮廓。",
          "formReason": "猎人和装备轮廓适度夸张；骨、角、金属与皮毛仍有材料逻辑，色彩和光影经过统一整理。",
          "complexityReason": "甲片、骨角与皮毛层次很高。",
          "eraReason": "角色使用兽皮、鳞甲、金属重甲和大型机械武器；按前工业狩猎文明类比，不能因为怪兽题材就定为史前。",
          "eraLabel": "部落、甲胄与工坊技术混合",
          "eraRange": [
            15,
            40
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://mail.creativeuncut.com/gallery-35/art/mhw-first-fleet.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-43"
            },
            {
              "label": "图像来源",
              "url": "https://mail.creativeuncut.com/gallery-35/mhw-first-fleet.html"
            }
          ]
        },
        {
          "key": "g-44",
          "code": "G044",
          "name": "最终幻想VII 重制版",
          "style": "精致日式动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 8,
          "scope": "最终幻想VII重制版主要队员默认服装",
          "values": {
            "form": 70,
            "expression": 25,
            "complexity": 65,
            "era": 60
          },
          "description": "尖束发型、清楚眼型和理想化身材保留动漫基因，皮革、金属与皮肤采用细腻体积，超大武器形成标志。",
          "comparison": "相较《原神》的平面明暗，光照更连续，材质细节更丰富。",
          "formReason": "动漫式五官、发型与理想比例使X略向卡通；皮肤、布料和金属则以较自然的连续光影呈现。",
          "complexityReason": "常态衣装并非全员高装饰。",
          "eraReason": "现代都市、机车、枪械与先进兵器并存；魔晄与科幻技术形成未来类比，非地球统一纪年。",
          "eraLabel": "工业都市与高科技奇幻",
          "eraRange": [
            45,
            75
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://fotografias-2.larazon.es/assets/videojuegos/2020/04/personajes-ffvii.jpg?height=720&width=1200"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-44"
            },
            {
              "label": "图像来源",
              "url": "https://www.larazon.es/videojuegos/square-enix/la-personalidad-de-los-protagonistas-de-final-fantasy-vii-remake-te-enamorara-y-te-explicamos-por-que_20200410699781ba9243cc133c549b15.html"
            }
          ]
        },
        {
          "key": "g-45",
          "code": "G045",
          "name": "最终幻想XIV",
          "style": "华丽手绘奇幻",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 13,
          "scope": "最终幻想XIV主要人物及典型职业套装",
          "values": {
            "form": 60,
            "expression": 50,
            "complexity": 85,
            "era": 35
          },
          "description": "长袍、甲胄、蕾丝、羽饰与大型武器形成职业轮廓，族群体型提供基础，套装进一步表达角色功能。",
          "comparison": "观察复杂插画服装如何转译为三维角色；此处配图为群像插画。",
          "formReason": "族群与职业人物比例带动漫理想化；材料和明暗比自然摄影更概括，但仍保留三维体积。",
          "complexityReason": "理想化族群比例与游戏化材料居中偏右，披风、甲胄、法袍和武器造型繁复。",
          "eraReason": "常见职业衣装以奇幻传统服装为基底，帝国机械与高科技地域使跨度很大；主点是代表角色的时代感，不概括全部版本。",
          "eraLabel": "中古奇幻与魔导工业并存",
          "eraRange": [
            25,
            75
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://miro.medium.com/1%2Abu-HV6Px4vES0WTke7juAQ.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-45"
            },
            {
              "label": "图像来源",
              "url": "https://medium.com/%40catbussell/the-existentialist-wonder-of-final-fantasy-xiv-endwalker-c6f3b66ab0df"
            }
          ]
        },
        {
          "key": "g-46",
          "code": "G046",
          "name": "尼尔：机械纪元",
          "style": "主题时装与科幻哥特",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 35,
          "scope": "尼尔机械纪元2B、9S、A2常态模型",
          "values": {
            "form": 70,
            "expression": 30,
            "complexity": 65,
            "era": 95
          },
          "description": "白发、黑衣、眼罩建立极简色彩关系，刺绣、长靴和裙摆具有哥特气质，人造身份与类人身体形成张力。",
          "comparison": "较赛博朋克外露接口和杂色街装，更依赖克制配色与时装剪影。",
          "formReason": "主要人物有理想化动漫比例与面部；黑衣、皮肤和机械保留材料逻辑，统一色调带适度风格处理。",
          "complexityReason": "裙摆、刺绣、眼罩与武器密度中高。",
          "eraReason": "开发商明确设定在遥远未来；哥特服饰是审美引用，不代表角色生活于维多利亚时代。95为本图远未来档位判断。",
          "eraLabel": "遥远未来的机器人战争",
          "eraRange": [
            85,
            100
          ],
          "evidence": "已查阅下列官方资料；资料支持背景或灵感，数值位置与跨度仍是本图人工判断。",
          "images": [
            {
              "src": "https://novacrystallis.com/wp-content/uploads/2016/04/NieR-Automata-Character-Art.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-46"
            },
            {
              "label": "图像来源",
              "url": "https://novacrystallis.com/2016/04/nier-automata-official-screenshots-released/nier-automata-character-art/"
            },
            {
              "label": "开发商：遥远未来设定",
              "url": "https://www.platinumgames.com/works/nier-automata"
            }
          ]
        },
        {
          "key": "g-47",
          "code": "G047",
          "name": "剑星",
          "style": "主题时装与科幻哥特",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 35,
          "scope": "剑星主要人物与默认战斗服，不比较全部换装",
          "values": {
            "form": 75,
            "expression": 25,
            "complexity": 75,
            "era": 80
          },
          "description": "贴身机能服、长发束和高对比材质拼接强调身体线条，硬质护件、接口与软料并置，接近科幻时装。",
          "comparison": "较《尼尔》的黑白路线更强调光泽、色彩和服装结构变化。",
          "formReason": "人物身材与面部明显理想化但轮廓结构完整；服装、皮肤和金属按较自然的材料与光照塑造。",
          "complexityReason": "机能拼接与配件较丰富。",
          "eraReason": "轨道殖民、人工生命和科技战斗装备指向较远未来；未确认可换算公元年份，以宽区间展示。",
          "eraLabel": "地球衰败后的未来文明",
          "eraRange": [
            65,
            95
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://cdn.techshake.com/imagens/data-de-lancamento-de-stellar-blade-para-pc-e-revelada-em-trailer-og.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-47"
            },
            {
              "label": "图像来源",
              "url": "https://www.techshake.com/stellar-blade-chega-ao-pc-em-julho-com-dlcs-trajes-ineditos-e-chefao-extra/"
            }
          ]
        },
        {
          "key": "g-48",
          "code": "G048",
          "name": "星际战甲",
          "style": "生物机械融合",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 34,
          "scope": "星际战甲典型战甲本体，不含能量特效",
          "values": {
            "form": 55,
            "expression": 35,
            "complexity": 85,
            "era": 90
          },
          "description": "肌腱流线与甲壳结合，面部常被无表情头盔取代；身体就是装甲，鳍片、尖刺和能量节点塑造异质剪影。",
          "comparison": "与《光环》可穿戴装甲相比，身体和装备的边界更模糊。",
          "formReason": "生物机械躯体的轮廓和关节组织偏离常见自然结构；反光、硬度和体积仍较可信，不因非人题材给Y满分。",
          "complexityReason": "身体分区、甲壳、鳍片与附属结构极复杂。",
          "eraReason": "生物机械战甲、太阳系活动与久远帝国遗产构成远未来叙事；不把古典饰纹当成年代主体。",
          "eraLabel": "旧帝国之后的遥远未来",
          "eraRange": [
            75,
            100
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.gamersdecide.com/sites/default/files/2019-06/all_frames-min1.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-48"
            },
            {
              "label": "图像来源",
              "url": "https://www.gamersdecide.com/articles/warframe-best-places-to-farm-xp"
            }
          ]
        },
        {
          "key": "g-49",
          "code": "G049",
          "name": "命运2",
          "style": "科幻机能与工业装甲",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 33,
          "scope": "命运2三职业典型基础装备",
          "values": {
            "form": 80,
            "expression": 30,
            "complexity": 80,
            "era": 80
          },
          "description": "泰坦肩甲、猎人披风和术士长袍形成职业差别，枪械与硬甲叠加仪式装饰，兼具军事与神话气质。",
          "comparison": "比《光环》更重视布料外轮廓，比较肩部、腰部与下摆。",
          "formReason": "装甲下的人体与关节逻辑较自然；色彩和表面经过科幻设计整理，材料与照明仍有物理可信度。",
          "complexityReason": "头盔、甲片、披风或长袍组成丰富层级。",
          "eraReason": "跨星球战斗、外星文明与文明遗产指向远未来；缺少单一稳定公元年份，区间表示粗分档。",
          "eraLabel": "黄金时代崩塌后的星际未来",
          "eraRange": [
            70,
            95
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://d1lss44hh2trtw.cloudfront.net/assets/article/2019/08/08/destiny-2-all-classes-subclasses-and-perk-trees_feature.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-49"
            },
            {
              "label": "图像来源",
              "url": "https://www.shacknews.com/article/113290/destiny-2-all-classes-subclasses-and-perk-trees"
            }
          ]
        },
        {
          "key": "g-50",
          "code": "G050",
          "name": "光环：无限",
          "style": "科幻机能与工业装甲",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 33,
          "scope": "光环无限斯巴达常规装甲",
          "values": {
            "form": 90,
            "expression": 20,
            "complexity": 70,
            "era": 70
          },
          "description": "护甲围绕关节分块，头盔、胸甲、肩甲呈现可制造结构，战术色搭配识别色，剪影稳定厚实。",
          "comparison": "与《星际战甲》的有机流线不同，重点是活动空间、接口和机械分区。",
          "formReason": "人体和工业装甲结构可信；金属、漆面与阴影保持自然逻辑，装甲的制造细节不算风格化强度。",
          "complexityReason": "甲片分区多，但表面纹饰比奇幻盔甲更克制。",
          "eraReason": "按《光环：无限》所在26世纪年代定位；此档是24—30世纪的图表区间，不与写实装甲程度挂钩。",
          "eraLabel": "2560年前后 · 26世纪",
          "eraRange": [
            70,
            70
          ],
          "evidence": "已查阅下列官方资料；资料支持背景或灵感，数值位置与跨度仍是本图人工判断。",
          "images": [
            {
              "src": "https://content.halocdn.com/media/Default/community/E32021PressKit/4k_infinite_mp_spartanlineup_watermarked-524ad6c8f5b84372a859ab0a32274926.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-50"
            },
            {
              "label": "图像来源",
              "url": "https://www.halowaypoint.com/en-us/news/halo-infinite-multiplayer-reveal"
            },
            {
              "label": "官方故事：2560年与无限开篇",
              "url": "https://content.halocdn.com/media/Default/community/2023_1120-waypointchronicles_battleforthebloodmoon-r03-a3e3cc23be4c413598af74154d3b85da.pdf"
            }
          ]
        },
        {
          "key": "g-51",
          "code": "G051",
          "name": "质量效应2",
          "style": "科幻机能与工业装甲",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 33,
          "scope": "质量效应2主要队员常态模型",
          "values": {
            "form": 80,
            "expression": 30,
            "complexity": 70,
            "era": 60
          },
          "description": "外星人与人类在头骨、口部和四肢上不同，共同科技配件与装甲建立世界观，衣装表达文化和职业。",
          "comparison": "观察同一科技体系如何适配不同身体，而非仅改变人类肤色。",
          "formReason": "外星人物有实际骨相变形，但体积完整；皮肤和装甲以连续光影呈现，Y偏低至中低。",
          "complexityReason": "队员装备层次中高。",
          "eraReason": "按系列22世纪的人类星际时代定位；大规模星际旅行并不意味着一定比26世纪作品发生得更晚。",
          "eraLabel": "22世纪 · 星际社会",
          "eraRange": [
            60,
            60
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://redringsofredemption.files.wordpress.com/2014/01/masseffect2squad.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-51"
            },
            {
              "label": "图像来源",
              "url": "https://colinmcmahonauthor.com/2014/01/29/how-mass-effect-2-failed-the-trilogy/"
            }
          ]
        },
        {
          "key": "g-52",
          "code": "G052",
          "name": "Apex英雄",
          "style": "动画电影式英雄卡通",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 5,
          "scope": "Apex英雄默认皮肤与技能装置",
          "values": {
            "form": 70,
            "expression": 45,
            "complexity": 80,
            "era": 70
          },
          "description": "运动体态结合护具、背包和技能装置，真实装备被概括为易读大形状，鲜明颜色与头部装备便于辨认。",
          "comparison": "较《守望先锋》战术和运动语言更密集，仍强调技能装置剪影。",
          "formReason": "人物体态和职业轮廓经过适度夸张；色彩组织较鲜明，材料和阴影适度概括。",
          "complexityReason": "护具、背包和技能工具让造型信息密度较高。",
          "eraReason": "边境星球、机器人人格与高技术军事装备指向星际未来；主点是时期分档，非由枪械外形推算具体年数。",
          "eraLabel": "星际殖民社会",
          "eraRange": [
            65,
            75
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.gamersdecide.com/sites/default/files/2023-12/apex-legends-most-fun-legends-01.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-52"
            },
            {
              "label": "图像来源",
              "url": "https://www.gamersdecide.com/articles/apex-legends-best-reticle-colors-1"
            }
          ]
        },
        {
          "key": "g-53",
          "code": "G053",
          "name": "无畏契约",
          "style": "复古商业插画式卡通",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 6,
          "scope": "无畏契约默认游戏内角色",
          "values": {
            "form": 55,
            "expression": 70,
            "complexity": 60,
            "era": 55
          },
          "description": "肩背、面部和衣物采用清楚棱面，细节收敛成大色块，发型、外套与能力配件承担识别任务。",
          "comparison": "相较《Apex英雄》，更依赖平整色块、干净轮廓和简化材质。",
          "formReason": "脸部与衣装轮廓有几何化概括；大色块、简化反光与清晰明暗分组带来较高Y。",
          "complexityReason": "现代外套、护件与技能配件为中等复杂。",
          "eraReason": "现代战术服装与能量科技结合，置于近未来档；超能力不能单独把年代推到遥远未来。",
          "eraLabel": "近未来战术社会",
          "eraRange": [
            50,
            60
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://prod.assets.earlygamecdn.com/images/12-Valorant-agents.jpg?x=0.5&y=0.5"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-53"
            },
            {
              "label": "图像来源",
              "url": "https://earlygame.com/valorant/what-are-bonus-rounds"
            }
          ]
        },
        {
          "key": "g-54",
          "code": "G054",
          "name": "英雄联盟",
          "style": "厚重夸张奇幻",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 4,
          "scope": "英雄联盟常态基础皮肤模型，不以宣传原画评分",
          "values": {
            "form": 45,
            "expression": 75,
            "complexity": 80,
            "era": 30
          },
          "description": "武器、肩甲、头发和生物特征围绕主题放大，视觉中心明确，不同物种与体量共同构成阵容。",
          "comparison": "较种族模板更强调每位英雄的独立主题；宣传原画不等于俯视角模型精度。",
          "formReason": "基础模型强调大轮廓、夸张体型和武器；俯视可读性所需的手绘表面、配色与明暗整理提高Y。",
          "complexityReason": "大武器、甲胄和生物轮廓复杂，不计技能特效。",
          "eraReason": "卢恩符文、冷兵器与魔法是传统主线，皮尔特沃夫、祖安等现代技术使跨度扩大；基础英雄造型优先。",
          "eraLabel": "多文明奇幻，兼有工业科技",
          "eraRange": [
            20,
            65
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://cdn.wallpapersafari.com/16/56/g6F0KT.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-54"
            },
            {
              "label": "图像来源",
              "url": "https://wallpapersafari.com/league-of-legends-official-wallpapers/"
            }
          ]
        },
        {
          "key": "g-55",
          "code": "G055",
          "name": "Dota 2",
          "style": "厚重夸张奇幻",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 4,
          "scope": "Dota2基础英雄模型，不以稀有饰品评分",
          "values": {
            "form": 50,
            "expression": 65,
            "complexity": 75,
            "era": 30
          },
          "description": "大形状优先，头肩和武器形成稳定重心，人形兽形靠体量、材质和配色区别，细节服从远距离识别。",
          "comparison": "与《英雄联盟》比较色彩集中程度与块面厚度，不把两者视为完全相同画风。",
          "formReason": "人物与生物体块偏夸张；材料和颜色经过较强概括，但保留较厚重的三维光影。",
          "complexityReason": "物种、兵器与甲胄提供中高结构层次。",
          "eraReason": "英雄多为魔法、甲胄和神话生物，也有火器、飞行器与机器人；单点不能覆盖全阵容，保留跨代范围。",
          "eraLabel": "古典至中古奇幻与机械角色混合",
          "eraRange": [
            20,
            60
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://i.blogs.es/71e186/dota2/1366_2000.jpeg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-55"
            },
            {
              "label": "图像来源",
              "url": "https://www.vidaextra.com/listas/juegos-steam-gratis"
            }
          ]
        },
        {
          "key": "g-56",
          "code": "G056",
          "name": "暗黑破坏神IV",
          "style": "写实暗黑奇幻",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 2,
          "scope": "暗黑破坏神IV职业创建及常见装备近景",
          "values": {
            "form": 90,
            "expression": 25,
            "complexity": 80,
            "era": 30
          },
          "description": "真实骨相、纹身、疤痕与脏旧材料强调身体经历，皮毛、骨饰、布衣和重甲按职业分配，装饰有仪式感。",
          "comparison": "较遮面骑士更适合观察裸露皮肤与面部；配图为角色肖像，不是全身表。",
          "formReason": "职业人物骨相和人体比例较自然；皮肤、骨饰和旧衣甲材料可信，黑暗配色仅是适度审美编排。",
          "complexityReason": "骨饰、皮毛、甲片和纹样本身繁复，不能因黑暗配色而低估复杂度。",
          "eraReason": "盔甲、长袍、冷兵器和宗教象征指向中古类比；庇护之地的历法与地球历史分开。",
          "eraLabel": "中古暗黑宗教奇幻",
          "eraRange": [
            25,
            35
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.creativeuncut.com/gallery-38/art/d4-character-class-portraits.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-56"
            },
            {
              "label": "图像来源",
              "url": "https://www.creativeuncut.com/gallery-38/d4-character-class-portraits.html"
            }
          ]
        },
        {
          "key": "g-57",
          "code": "G057",
          "name": "崩坏：星穹铁道",
          "style": "精致日式动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 8,
          "scope": "星穹铁道游戏内人物与默认服装",
          "values": {
            "form": 45,
            "expression": 70,
            "complexity": 85,
            "era": 80
          },
          "description": "纤细动漫体态结合外套、制服、礼服和饰品，阵营标志与配色统一多种文化意象，装饰精致。",
          "comparison": "与《原神》比较科幻装置、都市剪裁和阵营制服的增加。",
          "formReason": "动漫五官、发束与理想头身占主导；色块、分段阴影与材料概括使表现明显偏风格化。",
          "complexityReason": "制服、礼服和主题饰物密集。",
          "eraReason": "列车与星际旅行构成外层未来背景，各星球又有不同技术和历史语汇；主点取星际框架，范围表示作品内部差异。",
          "eraLabel": "星际文明，多星球时代并存",
          "eraRange": [
            30,
            100
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://cdn.mos.cms.futurecdn.net/7sQYFYjKaKjtm6Ax64bNrK.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-57"
            },
            {
              "label": "图像来源",
              "url": "https://www.gamesradar.com/genshin-impact-devs-on-swapping-open-worlds-and-real-time-combat-for-deftly-assembled-dungeons-in-honkai-star-rail/"
            }
          ]
        },
        {
          "key": "g-58",
          "code": "G058",
          "name": "绝区零",
          "style": "街头潮流卡通",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 29,
          "scope": "绝区零可玩角色基础形态",
          "values": {
            "form": 45,
            "expression": 65,
            "complexity": 75,
            "era": 55
          },
          "description": "短外套、大鞋、机能配件和夸张武器形成街头感，兽人、机器人扩展体型范围，表情动作具有漫画弹性。",
          "comparison": "比《斯普拉遁》更强调不同物种共享都市服装语言。",
          "formReason": "不同人物和兽人有鲜明体态夸张；材料保留三维性，但阴影、色彩与表面被主动整理成动画式语言。",
          "complexityReason": "三维材质清楚，机能服和武器较复杂。",
          "eraReason": "当代街头时装、录像带文化与先进机器人同时存在；以近未来都市作类比，不给新艾利都编造现实年份。",
          "eraLabel": "复古都市与灾后科技混合",
          "eraRange": [
            45,
            70
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://assets.st-note.com/production/uploads/images/133968772/rectangle_large_type_2_1b0b2d905a6cb37edac5a03030ecf795.png?fit=bounds&quality=85&width=1280"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-58"
            },
            {
              "label": "图像来源",
              "url": "https://note.com/zenzero_usagi/n/nd3d90914a6e2"
            }
          ]
        },
        {
          "key": "g-59",
          "code": "G059",
          "name": "明日方舟",
          "style": "精致日式动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 8,
          "scope": "明日方舟默认精一/精二干员立绘，不是Q版战斗小人",
          "values": {
            "form": 45,
            "expression": 70,
            "complexity": 85,
            "era": 55
          },
          "description": "兽耳、角和尾巴结合防护服、绑带及装备包，克制底色配阵营标志与局部强调色，职业分工明确。",
          "comparison": "较装饰性幻想动漫，更重视防护、机能和现代服装分层。",
          "formReason": "只评干员立绘：动漫面部与比例有概括；线稿、插画光影和经过组织的色彩使Y较高。",
          "complexityReason": "立绘与战斗小人不可混作同一点。",
          "eraReason": "战术服、城市工业、移动城市和超常技术并存；泰拉是独立世界，55为视觉与社会技术类比。",
          "eraLabel": "现代战术与工业灾后奇幻",
          "eraRange": [
            40,
            70
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://img2.tapimg.com/moment/etag/FomJ2dM5cySZctxKnefBhyfK4FJJ.jpeg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-59"
            },
            {
              "label": "图像来源",
              "url": "https://game.3loumao.org/743900435"
            }
          ]
        },
        {
          "key": "g-60",
          "code": "G060",
          "name": "蔚蓝档案",
          "style": "精致日式动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 8,
          "scope": "蔚蓝档案默认学生立绘，不是Q版战斗模型",
          "values": {
            "form": 35,
            "expression": 80,
            "complexity": 55,
            "era": 55
          },
          "description": "大眼与简洁面部配制服、光环和武器，色彩明亮、阴影轻，发饰、领结、袜型建立个体差异。",
          "comparison": "与《明日方舟》厚重层次相比，更强调空气感和明快的校园制服变化。",
          "formReason": "学生立绘的脸部与身体偏萌系动漫；透明色彩、平面阴影与材料简化形成明显二维表达。",
          "complexityReason": "制服、光环和武器提供中等设计层次。",
          "eraReason": "制服、枪械、机器人和超常都市组成近未来感；学园都市不是可直接对照现实年表的地点。",
          "eraLabel": "现代校园与高技术都市",
          "eraRange": [
            50,
            65
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://lwi.nexon.com/m_ba/brand/media/illust_m_02.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-60"
            },
            {
              "label": "图像来源",
              "url": "https://bluearchive.nexon.com/home"
            }
          ]
        },
        {
          "key": "g-61",
          "code": "G061",
          "name": "重返未来：1999",
          "style": "主题时装与科幻哥特",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 35,
          "scope": "重返未来1999常态角色立绘",
          "values": {
            "form": 60,
            "expression": 70,
            "complexity": 75,
            "era": 45
          },
          "description": "历史衣装、旅行用品与超现实道具融合，配色沉静，帽子、领口和手持物传递时代身份与故事线索。",
          "comparison": "较未来机能时装，更从年代服饰与日常物件中提炼主题。",
          "formReason": "立绘比例较成熟，结构比萌系人物自然；色调、绘画边缘和表面笔触具有较强编辑性。",
          "complexityReason": "相对成熟比例与绘画体积使其比萌系动漫略靠右，复古服装、道具和超现实主题增加复杂度。",
          "eraReason": "1999年的暴雨与回溯时代构成框架，角色来自不同时段；不把全部角色都固定成1999年的时装。",
          "eraLabel": "以20世纪为核心的跨时代叙事",
          "eraRange": [
            35,
            50
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://static.tvtropes.org/pmwiki/pub/images/r1999_character_roster_1.PNG"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-61"
            },
            {
              "label": "图像来源",
              "url": "https://tvtropes.org/pmwiki/pmwiki.php/Characters/Reverse1999"
            }
          ]
        },
        {
          "key": "g-62",
          "code": "G062",
          "name": "火焰纹章：风花雪月",
          "style": "精致日式动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 8,
          "scope": "风花雪月学院阶段制服及对应游戏模型",
          "values": {
            "form": 45,
            "expression": 60,
            "complexity": 55,
            "era": 30
          },
          "description": "同一制服通过领口、袖口、披肩和穿着方式变化，发色、体型和表情补充个性，同时保留阵营归属。",
          "comparison": "研究统一着装下的差异，而非给每个角色完全不同的衣服。",
          "formReason": "学院角色的比例、五官和发束属于动漫语汇；模型明暗和材料概括，整体Y中高。",
          "complexityReason": "统一制服有少量个性穿法，不以战后重甲替代学院样本。",
          "eraReason": "甲胄、骑士、宗教及封建国家结构决定中古类比；学院制服有现代化设计处理，仍不等于现代社会。",
          "eraLabel": "中古学院与封建战争",
          "eraRange": [
            25,
            35
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.creativeuncut.com/gallery-37/art/feth-characters-lineup.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-62"
            },
            {
              "label": "图像来源",
              "url": "https://www.creativeuncut.com/gallery-37/feth-characters-lineup.html"
            }
          ]
        },
        {
          "key": "g-63",
          "code": "G063",
          "name": "异度神剑3",
          "style": "精致日式动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 8,
          "scope": "异度神剑3主要队员初始职业",
          "values": {
            "form": 50,
            "expression": 60,
            "complexity": 65,
            "era": 75
          },
          "description": "动漫面部与修长比例结合夹克、裙装、轻甲和大武器，日常衣服与战斗装置并置，保留少年队伍亲近感。",
          "comparison": "较幻想礼装，更重视运动轮廓、阵营衣着和武器结构。",
          "formReason": "主角体态和面部带动漫比例；服装与武器的光影有统一概括，但体积和材料区别仍可辨。",
          "complexityReason": "现代夹克、轻甲和武器使复杂度中高。",
          "eraReason": "机械战斗体系与人工生命的世界背景偏未来，角色服装和武器同时吸收中古与现代语汇；范围反映内部混合。",
          "eraLabel": "高技术战争与奇幻共同体",
          "eraRange": [
            35,
            90
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://cdn.mos.cms.futurecdn.net/tU7udiD9gQw2zTkDeov78o.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-63"
            },
            {
              "label": "图像来源",
              "url": "https://www.imore.com/gaming/nintendo-switch/xenoblade-chronicles-3-all-characters-and-recruitable-heroes"
            }
          ]
        },
        {
          "key": "g-64",
          "code": "G064",
          "name": "破晓传说",
          "style": "水彩与铅笔动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 19,
          "scope": "破晓传说主要队员默认游戏模型",
          "values": {
            "form": 55,
            "expression": 70,
            "complexity": 75,
            "era": 40
          },
          "description": "动漫轮廓配柔和色彩层次，甲胄与织物具有手绘式概括，装饰密度和轮廓差别表现出身及战斗方式。",
          "comparison": "相较军装水彩，更强调幻想衣装与战斗英雄的动态。",
          "formReason": "人物结构相对完整、五官动漫化；绘画感颜色、边缘和材质使表现比单纯三维写实更风格化。",
          "complexityReason": "甲胄和幻想衣装层次较丰富。",
          "eraReason": "达纳的传统社会与雷纳的高科技并置；主角队伍含两类母题，单点只作混合代表，区间更有解释力。",
          "eraLabel": "前工业社会与高技术统治并存",
          "eraRange": [
            25,
            80
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.creativeuncut.com/social/tales-of-arise.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-64"
            },
            {
              "label": "图像来源",
              "url": "https://www.creativeuncut.com/art_tales-of-arise_a.html"
            }
          ]
        },
        {
          "key": "g-65",
          "code": "G065",
          "name": "碧蓝幻想：Relink",
          "style": "华丽手绘奇幻",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 13,
          "scope": "碧蓝幻想Relink主要角色默认模型",
          "values": {
            "form": 50,
            "expression": 70,
            "complexity": 85,
            "era": 30
          },
          "description": "皮带、披风、甲胄和细纹具有传统幻想插画气质，多样物种体型配柔和材质，表情保持动漫式清楚。",
          "comparison": "观察插画语言在三维战斗角色中的延续；配图为多人物肖像阵容。",
          "formReason": "人物头身、五官与衣装轮廓偏动漫；三维模型以手绘感表面和整理过的明暗保持插画气质。",
          "complexityReason": "披风、甲胄、束带与武器造型复杂。",
          "eraReason": "骑士、法师和传统旅装占主体，飞空艇与古代高技术并存；以中古奇幻类比为主点。",
          "eraLabel": "空岛骑士奇幻与飞空技术",
          "eraRange": [
            25,
            65
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://images.rpgsite.net/image/da49c9a1/133017/original/Granblue-Fantasy-Relink_20231222_06.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-65"
            },
            {
              "label": "图像来源",
              "url": "https://www.rpgsite.net/guide/15421-granblue-fantasy-relink-tips"
            }
          ]
        },
        {
          "key": "g-66",
          "code": "G066",
          "name": "暗喻幻想：ReFantazio",
          "style": "都市波普动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 10,
          "scope": "暗喻幻想主要队伍常态人物模型",
          "values": {
            "form": 45,
            "expression": 80,
            "complexity": 75,
            "era": 35
          },
          "description": "长外套、制服剪裁与异族特征并置，条纹与几何装饰形成醒目图案，现代时装姿态混合幻想道具。",
          "comparison": "与都市怪盗不同，个性还来自角、耳、面部和非人身体结构。",
          "formReason": "异族特征与动漫五官适度夸张；线条、图形化阴影和色彩编排带强烈插画表现。",
          "complexityReason": "几何纹样、制服剪裁和配件密度较高。",
          "eraReason": "封建社会、宗教与王国服饰是底色，现代服装剪裁和机械交通构成异质元素；不是现实欧洲某一年代。",
          "eraLabel": "中古王国与现代设计元素混合",
          "eraRange": [
            25,
            65
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://cdn.mos.cms.futurecdn.net/v2/t%3A0%2Cl%3A458%2Ccw%3A2924%2Cch%3A1645%2Cq%3A80%2Cw%3A2560/kyqiAT5SLJBE8VLz5zmbyB.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-66"
            },
            {
              "label": "图像来源",
              "url": "https://www.tomsguide.com/gaming/metaphor-refantazio-review"
            }
          ]
        },
        {
          "key": "g-67",
          "code": "G067",
          "name": "美妙世界",
          "style": "都市波普动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 10,
          "scope": "美妙世界初代角色立绘",
          "values": {
            "form": 25,
            "expression": 90,
            "complexity": 50,
            "era": 50
          },
          "description": "细长四肢、大鞋、锐角发束与粗细线条形成锋利剪影，耳机、帽子和街头服饰直接表达性格。",
          "comparison": "较《女神异闻录5》更夸张，手脚与头发的形状对比更强。",
          "formReason": "长细肢体、尖角轮廓与大鞋明显漫画化；粗线、有限色面与强对比阴影强调平面图形。",
          "complexityReason": "衣物本身为适中街装，不因线条强烈而加高复杂度。",
          "eraReason": "涩谷街头服装、耳机、手机与青年生活提供当代锚点；超自然游戏规则不改变现实背景年代。",
          "eraLabel": "当代东京街头",
          "eraRange": [
            50,
            50
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://images.nintendolife.com/6c64cf91e956a/large.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-67"
            },
            {
              "label": "图像来源",
              "url": "https://www.nintendolife.com/news/2025/06/the-world-ends-with-you-director-leaves-square-enix-after-29-years"
            }
          ]
        },
        {
          "key": "g-68",
          "code": "G068",
          "name": "王国之心II",
          "style": "经典冒险漫画",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 11,
          "scope": "王国之心II核心队伍的游戏内常态造型",
          "values": {
            "form": 35,
            "expression": 50,
            "complexity": 60,
            "era": null
          },
          "description": "动漫少年与经典动画角色并置，大鞋、手套、拉链和武器建立玩具化尺度，不同比例共享活泼动作气质。",
          "comparison": "研究多种角色体系如何共处。归入冒险漫画大方向，不代表鸟山明个人画风。",
          "formReason": "少年与动物角色的头身、手脚和面部明显卡通；三维材料适度概括，保留连续塑形。",
          "complexityReason": "拉链、大鞋、武器和服装结构适中。",
          "eraReason": "主角穿越童话王国、历史母题与现代都市等不同世界；不把多个世界平均成一个虚构的故事年份。",
          "eraLabel": "跨世界旅行 · 无单一年代",
          "eraRange": null,
          "evidence": "不作确定年代判断；参考对象见原图鉴。",
          "images": [
            {
              "src": "https://images.khinsider.com/Kingdom%20Hearts%20II/Artwork/Promotional%20Artwork/KH2FM%2B%20Artwork02.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-68"
            },
            {
              "label": "图像来源",
              "url": "https://www.khinsider.com/dark-seeker-saga/kingdom-hearts-2/images/artwork"
            }
          ]
        },
        {
          "key": "g-69",
          "code": "G069",
          "name": "街头霸王6",
          "style": "夸张格斗与动漫形体",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 9,
          "scope": "街头霸王6默认服装及战斗模型",
          "values": {
            "form": 65,
            "expression": 35,
            "complexity": 70,
            "era": 50
          },
          "description": "肌肉、手掌和脚部强化以传达打击力量，武术服装混合运动鞋、夹克与街头饰物，年龄体型差别鲜明。",
          "comparison": "不同于平面赛璐璐，材质更有体积；共同点是为战斗强化形体。",
          "formReason": "肌肉、手脚和体态夸张但结构完整；常态战斗角色的皮肤与布料接近自然，排除涂鸦特效。",
          "complexityReason": "街头服装层次中高。",
          "eraReason": "现代运动服、街头服装与都市训练生活为主体；高科技角色是局部例外。",
          "eraLabel": "当代城市格斗",
          "eraRange": [
            50,
            55
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://images.squarespace-cdn.com/content/v1/5e63720415b8f434bc5652ca/1686156738286-JPSG48WI797K2IL10FM6/street_fighter_6_03.jpeg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-69"
            },
            {
              "label": "图像来源",
              "url": "https://www.ps-esports.com/articles/2023-capcom-street-fighter-6-worldwide-release-creating-headlines"
            }
          ]
        },
        {
          "key": "g-70",
          "code": "G070",
          "name": "铁拳8",
          "style": "自然主义写实",
          "family": "写实与体块",
          "color": "#b26934",
          "direction": 1,
          "scope": "铁拳8默认角色造型",
          "values": {
            "form": 85,
            "expression": 25,
            "complexity": 75,
            "era": 50
          },
          "description": "真实人体基础经过明星化塑造，肌肉、发型、皮革、金属与刺绣细节密集，衣装有舞台化华丽感。",
          "comparison": "相较《街头霸王6》的形体概括，更重视写实光照与精细材质层次。",
          "formReason": "人物骨相和结构较自然，体态带明星化理想；服装皮肤光照偏自然，夸张舞台服不直接提高Y。",
          "complexityReason": "皮革、金属、刺绣和舞台配件层次较高。",
          "eraReason": "西装、运动服与现代都市环境是主体，机械战士和夸张军事技术拓宽至近未来感。",
          "eraLabel": "当代格斗与高技术军事",
          "eraRange": [
            50,
            60
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://wallpapercg.com/download/tekken-8-3840x2160-20545.jpeg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-70"
            },
            {
              "label": "图像来源",
              "url": "https://wallpapercg.com/tekken-8-wallpapers"
            }
          ]
        },
        {
          "key": "g-71",
          "code": "G071",
          "name": "龙珠斗士Z",
          "style": "夸张格斗与动漫形体",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 9,
          "scope": "龙珠斗士Z常态战斗模型，排除气焰特效",
          "values": {
            "form": 40,
            "expression": 90,
            "complexity": 45,
            "era": 65
          },
          "description": "尖发束、概括肌肉与硬边阴影形成动画感，身体透视和姿态优先表达漫画画面的冲击力。",
          "comparison": "相比《罪恶装备》的复杂配饰，主要依靠发型、体型、战斗服与颜色。",
          "formReason": "肌肉、头发和面部高度漫画化；硬边阴影、轮廓线和赛璐璐材料表达很强，排除气焰特效。",
          "complexityReason": "常见战斗服结构较简单，战斗动势不等于装饰复杂度。",
          "eraReason": "武道服、都市日常与胶囊、机器人、宇宙旅行并存；作品纪年不能换算地球公元，65为技术时代类比。",
          "eraLabel": "现代生活、武道与宇宙技术混合",
          "eraRange": [
            45,
            85
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://image.gcores.com/706bfa32-02ad-4167-af2a-fcdbf449308a.jpg?x-oss-process=image%2Fresize%2Climit_1%2Cm_lfit%2Cw_3000%2Ch_5250%2Fquality%2Cq_90%2Fformat%2Cwebp"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-71"
            },
            {
              "label": "图像来源",
              "url": "https://www.gcores.com/articles/96371"
            }
          ]
        },
        {
          "key": "g-72",
          "code": "G072",
          "name": "骷髅女孩",
          "style": "复古动画与橡皮管",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 17,
          "scope": "骷髅女孩默认角色静止战斗姿态",
          "values": {
            "form": 30,
            "expression": 85,
            "complexity": 70,
            "era": 45
          },
          "description": "流畅曲线、夸张肢体与舞台服装结合，头发、机械臂和寄生物可成为攻击结构，变形能力融入造型。",
          "comparison": "并非纯粹1930年代橡皮管，融合现代动漫和装饰艺术；较《茶杯头》人体结构更复杂。",
          "formReason": "身体、寄生物和机械结构夸张重组；动画线条、平面配色与被组织的阴影形成明显风格。",
          "complexityReason": "寄生物、机械肢与服装让角色结构复杂。",
          "eraReason": "爵士、都市服饰与装饰艺术气质偏20世纪前期，机械义体及实验兵器带来未来元素。",
          "eraLabel": "装饰艺术时期的复古未来",
          "eraRange": [
            40,
            60
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://fightersgeneration.com/nx5/game/skullgirls-conceptart2.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-72"
            },
            {
              "label": "图像来源",
              "url": "https://fightersgeneration.com/games/skullgirls-p3.html"
            }
          ]
        },
        {
          "key": "g-73",
          "code": "G073",
          "name": "恶魔战士",
          "style": "夸张格斗与动漫形体",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 9,
          "scope": "恶魔战士经典二维战斗角色",
          "values": {
            "form": 30,
            "expression": 80,
            "complexity": 60,
            "era": 45
          },
          "description": "吸血鬼、狼人和木乃伊转化为强剪影格斗人物，翅膀、爪子和身体变形直接参与招式，兼具戏剧性与幽默。",
          "comparison": "重点是怪物生理结构如何影响姿态和攻击，而非普通人类换装。",
          "formReason": "怪物与人体具有漫画式变形；二维像素与线条化明暗高度概括，不以怪物是否存在决定Y。",
          "complexityReason": "翅膀、爪和异常结构提升轮廓复杂度。",
          "eraReason": "吸血鬼、木乃伊、传统怪物与现代服装并存；以主要角色的现代化呈现为中心，不把怪物起源神话当成全作年代。",
          "eraLabel": "多时代怪物形象与现代流行文化",
          "eraRange": [
            20,
            60
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2023/07/darkstalkers.jpg?fit=1920%2C1080&ssl=1"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-73"
            },
            {
              "label": "图像来源",
              "url": "https://bloody-disgusting.com/editorials/3770949/darkstalkers-the-monster-movie-origins-of-capcoms-fighting-game/"
            }
          ]
        },
        {
          "key": "g-74",
          "code": "G074",
          "name": "脑航员2",
          "style": "怪诞比例与讽刺人物",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 36,
          "scope": "脑航员2主要角色常态模型",
          "values": {
            "form": 25,
            "expression": 45,
            "complexity": 50,
            "era": 45
          },
          "description": "头、鼻、手脚和躯干采用不均匀比例，人物像夸张雕塑，服装与姿态直接表达性格，不追求统一漂亮体型。",
          "comparison": "与《饥荒》细线平面怪诞相比，依靠三维体积和极端比例制造幽默。",
          "formReason": "头身、面部与骨相极端变形；衣物和皮肤仍保有三维体积与材料区别，形成卡通形体配较自然塑形。",
          "complexityReason": "日常服装并非繁复甲胄。",
          "eraReason": "服装、机构办公与复古科技偏20世纪中后期；心理世界大量跨越年代，只对现实层主角群作类比。",
          "eraLabel": "20世纪中后期式复古超能力机构",
          "eraRange": [
            40,
            55
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://assets.doublefine.com/images/screenshots/Psychonauts-2/Psychonauts2-screenshots-071521-Previews-4k-17.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-74"
            },
            {
              "label": "图像来源",
              "url": "https://www.doublefine.com/games/psychonauts-2"
            }
          ]
        },
        {
          "key": "g-75",
          "code": "G075",
          "name": "耻辱2",
          "style": "怪诞比例与讽刺人物",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 36,
          "scope": "耻辱2主要人物的游戏模型，不是概念肖像",
          "values": {
            "form": 70,
            "expression": 45,
            "complexity": 65,
            "era": 40
          },
          "description": "骨点、鼻梁和手掌略拉长或放大，面部有雕塑棱面，严谨服装与绘画感材料让角色既可信又不完全写实。",
          "comparison": "比自然主义有更多有意变形，用于表现阶级与气质。配图为肖像设定。",
          "formReason": "人物手脸和肢体略有雕塑式夸张；绘画化表面、色调与明暗带有中等表现处理，但不是平涂。",
          "complexityReason": "阶级服装、剪裁和配件为中高复杂。",
          "eraReason": "贵族服装、军警制服和工业城市接近19世纪，鲸油及自动机械使技术超出现实同期；架空年份不直接换算。",
          "eraLabel": "19世纪式工业与超常科技",
          "eraRange": [
            35,
            55
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.creativeuncut.com/social/dishonored-2.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-75"
            },
            {
              "label": "图像来源",
              "url": "https://www.creativeuncut.com/art_dishonored-2_a.html"
            }
          ]
        },
        {
          "key": "g-76",
          "code": "G076",
          "name": "盗贼之海",
          "style": "怪诞比例与讽刺人物",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 36,
          "scope": "盗贼之海常态海盗衣装，排除特殊发光套装",
          "values": {
            "form": 40,
            "expression": 55,
            "complexity": 65,
            "era": 35
          },
          "description": "宽窄不同的躯干、夸张鼻子和牙齿产生幽默，木材、皮革、织物以大块面表现，疤痕衣着体现经历。",
          "comparison": "较职业几何卡通，更强调随机外貌组合和海盗群体个性。",
          "formReason": "海盗体态、面部和轮廓明显夸张；色块、材料边缘与反光被概括，仍保留立体光照。",
          "complexityReason": "海盗外套、腰带与配件中高复杂。",
          "eraReason": "海盗长衣、三角帽、帆船与火器指向17—18世纪式航海文化；超自然海域无精确现实纪年。",
          "eraLabel": "近代早期海盗与航海幻想",
          "eraRange": [
            35,
            40
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://blogs-images.forbes.com/erikkain/files/2018/04/Sea-of-Thieves-16.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-76"
            },
            {
              "label": "图像来源",
              "url": "https://www.forbes.com/sites/erikkain/2018/04/20/this-is-why-more-video-games-should-do-co-op-like-far-cry-5/"
            }
          ]
        },
        {
          "key": "g-77",
          "code": "G077",
          "name": "瑞奇与叮当：时空跳转",
          "style": "动画电影式英雄卡通",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 5,
          "scope": "瑞奇与叮当时空跳转主角常态模型",
          "values": {
            "form": 35,
            "expression": 25,
            "complexity": 60,
            "era": 75
          },
          "description": "大耳、毛发、手套与机械工具形成动画电影角色，面部表演细腻，武器夸张但结构清楚。",
          "comparison": "较类人英雄更依赖动物耳部、尾巴和毛发的形象及表演。",
          "formReason": "动物人体与面部较卡通；毛发、金属、布料和接触光影接近可触摸的材料，因此表现自然主义较强。",
          "complexityReason": "工具和衣装结构适中。",
          "eraReason": "飞船、机器人、先进武器和跨维度活动决定未来位置；动物主角与动画电影式表现只影响X轴。",
          "eraLabel": "星际与跨维度未来",
          "eraRange": [
            65,
            90
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.denofgeek.com/wp-content/uploads/2021/06/Ratcher-tand-Clank-Rift-Apart.jpg?fit=2000%2C1125"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-77"
            },
            {
              "label": "图像来源",
              "url": "https://www.denofgeek.com/games/ratchet-and-clank-rift-apart-every-planet-level-world-guide/"
            }
          ]
        },
        {
          "key": "g-78",
          "code": "G078",
          "name": "古惑狼4：时机已到",
          "style": "动物吉祥物与弹性动画",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 40,
          "scope": "古惑狼4主角基础服装",
          "values": {
            "form": 25,
            "expression": 55,
            "complexity": 35,
            "era": null
          },
          "description": "大口鼻、细腰和大手脚形成强剪影，拉伸、扭转和失衡动作传达喜剧，眉眼曲线比真实皮毛更重要。",
          "comparison": "比动画电影式细腻毛发更重视二维动画般的变形。",
          "formReason": "大口鼻、手脚和弹性体态高度卡通；颜色与材料比自然物更简洁，仍保有三维塑形。",
          "complexityReason": "简单裤装和配件复杂度低。",
          "eraReason": "作品明确跨时空与不同世界，主角造型本身难以指定统一历史时代；单独列入待定带。",
          "eraLabel": "跨时空冒险 · 无单一年代",
          "eraRange": null,
          "evidence": "不作确定年代判断；参考对象见原图鉴。",
          "images": [
            {
              "src": "https://mail.creativeuncut.com/gallery-40/art/cb4-key-art.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-78"
            },
            {
              "label": "图像来源",
              "url": "https://mail.creativeuncut.com/gallery-40/cb4-key-art.html"
            }
          ]
        },
        {
          "key": "g-79",
          "code": "G079",
          "name": "小龙斯派罗：重燃三部曲",
          "style": "动物吉祥物与弹性动画",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 40,
          "scope": "小龙斯派罗重燃版主角与主要NPC",
          "values": {
            "form": 25,
            "expression": 55,
            "complexity": 40,
            "era": 30
          },
          "description": "大头、短肢与清楚角翼组合赋予龙亲和力，职业道具、体型和颜色区分角色，鳞片概括为有节奏块面。",
          "comparison": "较《古惑狼》的瘦长弹性体态更圆润，配图来自设计师作品页。",
          "formReason": "大头短肢与圆润龙体被明显夸张；颜色、表面和光影适度概括，非全平面表现。",
          "complexityReason": "角翼与职业道具形成适中轮廓。",
          "eraReason": "城堡、传统奇幻生物与魔法王国提供中古童话类比；龙的物种属性不等于史前。",
          "eraLabel": "龙族童话王国",
          "eraRange": [
            20,
            40
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://images.squarespace-cdn.com/content/v1/59f60ac28a02c7be42f00d3e/1542139865496-T5X0HDM27OK4LCENPIE9/IMG_8621.jpg?format=2500w"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-79"
            },
            {
              "label": "图像来源",
              "url": "https://www.nicholaskole.art/"
            }
          ]
        },
        {
          "key": "g-80",
          "code": "G080",
          "name": "索尼克：未知边境",
          "style": "动物吉祥物与弹性动画",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 40,
          "scope": "索尼克未知边境主要动物角色，不计环境写实度",
          "values": {
            "form": 20,
            "expression": 45,
            "complexity": 35,
            "era": 55
          },
          "description": "大头、手套、运动鞋与长细肢体构成易读轮廓，尖刺、耳朵和尾巴提供种族差别，姿态突出速度方向。",
          "comparison": "相较滑稽面部表演，更强调流线剪影与高速辨识。",
          "formReason": "流线躯体、大鞋和符号化面部偏高度卡通；角色自身的光照仍有材料体积，不将写实地貌计入Y。",
          "complexityReason": "角色材料有体积，但写实地貌不能提高角色点位。",
          "eraReason": "现代化主角装备和机器人世界与远古文明遗产叠加；主点按当前活动世界的科技类比，遗迹年代不冒充主线年代。",
          "eraLabel": "现代角色与古老高科技遗迹",
          "eraRange": [
            30,
            85
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://mail.creativeuncut.com/gallery-44/art/sf-characters.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-80"
            },
            {
              "label": "图像来源",
              "url": "https://mail.creativeuncut.com/gallery-44/sf-characters.html"
            }
          ]
        },
        {
          "key": "g-81",
          "code": "G081",
          "name": "超级马力欧3D世界",
          "style": "圆润亲和人物",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 26,
          "scope": "超级马力欧3D世界四位主角默认服装",
          "values": {
            "form": 20,
            "expression": 45,
            "complexity": 35,
            "era": 45
          },
          "description": "鼻子、帽子、胡须和背带裤由圆润形体构成，五官服饰高度符号化，身高、胖瘦和主色区分伙伴。",
          "comparison": "较生活化动物，更服务于平台动作和远距离辨认。",
          "formReason": "圆鼻大头、手脚与五官高度概括；表面反光与明暗柔和简洁，Y处于中段而非满分。",
          "complexityReason": "三维表面概括，帽子背带裤等结构简单。",
          "eraReason": "城堡、现代工作服、交通与娱乐设施混合；没有可换算年份，45表示偏现代的混合主视觉。",
          "eraLabel": "童话王国与现代设施并存",
          "eraRange": [
            30,
            60
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.mariowiki.com/images/thumb/2/23/Main_Crew_Artwork_-_Super_Mario_3D_World.png/1200px-Main_Crew_Artwork_-_Super_Mario_3D_World.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-81"
            },
            {
              "label": "图像来源",
              "url": "https://www.mariowiki.com/File%3AMain_Crew_Artwork_-_Super_Mario_3D_World.png"
            }
          ]
        },
        {
          "key": "g-82",
          "code": "G082",
          "name": "星之卡比：新星同盟",
          "style": "极简软体角色",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 27,
          "scope": "卡比与常见伙伴基础形态",
          "values": {
            "form": 10,
            "expression": 55,
            "complexity": 25,
            "era": null
          },
          "description": "球体核心配眼睛、脚和短手臂，帽子、武器及附属形状表达能力，变化中保留统一主体。",
          "comparison": "较《糖豆人》胶囊身体更紧凑，能力配件对识别更关键。",
          "formReason": "球形身体、短肢和符号面部接近高度卡通；角色有柔和立体光影，表面和颜色较概括。",
          "complexityReason": "能力帽饰适量，不以最复杂变身作为基准。",
          "eraReason": "魔法、远古遗产、宇宙航行与无年代生活共存；仅因发生在宇宙便归为未来，会混淆地点与历史。",
          "eraLabel": "宇宙童话 · 无单一历史年代",
          "eraRange": null,
          "evidence": "不作确定年代判断；参考对象见原图鉴。",
          "images": [
            {
              "src": "https://assets.topics.apps-jp.nintendo.com/image/2019/09/02083013446644/0/00001039_820_461.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-82"
            },
            {
              "label": "图像来源",
              "url": "https://www.nintendo.com/jp/topics/article/82f01b08-1de5-11e8-a129-063b7ac45a6d"
            }
          ]
        },
        {
          "key": "g-83",
          "code": "G083",
          "name": "路易吉洋馆3",
          "style": "圆润亲和人物",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 26,
          "scope": "路易吉洋馆3路易吉与傀易吉常态形态",
          "values": {
            "form": 30,
            "expression": 35,
            "complexity": 40,
            "era": 50
          },
          "description": "长身形、大鼻子与眉眼表现害怕和惊讶，同一造型换成绿色胶质产生不同触感，吸尘装备连接身份与动作。",
          "comparison": "观察相同造型在皮肤、布料和胶体材质下的差别；图中为路易吉与傀易吉。",
          "formReason": "角色比例与五官明显卡通；布料、皮肤和胶体有可辨材料反应，整体表现更靠自然主义一侧。",
          "complexityReason": "吸尘器与背带裤使造型复杂度中低。",
          "eraReason": "酒店、旅行装束与吸尘设备偏当代，古堡式关卡属于主题场景；以主角正在经历的时代感定位。",
          "eraLabel": "当代酒店生活与哥特主题空间",
          "eraRange": [
            40,
            55
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://luigismansion3.nintendo.com/assets/img/home/luigi-gooigi-2x.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-83"
            },
            {
              "label": "图像来源",
              "url": "https://luigismansion3.nintendo.com/"
            }
          ]
        },
        {
          "key": "g-84",
          "code": "G084",
          "name": "宝可梦传说：阿尔宙斯",
          "style": "经典冒险漫画",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 11,
          "scope": "阿尔宙斯人类训练家的游戏模型",
          "values": {
            "form": 40,
            "expression": 60,
            "complexity": 55,
            "era": 40
          },
          "description": "简洁五官配围巾、绑腿、布包与传统剪裁，保持少年冒险者亲近感，帽子和配色建立地域身份。",
          "comparison": "本例研究人类训练家，属于冒险漫画方向，不代表与《勇者斗恶龙》同一作者风格。",
          "formReason": "只评人类训练家：少年头身与动漫五官被概括；模型的明暗和衣料表现简化，Y中高。",
          "complexityReason": "围巾、绑腿、帽子和布包提供适中层次，不评估宝可梦生物。",
          "eraReason": "官方只明确为神奥过去的洗翠地区；角色衣装和开拓社会可类比19世纪日本，但不声称官方给出某一公元年份。",
          "eraLabel": "宝可梦世界的历史时期",
          "eraRange": [
            35,
            40
          ],
          "evidence": "已查阅下列官方资料；资料支持背景或灵感，数值位置与跨度仍是本图人工判断。",
          "images": [
            {
              "src": "https://www.creativeuncut.com/social/pokemon-legends-arceus.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-84"
            },
            {
              "label": "图像来源",
              "url": "https://www.creativeuncut.com/art_pokemon-legends-arceus_a.html"
            },
            {
              "label": "宝可梦官方：洗翠的过去",
              "url": "https://www.pokemon.com/us/pokemon-video-games/pokemon-legends-arceus/"
            }
          ]
        },
        {
          "key": "g-85",
          "code": "G085",
          "name": "咩咩启示录",
          "style": "极简面具式暗黑童话",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 23,
          "scope": "咩咩启示录主角及普通信徒",
          "values": {
            "form": 10,
            "expression": 90,
            "complexity": 35,
            "era": 25
          },
          "description": "圆头、短肢与大眼建立可爱外形，黑红配色、冠饰和眼睛符号产生不安，亲和与诡异形成鲜明反差。",
          "comparison": "较《空洞骑士》沉静留白，配色更浓烈，仪式图案与表情更直接。",
          "formReason": "圆头短肢、符号化五官和轮廓高度卡通；纯色、描线与平面明暗同样高度风格化。",
          "complexityReason": "冠饰、符号和披肩少量增加造型信息，不计场景仪式图案。",
          "eraReason": "祭祀、教团、长袍与传统聚落偏古代至中古；动物拟人和极简图形不是年代证据。",
          "eraLabel": "古代祭祀与中古宗教幻想",
          "eraRange": [
            15,
            35
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://image.api.playstation.com/vulcan/ap/rnd/202512/1518/96db93313e2e9f0cec620f08d93f64123eba62a3a88b10f9.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-85"
            },
            {
              "label": "图像来源",
              "url": "https://store.playstation.com/en-us/concept/10004484"
            }
          ]
        },
        {
          "key": "g-86",
          "code": "G086",
          "name": "林中之夜",
          "style": "温暖绘本拟人",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 22,
          "scope": "林中之夜主要角色游戏形象",
          "values": {
            "form": 10,
            "expression": 100,
            "complexity": 30,
            "era": 50
          },
          "description": "动物头形与简单人类衣物结合，圆眼、三角耳和少量色块构成角色，表情、姿态与日常配件承担个性。",
          "comparison": "较《Spiritfarer》的柔和长线条更平面、更几何。",
          "formReason": "动物头部和身体压缩为图标式形状；几乎以平面色块和图形关系表达，材料与自然光照线索很少。",
          "complexityReason": "简单日常衣装低复杂，不把剧情深度算作画面复杂度。",
          "eraReason": "现代青年穿着、学校、商业街与日常通信构成当代社会；动物角色不改变现实生活锚点。",
          "eraLabel": "当代衰退工业小镇",
          "eraRange": [
            50,
            50
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://pixelpoppers.com/review/night-in-the-woods/night-in-the-woods.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-86"
            },
            {
              "label": "图像来源",
              "url": "https://pixelpoppers.com/review/night-in-the-woods/"
            }
          ]
        },
        {
          "key": "g-87",
          "code": "G087",
          "name": "虫子快餐店",
          "style": "图标化萌系生物",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 28,
          "scope": "虫子快餐店食物生物为主，居民为辅",
          "values": {
            "form": 25,
            "expression": 50,
            "complexity": 40,
            "era": 50
          },
          "description": "水果点心赋予眼睛、腿和昆虫行为，食材原有形状成为身体轮廓，熟悉与陌生同时存在。",
          "comparison": "相比动物加元素，更直接把食物结构变为身体；配图含居民与食物生物。",
          "formReason": "食物与昆虫轮廓被拟人和夸张；材质、颜色较简洁，但仍保有三维体积，不因混合物种自动提高Y。",
          "complexityReason": "食材轮廓及附肢适中，无复杂层叠服饰。",
          "eraReason": "探险队服装、采访与摄影等社会活动偏当代；奇异生物本身不能推出史前或未来。",
          "eraLabel": "当代探险与新闻调查类比",
          "eraRange": [
            50,
            60
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://image.api.playstation.com/vulcan/ap/rnd/202006/1917/1lbOO1nn1Bjr5srlmyH2DGaf.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-87"
            },
            {
              "label": "图像来源",
              "url": "https://store.playstation.com/fr-fr/product/EP2104-PPSA01503_00-BSNAX60962576975"
            }
          ]
        },
        {
          "key": "g-88",
          "code": "G088",
          "name": "史莱姆牧场",
          "style": "极简软体角色",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 27,
          "scope": "史莱姆牧场常见史莱姆，不评估环境或人类插画",
          "values": {
            "form": 10,
            "expression": 45,
            "complexity": 20,
            "era": 70
          },
          "description": "柔软球体配眼嘴及少量角耳，透明度、颜色和表面属性区分种类，弹性与体积变化比骨骼细节重要。",
          "comparison": "较穿衣糖豆人物，种类主要由身体材质与附属结构识别。",
          "formReason": "球形软体与符号面部接近卡通端；透明度、高光与体积可感知，材料表现属于中度概括。",
          "complexityReason": "角耳附件有限，基础造型复杂度低。",
          "eraReason": "角色离开地球经营外星牧场，飞行设备与科技工具明确指向未来；田园生活不等于农业古代。",
          "eraLabel": "外星牧场与星际迁居",
          "eraRange": [
            60,
            85
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.pjsgames.com/cdn/shop/files/card-slime-rancher-pc-mac-linux-gog-digital-download.jpg?v=1761256429&width=1920"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-88"
            },
            {
              "label": "图像来源",
              "url": "https://www.pjsgames.com/en-ch/products/slime-rancher-pc-mac-linux-gog-digital-download"
            }
          ]
        },
        {
          "key": "g-89",
          "code": "G089",
          "name": "双人成行",
          "style": "布偶与手工拼接",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 25,
          "scope": "双人成行Cody与May的游戏内人偶",
          "values": {
            "form": 40,
            "expression": 25,
            "complexity": 50,
            "era": 50
          },
          "description": "木头、黏土、毛线和布料拼成人物，头发衣装有手作痕迹，两位角色拥有不同触感和轮廓。",
          "comparison": "与统一针织底材的布偶相比，强调不同手工材料的组合。",
          "formReason": "人偶头身、五官与身体轮廓明显卡通；木头、黏土、毛线和接触光影接近现实手工材料，故Y较低。",
          "complexityReason": "缝线和衣服结构适中。",
          "eraReason": "父母、女儿、现代住宅与家庭用品构成现实锚点；主角变成木偶和黏土人不改变当代故事背景。",
          "eraLabel": "当代家庭与微缩幻想",
          "eraRange": [
            50,
            50
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2022/09/it_takes_two.jpg?fit=1280%2C720&ssl=1"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-89"
            },
            {
              "label": "图像来源",
              "url": "https://mynintendonews.com/2025/10/26/it-takes-two-team-looked-at-nintendo-for-inspiration-on-their-hit-game/"
            }
          ]
        },
        {
          "key": "g-90",
          "code": "G090",
          "name": "耀西的手工世界",
          "style": "布偶与手工拼接",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 25,
          "scope": "耀西手工世界的角色本体，不计手工布景",
          "values": {
            "form": 25,
            "expression": 30,
            "complexity": 30,
            "era": null
          },
          "description": "圆润动物结构配柔软表面与简洁颜色，像置于手工布景中的玩具，大形状优先，材质保持亲近感。",
          "comparison": "不可与《毛线耀西》混为一谈；重点是角色和纸板手工场景的关系。",
          "formReason": "玩偶动物的头身和结构高度卡通；绒感、接缝及三维明暗接近实物，手工媒介本身不必高Y。",
          "complexityReason": "角色本体装饰少，不能将布景复杂度计入。",
          "eraReason": "纸板、布料和玩具是表现方法，关卡主题跨越多种时代；不能把手工材料的起源当成角色年代。",
          "eraLabel": "手工童话 · 无单一年代",
          "eraRange": null,
          "evidence": "不作确定年代判断；参考对象见原图鉴。",
          "images": [
            {
              "src": "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2019/02/yoshis_crafted_world_artwork.jpg?fit=1372%2C772&ssl=1"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-90"
            },
            {
              "label": "图像来源",
              "url": "https://mynintendonews.com/2019/03/27/review-yoshis-crafted-world-for-nintendo-switch/"
            }
          ]
        },
        {
          "key": "g-91",
          "code": "G091",
          "name": "撕纸小邮差",
          "style": "纸片剪贴",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 24,
          "scope": "撕纸小邮差主角纸模型",
          "values": {
            "form": 20,
            "expression": 35,
            "complexity": 45,
            "era": null
          },
          "description": "纸张折面、拼接边和切割形状建立立体角色，头肢保留手作折痕，表情如贴纸，运动呈纸模型结构感。",
          "comparison": "与《纸片马力欧》的薄片人物相比，具有明确的立体折面。",
          "formReason": "折纸躯体与五官高度概括；纸张折面和投影保持实物逻辑，角色印刷色彩略作图形化处理。",
          "complexityReason": "拼接结构较平面纸片更复杂。",
          "eraReason": "纸艺世界与送信寓言缺少统一历史社会参照；纸张媒介本身不对应某个历史时期。",
          "eraLabel": "纸艺寓言 · 无单一年代",
          "eraRange": null,
          "evidence": "不作确定年代判断；参考对象见原图鉴。",
          "images": [
            {
              "src": "https://m.media-amazon.com/images/M/MV5BMzU3MjQwZmYtMTVlZS00YzNlLWEzZGEtZjQ4ZjhiOGU0NTcxXkEyXkFqcGc%40._V1_.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-91"
            },
            {
              "label": "图像来源",
              "url": "https://www.imdb.com/title/tt2409476/"
            }
          ]
        },
        {
          "key": "g-92",
          "code": "G092",
          "name": "隐迹渐现",
          "style": "手抄本与木刻图像",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 37,
          "scope": "隐迹渐现游戏中的手抄本人物",
          "values": {
            "form": 45,
            "expression": 90,
            "complexity": 55,
            "era": 35
          },
          "description": "平面人物、清楚轮廓和略僵姿态借鉴历史书籍图像，服饰、头饰与身份符号比写实光影重要。",
          "comparison": "区别于一般卡通平涂，比例、线条与姿态围绕历史图像语言。配图为官方游戏截图。",
          "formReason": "人物比例比极简动物更接近人体，但面部和结构被概括；手抄本式线条、平面设色与明暗高度风格化。",
          "complexityReason": "年代服饰具有适中层次。",
          "eraReason": "官方明确为16世纪巴伐利亚的历史叙事；手抄本风格与故事时代相关，但定位依据是背景而不是绘制技术。",
          "eraLabel": "16世纪 · 巴伐利亚",
          "eraRange": [
            35,
            35
          ],
          "evidence": "已查阅下列官方资料；资料支持背景或灵感，数值位置与跨度仍是本图人工判断。",
          "images": [
            {
              "src": "https://d1079ywfijtdjs.cloudfront.net/images/pentiment/v1/screenshots/1009_173248.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-92"
            },
            {
              "label": "图像来源",
              "url": "https://pentiment.obsidian.net/"
            },
            {
              "label": "开发商：16世纪背景",
              "url": "https://pentiment.obsidian.net/"
            }
          ]
        },
        {
          "key": "g-93",
          "code": "G093",
          "name": "GRIS",
          "style": "极简水彩与抽象人物",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 38,
          "scope": "GRIS最终游戏人物，不以探索草稿评分",
          "values": {
            "form": 25,
            "expression": 95,
            "complexity": 25,
            "era": null
          },
          "description": "面部细节削减，裙摆组织为几何形和大淡色块，纤细肢体表达脆弱，晕染、留白和姿态共同传递情绪。",
          "comparison": "较完整服饰水彩更抽象。配图为同一主角的设计探索，而非多个最终角色。",
          "formReason": "人物身体、脸部和裙装轮廓被几何化；色彩、边缘与水彩媒介形成高强度表现处理，仅评角色本体。",
          "complexityReason": "裙装与肢体简单，背景晕染不计入角色复杂度。",
          "eraReason": "服装、抽象景观与象征空间不足以识别历史阶段；保留X，在独立待定带展示，避免虚构年代。",
          "eraLabel": "抽象心理旅程 · 年代不可判定",
          "eraRange": null,
          "evidence": "不作确定年代判断；参考对象见原图鉴。",
          "images": [
            {
              "src": "https://pbs.twimg.com/media/DshxB37X4AAtMtJ.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-93"
            },
            {
              "label": "图像来源",
              "url": "https://x.com/nomadastudiobcn/status/1065225594441555968"
            }
          ]
        },
        {
          "key": "g-94",
          "code": "G094",
          "name": "光之子",
          "style": "水彩与铅笔动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 19,
          "scope": "光之子Aurora等常态二维角色",
          "values": {
            "form": 40,
            "expression": 80,
            "complexity": 35,
            "era": 40
          },
          "description": "小身体、长发与简洁裙装形成轻盈轮廓，红发成为核心色，软边晕染和透明层次营造绘本梦境。",
          "comparison": "相较军装水彩更强调飘浮与人物背景的柔和融合；配图为单角色设计项目。",
          "formReason": "童话人物头身与五官偏卡通；水彩边缘、透明色层和简化明暗使Y较高。",
          "complexityReason": "衣饰层数少，透明笔触不等于多层服装。",
          "eraReason": "现实故事框架明确为1895年的奥地利，主点据此置于19世纪档位；主要冒险发生在雷姆利亚童话世界，传统王国造型使参考范围延伸到中古类比。不是近代早期的奥地利故事。",
          "eraLabel": "1895年奥地利框架与童话王国",
          "eraRange": [
            30,
            40
          ],
          "evidence": "2026-11-10复核官方平台资料，修正先前的近代早期定位。Y=40来自本图19世纪档位，区间包含童话世界的时代类比。",
          "images": [
            {
              "src": "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/f3d71214506365.562a9806da667.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-94"
            },
            {
              "label": "图像来源",
              "url": "https://www.behance.net/gallery/14506365/CHILD-OF-LIGHT-VIDEO-GAME-MAIN-CHARACTER-DESIGN"
            },
            {
              "label": "任天堂官方：来自1895年的奥地利公主",
              "url": "https://www.nintendo.com/en-gb/Games/Wii-U-download-software/Child-of-Light-869579.html"
            },
            {
              "label": "Xbox官方：1895年复活节地震前的故事",
              "url": "https://news.xbox.com/en-us/2014/05/01/games-child-of-light-available-now/"
            }
          ]
        },
        {
          "key": "g-95",
          "code": "G095",
          "name": "战斗厨师旅团",
          "style": "史诗平涂动画",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "direction": 18,
          "scope": "战斗厨师旅团主要角色立绘及二维形象",
          "values": {
            "form": 40,
            "expression": 75,
            "complexity": 55,
            "era": 30
          },
          "description": "厨师装束结合奇幻种族和武器，轮廓流畅、颜色干净，体型差异与餐厨工具表现性格及职业。",
          "comparison": "较《旗帜的传说》更轻快幽默，把日常职业工具转化为冒险识别点。",
          "formReason": "人物比例与脸部采用动画式概括；线稿、平涂和简化材料使二维表达明显风格化。",
          "complexityReason": "动画比例和简洁上色偏卡通，厨师服与战斗道具组合为适中复杂。",
          "eraReason": "传统服饰、王国与冷兵器狩猎构成中古奇幻母题；烹饪竞技不意味着现代电视时代。",
          "eraLabel": "中古式烹饪奇幻王国",
          "eraRange": [
            25,
            40
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://images.squarespace-cdn.com/content/v1/56ca5115356fb0ec8c2bed9b/1492897213285-X55U0TF2EUYGK3S2M7XW/Battle%2BChef%2BBrigade%2BPreview%2B5.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-95"
            },
            {
              "label": "图像来源",
              "url": "https://www.marielumart.com/professional-projects"
            }
          ]
        },
        {
          "key": "g-96",
          "code": "G096",
          "name": "星之海",
          "style": "精细像素角色",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 32,
          "scope": "星之海游戏内像素角色，不看高清宣传图",
          "values": {
            "form": 25,
            "expression": 80,
            "complexity": 50,
            "era": 25
          },
          "description": "有限像素组织发型、衣装与武器，明暗分层清楚，局部颜色帮助人物从复杂场景中脱颖而出。",
          "comparison": "比较像素角色与像素场景的一致性，而非仅关注HD-2D景深。配图为游戏画面。",
          "formReason": "像素人物头身压缩、五官符号化；配色和明暗由设计过的像素簇组织，不将高清宣传插画混入评分。",
          "complexityReason": "职业衣装和武器较丰富，但可见造型密度适中。",
          "eraReason": "至日战士、传统衣装与神话冒险为主；其他地区或叙事阶段的科技元素使全作跨度扩大。",
          "eraLabel": "古典至中古奇幻，局部高技术",
          "eraRange": [
            15,
            65
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://cdn.mos.cms.futurecdn.net/v2/t%3A0%2Cl%3A420%2Ccw%3A1080%2Cch%3A1080%2Cq%3A80%2Cw%3A1080/6Y5ouFKiFAi7zqoLDZBg8m.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-96"
            },
            {
              "label": "图像来源",
              "url": "https://www.laptopmag.com/news/sea-of-stars"
            }
          ]
        },
        {
          "key": "g-97",
          "code": "G097",
          "name": "星露谷物语",
          "style": "精细像素角色",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 32,
          "scope": "星露谷物语游戏内角色像素与对话像素肖像",
          "values": {
            "form": 25,
            "expression": 85,
            "complexity": 30,
            "era": 50
          },
          "description": "小角色通过发型衣着配色区分，大对话头像进一步补充五官和个性，人物年龄职业差异清楚。",
          "comparison": "较冒险像素更依赖日常服装与表情。配图是社区整理肖像表。",
          "formReason": "游戏内人物与对话像素肖像的结构被概括；有限色块和像素明暗取代自然材料细节，Y显著高于实物感人偶。",
          "complexityReason": "像素抽象、简化比例和材料将其放在卡通侧，日常服饰也较简洁。",
          "eraReason": "电视、电脑、公共汽车、城市企业与现代衣装说明其现代乡村背景；像素画法和种田玩法均不构成古代证据。",
          "eraLabel": "当代乡村生活",
          "eraRange": [
            45,
            50
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://www.pngitem.com/pimgs/m/163-1639954_stardew-valley-villagers-names-hd-png-download.png"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-97"
            },
            {
              "label": "图像来源",
              "url": "https://www.pngitem.com/middle/iRJbxww_stardew-valley-villagers-names-hd-png-download/"
            }
          ]
        },
        {
          "key": "g-98",
          "code": "G098",
          "name": "死亡细胞",
          "style": "高对比动态像素",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 39,
          "scope": "死亡细胞常态角色像素，排除技能与残影",
          "values": {
            "form": 30,
            "expression": 85,
            "complexity": 45,
            "era": 30
          },
          "description": "无头主体、飘带和武器形成鲜明剪影，发光色帮助识别高速动作，细节服从运动可读性。",
          "comparison": "较生活像素肖像更强调攻击轮廓、动作和强对比。配图为实际截图。",
          "formReason": "躯体、发光头部和衣装轮廓偏符号化；像素色面与概括明暗形成高Y，排除技能残影和特效。",
          "complexityReason": "飘带与武器有一定结构，画面速度和特效不额外抬高纵轴。",
          "eraReason": "城堡、囚徒、冷兵器及传统王国为主，炼金实验与少量现代化物件扩展范围；只评基础作品常见角色。",
          "eraLabel": "中古王国与实验技术混合",
          "eraRange": [
            25,
            55
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://twinfinite.net/wp-content/uploads/2021/02/20210202203601_1-min.jpg?resize=1000%2C563"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-98"
            },
            {
              "label": "图像来源",
              "url": "https://twinfinite.net/guides/dead-cells-fatal-falls-new-biomes-locations-how/"
            }
          ]
        },
        {
          "key": "g-99",
          "code": "G099",
          "name": "光明旅者",
          "style": "高对比动态像素",
          "family": "材质与几何",
          "color": "#447fa8",
          "direction": 39,
          "scope": "光明旅者常态像素角色",
          "values": {
            "form": 25,
            "expression": 90,
            "complexity": 40,
            "era": 75
          },
          "description": "披风、面罩和武器用紧凑色块组织，冷色身体与暖披风对比，身份依靠剪影和局部亮色。",
          "comparison": "比《死亡细胞》更紧凑符号化，适合观察大环境中的色彩识别。配图为媒体游戏画面。",
          "formReason": "面罩、披风和躯体被压缩成像素符号；主观配色与图形化明暗十分突出，不以背景霓虹面积计分。",
          "complexityReason": "武器与披风少层次，霓虹颜色本身不增加结构复杂度。",
          "eraReason": "能量剑、枪械、机器人与古老遗迹共同指向科技废墟；未确认地球历法，75是未来文明类比而非官方年份。",
          "eraLabel": "高技术文明衰败后的幻想世界",
          "eraRange": [
            35,
            90
          ],
          "evidence": "人工类比：沿用图鉴角色范围与常见世界设定，未逐项核验官方年表。",
          "images": [
            {
              "src": "https://img.zeit.de/digital/games/2016-04/hyper-light-drifter/standard__1120x840"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-99"
            },
            {
              "label": "图像来源",
              "url": "https://www.zeit.de/digital/games/2016-04/hyper-light-drifter-spiel-test"
            }
          ]
        },
        {
          "key": "g-100",
          "code": "G100",
          "name": "晶体管",
          "style": "图形化神话插画",
          "family": "卡通与图形",
          "color": "#268a86",
          "direction": 14,
          "scope": "晶体管Red的二维角色美术及主角形象",
          "values": {
            "form": 60,
            "expression": 80,
            "complexity": 65,
            "era": 65
          },
          "description": "修长人物、红发与大型发光武器形成强对比，服装和机械含曲线、几何纹样，色彩线条表现优雅气质。",
          "comparison": "与《哈迪斯》神话符号不同，更强调都市舞台感、时装和装饰机械；配图以主角为主。",
          "formReason": "修长人物仍有较完整人体结构；图形化绘画、主观颜色与装饰性表面使表现风格化明显高于形体卡通化。",
          "complexityReason": "时装、羽饰和大型武器形成中高造型层次。",
          "eraReason": "都市系统、程序化存在与科技武器指向未来；装饰艺术式衣装与建筑不是把故事放回20世纪的依据。",
          "eraLabel": "数字化都市的科幻未来",
          "eraRange": [
            50,
            80
          ],
          "evidence": "依据作品常见背景分档；此前未逐项核验官方年表。",
          "images": [
            {
              "src": "https://cdn.mos.cms.futurecdn.net/27cb91bab9219eab6d40df3d2fccf3fd-2560-80.jpg"
            }
          ],
          "imageNote": "原图鉴参考图，需联网从原站加载；不等同于统一版本的实机截图。",
          "sources": [
            {
              "label": "角色图鉴",
              "url": "character-styles.html#case-100"
            },
            {
              "label": "图像来源",
              "url": "https://www.gamesradar.com/transistor-review/"
            }
          ]
        }
      ],
      "note": "沿用原100款角色案例及已校准坐标；其中8款无统一年代。旧版混入材质的写实度不再作为轴选项。游戏图像沿用原站参考，加载失败时可查看图鉴或来源。"
    },
    "styles": {
      "name": "40个风格方向",
      "short": "STYLE CENTERS",
      "colors": {
        "写实与体块": "#b26934",
        "卡通与图形": "#268a86",
        "动漫与手绘": "#7263ae",
        "材质与几何": "#447fa8"
      },
      "axes": [
        "form",
        "expression",
        "complexity",
        "era"
      ],
      "items": [
        {
          "key": "s-1",
          "code": "S01",
          "name": "自然主义写实",
          "style": "自然主义写实",
          "family": "写实与体块",
          "color": "#b26934",
          "scope": "6个现有游戏案例的方向中心",
          "values": {
            "form": 94,
            "expression": 16,
            "complexity": 57,
            "era": 43
          },
          "members": [
            "g-1",
            "g-33",
            "g-34",
            "g-38",
            "g-40",
            "g-70"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "6个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            25,
            60
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-2",
          "code": "S02",
          "name": "写实暗黑奇幻",
          "style": "写实暗黑奇幻",
          "family": "写实与体块",
          "color": "#b26934",
          "scope": "7个现有游戏案例的方向中心",
          "values": {
            "form": 87,
            "expression": 23,
            "complexity": 79,
            "era": 35
          },
          "members": [
            "g-2",
            "g-36",
            "g-37",
            "g-39",
            "g-41",
            "g-42",
            "g-56"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "7个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            20,
            55
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-3",
          "code": "S03",
          "name": "赛博朋克写实",
          "style": "赛博朋克写实",
          "family": "写实与体块",
          "color": "#b26934",
          "scope": "1个现有游戏案例的方向中心",
          "values": {
            "form": 95,
            "expression": 15,
            "complexity": 75,
            "era": 55
          },
          "members": [
            "g-3"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            55,
            55
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-4",
          "code": "S04",
          "name": "厚重夸张奇幻",
          "style": "厚重夸张奇幻",
          "family": "写实与体块",
          "color": "#b26934",
          "scope": "4个现有游戏案例的方向中心",
          "values": {
            "form": 56,
            "expression": 59,
            "complexity": 83,
            "era": 30
          },
          "members": [
            "g-4",
            "g-43",
            "g-54",
            "g-55"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "4个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            15,
            70
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-5",
          "code": "S05",
          "name": "动画电影式英雄卡通",
          "style": "动画电影式英雄卡通",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "3个现有游戏案例的方向中心",
          "values": {
            "form": 53,
            "expression": 38,
            "complexity": 70,
            "era": 67
          },
          "members": [
            "g-5",
            "g-52",
            "g-77"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "3个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            55,
            90
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-6",
          "code": "S06",
          "name": "复古商业插画式卡通",
          "style": "复古商业插画式卡通",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "2个现有游戏案例的方向中心",
          "values": {
            "form": 47,
            "expression": 65,
            "complexity": 50,
            "era": 50
          },
          "members": [
            "g-6",
            "g-53"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "2个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            45,
            60
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-7",
          "code": "S07",
          "name": "美式漫画描线",
          "style": "美式漫画描线",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "1个现有游戏案例的方向中心",
          "values": {
            "form": 60,
            "expression": 75,
            "complexity": 75,
            "era": 75
          },
          "members": [
            "g-7"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            65,
            85
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-8",
          "code": "S08",
          "name": "精致日式动漫",
          "style": "精致日式动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "scope": "7个现有游戏案例的方向中心",
          "values": {
            "form": 48,
            "expression": 62,
            "complexity": 71,
            "era": 55
          },
          "members": [
            "g-8",
            "g-44",
            "g-57",
            "g-59",
            "g-60",
            "g-62",
            "g-63"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "7个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            20,
            100
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-9",
          "code": "S09",
          "name": "夸张格斗与动漫形体",
          "style": "夸张格斗与动漫形体",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "scope": "4个现有游戏案例的方向中心",
          "values": {
            "form": 44,
            "expression": 74,
            "complexity": 64,
            "era": 55
          },
          "members": [
            "g-9",
            "g-69",
            "g-71",
            "g-73"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "4个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            20,
            85
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-10",
          "code": "S10",
          "name": "都市波普动漫",
          "style": "都市波普动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "scope": "3个现有游戏案例的方向中心",
          "values": {
            "form": 38,
            "expression": 83,
            "complexity": 63,
            "era": 45
          },
          "members": [
            "g-10",
            "g-66",
            "g-67"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "3个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            25,
            65
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-11",
          "code": "S11",
          "name": "经典冒险漫画",
          "style": "经典冒险漫画",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "scope": "3个现有游戏案例的方向中心",
          "values": {
            "form": 38,
            "expression": 53,
            "complexity": 57,
            "era": 35
          },
          "members": [
            "g-11",
            "g-68",
            "g-84"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "2个可定位样本、1个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            25,
            40
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-12",
          "code": "S12",
          "name": "日式Q版职业角色",
          "style": "日式Q版职业角色",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "scope": "1个现有游戏案例的方向中心",
          "values": {
            "form": 20,
            "expression": 50,
            "complexity": 60,
            "era": 30
          },
          "members": [
            "g-12"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            25,
            35
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-13",
          "code": "S13",
          "name": "华丽手绘奇幻",
          "style": "华丽手绘奇幻",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "scope": "3个现有游戏案例的方向中心",
          "values": {
            "form": 52,
            "expression": 65,
            "complexity": 85,
            "era": 30
          },
          "members": [
            "g-13",
            "g-45",
            "g-65"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "3个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            20,
            75
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-14",
          "code": "S14",
          "name": "图形化神话插画",
          "style": "图形化神话插画",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "2个现有游戏案例的方向中心",
          "values": {
            "form": 62,
            "expression": 85,
            "complexity": 73,
            "era": 43
          },
          "members": [
            "g-14",
            "g-100"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "2个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            15,
            80
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-15",
          "code": "S15",
          "name": "哥特黑块漫画",
          "style": "哥特黑块漫画",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "1个现有游戏案例的方向中心",
          "values": {
            "form": 45,
            "expression": 90,
            "complexity": 65,
            "era": 35
          },
          "members": [
            "g-15"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            30,
            40
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-16",
          "code": "S16",
          "name": "怪诞手绘童话",
          "style": "怪诞手绘童话",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "1个现有游戏案例的方向中心",
          "values": {
            "form": 15,
            "expression": 90,
            "complexity": 40,
            "era": 40
          },
          "members": [
            "g-16"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            35,
            45
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-17",
          "code": "S17",
          "name": "复古动画与橡皮管",
          "style": "复古动画与橡皮管",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "2个现有游戏案例的方向中心",
          "values": {
            "form": 20,
            "expression": 88,
            "complexity": 48,
            "era": 45
          },
          "members": [
            "g-17",
            "g-72"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "2个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            40,
            60
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-18",
          "code": "S18",
          "name": "史诗平涂动画",
          "style": "史诗平涂动画",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "scope": "2个现有游戏案例的方向中心",
          "values": {
            "form": 52,
            "expression": 75,
            "complexity": 60,
            "era": 30
          },
          "members": [
            "g-18",
            "g-95"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "2个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            25,
            40
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-19",
          "code": "S19",
          "name": "水彩与铅笔动漫",
          "style": "水彩与铅笔动漫",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "scope": "3个现有游戏案例的方向中心",
          "values": {
            "form": 47,
            "expression": 73,
            "complexity": 57,
            "era": 42
          },
          "members": [
            "g-19",
            "g-64",
            "g-94"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "3个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            25,
            80
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-20",
          "code": "S20",
          "name": "水墨和风绘卷",
          "style": "水墨和风绘卷",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "scope": "1个现有游戏案例的方向中心",
          "values": {
            "form": 25,
            "expression": 95,
            "complexity": 45,
            "era": 20
          },
          "members": [
            "g-20"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            15,
            35
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-21",
          "code": "S21",
          "name": "表现主义油画肖像",
          "style": "表现主义油画肖像",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "scope": "1个现有游戏案例的方向中心",
          "values": {
            "form": 75,
            "expression": 90,
            "complexity": 35,
            "era": 45
          },
          "members": [
            "g-21"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            45,
            50
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-22",
          "code": "S22",
          "name": "温暖绘本拟人",
          "style": "温暖绘本拟人",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "2个现有游戏案例的方向中心",
          "values": {
            "form": 20,
            "expression": 90,
            "complexity": 35,
            "era": 50
          },
          "members": [
            "g-22",
            "g-86"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、1个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            50,
            50
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-23",
          "code": "S23",
          "name": "极简面具式暗黑童话",
          "style": "极简面具式暗黑童话",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "2个现有游戏案例的方向中心",
          "values": {
            "form": 10,
            "expression": 90,
            "complexity": 30,
            "era": 28
          },
          "members": [
            "g-23",
            "g-85"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "2个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            15,
            40
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-24",
          "code": "S24",
          "name": "纸片剪贴",
          "style": "纸片剪贴",
          "family": "材质与几何",
          "color": "#447fa8",
          "scope": "2个现有游戏案例的方向中心",
          "values": {
            "form": 15,
            "expression": 58,
            "complexity": 35,
            "era": 40
          },
          "members": [
            "g-24",
            "g-91"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、1个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            30,
            55
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-25",
          "code": "S25",
          "name": "布偶与手工拼接",
          "style": "布偶与手工拼接",
          "family": "材质与几何",
          "color": "#447fa8",
          "scope": "3个现有游戏案例的方向中心",
          "values": {
            "form": 30,
            "expression": 27,
            "complexity": 38,
            "era": 50
          },
          "members": [
            "g-25",
            "g-89",
            "g-90"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、2个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            50,
            50
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-26",
          "code": "S26",
          "name": "圆润亲和人物",
          "style": "圆润亲和人物",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "3个现有游戏案例的方向中心",
          "values": {
            "form": 23,
            "expression": 43,
            "complexity": 35,
            "era": 48
          },
          "members": [
            "g-26",
            "g-81",
            "g-83"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "3个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            30,
            60
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-27",
          "code": "S27",
          "name": "极简软体角色",
          "style": "极简软体角色",
          "family": "材质与几何",
          "color": "#447fa8",
          "scope": "3个现有游戏案例的方向中心",
          "values": {
            "form": 10,
            "expression": 48,
            "complexity": 20,
            "era": 60
          },
          "members": [
            "g-27",
            "g-82",
            "g-88"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "2个可定位样本、1个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            50,
            85
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-28",
          "code": "S28",
          "name": "图标化萌系生物",
          "style": "图标化萌系生物",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "2个现有游戏案例的方向中心",
          "values": {
            "form": 22,
            "expression": 63,
            "complexity": 33,
            "era": 50
          },
          "members": [
            "g-28",
            "g-87"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "2个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            50,
            60
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-29",
          "code": "S29",
          "name": "街头潮流卡通",
          "style": "街头潮流卡通",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "2个现有游戏案例的方向中心",
          "values": {
            "form": 37,
            "expression": 58,
            "complexity": 65,
            "era": 78
          },
          "members": [
            "g-29",
            "g-58"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "2个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            45,
            100
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-30",
          "code": "S30",
          "name": "方块与体素感",
          "style": "方块与体素感",
          "family": "材质与几何",
          "color": "#447fa8",
          "scope": "1个现有游戏案例的方向中心",
          "values": {
            "form": 5,
            "expression": 80,
            "complexity": 20,
            "era": 25
          },
          "members": [
            "g-30"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            0,
            65
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-31",
          "code": "S31",
          "name": "低多边形切面",
          "style": "低多边形切面",
          "family": "材质与几何",
          "color": "#447fa8",
          "scope": "1个现有游戏案例的方向中心",
          "values": {
            "form": 30,
            "expression": 70,
            "complexity": 60,
            "era": 70
          },
          "members": [
            "g-31"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            60,
            85
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-32",
          "code": "S32",
          "name": "精细像素角色",
          "style": "精细像素角色",
          "family": "材质与几何",
          "color": "#447fa8",
          "scope": "3个现有游戏案例的方向中心",
          "values": {
            "form": 25,
            "expression": 82,
            "complexity": 42,
            "era": 35
          },
          "members": [
            "g-32",
            "g-96",
            "g-97"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "3个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            15,
            65
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-33",
          "code": "S33",
          "name": "科幻机能与工业装甲",
          "style": "科幻机能与工业装甲",
          "family": "写实与体块",
          "color": "#b26934",
          "scope": "4个现有游戏案例的方向中心",
          "values": {
            "form": 86,
            "expression": 24,
            "complexity": 76,
            "era": 66
          },
          "members": [
            "g-35",
            "g-49",
            "g-50",
            "g-51"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "4个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            55,
            95
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-34",
          "code": "S34",
          "name": "生物机械融合",
          "style": "生物机械融合",
          "family": "写实与体块",
          "color": "#b26934",
          "scope": "1个现有游戏案例的方向中心",
          "values": {
            "form": 55,
            "expression": 35,
            "complexity": 85,
            "era": 90
          },
          "members": [
            "g-48"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            75,
            100
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-35",
          "code": "S35",
          "name": "主题时装与科幻哥特",
          "style": "主题时装与科幻哥特",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "scope": "3个现有游戏案例的方向中心",
          "values": {
            "form": 68,
            "expression": 42,
            "complexity": 72,
            "era": 73
          },
          "members": [
            "g-46",
            "g-47",
            "g-61"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "3个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            35,
            100
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-36",
          "code": "S36",
          "name": "怪诞比例与讽刺人物",
          "style": "怪诞比例与讽刺人物",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "3个现有游戏案例的方向中心",
          "values": {
            "form": 45,
            "expression": 48,
            "complexity": 60,
            "era": 40
          },
          "members": [
            "g-74",
            "g-75",
            "g-76"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "3个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            35,
            55
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-37",
          "code": "S37",
          "name": "手抄本与木刻图像",
          "style": "手抄本与木刻图像",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "scope": "1个现有游戏案例的方向中心",
          "values": {
            "form": 45,
            "expression": 90,
            "complexity": 55,
            "era": 35
          },
          "members": [
            "g-92"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "1个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            35,
            35
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-38",
          "code": "S38",
          "name": "极简水彩与抽象人物",
          "style": "极简水彩与抽象人物",
          "family": "动漫与手绘",
          "color": "#7263ae",
          "scope": "1个现有游戏案例的方向中心",
          "values": {
            "form": 25,
            "expression": 95,
            "complexity": 25,
            "era": null
          },
          "members": [
            "g-93"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "0个可定位样本、1个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "无统一年代中心",
          "eraRange": null,
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-39",
          "code": "S39",
          "name": "高对比动态像素",
          "style": "高对比动态像素",
          "family": "材质与几何",
          "color": "#447fa8",
          "scope": "2个现有游戏案例的方向中心",
          "values": {
            "form": 27,
            "expression": 88,
            "complexity": 43,
            "era": 53
          },
          "members": [
            "g-98",
            "g-99"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "2个可定位样本、0个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            25,
            90
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        },
        {
          "key": "s-40",
          "code": "S40",
          "name": "动物吉祥物与弹性动画",
          "style": "动物吉祥物与弹性动画",
          "family": "卡通与图形",
          "color": "#268a86",
          "scope": "3个现有游戏案例的方向中心",
          "values": {
            "form": 23,
            "expression": 52,
            "complexity": 37,
            "era": 43
          },
          "members": [
            "g-78",
            "g-79",
            "g-80"
          ],
          "description": "此点汇总已收录案例，不表示整个方向的固定边界。风格本身没有固定历史年代。",
          "formReason": "形体与表现中心沿用已校准的风格中心；详情中的各游戏保留自己的坐标。",
          "complexityReason": "复杂度中心沿用原有复杂度分析中的样本均值。",
          "eraReason": "2个可定位样本、1个待定样本。年代中心仅为分段坐标均值，不对应平均历史年份。",
          "eraLabel": "现有样本的年代摘要",
          "eraRange": [
            20,
            85
          ],
          "sources": [
            {
              "label": "原风格坐标",
              "url": "expression-matrix.html"
            },
            {
              "label": "年代分析",
              "url": "form-era-matrix.html"
            }
          ]
        }
      ],
      "note": "风格点仅是现有游戏样本的摘要；未定年代样本不计入年代中心。风格均值不能当作固定边界或真实历史年份。"
    },
    "casual": {
      "name": "美国休闲榜100款",
      "short": "US CASUAL TOP 100",
      "colors": {
        "角色": "#cb704d",
        "物件": "#287b87",
        "场景": "#4c6dba",
        "抽象/界面": "#9065a6",
        "合集/混合": "#847754"
      },
      "axes": [
        "form",
        "expression"
      ],
      "items": [
        {
          "key": "a-1",
          "code": "#001",
          "name": "Meowdoku!",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "猫头像与逻辑棋盘",
          "values": {
            "form": 10,
            "expression": 90,
            "complexity": null,
            "era": null
          },
          "description": "猫被压缩为圆头、尖耳和点状五官；棋盘采用平面色区与线框，几乎不描述材料光照。评棋盘与猫棋子，不计封面的三维猫。",
          "formReason": "猫被压缩为圆头、尖耳和点状五官；棋盘采用平面色区与线框，几乎不描述材料光照。评棋盘与猫棋子，不计封面的三维猫。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/qsGiOZrr0qmnA9hPmwRv79Qq_xnta6onx8aaf_RGat7b-8sQK269EyS4CIkFbisjEQpfIxmfBXnPYOm5t87uSA=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/bb8b79d9c1cac2ca61bb.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/YXx6a9mEaDZGBmzyJtpLIhjeMov2nf38c11z_DqAOWfGZBJcI3K8h0Wg9aZ_RjE-vcWsn4wT8UDLjlQ5T-mcHQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/62b290b6f4f3aee59454.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Za1xf69AfQhjsFuW9iYfd49gq6YS9EKjzUXcmqEcCLcMMr1la2AroigZ8KkAI3Leg1qwpAavaobzrDhaFlAX8A=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/2701d7ad866ea01508e6.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/YXx6a9mEaDZGBmzyJtpLIhjeMov2nf38c11z_DqAOWfGZBJcI3K8h0Wg9aZ_RjE-vcWsn4wT8UDLjlQ5T-mcHQ=w2560-h1440-rw",
              "width": 810,
              "height": 1440,
              "mime": "image/webp",
              "src": "assets/images/de1f0f27ad2cb40ddb5b.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6761760135"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.oakever.meowdoku&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-2",
          "code": "#002",
          "name": "Block Out! – Color Sort Puzzle",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "凸点积木与滑块",
          "values": {
            "form": 20,
            "expression": 65,
            "complexity": null,
            "era": null
          },
          "description": "轮廓按拼合规则几何化，具象结构少；凸点、高光和阴影提供体积，但色块按解题功能强烈编码。",
          "formReason": "轮廓按拼合规则几何化，具象结构少；凸点、高光和阴影提供体积，但色块按解题功能强烈编码。",
          "imageNote": "iOS 商店图 · FoxData 镜像（HK）。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/70/38/e5/7038e5dc-5fcf-26ab-6b29-69547f7a46aa/CLEARTHEBOARD.jpg/460x0w.png",
              "width": 460,
              "height": 999,
              "mime": "image/webp",
              "src": "assets/images/82d610da845dc15a79c2.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a1/cd/b4/a1cdb409-726b-09db-fb67-e9131c9e5c46/CHALLENGEYOURSELF.jpg/460x0w.png",
              "width": 460,
              "height": 999,
              "mime": "image/webp",
              "src": "assets/images/22f2385631b1eebf1bdb.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ac/fc/e7/acfce70d-5909-4a58-5f92-76493de32eb5/ACTIVATEBOOSTERS.jpg/460x0w.png",
              "width": 460,
              "height": 999,
              "mime": "image/webp",
              "src": "assets/images/acb1c53f17d3902848d5.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b1/0f/17/b10f173c-189c-6537-af3a-9c046b5e18d5/UNIQUEOBSTACLES.jpg/460x0w.png",
              "width": 460,
              "height": 999,
              "mime": "image/webp",
              "src": "assets/images/454211a602936f71460b.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6752672568"
            },
            {
              "label": "参考图来源",
              "url": "https://foxdata.com/en/app-marketing-analytics/6752672568/as/HK/block-out-color-sort-puzzle/"
            }
          ]
        },
        {
          "key": "a-3",
          "code": "#003",
          "name": "Magic Sort!",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "分层液体与玻璃瓶",
          "values": {
            "form": 55,
            "expression": 70,
            "complexity": null,
            "era": null
          },
          "description": "瓶身仍有可辨的细颈和容器结构；液体被切成互不混合的纯色层，玻璃只保留简化高光。",
          "formReason": "瓶身仍有可辨的细颈和容器结构；液体被切成互不混合的纯色层，玻璃只保留简化高光。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/iEUZV1kLcQW2_YSPSKK_soEZuzJxkLItyhE6Y1CbV0uSzvyj6nmtk_1hvjuWDPBXXbEO3K-YdEGpXXdkjdkk=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/fcb4967682c7a93ca0e7.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/bMX8E6MfcISLL8A-NJ4EXOcJDCtHJJHGOM2d_LjvwFkinjiLN3emhsG9h5rHKUKGqv0ZcZxRFrbvjIbKFnGaP9A=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/0d037761a0e626becb13.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/QuUg9Jju_OCoUsed8KBwbf6h8wmoLYziMy_ehJUFD5VKP0_tDGJJt9EbO4CX_H1vS6TlTwLhpDACfXI1DiTrrNE=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/b1eaa7b880ab8313f8d9.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Sfjf17zKf3Bmn3adCl7c-URmELzpW7lDWxiJ8Tfz-_VAIPUo0F5eP3HIgJ2_GO7KmHtvTR8zQ4F8p2ZJ29sOMvk=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/8172799b5ee41e2e0780.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6499209744"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.grandgames.magicsort&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-4",
          "code": "#004",
          "name": "Block Blast！",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "方格消除棋子",
          "values": {
            "form": 10,
            "expression": 75,
            "complexity": null,
            "era": null
          },
          "description": "几何方格是主要形体，缺少具象参照；倒角与小范围渐变带来浅浮雕感，整体仍由色块组织。",
          "formReason": "几何方格是主要形体，缺少具象参照；倒角与小范围渐变带来浅浮雕感，整体仍由色块组织。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/Kk0zhxkemu6XOoTOdnfwuav6SqhCF0x2sNf2ZAllenVz_0vCcZT3K1_cTLuGBNm_qH2yAElbT61Lc3FS8fezZMA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/14eb9dda835d6dcfef67.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/dnreoc3iLNyiTjYehzbmPXs1prYXFABNSJfSJqSStPCnuyCzltw4MGdd53-H1te8MzH8hcSZhuoPRhuy5SbeGA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/02636f77e125abf8fab9.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/sogNkRq2d8VqbVUlTdHi-Ni1m5DkHQmWYlvG44CJ5pD6kmtBnkX_gk3xcL1RpOPV3Q4QrQEbt_lWTbo409Wh=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/575ef6535ea1277a154d.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/ZK1wgRgPHI7KcH8Onn73cxtrpxn2K5lWxASSxLFRVHG54VYF5aICrpGODO0hTgX-bl5rEqnHkLa-3TndPSdS0A=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/79d4982c0261004ad920.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1617391485"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.block.juggle&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-5",
          "code": "#005",
          "name": "Rotate Rings",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "彩色开口圆环",
          "values": {
            "form": 25,
            "expression": 70,
            "complexity": null,
            "era": null
          },
          "description": "圆环被统一成规则模块，空间关系服务拼图；色相分区强，少量投影保留玩具质感。",
          "formReason": "圆环被统一成规则模块，空间关系服务拼图；色相分区强，少量投影保留玩具质感。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/ypQoZEv0K2uztBWtNKEu6koGobEXEqkcH6dGoA0fRDjU0CyiYTjIAMEpJqZT2_lUUiA47PdHLDsEKfOHfSx83MA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/a57d69eda5ca2ae54177.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/-I9RvqaUV3K2ZbAUySCY_93TVtGzuQ3_RA1ZN1TpVkbIxQMHhQFjZCndLb1aw3ric5zIlrYInO_xxs-zan6YgQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/a6f4ed906c7b023dc504.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/wvlwqK74K0lNezofxYssMoNnKfR-wM_qOZ1h47pa898Rwp6xEHNxM4VpTlOLRnaAFlkN_cf5NPXV44b_-DPm4Q=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/91d16fd0d9b4b93c1eb8.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/uui1OaGo5q8DUkqxxPyKGot15emaz7ZaBrg90-lTw7yzmolfgt-XYqXuoTS-utbSD5fZE1hfrMCKLIG0MKdndw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/9905cef4848894e275fd.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6793924927"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.nebula.rotaterings&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-6",
          "code": "#006",
          "name": "Brain Puzzle 3: Crazy Mind",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "关卡人物插画",
          "values": {
            "form": 60,
            "expression": 90,
            "complexity": null,
            "era": null
          },
          "description": "成人体态仍清晰，面部和表情作漫画化处理；描线、平面色区和手绘阴影占主导。各关卡人物比例有差异。",
          "formReason": "成人体态仍清晰，面部和表情作漫画化处理；描线、平面色区和手绘阴影占主导。各关卡人物比例有差异。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/x1Wu0MolbbgRrG_cU0b_Eo1PICnGDHqvVlK60bfnhVUwEGmB-IiWEr3nx5TDhRAe_BEPYvNnQC-TYcvIgpHzK1k=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/28d27de1f3e51b15c671.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/UsHhTmnAQeWaabW47Z5WeqVs3xEufjtuCFrFp2lPBYzti5fCHzWs6b_XLuRsjXNxMMTioN1-rgXjXM_G14JkiQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/d3d93fecb23c55f2c98f.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/PVhxY5MaQtQYDujBTsLdz3ncl_tnP6m_m-60GR6fwTxRk1hf3VVSXXECM3c0DdCEKXe7dye_A2PqIHW3RccS=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/15a133f3e425d2b9278e.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6756482832"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.brain.crazy.joygame&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-7",
          "code": "#007",
          "name": "Township",
          "style": "场景",
          "family": "场景",
          "color": "#4c6dba",
          "scope": "农场建筑与作物",
          "values": {
            "form": 45,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "房屋和田地保留现实功能，但屋顶、作物与地形呈玩具式概括；柔和阴影配高饱和固有色。",
          "formReason": "房屋和田地保留现实功能，但屋顶、作物与地形呈玩具式概括；柔和阴影配高饱和固有色。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/-aCA3a-E031C4Hh9OZ_BO74aUvgbpBcz-sJuSZgEg1nf09p1KIVlq1TV7IS05wDzViIM89VHJmuY7mRaobnEnQ=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/faa1cba2234120f9abf3.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/VJV08rKAgDOtdzK8AN3lHcmV7wL7yqgzKG6lNi7N-C_SD5r1eTm_ya_sUZJuMUzC0ZeIxVj2f8c2TdPbfB1Vjw=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/dc854eb523d4c924d9df.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/6fBmvnzdFvguJDSgomIDShSwjyXxto76X5Glid2HSYCERMnDTfb15Q1jZQ5NDMnojWqy1CXCt6ImuFgzjK1XKzA=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/fa2b264b8018331b0c7b.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Hq4gg_lqgUO-NZLGHdis-olfGBeRWT0sMWit95bOGt3h44xUXDdiFDFyJHd0TfB_r1H0K3fXYAJYYmMKQuh5=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/799ea86635352c27cde9.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id638689075"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.playrix.township&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-8",
          "code": "#008",
          "name": "Bus Traffic Fever!",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "巴士与乘客棋子",
          "values": {
            "form": 40,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "巴士被缩短、圆角化，乘客简化成成排小人；有连续体积与接触阴影，颜色主要承担分类功能。",
          "formReason": "巴士被缩短、圆角化，乘客简化成成排小人；有连续体积与接触阴影，颜色主要承担分类功能。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/vca8Iw1F0ERcbF1osIH0K3Px7iiJdz5LT98G8ScNPnldD3BnmyeRbYArR8gxIY_qurE5AWfs0Jn85d1dgHFwCA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/5f3b6121e8806fdd70f1.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/kUQqWbA910FD2qxMYo4w1NzA-uBf4GxHsUuPkZanX-9IKTTDqEUWA3HWTtQ3mt37eSuBYGQvt5F8x5o9OFOwFT0=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/c6fdfa5f1a118783228c.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/QnrOGchibp6vbJC6CBmJ4ZVhGedR-FkVs1lnReWTbrQ3ihoc4htJyzw4lLoJC5h41RbfIz5vVhdmuPyUiwwe=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/e85ba1672aea77c95e25.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6759763476"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=jp.co.goodroid.hyper.busflow&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-9",
          "code": "#009",
          "name": "Bus Fever Party!",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "交通拼图的车与人",
          "values": {
            "form": 40,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "车辆和乘客均采用紧凑的玩具比例；塑料般的统一表面与鲜艳分组色，保持简化三维光照。",
          "formReason": "车辆和乘客均采用紧凑的玩具比例；塑料般的统一表面与鲜艳分组色，保持简化三维光照。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/Y8o_aXb8tfVFjYJiCdz3qAf4pXJGgxSorXDSKqw9AMVpdzv98hpL4-SiKxyfODjaPOtU1HY6_dGg28u--akF=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/dad785192ad303fa8562.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/yz0Qa5YEn5VVXZ2PmB74ZCMnJ6FRNFTsYRH-9es617SGcDqZVdFF03c-5gD6XIr_s6FNWTIiffmyicPeHWae=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/4abae950245fe8f5a0f6.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/gLRbwS_5wESuJV263HjWZ9GAYkrSbh3qUkGpqAdKpCNpB7oWTvKvR3qOtto1WaLBQla-R97eWMFc_NSJNP8zDec=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/76beba7b680f2db1391e.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6746743297"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=gridplus.busjam.carpuzzle&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-10",
          "code": "#010",
          "name": "Amaze GO!™",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "箭头线条棋盘",
          "values": {
            "form": 0,
            "expression": 95,
            "complexity": null,
            "era": null
          },
          "description": "图形几乎完全抽象，依靠方向和连线表达；单色线条与平面底色不模拟真实体积。",
          "formReason": "图形几乎完全抽象，依靠方向和连线表达；单色线条与平面底色不模拟真实体积。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±5，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/CP0P_f0vGa_Zs0TzqFHXPWXKoekUqj3T1X0tT1ZJ8GCxb41ex8rYaBIkKwtIkbI9ZbiXcqh4a_fC0GM00cEhuw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/a8d58ef6d79fe00231a0.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/mTHQQKdlE833qjxl6-NEj13Uh0N-DlksiINnk007WCUn6a64odva8vtTHJ-_mGXJ8hGrPmHhe1Tw2uJPJOImTbI=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/113ebd870473cd0e3b7c.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Z-c_KF2YXzpSw8D15uQ7jIlV0v3HNPTR--ifUTLQSSk79efRLIgcord81sP3rXxzaYT-QPkjaoVfoiQbnXNS8i4=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/03e4f02e25035ac30c0d.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6758326278"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.oakever.arrows&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-11",
          "code": "#011",
          "name": "Gossip Harbor®: Merge & Story",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "故事人物",
          "values": {
            "form": 40,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "大眼、圆脸和夸张表情形成欧美卡通比例；皮肤与衣物有柔和体积，但毛孔和织物细节被概括。商店图混有剧情宣传构图。",
          "formReason": "大眼、圆脸和夸张表情形成欧美卡通比例；皮肤与衣物有柔和体积，但毛孔和织物细节被概括。商店图混有剧情宣传构图。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/1dofeIFKvycMzQnQP7eZ06hufLJmQUu7miEhCNSAsQiyrX8ImszsCgUfRqe1Skoi_SMe1YoFBlMfcAk8stdPDw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/488f7c35b8d815017f1d.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/jwuDLhQpOxDqPLj2Xz2JDv2NErnlVjLC6sImkrUpIIyT-j8vGCLGLMMH32qzRj_FzhPxCFpulEk621F_2TT0=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/eed42e7527ee373270c9.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/n8MYQ9sOjyEOzM2gw1Sqqr0bLPTgycvYKezDH68zphPOlxAmcOZsmN1Ifyw73fed5PuBlNBNkcLPsZgUE0sD=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/0eb38f29d927e264ab20.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1623318294"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.mergegames.gossipharbor&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-12",
          "code": "#012",
          "name": "Tasty Travels: Merge Game",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "合成棋盘中的食物",
          "values": {
            "form": 45,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "餐点保留可辨轮廓，却被压缩为圆润、大小统一的图标；高光与色彩被强化，采用洁净的插画式体积。",
          "formReason": "餐点保留可辨轮廓，却被压缩为圆润、大小统一的图标；高光与色彩被强化，采用洁净的插画式体积。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/oFug23yj9dYxtko9zEURKoVFgatMfKy_cNixw7N79KT3tZbJIhEi6IAumOAkwe58G1AxFGDWCoFWgUBD1ahq8fg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/8535a2afa63fc2ff9ca5.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/u4TyCe51jZpgpQkBJb1jq5KDMN4fzahOQBzjtaMIhdaW66PnYwM7LbE5jYHvNR357YzEWaH3pg1z-KUxaV_WJVA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/1b4067d9c977cf337657.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/YBI0J2NIjCEoxHtD-PsANkXi5q6clQnu6gA2-kvr0ggd7WVvsVLTFOIaf2YO1PFqaqduccmnxo7pcdp_JQqyow=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/06af7cf56faced1038a5.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6471045672"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.fatmerge.global&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-13",
          "code": "#013",
          "name": "Car Evolve",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "跑道车辆",
          "values": {
            "form": 65,
            "expression": 50,
            "complexity": null,
            "era": null
          },
          "description": "车身比例和车轮位置接近真实车辆，结构有所简化；明亮路面和简化反射强化游戏感，不按漂浮赛道题材降写实度。",
          "formReason": "车身比例和车轮位置接近真实车辆，结构有所简化；明亮路面和简化反射强化游戏感，不按漂浮赛道题材降写实度。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/ETS0uL27fR5D7sZRcWJ9SlGLjXXPWoKyC52OFN3VAIuoMbnXM-8k9A2M1j8eHQDp1u1LzRt7gw4HaXwccerT2A=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/d007828811611d348bd9.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/vB12IYziqvOdpxWc03riZ5yTJyVMeigchQxuQ4UXzonxmSUxcu7RnF9INMr2Qjmu-sXpuqLEFMVSpIelizAdvA=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/843e2b34589098b461ac.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/AzjgEO_2mu2_HkxPBDoI2q10eSGbNaxmvH8QNKE4Btbu0EwrwoZ5vQ9lJ_ZtX0XFrzYv-fYwbHDmEkpZ9YEQ2g=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/ab1ae92b071550631ccd.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6754464806"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=io.heseri.car&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-14",
          "code": "#014",
          "name": "Food Hunt: Pixel Puzzle",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "像素拼图与小棋子",
          "values": {
            "form": 15,
            "expression": 85,
            "complexity": null,
            "era": null
          },
          "description": "食物图案被离散网格重组，轮廓高度概括；色彩分区与像素边界显著，体积信息有限。",
          "formReason": "食物图案被离散网格重组，轮廓高度概括；色彩分区与像素边界显著，体积信息有限。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/mbUcYy64eridoFcbm3C4FaqgmWA3ABtDmi_gVw-VryCGddWiwQRlZd5rAu26iXFien9P9tS_dugrVN1jJUe2L2Q=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/f84812f35c3eb93bd26b.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/6VfdBGWRwScOSJOSzHH7UL_ZUalkOaOmRBPmPk-jX98pi0R3l6q_7gdLfwZd0wv-flH5alWkLlotpGslW6HitQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/3871702863c45b8411de.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/7gnquddRJM_Cxk3eVil6LOcqdtk-Rp7hS9Ni9GoDZ9LBqJB3LddGwC_coLTcJgTHlj2QM7gqV83qm-6XvAK0fA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/360ef404cd9c3824afd9.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6769314786"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.vigafun.funfinity.foodhunt&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-15",
          "code": "#015",
          "name": "Magic Tiles 3™: Piano Game",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "商店所示歌曲选择界面",
          "values": {
            "form": 0,
            "expression": 90,
            "complexity": null,
            "era": null
          },
          "description": "本次可见图以列表、按钮和专辑缩略图为主，评功能界面的图形组织；不把歌手照片当作游戏角色，也不据此判断全部演奏场景。",
          "formReason": "本次可见图以列表、按钮和专辑缩略图为主，评功能界面的图形组织；不把歌手照片当作游戏角色，也不据此判断全部演奏场景。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±20，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/g71P25wh0ovS22Mzkjwh0sYBFK3cp23CKCN_At1gAn-G3t3g2wRJYgR5nuejMv-lw0rLqYZ9EnCN2VHpySQFBA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/a4eae97366dc7c4e8058.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/dzYcd9cSI47lEby01bi84Uf2aGMIgEAngRJLmOysEZWOvUfBeiLdusyyiIvHhnB6HDhX2zqFnUR99JJMkbFUmg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/e4aa711d1943fd48471f.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/K308szuXS0oVALJXlpE5kMd9wr7jv-Hbf6e42su5pB_yHsDyJDJaNxEDhwve_kmBP-e9HWYfFy86npKhYzucI1w=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/aca2bdc14f8b31e80bbd.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1443446174"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.youmusic.magictiles&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-16",
          "code": "#016",
          "name": "Triumph Arcade",
          "style": "合集/混合",
          "family": "合集/混合",
          "color": "#847754",
          "scope": "合集内棋盘与小游戏界面",
          "values": {
            "form": 30,
            "expression": 65,
            "complexity": null,
            "era": null
          },
          "description": "可见内容包含纸牌、棋盘、球类等不同模式；代表点反映简化物件与界面的共同倾向，不能代表每个子游戏。封面低多边形人像不计入。",
          "formReason": "可见内容包含纸牌、棋盘、球类等不同模式；代表点反映简化物件与界面的共同倾向，不能代表每个子游戏。封面低多边形人像不计入。",
          "imageNote": "iOS 商店图 · FoxData 镜像（US）。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±25，不是统计置信区间。",
          "images": [
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/7a/f4/d0/7af4d068-0037-2e0a-2d7f-79e9566874e5/1242x2688_2.jpg/720x0w.png",
              "width": 720,
              "height": 1558,
              "mime": "image/webp",
              "src": "assets/images/9cde1ee476477bd195c1.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e7/c6/dd/e7c6dd1e-4a49-6c3e-ba4a-93cd7883eb48/1242x2688_1.jpg/720x0w.png",
              "width": 720,
              "height": 1558,
              "mime": "image/webp",
              "src": "assets/images/32c890395e55c0ca48d9.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/df/18/32/df183210-5a0c-687c-ad34-54e6d6ffab4a/1242x2688_3.jpg/720x0w.png",
              "width": 720,
              "height": 1558,
              "mime": "image/webp",
              "src": "assets/images/366b1a39606c9aadd841.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/35/e9/5c/35e95c27-637d-19cc-555c-276f9d79baed/1242x2688_4.jpg/720x0w.png",
              "width": 720,
              "height": 1558,
              "mime": "image/webp",
              "src": "assets/images/14e76d9005d2e7eb10da.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1608987929"
            },
            {
              "label": "参考图来源",
              "url": "https://foxdata.com/en/app-marketing-analytics/1608987929/as/US/triumph-play-for-cash/"
            }
          ]
        },
        {
          "key": "a-17",
          "code": "#017",
          "name": "Fish Sort Puzzle – Bubble Jam",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "泡泡中的鱼",
          "values": {
            "form": 25,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "鱼类的大眼、短身和圆润鳍片明显拟人化；表面使用连续渐变与闪亮高光，水下色彩经过强化。",
          "formReason": "鱼类的大眼、短身和圆润鳍片明显拟人化；表面使用连续渐变与闪亮高光，水下色彩经过强化。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/HN1rJavYcjWbREnhBr_GnatnoRXXjCLiXDu2ONf17Knh0IHpy6WGnDTIXiSIpW8_CTGPH16vVuSMNTpixbmQlw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/8751757843f7236ee52c.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/1mFYE7Lnhh3tepjSUrQxA3RX9IuxpRshR-H4tFsA_Z0lyThccBLss3jV753kfl2dEgKJUuI_gtjUmHKgCF0k=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/592cc682018b76ebe3fc.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/BLtDnwp6H1FldsCsrJ9gP07Ejh1bhtQHpOX6bdyQA5BByJI6tErC6gm0dKdV801L9prVEc3Ff2CDtZtaUJGoSw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/768521d7b879dca7aab4.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6771681639"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=triple.sorting.bubble.fish.match&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-18",
          "code": "#018",
          "name": "Royal Smash! – Physics Puzzle",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "积木建筑与炮台",
          "values": {
            "form": 35,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "城堡被压缩成色彩积木，炮台轮廓圆润；三维阴影清楚，但材质统一、色彩糖果化。",
          "formReason": "城堡被压缩成色彩积木，炮台轮廓圆润；三维阴影清楚，但材质统一、色彩糖果化。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/gyE0rrS_jX4KQxjVSFVeWse7odrbBxV2PfSAt7v-DKfzHfEr3czuREUIoyX1DohEjbkZQT13tNLZChxoa4CJ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/c468c520ddd332954cfb.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/zDpfWchpN1b97nhoKS862e9a0gEJ-MoVWj41bITiPmzeqkndlgCm2fMoNXORfBErpEg9p4e4rp6OpfY_ewMi=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/9f1107669f51a844258c.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/2YoMl_KYN7iUoMphPP5E39seq7O-Raegd55hfgcq0CRcp_r9e67hPaQc4N2KHEFHg1b55WAj5cBki6KWbsp1=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/28e80dbe339df8b8256d.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6780891673"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.cyphergames.royalsmash&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-19",
          "code": "#019",
          "name": "Paper.io 2",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "占地区域与移动棋子",
          "values": {
            "form": 10,
            "expression": 75,
            "complexity": null,
            "era": null
          },
          "description": "领地与路径本质为抽象色区，棋子体积简单；高饱和底色、边界和发光效果主导。不同皮肤可带来形体变化。",
          "formReason": "领地与路径本质为抽象色区，棋子体积简单；高饱和底色、边界和发光效果主导。不同皮肤可带来形体变化。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/qseziZ-Sb4IV__KJ4KZYNXTIlsX6rjSzK5OoDkSHz64HN3BgBsG16VTiyFYIjDBN217c55UjdbilvW--iN7F-mk=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/629d4cca800faa7eb461.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/oGedj4cO0FDwy7ypWWXi7rlm-n6RrJL_6DxiVtDp0elNJualZJn2WceHu638bGCt4pWc5nwtPNCWvy2m6DMbaZY=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/8814dec544448b517cae.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/bGiaAxqx2eF2s0iyO7NcG4yQ9rsGI5Mwg4aEAkfkBNDDUF6NFW6O2oWlcP2cY-hefnoNHpv3VnZf_EnDSqQWyA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/b4d5d8ec6fccc29aa432.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1423046460"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=io.voodoo.paper2&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-20",
          "code": "#020",
          "name": "Gardenscapes",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "商店场景中的人物",
          "values": {
            "form": 45,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "人物体块紧凑，面部、手脚明显概括；表面光照柔和而纹理简化，整体为明亮的卡通立体表现。",
          "formReason": "人物体块紧凑，面部、手脚明显概括；表面光照柔和而纹理简化，整体为明亮的卡通立体表现。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/35B0ljIOTAB3oBRgQYMwhlBp4MBR1T2YsIzxdXWIZVCOQv5OyQkQFxDJGK9wVOabMG9bL8SDMt4iCFvLk4iQGnY=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/46922419ff7e8092c16b.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/uHoccSaatOMEv2DhLPnu1uEUd44BmZrsffPt-On_rCxb5kF8sulFv76jdD29AzByYaKPMnqqQprzDgvMIb1m0A=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/58a69006f0c034cc9e41.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/OePdUeeTsnqOncqmG6TIwY3BuuadQR09AzlKyYIPeZk6StZfpyu2zhJ27KKbxrBXAHyc-2IwQ98M3eNZ8KpDkw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/4a28a0eff54096352b32.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1105855019"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.playrix.gardenscapes&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-21",
          "code": "#021",
          "name": "Jigsaw Drop: Solitaire Puzzle",
          "style": "合集/混合",
          "family": "合集/混合",
          "color": "#847754",
          "scope": "拼图卡面内容",
          "values": {
            "form": 90,
            "expression": 30,
            "complexity": null,
            "era": null
          },
          "description": "所见卡面大量使用照片式动物、食物与景物，形体接近自然；不同卡面也含插画，点位只概括本次展示内容，不把卡片外框计入。",
          "formReason": "所见卡面大量使用照片式动物、食物与景物，形体接近自然；不同卡面也含插画，点位只概括本次展示内容，不把卡片外框计入。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±25，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/Kyl1yQMYO53npaywuGfe2UZRVEA2zoB1O99nCTwPxMo_omltToMmrsUgM_cZbnbvir-933OkuzQgANL7F_Mq6g=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/df957f37a9a84e8e0ebe.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/3Y9oH0gGXOQf0EMev44oLarKOuYqJ8e6PHTaSJBlDM58wJc1N2ZaSIqi9w-iD3PjRrjY35rBKdECyFmJT4Uo=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/9646f22af791055557b5.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/SZREF2_cVRAFki-hl1UbOYgIHG-t4hsxGi9yQ9rVwcoFFiwfEOwl9tOazKpQGY23rC_E7QXVUcJ0o6_0-gQpUQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/f422eefd523e503e9dd3.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6767091927"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=jigsaw.solitaire.match.games.free&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-22",
          "code": "#022",
          "name": "GOGO! Blast",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "黑白箭头迷宫",
          "values": {
            "form": 0,
            "expression": 95,
            "complexity": null,
            "era": null
          },
          "description": "方向线条构成抽象路径，几乎没有物件结构；黑白描线和少量提示色形成高度图形化表达。",
          "formReason": "方向线条构成抽象路径，几乎没有物件结构；黑白描线和少量提示色形成高度图形化表达。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±5，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/80Q0xkUeU2DvLIie6d2d0eDCNxb2m37_CM6GFTTmeN0vKi8hEhzSiF7ynJ3RsI1JvjxFzCixp82xduA4F3dM2A=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/607fa4a56c3ef8a96682.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/jYxFwoGmlPA84oCec_ov8coY0zDfAU-mKIUEiEYpBmm0PxkqAlkyPmxQ50jFkmRwzqmy8sZjS3vvtq8OHjXqABE=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/3a05ba4042d4722348f8.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/RpALciJFptB-15THdtdUvtdNKr-I3mE7-hAZoI6OzYGnr8Lg4B22_KDiSoW2sfj0EFF01_7hYDwsMQMB5fo2tTQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/8a5a25bea554b63c4f2a.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6776522053"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.nebula.arrows&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-23",
          "code": "#023",
          "name": "Yarn Loop: Knit Puzzle",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "针织像素图案",
          "values": {
            "form": 20,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "图案轮廓按针脚网格概括；线团、线股与刺绣框保留体积，针织材料的可信度使表现强度低于纯平面像素画。",
          "formReason": "图案轮廓按针脚网格概括；线团、线股与刺绣框保留体积，针织材料的可信度使表现强度低于纯平面像素画。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/F4vvMs-eBinjDwV6b3LE3svi9lb02JmIy2ANEXJmLMCPQElB061ciqDtRk_iSfZXSBDD7yl321-mLjBwtjQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/e5ffb78d6bb11a7b8ce6.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/SWy-aECm1UHJ1NbUqGzY6bAofBvo6jQAXdUU_NQk-kks40oyIs3_WRBa-YQN1_b2e4-XjxGswxext0QWfMX2LQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/ec185d96f5b9c35c11dd.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/XISfU80eQCm4mbdpvlAwMHi16eB8W52-yYDOucs91uyUxRsHOk3XYxDjB26fy2S4rthEhUOIyhshG1nRGSJUmMY=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/7ac6e3b1ea5ddb658222.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6755183085"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.combo.yarnflow&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-24",
          "code": "#024",
          "name": "Colorever: Gem Art Puzzle",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "珠粒拼成的图案",
          "values": {
            "form": 20,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "自然对象被规则小珠阵列重组；圆珠有高光和厚度，但画面依靠离散色阶而非连续自然明暗。",
          "formReason": "自然对象被规则小珠阵列重组；圆珠有高光和厚度，但画面依靠离散色阶而非连续自然明暗。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/wpemQxAL-O9239ef4BL2yuuU6SkVrXjJDjQE5NXnEroySAETYnHle9NxnQZ1r9YDd-Ap4W-pnLYOsY-dp0t4Wg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/878bf770b770634e4e60.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/ppGg690srDpj0cDOOVMRs4Ypb6EIMDEE9M2P9zk5ZTAYUdzoLGXJrajz9o55XFIGGGv2GMqpiCsyFjb0pYoH_Q=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/14f01fc3e2aa1870725e.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/A4pM5JKEa-6bqFbje6KmBQLOeaAEPiv--t396pFdyEQ838S9dGxAWwENxk0k8pJeIgGBAd5Txu5YV-nY07b2cg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/240eb4027c869372c36e.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6761757565"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.oakever.gemcoloring&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-25",
          "code": "#025",
          "name": "Subway Surfers",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "跑酷人物",
          "values": {
            "form": 35,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "大头、大鞋、圆润肢体形成明确卡通比例；材质较统一，使用连续柔光与鲜艳配色，保留三维体积。",
          "formReason": "大头、大鞋、圆润肢体形成明确卡通比例；材质较统一，使用连续柔光与鲜艳配色，保留三维体积。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/0WDSfcGVkNLrbllx6z5GaNVA5ubkuBy5xBxfD8se188KrSqO2c-AJMRguiJMyacj5nx58-sIlJU7IXbYz18CyA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/a40dcf57093c71c8cc4b.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/r1EF2Yo2IQUeXIvAB-ZQe6-7PNGc_sIEeUKMhcpGi7AUpvtiZruKU5EVoSQj0JeAZ5nt4AXAp5J692rX1qS54A=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/de662ace0e12656ff95f.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/LR8_LkjuVSenDQi1AIhZQVpNXXvdWb5eRWoza8OrpxM0I4iT6-MH7GeZA9_k1ngB7j8wEZaoT76Lsh4nA4CaYw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/390fbd079cf3ecf54709.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id512939461"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-26",
          "code": "#026",
          "name": "Top Lords",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "道路战斗中的士兵",
          "values": {
            "form": 35,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "士兵缩成短小、重复的队列单位，装备细节概括；地面和人物保留三维阴影，阵营色有明显功能性。",
          "formReason": "士兵缩成短小、重复的队列单位，装备细节概括；地面和人物保留三维阴影，阵营色有明显功能性。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/e0_l53JnLo6AzKEtEuZT2U-Svm9vmOz7srWMolS7h3CA27l-296_IqmGgSBd1ZbmpIbFXsUYLapMm1ajugiSJw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/49758d14817d3457e755.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/AaKZ2NFZiwdasZ61OLzwz4WHiQH9Ky-0D3PPMjYU6XC0R1ROIBxBQW8ECRi1clCbrn1-5jt-BT75BY8BApn1hg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/cfad1e3acf2bcb001455.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/6jnzl8dbhLHXbO_TVVVIyvmLbmUDLV3RfbqBB8mONx2AFpz6jzzPj2yKSyLghFzC4z2P0k2DhS1KBhcep-BV=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/71ef442d6199269a9deb.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6767834940"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.gamespark.topking.gp&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-27",
          "code": "#027",
          "name": "Candy Crush Saga",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "糖果棋子",
          "values": {
            "form": 25,
            "expression": 65,
            "complexity": null,
            "era": null
          },
          "description": "糖果被标准化成少量辨识度极高的轮廓；玻璃糖般高光与渐变被夸大，颜色以区分棋子为主。",
          "formReason": "糖果被标准化成少量辨识度极高的轮廓；玻璃糖般高光与渐变被夸大，颜色以区分棋子为主。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/xpUmpGTgfd8L2MIm_WOSAe23Kh6QtarIiMHneZeSbcbBakGqPGqumARHPaf4slct7VdB8k4SVzMhVRouojCS=w526-h296-rw",
              "width": 177,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/be161df06a47f368c7bd.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/DTiz3ODN6Hi8dfqdaNOPm_rOk4j9vwbQBn0Wpx7I6w9Hmuh7DYpjOKBV977tQgIkcpUnbXopHqvncuRKSn0yplE=w526-h296-rw",
              "width": 177,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/93acb6307655335bf126.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/xdO4K6fRIzlShYIDhMS4wEKkdkejl44CYyGq9XGMSxEa-_ZmBCuUwDUAkpDvpxylbGfslj9FjMnTi4dXIJ3rSQ=w526-h296-rw",
              "width": 177,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/85848f38e4be2be91667.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id553834731"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.king.candycrushsaga&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-28",
          "code": "#028",
          "name": "Royal Kingdom",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "消除棋盘与关卡物件",
          "values": {
            "form": 30,
            "expression": 65,
            "complexity": null,
            "era": null
          },
          "description": "棋子由皇冠、盾牌和色块等概括形状组成；图案与高光强化识别，背景仍有三维体积。评棋盘，不以广告险境决定风格。",
          "formReason": "棋子由皇冠、盾牌和色块等概括形状组成；图案与高光强化识别，背景仍有三维体积。评棋盘，不以广告险境决定风格。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/jBWwSlaYdGB_hQEUuNv8r3TOjPNWYFuB3oM6H-kgPr4qlE6UJMn7I86VV38kf5Yt8o3wjHNx5eKBDGucZZnx=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/b7dc505a94f6b15a04e7.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/vKYvRloDkySk-r2g_yOXINauv2jUrxX5p-wzjjjT47nx5Ayk6CScGz2lFfLeY_mnBECh2UBz3h_buKCFQnG-FQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/836bbb51143e112e64c3.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/l8Y0-DfuKpmmmDjgxvbSQvIxXessx5iA29CZEGQU60ISEDrAkZQ-HsQ52aqh_rx_PXaTG-Th1wFC2EYjiXgo0w=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/999798dafb346640c06e.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1606549505"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.dreamgames.royalkingdom&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-29",
          "code": "#029",
          "name": "Mob Control",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "成群的小人单位",
          "values": {
            "form": 15,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "人体压缩成胶囊状，五官与关节很少；红蓝色块强烈分组，体积通过柔和三维阴影表达。",
          "formReason": "人体压缩成胶囊状，五官与关节很少；红蓝色块强烈分组，体积通过柔和三维阴影表达。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/cUHyJgHSwHNORl8d-pOTXS-dz5h8qkLvkfHpwft4O_vwq2-RtNric2_KkGfpkDbWGsfuMO2Aejaf1LCqSzPC5g=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/663a8c99cd1d877e02d4.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/4DqsFTixosRJyzV9DLWYbUcjSRgtqlJAv_-TfPZjM7691OnR-C6jb1be8Fy7x_fpRy0xBnnft_bF_BIsvmawgA=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/bf8c81361f90fa1f5e6e.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/9Q54fpbvSg24eCEr5eSupei-zL5wXyP_ZE8_5Dz_JndQGvTHSXKYMcJiekW-G-vqepyrdWn3CGV14tT84tE6WA=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/644e0cc1ed6ad21a85f8.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1562817072"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.vincentb.MobControl&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-30",
          "code": "#030",
          "name": "Hollywood Merge",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "剧情与换装人物",
          "values": {
            "form": 55,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "人体比典型大头卡通更修长，眼睛和表情仍理想化；服装、皮肤有连续体积，表面较光滑。商店剧情图可能比实机更精细。",
          "formReason": "人体比典型大头卡通更修长，眼睛和表情仍理想化；服装、皮肤有连续体积，表面较光滑。商店剧情图可能比实机更精细。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±20，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/-WNv7BEzwP_A52vXqfnyJG5rrp7DBStiIPmNtCZq0isjztorgdPghxcjaDhk2gegC9-F2E7FwX13sCWlMj6H=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/b87e3ebd30a473922142.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/gVNB8WHQ63hJjKLjBegdjcC-awUjTb3MRaI6szvsrywSAJxXnDhuFdp1GO4bWBU0myVxN25tT0CMuW67lZul=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/620bcbb73833d4877524.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/zIe35I7Uz4jAqh6X4NKjp6fIno_MSVRX9l5Rle-7ArIAxwJw4ZTlvw8h5AgcgsVgeXMqLHUVgL5kJBcHgD7uVUw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/a67bbcb36ea6160f2135.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6755455500"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.hollywood.merge&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-31",
          "code": "#031",
          "name": "Water Sort Puzzle : Challenge",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "分层液体与瓶子",
          "values": {
            "form": 55,
            "expression": 70,
            "complexity": null,
            "era": null
          },
          "description": "瓶子有明确容器结构，液面与玻璃边缘可辨；分层色块和夸张透明高光显著偏离自然液体观察。",
          "formReason": "瓶子有明确容器结构，液面与玻璃边缘可辨；分层色块和夸张透明高光显著偏离自然液体观察。",
          "imageNote": "iOS 商店图 · FoxData 镜像（US）。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bd/95/da/bd95da28-7525-945f-02c2-ef0827d8dd57/Level001_1242x2688.png/720x0w.png",
              "width": 720,
              "height": 1558,
              "mime": "image/webp",
              "src": "assets/images/65db976b5965a1b066a7.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/57/31/03/57310324-dfa3-8ca3-5394-718ff59b9660/Level040_1242x2688.png/720x0w.png",
              "width": 720,
              "height": 1558,
              "mime": "image/webp",
              "src": "assets/images/5fe88e727c9f4f6880c3.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f4/66/f6/f466f6a0-021c-ad90-01e4-e8563bf46a7b/Level093_1242x2688.png/720x0w.png",
              "width": 720,
              "height": 1558,
              "mime": "image/webp",
              "src": "assets/images/bcb8d25c510b8932e625.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a1/57/94/a157945d-9c76-6b4d-fe77-4e3962657589/Level073_1242x2688.png/720x0w.png",
              "width": 720,
              "height": 1558,
              "mime": "image/webp",
              "src": "assets/images/122a9f5be1558a02084f.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6787414784"
            },
            {
              "label": "参考图来源",
              "url": "https://foxdata.com/en/app-marketing-analytics/6787414784/as/US/water-sort-puzzle-challenge/"
            }
          ]
        },
        {
          "key": "a-32",
          "code": "#032",
          "name": "Hotel Legacy: Merge Game",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "酒店服务人物",
          "values": {
            "form": 45,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "头部与五官略夸大，体态保留成人比例但较圆润；柔和渐变与干净材质组成卡通立体表现。",
          "formReason": "头部与五官略夸大，体态保留成人比例但较圆润；柔和渐变与干净材质组成卡通立体表现。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/cEw_edZs-ZM3mPPBUK0BsZD_U3fAAJnZwT2PFxB1vUodNefRL8J2DaFNAJKwcOAPZDUgDl5ssVEHsK3IbTriOzQ=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/53200bfc4346fcfcbe72.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/uJaHfpGSMXPLbGXlCsWurf_BIqeOCE-beQz1uEsEVfBCgimdBUyxpOnXRnBUQjjCUVNLILmxLvMYsXAUi6HZrQ=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/a3299c7fab9633073817.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/AkWXWAuKBRRnTORUPWMRdJyNhuSewypOQOYiFf9rm9MtAJrjaBymcAq6VG2u_vjlLf27pRQi-cni8j6ASba3-Q=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/398d92c1c0ddf8de58db.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6752886832"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.fatr.global&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-33",
          "code": "#033",
          "name": "Arrows – Puzzle Escape",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "箭头棋盘",
          "values": {
            "form": 0,
            "expression": 95,
            "complexity": null,
            "era": null
          },
          "description": "箭头和连线几乎没有具象形体；黑白平面关系占主导，装饰和阴影极少。",
          "formReason": "箭头和连线几乎没有具象形体；黑白平面关系占主导，装饰和阴影极少。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±5，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/GO4zvWXMW_233SRh_QxiInCUn3hQTMQhOOXPj0J9ITETIKBPlBU1ATJYZSfkMFFnGG_m6QofkkPP5Fil4PAlUA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/bbcbef6d72fb6f714d26.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/vKfqE3j1VtI_GYgQDG6XpBuoyT0y7O7urEAz5_93FIsrWLY43p8ggQkUrmceP6pVnogixwKZJ2TR0eEVmob6Cg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/bf2e4b9ec6954f2d68eb.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/EJiLj8YmrRFw3ElJ0rE8kozfdDqVNKaMC_4FETYcuGQUw2cJ9ZrJ0apEc5A9agnrMix3hpz7uItsNwH_dQQX=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/d254e5db101f6300597a.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6748397500"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.ecffri.arrows&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-34",
          "code": "#034",
          "name": "Mahjong Clash: Win Real Cash",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "麻将牌与牌面",
          "values": {
            "form": 55,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "牌的厚度和圆角具有现实物件参照，印刷符号清晰；绿金配色、轮廓高光与UI式光效被强化。金额与支付宣传不计入。",
          "formReason": "牌的厚度和圆角具有现实物件参照，印刷符号清晰；绿金配色、轮廓高光与UI式光效被强化。金额与支付宣传不计入。",
          "imageNote": "iOS 商店图 · FoxData 镜像（US）。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/79/e7/3d/79e73d33-86f3-ab48-9301-2957d0604d54/1.png/720x0w.png",
              "width": 720,
              "height": 1558,
              "mime": "image/webp",
              "src": "assets/images/5ddc875c2462cef480cb.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/50/b0/5a/50b05a05-7321-d698-74a6-7c1eb20f7f8e/2.png/720x0w.png",
              "width": 720,
              "height": 1558,
              "mime": "image/webp",
              "src": "assets/images/71a1700d9cc4928e7f74.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/97/01/54/9701546a-89f4-be91-5285-d5b3a255a825/3.png/720x0w.png",
              "width": 720,
              "height": 1558,
              "mime": "image/webp",
              "src": "assets/images/c644c4b06b258dc04eab.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e1/c9/21/e1c921e6-24be-27ea-8367-989ac15315b5/4.png/720x0w.png",
              "width": 720,
              "height": 1558,
              "mime": "image/webp",
              "src": "assets/images/3200403365309854b1cd.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6760530627"
            },
            {
              "label": "参考图来源",
              "url": "https://foxdata.com/en/app-marketing-analytics/6760530627/as/US/mahjong-clash-win-real-cash/"
            }
          ]
        },
        {
          "key": "a-35",
          "code": "#035",
          "name": "Dice Dreams™",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "圆团状拟人角色",
          "values": {
            "form": 15,
            "expression": 50,
            "complexity": null,
            "era": null
          },
          "description": "角色主要由球团、短手脚与大眼组成，结构高度夸张；表面有连续三维光照，配色与材质洁净、糖果化。",
          "formReason": "角色主要由球团、短手脚与大眼组成，结构高度夸张；表面有连续三维光照，配色与材质洁净、糖果化。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/2R1GdlZ-ks6gHQjjte5Krdnqxmk6i_Bn8DCy18iY72X4gBwfT2BhwVhWtJ7RQ7bAVesMq5wx_OBv7iX5Pw3hfg=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/d968340423860b989fa2.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/nGxDBKERWswITWcGRAGuTgWVsdS6jyVZHHGfGaByaBc7cOz6zxA6QozgXrIGI2g8E3eP7zAgMLaYrLy5iR7pcew=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/08ad8b42152af60ffbdb.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/JuJytfFvfEf8HPYrlcbxvMXQ7Q3O0nmCvMnPeHN3fMUN3rSYjp1SM2Dn7EAg45m9nxiXgq738UyQtdD31PoD=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/881276946527a06dafa2.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1484468651"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.superplaystudios.dicedreams&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-36",
          "code": "#036",
          "name": "We Are Cooking",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "餐台食物与厨具",
          "values": {
            "form": 65,
            "expression": 45,
            "complexity": null,
            "era": null
          },
          "description": "餐具、灶具和食材具象程度较高，比例略为整齐化；连续阴影表现烹饪体积，纹理被整理成易辨的图标式细节。",
          "formReason": "餐具、灶具和食材具象程度较高，比例略为整齐化；连续阴影表现烹饪体积，纹理被整理成易辨的图标式细节。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/Gx1uwmy1r5CyE2V6ngpvTb7IWMZMP7h2TcICJKhco007C-xCXF1HIcA5tT0kLRnpshHXrxxID4j6sd4jCZuDKA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/73a2ce698b624ed0810c.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Nnyv6Kcujr7ubAmVHLGmqarrFl-3M3hFy6eFfOC2PfWbybRhR8QMynpLkYbRcEdcB_TBREiaqezGZ7PI89Q2=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/aa6da7e404606ebea29b.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/B9W8_olMUhZQSPbh6mUljc4Qky0TAJRnu2m7kBYs4q_AMUZ8LVPMqCqYK-48PASUDAUchSTTUVB8cUwhN_Xt4Qg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/dda5de9f5cfc402316f1.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6498920694"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.matryoshka.cooking.vibes&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-37",
          "code": "#037",
          "name": "Glow Fashion Idol",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "换装模特",
          "values": {
            "form": 75,
            "expression": 35,
            "complexity": null,
            "era": null
          },
          "description": "人体、面部与服装结构接近真实模特，身材和皮肤经过美化；布料褶皱、肤色与光影较自然，仍有理想化平滑处理。",
          "formReason": "人体、面部与服装结构接近真实模特，身材和皮肤经过美化；布料褶皱、肤色与光影较自然，仍有理想化平滑处理。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/V1vytOYaTOLtS0BEK157LS0ousnbkxx43h3T3X_wRwVC_Ryh59TJSYBVFWNw5HC4uc_V7U1QV6oApAJjemJiek0=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/67b9f38f7308d74ce073.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/LGEQye1HA_-FDD59LZ3DX6RBRxlL22l4iZp-GPOVnK9JuCRfqe1vLfCLfVzk04IsgULXWlNON-hOOxGC8-Z2=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/85efffc104a03ef940c3.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/U8uCKBaoz9xwwlF0JZoN_01Qp3Gk3n_jb9prkeWMGFNGpF1K-1Nu8DrRM_mN6tW_CCP9CZPME0B2ctQRnfjM=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/4c3d10554fa83a5468a1.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6446197181"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.crazylabs.fashion.squad&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-38",
          "code": "#038",
          "name": "Coin Master",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "拟人动物与转轮符号",
          "values": {
            "form": 25,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "动物大头短身，面部表情高度夸张；金属高光、发光和饱和配色强，但仍保留圆润三维体积。",
          "formReason": "动物大头短身，面部表情高度夸张；金属高光、发光和饱和配色强，但仍保留圆润三维体积。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/Si1HS4WdCWDsg_5PkC-2B2tTr1IoiXXkxhi1Oxmr_fRwoDmCLHILpnBoCDAMH8KKNEhmO02Go6VcCSuPyme4=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/ff4f2e72338ccec5a235.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/NGTnD-1-dDNkXbCCcLZPA__hUFnalmxyKKZyybEc3YO3x6mfZN1-etxUPi8SGRswsIiTW6iXc8SbNInwsD-S=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/69f2d607c33257726612.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/6bQZF2XzerCebJ7ab2MPn-qZBL3u9t5E-yCUZScTvfwhKgGhM1wk5RCN6xED43cKBVfqESUe7jZgyMmHoB6Vrw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/2baefc61783924f8751d.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id406889139"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.moonactive.coinmaster&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-39",
          "code": "#039",
          "name": "Match Factory!",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "可收集的三维小物件",
          "values": {
            "form": 45,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "食物和玩具轮廓保留识别特征，比例圆润且统一化；塑料感材质和简化明暗形成精致玩具表现。",
          "formReason": "食物和玩具轮廓保留识别特征，比例圆润且统一化；塑料感材质和简化明暗形成精致玩具表现。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/Inb_iWkRPbf8OpEKeu32rZrj2W_5W6hka8n-KTd7LeGSU-nmz9cIw8wKD0t0jZ4Z2wo_7hsRoR7TDJ2ktLfhQUw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/615f337284f05de356e4.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/lVmYvkVdpRORXX_6dN33x6SjrfrqR4aE_otlZyDMUheELXSeQNTODRXRjgF6URXbf6EZFj1tBHdubW5JQ8Bk=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/8c66fa5cfa30064a7520.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/U22WRC3MIzSTuzlJrWjzCyNdCPeIuYajdKt4NAB5aeymFFzqThT-W5FzVFXEn-qWrf3kgpS1QeCSJLZ_4LuJMQ4=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/2db417f0c5114a816d44.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6449094229"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=net.peakgames.match&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-40",
          "code": "#040",
          "name": "Royal Match",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "消除棋子",
          "values": {
            "form": 30,
            "expression": 65,
            "complexity": null,
            "era": null
          },
          "description": "皇冠、盾牌和水果等形状被压缩成统一棋子；高光与饱和色帮助区分，体积是经过概括的立体图标。",
          "formReason": "皇冠、盾牌和水果等形状被压缩成统一棋子；高光与饱和色帮助区分，体积是经过概括的立体图标。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/3DKrw93wnfUX3QR1diWf-Rf4lV8RPnZQKKC2UTwJjBN5pNK9geeRm-82zVljc8WH48xp90zjHmxEtaSO_L1V_Q=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/b61cbdfd2aa337c87f67.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/eEvKqfL4_0fHSBImq_tQwGReEacMiqZ2vd_SIa_L0W3Pb69_sI31u1u0fq5SLIp8THUz07GL8mJwRWakvDIt=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/94fa528a86a57fc4e896.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/_7cwj62R45aFAij07Hhrk-GogjsBwCotMxahAMhrzdjivO2NSdJZfirj8nLGd-R-ye_b9OVm1otWYSIWSlMxmg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/08202f8f7b84efde7edc.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1482155847"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.dreamgames.royalmatch&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-41",
          "code": "#041",
          "name": "Hole Stars: Puzzle Game",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "洞穴周围的玩具与小人",
          "values": {
            "form": 35,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "食物、人物和建筑均按玩具尺度概括；色相分组和光滑材质突出，阴影仍遵循简化三维关系。",
          "formReason": "食物、人物和建筑均按玩具尺度概括；色相分组和光滑材质突出，阴影仍遵循简化三维关系。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/rq8oTHhlGuRZMgvUVc4WymTqICp8xrTSDjghk1mAOYIwFoN0VeEU5NIiCfn-hPFaR6eflmhKxZsvuI8uVlgpl2Y=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/f3173e11e5f70f46cbfc.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/YFQi4aHDGHP2fbci4c5L0E73h2MfCqvpTD6r1sFtFe2WoN6oYJJxkaw4XQltObUe2DO_kd4PZwu2JlTzQP8B=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/44b29777dcf04f3c2d6a.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/geaxIVV3EGI0PtUvyPwFOcI2jH0yVHgUsaDInwrhh1ahB2OoRJUyiQZ6mWlR2QrThkkoCIUZ54FayppEtN6qQw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/cbc62179b4d89758a1d0.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6747028173"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.moonactive.holestars&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-42",
          "code": "#042",
          "name": "Cube Smash – Puzzle Game",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "体素积木造型",
          "values": {
            "form": 15,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "鱼与飞行器由规则立方体拼成，轮廓像素化；方块本身有连续明暗与厚度，因此不按纯二维像素的高Y处理。",
          "formReason": "鱼与飞行器由规则立方体拼成，轮廓像素化；方块本身有连续明暗与厚度，因此不按纯二维像素的高Y处理。",
          "imageNote": "iOS 商店图 · FoxData 镜像（VE）。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/05/29/40/052940a6-558a-d006-ce8b-b65326b7f688/1320x2868-2.jpg/460x0w.png",
              "width": 460,
              "height": 999,
              "mime": "image/webp",
              "src": "assets/images/85c37e96bdc4b83547b2.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4e/97/1d/4e971dd8-b62d-3a46-9405-e261bd06d640/1320x2868-4.jpg/460x0w.png",
              "width": 460,
              "height": 999,
              "mime": "image/webp",
              "src": "assets/images/ee3fab7117158d243ffd.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/db/a8/04/dba804e3-917a-5852-a6b6-8d3e6091d656/1320x2868-3.jpg/460x0w.png",
              "width": 460,
              "height": 999,
              "mime": "image/webp",
              "src": "assets/images/ea3ac4308ab72517b73b.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/df/3d/fd/df3dfd2c-c2a4-53f7-d595-ac9a8fd79f64/1320x2868-5.jpg/460x0w.png",
              "width": 460,
              "height": 999,
              "mime": "image/webp",
              "src": "assets/images/a0be04e6ddb669f03eeb.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6786206777"
            },
            {
              "label": "参考图来源",
              "url": "https://foxdata.com/en/app-marketing-analytics/6786206777/as/VE/cube-smash-puzzle-game/"
            }
          ]
        },
        {
          "key": "a-43",
          "code": "#043",
          "name": "Jigsawcard Solitaire Puzzle",
          "style": "合集/混合",
          "family": "合集/混合",
          "color": "#847754",
          "scope": "拼图卡面插画",
          "values": {
            "form": 70,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "可见建筑、花鸟等图像结构较具象，部分接近照片，部分偏绘画；统一点位的代表性有限，以卡面内容而非纸牌框评估。",
          "formReason": "可见建筑、花鸟等图像结构较具象，部分接近照片，部分偏绘画；统一点位的代表性有限，以卡面内容而非纸牌框评估。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±25，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/dKypL5Om6m76ug1yZ6sMWePkEKDS7rc1anz_7MDqX6yk-CmVfa1fzzJZa3mT7CCdBV1sLCRZgNK2Ul5_0BYWLQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/e8f08fac24b16d5fd643.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/s6SOQ6HBu_-tzMHInz9El7sc9jgEDGDaQdNehKCjCMktmxWO68W9QAqWVUmNizwF8_kZrmB_n0q1k5OALaWbTQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/82c60e03c4f0b4205047.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Py-25wzi9ztrq2M3GOFQ19SsT8D7C-XeIooafeZJe0SvISIemh-xVfNix-HDid2SMx9D-jfecOrDJIu4QfwsQw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/940c9ae085d76627e15d.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6754900673"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.oakever.jigsawcard&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-44",
          "code": "#044",
          "name": "Goods Puzzle: Sort Challenge™",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "货架商品",
          "values": {
            "form": 45,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "瓶罐、零食与玩具保留物种/包装轮廓，形状略胖、尺寸标准化；鲜艳色彩和绘制高光强化辨识。",
          "formReason": "瓶罐、零食与玩具保留物种/包装轮廓，形状略胖、尺寸标准化；鲜艳色彩和绘制高光强化辨识。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/97prtjb_320xPsin6Z0pKkiIW9oYnlki7GwhCJZc5VjWHvkyb7n3HKqLsg7qgbzB_hpmM1xrJqE4vAjN925sb0M=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/7d1334d79264acf419dd.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/qD6kHbuD1ZMLFJxHfQ_g7W0ibnMizVnjuEVlNb8HOk-vgugUrE0N8yTsheJ5y6WLytNbbuOKZlTnqfj88B3LMRE=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/9b38dc2940e404dd9f5b.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/ZatOysR0k2N_MQ6hjO5evZBbafj1LDaN9kJai1WIpwuM6pjuMnxFKZqHsgn-mCaXAi0aaS3Cg212Or9a-Hz2dQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/9bd5e1cb132174b27343.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6482849843"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.fc.goods.sort.matching.puzzle.triplemaster&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-45",
          "code": "#045",
          "name": "Make It Fit – Packing Puzzle",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "便当食物与容器",
          "values": {
            "form": 65,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "食材和餐盒的结构较具象，比例没有强烈变形；配色温暖，轮廓、纹理和阴影采用插画式整理。",
          "formReason": "食材和餐盒的结构较具象，比例没有强烈变形；配色温暖，轮廓、纹理和阴影采用插画式整理。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/DRQdk9vjMTQXuw5Hk5Mg8af673nZdUhgxwvkFNfURzx8grcnWw_9yMwywsGkATkPFllr3EVezOJLk6rCropI=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/108409a3c433514ee761.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Geqx9KCPgMkkTok7jzW936h6EjfjwTR10TZtfIVBxr3ece39qCnBdy7kL0kKnxQ9E_j3Iuu_etG-0lx6pHBn=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/fbd85b887985f307aa2d.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/PipwWwTEHuoO5ZsayBEa79sppaEnfPSEssweHPY3cwdsUzmLPQhE_gqKa4dspgQ7J-RWbKXIMN7zqul5MGyezA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/3404e9503e0cf5ee57ec.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6796574369"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.make.it.fit.packingpuzzle&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-46",
          "code": "#046",
          "name": "Brawl Stars",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "商店展示的英雄角色",
          "values": {
            "form": 25,
            "expression": 65,
            "complexity": null,
            "era": null
          },
          "description": "头身与肢体块面大胆夸张，服装轮廓高度图形化；高饱和色、简化明暗和统一表面形成鲜明辨识。此次图为角色展示。",
          "formReason": "头身与肢体块面大胆夸张，服装轮廓高度图形化；高饱和色、简化明暗和统一表面形成鲜明辨识。此次图为角色展示。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/wcQjY9Ga0gt2hs6c68-dehkeEPbG99pa9InPN2_2T6Tj0cdzUvslvjsHEnNHRgAeQSzImVueMvRKl6Or5tWkPA=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/5b07afd8a489db1d7f85.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Hzq-rp_7FogcOBeH8iLI0dnUSr4abKO0nRX_7AOiYiDUAZVvmvxcDjkRioYE3jLxE4fhrhIwkpWzHp5lK1c85wU=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/a21946209ad74e902d0f.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1229016807"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-47",
          "code": "#047",
          "name": "Screwdom",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "螺丝玩具与拼装模型",
          "values": {
            "form": 35,
            "expression": 50,
            "complexity": null,
            "era": null
          },
          "description": "机器人、房屋被处理成圆润的模块玩具；塑料、金属的简化反射和阴影较可信，Y低于平涂图案。",
          "formReason": "机器人、房屋被处理成圆润的模块玩具；塑料、金属的简化反射和阴影较可信，Y低于平涂图案。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/IwIuIboxyJIgsghNtAsFwLLSpAI0zAORTzsuPFW8u0VmfXlCXxb-wToOtVRCikT8kuXBmiNwII6obVyEgqnY3A=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/e6c1dc5815052ee7b6ca.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/4lx2NTIdJia09Etq3Zzq3ejjTuDbzGOL-yz1hEPeMvRKRE-tANUW6Lkef5tnD4qgbv26eHLE47ul6Srgro3Ufgo=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/dcf7c67cae2aa4c44794.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/oMDr1rpeCS-W5hIni4JiYaObUd4mkos5otEp6NrTdQtl_ZROV0Dn9EtSyZ7oxq36xkNQcYOd9KM0YNNL-eDtfkY=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/e644ca5a16ec8a524c94.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6740043080"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.ig.screwdom&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-48",
          "code": "#048",
          "name": "Find Hidden Objects – Spot It!",
          "style": "场景",
          "family": "场景",
          "color": "#4c6dba",
          "scope": "室内寻物插画",
          "values": {
            "form": 70,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "家具、器皿和人物保留可辨现实结构，透视较完整；边缘与阴影经过手绘整理，细节多不等于更写实或更风格化。",
          "formReason": "家具、器皿和人物保留可辨现实结构，透视较完整；边缘与阴影经过手绘整理，细节多不等于更写实或更风格化。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/uqi6x_JGNSW7S703zYOoamMaSIdZQs5JDmxeCMxpDJnloL7Lm5WIc9Pr_ovhGcyuE2v8MWVYBi7sW-UJuh08=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/e94a622243742579b4da.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/q0dQXmlXH6MMYVPvoHwMBZFPa0Mw-oZBVJe3CeFlQE6aFqf8v_8LfPQXu25D1AUa0Fn48k3DShOXI4L7mmssJA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/e967b20e2895812e73af.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/VzJKfxp-bEji0kJ0ef8zd57VB5iyH-PYWDR4q1QXr8QQQCEZS7sos2KFbaYJOjTGZYOzEEWJYiNu6_y_h77ZCN0=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/14bebb3b52d324947aee.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6474133872"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.yolo.hiddenobjects&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-49",
          "code": "#049",
          "name": "Tile Explorer: Tiles Clear!",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "方牌上的水果图标",
          "values": {
            "form": 30,
            "expression": 65,
            "complexity": null,
            "era": null
          },
          "description": "水果、花朵被概括成小图标，统一承载于圆角方牌；轮廓色块与绘制高光主导，背景景观不参与评分。",
          "formReason": "水果、花朵被概括成小图标，统一承载于圆角方牌；轮廓色块与绘制高光主导，背景景观不参与评分。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/466hpYrzeVWrblJOfLzwC5L2dc45L40GO44vH_8A_vJUowWFb9aUpuc9-xUys0g6RzkNoE0m2B1SbOZO14MROg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/5206950403324333dac2.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/3CZKGkJJAH5A7Zs7795HDaZ_7ePpamCJYe32gBa7B_Urk1w_xgydKB7g_tdbPMthCpd7nnRJevmTrPScE_D6CA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/09d3533dfa20d8261804.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/MGHLxWYmuVH3TcBqWBnOpRxzssXNF4K2viOgi6Q1vTx-q88ueb_uYNL7ajCH-1XsGusvRma4Xh525SmA2AdW=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/ca9cebd3f3c3422fad5c.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6498883328"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.oakever.tiletrip&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-50",
          "code": "#050",
          "name": "Family Farm Merge",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "农场人物与动物",
          "values": {
            "form": 35,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "大眼、圆脸、短小体态形成亲和卡通形体；柔和光照配光滑表面与明亮配色。",
          "formReason": "大眼、圆脸、短小体态形成亲和卡通形体；柔和光照配光滑表面与明亮配色。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/4w9r1_12Wt1D5KlKFX_qGlp0fNSI24WxjJ5TqHWUHAJiGDHIPoy67At0yDYBIU9hv0JlaKllBX4emNDlxGIBkw=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/3ca18f053f756d78d752.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/xZY66JtAFONsleIRyVGr1ovuAQEuqQOPQEJurVU7F5zGgpmvM8hQzvm6JcAkABn56V-TFSuCqP-VgrMUspFJbw=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/4eb542d93a2952bc03f1.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Dm4GeR-L1cWf_wPuAyEao_09672EMEZo6NEeWXCvpYjL8PxmdYrHcTMJnmJFLNopPf6RsyPcqargkbyz8A7vfu4=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/8aea8805464ba2d7f406.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6760998152"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.roomperfect.global&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-51",
          "code": "#051",
          "name": "Hole.io – Original Hole Game",
          "style": "场景",
          "family": "场景",
          "color": "#4c6dba",
          "scope": "可吞噬的城市物件",
          "values": {
            "form": 50,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "建筑与车辆具象但简化、玩具化，街区比例被压缩；有三维投影和简化材质，皮肤主题存在差异。",
          "formReason": "建筑与车辆具象但简化、玩具化，街区比例被压缩；有三维投影和简化材质，皮肤主题存在差异。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/gV9VY5kIOXfyICIA74XJbYyaxEGgxaZrMXyLdThnkRHGtHBXc8ooEYLAH-B5oIvLDETpjVP0e5DVdloDotXi0A=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/71f47670316ffd6e4eaa.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/WyE8FWBSYYOYtv7W_K6He1qUjPBG5kZGdXV1NYve9Z19mU6a8Z4it5qgGbT60TuDfPnU--NHujwk6IUbvKcn=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/c7f463042e241041075f.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/you_YfhnnJrqBKl0C-OYmNMNFU0MiUUA1ztJXxHDm7PtQwK4soVn8VNhZsIPHvRfs8TmB3pWfga2SXTrK6RPSA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/ff6d3c109c422e2bf677.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1389111413"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=io.voodoo.holeio&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-52",
          "code": "#052",
          "name": "Jewel Coloring",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "珠宝拼色图案",
          "values": {
            "form": 20,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "轮廓由珠粒或像素网格重构；晶面与珠粒有体积，图案仍依赖离散色块，不能因使用珠粒直接判为自然主义。",
          "formReason": "轮廓由珠粒或像素网格重构；晶面与珠粒有体积，图案仍依赖离散色块，不能因使用珠粒直接判为自然主义。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/_M4RCceuZ0GwSmBXm24WlmoxvHvYTQIkAhjEg9x5pUJiT8q3Ck2HxRrnheiOWuDqcJZ1C_zt2wvrqp7zYxPolw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/71f16bffc8416c1b22ad.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/b2CjIRW5DwyiPo4RIm1CzxDCx1grPRlcsNbObsPlBigweLbwhsB5jL-G0k1yDjWjzg_H6MHOuBITTLyXmsn_gQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/39193688a89f0d5f7426.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/519ApX1x1tAqyzufkFSx2yT2yWC26uPgDwieBzUdsDaWZyfpQQqSU8SA920JUTtNzQJOm0j3frrQw7r2Ais_QzU=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/2803f59ad67a11ce679e.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6759081967"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=color.number.paint.pixle.art.sort.jigsaw&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-53",
          "code": "#053",
          "name": "FanDuel Casino – Real Money",
          "style": "合集/混合",
          "family": "合集/混合",
          "color": "#847754",
          "scope": "所见老虎机主题画面",
          "values": {
            "form": 40,
            "expression": 70,
            "complexity": null,
            "era": null
          },
          "description": "该App容纳多种风格，所见转轮、卡通吉祥物和金属符号呈图标化形体；强金紫配色和发光强调舞台感。真人桌台等内容不包含在此点。",
          "formReason": "该App容纳多种风格，所见转轮、卡通吉祥物和金属符号呈图标化形体；强金紫配色和发光强调舞台感。真人桌台等内容不包含在此点。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±25，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/Z2WNXGNQxgn-x14_IbUFX6nrxzSdfLBv2JMo947OrVSqnvbXxJbftV4pad7rmDLXn2_1kJheW_XCLKXksDzO3p4=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/826d8bb12359b269a39b.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/qhi-EX7vYdiRFC1cpYCB0Ns_tWgo_UNbwtg1qMAryB5cidOMUA6Gi7TqzExSHZIpNmUzjL5fLoJi8K-glAzWIw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/530f91ba169ca8dc426f.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/61q2HdtOYKpn8PJFkDK7ZOLt6xTQqf2g8slTZ8S5Rh9ksKZYJymufaUgXkcydf9gw-zEHIU1DbTIMOImG8H6=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/609549747b69543de00b.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/qhi-EX7vYdiRFC1cpYCB0Ns_tWgo_UNbwtg1qMAryB5cidOMUA6Gi7TqzExSHZIpNmUzjL5fLoJi8K-glAzWIw=w2560-h1440-rw",
              "width": 810,
              "height": 1440,
              "mime": "image/webp",
              "src": "assets/images/5f64461de91145e6902a.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1506229470"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.fanduel.casino&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-54",
          "code": "#054",
          "name": "Brain Puzzle 2: Logic Twist",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "关卡故事人物",
          "values": {
            "form": 55,
            "expression": 90,
            "complexity": null,
            "era": null
          },
          "description": "人物比例较具象，脸部与表情漫画化，关卡间差异较大；线稿、平涂与简化硬边阴影非常明显。",
          "formReason": "人物比例较具象，脸部与表情漫画化，关卡间差异较大；线稿、平涂与简化硬边阴影非常明显。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/vuqV3Dxgy41SGVjOmPM_NFyDfO9fcWqplBVoxA6qZAtFuEgAZiTEwSB-_I5WCfqQyzUWhXtXZhqTaXJsAw0D-os=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/a2baa2055a254f6f5a85.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/IjnlCeeGJ8GX-Wn_1eiJ4O9uXj7P2r4hQj7P8cVAQGfJo5TV_NjvzO4-wvrsOPtm69PZyglSc5khbGi_UI0a1Q=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/2657ab32591c7c4fb4af.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/REX56DF-_cL4jm_2Tc6zpVWf6rY6ogrPwwsIyPz3NvWxnfAlLSbB1Hq72LT2Lrhu5qU24ibm14bQrSugDHm2mA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/bbea4b8c350e7dfe7686.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6747063674"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.brain.logic.joygame&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-55",
          "code": "#055",
          "name": "Color Block: Combo Blast",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "彩色方块棋盘",
          "values": {
            "form": 10,
            "expression": 75,
            "complexity": null,
            "era": null
          },
          "description": "轮廓是抽象拼合单元，缺少自然对象结构；倒角高光产生浅体积，但整体仍由功能性色块构成。",
          "formReason": "轮廓是抽象拼合单元，缺少自然对象结构；倒角高光产生浅体积，但整体仍由功能性色块构成。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/Yh9LcMVHcxBzZSYdUtZHzroy-EJ5qotfvyLYPYb6tj4PcIRtzkPxJJZ-Np09aSkU1BFWQeNs2UPZ2qI9j0bIxw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/a64246a67361f61c7e42.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/gwh-xZ0KAhCFkbduDpj2o_lmTp7RrB7s8g5zfNr_C7EdSzsgl5JgMrHLxYBvtqBh4H27poYk644KtkTUS8azs9g=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/9136e4db9e25f1eda673.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/yiYfjbhIu56Ml1VxPUtHCDq3kfCEdWkJFWFz9DZMjkTZrIYHtTSP98K7WtmDVcKoI-T_B9eEs6i6gIJShV-e1Q=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/cd67d120aff59935f912.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6478063606"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.puzzlegames.puzzlebrickslegend&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-56",
          "code": "#056",
          "name": "Toon Blast",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "商店可见的消除方块",
          "values": {
            "form": 20,
            "expression": 65,
            "complexity": null,
            "era": null
          },
          "description": "方块形体高度概括，规则网格主导；饱和色与浮雕式高光区分棋子。本点不以未展示的动物主角代替所见棋盘。",
          "formReason": "方块形体高度概括，规则网格主导；饱和色与浮雕式高光区分棋子。本点不以未展示的动物主角代替所见棋盘。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/MTquim-dT2HDAwxqzk7i2fqlzAt9QpwCgPZhhz2Rc8bc99AdIx7twtHSRWTvuNTo6htC6Xgdva3OU3-PJ4-WVQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/26df089a4551eb59af7f.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/XUShi312Uva64M6TlmrgouAULKTCqaajr6cMzkQByUqqwNS0Apx8OiYEx7sIxSiFK_uTr4bisuUSSTfWvUGueNU=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/93c9b9262c2eb23e091c.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/-27S5k4d6GGZYSJudemCX1B5n8w6ZbKCCkYo2uCeMwGozggn9mcsAybu1zjsKgzgs1YXz2gXQzb8snYjuoqL1Lw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/414f3f19e3a14cd13ec8.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1176027022"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=net.peakgames.toonblast&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-57",
          "code": "#057",
          "name": "Bulldozer Master: Crush & Mine",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "工程机械与岩石",
          "values": {
            "form": 75,
            "expression": 35,
            "complexity": null,
            "era": null
          },
          "description": "履带、钻头和机械结构保留现实比例，岩石有不规则破面；较自然的金属、尘土与阴影，模型细节仍有简化。",
          "formReason": "履带、钻头和机械结构保留现实比例，岩石有不规则破面；较自然的金属、尘土与阴影，模型细节仍有简化。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/DVh5WxJt9CZm99_VUircjnpuMCQmqBLAepG8ex3VGVfxVbTdoUWKpvAy6SHzFPr2DJy-XwJQCeb-G5CM_TqmEA=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/fb7d7b29bea75003710a.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/OBdACbbbemayX0JnvIDXa4lSC9WtJwBoCokxknFt9J9kZ88Wj7-YPqxx0DOd7JIT1HHDIcQeEpNTRabOdPee=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/cd12ae04111a3bbc3eb4.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/xCZeHKRnxZQKtOo5Gkl7u_ktYZiVsYZ6iZrqrhb1b03KSX8Bm2MfOlDuGqNn_WjxZzfjXOiDdHUzhd0wOe5AOg=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/af3ee4fdff5371858d23.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6747710694"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=io.supercent.bulldozermasters&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-58",
          "code": "#058",
          "name": "Clash of Critters",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "怪物收集角色",
          "values": {
            "form": 15,
            "expression": 90,
            "complexity": null,
            "era": null
          },
          "description": "怪物被压缩为大头、短肢、夸张器官的图形轮廓；粗轮廓线、硬边阴影和亮色块表现强烈。",
          "formReason": "怪物被压缩为大头、短肢、夸张器官的图形轮廓；粗轮廓线、硬边阴影和亮色块表现强烈。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/sSISJdmoUAT5CinFeQJOR1TGJOI905OuEzDiJH_YljwACqIrI8Qx3XCGLnS2Hk9Jkzljn_lzZCjcoPa0aw87=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/86e1331721865c9228c8.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/XTUeb2SWoDd4wQ869k1WfmMqves_svKHMmyN2O5628mRpeVm6T2wxhev09nySoHXnj1yUYHX8uUhC92gt6pT=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/ff6c9145f56f6b6943a0.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/FNKII39HqVM_acYL8_dzuG_Y51MQ2mXG_NQBiC7jaZMmd7qL5wm0oVcJhtwLxInEGk9TA-7v6QJfKiW2mjaipw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/b5b5339ac70bd8a89bdc.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6741567125"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.farlightgames.pgame.gp&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-59",
          "code": "#059",
          "name": "Jackpot Go: Slots Casino",
          "style": "合集/混合",
          "family": "合集/混合",
          "color": "#847754",
          "scope": "老虎机转轮与主题符号",
          "values": {
            "form": 35,
            "expression": 75,
            "complexity": null,
            "era": null
          },
          "description": "物件与主题角色主要作为图标符号，形体有较大跨度；金紫配色、亮边和发光使表现强度较高。仅代表所见主题。",
          "formReason": "物件与主题角色主要作为图标符号，形体有较大跨度；金紫配色、亮边和发光使表现强度较高。仅代表所见主题。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±25，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/OYFqJnsgqoHttu4sM1nEFHdkLvFWaVxo8j90hojyaMKgEvmE5fMU54ImJJl8x5sigmTFzGcsy-XD7oEv0C2rUqQ=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/65a8e26e1e0cae99432f.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/bhy3-UnieGPteNXZZgaRPmj3oEdXVqN9AlRDRewREDbpw--BPcRvp--5IzLK9-C231zas4S-xFswDkFdQbH9=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/4fb19ee286e8194ffb97.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/LixKCHQQyABakuXiZ6-oKvNgFeFRpHzFZmXNx8y4p9WGXhkBzdToGxouxAOppNGx39etan5G7OII-OyYj7qu6w=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/6f3aecf9ecd5cd72affa.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6739792763"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.jackpot.android&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-60",
          "code": "#060",
          "name": "Solar Smash",
          "style": "场景",
          "family": "场景",
          "color": "#4c6dba",
          "scope": "行星表面与太空光照",
          "values": {
            "form": 90,
            "expression": 35,
            "complexity": null,
            "era": null
          },
          "description": "行星球体和地表纹理结构较接近自然观察；受光、阴影和大气层有连续变化，爆炸被戏剧化。奇幻破坏能力不降低形体写实分。",
          "formReason": "行星球体和地表纹理结构较接近自然观察；受光、阴影和大气层有连续变化，爆炸被戏剧化。奇幻破坏能力不降低形体写实分。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/oOXRBVwGGwUSpTGhUxUJZIVnKbHVLVU9qF49_xnS25n1NcJvXhh9d_DSH2ztTv2W0vqYk966iTZ5IWSl2SdjSA=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/6bce3296f9956e9a356c.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/GAGH-7F-EqAW4RW9br7yM2yarcafl-M-yrOpCehmH6mlProoce0VB_VAF8mnmWZCl86n3BT6U1K9IFh3p2mCgw=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/3584a2a1e78eba64f257.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/4o03cydmg-Vth1JoU_PMuIxNUN9_WgsrHuA2l_MwkeASIzaYm-b2vzQTT5ID1b_XQzfJBZePe7dU3Zm88GXNFg=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/c5d84534403d53775ea8.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1495723103"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.paradyme.solarsmash&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-61",
          "code": "#061",
          "name": "Jam Bus:Sandfall",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "沙粒图案与车辆棋子",
          "values": {
            "form": 20,
            "expression": 75,
            "complexity": null,
            "era": null
          },
          "description": "图案由像素状颗粒组成，车辆压缩为色彩模块；色阶与棋子编码主导，少量三维高光提供厚度。",
          "formReason": "图案由像素状颗粒组成，车辆压缩为色彩模块；色阶与棋子编码主导，少量三维高光提供厚度。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/ySlhs5k7eGnLsQ7el-aNZbf813Q5JHAJnIGgclYfwE8xLuMjVrChpvvF34qKERQTSor1soxee80dwvhyTLeSeQ8=w526-h296-rw",
              "width": 130,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/dce8a693968155e54705.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/m9cYdb_iKFZQKb-5AWOEXXKwohrtcaEl7Z0nFC31bsyQdVBo2gGrbgNNb3uto_ftCp_qgIkyUrc1PChYwQ75DQ=w526-h296-rw",
              "width": 130,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/5a268d9511e6617fadbd.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/NGMrXO2-QgCuSw7yVM9zUWL0C2MYDOJsPnOZ4_7fHaZ5XqzpipxvoCyLfC8KM3_xLKyWk_ddxnWc7IxJLhixZQ=w526-h296-rw",
              "width": 130,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/29a4f83ac8525332c784.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6797530374"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=bus.sand.fall.jam.loop.traffic.flow&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-62",
          "code": "#062",
          "name": "Geometry Dash Lite",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "几何角色与障碍",
          "values": {
            "form": 0,
            "expression": 95,
            "complexity": null,
            "era": null
          },
          "description": "角色、尖刺、轨道均是高度抽象图形；霓虹配色、平面块面和描边是主要表现手段。",
          "formReason": "角色、尖刺、轨道均是高度抽象图形；霓虹配色、平面块面和描边是主要表现手段。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±5，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/bX2Wz4jdga0sVrzi4Fil27DHqPl9mcyqtpvRnNkn0vDJbqF8P6sxNkduUXH0SzXm1TtwAaEiig7fBjZsWq1p=w526-h296-rw",
              "width": 444,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/f75fc33a1d9808b27914.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/NCZrWzgzwXib8qO-rH_75W3SBEgrQs2k8nLmL6-2qz3OaTUoyMavsFYKTxrv_10rb3k-9Beaam6pR-YcZ3YUlg=w526-h296-rw",
              "width": 444,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/d85601d6376edfa7a0a2.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Obb-8opSdMNfCZdf8YANmePY_dq10s-NISkvDQJot1Mz69q_bd2f8BCsKdxE3NlnPhSf5vhYRb4pTDRTbwS6qQ=w526-h296-rw",
              "width": 444,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/f5d922187b2c89bf1358.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id698255242"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.robtopx.geometryjumplite&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-63",
          "code": "#063",
          "name": "Pokémon TCG Pocket",
          "style": "合集/混合",
          "family": "合集/混合",
          "color": "#847754",
          "scope": "所展示卡面的宝可梦",
          "values": {
            "form": 35,
            "expression": 80,
            "complexity": null,
            "era": null
          },
          "description": "生物形体明显卡通化，但卡面涵盖平涂、绘画和立体等多种媒介；代表点只作样本中心，不能代表全部卡牌画师与稀有度。",
          "formReason": "生物形体明显卡通化，但卡面涵盖平涂、绘画和立体等多种媒介；代表点只作样本中心，不能代表全部卡牌画师与稀有度。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±25，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/8a96l9MXMhlMWlA3DWZc95r6OR4HQ72x0TfG-fvwuRIUllw7_PhqjaH2D7Gui0CE7iJW5f7f1LgBvVKbR-3V9g=w526-h296-rw",
              "width": 136,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/bb5239fa867153f5e8c0.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/3095dF_hgrFj9yNWv0dJFrq7YaH7QYhp4CG7_hl2l6UVyCiTfXw5TMGuXgvCK-3Hgmj86vt1OLgP8MxOMFs85Q=w526-h296-rw",
              "width": 136,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/2fbd9011aebb5d0afd9e.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/qu6rNAdHsxykb5QQfn-F9iaZCShG5gKn_iUHYwJP_Xp1jyNx0dWgrZGHjbOSey4bpe0Zfk8aPtHoKHNlLEVzkA=w526-h296-rw",
              "width": 136,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/0aa60348fcf59795a8e2.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6479970832"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=jp.pokemon.pokemontcgp&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-64",
          "code": "#064",
          "name": "Satisfying Clean ASMR",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "被清洁的器物表面",
          "values": {
            "form": 75,
            "expression": 35,
            "complexity": null,
            "era": null
          },
          "description": "地毯、卫生间物件与装饰品结构较具象；污渍、金属反射和水流有较强材料感，装饰玩偶的局部形体更卡通。",
          "formReason": "地毯、卫生间物件与装饰品结构较具象；污渍、金属反射和水流有较强材料感，装饰玩偶的局部形体更卡通。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±20，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/5Es7YVX_yWgVRA559EtoxY66ht9UIQ9QjdwCpfw4i1HZ-pm3tdlApzKBoJZSUkpw4H-xlCE7Qp47yg3w-HTaUp4=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/3068f32e2f4af56a9464.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/9OGtdUeAiS8ah4SnugjRVwIpVHJzNthrqH6CPRqk8wl4UrWHFUTfXfyYdR8DRmAbaMf7Ff8K4CiMEX3k6NSxAw=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/e5d55f391b789867e36a.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6767180267"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.dongz.satisclean&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-65",
          "code": "#065",
          "name": "Maze Out! – Tap Puzzle",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "箭头路径与迷宫",
          "values": {
            "form": 0,
            "expression": 95,
            "complexity": null,
            "era": null
          },
          "description": "主要形体完全由路径与箭头组成；黑白平面关系占主导，少量彩色机关不改变整体表达。",
          "formReason": "主要形体完全由路径与箭头组成；黑白平面关系占主导，少量彩色机关不改变整体表达。",
          "imageNote": "iOS 商店图 · FoxData 镜像（US）。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±5，不是统计置信区间。",
          "images": [
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/5f/52/d2/5f52d2fc-3293-1a19-1adf-4f7cd9d7648e/Market_1_2868x1320.png/460x0w.png",
              "width": 460,
              "height": 999,
              "mime": "image/webp",
              "src": "assets/images/9d5562eddaf7de723870.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/12/c3/77/12c37724-5ed7-22f7-02b4-cd796e963a58/Market_2_2868x1320.png/460x0w.png",
              "width": 460,
              "height": 999,
              "mime": "image/webp",
              "src": "assets/images/248bbc1086009838c609.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/56/77/2c/56772c7e-546f-146d-d583-ba1ed80ca6de/Market_3_2868x1320.png/460x0w.png",
              "width": 460,
              "height": 999,
              "mime": "image/webp",
              "src": "assets/images/7fe2163963ab0b72e48a.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/08/3f/30/083f3073-18da-ce21-1c67-5b7eb5ea708e/Market_4_2868x1320.png/460x0w.png",
              "width": 460,
              "height": 999,
              "mime": "image/webp",
              "src": "assets/images/d48a2d0b50134d7372d1.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6762192889"
            },
            {
              "label": "参考图来源",
              "url": "https://foxdata.com/en/app-marketing-analytics/6762192889/as/US/arrow-jam-tap-puzzle/"
            }
          ]
        },
        {
          "key": "a-66",
          "code": "#066",
          "name": "Color Slide – Hexa Puzzle",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "六边形堆叠棋子",
          "values": {
            "form": 10,
            "expression": 70,
            "complexity": null,
            "era": null
          },
          "description": "六边形为抽象几何模块；厚度与渐变可辨，但高饱和色相和统一光滑表面明显经过主观组织。",
          "formReason": "六边形为抽象几何模块；厚度与渐变可辨，但高饱和色相和统一光滑表面明显经过主观组织。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/gksSt0fCPK4Xo0Y7juDJsiSJyqw7pvX1I0Iw5SoGrf5DuGbUkpIBks7K0zSxGyJzuMYxN_RVuhrVxRymM_16=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/21b8932afb2e4a4d0a77.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/27am-dpMtqgb9oLK-BZoKdeKkDczqGpNXx7lCsrF6edEUb--mpNX_I1sx2zL7hZnhK0XsJkGWhm4jW5bGct0Z74=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/9c2e51b82041c4cc40b2.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6590876141"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.awesome.puzzlehexasort&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-67",
          "code": "#067",
          "name": "Bus Crowd – Traffic Jam",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "车辆与乘客棋子",
          "values": {
            "form": 40,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "车辆紧凑圆润，乘客高度概括；色彩承担分组信息，立体阴影与玩具材质仍清楚。",
          "formReason": "车辆紧凑圆润，乘客高度概括；色彩承担分组信息，立体阴影与玩具材质仍清楚。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/A29EcWKHB8CmVLvzt_BOeZdkTddSxu26QkS8F2sQoP1ZmnyJgjLheAgrp3sW2-P4vtMJmjYT6tPGU0CkHPm6qYQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/0299e50dea618a7891c3.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/o8CoDTcrakz_oSk3S8DSLiIoey6aCG5GJudk3Ltp13mL1rnX_KIGhR6wMI9qQtDWrdIPr66J0cX9MAzecGxXQZQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/dc383eafa81d55b0e6d4.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/-eiwBb0D_-AlLCIsJH0JiTXLD2c_d8olaGYKe560uY9d_o9-C0l0ihIht2VW68uSpxjBnIX1kQXsjOP-r8Jmmw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/1fc7a0eb97dc66d6444e.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6754059516"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=busflow.traffic.puzzle&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-68",
          "code": "#068",
          "name": "Offline Games – No Wifi Games",
          "style": "合集/混合",
          "family": "合集/混合",
          "color": "#847754",
          "scope": "所示迷宫及小游戏棋盘",
          "values": {
            "form": 10,
            "expression": 85,
            "complexity": null,
            "era": null
          },
          "description": "可见子游戏多用几何方格和简化物件；平面色块与浅体积并存。合集模式很多，位置不代表每一个子游戏。",
          "formReason": "可见子游戏多用几何方格和简化物件；平面色块与浅体积并存。合集模式很多，位置不代表每一个子游戏。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±25，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/KX7qqcvONKSBX61oHf9f6seBq_tIqkDmzmRHdQb_WsZTk5AiBGFx5SwoSpcs4LbeZVVFWytUno08Cws6bLU-Pw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/b747b28b15e1975f693a.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/7wumX1DOvEFnqWxYIvohfsfFg05rlYeHigRw0gIz8qSkyFfnaDj9jUifvgZ_osyej1KmmWvqs6ttzYb_dSFb0B4=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/c7bd9d24c5e296995c78.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Z64PiwOzqvVWWdAgMXH83uxGAb0MKpgo7K4aGN5zT15u6jZy2JllP2WFm1wwH-mRKJ5HpKCstsih9C0iLCt7=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/7239b155a87d6eef542b.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6448104157"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.JindoBlu.OfflineGames&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-69",
          "code": "#069",
          "name": "Cutie Sort – Magic Color Fever",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "猫与拟人小动物棋子",
          "values": {
            "form": 15,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "圆头、大眼、小身躯与重复造型明显卡通化；连续渐变配糖果色，高光被增强，几乎没有自然毛发细节。",
          "formReason": "圆头、大眼、小身躯与重复造型明显卡通化；连续渐变配糖果色，高光被增强，几乎没有自然毛发细节。",
          "imageNote": "iOS 商店图 · FoxData 镜像（US）。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f5/05/72/f5057217-1726-76cd-aa40-f0ac0e562d5d/ab_18376_1793779237620.png/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/d823aace5d782149b628.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ec/31/d4/ec31d438-04dd-c7d9-3fbc-3a69f6a1fd60/ab_18377_1793779244201.png/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/44ac4a49b23ff7eb2875.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/c0/6a/4e/c06a4e16-8421-a28e-c50b-fe492d083631/ab_18378_1793779250618.png/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/57674967ae6bbfdc9ed4.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/40/96/80/409680e9-0bf0-fff5-32a5-171af79d23f4/ab_18379_1793779256474.png/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/d8d778d3c29a48b14458.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6796547048"
            },
            {
              "label": "参考图来源",
              "url": "https://foxdata.com/en/app-marketing-analytics/6796547048/as/US/cutie-sort-magic-color-fever/"
            }
          ]
        },
        {
          "key": "a-70",
          "code": "#070",
          "name": "Goods Puzzle: 3D Sorting Games",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "货架包装与食物",
          "values": {
            "form": 45,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "商品有现实轮廓参照，但尺寸、比例与复杂结构被整理成易辨模块；色彩饱和，明暗柔和而统一。",
          "formReason": "商品有现实轮廓参照，但尺寸、比例与复杂结构被整理成易辨模块；色彩饱和，明暗柔和而统一。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/5-Y8dngKRYFkwA2iHKmaqNHEpyEPYFwS1Cpyvr_LmwYwddtHjNLEtxxPRSL8vSYR-6qBF_CjgnS7NS13ETxLtuQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/02a0c965128d5c54ee98.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/ZOOv7OswcHnvKxOABqJ0y2ugsWvK9WZ4JZTegu8EbEU8t3xZPPwHT3rH7n0oElZqHBGoFDCdTgQKl0fPmJz84T0=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/63e426906976bff51f99.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/skChL0gyfcOsz_wJkRU4uLKqjOWIALP1fFFuTVuJ0Vgo7zp6h4GB_2QuZv_tO4t7me4MSiwv4NS80gvKQTyY=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/c3be9e88e1f19a7a7505.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6499306806"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=sorting.games.goods.sort.triple.match3d.puzzle.stuff&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-71",
          "code": "#071",
          "name": "Treasure Masters",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "球状怪物",
          "values": {
            "form": 25,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "独眼、圆团身体和巨大五官是主要形体语言；表面有渐变、裂纹或毛绒感，结合强烈的色光。",
          "formReason": "独眼、圆团身体和巨大五官是主要形体语言；表面有渐变、裂纹或毛绒感，结合强烈的色光。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/6DjBVPuBgLoAmZtNMGRt0qS9VA6D8wOwgonqZrKDA5YhOHHZNBCKq5UsvHVU-GzqE9bQD81BUXPdUJoO88E-VQY=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/341dea36f83453d2ff2c.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/1OxqMxGCkA9WRQLBRNMi8N2Ut4tqeE-42zeRfdVUSaylNQsFVtzJI-nkyqvmtzXNeH1XXRhfSi4JEeeJ5bPg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/628bda307d59b71053b5.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/BTm8sXjaiWiyEr2f2bEXtQ1yQ_oJSfXcS3sBWxvUkQT7xWSSlonyoUZ70LzBXw2YZJD0fRWf0-ReNprGGN8Ga20=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/8b035ed350405b599019.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6444407009"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.gimica.treasuremaster&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-72",
          "code": "#072",
          "name": "Yarn Fever! Unravel Puzzle",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "针织玩偶与房屋",
          "values": {
            "form": 25,
            "expression": 35,
            "complexity": null,
            "era": null
          },
          "description": "熊与房屋是夸张的工艺玩偶比例；线股、织纹和柔和阴影具有可信的针织材料感，因此可落在偏自然主义表现区域。",
          "formReason": "熊与房屋是夸张的工艺玩偶比例；线股、织纹和柔和阴影具有可信的针织材料感，因此可落在偏自然主义表现区域。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/GFLMkXLRi9pZAzFE1ZZlO5KfbJUA2yhTER-ZD6OJODVKSoJ_HQC3lNR6oSsMJHdTXQT98Hnc6WgA883b-Atee-s=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/f77908ea16949a0b5799.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/z6RCdHPBB7Ubsnsq2FGepfpLUu40KVCghbUiBn4sVU5efGzfwfS693V2qGNH0AMDph88-VWIJR7pHS2faF-aRQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/b8aff0f593952b8efd50.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/TWzaepwWXASlc_htqWfj4AtJTxjrxjcQP1xF6fP5DOOHdbtbFiUKHSkTHsd-ygur9WNuYkSP4nSDCuOa0jN0oA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/e6cc84ed802e3e8edbe5.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6747875092"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=puzzle.yarn.fever.unravel.puzzle&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-73",
          "code": "#073",
          "name": "Cookingo: Perfect Meal",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "烹饪台与食材",
          "values": {
            "form": 55,
            "expression": 70,
            "complexity": null,
            "era": null
          },
          "description": "蔬菜、锅具和煎制食物结构可辨，轮廓略作概括；暖色平涂、细描线与绘制阴影形成手绘厨房感。此次只有一张有效参考图。",
          "formReason": "蔬菜、锅具和煎制食物结构可辨，轮廓略作概括；暖色平涂、细描线与绘制阴影形成手绘厨房感。此次只有一张有效参考图。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±20，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/mDqLEPF_yZOZmo-Falk0FROB1hNp7D-HEquE4BQAK3TJ6-Nb32hcpArmZwXMs7bGZS1VT1CWjMn9oLVOlVI6pw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/bfaef9536ed51a1c0fb4.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6756288168"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.cookingo.perfect.meal&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-74",
          "code": "#074",
          "name": "Coin Master – Board Adventure",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "棋盘吉祥物与小人",
          "values": {
            "form": 25,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "拟人动物大头短身，棋盘上的建筑玩具化；表面采用简化立体光照，色彩鲜明且材质统一。",
          "formReason": "拟人动物大头短身，棋盘上的建筑玩具化；表面采用简化立体光照，色彩鲜明且材质统一。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/TDkNO1QCOMsrFGxsv7Xffy7HRkRq_UIYnJS6YU8p1VCVhfiONr5-Ry4VFTGM6b2QGBMjRQ9kypqh4NfR8bZiAQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/ffcef5bd3ab2f7e5a478.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/93DhO5eaSKbzj6kLwF-eYgjRkMOm1QW-ENe54nRSFHZ4AQlueKBJgt553MI-dwfKcqcztC1n2P9gc5PiMd93D0w=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/37b78770d58e585884a4.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/c_N-nD4T1jTN1gUoQoQtq1AxcwnwVS8XRJY-AC73Ydwu1dsLHqDv-aFMALhcxmKH8z7_5n5HsW3rAMFgyGwTkw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/0675f089d459ca583ac2.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6745761596"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.moonactive.cmboard&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-75",
          "code": "#075",
          "name": "Hidden Object Games: Seek It",
          "style": "场景",
          "family": "场景",
          "color": "#4c6dba",
          "scope": "寻物场景插画",
          "values": {
            "form": 75,
            "expression": 65,
            "complexity": null,
            "era": null
          },
          "description": "器皿、家具与环境结构较具象；色彩和细节被密集编排，笔触与明暗带装饰绘画感。主题场景变化较大。",
          "formReason": "器皿、家具与环境结构较具象；色彩和细节被密集编排，笔触与明暗带装饰绘画感。主题场景变化较大。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±20，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/0UWF-Ahh_nGlHYGxk78hmGVnCKJr0I-xMMlvqhQC7eWKFOT2fBQinLZI6gRoo6FFMxXFtbTer7yuEilJwExV=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/5c100ebbb02ddd0c8997.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/CQ6lHBmqw-5Iy6447XlGToGEavPRsla_ye4RTKHltuPFdGmALJ7xR_xi7oNkp9A27hwga2pZ4WRH0C2X8lnO=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/b8c3ad185f2cfd30663b.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/WgWb98CiGCth-62VW2pb3xpMiAPgQ7ABsNjY01cBc1u91bB3oXansDFLGBQmFe8I7X-C57OhlbqVgqARLUUD2Q=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/d5144a6ada0a678594ae.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6751270213"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=hidden.object.find.seek.search.mystery.puzzle.games.free&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-76",
          "code": "#076",
          "name": "Tidy Puzzle: Perfect Satisfy",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "整理与清洁的日常用品",
          "values": {
            "form": 50,
            "expression": 75,
            "complexity": null,
            "era": null
          },
          "description": "杯碟、灶台、化妆盒保留现实结构，轮廓柔化；细描线、粉彩色区和概括阴影形成二维插画表现。",
          "formReason": "杯碟、灶台、化妆盒保留现实结构，轮廓柔化；细描线、粉彩色区和概括阴影形成二维插画表现。",
          "imageNote": "iOS 商店图 · FoxData 镜像（TW）。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4d/37/b0/4d37b09f-ae23-e290-e321-44fcf73c510d/A5.jpg/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/f52824c476a8ce2c4bbe.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8b/63/26/8b63261f-b997-99b3-d53c-08fb68558637/A3.jpg/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/e96009619c690a6ccc9f.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/83/b2/65/83b26519-1d48-1c7d-53b2-05ee880a6c16/A1.jpg/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/a2238823985bb78297bf.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f5/bf/d1/f5bfd11a-e7c0-9e06-3672-32245c5935b2/A6.jpg/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/88df3d48fe84dc22115c.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6749947089"
            },
            {
              "label": "参考图来源",
              "url": "https://foxdata.com/en/app-marketing-analytics/6749947089/as/TW/tidy-puzzle-perfect-satisfy/"
            }
          ]
        },
        {
          "key": "a-77",
          "code": "#077",
          "name": "Vehicle Masters",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "驾驶车辆",
          "values": {
            "form": 75,
            "expression": 45,
            "complexity": null,
            "era": null
          },
          "description": "卡车、驾驶舱与机械的比例较自然，细节被简化；环境面块较明显，表面缺少复杂反射，但自然光照方向仍成立。",
          "formReason": "卡车、驾驶舱与机械的比例较自然，细节被简化；环境面块较明显，表面缺少复杂反射，但自然光照方向仍成立。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/gurtkNDNnmWDL2EDcGBCjxravXLvy2CH5S1Dw46kEPgHGovX87dDk67zrxFvv4V5sKfIRXEwh8kmqPR3W0ioXw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/c11342f8c061ae8ebb42.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/8ic67QQUV-vKrq4frsghWcrnx_XlmV85XMI7lf92eHeeYQv4OcBzEjyH3L8xHYMkK3MdsilcovGArbNVv9TMlw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/29a19fdae824a2042b48.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/XeB3LokvXRlhgpuRK-DjugffKAHjERD1gq-7TuHEAzh-qi9hMsJTH-RzoylPk8-zuAStAK4oaJ0MZrtAvZqS8Q=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/e3a20f3650b5717713b4.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6444705312"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.pd.vehiclemasters&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-78",
          "code": "#078",
          "name": "Fruit Merge™: Match Game",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "拟人水果",
          "values": {
            "form": 10,
            "expression": 90,
            "complexity": null,
            "era": null
          },
          "description": "水果被圆球化并赋予大眼表情，大小关系按玩法重组；粗线、平面色块和简化阴影表现鲜明。",
          "formReason": "水果被圆球化并赋予大眼表情，大小关系按玩法重组；粗线、平面色块和简化阴影表现鲜明。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/NOQ0XHz6SOxidbfgXmMrWD9RrxxScismtrXhEsOvYbHK2n7L8s6FYFR3AzgMK-jkHfQBZCCCkia92B5bD7SZW3Y=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/97641436a3e5f3f63bb4.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/L-kDWwIR6VFYD4nhmoolb32ynomYLIZGbwIVGYnpE1zE7C0aQ3SIw9vHzIWx475iXLVqabk9Tglrq11VIBSLcA=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/f2c50c54353fa0c3025e.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/g7sxQPbNV0VwjmnfnpNQ08W-jrVfe1o38CcbZXJJ-uerq1LzWOZYqQzSqeRrvlMREmMIsozBBa88NoeYURrUoQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/723d5b6f985ed56a1d94.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6471572249"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.melon.drop.fruit.merge.master&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-79",
          "code": "#079",
          "name": "Wool Crush™-Escape Traffic Jam",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "针织图案与交通棋子",
          "values": {
            "form": 25,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "针织图案和车流均为高度概括模块；毛线的细密体积与阴影仍可辨，鲜艳颜色则用于解题。混合模式会带来较大跨度。",
          "formReason": "针织图案和车流均为高度概括模块；毛线的细密体积与阴影仍可辨，鲜艳颜色则用于解题。混合模式会带来较大跨度。",
          "imageNote": "iOS 商店图 · FoxData 镜像（NL）。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±20，不是统计置信区间。",
          "images": [
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/67/67/8c/67678c9f-27ac-efd7-f1b1-0255ccc83997/ab_13439_1792424197617.png/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/c07b6884da468cc165fd.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3d/3c/51/3d3c51d9-457e-348f-1f2f-ccfec9172913/ab_13440_1792424200981.png/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/7de8015412867bd5128c.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9c/8a/07/9c8a07d9-361a-6b6e-0b23-4b2078e86c34/ab_13441_1792424204220.png/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/11a0bbfb2e87d19a9273.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/92/cf/5f/92cf5fca-a150-5cae-bbc9-85944b9eaaed/ab_13442_1792424207896.png/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/c41f3827bc2acafbbdc5.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6743385713"
            },
            {
              "label": "参考图来源",
              "url": "https://foxdata.com/en/app-marketing-analytics/6743385713/as/NL/wool-crush-escape-traffic-jam/"
            }
          ]
        },
        {
          "key": "a-80",
          "code": "#080",
          "name": "Hex Match: Block Puzzle",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "六边形拼图",
          "values": {
            "form": 10,
            "expression": 75,
            "complexity": null,
            "era": null
          },
          "description": "规则几何轮廓与少量数字/符号构成主要形体；色彩块面、轮廓亮边与浅浮雕表现突出。",
          "formReason": "规则几何轮廓与少量数字/符号构成主要形体；色彩块面、轮廓亮边与浅浮雕表现突出。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/5QdqyN9UTzyP_49QOISKZ6_Wi_HsPxV5jUtiDk9RYA3t824lRIzDDzTYCYq71QFJxVf-ENGBdpK6tb5kZky7Tg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/98551ecdfc6dbf617da8.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/XnijJAyS1OTyvM0jPwln_93kI9zNponnJsOtPbGyWFBzhj1LdMcmbybSnV9kHdUAPqhCAa5Xegou_A6-qIK-=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/da317b3434c00b65a2fd.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/lGiU3F6ScORJShiazdf4F8c7LlLyKmvKLqSVJxLmhD3ITYSjTxcZRUFkJyaeOLvOm-sOOpqAYLsydmZPBnFGyg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/1f3dd59c313ab6d010c5.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6756410999"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.gimica.hexmatch&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-81",
          "code": "#081",
          "name": "Bingo Rock",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "宾果号码与棋盘界面",
          "values": {
            "form": 10,
            "expression": 85,
            "complexity": null,
            "era": null
          },
          "description": "号码格、彩球和按钮构成主要视觉，角色仅为附属头像；紫金舞台色、发光与图标化明暗明显。仅评棋盘，不评奖励宣传。",
          "formReason": "号码格、彩球和按钮构成主要视觉，角色仅为附属头像；紫金舞台色、发光与图标化明暗明显。仅评棋盘，不评奖励宣传。",
          "imageNote": "iOS 商店图 · FoxData 镜像（US）。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/1a/ce/59/1ace59ea-5395-0c75-75e6-4b0c4ce1e187/1.jpg/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/60e26bfd6f1c248a7920.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f9/a9/21/f9a921b1-9660-2673-46f6-01f1ee19dc88/2.jpg/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/da3f9b24fa749325fdd4.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f8/a3/ea/f8a3eafd-5a3f-6e70-f2e6-d68d3a12f25b/4.jpg/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/1068c01d4ef3efc9e978.webp"
            },
            {
              "url": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/c4/6e/46/c46e4607-8182-7f93-2055-6f90c82cf58f/3.jpg/460x0w.png",
              "width": 460,
              "height": 997,
              "mime": "image/webp",
              "src": "assets/images/9215a98b4d8ce8198fcf.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6751319735"
            },
            {
              "label": "参考图来源",
              "url": "https://foxdata.com/en/app-marketing-analytics/6751319735/as/US/bingo-rock/"
            }
          ]
        },
        {
          "key": "a-82",
          "code": "#082",
          "name": "Ludo Go! – Dice Board Games",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "骰子与棋盘棋子",
          "values": {
            "form": 45,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "棋子和骰子保留桌游物件结构，比例被圆润化；有浅体积与投影，配色和高光强调可读性。",
          "formReason": "棋子和骰子保留桌游物件结构，比例被圆润化；有浅体积与投影，配色和高光强调可读性。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/7jVXDD_rduv31XXfo8L_xNQCOYBwrqR7P8nwGLQf236jwphalbVxqXqE2UFcxIrosjg7_jQGAwVYsE7kI9h1Sw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/01e7abe06e4d59c29991.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/17NYURVfa-ZF82ZZnhvWtchu3lvG9c2WxWkwVvYWyJfTNB-D3zI_sGy7kWCpQEuA2UBgkB_h5nFMjMiqg43nkA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/1cee006514ff5adeea90.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/7i1zUpBpYi4y5H2YuKIkhdSnbzBOiS1WJdKAX9dbgu8PrMWYqtMwYeWy8j-pPd0sPR9hpOUiW7WP77GPNym5=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/b5e39de62a1445a52126.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6815260519"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.easybrain.ludo.board.games&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-83",
          "code": "#083",
          "name": "Pocket Sort: Coin Merge Puzzle",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "彩色硬币/筹码",
          "values": {
            "form": 35,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "圆片与堆叠结构可辨，但纹样和面额被压缩成图标；木盘和筹码有体积，色彩编码与亮边更强。",
          "formReason": "圆片与堆叠结构可辨，但纹样和面额被压缩成图标；木盘和筹码有体积，色彩编码与亮边更强。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/gpEGSQfYxzTvQb-t_dAurZWBYAjD0SWuAidDt02p_sED_NsYC6Wu0ZW6dL01m6turlSdmUQ9atBv_oigHKTz=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/c811822855123de605b0.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/NL5hFZOVCHKtMxbKCtI42zvCzVu57Q85hs-fOmBfxr9LQfgB8ZAWmyX7GoHjM4_f0N0QOQPSy8vFiOP7_Fzj=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/5c130e04f722c8c0200e.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Kj0-HqUrLq4dGZ8I7JHdg_fQ8VB1Mu4_rO4XnKg1NMKv4XFEzdiZXQwefFCTDpvSca9y-sSXjhjk6UIpwTWp=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/b881e3a0e09296d95183.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6755425214"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.pocket.sort.coin.puzzle.game&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-84",
          "code": "#084",
          "name": "Jelly Busters: Puzzle Game",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "拼图像素与果冻棋子",
          "values": {
            "form": 20,
            "expression": 75,
            "complexity": null,
            "era": null
          },
          "description": "图案高度离散化，果冻角色比例夸张；色阶组织与像素边界显著，同时保留单块的立体高光。画作关卡差异较大。",
          "formReason": "图案高度离散化，果冻角色比例夸张；色阶组织与像素边界显著，同时保留单块的立体高光。画作关卡差异较大。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±20，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/IwvxVcUmLfASGecKUlrJ_nNAmF7vaLqdFpqLUdrqWhY81dXDJhT9yq6UZ3k_E35LsTtljDqHiD1ag-M_xAXQeg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/ea6699e0f1edbea9eab1.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/J8dvr1RmlapV34EUJVyUIAA6rTgAmXRIVL3xOhB6D2p5CJOwIW172zi-fmjZRSvDxdBZwl1QQ32gNDqF3LIMO3I=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/b2316c5ab9d1a7c8a94b.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/RGek9tIJS06CdXM0palPkvQJU72lDuvgqbn30b_nbuvdy1rM-ivK25LGDd2iEBAozaaQ6E48A940yf399Mn6SQ=w526-h296-rw",
              "width": 165,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/e3f64137508a7f1ce083.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6756058501"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.moonactive.jellybusters&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-85",
          "code": "#085",
          "name": "Find The Cat 2 – Spot It!",
          "style": "场景",
          "family": "场景",
          "color": "#4c6dba",
          "scope": "藏猫场景与人物",
          "values": {
            "form": 45,
            "expression": 80,
            "complexity": null,
            "era": null
          },
          "description": "角色和猫的形体概括，场景器物仍容易辨认；轮廓线、平面色区和插画式明暗形成绘本表现。",
          "formReason": "角色和猫的形体概括，场景器物仍容易辨认；轮廓线、平面色区和插画式明暗形成绘本表现。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/Awk8MoYXWqKm_zKhWXlFfy2S7p7TsNzaYHi2_JKJFRawHjR9eBgH_e58ABVI-5Ud62Z7QNaFbNkeZijWn_5_2w=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/12cbeba1dfa5644f9605.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/WT_3KCpdnu6vQB0S_rOJfJRyJLRTRdQcf1YGEw7U4fMnIhueQIDDfZWTB8kR3aOWcvnlgNOBK9OpZoL1gRFOTg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/9afab1dda36fa925650d.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6758662578"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.agavegames.findthecat2&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-86",
          "code": "#086",
          "name": "Krillion Today: Trivia & Quiz",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "问答文字界面",
          "values": {
            "form": 0,
            "expression": 90,
            "complexity": null,
            "era": null
          },
          "description": "可见图以文字、输入框和结果卡为主，没有可比较的人体或物件形体；左端表示抽象。Android 页面名称为 Rarest Krill，按关联包名取图，iOS版本需再核。",
          "formReason": "可见图以文字、输入框和结果卡为主，没有可比较的人体或物件形体；左端表示抽象。Android 页面名称为 Rarest Krill，按关联包名取图，iOS版本需再核。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "关联Android页面名称与iOS标题不同，该条目仅作暂定参考。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/YoauNdv8xqlB1ELfK6sGdXZirpI-OdUh_r-Lh5jY_I8un3mFoairepsxnUE0Ac1a06qm-YeHBzN2O3QUFOyD=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/334ab142975d96800199.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/sr5d5KLxH1BbBs2nDHanxKeRpbRsqQr1bWMEjrXZQ9IrMbbHlxlWKmTeimmYUOyedXMM16IYkQAfMXvwG1C0Rg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/53187dce803bc8c37f7e.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6819295797"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=to.krillion.app&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-87",
          "code": "#087",
          "name": "Ghost Sniper: War FPS Shooter",
          "style": "场景",
          "family": "场景",
          "color": "#4c6dba",
          "scope": "第一人称武器与战场",
          "values": {
            "form": 90,
            "expression": 25,
            "complexity": null,
            "era": null
          },
          "description": "枪械、士兵和建筑遵循现实结构，细节具象；土石、金属、阴影和环境色以自然观察为主，保留适度戏剧光照。",
          "formReason": "枪械、士兵和建筑遵循现实结构，细节具象；土石、金属、阴影和环境色以自然观察为主，保留适度戏剧光照。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/6gsA8YUGdWLf5lVWUhM1PRTqObBHFMSnbsChVWPHckMujfq7MMfb2TosoqaGEkW_WXGKxUPC1eNT_GO5EOowdA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/37482f3f039f61fd42b9.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/UHZDTLBeWj5AiZnP37ZoP9QtMXx24syQw6CoP22m_Kmof_SsHfcM6aRoAYBacPBu7EaDdiybha56VB85USYsdg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/543e126c6e3a546cbe0c.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/bql2NQjK2iISJOKNVPh3SnYcWW0XamlPbu-3p92GEWZN6l9nmCrXKBEJEI4551VioqKjc7pIR_AMKYjsjsy1Dw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/dd56d3c6919e0c331eed.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6756882608"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=sniper.war.target.soldier.shooter.aldagames.com&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-88",
          "code": "#088",
          "name": "Royal Cooking",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "餐台食物与灶具",
          "values": {
            "form": 65,
            "expression": 45,
            "complexity": null,
            "era": null
          },
          "description": "厨房设备和食物比例较具象，但表面更整齐、轮廓更饱满；自然式连续明暗与少量绘制质感并存。",
          "formReason": "厨房设备和食物比例较具象，但表面更整齐、轮廓更饱满；自然式连续明暗与少量绘制质感并存。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/PY3vvsSB7jcWDOgAyvcuDeXoTBTY9Af_VSER10nUQvhwhvj6MOCIJYffvRbLRh9XUV5rV5fEad6VOJW8TU6n=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/a71b73b1dbd5d49721d5.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/0Mx_ZRNJDEnXT0ZpA2EEY2UBLgy5EZzaPxCPEyxVH9NzOu3n4rmcdYVvVyeEkIc9wW2VPWQdJ2ZeEb03T8UVbA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/5e73ba89d00cbcb511b7.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/OGK71JXYuOgxoljOmspkaJkQKfCx8KxSt2_Md0UZ_XJi8Oe1-jW2yASkriolN8b9NxwYvUDd1sdraVNQ6LCv7Q=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/59e9374e4e0a06e56f3a.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1664415775"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.matryoshka.royal.cooking.kitchen.madness&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-89",
          "code": "#089",
          "name": "Travel Sort: Color & Match",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "液体瓶子",
          "values": {
            "form": 55,
            "expression": 70,
            "complexity": null,
            "era": null
          },
          "description": "容器细颈、瓶身和液面仍具象；互不混合的色层、透明高光和糖果配色强化图形组织。活动吉祥物不计入主体。",
          "formReason": "容器细颈、瓶身和液面仍具象；互不混合的色层、透明高光和糖果配色强化图形组织。活动吉祥物不计入主体。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/ugKJnYRQtchKbb0UGkekK5An_KD-52JM44Y5Qzr5RLsKLcXcinUl4LNsnXnUvAXlsIHxrMpB76YwW1t4ekfE=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/16cdef27921379cfa918.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/3hdH-Iwas-78osacJX2ExOD1vFAtv1Nj-XT__S80ukYqrPVJsT3JysWt_24ltXRnGtmTwecnAf7ipFVMz1HM7w=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/d4c1e8985c75ff29a2f6.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/LSjK_ii-b5mp-Uz3I-5oYLoiVLAQx0oXnDi3OIes_ihgTwMMFd8O6E8pLtHbT3kpKTAu2VCqQhkFlG8tgLfSpQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/7a5f6feaf8b7112da0bd.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6751308308"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.happyhour.water.sort&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-90",
          "code": "#090",
          "name": "Flambé®: Merge and Cook",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "合成食物与餐具图标",
          "values": {
            "form": 50,
            "expression": 60,
            "complexity": null,
            "era": null
          },
          "description": "食物轮廓具象但圆润、统一大小；高饱和固有色、绘制高光与柔和渐变形成精致休闲插画。",
          "formReason": "食物轮廓具象但圆润、统一大小；高饱和固有色、绘制高光与柔和渐变形成精致休闲插画。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/-ezLOx5UO9pZVMBTFHcgLFEzYoiH0aRN9clIJxKrmqVpCpKg9UrYtWH0gFzBs-YDA8CVljubTOhvuHXNTCcHtg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/d38a80068f895180f598.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/vVVX0uWJPM4JHKn06uy-VCPbwLih6M_THlDgPgTJy6iCPFtUQwooyIZrr5voATtd4vn2iueEojdSj63jLu34=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/bb01c5e5199433de4629.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/qu1c9214QpI675g0KXGyTvWXsMiWWkl6PZGpHf0PUjGNlENE57c9wZSTIRo8p4mFmRNEbTg5k4zwE9QIHO9hmg=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/4165dfe69c210d94e7e6.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6618142292"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.cola.game&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-91",
          "code": "#091",
          "name": "Sand Drop: Color Sort Puzzle",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "沙粒拼色图案",
          "values": {
            "form": 20,
            "expression": 85,
            "complexity": null,
            "era": null
          },
          "description": "猫、帆船等轮廓被压缩成大色块，粒子只提供局部颗粒感；图形分区比自然光照更重要。",
          "formReason": "猫、帆船等轮廓被压缩成大色块，粒子只提供局部颗粒感；图形分区比自然光照更重要。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/bxs59cjQFy_DYm8Nrc1Rr0fecjolkBSs26UWWg5iiAjyf71c5yJyA_63feH41i1jCCL4nDQA4XFvKllODseL=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/cf3bc83ce327bd1ce3ad.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/fshcXttdvhqQr_42ep8q64MN_lKoHYjHrKkRR7UyWh2E2V10orz9BBp7Bz6ltAnq6C6rivsCL9psAlF8ZrxdcQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/54276513bc2eb15f92d0.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/O6phLwWLK9Td5DLT6sCgLGCeeCcA740i5YE5dNPDniDL-yjik45jfSLVznFXzurbOBouPvr7tUHALUMbnvMQ=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/e4bcda0d152689ed213a.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6786642612"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.fingersyoda.sanddrop&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-92",
          "code": "#092",
          "name": "Wordle!",
          "style": "抽象/界面",
          "family": "抽象/界面",
          "color": "#9065a6",
          "scope": "字母方格界面",
          "values": {
            "form": 0,
            "expression": 95,
            "complexity": null,
            "era": null
          },
          "description": "文字与色块没有自然形体参照，左端表示抽象；平涂、网格与功能性色彩编码几乎不模拟真实表面。",
          "formReason": "文字与色块没有自然形体参照，左端表示抽象；平涂、网格与功能性色彩编码几乎不模拟真实表面。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±5，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/GSC5zro-epDMOYxAKM1ZE7vbdNWS4CCTW_l_lkJ_2iS--h3uBQVdQoxzKuioDXOWWF8l7fMbwQSfNfO6IR49=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/034b00175feec3cf898b.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/39JHPGDM2yi5ouhHdOFlHSpwb7zlWUBnpZN4VS3d3VzTNDut6jUs4LRSN-VMbDyIwxcA9d7_I19ox8XmRSpT-A=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/2fff34c6270308783d77.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/IVYmf7QzHd_Bt_7DwSg4HPwzWDODGQxzQSkXn2fkJTzzaCJr1Kx-EwmARAkAiYvnsH3QT285HR8aKDw_p36QIw=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/0a70c8b3353e2a79c88c.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1095569891"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.vottzapps.wordle&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-93",
          "code": "#093",
          "name": "Aquapark.io",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "滑道上的玩家角色",
          "values": {
            "form": 25,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "人物与动物皮肤身体圆润、短小，结构概括；三维光照保持体积，滑道色彩与表面反射经过简化。",
          "formReason": "人物与动物皮肤身体圆润、短小，结构概括；三维光照保持体积，滑道色彩与表面反射经过简化。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/1dp0nJmXacbeXLuEYD3tKIxNxrvqp0E7ikk0P1cIU5l-oIRilOP5Wq1MwNmWO9jyVtdiYA5lx9KfymtOlKFn=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/8a4ff9a63d8469aef4dc.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/XTdHQaHvJK20arqTGjwR1M7J_qLyZUJf3FXHmb_vGTCZhjMR0xUTzA1LXlUkDkHAPi2Ba-O3B03Mkq3I0X2e6gA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/12ffabb45c8ab15268fc.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/vle5wlPRnFK5G70i0AY_OVrXx2_PT2UZZrnc5IYJUAqry0pKpAeQsvSo_BUJUwygsOF_hRt5sFHD9xzVhJo73w=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/bcc3d27085a953e85f12.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1453989822"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.cassette.aquapark&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-94",
          "code": "#094",
          "name": "Gleaming Slots – Win Real Cash",
          "style": "合集/混合",
          "family": "合集/混合",
          "color": "#847754",
          "scope": "所示老虎机主题",
          "values": {
            "form": 35,
            "expression": 75,
            "complexity": null,
            "era": null
          },
          "description": "转轮图标和主题角色的形体偏概括，模式之间差异较大；金属亮边、紫绿光效与高对比配色强调娱乐界面感。",
          "formReason": "转轮图标和主题角色的形体偏概括，模式之间差异较大；金属亮边、紫绿光效与高对比配色强调娱乐界面感。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±25，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/R_MNs851TO15NXOKNpjnaHCVv1VItA9lIoG5BineuES9muKO73TkK8cfJ83WCFdQt-qtPBli4KbfVon5c8xRRQ=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/a4ba594a0a594a07a331.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/6Nh3Vq33_745Fi2psHsX8iaCUA7J98rMCLRUxnSvEyqdORTutWTRen39L1Pf7-WGtBekS3p6QdGhMtUTUjNJ6g=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/b36cdad05adc1f0d2331.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/-7OFF8brfJ8L-ObEZti6Tn8F94wRxLLVopRHY-Wk8DwxV9Tfp0AiTbhfbgIVT5MogdaNfMJosHzIBaPIgsCo9g=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/8a0c153fb5d3f7f6844c.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6566176181"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=gleamingslots.bestcashgame.downnow&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-95",
          "code": "#095",
          "name": "2 Player Games : Offline Games",
          "style": "合集/混合",
          "family": "合集/混合",
          "color": "#847754",
          "scope": "双人小游戏棋盘",
          "values": {
            "form": 10,
            "expression": 85,
            "complexity": null,
            "era": null
          },
          "description": "球拍、车辆与棋子多为几何或图标式形体；平面配色与简化阴影为共同倾向。该点不表示所有子游戏完全相同。",
          "formReason": "球拍、车辆与棋子多为几何或图标式形体；平面配色与简化阴影为共同倾向。该点不表示所有子游戏完全相同。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±25，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/chl7JHh2jDQWWElNnwqRo-UxpGYqjQteoExdzbYDGoEy4VdzGW6hpyq6CTjCee1c8ZVhnAvBiBtowPY4emRgBA=w526-h296-rw",
              "width": 166,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/fe53abc121cb45abb29d.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/L6guwHVMaoteFmyEezbABUgCum9NdGKMygKKCW5i6ypR51c9rVXDGGvWGwbPtQw2ERwG7Sp773ZztDKmVnwrrQ=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/a1590e5caa201380d151.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/cuR_tQ-gS8swBMN-WfcVamfI42-GY5SJmVZrnWx09Hhs60X_3xW68etiwCeqqEn3yz0jGEfVwRjK86MFCxKyqg=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/c48a3ca2a0b94a4f22b0.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1465731199"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.JindoBlu.TwoPlayerGamesChallenge&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-96",
          "code": "#096",
          "name": "Temple Run",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "跑者与遗迹环境中的人物",
          "values": {
            "form": 65,
            "expression": 45,
            "complexity": null,
            "era": null
          },
          "description": "人体比例和动作结构较自然，面部与模型细节较简化；贴图、石材和受光有自然参照。年代较早、画质较低不等同于强卡通。",
          "formReason": "人体比例和动作结构较自然，面部与模型细节较简化；贴图、石材和受光有自然参照。年代较早、画质较低不等同于强卡通。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/lDxXvtbAuEV7wKODVTJJZkrKhoOc9LPDDT9Ab49YkJMBcrbqSdkpjRGn9H06pZK9dqWB6Ruv6aI5p1-QBgqk3w=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/5938091ce85f6b8eea3f.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Uxq0m0XGoDWQC8dQbdA9rfWZOqvAORCxCFT3zczAdQiOepKAIlRGYYrqTW-fsFNlYY4upQm0u2V_2yJ9SakvXw=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/f2c48ecc3676a85f7ccf.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/PAnLeyBdEPsIs6uptMc1Bo5EUgIypGU6BIcJMpi8u81Dr6JrT7QG62_A3VMM66_5KdO3OscUh76mcn5neVvMdQ=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/d7f0eda379313bc5f1be.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id420009108"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.imangi.templerun&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-97",
          "code": "#097",
          "name": "Pizza Ready!",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "餐厅服务小人",
          "values": {
            "form": 15,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "人物近似胶囊和圆柱组合，五官与关节弱化；色彩分区明显，三维阴影与统一塑料表面表现简洁。",
          "formReason": "人物近似胶囊和圆柱组合，五官与关节弱化；色彩分区明显，三维阴影与统一塑料表面表现简洁。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/8iUIvujENByiloxIFjOeXiRq0kJnaEJC-eOPmUonD2PU5U565_dPlGzGAXM0DFcWgMbhZHKzy433L81RWtaA=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/51b0a583c973a76afbd2.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/N55BEsOP50eGZmuYS7bUIc3GMmLPShJFH6R-NBYgXfw6Kz6WM-nB4gaTmU1tOBmL-hRHFO8nc-ZUdO0_2k-5RA=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/cbb36ad88a4b8ba30421.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/x0Vw8B3X1-jchKMyqzrXli0IStmmy5CPtMBaOLJppFtRfbeRceXiyFA7wx7lOu0jX16O-zLtgiOUxxJIMJx3mV8=w526-h296-rw",
              "width": 137,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/fbda347c290efc62f254.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6450917563"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=io.supercent.pizzaidle&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-98",
          "code": "#098",
          "name": "Bowmasters – Multiplayer Games",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "横版对战人物",
          "values": {
            "form": 20,
            "expression": 95,
            "complexity": null,
            "era": null
          },
          "description": "头身、四肢与武器比例夸张，轮廓趋于几何剪影；高饱和块面、硬边阴影和轮廓线形成强图形风格。",
          "formReason": "头身、四肢与武器比例夸张，轮廓趋于几何剪影；高饱和块面、硬边阴影和轮廓线形成强图形风格。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/T9KAhj8uh2p3whbupb81hk-EUS_3f27UPTIrdDoH-v0TEOF23xZMKbt1oN2WLBcTlP16d6Y0Sc1mGGLXUi9Btg=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/1f6c3fd6495e5de79e1d.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/4k4INerJYv2C24_GWPCU9xrhbh2hp6WaGaTAKdCHgLDsDr-26TAyw5MnFFFYCGksqhx_RipG8zpYb5HPWSUYPA=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/9e052f504685df5c60cc.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Jc6YQ6HGr-LVyLDOCe9iP6CJgX4qmUKOoV0Im1jCRyz0k2zpVqu-rrkGZDbwCVEp4A8VFdMDZbhK-7bHOjqleA=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/9f731141ac671e98e797.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id1118431695"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.playgendary.bowmasters&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-99",
          "code": "#099",
          "name": "Knock Out : Physics Puzzle",
          "style": "物件",
          "family": "物件",
          "color": "#287b87",
          "scope": "方块塔与发射器",
          "values": {
            "form": 30,
            "expression": 55,
            "complexity": null,
            "era": null
          },
          "description": "目标以规则积木搭成，形体具象程度有限；块面有清楚厚度和投影，色彩高度统一并服务关卡区分。",
          "formReason": "目标以规则积木搭成，形体具象程度有限；块面有清楚厚度和投影，色彩高度统一并服务关卡区分。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±10，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/O7RPPuE2853J1-BI0m36lLG8s_DmkZaGSJN1A-YVPOXRcwkvazdx0eDlFTl1iKpnOzdiV-KbpmatPXD7X6g2jV4=w526-h296-rw",
              "width": 136,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/01863e221f2cd511af03.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/2gKUdYS9qlW-2bneqTpzcrztoEhc6_IFFa5GgJqn7sweYFJvGD_VNBdv22RtcyEXkV8miMTJSwXMHvx-F6H6=w526-h296-rw",
              "width": 136,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/059b45c422439b9b582a.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/sM9cFxDw1v92AGgx8XtFapLlKD6LJjtaACYOsK6AOD2UGJJW7SNpwUt41vAvcY29NvMPLhT29-PjEqzhgFJ3OA=w526-h296-rw",
              "width": 136,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/ced69133c5cde6f18977.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6782096197"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.combo.knockout&hl=en&gl=us"
            }
          ]
        },
        {
          "key": "a-100",
          "code": "#100",
          "name": "Idle Cat Gunner: Shooter RPG",
          "style": "角色",
          "family": "角色",
          "color": "#cb704d",
          "scope": "俯视猫咪角色",
          "values": {
            "form": 15,
            "expression": 85,
            "complexity": null,
            "era": null
          },
          "description": "猫被压缩为短身、大头的小体块，结构高度概括；深轮廓线、平面色块与少量简化阴影构成绘本式卡通。",
          "formReason": "猫被压缩为短身、大头的小体块，结构高度概括；深轮廓线、平面色块与少量简化阴影构成绘本式卡通。",
          "imageNote": "Google Play 同款参考。部分为低分辨率商店预览图；同款平台与版本可能存在差异。",
          "warning": "人工建议比较弹性：两轴各±15，不是统计置信区间。",
          "images": [
            {
              "url": "https://play-lh.googleusercontent.com/mwyUGjmkVXdBzgrp4PVxKuRBMGQlUn-UDDeOjeEOn4-6tAXPkLHwWdjaoKegJfmwfQnCFOlVtZ8oX9Twrgol=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/acf30a1ab5d5f0fd09b5.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Xp3eL8PfClRDR89YDmefDVO09HQe24q0cMB16JByxoLCGzfqj34qS3ZH2J2Yv21R5UINMKaeJrFjkh-0A8lR5w=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/32c2bd0c2e7f7da5851f.webp"
            },
            {
              "url": "https://play-lh.googleusercontent.com/Vt5AorfrBqbuCJYDyW13WOiy5cX6JIEZiH77yXRtscJzfevG2KokrEjmyr_fibY_fgpzb1d3qIeQUJpYN3FUY9E=w526-h296-rw",
              "width": 526,
              "height": 296,
              "mime": "image/webp",
              "src": "assets/images/3e2e037e998461e1bea1.webp"
            }
          ],
          "sources": [
            {
              "label": "App Store条目",
              "url": "https://apps.apple.com/us/app/id6764201639"
            },
            {
              "label": "参考图来源",
              "url": "https://play.google.com/store/apps/details?id=com.Chodun.CatGunner&hl=en&gl=us"
            }
          ]
        }
      ],
      "note": "美国iPhone免费休闲榜：MSY Games 2026-11-05快照，并非实时榜。90款用关联Google Play同款参考，10款用iOS商店图镜像；309张图随网站提供。年代与复杂度尚未评估。"
    }
  },
  "sourceFiles": [
    "assets/js/data.js"
  ]
};
