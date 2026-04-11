import { Link } from 'react-router-dom'
import { ArrowRight, Brain, ShieldCheck, Eye, Sparkles, Heart, Zap, Target, Flame } from 'lucide-react'

// 博熵核心理念
const philosophy = {
  mission: '对抗无序，止于至善',
  vision: '让AI具备肉身，让智慧触手可及',
  core: '利用智能的有序，化解物理世界的熵增与众生的苦难',
}

// 品牌故事
const brandStory = {
  title: '我们是谁',
  content: '博熵（Entropy Master）是一家以"对抗无序，止于至善"为使命的AI硬件公司。在物理学中，熵增代表混乱、衰败和痛苦。我们相信，智能是一种负熵——它能够修复那些破碎的、低效的、让人痛苦的物理场景。我们不去做虚无的市场调研，我们只解决"我们自己感同身受的痛苦"。因为只有自己痛过，做出的硬件才有灵魂。',
}

// 三不碰准则
const notTouchRules = [
  { title: '手机屏幕能解决的', reason: '那是软件的功能范畴' },
  { title: '增加数据记录负担的', reason: '那会增加用户负担，而非减轻' },
  { title: '没有物理干预能力的', reason: '那只是虚妄的监测，无法解决实际问题' },
]

// 三要碰准则
const mustTouchRules = [
  {
    title: '物理干预',
    subtitle: '从"看见"到"行动"的闭环',
    desc: '如果产品只能"看"（监测），那它是软件；只有能"动"（干预），才是博熵。众生的苦，往往不是因为"不知道"，而是因为"没办法"。',
    example: { no: '只震动提醒你坐直的监测背带', yes: '内置微气囊的智能护腰，瞬间物理充气支撑' },
  },
  {
    title: '边缘觉醒',
    subtitle: '断网也能守护的离线智慧',
    desc: '真正的危险和苦难，往往发生在没有信号、没有网络的物理现场。我们的产品具备独立决策能力，不依赖外部系统。',
    example: { no: '需要云端分析再发回指令的摄像头', yes: '内置高算力芯片的"断网守护神"' },
  },
  {
    title: '无感交互',
    subtitle: '让科技"消失"在体验中',
    desc: '最好的交互是"无交互"，是让身体感觉到"消失"。最好的产品是让用户感受不到其存在，却能自然而然地消除障碍。',
    example: { no: '每天充电、每天同步数据的智能鞋垫', yes: '自动调节物理参数的智能床垫' },
  },
]

// 三大产品方向
const directions = [
  {
    icon: Heart,
    name: '解脱苦',
    problem: '重复性、高强度的物理劳动力耗损',
    solution: 'AI动力增强工具 / 智能护具',
    details: ['内置边缘AI实时感知肌肉发力', '通过微型电机或气压提供"助力"', '减轻体力劳动，保护身体'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: ShieldCheck,
    name: '守护苦',
    problem: '不便佩戴设备时的物理意外',
    solution: '非视觉传感器守护节点',
    details: ['毫米波雷达/超声波24小时感知', '连接物理开关自动断电/开门', '边缘侧即时物理守护'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sparkles,
    name: '沉浸苦',
    problem: '城市噪音、过敏原、注意力分散',
    solution: '主动物理环境调节器',
    details: ['针对特定物理场进行反向干预', '定向消除噪音的物理屏蔽仪', '创造清净场，让身心回归安宁'],
    color: 'from-purple-500 to-pink-500',
  },
]

// 价值公式
const valueFormula = {
  result: '熵减（价值）',
  elements: [
    { name: '愿力', desc: '洞察', color: 'text-amber-400' },
    { name: '逻辑杠杆', desc: 'AI阵列', color: 'text-blue-400' },
    { name: '物理阻力', desc: '硬件实现', color: 'text-red-400' },
  ],
}

export default function Home() {
  return (
    <div>
      {/* Hero Section - 品牌宣言 */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* 使命宣言 */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse" />
              Entropy Master · 博熵
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              对抗无序
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                止于至善
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              利用智能的有序，化解物理世界的熵增与众生的苦难
              <br />
              <span className="text-amber-400">让AI具备肉身，让智慧触手可及</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105"
              >
                探索产品方向
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-amber-500 hover:text-amber-400 transition-colors"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌故事 */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
            <Flame className="w-4 h-4 mr-2" />
            品牌故事
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">{brandStory.title}</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {brandStory.content}
          </p>
        </div>
      </section>

      {/* 三要碰准则 - 核心特色 */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              产品理念
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">三要碰准则</h2>
            <p className="text-xl text-gray-400">
              我们坚持的三个核心原则
            </p>
          </div>

          <div className="space-y-12">
            {mustTouchRules.map((rule, index) => (
              <div key={index} className="bg-gray-900/50 rounded-3xl p-10 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${index === 0 ? 'from-amber-500 to-orange-500' : index === 1 ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'} rounded-2xl flex items-center justify-center mr-4`}>
                    {index === 0 ? <Zap className="w-7 h-7 text-white" /> : index === 1 ? <Brain className="w-7 h-7 text-white" /> : <Eye className="w-7 h-7 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{rule.title}</h3>
                    <p className="text-gray-400">{rule.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {rule.desc}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                    <p className="text-red-400 text-sm font-medium mb-2">✗ 不碰</p>
                    <p className="text-gray-400">{rule.example.no}</p>
                  </div>
                  <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                    <p className="text-green-400 text-sm font-medium mb-2">✓ 要碰</p>
                    <p className="text-gray-300">{rule.example.yes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 三不碰准则 */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">三不碰准则</h2>
            <p className="text-lg text-gray-400">
              我们的边界，定义我们的专注
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-3xl p-10 border border-gray-700">
            <div className="space-y-6">
              {notTouchRules.map((rule, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-red-400 font-bold">{index + 1}</span>
                  </span>
                  <div className="flex-1">
                    <p className="text-white text-lg font-medium">{rule.title}</p>
                    <p className="text-gray-500 text-sm mt-1">{rule.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 三大产品方向 */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">产品方向</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              基于对众生之苦的深刻洞察，定义产品的"法相"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {directions.map((dir, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-3xl overflow-hidden border border-gray-700 hover:border-transparent transition-all duration-300 hover:scale-105"
              >
                <div className={`h-2 bg-gradient-to-r ${dir.color}`} />
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${dir.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <dir.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{dir.name}</h3>
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">解决的问题</p>
                    <p className="text-gray-300">{dir.problem}</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">产品形态</p>
                    <p className="text-amber-400 font-medium">{dir.solution}</p>
                  </div>
                  <div className="border-t border-gray-800 pt-4">
                    <ul className="space-y-2">
                      {dir.details.map((detail, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心公式 */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">价值公式</h2>
          <div className="bg-gray-800/50 rounded-3xl p-10 border border-amber-500/30">
            <p className="text-2xl sm:text-3xl text-white font-mono mb-8">
              <span className="text-amber-400">熵减</span> = <span className="text-amber-400">愿力</span> × <span className="text-blue-400">逻辑杠杆</span> / <span className="text-red-400">物理阻力</span>
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              {valueFormula.elements.map((el, index) => (
                <div key={index} className="p-6 rounded-2xl bg-gray-900/50">
                  <p className={`${el.color} font-bold text-xl mb-2`}>{el.name}</p>
                  <p className="text-gray-500 text-sm">{el.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            与博熵一起，对抗无序
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            让AI具备肉身，让智慧触手可及
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            联系我们
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
