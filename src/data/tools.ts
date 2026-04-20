// 工具数据 - 按分类组织
// 更新：2026-04-19，小欧完成全部字段补充
// 包含评分、定价、优缺点、适用人群、Affiliate链接

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
  rating: number;        // 0-5，支持半星，如 4.5
  pricing: string;       // 免费 / 付费 / 免费+订阅
  commissionRate: number; // 佣金率，0.0-1.0（如 0.1 表示 10%），用于热门工具排序
  features: string[];    // 核心功能，3-5条
  pros: string[];        // 优点，2-4条
  cons: string[];        // 缺点，2-4条
  targetAudience: string; // 适用人群，1-2句
  affiliateUrl: string;  // Affiliate 推广链接（带追踪参数）
}

export interface Category {
  id: string;
  name: string;
  icon: string;   // emoji 图标
  description: string;
}

export const categories: Category[] = [
  { id: 'llm',   name: '大语言模型', icon: '🧠', description: '通用对话与推理 AI' },
  { id: 'code',  name: '编程助手',   icon: '💻', description: '代码生成与调试' },
  { id: 'image', name: '图像生成',   icon: '🎨', description: '文生图与图像编辑' },
  { id: 'video', name: '视频生成',   icon: '🎬', description: 'AI 视频创作' },
  { id: 'audio', name: '音频处理',   icon: '🎵', description: '语音合成与识别' },
  { id: 'search',name: 'AI 搜索',   icon: '🔍', description: '智能搜索与研究' },
  { id: 'docs',  name: '文档/效率', icon: '📄', description: 'PPT、白板与效率工具' },
  { id: 'other', name: '其他工具',   icon: '🛠️', description: '设计、写作与综合工具' },
];

export const tools: Tool[] = [

  // =====================
  // 🧠 大语言模型
  // =====================

  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'ChatGPT 是 OpenAI 开发的对话式 AI，基于 GPT 系列大语言模型，支持多轮对话、代码生成、内容创作等任务，是目前全球最流行的 AI 对话工具之一。免费版基于 GPT-3.5，付费版（Plus）可使用 GPT-4o 及高级语音模式。',
    category: 'llm',
    url: 'https://chat.openai.com',
    tags: ['对话', '推理', '写作'],
    rating: 4.5,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      '多轮连续对话，支持上下文记忆',
      '代码生成、调试与解释',
      '文章撰写、翻译与摘要',
      'GPT-4o 多模态理解（图像、语音）',
      '高级语音模式，实时对话交互'
    ],
    pros: [
      '生态最完善，插件、API、ChatGPT Team/Enterprise 多层体系',
      'GPT-4o 发布后多模态能力大幅提升',
      '用户基数最大，社区资料丰富'
    ],
    cons: [
      '免费版只能使用 GPT-3.5，能力有限',
      '国内访问需要魔法，OpenAI API 需信用卡',
      '部分场景回答过于保守，有安全过滤'
    ],
    targetAudience: '通用用户、学生、开发者、内容创作者、企业团队',
    affiliateUrl: 'https://chat.openai.com'
  },

  {
    id: 'claude',
    name: 'Claude',
    description: 'Claude 由 Anthropic 开发，以长上下文窗口和严谨的分析能力著称，擅长编程辅助、长文档分析、创意写作。相比其他对话 AI，Claude 更加注重安全性和对齐训练，输出风格偏向详尽、有条理。',
    category: 'llm',
    url: 'https://claude.ai',
    tags: ['编程', '分析', '长文本'],
    rating: 4.5,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      '支持 200K token 超长上下文，可分析整本书籍或代码库',
      '编程能力极强，支持代码补全、调试、重构',
      '长文档总结与分析，输出结构清晰',
      '支持上传文件（PDF、CSV、代码等）',
      'Artifact 功能：直接生成可交互网页、文稿等'
    ],
    pros: [
      '上下文窗口超大，适合处理大型文档和代码库',
      '输出风格严谨有条理，适合专业场景',
      'Artifact 功能让 AI 生成内容直接可用',
      '安全对齐做得最好，回答负责任'
    ],
    cons: [
      '免费版有使用限制，高频使用需订阅 Pro',
      '国内访问同样需要魔法',
      '实时信息获取能力弱于 GPT-4o'
    ],
    targetAudience: '开发者、研究人员、律师、写作者、专业分析师',
    affiliateUrl: 'https://claude.ai'
  },

  {
    id: 'gemini',
    name: 'Gemini',
    description: 'Gemini 是 Google DeepMind 开发的多模态 AI，支持文本、图像、音频、视频的跨模态理解和生成。集成 Google 生态，通过 Google App 直接使用或 API 接入。适合需要实时搜索、文件分析、跨模态内容的用户，国内可直接访问（部分高级功能需魔法）。',
    category: 'llm',
    url: 'https://gemini.google.com',
    tags: ['多模态', '搜索', 'Google'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费',
    features: [
      '原生多模态：文本、图像、音视频统一理解',
      '集成 Google 搜索，实时获取最新信息',
      '支持上传文档、图片、代码文件',
      '与 Google Docs、Sheets 等办公套件联动',
      '支持 150+ 国家，多语言能力优秀'
    ],
    pros: [
      '完全免费，对国内用户友好（可直接访问）',
      '实时搜索能力强，信息时效性好',
      'Google 生态深度集成，Gemma 开源模型丰富'
    ],
    cons: [
      '高级功能（Ultra）需付费，国内暂未完全开放',
      '复杂推理任务稍弱于 GPT-4o 和 Claude',
      '产品迭代快，部分功能稳定性有待提升'
    ],
    targetAudience: '需要实时信息的用户、Google 生态用户、国内用户',
    affiliateUrl: 'https://gemini.google.com'
  },

  {
    id: 'deepseek',
    name: 'DeepSeek',
    description: 'DeepSeek 是中国大模型公司开发的开源推理大模型，以极低的训练成本实现了与 GPT-4 相近的推理能力。支持超长上下文（128K），开源模型可本地部署，API 价格极具竞争力，受到开发者广泛青睐。',
    category: 'llm',
    url: 'https://www.deepseek.com',
    tags: ['开源', '推理', '国产'],
    rating: 4.5,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      'DeepSeek-V3 / R1 系列开源模型，性能对标 GPT-4',
      'API 价格极低（约为 GPT-4 的 1/30）',
      '支持 128K 超长上下文',
      '代码能力突出，编程任务表现优异',
      '开源可本地部署，数据完全自主可控'
    ],
    pros: [
      '性价比最高，API 成本极低',
      '开源模型可私有化部署，适合企业',
      '代码能力顶尖，超越多数闭源模型',
      '国内可直接访问，无访问障碍'
    ],
    cons: [
      '纯推理能力（R1）与 GPT-4o 相当但非全面超越',
      '生态工具链不如 OpenAI 完善',
      '网页版功能相对简单'
    ],
    targetAudience: '开发者、企业用户、重视成本的用户、国内用户',
    affiliateUrl: 'https://platform.deepseek.com'
  },

  {
    id: 'kimi',
    name: 'Kimi',
    description: 'Kimi 是月之暗面（Moonshot AI）推出的国产大模型产品，最大亮点是支持 20 万字超长上下文，可一次性处理整本长书或上百份文档，在中文对话、法律文档分析、论文阅读等场景表现出色。交互界面简洁流畅，无需魔法即可访问，对需要处理大量文本的用户（法务、学术研究者、内容创作者）非常友好。',
    category: 'llm',
    url: 'https://kimi.moonshot.cn',
    tags: ['长文本', '国产', '中文'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费',
    features: [
      '支持 20 万字超长上下文，可处理整本长书',
      '中文理解能力强，适合中文写作场景',
      '联网搜索模式，实时获取网络信息',
      '支持上传 PDF、Word、图片等文件',
      'Kimi+ 智能体市场，复用各类专业助手'
    ],
    pros: [
      '超长上下文是最大亮点，处理长文档无需分段',
      '国内访问流畅，中文体验好',
      '免费使用，无额度限制',
      '产品体验打磨细致，交互友好'
    ],
    cons: [
      '复杂推理能力不如 Claude 和 GPT-4',
      '编程辅助能力偏弱',
      '不具备 Claude 那样的 Artifact 级内容生成'
    ],
    targetAudience: '需要处理长文档的用户、学生、研究者、国内用户',
    affiliateUrl: 'https://kimi.moonshot.cn'
  },

  // =====================
  // 💻 编程助手
  // =====================

  {
    id: 'cursor',
    name: 'Cursor',
    description: 'Cursor 是一款专为 AI 时代打造的代码编辑器，基于 VS Code 定制，内置 GPT-4o、Claude 3.5 等顶级模型，支持代码补全、整行重写、多文件编辑、对话式调试。相比传统 IDE，Cursor 能更深度地理解项目上下文，显著提升编程效率。',
    category: 'code',
    url: 'https://cursor.sh',
    tags: ['IDE', '编程', 'AI补全'],
    rating: 4.5,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      '内置多个顶级模型（GPT-4o、Claude 3.5 Sonnet）',
      '多文件编辑：AI 理解整个项目上下文',
      'AI 对话模式：提问、调试、重构均可',
      '智能补全：整行甚至整函数补全',
      '光标追踪（Cursor-Follow）：预测下一步编辑'
    ],
    pros: [
      '项目级上下文理解，单文件到多文件均可',
      '订阅价格合理（$20/月），性价比高',
      '基于 VS Code，插件生态无缝迁移',
      '界面简洁，上手快'
    ],
    cons: [
      '团队协作功能弱于传统 IDE',
      '大型项目（如 monorepo）有时上下文处理不够精准',
      '对部分语言和框架的优化不如 JetBrains 系'
    ],
    targetAudience: '独立开发者、初创团队、学生、需要快速编码的用户',
    affiliateUrl: 'https://cursor.sh'
  },

  {
    id: 'windsurf',
    name: 'Windsurf',
    description: 'Windsurf 是 Codeium 推出的 AI 代码编辑器，被称为「全球首款 Agentic IDE」，支持多文件级编辑、Agent 模式自主规划任务、Flow 模式追踪开发意图。提供免费版，订阅版解锁高级模型和无限使用。',
    category: 'code',
    url: 'https://codeium.com/windsurf',
    tags: ['IDE', '编程', 'Agent'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      'Agent 模式：AI 自主分解任务并逐步执行',
      'Flow 模式：追踪开发意图，理解工作流',
      '多文件编辑，支持整个项目的变更',
      '内置代码搜索和语义理解',
      '免费版提供基础 AI 功能'
    ],
    pros: [
      'Agent 能力在同类产品中突出',
      '免费版功能丰富，门槛低',
      'Codeium 背书，社区资源丰富'
    ],
    cons: [
      '发布较新，稳定性偶有问题',
      '高级模型需付费，免费版有限制',
      '生态不如 Cursor 成熟'
    ],
    targetAudience: '想体验 Agent 编程的开发者、预算有限的个人开发者',
    affiliateUrl: 'https://codeium.com/windsurf'
  },

  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'GitHub Copilot 是微软与 OpenAI 合作的 AI 编程助手，直接集成在 VS Code、JetBrains 等主流 IDE 中，支持代码补全、注释生成代码、Bug 修复建议。按月订阅，是目前企业使用最广泛的 AI 编程工具。',
    category: 'code',
    url: 'https://github.com/features/copilot',
    tags: ['补全', 'GitHub', '微软'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '订阅',
    features: [
      'IDE 深度集成：VS Code、JetBrains、Neovim 等',
      '实时代码补全，支持整行和函数级建议',
      '注释生成代码（Natural Language to Code）',
      '多语言支持，覆盖主流编程语言',
      '企业版提供政策管理和使用分析'
    ],
    pros: [
      '企业市场占有率最高，生态最成熟',
      'IDE 集成无缝，VS Code 原生体验',
      '多语言覆盖最广，上下文理解好'
    ],
    cons: [
      '个人版 $10/月，性价比不如 Cursor',
      '复杂项目级理解不如 Cursor',
      '部分代码建议质量一般，需人工筛选'
    ],
    targetAudience: '企业团队、已使用 JetBrains/VS Code 的开发者',
    affiliateUrl: 'https://github.com/features/copilot'
  },

  {
    id: 'trae',
    name: 'Trae',
    description: 'Trae 是字节跳动推出的 AI 编程工具，主打中文界面和免费使用，支持代码补全、多文件编辑、内置 AI 对话功能。基于国产大模型，针对中文开发场景优化，适合国内开发者快速上手。',
    category: 'code',
    url: 'https://www.trae.ai',
    tags: ['国产', 'IDE', '免费'],
    rating: 3.5,
    commissionRate: 0.05,
    pricing: '免费',
    features: [
      '全中文界面，国内开发者友好',
      '代码补全和 AI 对话功能',
      '多文件编辑支持',
      '免费使用，无额度限制',
      '内置聊天式编程助手'
    ],
    pros: [
      '完全免费，零成本体验 AI 编程',
      '中文界面降低上手门槛',
      '字节跳动技术背书'
    ],
    cons: [
      '产品新，功能丰富度和稳定性不如 Cursor',
      'AI 模型能力与国际顶尖工具有一定差距',
      '插件生态尚在建设中'
    ],
    targetAudience: '国内开发者、初学者、预算有限的团队',
    affiliateUrl: 'https://www.trae.ai'
  },

  {
    id: 'devin',
    name: 'Devin',
    description: 'Devin 是 Cognition AI 推出的全球首位 AI 软件工程师，基于自主推理和规划能力，可以独立完成从需求理解、代码编写、Bug 修复到部署上线的完整开发流程。定位为全栈自动化工程师，目前需申请排队使用。',
    category: 'code',
    url: 'https://devin.ai',
    tags: ['全栈', 'Agent', '自动化'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '付费',
    features: [
      '端到端开发：理解需求 → 写代码 → 调试 → 部署',
      'SWE-bench 基准测试表现优异',
      '内置命令行和代码编辑器',
      '支持修复 GitHub Issue',
      '可自主使用浏览器搜索资料'
    ],
    pros: [
      '目前最接近「AI 软件工程师」的产品',
      '独立完成任务能力强，减少人工干预',
      '长任务规划能力突出'
    ],
    cons: [
      '需申请排队，尚未全面开放',
      '订阅价格较高，$500/月',
      '复杂业务逻辑有时需要人工指导',
      '对特定技术栈支持有限'
    ],
    targetAudience: '企业 CTO/技术负责人、研究 AI 工程能力的团队',
    affiliateUrl: 'https://devin.ai'
  },

  // =====================
  // 🎨 图像生成
  // =====================

  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Midjourney 是目前最知名的 AI 艺术图像生成工具之一，通过 Discord 交互，支持极其丰富的艺术风格和极高的图像质量。以其独特的美学风格著称，被广泛用于插画、概念设计、品牌视觉等创意领域。免费体验次数有限，付费订阅解锁更高配额和版本。',
    category: 'image',
    url: 'https://www.midjourney.com',
    tags: ['艺术', '设计', 'Discord'],
    rating: 4.5,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      '文字生成高质量艺术图像',
      '丰富的艺术风格库，一键切换流派',
      '--cref（角色参考）、--sref（风格参考）等高级功能',
      'V6 版本支持更精确的文字渲染',
      '社区分享：Discord 频道查看他人作品'
    ],
    pros: [
      '艺术风格独树一帜，社区氛围活跃',
      '图像质量顶级，商业可用性强',
      '持续迭代，V6 版本提升显著'
    ],
    cons: [
      '依赖 Discord，操作习惯需适应',
      '需要订阅才能高频使用',
      '提示词编写有一定学习成本'
    ],
    targetAudience: '设计师、艺术家、品牌创作者、概念设计师',
    affiliateUrl: 'https://www.midjourney.com'
  },

  {
    id: 'dall-e',
    name: 'DALL-E',
    description: 'DALL-E 是 OpenAI 开发的图像生成模型，最新版为 DALL-E 3，深度集成 ChatGPT，支持极其精确的提示词理解和文字渲染能力。生成的图像写实度高，适合产品图、UI 设计、内容配图等商业应用场景。',
    category: 'image',
    url: 'https://openai.com/dall-e-3',
    tags: ['设计', '创意', 'OpenAI'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      'ChatGPT 深度集成，提示词优化由 AI 完成',
      '文字渲染精准，告别之前版本乱码问题',
      '生成图像安全过滤，适合商业环境',
      '通过 ChatGPT Plus 直接使用',
      '支持图像编辑和变体生成'
    ],
    pros: [
      '提示词门槛低，ChatGPT 帮你写提示词',
      '安全过滤好，商业使用放心',
      'OpenAI 生态，体验一致'
    ],
    cons: [
      '风格丰富度不如 Midjourney',
      '写实风为主，艺术风格偏弱',
      '需订阅 ChatGPT Plus 才能用'
    ],
    targetAudience: '内容创作者、产品经理、需要商业配图的用户',
    affiliateUrl: 'https://openai.com/dall-e-3'
  },

  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'Stable Diffusion 是 Stability AI 推出的开源图像生成模型，支持本地部署和自定义训练。用户可自由使用 LoRA、ControlNet 等插件进行风格定制和精细控制，社区生态极其丰富，是 AI 绘画爱好者最常用的开源解决方案。',
    category: 'image',
    url: 'https://stability.ai',
    tags: ['开源', '本地', '自定义'],
    rating: 4.5,
    commissionRate: 0.05,
    pricing: '免费',
    features: [
      '完全开源，可本地部署，零使用成本',
      'LoRA、ControlNet、IP-Adapter 等插件生态',
      'WebUI（Automatic1111、ComfyUI）界面丰富',
      '支持自定义模型训练',
      '生成速度较快，RTX 3060 即可本地运行'
    ],
    pros: [
      '免费开源，无使用限制和订阅费用',
      '完全隐私保护，图片不离开本地',
      '插件生态最丰富，定制化能力极强',
      '社区活跃，模型资源海量'
    ],
    cons: [
      '上手门槛高，需要一定技术基础',
      '硬件要求（GPU）限制了部分用户',
      '生成质量依赖模型和提示词技巧'
    ],
    targetAudience: 'AI 绘画爱好者、开发者、设计师、有隐私需求的用户',
    affiliateUrl: 'https://stability.ai'
  },

  {
    id: 'flux',
    name: 'Flux',
    description: 'Flux 是 Black Forest Labs 推出的新一代开源图像生成模型，包含 Flux.1 Dev、Flux.1 Schnell 等多个版本，在图像细节、提示词遵循度方面表现优异，被认为是目前开源图像模型的天花板。支持在线使用和本地部署。',
    category: 'image',
    url: 'https://flux.ai',
    tags: ['开源', '高质量', '新模型'],
    rating: 4.5,
    commissionRate: 0.05,
    pricing: '免费',
    features: [
      '图像细节和提示词遵循度是目前开源最强',
      '支持在线平台和本地部署',
      '多个版本（Dev 适合研发，Schnell 适合快速生成）',
      '人像质量高，手指等难题基本解决',
      'CNV（Continuous Vector）架构创新'
    ],
    pros: [
      '开源模型中质量天花板',
      '人像、手部等难题解决程度高',
      '提示词遵循度优于 SDXL',
      '有在线平台可直接使用'
    ],
    cons: [
      '在线平台算力成本高，生成需排队',
      '本地部署硬件要求高（需高端 GPU）',
      '生态（插件、模型）还在建设中'
    ],
    targetAudience: 'AI 图像研究者、高质量需求的用户、有技术能力的创作者',
    affiliateUrl: 'https://flux.ai'
  },

  {
    id: 'recraft',
    name: 'Recraft',
    description: 'Recraft 是一款专注于矢量图像和品牌设计的 AI 工具，可以生成风格一致的系列图像，并支持矢量格式导出（SVG）。对于需要统一视觉风格的品牌方、设计师来说非常实用——Logo、图标、品牌插画都能保持视觉一致性。提供免费额度，订阅版解锁更多生成次数，适合设计团队和品牌运营者使用。',
    category: 'image',
    url: 'https://www.recraft.ai',
    tags: ['设计', '矢量', '品牌'],
    rating: 3.5,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      'AI 生成矢量图像（SVG 导出）',
      '风格一致系列图生成（保持视觉统一）',
      '位图（PNG/JPG）导出',
      '内置多种设计风格预设',
      '支持自定义风格训练（上传参考图）'
    ],
    pros: [
      '唯一专注矢量生成的 AI 工具',
      '风格一致性是最大亮点',
      'SVG 导出对 UI/品牌设计很有价值'
    ],
    cons: [
      '功能相对单一，通用场景不如 MJ/SD',
      '免费额度有限',
      '图像复杂度和细节不如主流工具'
    ],
    targetAudience: '品牌设计师、UI 设计师、需要矢量素材的创作者',
    affiliateUrl: 'https://www.recraft.ai'
  },

  // =====================
  // 🎬 视频生成
  // =====================

  {
    id: 'sora',
    name: 'Sora',
    description: 'Sora 是 OpenAI 发布的文字转视频 AI 模型，能够根据文本描述生成长达 60 秒的高清视频，包含复杂场景、多角色动作和镜头运动。目前已逐步向部分用户开放测试，以其视频质量和物理世界理解能力引发广泛关注。',
    category: 'video',
    url: 'https://openai.com/sora',
    tags: ['视频', 'OpenAI', '文生视频'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      '文字描述生成最长 60 秒高清视频',
      '复杂场景理解：多角色、物体交互、物理规律',
      '视频扩展：向前或向后延续视频',
      '图像转视频（Image to Video）',
      '视频编辑：替换、扩展、场景融合'
    ],
    pros: [
      'OpenAI 品牌和技术背书',
      '视频时长领先（60s）',
      '复杂场景理解能力目前最强'
    ],
    cons: [
      '尚未全面开放，目前只向部分 Plus 用户灰度',
      '生成速度较慢',
      '版权和安全限制严格'
    ],
    targetAudience: '内容创作者、影视概念设计者、早期尝鲜者',
    affiliateUrl: 'https://openai.com/sora'
  },

  {
    id: 'runway',
    name: 'Runway',
    description: 'Runway 是 AI 视频创作领域的老牌平台，提供从文字/图片生成视频、视频编辑、绿幕抠像、运动追踪等一整套视频 AI 工具。Gen-3 模型支持高质量视频生成，被大量影视从业者和创作者用于概念视频和内容创作。',
    category: 'video',
    url: 'https://runwayml.com',
    tags: ['视频', '编辑', '创作'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      '文字/图片生成视频（Gen-3 模型）',
      '视频风格迁移和特效',
      '绿幕抠像、运动追踪等影视级功能',
      '视频延长和局部修改',
      '团队协作和项目共享'
    ],
    pros: [
      '功能最全面的 AI 视频平台',
      '影视级功能（绿幕追踪）专业可用',
      'Gen-3 视频质量优秀'
    ],
    cons: [
      '免费额度较少，高质量视频需付费',
      '相比 Sora 可灵，视频时长不占优',
      '界面较复杂，新手有学习成本'
    ],
    targetAudience: '影视从业者、专业视频创作者、需要精细控制的用户',
    affiliateUrl: 'https://runwayml.com'
  },

  {
    id: 'pika',
    name: 'Pika',
    description: 'Pika 是一款专注于快速生成和编辑视频的 AI 工具，支持文字转视频、图片转视频、视频局部修改（Region PWA）。操作简单、上手快，适合需要快速生成短视频内容、自媒体创作者和社交媒体运营者使用。',
    category: 'video',
    url: 'https://pika.art',
    tags: ['视频', '快速', '社交'],
    rating: 3.5,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      '文字生成视频，上手极简',
      '图片转视频（让静态图片动起来）',
      '局部修改（Region PWA）：局部重新生成',
      '多种风格预设（动漫、写实等）',
      '视频时长最高 3 分钟'
    ],
    pros: [
      '操作最简单，门槛最低',
      '生成速度快，适合快速迭代',
      '免费额度较充足'
    ],
    cons: [
      '视频质量不如 Runway 和可灵',
      '复杂场景处理能力有限',
      '功能丰富度不如竞品'
    ],
    targetAudience: '自媒体创作者、社交媒体运营者、快速原型验证',
    affiliateUrl: 'https://pika.art'
  },

  {
    id: 'kling',
    name: '可灵',
    description: '可灵（Kling）是快手可灵大模型团队开发的 AI 视频生成工具，基于自研视频生成架构，支持高质量文字转视频和图片转视频。生成的视频动作自然流畅，支持生成 3 分钟视频，在国产 AI 视频工具中处于领先水平。',
    category: 'video',
    url: 'https://klingai.com',
    tags: ['国产', '视频', '快手'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      '文字生成视频，支持复杂提示词',
      '图片生成视频（图生视频）',
      '视频时长最高 3 分钟（订阅版）',
      '动作流畅，人物一致性保持好',
      '提供 Web 端和 App 使用'
    ],
    pros: [
      '国产之光，视频质量对标国际水平',
      '动作自然，人物一致性优秀',
      '国内访问流畅，无障碍',
      '免费额度诚意足'
    ],
    cons: [
      '复杂镜头运动有时不够自然',
      '生态和插件不如 Runway 丰富',
      '作为新产品还在快速迭代中'
    ],
    targetAudience: '国内创作者、自媒体、视频营销从业者',
    affiliateUrl: 'https://klingai.com'
  },

  {
    id: 'haiper',
    name: 'Haiper',
    description: 'Haiper 是专注于视频生成和图像增强的 AI 平台，支持文字转视频、图片转视频、视频重绘和超分辨率。核心技术基于自研的视频生成模型，界面简洁，适合创作者快速生成和优化视频内容。',
    category: 'video',
    url: 'https://haiper.ai',
    tags: ['视频', '图像', '增强'],
    rating: 3.5,
    commissionRate: 0.05,
    pricing: '免费',
    features: [
      '文字转视频生成',
      '图片转视频（图生视频）',
      '视频重绘和风格转换',
      '视频超分辨率（增强画质）',
      '多风格视频生成'
    ],
    pros: [
      '完全免费，无使用限制',
      '视频增强功能实用',
      '界面简洁，上手容易'
    ],
    cons: [
      '视频质量不如 Runway 和可灵',
      '产品相对小众，社区资源少',
      '生成速度一般'
    ],
    targetAudience: '预算有限的用户、需视频增强的创作者',
    affiliateUrl: 'https://haiper.ai'
  },

  // =====================
  // 🎵 音频处理
  // =====================

  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'ElevenLabs 是全球领先的 AI 语音合成平台，提供的声音克隆、多语言配音、情感合成技术处于行业顶尖水平。支持几十种语言和数百种声音风格，被广泛应用于有声书配音、视频旁白、游戏语音等场景。',
    category: 'audio',
    url: 'https://elevenlabs.io',
    tags: ['语音', '配音', '克隆'],
    rating: 4.5,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      '声音克隆：用 1 分钟音频复刻任何音色',
      '多语言配音：文本转自然人声，40+ 语言',
      '情感合成：开心、悲伤、兴奋等情感控制',
      '语音转语音（Voice API）',
      '有声书和播客制作工具'
    ],
    pros: [
      '声音质量行业顶尖，听感最接近真人',
      '声音克隆技术成熟，效果逼真',
      'API 完善，适合开发者集成'
    ],
    cons: [
      '免费额度有限，高质量配音需付费',
      '中文语音仍有轻微机械感',
      '部分声音克隆有伦理争议'
    ],
    targetAudience: '内容创作者、游戏开发者、有声书制作人、有配音需求的企业',
    affiliateUrl: 'https://elevenlabs.io'
  },

  {
    id: 'suno',
    name: 'Suno',
    description: 'Suno 是一款革命性的 AI 音乐生成工具，用户只需输入文字描述或歌词，即可生成包含人声和配乐的完整音乐作品。支持多种音乐风格，从流行到古典均可驾驭，普通用户也能创作专业级别的音乐，已吸引数百万用户使用。',
    category: 'audio',
    url: 'https://suno.ai',
    tags: ['音乐', '创作', 'AI作曲'],
    rating: 4.5,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      '文字生成完整歌曲（人声+伴奏）',
      '支持输入歌词，AI 匹配曲风',
      '多种音乐风格：流行、古典、说唱、电子等',
      '生成 1-2 分钟的完整音乐片段',
      'Remix 和风格变体功能'
    ],
    pros: [
      '全球最火的 AI 音乐生成工具',
      '生成质量高，歌曲结构完整',
      '任何人都能创作音乐，门槛极低'
    ],
    cons: [
      '免费版有配额限制',
      '中文歌曲生成质量不如英文',
      '商用版权需确认 Suno 政策'
    ],
    targetAudience: '音乐爱好者、内容创作者、视频创作者、播客制作者',
    affiliateUrl: 'https://suno.ai'
  },

  {
    id: 'udio',
    name: 'Udio',
    description: 'Udio 是一款新兴的 AI 音乐生成工具，与 Suno 类似，支持文字生成完整音乐和歌曲。Udio 以高质量的人声合成和丰富的音乐风格著称，操作简便，适合音乐爱好者、内容创作者快速生成背景音乐和原创歌曲。',
    category: 'audio',
    url: 'https://udio.com',
    tags: ['音乐', '创作', '新工具'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      '文字生成完整歌曲，支持自定义歌词',
      '高质量人声合成，更接近真人演唱',
      '丰富的音乐风格库',
      '歌曲可扩展和延长',
      '社区分享：听其他用户的作品'
    ],
    pros: [
      '人声质量优秀，咬字清晰',
      '风格多样，生成速度快',
      '每天免费额度充足'
    ],
    cons: [
      '比 Suno 更新，生态和社区较小',
      '复杂曲风生成质量不稳定',
      '商用政策尚在明确中'
    ],
    targetAudience: '独立音乐人、视频博主、播客、需要原创音乐的用户',
    affiliateUrl: 'https://udio.com'
  },

  {
    id: 'whisper',
    name: 'Whisper',
    description: 'Whisper 是 OpenAI 开源的语音识别模型，支持近百种语言的自动语音转文字（ASR），具有出色的多语言识别和抗噪能力。可通过 API 调用或本地部署使用，是目前开源社区最流行的语音识别解决方案。',
    category: 'audio',
    url: 'https://openai.com/index/whisper',
    tags: ['转录', '识别', '开源'],
    rating: 4.5,
    commissionRate: 0.05,
    pricing: '免费',
    features: [
      '近百种语言的语音识别',
      '强大的抗噪和方言识别能力',
      '多种模型规模（tiny 到 large-v3）',
      '支持本地部署，保护隐私',
      '可通过 OpenAI API 或开源代码使用'
    ],
    pros: [
      '完全开源免费，部署灵活',
      '识别准确率是目前开源最高',
      '隐私保护好，数据不离开本地'
    ],
    cons: [
      '需要技术背景才能部署使用',
      '纯识别工具，需配合其他工具完成完整流程',
      '实时转录需额外配置'
    ],
    targetAudience: '开发者、有隐私需求的组织、语音处理研究者',
    affiliateUrl: 'https://openai.com/index/whisper'
  },

  {
    id: 'murf',
    name: 'Murf AI',
    description: 'Murf AI 是一款专业的 AI 语音合成平台，提供 120+ 种自然人声，支持 20+ 种语言，广泛用于视频配音、有声内容制作、企业培训材料语音化等商业场景。操作简单，无需音频技术背景即可快速生成高质量配音。',
    category: 'audio',
    url: 'https://murf.ai',
    tags: ['语音', '配音', '商业'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      '120+ 种自然人声，20+ 语言',
      '文字转语音，调节语速、音调',
      '多音轨编辑，背景音乐混音',
      '适合商业视频配音',
      '团队协作和企业定制'
    ],
    pros: [
      '商业配音质量高，专业可用',
      '界面友好，非技术人员也能上手',
      '多人配音脚本功能适合企业培训'
    ],
    cons: [
      '免费体验有限，商用需订阅',
      '声音克隆功能不如 ElevenLabs',
      '价格相对较高'
    ],
    targetAudience: '企业培训部门、视频制作团队、广告营销人员',
    affiliateUrl: 'https://murf.ai'
  },

  // =====================
  // 🔍 AI 搜索
  // =====================

  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'Perplexity 是全球领先的 AI 搜索引擎，以「答案引擎」定位替代传统关键词搜索，返回带有引用来源的精简答案，而非传统链接列表。实时联网能力强，适合学术研究、行业调研、新闻追踪等知识密集型搜索需求。',
    category: 'search',
    url: 'https://www.perplexity.ai',
    tags: ['搜索', '研究', '引用'],
    rating: 4.5,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      'AI 生成带来源引用的答案',
      '实时联网，追踪最新信息',
      '多语言支持，中英文搜索均佳',
      'Focus 模式：学术、YouTube、Reddit 等垂直搜索',
      'Collections：保存和组织搜索结果'
    ],
    pros: [
      '答案质量高，减少二次验证时间',
      '来源透明，每个答案可追溯',
      '学术模式适合研究场景'
    ],
    cons: [
      '复杂问题有时生成不准确',
      '免费版有使用频率限制',
      'Pro 版 $20/月，价格偏高'
    ],
    targetAudience: '研究人员、学生、知识工作者、新闻追踪者',
    affiliateUrl: 'https://www.perplexity.ai'
  },

  {
    id: 'arc-search',
    name: 'Arc Search',
    description: 'Arc Search 是浏览器公司 The Browser Company 推出的 AI 搜索应用，内置于 Arc 浏览器中，支持一键生成网页摘要和完整答案。相比传统搜索，Arc Search 整合多源信息，为用户提供更结构化的搜索结果。',
    category: 'search',
    url: 'https://arc.net/goodies/arc-search',
    tags: ['搜索', '浏览器', '摘要'],
    rating: 3.5,
    commissionRate: 0.05,
    pricing: '免费',
    features: [
      'AI 一键生成完整答案摘要',
      '自动整合多个网页内容',
      '「为我阅读」：AI 总结整个搜索结果',
      '内置 Arc 浏览器，数据同步',
      '完全免费'
    ],
    pros: [
      '完全免费，无使用限制',
      'AI 摘要功能实用高效',
      '与 Arc 浏览器深度整合'
    ],
    cons: [
      '需下载 Arc 浏览器，门槛较高',
      '国内用户访问不便',
      '功能专属性强，通用性弱'
    ],
    targetAudience: 'Arc 浏览器用户、追求效率的搜索者',
    affiliateUrl: 'https://arc.net/goodies/arc-search'
  },

  {
    id: 'kafka',
    name: '纳米搜索',
    description: '纳米搜索（n.cn）是 360 推出的 AI 搜索引擎，主打「答案即结果」体验，整合多模型能力，支持文字、图片、视频等多模态搜索。针对中文搜索场景优化，与 360 全家桶生态深度整合。',
    category: 'search',
    url: 'https://www.n.cn',
    tags: ['国产', '搜索', '360'],
    rating: 3.5,
    commissionRate: 0.05,
    pricing: '免费',
    features: [
      'AI 生成搜索答案，带来源引用',
      '多模型整合（360智脑等）',
      '中文搜索优化，结果相关性高',
      '图片和视频多模态搜索',
      '完全免费，国内流畅访问'
    ],
    pros: [
      '国内访问无障碍',
      '中文搜索质量不错',
      '免费使用，零成本'
    ],
    cons: [
      '品牌口碑影响部分用户信任度',
      '国际信息覆盖不如 Perplexity',
      '功能丰富度不及顶级竞品'
    ],
    targetAudience: '国内用户、偏好中文搜索的普通用户',
    affiliateUrl: 'https://www.n.cn'
  },

  {
    id: 'devv',
    name: 'Devv AI',
    description: 'Devv AI 是面向程序员和开发者的 AI 搜索工具，专注于编程相关的技术问题搜索，能理解代码上下文并给出精准解答。支持中文检索，适合程序员在开发过程中快速查找技术文档、API 用法和解决方案。',
    category: 'search',
    url: 'https://devv.ai',
    tags: ['编程', '搜索', '开发者'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费',
    features: [
      '专为程序员设计的 AI 搜索',
      '理解代码上下文，给出精准技术答案',
      '支持 Stack Overflow、GitHub 等技术资源',
      '中文界面，中文搜索体验好',
      '免费使用，无使用限制'
    ],
    pros: [
      '技术问题搜索质量高于通用搜索引擎',
      '中文友好，国内开发者首选',
      '完全免费'
    ],
    cons: [
      '只适合技术问题，通用搜索不适用',
      '搜索范围限于已索引的技术资源',
      '产品知名度不如通用搜索工具'
    ],
    targetAudience: '程序员、开发者、技术学生',
    affiliateUrl: 'https://devv.ai'
  },

  {
    id: 'tavily',
    name: 'Tavily',
    description: 'Tavily 是一款面向 AI 应用和研究人员的搜索 API 服务，支持实时联网搜索、结构化结果输出和多语言支持。提供丰富的搜索过滤器，被广泛应用于 RAG（检索增强生成）系统中，为大模型提供实时、可靠的信息来源。',
    category: 'search',
    url: 'https://tavily.com',
    tags: ['研究', '搜索', 'API'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      '专为 AI（RAG）设计的搜索 API',
      '实时联网，返回结构化 JSON 结果',
      '搜索结果 relevance 打分，过滤低质量来源',
      '多语言支持，包括中文',
      '与主流 LLM 框架集成（LangChain 等）'
    ],
    pros: [
      'API 设计优秀，开发者友好',
      '结构化输出，适合 AI 应用',
      '免费 API 额度够个人项目用'
    ],
    cons: [
      '面向开发者，普通用户不友好',
      '需要技术能力才能集成使用',
      '作为搜索引擎普通用户用不上'
    ],
    targetAudience: 'AI 应用开发者、RAG 系统构建者、研究人员',
    affiliateUrl: 'https://tavily.com'
  },

  // =====================
  // 📄 文档/效率（新增）
  // =====================

  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'Notion AI 是 Notion 内置的 AI 助手，在文档编辑器中直接集成 AI 写作、摘要、翻译、润色等功能。无需切换工具，在日常笔记和文档工作中随时调用，大幅提升文字处理效率。',
    category: 'docs',
    url: 'https://www.notion.so',
    tags: ['文档', '笔记', 'AI'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      '文档内 AI 写作、续写、润色',
      '一键摘要和要点提取',
      '多语言翻译（100+ 语言）',
      '语气调整（专业/友好/简洁）',
      '与 Notion 笔记数据库无缝集成'
    ],
    pros: [
      '在文档内直接调用，无需切换工具',
      'Notion 生态完整，笔记+AI 一体化',
      '免费版有一定额度可用'
    ],
    cons: [
      '免费版额度有限，高频使用需付费',
      '复杂长文档处理不如专业写作工具',
      'Notion 本身有一定学习成本'
    ],
    targetAudience: '知识工作者、团队协作、笔记爱好者',
    affiliateUrl: 'https://www.notion.so'
  },

  {
    id: 'gamma',
    name: 'Gamma',
    description: 'Gamma 是一款 AI PPT 和文档生成工具，用户只需输入主题或大纲，即可自动生成美观的演示文稿和文档。内置多种设计模板，支持在线协作和演示，是传统 PowerPoint 的高效替代方案。',
    category: 'docs',
    url: 'https://gamma.app',
    tags: ['PPT', '演示', 'AI'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      '输入主题 AI 自动生成完整 PPT',
      '内置专业设计模板，视觉精美',
      '在线协作编辑，多人实时编辑',
      '一键切换主题风格',
      '支持嵌入图表、视频、网页'
    ],
    pros: [
      '生成 PPT 效率提升 10 倍以上',
      '设计质量高，无需设计基础',
      '协作功能完善，适合团队使用'
    ],
    cons: [
      '免费版有生成次数限制',
      '高度定制化时灵活度受限',
      '动画效果不如 PowerPoint 丰富'
    ],
    targetAudience: '商务人士、教师、学生、销售演示需求者',
    affiliateUrl: 'https://gamma.app'
  },

  {
    id: 'boardmix',
    name: '博思白板',
    description: '博思白板（boardmix）是一款国产 AI 白板协作工具，支持思维导图、流程图、看板、原型图等多种可视化创作，内置 AI 助手辅助内容生成和整理。适合团队头脑风暴、项目管理和创意可视化。',
    category: 'docs',
    url: 'https://boardmix.cn',
    tags: ['白板', '协作', '思维导图'],
    rating: 3.5,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      'AI 生成思维导图和流程图',
      '多人实时协作白板',
      '内置便签、画笔、图形库',
      '支持 PPT 导出',
      '丰富的模板库'
    ],
    pros: [
      '国产工具，国内访问流畅',
      '免费版功能较完整',
      'AI 辅助生成思维导图实用'
    ],
    cons: [
      '设计美观度不如 Miro',
      '国际生态插件不如竞品',
      '协作延迟偶有体验问题'
    ],
    targetAudience: '国内团队、项目管理者、教育培训',
    affiliateUrl: 'https://boardmix.cn'
  },

  {
    id: 'quark',
    name: '夸克',
    description: '夸克是阿里推出的 AI 助手和浏览器，内置大模型能力，提供智能搜索、文档处理、内容总结等功能。与浏览器深度整合，在日常网页浏览和信息获取中随时调用 AI 能力。',
    category: 'docs',
    url: 'https://www.quark.cn',
    tags: ['浏览器', '国产', '效率'],
    rating: 3.5,
    commissionRate: 0.05,
    pricing: '免费',
    features: [
      'AI 对话助手，提问即答',
      '文档总结和要点提取',
      '智能搜索，结果精准',
      '网页内容 AI 总结',
      '内置多种效率工具（扫描、翻译等）'
    ],
    pros: [
      '阿里生态，与淘宝/支付宝账号互通',
      '国内访问流畅，功能免费',
      '浏览器+AI 一体化，使用便捷'
    ],
    cons: [
      'AI 能力深度不如专业 AI 工具',
      '偏向工具箱聚合，AI 核心技术一般',
      '隐私政策需关注'
    ],
    targetAudience: '国内普通用户、日常信息获取需求',
    affiliateUrl: 'https://www.quark.cn'
  },

  {
    id: 'tongyi',
    name: '通义千问',
    description: '通义千问是阿里云自研的大语言模型，深度集成阿里云生态，支持对话、写作、编程、翻译、PPT生成等多种任务。作为国产头部大模型，对中文语境理解深入，交互流畅，适合阿里云用户和国内企业办公场景。免费使用，API 按量付费。',
    category: 'docs',
    url: 'https://tongyi.aliyun.com',
    tags: ['国产', '大模型', '阿里云'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费',
    features: [
      '多轮对话、写作、编程辅助',
      '通义听悟：会议录音转文字+摘要',
      '通义智文：长文章 AI 总结',
      '通义点曦：AI 绘画',
      'API 输出，与阿里云服务集成'
    ],
    pros: [
      '完全免费，国内无访问障碍',
      '阿里云生态集成，企业友好',
      '办公场景工具链完善'
    ],
    cons: [
      '复杂推理能力不如 GPT-4',
      '创意写作质量中等',
      '品牌影响力不如 Kimi、文心'
    ],
    targetAudience: '阿里云用户、国内企业、中文办公场景',
    affiliateUrl: 'https://tongyi.aliyun.com'
  },

  {
    id: 'ernie',
    name: '文心一言',
    description: '文心一言是百度自研的国产大模型对话产品，基于文心大模型构建，对中文理解和文学创作有深度优化。支持小说续写、商业文案、代码生成、逻辑推理等多种任务，与百度搜索深度联动可实时获取网络信息，适合中文创作者和国内办公人群。',
    category: 'docs',
    url: 'https://yiyan.baidu.com',
    tags: ['国产', '大模型', '百度'],
    rating: 3.5,
    commissionRate: 0.05,
    pricing: '免费',
    features: [
      '中文对话、写作、摘要',
      '商业文案和营销内容生成',
      '与百度搜索联动，实时信息获取',
      '开放 API 供开发者使用',
      '多种垂直场景智能体'
    ],
    pros: [
      '完全免费，国内直接访问',
      '中文文案写作场景优化',
      '百度搜索实时信息补充'
    ],
    cons: [
      '模型能力与 GPT-4 有明显差距',
      '代码生成能力偏弱',
      '产品体验打磨不如 Kimi'
    ],
    targetAudience: '中文写作需求者、国内普通用户、百度生态用户',
    affiliateUrl: 'https://yiyan.baidu.com'
  },

  // =====================
  // 🛠️ 其他工具（新增）
  // =====================

  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'Grammarly 是全球最流行的 AI 英语写作辅助工具，提供语法检查、拼写纠正、风格优化、语气调整等功能。支持浏览器插件、Word 插件和独立网页版，被超过 3000 万人用于提升英语写作质量。',
    category: 'other',
    url: 'https://grammarly.com',
    tags: ['写作', '英语', '语法'],
    rating: 4.5,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      '实时语法和拼写检查',
      '风格和语气优化建议',
      '句子重写（更清晰/更简洁/更正式）',
      '浏览器插件：全网页覆盖',
      '剽窃检测（Premium 功能）'
    ],
    pros: [
      '英语写作质量提升效果显著',
      '覆盖几乎所有写作场景（邮件、社交媒体、文档）',
      '免费版已覆盖大多数基础功能'
    ],
    cons: [
      'Premium 版价格较高（$12/月起）',
      '主要针对英语，其他语言支持弱',
      'AI 生成能力不如专业写作工具'
    ],
    targetAudience: '英语写作需求者（学生、职场人士、外贸从业者）',
    affiliateUrl: 'https://grammarly.com'
  },

  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    description: 'Beautiful.ai 是一款 AI 驱动的演示文稿生成工具，以「智能模板」为核心，用户的文字内容会自动适配专业设计布局，无需手动调整格式。适合追求设计美感但不具备设计技能的用户。',
    category: 'other',
    url: 'https://www.beautiful.ai',
    tags: ['PPT', '设计', '演示'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '订阅',
    features: [
      'AI 自动排版：输入内容自动适配最佳布局',
      '100+ 专业设计模板',
      '品牌控制：统一配色和 Logo',
      '在线协作和分享',
      '与 Slack、Google Slides 集成'
    ],
    pros: [
      '设计质量非常高，傻瓜式操作',
      '品牌管理功能适合企业',
      '自动排版彻底解放双手'
    ],
    cons: [
      '免费版不可用，需订阅',
      '价格较高（$12/人/月起）',
      'AI 生成内容能力不如 Gamma'
    ],
    targetAudience: '重视设计质量的企业、市场营销团队、商务人士',
    affiliateUrl: 'https://www.beautiful.ai'
  },

  {
    id: 'canva-ai',
    name: 'Canva AI',
    description: 'Canva 是全球最流行的在线设计平台，内置多项 AI 功能（AI 图像生成、文案助手、魔法橡皮擦等），提供社交媒体图、海报、简历、Logo 等海量模板，0 设计基础也能做出专业作品。',
    category: 'other',
    url: 'https://www.canva.com',
    tags: ['设计', '模板', 'AI'],
    rating: 4.5,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      'AI 图像生成（Text to Image）',
      'Magic Write：AI 文案助手',
      '魔法橡皮擦和图片编辑工具',
      '海量设计模板（社交媒体、海报、名片等）',
      '品牌套件：统一视觉管理'
    ],
    pros: [
      '功能最全面的在线设计工具',
      '模板数量和质量均属顶级',
      '免费版已满足大多数日常需求'
    ],
    cons: [
      '高级 AI 功能需 Pro 订阅',
      '高度复杂的专业设计仍需 PS/AI',
      '免费版有导出水印'
    ],
    targetAudience: '所有人：学生、自媒体、企业市场团队、非设计师',
    affiliateUrl: 'https://www.canva.com'
  },

  {
    id: 'leonardo',
    name: 'Leonardo.ai',
    description: 'Leonardo.ai 是一款专注于游戏和设计资产生成的 AI 图像工具，支持高质量游戏角色、场景、道具等视觉资产生成。提供风格预设和模型微调功能，被大量游戏开发者和独立艺术家使用。',
    category: 'other',
    url: 'https://leonardo.ai',
    tags: ['游戏', '设计', '资产'],
    rating: 4.0,
    commissionRate: 0.05,
    pricing: '免费+订阅',
    features: [
      '游戏资产生成：角色、场景、道具',
      '风格预设（动漫、写实、水墨等）',
      'Canvas 画布：多图组合和编辑',
      '模型微调（Fine-tuning）自定义风格',
      '实时生成（Real-time Canvas）'
    ],
    pros: [
      '游戏资产垂直场景打磨最深',
      '免费额度慷慨',
      '实时画布功能创新'
    ],
    cons: [
      '通用图像生成不如 Midjourney',
      '复杂提示词效果不如 SDXL',
      '界面有一定学习成本'
    ],
    targetAudience: '游戏开发者、独立游戏制作人、概念设计师',
    affiliateUrl: 'https://leonardo.ai'
  },

  // =====================
  // 其他工具（续）
  // =====================

  {
    id: 'jasper',
    name: 'Jasper',
    description: 'Jasper 是全球最流行的 AI 写作助手之一，专注于企业级营销内容生成。支持品牌声音定制、50+ 模板、多语言输出，可批量生成博客、社交媒体、广告文案等营销素材，适合营销团队和内容创作者。',
    category: 'llm',
    url: 'https://www.jasper.ai',
    tags: ['写作', '营销', '内容生成'],
    rating: 4.3,
    commissionRate: 0.10,
    pricing: '订阅',
    features: [
      'Brand Voice 品牌声音学习，保持文风一致',
      '50+ 内容模板，覆盖博客、社媒、广告全场景',
      '多语言生成，支持 30+ 语言',
      '团队协作与工作流管理',
      '浏览器插件，随时随地调用 AI'
    ],
    pros: [
      '企业级工作流，团队使用体验成熟',
      '模板丰富，上手快',
      '品牌声音功能让内容更个性化'
    ],
    cons: [
      '价格较贵，个人用户门槛高',
      '免费额度有限',
      '生成内容偏模板化'
    ],
    targetAudience: '营销团队、内容创作者、企业',
    affiliateUrl: 'https://www.jasper.ai'
  },

  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'Copy.ai 是一款专注外贸和跨境场景的 AI 文案工具，提供 90+ 工具模板，覆盖产品描述、邮件、客户回复、社交媒体等场景。支持多语言，特别适合 Shopify 商家和跨境电商从业者。',
    category: 'llm',
    url: 'https://www.copy.ai',
    tags: ['写作', '外贸', '电商'],
    rating: 4.2,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      '90+ 内容模板，覆盖 20+ 场景',
      '多语言输出，支持中文提示词',
      'Infobase 知识库，统一管理品牌信息',
      'Browser Extension 随时调用',
      'Zapier 集成，连接 5000+ 应用'
    ],
    pros: [
      '外贸场景模板丰富',
      '免费版额度充足',
      '操作简单，零学习成本'
    ],
    cons: [
      '长文本生成能力一般',
      '中文内容质量不如英文',
      '复杂提示词支持较弱'
    ],
    targetAudience: '跨境电商、外贸从业者、Shopify 商家',
    affiliateUrl: 'https://www.copy.ai'
  },

  {
    id: 'rytr',
    name: 'Rytr',
    description: 'Rytr 是一款性价比极高的 AI 写作工具，支持 40+ 场景模板和 30+ 语言，以极低的价格提供高质量文案生成，适合个人博主、小微企业和自由职业者快速产出内容。',
    category: 'llm',
    url: 'https://rytr.me',
    tags: ['写作', '低价', '多语言'],
    rating: 4.0,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      '40+ 使用场景模板',
      '30+ 语言支持',
      'AIDA 和 PAS 文案框架',
      '富文本编辑器与导出选项',
      'SAFER金字塔写作框架'
    ],
    pros: [
      '价格极低，入门友好',
      '语言支持多',
      '操作直观，响应快速'
    ],
    cons: [
      '长文本生成质量有限',
      '无团队协作功能',
      '高级功能需付费版'
    ],
    targetAudience: '个人博主、小微企业、自由职业者',
    affiliateUrl: 'https://rytr.me'
  },

  {
    id: 'writesonic',
    name: 'Writesonic',
    description: 'Writesonic 是一款集成 ChatSonic 对话式 AI 和 Article Bot 长文生成的综合写作平台，支持实时语音交互、图像生成、品牌声音定制，适合需要同时做对话营销和长文 SEO 的内容团队。',
    category: 'llm',
    url: 'https://writesonic.com',
    tags: ['写作', 'SEO', '对话'],
    rating: 4.2,
    commissionRate: 0.08,
    pricing: '免费+订阅',
    features: [
      'ChatSonic 对话式 AI（类 GPT）',
      'Article Bot 长文 SEO 文章生成',
      'PhotoSonic AI 图片生成',
      '品牌声音（Brand Voice）定制',
      'API 接口，支持开发者集成'
    ],
    pros: [
      '对话+长文一站式解决',
      '实时语音交互有差异化',
      '图片生成集成在同一平台'
    ],
    cons: [
      '界面复杂，功能较多',
      'SEO 文章需要人工编辑',
      '免费额度相对较少'
    ],
    targetAudience: '内容营销团队、SEO 从业者、数字营销人员',
    affiliateUrl: 'https://writesonic.com'
  },

  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'Synthesia 是全球领先的 AI 视频生成平台，仅需文本即可生成真人出镜数字人视频。支持 140+ 声音和 130+ 数字人模板，广泛用于企业培训、营销视频和产品演示，大幅降低视频制作成本。',
    category: 'video',
    url: 'https://www.synthesia.io',
    tags: ['视频', '数字人', '企业培训'],
    rating: 4.6,
    commissionRate: 0.10,
    pricing: '订阅',
    features: [
      '140+ AI 声音，130+ 数字人',
      '纯文本转真人视频，无需录制',
      '视频自动翻译（ Automatic Translation）',
      'PPT 转视频功能',
      '自定义数字人（My Avatars）'
    ],
    pros: [
      '企业培训场景非常成熟',
      '多语言视频一键生成',
      '无需拍摄设备，降低制作成本'
    ],
    cons: [
      '每月视频分钟数有限',
      '中文数字人可选较少',
      '定制数字人需要额外费用'
    ],
    targetAudience: '企业培训部门、营销团队、在线教育',
    affiliateUrl: 'https://www.synthesia.io'
  },

  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'HeyGen 是一款专注于创意内容的 AI 视频生成平台，提供 100+ 数字人形象和即时语音克隆功能，特别适合制作营销视频、广告创意和社交媒体内容，以其高质量数字人和丰富的模板库著称。',
    category: 'video',
    url: 'https://www.heygen.com',
    tags: ['视频', '数字人', '创意'],
    rating: 4.5,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      '100+ 数字人模板，覆盖多种场景',
      '即时语音克隆（Voice Clone）',
      'AI 文字转视频，几分钟出片',
      '视频翻译（Video Translate）多语言',
      'API 接口，支持自动化工作流'
    ],
    pros: [
      '数字人质量极高，业界领先',
      '创意视频模板丰富',
      '社交媒体场景优化到位'
    ],
    cons: [
      '免费版有限制',
      '中文支持不如英文原生',
      '高画质输出需付费版'
    ],
    targetAudience: '社交媒体运营者、内容创作者、创意营销团队',
    affiliateUrl: 'https://www.heygen.com'
  },

  {
    id: 'descript',
    name: 'Descript',
    description: 'Descript 是一款革命性的音视频编辑工具，将转录、编辑、协作和 AI 配音融为一体。编辑视频像编辑文档一样简单，支持 AI 语音克隆、Studio Sound 降噪和内嵌屏幕录制，是播客和视频创作者的效率利器。',
    category: 'video',
    url: 'https://www.descript.com',
    tags: ['视频编辑', '播客', '转录'],
    rating: 4.5,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      '转录式编辑（Edit by transcript）',
      'AI 语音克隆（Overdub）',
      'Studio Sound 智能降噪',
      '内嵌屏幕录制',
      '协作评论与版本管理'
    ],
    pros: [
      '编辑体验颠覆传统',
      '播客工作流完整',
      'AI 配音质量高'
    ],
    cons: [
      '对国内用户网络不稳定',
      '高级 AI 功能需付费',
      '学习曲线较陡'
    ],
    targetAudience: '播客主、视频创作者、内容团队',
    affiliateUrl: 'https://www.descript.com'
  },

  {
    id: 'fireflies',
    name: 'Fireflies.ai',
    description: 'Fireflies.ai 是一款 AI 会议助手，自动转录、总结和分析 Google Meet、Zoom、Teams 等平台的会议内容。支持语音搜索、关键信息提取、CRM 自动录入，大幅减少会后整理时间。',
    category: 'audio',
    url: 'https://fireflies.ai',
    tags: ['会议', '转录', '效率'],
    rating: 4.4,
    commissionRate: 0.15,
    pricing: '免费+订阅',
    features: [
      '会议自动转录（95+ 语言）',
      'AI Summarize 会议摘要生成',
      '语音搜索关键讨论点',
      'CRM 自动录入（Salesforce、HubSpot）',
      '团队知识库共享'
    ],
    pros: [
      '会议效率提升显著',
      '高佣金率（15%）',
      '集成生态丰富'
    ],
    cons: [
      '对中文会议的转录准确率一般',
      '免费版功能有限',
      '隐私合规需要额外配置'
    ],
    targetAudience: '销售团队、项目管理者、企业会议多的团队',
    affiliateUrl: 'https://fireflies.ai'
  },

  {
    id: 'otter',
    name: 'Otter.ai',
    description: 'Otter.ai 是专注于实时语音转文字的 AI 助手，适用于会议、访谈和课堂记录。与 Zoom、Google Meet深度集成，支持实时字幕生成、自动摘要和关键词提取，是知识工作者的贴身记录员。',
    category: 'audio',
    url: 'https://otter.ai',
    tags: ['会议', '转录', '字幕'],
    rating: 4.3,
    commissionRate: 0.15,
    pricing: '免费+订阅',
    features: [
      '实时语音转文字（Live Transcription）',
      '会议自动录音+转录',
      '自动生成摘要和行动项',
      '关键词高亮和语音搜索',
      '与 Zoom、Google Meet、Microsoft Teams 深度集成'
    ],
    pros: [
      '实时转录速度快',
      '课堂/访谈记录体验优秀',
      '多人协作标注功能完善'
    ],
    cons: [
      '中文识别准确率有限',
      '免费版时长有限',
      '对环境噪音敏感'
    ],
    targetAudience: '记者、学生、研究人员、会议多的职场人士',
    affiliateUrl: 'https://otter.ai'
  },

  {
    id: 'playht',
    name: 'Play.ht',
    description: 'Play.ht 是专注语音克隆和对话式 AI 语音的生成平台，提供 900+ AI 声音和即时语音克隆服务，特别适合开发对话式 AI 应用、虚拟主播和语音助手场景，也支持传统视频配音需求。',
    category: 'audio',
    url: 'https://play.ht',
    tags: ['语音克隆', '配音', '开发'],
    rating: 4.2,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      '900+ AI 声音，覆盖 140+ 语言',
      '即时语音克隆（10秒样本）',
      '对话式 AI 语音生成',
      '流式语音合成 API',
      '多情感语音（悲伤、兴奋等）'
    ],
    pros: [
      '语音克隆效果逼真',
      '开发者 API 体验好',
      '情感语音选择丰富'
    ],
    cons: [
      '免费版商用有限制',
      '部分声音克隆需要授权',
      '国内访问速度不稳'
    ],
    targetAudience: '开发者、虚拟主播、对话式 AI 应用开发者',
    affiliateUrl: 'https://play.ht'
  },

  {
    id: 'pixelcut',
    name: 'Pixelcut',
    description: 'Pixelcut 是一款面向电商的 AI 图片编辑工具，支持一键去背景、AI 商品图生成、图片放大和批量处理，特别适合 Shopify 商家和亚马逊卖家快速制作高质量产品图片。',
    category: 'image',
    url: 'https://pixelcut.ai',
    tags: ['图像编辑', '电商', '去背景'],
    rating: 4.1,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      'AI 去背景（一键抠图）',
      'AI 商品图生成（魔法橡皮擦等）',
      '图片放大（4K Upscale）',
      '批量处理功能',
      'Shopify 和亚马逊插件'
    ],
    pros: [
      '电商场景打磨深入',
      '去背景效果精准',
      '批量处理效率高'
    ],
    cons: [
      '设计模板相对有限',
      '复杂图片编辑能力不足',
      '免费版输出有水印'
    ],
    targetAudience: '电商卖家、Shopify 商家、亚马逊卖家',
    affiliateUrl: 'https://pixelcut.ai'
  },

  {
    id: 'photoroom',
    name: 'PhotoRoom',
    description: 'PhotoRoom 是一款专注于商业图片编辑的 AI 工具，以精准的背景移除和丰富的模板著称。提供 API 服务，支持批量处理，是电商图片制作和营销素材快速生成的利器。',
    category: 'image',
    url: 'https://www.photoroom.com',
    tags: ['图像编辑', '电商', '去背景'],
    rating: 4.3,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      'Instant Backgrounds 即时背景生成',
      'Batch Editor 批量编辑',
      'Retouch 修图工具',
      'API 接口，支持自动化',
      'App 和 Figma 插件'
    ],
    pros: [
      '背景替换效果自然',
      '模板丰富多样',
      'API 对开发者友好'
    ],
    cons: [
      '免费版图片有水印',
      '高分辨率输出需付费',
      '人像处理偶有瑕疵'
    ],
    targetAudience: '电商卖家、营销设计师、摄影师',
    affiliateUrl: 'https://www.photoroom.com'
  },

  {
    id: 'kittl',
    name: 'Kittl',
    description: 'Kittl 是一款专为设计师打造的 AI 设计工具，提供海量模板和 AI 生成功能，支持图标插画生成、图片编辑和品牌套件创建，适合快速制作 T 恤、包装、社交媒体等设计素材。',
    category: 'image',
    url: 'https://www.kittl.com',
    tags: ['设计', '模板', '插画'],
    rating: 4.2,
    commissionRate: 0.10,
    pricing: '免费+订阅',
    features: [
      'AI 插画图标生成',
      '海量设计模板（社媒、印刷等）',
      '品牌套件（Brand Kit）管理',
      '图片 AI 编辑（放大、去背景）',
      '商用字体和素材库'
    ],
    pros: [
      '设计模板审美在线',
      '插画生成质量高',
      '品牌管理功能实用'
    ],
    cons: [
      '中文界面支持有限',
      '离线功能缺失',
      '免费版功能受限较多'
    ],
    targetAudience: '平面设计师、社交媒体运营、电商设计师',
    affiliateUrl: 'https://www.kittl.com'
  },

];

// =====================
// 辅助函数
// =====================

export function getToolById(id: string): Tool | undefined {
  return tools.find(tool => tool.id === id);
}

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter(tool => tool.category === categoryId);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase();
  return tools.filter(tool =>
    tool.name.toLowerCase().includes(q) ||
    tool.description.toLowerCase().includes(q) ||
    tool.tags.some(tag => tag.toLowerCase().includes(q)) ||
    getCategoryById(tool.category)?.name.toLowerCase().includes(q)
  );
}
