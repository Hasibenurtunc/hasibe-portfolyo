import Popover from '../Popover';

export default function AboutPopover({ onClose }) {
  return (
    <Popover onClose={onClose} className="popover-about">
      <div className="popover-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        Hakkımda
      </div>
      <div className="popover-divider" />
      <div className="about-body">
        <p className="about-intro">
          2026 yılında Çukurova Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum.
          Yapay zeka ve veri bilimi alanlarında çalışmaktan keyif alıyorum; verilerden anlam
          çıkarmak, bu içgörülerle gerçek hayat problemlerine çözüm üretmek ve fark yaratan
          uygulamalar geliştirmek beni heyecanlandırıyor. Kendimi her gün biraz daha geliştirmeye çalışıyorum. Merak etmekten, denemekten ve ilerlemeye
          devam etmekten vazgeçmiyorum.
        </p>
        <div className="about-tags">
          {['Python', 'LangChain', 'RAG', 'FastAPI', 'LLM', 'NLP', 'Pandas', 'Scikit-learn'].map((tag) => (
            <span className="project-tag" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="about-highlights">
          <div className="about-highlight-item">
            <span className="about-highlight-icon">🎓</span>
            <div>
              <div className="about-highlight-label">Çukurova Üniversitesi</div>
              <div className="about-highlight-sub">Bilgisayar Mühendisliği · 2021–2026</div>
            </div>
          </div>
          <div className="about-highlight-item">
            <span className="about-highlight-icon">🤖</span>
            <div>
              <div className="about-highlight-label">Yapay Zeka & NLP</div>
              <div className="about-highlight-sub">RAG Mimarileri · LLM Entegrasyonları · Doğal Dil İşleme</div>
            </div>
          </div>
          <div className="about-highlight-item">
            <span className="about-highlight-icon">📊</span>
            <div>
              <div className="about-highlight-label">Veri Bilimi</div>
              <div className="about-highlight-sub">Veri Analizi · Görselleştirme · Makine Öğrenmesi</div>
            </div>
          </div>
        </div>
      </div>
    </Popover>
  );
}
