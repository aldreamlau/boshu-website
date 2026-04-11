import { Link } from 'react-router-dom'
import { ArrowRight, Brain, ShieldCheck, VolumeX, Eye, Sparkles, Heart, Zap } from 'lucide-react'

// 博熵核心理念
const philosophy = {
  mission: '对抗无序，止于至善',
  vision: '让AI具备肉身，让智慧触手可及',
  core: '利用智能的有序，化解物理世界的熵增与众生的苦难',
}

// 三不碰准则
const notTouchRules = [
  '手机屏幕能解决的，不碰',
  '增加用户数据记录负担的，不碰',
  '没有物理干预能力的，不碰',
]

// 三要碰准则
const mustTouchRules = [
  '具备"物理干预"能力的反馈闭环',
  '具备"离线智慧"的边缘节点',
  '解决"身受之苦"的交互革命',
]

// 三大产品方向
const directions = [
  {
    icon: Heart,
    name: '解脱苦',
    problem: '重复性、高强度的物理劳动力耗损',
    solution: 'AI动力增强工具 / 智能护具',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: ShieldCheck,
    name: '守护苦',
    problem: '不便佩戴设备时的物理意外',
    solution: '非视觉传感器守护节点',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: VolumeX,
    name: '沉浸苦',
    problem: '城市噪音、过敏原、注意力分散',
    solution: '主动物理环境调节器',
    color: 'from-purple-500 to-pink-500',
  },
]

// 技术优势
const techAdvantages = [
  {
    icon: Brain,
    title: '边缘智能',
    desc: '本地决策，毫秒级响应，断网也能守护',
  },
  {
    icon: Zap,
    title: '物理干预',
    desc: '从"监测"到"行动"的闭环，不卖数据卖确定性',
  },
  {
    icon: Sparkles,
    title: '无感交互',
    desc: '让科技"消失"在体验中，止于至善',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section - 品牌宣言 */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* 背景装饰 - 熵增视觉效果 */}
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

      {/* 三不碰/三要碰准则 */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 三不碰 */}
            <div className="bg-gray-800/50 rounded-3xl p-10 border border-gray-700">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">三不碰准则</h3>
              </div>
              <ul className="space-y-4">
                {notTouchRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <span className="text-red-400 text-sm font-bold">{index + 1}</span>
                    </span>
                    <span className="text-gray-400 text-lg">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 三要碰 */}
            <div className="bg-gray-800/50 rounded-3xl p-10 border border-amber-500/30">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">三要碰准则</h3>
              </div>
              <ul className="space-y-4">
                {mustTouchRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <span className="text-amber-400 text-sm font-bold">{index + 1}</span>
                    </span>
                    <span className="text-gray-300 text-lg">{rule}</span>
                  </li>
                ))}
              </ul>
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
                  <div>
                    <p className="text-sm text-gray-500 mb-2">产品形态</p>
                    <p className="text-amber-400 font-medium">{dir.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 技术优势 */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">技术理念</h2>
            <p className="text-xl text-gray-400">
              边缘智能 · 物理干预 · 无感交互
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techAdvantages.map((tech, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-3xl bg-gradient-to-b from-gray-800/50 to-transparent border border-gray-700"
              >
                <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="w-10 h-10 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-400">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 商业模式 */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">价值公式</h2>
          <div className="bg-gray-800/50 rounded-3xl p-10 border border-amber-500/30">
            <p className="text-2xl sm:text-3xl text-white font-mono mb-6">
              <span className="text-amber-400">熵减</span> = <span className="text-blue-400">愿力</span> × <span className="text-purple-400">逻辑杠杆</span> / <span className="text-red-400">物理阻力</span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-amber-400 font-bold">愿力</p>
                <p className="text-gray-500 text-sm">老板洞察</p>
              </div>
              <div>
                <p className="text-blue-400 font-bold">逻辑杠杆</p>
                <p className="text-gray-500 text-sm">AI阵列</p>
              </div>
              <div>
                <p className="text-purple-400 font-bold">逻辑杠杆</p>
                <p className="text-gray-500 text-sm">一人公司</p>
              </div>
              <div>
                <p className="text-red-400 font-bold">物理阻力</p>
                <p className="text-gray-500 text-sm">硬件实现</p>
              </div>
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
