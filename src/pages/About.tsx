import { Award, Users, Globe, TrendingUp } from 'lucide-react'

const stats = [
  { icon: TrendingUp, value: '150+', label: '技术专利' },
  { icon: Users, value: '300+', label: '团队成员' },
  { icon: Globe, value: '30+', label: '覆盖国家' },
  { icon: Award, value: '50+', label: '行业奖项' },
]

const values = [
  {
    title: '创新驱动',
    description: '坚持技术创新，不断突破AI硬件性能边界，引领行业发展。',
  },
  {
    title: '客户为本',
    description: '深入理解客户需求，提供定制化解决方案，创造最大价值。',
  },
  {
    title: '品质至上',
    description: '严格把控产品质量，确保每一款产品都达到最高标准。',
  },
  {
    title: '开放合作',
    description: '与产业链伙伴建立深度合作，共同推动AI技术普惠。',
  },
]

const team = [
  {
    name: '张明远',
    role: '创始人 & CEO',
    bio: '前某顶级芯片公司核心工程师，拥有20年AI芯片研发经验。',
  },
  {
    name: '李芳华',
    role: '首席技术官',
    bio: '斯坦福大学博士，深度学习架构专家，曾主导多个重大AI项目。',
  },
  {
    name: '王建国',
    role: '首席产品官',
    bio: '15年硬件产品经验，精通AI硬件产品定义与市场化落地。',
  },
  {
    name: '陈晓燕',
    role: '市场副总裁',
    bio: '曾任多家科技公司高管，在AI行业市场拓展方面经验丰富。',
  },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">关于博熵</h1>
            <p className="text-xl text-gray-600">
              博熵科技成立于2019年，是一家专注于AI硬件研发与创新的国家高新技术企业。我们汇聚了来自全球顶尖科技公司的优秀人才，致力于为企业和开发者提供高性能、高可靠的AI计算解决方案。
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">我们的使命</h3>
              <p className="text-xl leading-relaxed text-primary-100">
                让AI硬件变得简单易用，使更多企业和开发者能够轻松获得强大的AI算力，加速人工智能技术的普及与应用。
              </p>
            </div>
            <div className="bg-gray-900 rounded-3xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">我们的愿景</h3>
              <p className="text-xl leading-relaxed text-gray-400">
                成为全球领先的AI硬件解决方案提供商，构建万物智能的算力基础设施，推动AI技术赋能千行百业。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">核心价值观</h2>
            <p className="text-lg text-gray-600">这些价值观指引着我们每一次决策和行动</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">核心团队</h2>
            <p className="text-lg text-gray-600">由行业顶尖专家组成的核心团队</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">发展历程</h2>
          </div>

          <div className="space-y-12">
            {[
              { year: '2019', event: '博熵科技正式成立，完成天使轮融资' },
              { year: '2020', event: '发布首款AI加速模组，获得首批客户认可' },
              { year: '2021', event: '完成A轮融资，建立完整产品线' },
              { year: '2022', event: '成为国家高新技术企业，用户数突破500家' },
              { year: '2023', event: '完成B轮融资，海外市场取得突破' },
              { year: '2024', event: '推出第三代AI芯片，性能提升300%' },
              { year: '2025', event: '全球客户超过1000家，布局全球化战略' },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-24 flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-600">{item.year}</span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-primary-200 pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
