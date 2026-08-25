export const heroContent = {
  headline: "RAG sistemleri ve LLM'lerle geleceği inşa ediyorum",
  intro:
    "2026 yılında Çukurova Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum. RAG sistemleri, LLM entegrasyonları ve doğal dil işleme üzerine yoğunlaşıyorum.",
  skills: ["Python", "LangChain", "RAG", "FastAPI"],
};

export const projects = [
  {
    name: "Ops-Genius",
    description:
      "LangChain ve ChromaDB ile geliştirdiğim, Groq API üzerinden Llama 3.1 8B kullanan RAG tabanlı müşteri destek sistemi. Bitext Müşteri Destek veri kümesi (26.872 satır, 27 intent) ve 5 politika belgesinden oluşturulan sentetik bilgi tabanı ile eğitildi. Doküman zenginleştirme, yer tutucu ön işleme ve istem optimizasyonu ile yanıt doğruluğunu %55,6'dan %98,7'ye çıkardım. Hem bağımsız bir Streamlit sohbet arayüzü hem de entegre AI destek widget'ı olarak sunuma hazır hale getirildi.",
    tags: ["LangChain", "ChromaDB", "Llama 3.1", "FastAPI", "Streamlit"],
    featured: true,
    github: "https://github.com/Hasibenurtunc/ops-genius",
  },
  {
    name: "SME Orchestrator",
    description:
      "Türk KOBİ'leri için uçtan uca yapay zeka operasyon platformu. 3 kişilik bir ekiple 5 günlük bir hackathon'da (YZTA Bootcamp) geliştirildi. Groq ve Ollama üzerinden yapay zeka modellerini entegre eden FastAPI ve Next.js tabanlı full-stack mimari. KOBİ sahiplerinin günlük hayatta kullandıkları bir kanal üzerinden platforma erişebilmeleri için WhatsApp entegrasyonu içerir.",
    tags: ["FastAPI", "Next.js", "Groq", "Ollama", "WhatsApp API"],
    featured: true,
    github: "https://github.com/NBWolfer/YZTA_HACKATHON_2026",
  },
  {
    name: "Equa",
    description:
      "Bootcamp ve akademi gibi yoğun eğitim süreçlerinden geçen öğrenciler için tasarlanmış, yapay zeka destekli bir kariyer ve kapasite koçu. Kurum müfredatına dayalı RAG tabanlı görev önerileri sunar, öğrencinin haftalık ilerlemesini takip eder; kurumlara ise öğrenci risk sinyallerini (Yeşil/Sarı/Kırmızı) gösteren bir dashboard sağlar. YZTA Bootcamp'te 5 kişilik bir ekiple geliştirildi.",
    tags: ["FastAPI", "React", "PostgreSQL", "RAG"],
    github: "https://github.com/Lorstann/yzta-bootcamp-26",
  },
  {
    name: "TÜİK Enflasyon Analizi",
    description:
      "2005–2025 yılları arasındaki Türkiye enflasyon (TÜFE) verilerini (14.246 kayıt) inceleyen bireysel veri analizi projesi — trend analizi, korelasyon ve doğrusal regresyon tahmin modeli.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/Hasibenurtunc/TUIK-Enflasyon-Analizi-Projesi",
  },
];

export const experience = [
  {
    company: "BudunAI",
    role: "Veri Bilimi Stajyeri",
    period: "Temmuz–Ağustos 2025 · Adnan Menderes Üniversitesi Teknokent, Aydın",
    description:
      "Data Science stajyeri olarak veri temizleme, EDA ve görselleştirme süreçlerinde görev aldım. Bağımsız geliştirdiğim TÜİK Enflasyon Analizi projesinde 2005–2025 dönemine ait 14.246 kayıtlık TÜFE verisini analiz ederek trend, korelasyon ve lineer regresyon ile tahmin modeli oluşturdum. Python (pandas, numpy, matplotlib, seaborn, scikit-learn) kullandım.",
  },
  {
    company: "Polat Group Holding",
    role: "BT Stajyeri",
    period: "Eylül 2025 · Aydın",
    description:
      "IT departmanı bünyesinde SAP MM (Materials Management) modülü üzerinde staj yaptım. Malzeme yönetimi süreçleri ve sistem kullanımı hakkında bilgi edindim, ekip çalışmalarını gözlemleme fırsatı buldum.",
  },
  {
    company: "Yapay Zeka Teknoloji Akademisi (YZTA)",
    role: "Yapay Zeka Bursiyeri",
    period: "Aralık 2025–Ağustos 2026 · Uzaktan",
    description:
      "Google Türkiye, T3 Vakfı ve Girişimcilik Vakfı desteğiyle yürütülen AI Bursiyerliği programında proje yönetimi, web uygulama geliştirme ve derin öğrenme eğitimleri aldım. SME Orchestrator'ı geliştiren 3 kişilik hackathon ekibinin üyesiydim. Bootcamp'in son aşamasında, 5 kişilik bir ekiple bootcamp öğrencileri için yapay zeka destekli bir kariyer koçu platformu olan Equa'yı geliştirdim.",
  },
];

export const education = {
  intro: "Yeni Mezun Bilgisayar Mühendisi | LangChain, RAG, LLM Uygulamaları",
  university: "Çukurova Üniversitesi",
  department: "Bilgisayar Mühendisliği",
  years: "2021 - 2026",
};

export const contact = {
  github:   "https://github.com/Hasibenurtunc",
  linkedin: "https://linkedin.com/in/hasibenurtunc",
  email:    "hasibenur.tunc1395@gmail.com",
};
