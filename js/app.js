// 数据管理
const AppData = {
    nodesData: [],

    loadFromStorage() {
        const stored = localStorage.getItem("nodesData");
        this.nodesData = stored ? JSON.parse(stored) : [];
    }
};

// UI 组件
const UI = {
    loadInterestContent() {
        const grid = document.getElementById("interestGrid");
        AppData.loadFromStorage();

        grid.innerHTML = "";

        if (AppData.nodesData && AppData.nodesData.length > 0) {
            AppData.nodesData.slice(0, 20).forEach((item, index) => {
                const div = document.createElement("div");
                div.className = "interest-item";
                div.textContent = item.label;
                div.onclick = () => this.handleInterestClick(item);
                div.style.animation = `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.03}s backwards`;
                grid.appendChild(div);
            });
        } else {
            const placeholder = document.createElement("div");
            placeholder.className = "interest-item";
            placeholder.style.gridColumn = "1 / -1";
            placeholder.textContent = "暂无数据";
            placeholder.style.opacity = "0.5";
            grid.appendChild(placeholder);
        }
    },

    handleInterestClick(item) {
        console.log("点击了感兴趣内容:", item.label);
    },

    updateButtonState(selectedButton, buttonGroup) {
        const buttons = document.querySelectorAll(buttonGroup);
        buttons.forEach(btn => btn.classList.remove('selected'));
        selectedButton.classList.add('selected');
    },

    showLoadingState() {
        const overlay = document.getElementById('loadingOverlay');
        overlay.classList.add('active');
        setTimeout(() => {
            overlay.classList.remove('active');
        }, 500);
    }
};

// 内容管理
const ContentManager = {
    showGraphContent(page, element) {
        UI.showLoadingState();

        const iframe = document.getElementById('iframeContent');
        iframe.src = page;

        UI.updateButtonState(element, '.graph-button');

        document.querySelectorAll('#topMenu button').forEach(btn =>
            btn.classList.remove('selected')
        );
    },

    showContent(page, element) {
        UI.showLoadingState();

        const iframe = document.getElementById('iframeContent');
        iframe.src = page;

        UI.updateButtonState(element, '#topMenu > .menu-item > button');

        document.querySelectorAll('.graph-button').forEach(btn =>
            btn.classList.remove('selected')
        );
    }
};

// 全局函数
function showGraphContent(page, element) {
    ContentManager.showGraphContent(page, element);
}

function showContent(page, element) {
    ContentManager.showContent(page, element);
}

// 应用初始化
const App = {
    init() {
        UI.loadInterestContent();

        setInterval(() => {
            UI.loadInterestContent();
        }, 2000);

        console.log("🚀 Knowledge Graph Viewer initialized");
    }
};

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
