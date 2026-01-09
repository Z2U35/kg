// 页面配置映射
// 定义每个页面的配置信息
const PAGE_CONFIG = {
    // 上下位系列 - 默认500节点
    '上下位500.html': { graphType: '上下位', nodeCount: '500', jsonPath: '../relationship/上下位500.json', title: '上下位 知识图谱' },
    '上下位1000.html': { graphType: '上下位', nodeCount: '1000', jsonPath: '../relationship/上下位1000.json', title: '上下位 知识图谱' },
    '上下位.html': { graphType: '上下位', nodeCount: '500', jsonPath: '../relationship/上下位500.json', title: '上下位 知识图谱' },

    // 产出系列 - 默认500节点
    '产出500.html': { graphType: '产出', nodeCount: '500', jsonPath: '../relationship/产出500.json', title: '产出 知识图谱' },
    '产出1000.html': { graphType: '产出', nodeCount: '1000', jsonPath: '../relationship/产出1000.json', title: '产出 知识图谱' },
    '产出.html': { graphType: '产出', nodeCount: '500', jsonPath: '../relationship/产出500.json', title: '产出 知识图谱' },

    // 先后系列 - 默认500节点
    '先后500.html': { graphType: '先后', nodeCount: '500', jsonPath: '../relationship/先后500.json', title: '先后 知识图谱' },
    '先后1000.html': { graphType: '先后', nodeCount: '1000', jsonPath: '../relationship/先后1000.json', title: '先后 知识图谱' },
    '先后.html': { graphType: '先后', nodeCount: '500', jsonPath: '../relationship/先后500.json', title: '先后 知识图谱' },

    // 关联系列 - 默认500节点
    '关联500.html': { graphType: '关联', nodeCount: '500', jsonPath: '../relationship/关联500.json', title: '关联 知识图谱' },
    '关联1000.html': { graphType: '关联', nodeCount: '1000', jsonPath: '../relationship/关联1000.json', title: '关联 知识图谱' },
    '关联.html': { graphType: '关联', nodeCount: '500', jsonPath: '../relationship/关联500.json', title: '关联 知识图谱' },

    // 因果系列 - 默认500节点
    '因果500.html': { graphType: '因果', nodeCount: '500', jsonPath: '../relationship/因果500.json', title: '因果 知识图谱' },
    '因果1000.html': { graphType: '因果', nodeCount: '1000', jsonPath: '../relationship/因果1000.json', title: '因果 知识图谱' },
    '因果.html': { graphType: '因果', nodeCount: '500', jsonPath: '../relationship/因果500.json', title: '因果 知识图谱' },

    // 实例系列 - 默认500节点
    '实例500.html': { graphType: '实例', nodeCount: '500', jsonPath: '../relationship/实例500.json', title: '实例 知识图谱' },
    '实例1000.html': { graphType: '实例', nodeCount: '1000', jsonPath: '../relationship/实例1000.json', title: '实例 知识图谱' },
    '实例.html': { graphType: '实例', nodeCount: '500', jsonPath: '../relationship/实例500.json', title: '实例 知识图谱' },

    // 方式系列 - 默认500节点
    '方式500.html': { graphType: '方式', nodeCount: '500', jsonPath: '../relationship/方式500.json', title: '方式 知识图谱' },
    '方式1000.html': { graphType: '方式', nodeCount: '1000', jsonPath: '../relationship/方式1000.json', title: '方式 知识图谱' },
    '方式.html': { graphType: '方式', nodeCount: '500', jsonPath: '../relationship/方式500.json', title: '方式 知识图谱' },

    // 相似系列 - 默认500节点
    '相似500.html': { graphType: '相似', nodeCount: '500', jsonPath: '../relationship/相似500.json', title: '相似 知识图谱' },
    '相似1000.html': { graphType: '相似', nodeCount: '1000', jsonPath: '../relationship/相似1000.json', title: '相似 知识图谱' },
    '相似.html': { graphType: '相似', nodeCount: '500', jsonPath: '../relationship/相似500.json', title: '相似 知识图谱' },

    // 组成系列 - 默认500节点
    '组成500.html': { graphType: '组成', nodeCount: '500', jsonPath: '../relationship/组成500.json', title: '组成 知识图谱' },
    '组成1000.html': { graphType: '组成', nodeCount: '1000', jsonPath: '../relationship/组成1000.json', title: '组成 知识图谱' },
    '组成.html': { graphType: '组成', nodeCount: '500', jsonPath: '../relationship/组成500.json', title: '组成 知识图谱' },

    // 输入系列 - 默认500节点
    '输入500.html': { graphType: '输入', nodeCount: '500', jsonPath: '../relationship/输入500.json', title: '输入 知识图谱' },
    '输入1000.html': { graphType: '输入', nodeCount: '1000', jsonPath: '../relationship/输入1000.json', title: '输入 知识图谱' },
    '输入.html': { graphType: '输入', nodeCount: '500', jsonPath: '../relationship/输入500.json', title: '输入 知识图谱' },

    // 地学系列
    'geonomy.html': { graphType: 'geonomy', nodeCount: '500', jsonPath: '../relationship/geonomy.json', title: '地学 知识图谱' },
    'geonomy2.html': { graphType: 'geonomy2', nodeCount: '500', jsonPath: '../relationship/geonomy2.json', title: '地学 知识图谱' },

    // 单独页面（无系列切换）
    '交通工具.html': { graphType: '交通工具', nodeCount: '500', jsonPath: '../relationship/交通工具.json', title: '交通工具 知识图谱', hasVariants: false },
    '体育设施.html': { graphType: '体育设施', nodeCount: '500', jsonPath: '../relationship/体育设施.json', title: '体育设施 知识图谱', hasVariants: false },
    '其他地理.html': { graphType: '其他地理', nodeCount: '500', jsonPath: '../relationship/其他地理.json', title: '其他地理 知识图谱', hasVariants: false },
    '分割.html': { graphType: '分割', nodeCount: '500', jsonPath: '../relationship/分割.json', title: '分割 知识图谱', hasVariants: false },
    '医院.html': { graphType: '医院', nodeCount: '500', jsonPath: '../relationship/医院.json', title: '医院 知识图谱', hasVariants: false },
    '历史遗址.html': { graphType: '历史遗址', nodeCount: '500', jsonPath: '../relationship/历史遗址.json', title: '历史遗址 知识图谱', hasVariants: false },
    '国家.html': { graphType: '国家', nodeCount: '500', jsonPath: '../relationship/国家.json', title: '国家 知识图谱', hasVariants: false },
    '图书馆.html': { graphType: '图书馆', nodeCount: '500', jsonPath: '../relationship/图书馆.json', title: '图书馆 知识图谱', hasVariants: false },
    '城市公交系统.html': { graphType: '城市公交系统', nodeCount: '500', jsonPath: '../relationship/城市公交系统.json', title: '城市公交系统 知识图谱', hasVariants: false },
    '城市轨道交通.html': { graphType: '城市轨道交通', nodeCount: '500', jsonPath: '../relationship/城市轨道交通.json', title: '城市轨道交通 知识图谱', hasVariants: false },
    '学校.html': { graphType: '学校', nodeCount: '500', jsonPath: '../relationship/学校.json', title: '学校 知识图谱', hasVariants: false },
    '山脉.html': { graphType: '山脉', nodeCount: '500', jsonPath: '../relationship/山脉.json', title: '山脉 知识图谱', hasVariants: false },
    '岛屿湖泊.html': { graphType: '岛屿湖泊', nodeCount: '500', jsonPath: '../relationship/岛屿湖泊.json', title: '岛屿湖泊 知识图谱', hasVariants: false },
    '景观景点.html': { graphType: '景观景点', nodeCount: '500', jsonPath: '../relationship/景观景点.json', title: '景观景点 知识图谱', hasVariants: false },
    '桥梁.html': { graphType: '桥梁', nodeCount: '500', jsonPath: '../relationship/桥梁.json', title: '桥梁 知识图谱', hasVariants: false },
    '森林公园.html': { graphType: '森林公园', nodeCount: '500', jsonPath: '../relationship/森林公园.json', title: '森林公园 知识图谱', hasVariants: false },
    '楼盘.html': { graphType: '楼盘', nodeCount: '500', jsonPath: '../relationship/楼盘.json', title: '楼盘 知识图谱', hasVariants: false },
    '民用机场.html': { graphType: '民用机场', nodeCount: '500', jsonPath: '../relationship/民用机场.json', title: '民用机场 知识图谱', hasVariants: false },
    '汽车.html': { graphType: '汽车', nodeCount: '500', jsonPath: '../relationship/汽车.json', title: '汽车 知识图谱', hasVariants: false },
    '河流.html': { graphType: '河流', nodeCount: '500', jsonPath: '../relationship/河流.json', title: '河流 知识图谱', hasVariants: false },
    '港口口岸.html': { graphType: '港口口岸', nodeCount: '500', jsonPath: '../relationship/港口口岸.json', title: '港口口岸 知识图谱', hasVariants: false },
    '火车站.html': { graphType: '火车站', nodeCount: '500', jsonPath: '../relationship/火车站.json', title: '火车站 知识图谱', hasVariants: false },
    '现代建筑.html': { graphType: '现代建筑', nodeCount: '500', jsonPath: '../relationship/现代建筑.json', title: '现代建筑 知识图谱', hasVariants: false },
    '自然保护区.html': { graphType: '自然保护区', nodeCount: '500', jsonPath: '../relationship/自然保护区.json', title: '自然保护区 知识图谱', hasVariants: false },
    '营业场所.html': { graphType: '营业场所', nodeCount: '500', jsonPath: '../relationship/营业场所.json', title: '营业场所 知识图谱', hasVariants: false },
    '行政区划.html': { graphType: '行政区划', nodeCount: '500', jsonPath: '../relationship/行政区划.json', title: '行政区划 知识图谱', hasVariants: false },
    '街区路.html': { graphType: '街区路', nodeCount: '500', jsonPath: '../relationship/街区路.json', title: '街区路 知识图谱', hasVariants: false },
    '铁路线路.html': { graphType: '铁路线路', nodeCount: '500', jsonPath: '../relationship/铁路线路.json', title: '铁路线路 知识图谱', hasVariants: false },
    '隧道.html': { graphType: '隧道', nodeCount: '500', jsonPath: '../relationship/隧道.json', title: '隧道 知识图谱', hasVariants: false }
};

/**
 * 获取当前页面配置（增强版）
 * @returns {Object} 页面配置对象
 */
function getCurrentPageConfig() {
    var pathname = window.location.pathname;
    var href = window.location.href;
    var currentPage = null;

    console.log('=== 页面配置匹配调试 ===');
    console.log('pathname:', pathname);
    console.log('href:', href);

    // 策略1: 从pathname提取并解码
    try {
        currentPage = pathname.split('/').pop();
        currentPage = decodeURIComponent(currentPage);
        console.log('策略1 (pathname+decode):', currentPage);
        if (PAGE_CONFIG[currentPage]) {
            console.log('✓ 匹配成功 (策略1)');
            return PAGE_CONFIG[currentPage];
        }
    } catch(e) {
        console.warn('策略1失败:', e);
    }

    // 策略2: 从href提取并解码
    try {
        var hrefParts = href.split('/');
        currentPage = hrefParts[hrefParts.length - 1];
        currentPage = currentPage.split('?')[0].split('#')[0];
        currentPage = decodeURIComponent(currentPage);
        console.log('策略2 (href+decode):', currentPage);
        if (PAGE_CONFIG[currentPage]) {
            console.log('✓ 匹配成功 (策略2)');
            return PAGE_CONFIG[currentPage];
        }
    } catch(e) {
        console.warn('策略2失败:', e);
    }

    // 策略3: 不解码直接匹配
    try {
        currentPage = pathname.split('/').pop();
        console.log('策略3 (pathname原始):', currentPage);
        if (PAGE_CONFIG[currentPage]) {
            console.log('✓ 匹配成功 (策略3)');
            return PAGE_CONFIG[currentPage];
        }
    } catch(e) {
        console.warn('策略3失败:', e);
    }

    // 策略4: 使用escape解码（处理某些浏览器的特殊编码）
    try {
        currentPage = pathname.split('/').pop();
        currentPage = unescape(currentPage);
        console.log('策略4 (unescape):', currentPage);
        if (PAGE_CONFIG[currentPage]) {
            console.log('✓ 匹配成功 (策略4)');
            return PAGE_CONFIG[currentPage];
        }
    } catch(e) {
        console.warn('策略4失败:', e);
    }

    // 策略5: 模糊匹配（提取关键字）
    try {
        currentPage = pathname.split('/').pop();
        var decoded = decodeURIComponent(currentPage);
        console.log('策略5 (模糊匹配):', decoded);

        var keys = Object.keys(PAGE_CONFIG);
        for (var i = 0; i < keys.length; i++) {
            // 提取基础名称（去除500/1000/all后缀）
            var baseKey = keys[i].replace(/(500|1000)\.html$/, '.html');
            var baseDecoded = decoded.replace(/(500|1000)\.html$/, '.html');

            if (keys[i] === decoded || baseKey === baseDecoded) {
                console.log('✓ 模糊匹配成功:', keys[i]);
                return PAGE_CONFIG[keys[i]];
            }
        }
    } catch(e) {
        console.warn('策略5失败:', e);
    }

    // 所有策略都失败，显示详细错误信息
    console.error('❌ 所有匹配策略都失败');
    console.log('提取的文件名:', currentPage);
    console.log('前10个可用配置:');
    Object.keys(PAGE_CONFIG).slice(0, 10).forEach(function(key) {
        console.log('  -', key, '(字符编码:', Array.from(key).map(function(c) {
            return c.charCodeAt(0);
        }).join(',') + ')');
    });

    if (currentPage) {
        console.log('当前文件名字符编码:', Array.from(currentPage).map(function(c) {
            return c.charCodeAt(0);
        }).join(','));
    }

    return {
        graphType: 'unknown',
        nodeCount: '500',
        jsonPath: '../relationship/default.json',
        title: '知识图谱 - 未找到配置'
    };
}
