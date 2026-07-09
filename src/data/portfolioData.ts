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
  githubUrl?: string
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
    id: 'intra',
    title: "Intra — Kurumsal İç İletişim & Mesai Sistemi",
    description:
      `Büyük işletmelerin iç iletişim ve mesai ihtiyaçlarını çözen, hazır framework kullanmadan sıfırdan geliştirdiğim full stack SaaS ürünüm Intra'yı henüz tamamladım. Performans için HTTP isteklerini PHP (REST API) ile yönetirken, anlık mesajlaşmayı sıfır gecikmeli Node.js ve WebSocket sunucusuyla kurguladım. Bir personel sistemde pasife alındığında, açık olan WebSocket bağlantısını milisaniyeler içinde sunucudan kesen dinamik bir altyapı. Admin girişleri zamanlama saldırılarına karşı hash_equals ile doğrulanır. Kimlik taklidini engelleyen, personele özel benzersiz giriş kodları ve admin panelinden mesai kayıtlarını Excel'e aktarma seçeneği. Arayüz ve mesai manipülasyonlarını engellemek için cihaz saatini yok sayarak tüm giriş/çıkış kayıtlarını tamamen sunucu saatine endeksledim, yetkilendirmeleri de sunucu tarafında çift katmanlı doğrulattım. Geçmiş kayıtların İK raporları için korunması ve bir mobil uygulama gibi çalışan tam ekran PWA deneyimi sundum.`,
    year: '2026',
    techStack: ['PHP', 'Node.js', 'WebSocket (ws)', 'MySQL', 'REST API', 'JavaScript', 'PWA'],
  },
  {
    id: 'flocksocial',
    title: 'FlockSocial — Sosyal Medya Platformu',
  description:
      `Flock, React ve Supabase kullanarak uçtan uca kendi kurduğum bir sosyal medya uygulaması. PWA olarak çalıştığı için telefona ana ekran uygulaması gibi eklenebiliyor. Merkezinde klasik bir akış var: post atma, beğenme, yorumlama, hashtag üzerinden arama. Buna ek olarak 24 saatte kaybolan bir hikaye özelliği geliştirdim. Mesajlaşma kısmını Supabase Realtime üzerine kurdum — mesajlar anlık iletiliyor, karşı taraf yazarken gösteriliyor, okundu bilgisi düşüyor. Gizli hesap açma, takip isteklerini onaylama, kullanıcı engelleme gibi işlemler Row Level Security ile güvence altında. Bildirimler (beğeni, yorum, takip) veritabanı trigger'larıyla otomatik üretiliyor ve okunmamış sayısı gerçek zamanlı takip ediliyor.`,
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
    id: 'portfolio',
    title: 'Kişisel Portföy Sitesi',
    description:
      'Bu site — gooey SVG arka plan, fare ile etkileşimli gradient, Framer Motion animasyonlar ve portfolioData.ts üzerinden yönetilen dinamik içerik yapısı.',
    year: '2026',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/ozgegumus1',
  },
  {
    id: 'vesta-pms',
    title: 'Vesta PMS — Otel Yönetim Paneli',
    description:
      'Vesta, otelcilik sektöründeki operasyonel süreçleri ve yasal yükümlülükleri frontend mimarisi üzerinde simüle eden modern bir Otel Yönetim Paneli (PMS) çalışmasıdır. Kullanıcıların oda durumlarını dinamik olarak izleyebildiği canlı bir resepsiyon matrisi ve hızlı check-in/check-out akışları barındırır. Projenin odak noktası, resepsiyona girişi yapılan misafirlerin verilerini işleyerek asenkron süreçlerle resmi onay kodları üreten sanal bir KBS modülünü merkezi bir state yönetimiyle senkronize çalıştırmasıdır. Tasarım tarafında göz yormayan, siber-koyu tonlarda ve glassmorphism efektlerine sahip modern bir kullanıcı arayüzü sunar.',
    year: '2026',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/ozgegumus1/vesta-pms',
    liveUrl: 'https://vesta-pms.vercel.app',
  },
  {
    id: 'gasoil',
    title: 'GasOil — Kurumsal Web Sitesi',
    description:
      'Endüstriyel üretim yapan uluslararası bir B2B firması için geliştirilmiş modern web arayüzü. Ürün kataloglarının hızlı ve her cihaza tam uyumlu şekilde sergilenmesi hedeflenerek, markanın kurumsal kimliğine uygun temiz bir kod yapısı oluşturulmuştur.',
    year: '2025',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveUrl: 'https://gasoil.com.tr',
  },
  {
    id: 'linespine',
    title: 'LineSpine — Ürün & Hizmet Tanıtım Sitesi',
    description:
      'Kullanıcı deneyimini merkeze alan, modern ve dinamik bir web projesi. Markanın dijital kimliğini ve vizyonunu öne çıkarmak amacıyla hızlı yüklenen, sade ve tamamen mobil uyumlu bir arayüz mimarisiyle geliştirilmiştir.',
    year: '2025',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveUrl: 'https://linespine.com',
  },
  {
    id: 'b2bagtaslar',
    title: 'B2B Ağtaşlar Group — Kurumsal Çözüm Sitesi',
    description:
      'Güvenlik sistemleri ve teknolojik altyapı çözümleri sunan bir B2B firması için geliştirilmiş modern kurumsal web sitesi. Müşteri güvenini yansıtan profesyonel tasarımıyla firmanın hizmetleri ve iletişim kanalları net biçimde hedeflendi.',
    year: '2025',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveUrl: 'https://b2bagtaslargroup.com',
  },
  {
    id: 'inkwell',
    title: 'Inkwell — Etkileşimli Kitap Sitesi',
    description:
      'Scroll ile ilerledikçe sayfa 3 boyutlu nesnelerle birlikte derinlik kazanan, kitap/yayınevi temalı bir web deneyimi. Sayfa kaydırma hareketi, sahnedeki objelerin dönüşünü ve konumunu kontrol ediyor; statik bir tanıtım sayfası yerine keşfedilen bir hikâye anlatımı kurgulandı.',
    year: '2026',
    techStack: [],
    liveUrl: 'https://bookieweb.vercel.app/',
  },
  {
    id: 'origin',
    title: 'ORIGIN — WebGL Deneyim Sitesi',
    description:
      'Kaydırmayla yönetilen bir WebGL deneyimi. Sayfayı aşağı kaydırdıkça binlerce parçacık sırayla galaksi, küre, torus düğümü ve dalga gibi farklı şekillere dönüşüyor; kamera açısı ve renkler de bu dönüşüme eşlik ediyor. Three.js ile yapılmış, tek sayfalık interaktif bir görsel yolculuk.',
    year: '2026',
    techStack: ['Three.js', 'JavaScript', 'WebGL'],
    liveUrl: 'https://webimmersive.vercel.app',
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