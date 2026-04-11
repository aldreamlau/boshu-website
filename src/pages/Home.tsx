import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Shield, Zap, Users } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: '高性能算力',
    description: '采用最新AI芯片架构，提供卓越的深度学习计算性能',
  },
  {
    icon: Shield,
    title: '安全可靠',
    description: '端到端数据加密，多重安全认证，保障您的数据安全',
  },
  {
    icon: Zap,
    title: '低功耗设计',
    description: '先进的功耗优化技术，显著降低运营成本',
  },
  {
    icon: Users,
    title: '定制化服务',
    description: '根据客户需求提供硬件定制和软件集成解决方案',
  },
]

const products = [
  {
    name: 'AI加速服务器',
    desc: '专为数据中心设计的高性能计算平台',
  },
  {
    name: '边缘AI盒子',
    desc: '轻量级边缘计算设备，支持本地AI推理',
  },
  {
    name: 'AI模组',
    desc: '嵌入式AI计算模组，快速赋能各类设备',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                AI硬件解决方案领导者
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                让AI硬件
                <br />
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
                  赋能千行百业
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                博熵科技致力于研发高性能AI硬件产品，为企业数字化转型和智能化升级提供强有力的算力支撑。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
                >
                  了解产品
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-gray-300 transition-colors"
                >
                  联系我们
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl transform -rotate-3 flex items-center justify-center">
                  <div className="w-48 h-48 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                    <Cpu className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">为什么选择博熵</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们专注于AI硬件领域，以技术创新驱动产品升级，为客户提供全方位解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-200 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">核心产品系列</h2>
              <p className="text-lg text-gray-600 mb-8">
                从云端到边缘，从服务器到终端设备，博熵科技提供完整的AI硬件产品矩阵，满足不同场景的计算需求。
              </p>
              <div className="space-y-6">
                {products.map((product, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
                      <p className="text-gray-600">{product.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/products"
                className="inline-flex items-center mt-8 text-primary-600 font-semibold hover:text-primary-700"
              >
                查看全部产品
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 aspect-square flex items-center justify-center">
                    <Cpu className="w-20 h-20 text-white" />
                  </div>
                  <div className="bg-gray-900 rounded-2xl p-8 aspect-square flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold">99.9%</div>
                      <div className="text-gray-400">运行稳定性</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gray-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900">500+</div>
                      <div className="text-gray-600">企业客户</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 aspect-square flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold">24/7</div>
                      <div className="text-gray-400">技术支持</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            准备好开启AI硬件之旅了吗？
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            联系我们，获取专业的AI硬件解决方案咨询
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-colors"
          >
            立即咨询
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
