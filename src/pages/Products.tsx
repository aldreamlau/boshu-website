import { Heart, ShieldCheck, VolumeX, Cpu, Wifi, Battery, ArrowRight, CheckCircle } from 'lucide-react'

// 三大产品方向
const directions = [
  {
    id: 'liberation',
    icon: Heart,
    name: '解脱苦',
    tagline: 'AI动力增强 · 智能护具',
    problem: '重复性、高强度的物理劳动力耗损',
    solution: '通过AI动力增强系统，将智能算法与物理执行器深度融合，为体力劳动者提供"第二双手"，让他们从重复劳动中解脱。',
    features: [
      '智能动力辅助',
      '姿态实时矫正',
      '疲劳度监测',
      '自适应力量增强',
    ],
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  {
    id: 'protection',
    icon: ShieldCheck,
    name: '守护苦',
    tagline: '非视觉传感器 · 全时守护',
    problem: '不便佩戴设备时的物理意外',
    solution: '在智能手表、手机无法覆盖的场景中，提供隐形的全时守护。无需穿戴，无感陪伴，关键时刻挺身而出。',
    features: [
      '非视觉感知',
      '离线AI判断',
      '毫秒级响应',
      '隐私保护优先',
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'immersion',
    icon: VolumeX,
    name: '沉浸苦',
    tagline: '主动环境调节 · 沉浸体验',
    problem: '城市噪音、过敏原、注意力分散',
    solution: '不是被动隔绝，而是主动调节。智能感知环境状态，主动创造属于你的"静谧空间"，让你在任何环境中都能保持专注与舒适。',
    features: [
      '主动降噪系统',
      '环境过敏原过滤',
      '智能光线调节',
      '注意力守护',
    ],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
]

// 技术架构
const techStack = [
  {
    icon: Cpu,
    title: '边缘AI芯片',
    desc: '自研边缘AI推理芯片，本地决策，隐私安全',
  },
  {
    icon: Wifi,
    title: '离线智慧',
    desc: '断网也能工作，不依赖云端，响应更及时',
  },
  {
    icon: Battery,
    title: '超低功耗',
    desc: '先进功耗管理，一周以上超长续航',
  },
]

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-500/5 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
              产品方向
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              基于苦谛
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                定义法相
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              通过深入观察众生之苦，我们定义了三大产品方向：
              <br />
              每一款产品都致力于解决一个真实的物理世界痛点
            </p>
          </div>
        </div>
      </section>

      {/* 三大产品方向 */}
      {directions.map((direction, index) => (
        <section
          key={direction.id}
          id={direction.id}
          className={`py-24 ${direction.bgColor}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center px-4 py-2 rounded-full ${direction.bgColor} border ${direction.borderColor} text-sm font-medium mb-6`}>
                  <direction.icon className="w-4 h-4 mr-2" />
                  方向 {index + 1}
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">{direction.name}</h2>
                <p className={`text-xl font-medium bg-gradient-to-r ${direction.color} bg-clip-text text-transparent mb-6`}>
                  {direction.tagline}
                </p>
                
                <div className="bg-white rounded-2xl p-6 border ${direction.borderColor} mb-8">
                  <p className="text-sm text-gray-500 mb-2">解决的问题</p>
                  <p className="text-gray-700 font-medium">{direction.problem}</p>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {direction.solution}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {direction.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 bg-gradient-to-r ${direction.color} rounded-full mr-3 flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`bg-gradient-to-br ${direction.color} rounded-3xl p-12 aspect-square flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <direction.icon className="w-24 h-24 mx-auto mb-6 opacity-90" />
                    <p className="text-2xl font-bold">{direction.name}</p>
                    <p className="text-white/80 mt-2">{direction.tagline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 技术架构 */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">技术架构</h2>
            <p className="text-lg text-gray-400">
              三大核心技术支撑，构筑产品竞争力
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-gray-800/50 border border-gray-700 hover:border-amber-500/50 transition-colors"
              >
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <tech.icon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-400">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            期待与志同道合者同行
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            如果你也在思考如何用技术解决真实的人间疾苦，欢迎联系我们
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            联系我们
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
