// 图谱查看器工具类
const GraphViewer = {
    /**
     * 初始化图谱查看器
     * @param {Object} config - 配置对象
     * @param {string} config.graphType - 图谱类型（如 '上下位', '产出' 等）
     * @param {string} config.nodeCount - 节点数量（'500', '1000', 'all'）
     * @param {string} config.jsonPath - JSON 数据文件路径
     * @param {boolean} config.hasVariants - 是否有多个版本（500/1000/all）
     */
    init: function(config) {
        this.graphType = config.graphType;
        this.nodeCount = config.nodeCount;
        this.jsonPath = config.jsonPath;
        this.hasVariants = config.hasVariants !== false;
        this.graphApp = null;

        this.showLoadingState();
        this.initGraph();
        this.highlightCurrentButton();
        this.checkNodeSelection();
    },

    /**
     * 显示加载状态
     */
    showLoadingState: function() {
        const graphArea = document.getElementById('graphArea');
        if (graphArea) {
            graphArea.classList.add('loading');
        }
    },

    /**
     * 隐藏加载状态
     */
    hideLoadingState: function() {
        const graphArea = document.getElementById('graphArea');
        if (graphArea) {
            setTimeout(() => {
                graphArea.classList.remove('loading');
            }, 500);
        }
    },

    /**
     * 检查并隐藏不需要的节点选择器
     */
    checkNodeSelection: function() {
        if (!this.hasVariants) {
            var nodeSelection = document.getElementById('nodeSelection');
            if (nodeSelection) {
                nodeSelection.style.display = 'none';
            }
        }
    },

    /**
     * 初始化图谱
     */
    initGraph: function() {
        igraph.i18n.setLanguage("chs");
        var self = this;

        this.graphApp = new igraph.GraphNavigator(
            document.getElementById('graphArea'),
            'LIGHT'
        );

        this.graphApp.loadGson(this.jsonPath, {
            "onGetNodeDescription": function (node) {
                return self.formatNodeDescription(node);
            }
        }, function () {
            // 图谱加载完成回调
            self.hideLoadingState();
            self.setupNodeInteraction();
            console.log('✓ 图谱加载完成');
        });
    },

    /**
     * 格式化节点描述
     * @param {Object} node - 节点对象
     * @returns {string} HTML 格式的描述
     */
    formatNodeDescription: function(node) {
        var description = "<div class='node-info-container'>";

        // 节点图片
        if (node.image !== undefined) {
            description += "<div class='node-image'>";
            description += "<img src='" + node.image + "' alt='" + node.label + "' width='150'/>";
            description += "</div>";
        }

        // 节点标题
        description += "<div class='node-title'>";
        description += "<strong>" + node.label + "</strong>";
        description += "<span class='node-id'>[" + node.id + "]</span>";
        description += "</div>";

        // 节点详细信息
        if (node.info !== undefined) {
            description += "<div class='node-details'>" + node.info + "</div>";
        } else if (node.title !== undefined) {
            description += "<div class='node-details'>" + node.title + "</div>";
        }

        description += "</div>";
        return description;
    },

    /**
     * 设置节点交互
     */
    setupNodeInteraction: function() {
        var self = this;

        // 监听节点点击事件
        if (this.graphApp && this.graphApp.network) {
            this.graphApp.network.on('click', function(params) {
                if (params.nodes.length > 0) {
                    var nodeId = params.nodes[0];
                    self.handleNodeClick(nodeId);
                }
            });

            // 监听节点悬停事件
            this.graphApp.network.on('hoverNode', function(params) {
                document.body.style.cursor = 'pointer';
            });

            this.graphApp.network.on('blurNode', function(params) {
                document.body.style.cursor = 'default';
            });
        }
    },

    /**
     * 处理节点点击事件
     * @param {string} nodeId - 节点ID
     */
    handleNodeClick: function(nodeId) {
        try {
            // 获取节点数据
            var nodeData = this.graphApp.getNodeById(nodeId);

            if (nodeData) {
                // 保存到 localStorage 供主页面使用
                this.saveNodeToStorage(nodeData);

                // 添加视觉反馈
                this.showNodeClickFeedback(nodeData.label);

                console.log('节点被点击:', nodeData.label);
            }
        } catch (e) {
            console.error('处理节点点击时出错:', e);
        }
    },

    /**
     * 保存节点到 localStorage
     * @param {Object} nodeData - 节点数据
     */
    saveNodeToStorage: function(nodeData) {
        try {
            var stored = localStorage.getItem("nodesData");
            var nodesArray = stored ? JSON.parse(stored) : [];

            // 检查是否已存在
            var exists = nodesArray.some(function(item) {
                return item.id === nodeData.id;
            });

            if (!exists) {
                // 添加到数组开头
                nodesArray.unshift({
                    id: nodeData.id,
                    label: nodeData.label,
                    timestamp: new Date().getTime()
                });

                // 只保留最新的20个
                if (nodesArray.length > 20) {
                    nodesArray = nodesArray.slice(0, 20);
                }

                localStorage.setItem("nodesData", JSON.stringify(nodesArray));
            }
        } catch (e) {
            console.error('保存节点数据时出错:', e);
        }
    },

    /**
     * 显示节点点击反馈
     * @param {string} label - 节点标签
     */
    showNodeClickFeedback: function(label) {
        // 创建临时提示
        var feedback = document.createElement('div');
        feedback.className = 'node-click-feedback';
        feedback.textContent = '✓ 已记录: ' + label;
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, rgba(0, 217, 255, 0.95) 0%, rgba(147, 51, 234, 0.95) 100%);
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            font-family: 'DM Sans', sans-serif;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 4px 16px rgba(0, 217, 255, 0.4);
            z-index: 10000;
            animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            pointer-events: none;
        `;

        document.body.appendChild(feedback);

        // 3秒后移除
        setTimeout(function() {
            feedback.style.animation = 'slideOutRight 0.3s cubic-bezier(0.4, 0, 1, 1)';
            setTimeout(function() {
                if (feedback.parentNode) {
                    feedback.parentNode.removeChild(feedback);
                }
            }, 300);
        }, 3000);
    },

    /**
     * 选择节点数量
     * @param {string} count - 节点数量（'500', '1000', 'all'）
     */
    selectNodes: function(count) {
        if (!this.hasVariants) {
            console.log('此页面没有其他版本');
            return;
        }

        var buttons = document.querySelectorAll('.dropdown-content button');
        buttons.forEach(function(button) {
            button.classList.remove('selected');
        });

        var filename = this.getFilename(count);
        document.getElementById('button' + (count === 'all' ? 'All' : count)).classList.add('selected');

        // 添加页面切换动画
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s';

        setTimeout(function() {
            window.location.href = filename;
        }, 300);
    },

    /**
     * 根据节点数量获取文件名
     * @param {string} count - 节点数量
     * @returns {string} 文件名
     */
    getFilename: function(count) {
        if (count === 'all') {
            return this.graphType + '.html';
        }
        return this.graphType + count + '.html';
    },

    /**
     * 高亮当前选中的按钮
     */
    highlightCurrentButton: function() {
        var buttonId = this.nodeCount === 'all' ? 'buttonAll' : 'button' + this.nodeCount;
        var button = document.getElementById(buttonId);
        if (button) {
            button.classList.add('selected');
        }
    }
};

// 全局函数供HTML调用
function selectNodes(count) {
    GraphViewer.selectNodes(count);
}

// 添加CSS动画（通过 JavaScript 注入）
(function() {
    var style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }

        .node-info-container {
            text-align: center;
        }

        .node-image {
            margin-bottom: 12px;
        }

        .node-image img {
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .node-title {
            margin-bottom: 12px;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--color-glass-border);
        }

        .node-title strong {
            font-size: 16px;
            display: block;
            margin-bottom: 4px;
        }

        .node-id {
            font-size: 12px;
            opacity: 0.7;
            font-family: 'JetBrains Mono', monospace;
        }

        .node-details {
            text-align: left;
            line-height: 1.6;
        }
    `;
    document.head.appendChild(style);
})();
