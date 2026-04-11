import { Cpu, Server, Box, Layers, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const products = [
  {
    icon: Server,
    name: 'AI加速服务器',
    category: '云端计算',
    description: '专为数据中心和云计算场景设计的高性能AI服务器，提供强大的深度学习训练和推理能力。',
    features: ['单精度浮点性能 100 TFLOPS', '支持多卡互联', 'PCIe 5.0 高速互联', '液冷散热方案', '7x24 稳定运行'],
    highlight: true,
  },
  {
    icon: Box,
    name: '边缘AI盒子',
    category: '边缘计算',
    description: '轻量级边缘计算设备，支持本地AI推理，低延迟、高隐私，适用于各种边缘场景。',
    features: ['INT8算力 50 TOPS', '小巧便携设计', '支持主流深度学习框架', '丰富接口扩展', '本地数据处理'],
    highlight: false,
  },
  {
    icon: Cpu,
    name: 'AI计算模组',
    category: '嵌入式',
    description: '高性能嵌入式AI计算模组，功耗低、尺寸小，可快速集成到各类智能设备中。',
    features: ['超低功耗设计', '标准接口定义', '完整SDK支持', '灵活定制服务', '量产级品质'],
    highlight: false,
  },
  {
    icon: Layers,
    name: 'AI开发套件',
    category: '开发工具',
    description: '包含硬件模组、开发板、调试工具和完整SDK的一站式开发平台，助力快速原型开发。',
    features: ['完整的开发环境', '丰富的示例代码', '技术文档支持', '社区交流平台', '专家在线支持'],
    highlight: false,
  },
]

const solutions = [
  {
    title: '智慧城市',
    description: '为城市管理、公共安全、交通优化等场景提供AI算力支持',
  },
  {
    title: '智能制造',
    description: '赋能工业质检、预测性维护、柔性生产等制造场景',
  },
  {
    title: '智慧医疗',
    description: '支持医学影像分析、辅助诊断、药物研发等医疗应用',
  },
  {
    title: '自动驾驶',
    description: '为车载计算、感知融合、决策规划提供强大算力',
  },
  {
    title: '智慧金融',
    description: '支持风险控制、智能投顾、反欺诈等金融场景',
  },
  {
    title: '教育培训',
    description: '为AI教学、实验平台、竞赛训练提供基础设施',
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">产品与服务</h1>
            <p className="text-xl text-gray-600">
              博熵科技提供完整的AI硬件产品矩阵，覆盖云端、边缘、嵌入式三大场景，满足不同行业的算力需求。
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 ${
                  product.highlight
                    ? 'bg-gradient-to-br from-primary-500 to-primary-700 text-white'
                    : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      product.highlight ? 'bg-white/20' : 'bg-primary-100'
                    }`}
                  >
                    <product.icon
                      className={`w-8 h-8 ${product.highlight ? 'text-white' : 'text-primary-600'}`}
                    />
                  </div>
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-medium ${
                      product.highlight ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary-700'
                    }`}
                  >
                    {product.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className={`mb-6 ${product.highlight ? 'text-primary-100' : 'text-gray-600'}`}>
                  {product.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check
                        className={`w-5 h-5 mr-3 ${
                          product.highlight ? 'text-white' : 'text-primary-600'
                        }`}
                      />
                      <span className={product.highlight ? 'text-primary-100' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`inline-flex items-center font-semibold ${
                    product.highlight
                      ? 'text-white hover:text-primary-100'
                      : 'text-primary-600 hover:text-primary-700'
                  }`}
                >
                  咨询详情
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">行业解决方案</h2>
            <p className="text-lg text-gray-600">深耕多行业场景，提供端到端AI硬件解决方案</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">全方位服务支持</h2>
              <p className="text-lg text-gray-600 mb-8">
                除了优质的产品，博熵科技还提供完善的技术服务，帮助客户快速部署和优化AI应用。
              </p>

              <div className="space-y-6">
                {[
                  { title: '技术支持', desc: '7x24小时专业技术支持，快速响应客户需求' },
                  { title: '定制开发', desc: '根据客户特定需求，提供硬件和软件定制服务' },
                  { title: '培训服务', desc: '提供产品使用培训和AI开发培训课程' },
                  { title: '运维保障', desc: '提供设备运维、固件升级、性能优化等服务' },
                ].map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">获取专属方案</h3>
                <p className="text-primary-100 mb-8">
                  告诉我们您的需求，我们的专家团队将为您提供最适合的AI硬件解决方案。
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-colors"
                >
                  立即咨询
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
