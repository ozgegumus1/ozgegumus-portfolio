/** Tüm portföy içeriği — siteyi güncellemek için çoğunlukla bu dosyayı düzenle. */

export interface NavLink {
  id: string
  label: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'devops' | 'security'
}

export interface Project {
  id: string
  title: string
  description: string
  year: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
}

export interface SocialLink {
  platform: string
  url: string
  label: string
}

export interface Reference {
  id: string
  name: string
  title: string
  company: string
}

export const personalInfo = {
  name: 'Özge Gümüş',
  role: 'Frontend Developer',
  tagline: 'Modern arayüzler · Güvenli mimari · Sürdürülebilir kod',
  email: 'ozgegumus1@icloud.com',
  location: 'Mersin, Türkiye',
  bio: `HTML, CSS, JavaScript, TypeScript, React ve Tailwind CSS ile modern ve kullanıcı odaklı arayüzler geliştiriyorum. Projelerimde dinamik veri yönetimi için API entegrasyonlarını ve Supabase'i aktif kullanıyor; arka plan süreçlerinde Python'dan yararlanıyorum. İş akışımda yapay zeka araçlarıyla geliştirme sürecini ve kod kalitesini optimize ediyorum.

Siyaset Bilimi lisans mezunuyum. Kısa süredir freelance frontend developer olarak çalışıyorum. Ethical Hacker (siber güvenlik) eğitimim devam ediyor; Linux ve sanal makine (VirtualBox) ortamlarında rahatım. Sıfırdan tam fonksiyonel web uygulamaları geliştirebilecek teknik bağımsızlığa sahibim; temiz ve sürdürülebilir koda odaklanıyorum.`,
} as const

export const navLinks: NavLink[] = [
  { id: 'hero', label: 'Ana Sayfa' },
  { id: 'about', label: 'Hakkımda' },
  { id: 'projects', label: 'Projeler' },
  { id: 'references', label: 'Referanslar' },
  { id: 'contact', label: 'İletişim' },
]

export const skills: Skill[] = [
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'React Router', category: 'frontend' },
  { name: 'Vite', category: 'frontend' },
  { name: 'Supabase', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'API Entegrasyonu', category: 'backend' },
  { name: 'Resend', category: 'backend' },
  { name: 'Git & GitHub', category: 'devops' },
  { name: 'Vercel', category: 'devops' },
  { name: 'Linux', category: 'devops' },
  { name: 'Ethical Hacking', category: 'security' },
  { name: 'Supabase Auth', category: 'security' },
]

export const projects: Project[] = [
  {
    id: 'flocksocial',
    title: 'FlockSocial — Sosyal Medya Platformu',
    description:
      'Sıfırdan geliştirdiğim tam fonksiyonel sosyal medya uygulaması. Supabase Auth ile kayıt, giriş ve oturum yönetimi; gerçek zamanlı post paylaşımı ve listeleme; kalıcı beğeni sistemi; profil sayfası (biyografi, takipçi sayısı, kullanıcı postları); takip et / takipten çık; beğeni ve takip için Supabase trigger ile otomatik bildirimler. React Router ile korumalı rotalar, Context API ile global auth, mobil uyumlu arayüz ve alt menü. GitHub push ile Vercel üzerinde otomatik CI/CD yayını.',
    year: '2025',
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'React Router',
      'Vite',
      'Resend',
      'Vercel',
    ],
    githubUrl: 'https://github.com/ozgegumus1',
    liveUrl: 'https://flocksocial.vercel.app',
  },
  {
    id: 'adalet-hukuk',
    title: 'Adalet Hukuk — Hukuki Danışmanlık',
    description:
      'Hukuk bürosu için kurumsal tanıtım sitesi: ticaret, gayrimenkul, aile, iş, ceza ve sözleşme hukuku alanlarında hizmet kartları; profesyonel tipografi ve koyu lacivert–altın renk paleti; Ana Sayfa, Hakkımızda, Hizmetler, Ekip ve İletişim bölümleri. Responsive, okunabilir ve güven veren bir kullanıcı deneyimi hedeflendi.',
    year: '2025',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Tasarım'],
    githubUrl: 'https://github.com/ozgegumus1',
  },
  {
    id: 'portfolio',
    title: 'Kişisel Portföy Sitesi',
    description:
      'Bu site — gooey SVG arka plan, fare ile etkileşimli gradient, Framer Motion animasyonlar ve portfolioData.ts üzerinden yönetilen dinamik içerik yapısı.',
    year: '2026',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/ozgegumus1',
  },
]

export const references: Reference[] = [
  {
    id: 'berat-eren',
    name: 'Berat Eren',
    title: 'Mid Senior Full Stack Developer',
    company: 'Munzur Su',
  },
]

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/ozgegumus1', label: 'GitHub' },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ozgegumus1',
    label: 'LinkedIn',
  },
  {
    platform: 'E-posta',
    url: 'mailto:ozgegumus1@icloud.com',
    label: 'E-posta',
  },
]

export const heroCtas = [
  { id: 'work', label: 'Projelerim', href: '#projects', variant: 'primary' as const },
  { id: 'contact', label: 'İletişim', href: '#contact', variant: 'outline' as const },
]

export const ui = {
  sections: {
    about: 'Hakkımda',
    expertise: 'Yetkinlikler',
    projects: 'Projeler',
    references: 'Referanslar',
    contact: 'İletişim',
  },
  hero: {
    scroll: 'Kaydır',
  },
  contact: {
    name: 'Ad',
    email: 'E-posta',
    message: 'Mesaj',
    submit: 'Mesaj gönder',
    success: 'Mesajınız alındı — teşekkür ederim. (Demo form)',
    hint: 'Doğrudan yazmak için e-postaya tıklayın.',
  },
  projects: {
    source: 'GitHub',
    live: 'Canlı site',
  },
  skillCategories: {
    frontend: 'Ön yüz',
    backend: 'Arka plan & veri',
    devops: 'Araçlar & yayın',
    security: 'Güvenlik',
  },
} as const