import { Brain, Heart, Sparkles, Users, Target, Award, GitBranch, Zap, Code, Compass, Shield, Lightbulb } from 'lucide-react'

// 公司理念
const philosophy = {
  mission: '对抗无序，止于至善',
  vision: '让AI具备肉身，让智慧触手可及',
  core: '利用智能的有序，化解物理世界的熵增与众生的苦难',
}

// 佛法与科技映射
const dharmaMapping = [
  { company: '公司使命', dharma: '转识成智 / 负熵为本', depth: '熵增即是无明与混乱（苦）；AI的逻辑即是负熵（智慧）' },
  { company: '创始人', dharma: '发愿者 / 阿阇黎', depth: '通过观察众生之苦，定义产品的"法相"' },
  { company: '硬件实体', dharma: '法器', depth: '硬件不是商品，是具象化的慈悲' },
  { company: '边缘计算', dharma: '自性圆满 / 不假外求', depth: '芯片在本地处理数据，如如不动' },
  { company: '物理干预', dharma: '悲智双运 / 救拔', depth: '只有感知（智慧）是不够的，必须有物理支撑（慈悲的动作）' },
]

// 三法印
const threeSeals = [
  { title: '诸行无常', subtitle: '动态适配', desc: '硬件产品不执着于固定形态，唯一不变的是"解决苦"的逻辑。' },
  { title: '诸法无我', subtitle: '自动化流', desc: '通过 MCP 协议和 Agent 协作，让业务流程自动化，不以人的情绪和体力为转移。' },
  { title: '涅槃寂静', subtitle: '熵减至极', desc: '最好的硬件是让你感觉不到它的存在，回归到最清净、最自然的生活状态。' },
]

// 价值观
const values = [
  {
    icon: Heart,
    title: '止于至善',
    desc: '让科技"消失"在体验中，真正解决众生之苦',
  },
  {
    icon: Brain,
    title: '物理优先',
    desc: '不卖数据，只卖物理世界的确定性',
  },
  {
    icon: Sparkles,
    title: '边缘智慧',
    desc: '断网也能守护，毫秒级响应',
  },
]

// 创始团队
const founders = [
  {
    title: '发愿者',
    role: '创始人',
    desc: '捕捉众生之苦，定义产品愿力，把控审美，决策最终路线。',
    motto: '念头即指令，逻辑即负熵，分身即法身，物理即实相',
  },
  {
    title: '炼金术士',
    role: '001号员工',
    desc: '维护 Agent 神经网络，调优 MCP 接口，硬件打样，将愿力转化为物理实相。',
    motto: null,
  },
]

// 五智护法
const fiveWisdom = [
  { icon: Lightbulb, name: '灵感捕获者', duty: '全网监控痛点，分析竞品' },
  { icon: Code, name: '物理架构师', duty: '生成力学结构、BOM、功率预算' },
  { icon: Zap, name: '边缘炼金术士', duty: '编写轻量化嵌入式代码' },
  { icon: Compass, name: '供应链罗盘', duty: '对接全球供应商，解决物理限制' },
  { icon: Shield, name: '首席评判官', duty: '挑战方案，模拟用户负面反应' },
]

// 商业优势
const advantages = [
  { label: '高门槛', desc: '技术壁垒', detail: '涉及机械结构、传感器融合、边缘计算' },
  { label: '强刚需', desc: '真实痛点', detail: '解决真实的物理疼痛或安全威胁' },
  { label: '逻辑复用', desc: '技术杠杆', detail: '核心技术可在不同产品线中复用' },
  { label: '高客单价', desc: '价值导向', detail: '用户能感知到实实在在的成本和价值' },
  { label: '极高忠诚', desc: '效果说话', detail: '通过解决身体痛苦建立"身体的感激"' },
  { label: '避开竞争', desc: '专注细分', detail: '专注于"解决这一个物理问题"' },
]

// 愿景
const vision = {
  title: '成为全球领先的"感官增强与物理自动化"微型工厂',
  desc: '我们希望在每一个充满混乱的角落——失能老人的房间、荒废的果园、嘈杂的工厂——都有博熵的硬件在默默工作。它们像"数字石狮子"一样，守卫着物理世界的秩序与安宁。',
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
              关于博熵
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              对抗无序
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                止于至善
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              博熵（Entropy Master）是一家以"对抗无序，止于至善"为使命的AI硬件公司。
              <br />
              我们相信，真正的技术价值在于解决众生的<strong className="text-amber-400">身受之苦</strong>，
              而非仅仅停留在数字世界的熵增之中。
            </p>
          </div>
        </div>
      </section>

      {/* 使命愿景 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-10 rounded-3xl bg-gradient-to-b from-amber-50 to-white border border-amber-200">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">使命</h3>
              <p className="text-amber-600 font-medium text-lg">{philosophy.mission}</p>
            </div>
            <div className="text-center p-10 rounded-3xl bg-gradient-to-b from-blue-50 to-white border border-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">愿景</h3>
              <p className="text-blue-600 font-medium text-lg">{philosophy.vision}</p>
            </div>
            <div className="text-center p-10 rounded-3xl bg-gradient-to-b from-purple-50 to-white border border-purple-200">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">核心理念</h3>
              <p className="text-purple-600 font-medium text-lg">{philosophy.core}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 佛法与科技映射 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">佛法与科技的全息映射</h2>
            <p className="text-lg text-gray-600">用东方智慧重新定义AI硬件</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-6 bg-gray-900 text-white font-medium">
              <div>公司维度</div>
              <div>佛法映射</div>
              <div className="col-span-2">深度内涵</div>
            </div>
            {dharmaMapping.map((item, index) => (
              <div key={index} className={`grid grid-cols-4 gap-4 p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="font-medium text-gray-900">{item.company}</div>
                <div className="text-amber-600 font-medium">{item.dharma}</div>
                <div className="col-span-2 text-gray-600 text-sm">{item.depth}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 三法印 */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">三法印</h2>
            <p className="text-lg text-gray-400">产品开发的哲学准则</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {threeSeals.map((seal, index) => (
              <div key={index} className="text-center p-8 rounded-3xl bg-gray-800/50 border border-gray-700">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-amber-400 font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{seal.title}</h3>
                <p className="text-amber-400 font-medium mb-4">{seal.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{seal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 价值观 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">核心价值观</h2>
            <p className="text-lg text-gray-600">技术服务于人，智慧归于体验</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 一人公司 */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
              <GitBranch className="w-4 h-4 mr-2" />
              组织形态
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">一人公司，万人规模</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              博熵不追求雇佣成千上万的员工，而是追求通过一套"逻辑体系"，让一个人的愿力能瞬间转化为全球流动的硬件产品。
            </p>
          </div>

          {/* 创始团队 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {founders.map((founder, index) => (
              <div key={index} className="bg-gray-800/50 rounded-3xl p-10 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{founder.title}</h3>
                    <p className="text-amber-400">{founder.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{founder.desc}</p>
                {founder.motto && (
                  <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
                    <p className="text-amber-400 text-sm font-medium italic">"{founder.motto}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 五智护法 */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">五智护法</h3>
            <p className="text-gray-400">我们的数字分身阵列</p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {fiveWisdom.map((wisdom, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <wisdom.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="text-white font-medium mb-2">{wisdom.name}</h4>
                <p className="text-gray-500 text-xs">{wisdom.duty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 商业优势 */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">为什么选择"难"的路</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              容易做的东西，比拼的是流量、价格、营销——那是"苦海"。
              <br />
              有难度的硬件，比拼的是专利、私有数据、物理交互体验——这是"净土"。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-amber-500 mr-3" />
                  <span className="text-amber-600 font-bold">{adv.label}</span>
                </div>
                <p className="text-gray-900 font-medium mb-2">{adv.desc}</p>
                <p className="text-gray-500 text-sm">{adv.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 愿景 */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">愿景</h2>
          <p className="text-2xl text-amber-100 font-medium mb-6">{vision.title}</p>
          <p className="text-lg text-amber-100/80 leading-relaxed">
            {vision.desc}
          </p>
        </div>
      </section>
    </div>
  )
}
