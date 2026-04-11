import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Heart } from 'lucide-react'

// 常见问题
const faqs = [
  {
    q: '博熵的产品什么时候上市？',
    a: '我们正在稳步推进产品研发。目前"守护苦"方向的非视觉传感器节点已进入原型机阶段，预计明年可以开始内测。',
  },
  {
    q: '博熵接受投资吗？',
    a: '我们目前以"一人公司+AI阵列"的模式运营，专注于产品打磨。如果您的投资理念与我们高度契合，欢迎交流。',
  },
  {
    q: '产品支持定制吗？',
    a: '是的，我们提供企业级定制服务。根据您的具体场景，我们可以调整硬件参数和AI算法，提供最适合的解决方案。',
  },
  {
    q: '如何加入博熵团队？',
    a: '我们相信"愿力"是核心。如果您对用技术解决人间疾苦有强烈共鸣，欢迎联系我们。',
  },
]

// 联系信息
const contactInfo = [
  {
    icon: Mail,
    label: '邮箱',
    value: 'contact@entropy.master',
    desc: '商务合作 / 技术交流',
  },
  {
    icon: MessageCircle,
    label: '微信',
    value: 'EntropyMaster',
    desc: '添加请备注"博熵"',
  },
  {
    icon: Clock,
    label: '响应时间',
    value: '24小时内',
    desc: '我们重视每一份来信',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'cooperation',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 模拟提交
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
              联系我们
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              与志同道合者
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                同行共创
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              如果你也在思考如何用技术解决真实的人间疾苦
              <br />
              我们期待与你的交流
            </p>
          </div>
        </div>
      </section>

      {/* 联系表单 & 信息 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* 联系表单 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">发送消息</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">感谢您的来信</h3>
                  <p className="text-gray-600">我们会在24小时内回复您</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">您的称呼</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="请输入您的名字"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">邮箱地址</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">公司/组织（选填）</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="您的公司或组织名称"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">联系类型</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    >
                      <option value="cooperation">商务合作</option>
                      <option value="investment">投资洽谈</option>
                      <option value="technical">技术交流</option>
                      <option value="join">加入团队</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">您的想法</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                      placeholder="请描述您的想法或需求..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    发送消息
                  </button>
                </form>
              )}
            </div>

            {/* 联系信息 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">联系方式</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start p-6 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      <p className="text-lg font-medium text-gray-900">{info.value}</p>
                      <p className="text-sm text-gray-500 mt-1">{info.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h3 className="text-xl font-bold text-gray-900 mb-6">常见问题</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group bg-gray-50 rounded-2xl">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <span className="font-medium text-gray-900">{faq.q}</span>
                      <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-gray-600">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl text-gray-300 mb-4">
            对抗无序，止于至善
          </p>
          <p className="text-gray-500">
            让AI具备肉身，让智慧触手可及
          </p>
        </div>
      </section>
    </div>
  )
}
