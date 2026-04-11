import { Heart, ShieldCheck, Sparkles, Cpu, Wifi, Battery, ArrowRight, CheckCircle, Zap, Brain, Eye } from 'lucide-react'

// 三要碰详细解析
const threeMustTouch = [
  {
    id: 'physical',
    icon: Zap,
    title: '物理干预',
    subtitle: '从"看见"到"行动"的闭环',
    principle: '如果产品只能"看"（监测），那它是软件；只有能"动"（干预），才是博熵。众生的苦，往往不是因为"不知道"，而是因为"没办法"。我们的产品不仅要感知，更要能伸出"手"去干预，解决实际问题。',
    examples: {
      no: '只震动提醒你坐直的监测背带',
      yes: '内置微气囊的智能护腰，当AI感知到姿势不对时，瞬间物理充气支撑'
    },
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  {
    id: 'edge',
    icon: Brain,
    title: '边缘觉醒',
    subtitle: '断网也能守护的离线智慧',
    principle: '如果产品离开了网络就变成废铁，那它是云端的附庸；只有具备本地决策能力的，才是博熵。真正的危险和苦难，往往发生在没有信号、没有网络、或者毫秒必争的物理现场。我们的产品具备独立决策能力，不依赖外部系统，在关键时刻发挥作用。',
    examples: {
      no: '需要把视频传回云端分析、再发回指令的安防摄像头',
      yes: '内置高算力芯片的"断网守护神"，即便在深山老林或地下室，也能独立完成识别、推演和紧急刹停'
    },
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'invisible',
    icon: Eye,
    title: '无感交互',
    subtitle: '让科技"消失"在体验中',
    principle: '如果产品增加了用户的认知负担，那它是干扰；只有消减用户生理负担的，才是博熵。最好的交互是"无交互"，是让身体感觉到"消失"。最好的产品是让用户感受不到其存在，却能自然而然地消除障碍，带来舒适。',
    examples: {
      no: '需要每天充电、每天连接App才能同步数据的智能鞋垫',
      yes: '能够自动调节物理参数的环境适配器，如根据呼吸频率自动改变软硬度和支撑角度的智能床垫'
    },
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
]

// 三大产品方向
const directions = [
  {
    id: 'liberation',
    icon: Heart,
    name: '解脱苦',
    tagline: '物理劳动的"微型外挂"',
    problem: '众生之苦',
    problemDesc: '重复性、高强度的物理劳动力耗损——长期修剪果树的手部劳损、快递员反复弯腰的腰椎损伤。',
    solution: 'AI动力增强工具 / 智能护具',
    features: [
      '内置边缘AI实时感知肌肉发力',
      '通过微型电机或气压结构提供"助力"',
      '减轻体力劳动，保护身体',
      '姿态实时矫正',
      '疲劳度监测',
    ],
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  {
    id: 'protection',
    icon: ShieldCheck,
    name: '守护苦',
    tagline: '隐形物理屏障',
    problem: '众生之苦',
    problemDesc: '在不便佩戴设备（洗澡、睡眠、重度认知障碍）时的物理意外——老人在浴室滑倒、阿尔兹海默症患者深夜走失。',
    solution: '非视觉传感器守护节点',
    features: [
      'AI通过毫米波雷达/超声波节点24小时感知异常',
      '连接物理开关进行自动断电或自动推开求救门锁',
      '在脆弱状态下建立边缘侧的即时物理守护',
      '非视觉感知',
      '离线AI判断，毫秒级响应',
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'immersion',
    icon: Sparkles,
    name: '沉浸苦',
    tagline: '物理感官的"过滤器"',
    problem: '众生之苦',
    problemDesc: '城市噪音、特定的过敏原、或注意力被海量物理信息分散导致的焦虑——在高分贝工厂工作、在焦虑环境中需要冥想。',
    solution: '主动物理环境调节器',
    features: [
      '针对特定物理场（声场、气场、光场）进行反向干预',
      '定向消除噪音的物理屏蔽仪',
      '创造清净场，让身心回归安宁',
      '主动降噪系统',
      '环境过敏原过滤',
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

      {/* 三要碰准则 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">三要碰准则</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              产品的价值不在于"知道"，而在于"做到"。只有能真正物理干预的产品，才是博熵。
            </p>
          </div>

          <div className="space-y-16">
            {threeMustTouch.map((must, index) => (
              <div key={must.id} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full ${must.bgColor} ${must.borderColor} border text-sm font-medium mb-4`}>
                    <must.icon className={`w-4 h-4 mr-2 bg-gradient-to-r ${must.color} rounded-full p-0.5`} style={{ color: 'transparent', backgroundClip: 'text' }} />
                    原则 {index + 1}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{must.title}</h3>
                  <p className={`text-xl font-medium bg-gradient-to-r ${must.color} bg-clip-text text-transparent mb-6`}>
                    {must.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {must.principle}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                      <p className="text-red-600 text-sm font-medium mb-2">✗ 不碰</p>
                      <p className="text-gray-600 text-sm">{must.examples.no}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <p className="text-green-600 text-sm font-medium mb-2">✓ 要碰</p>
                      <p className="text-gray-700 text-sm">{must.examples.yes}</p>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`bg-gradient-to-br ${must.color} rounded-3xl p-12 aspect-square flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <must.icon className="w-24 h-24 mx-auto mb-6 opacity-90" />
                      <p className="text-3xl font-bold">{must.title}</p>
                      <p className="text-white/80 mt-2">{must.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 三大产品方向 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">三大产品方向</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              基于对众生之苦的深刻洞察，每款产品都解决一个真实的物理世界痛点
            </p>
          </div>

          {directions.map((direction, index) => (
            <div
              key={direction.id}
              id={direction.id}
              className={`${direction.bgColor} py-16 ${index % 2 === 1 ? '' : ''}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full ${direction.bgColor} ${direction.borderColor} border text-sm font-medium mb-4`}>
                      <direction.icon className={`w-4 h-4 mr-2 bg-gradient-to-r ${direction.color} rounded-full p-0.5`} style={{ color: 'transparent', backgroundClip: 'text' }} />
                      方向 {index + 1}
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">{direction.name}</h2>
                    <p className={`text-xl font-medium bg-gradient-to-r ${direction.color} bg-clip-text text-transparent mb-4`}>
                      {direction.tagline}
                    </p>
                    
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-6">
                      <p className="text-sm text-gray-500 mb-2">{direction.problem}</p>
                      <p className="text-gray-700 font-medium">{direction.problemDesc}</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-8">
                      <p className="text-sm text-gray-500 mb-2">博熵方案</p>
                      <p className="text-gray-900 font-bold text-lg">{direction.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {direction.features.map((feature, i) => (
                        <div key={i} className="flex items-start bg-white rounded-lg p-3">
                          <CheckCircle className={`w-5 h-5 bg-gradient-to-r ${direction.color} rounded-full mr-3 flex-shrink-0 mt-0.5`} style={{ color: 'transparent', backgroundClip: 'text' }} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`bg-gradient-to-br ${direction.color} rounded-3xl p-12 aspect-square flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <direction.icon className="w-24 h-24 mx-auto mb-6 opacity-90" />
                        <p className="text-3xl font-bold">{direction.name}</p>
                        <p className="text-white/80 mt-2">{direction.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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
