'use client'
import {SiteFooter} from '@/components/site-footer'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function SupportPage() {
  const faqData = [
    {
      category: 'Orders ',
      items: [
        { question: 'How can I place an order?', answer: 'You can order directly through our website by selecting your preferred e-scooter model and completing the checkout process.".' },
        
      ],
    },
    {
      category: 'Product & Performance',
      items: [
        { question: 'How far can LuckyLiang e-scooters travel on a single charge?', answer: 'Most of our models offer a range between 25–60 km, depending on speed, terrain, and rider weight.' },
         { question: 'How long does it take to fully charge the battery?', answer: 'Charging usually takes 4–6 hours for a full charge.' },
         { question: 'Are your scooters waterproof?', answer: ' Some of Our scooters are water-resistant (IP54) — safe for light rain and splashes, but not recommended for heavy rain or submersion.Charging usually takes 4–6 hours for a full charge.' },
         
      ],
    },
    {
      category: 'Payments & Returns',
      items: [
        { question: 'What payment methods are accepted?', answer: 'We accept credit cards, stripe, and local bank transfers.' },
        { question: 'Do you offer refunds or returns?',answer: 'Yes. We have a  return policy for unused scooters in original packaging. Please check our refund policy for full details'}
      ],
    },
    {
      category: 'Support & Service',
      items: [
        { question: 'What should I do if my scooter has a problem?',answer:'You can reach our customer support team via email or chat, and we’ll guide you through troubleshooting or repair options' },
      ],
    },
  ]

  const [openFaq, setOpenFaq] = useState<{ [key: string]: number | null }>({})

  const toggleFaq = (categoryIndex: number, itemIndex: number) => {
    setOpenFaq((prev) => ({
      ...prev,
      [categoryIndex]: prev[categoryIndex] === itemIndex ? null : itemIndex,
    }))
  }

  return (
    <div className="min-h-screen bg-[#0D1F3C] text-white flex flex-col">
     
      <main className="flex-1 container mx-auto px-6 md:px-10 py-12 space-y-16">
       
       <section className="space-y-6">
  <h2 className="text-4xl font-bold text-green-600 mb-4">Global Service Network</h2>
  <p className="text-gray-200">
    Our factories and service locations across the globe:
  </p>


  <div className="relative w-full h-80 md:h-[400px] bg-gray-950 rounded-lg overflow-hidden">
    <Image
      src="/images/map.png"
      alt="Global service network"
      fill
      className="object-cover object-center opacity-80"
      priority
    />
  </div>


  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
      <h3 className="text-xl font-semibold text-green-500 mb-2">Headquarters</h3>
      <p className="text-gray-200">Dubai</p>
    </div>
    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
      <h3 className="text-xl font-semibold text-green-500 mb-2">Warehouse</h3>
      <p className="text-gray-200">Dubai</p>
    </div>
    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
      <h3 className="text-xl font-semibold text-green-600 mb-2">Manufacturers</h3>
      <p className="text-gray-200">China</p>
    </div>
  </div>
</section>

      
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-green-500">Frequently Asked Questions</h2>
          {faqData.map((cat, catIndex) => (
            <div key={catIndex} className="space-y-4">
              <h3 className="text-2xl font-semibold border-b border-green-500 pb-2">{cat.category}</h3>
              {cat.items.map((item, itemIndex) => (
                <div key={itemIndex} className="border border-white/20 rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 flex justify-between items-center"
                    onClick={() => toggleFaq(catIndex, itemIndex)}
                  >
                    <span>{item.question}</span>
                    <span>{openFaq[catIndex] === itemIndex ? '-' : '+'}</span>
                  </button>
                  {openFaq[catIndex] === itemIndex && (
                    <div className="px-4 py-3 bg-white/10 text-gray-200">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </section>

       
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-green-600">Ask a Question / Technical Support</h2>
          <p className="text-gray-200">
            Tap the chat bubble to start a conversation, or send us an email at{' '}
            <a href="mailto:support@luckyliangev.com" className="text-green-600 underline">
              support@luckyliangev.com
            </a>
            . We will respond within 24 hours.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="#"
              className="bg-green-700 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg text-center transition"
            >
              Live Chat
            </a>
            <a
              href="mailto:support@luckyliangev.com"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg text-center transition"
            >
              Send an Email
            </a>
          </div>
        </section>

    
        <section className="space-y-4">
          <h2 className="text-4xl font-bold text-green-600">Share Your Story</h2>
          <p className="text-gray-200">Want to share your story or connect with others? Join our community on social platforms.</p>
          <div className="flex gap-4">
            <a href="#" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white">
              Instagram
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white">
              TikTok
            </a>
          </div>
        </section>
      </main>

     
    </div>
  )
}
