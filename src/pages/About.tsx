import { Brain, Heart, Sparkles, Users, Target, Award } from 'lucide-react'

// 公司理念
const philosophy = {
  mission: '对抗无序，止于至善',
  vision: '让AI具备肉身，让智慧触手可及',
  core: '利用智能的有序，化解物理世界的熵增与众生的苦难',
}

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

// 发展历程
const timeline = [
  {
    year: '缘起',
    title: '发愿者之路',
    desc: '通过观察众生之苦，定义产品的"法相"',
  },
  {
    year: '探索',
    title: '三不碰准则',
    desc: '手机能解决的，不碰；增加负担的，不碰；无物理干预的，不碰',
  },
  {
    year: '笃定',
    title: '三要碰准则',
    desc: '物理干预闭环、离线智慧边缘节点、解决身受之苦',
  },
]

// 团队理念
const team = {
  title: '一人公司 + AI阵列',
  desc: '极致效率的AI+硬件微型工厂模式，通过逻辑杠杆放大愿力，用技术壁垒构建竞争护城河。',
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
              博熵（Entropy Master）是一家以AI智慧与物理硬件深度融合的科技公司。
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

      {/* 价值观 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">核心价值观</h2>
            <p className="text-lg text-gray-600">技术服务于人，智慧归于体验</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-lg transition-shadow"
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

      {/* 发展历程 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">发展历程</h2>
            <p className="text-lg text-gray-600">从哲学思考到产品笃定</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-amber-500 via-amber-300 to-amber-500" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className={`p-8 rounded-3xl bg-gray-50 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                      <span className="text-amber-600 font-medium">{item.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 团队理念 */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Users className="w-10 h-10 text-amber-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{team.title}</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            {team.desc}
          </p>
          
          {/* 商业优势 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: '高门槛', desc: '技术壁垒' },
              { label: '强刚需', desc: '真实痛点' },
              { label: '高客单价', desc: '价值导向' },
              { label: '高忠诚', desc: '效果说话' },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
                <p className="text-amber-400 font-bold text-lg mb-2">{item.label}</p>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
