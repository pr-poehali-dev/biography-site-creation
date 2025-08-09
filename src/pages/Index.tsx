import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect, useRef } from "react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BIOGRAPHY</h1>
          <div className="flex gap-8">
            <a href="#home" className="hover:text-gray-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#works" className="hover:text-gray-600 transition-colors">Works</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in-left">
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Алексей Криптов
              <br />
              <span className="text-gray-600">Crypto Trader</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Профессиональный криптотрейдер с 7-летним опытом работы на рынке цифровых активов. 
              Специализируюсь на техническом анализе и алгоритмической торговле.
            </p>
            <div className="flex gap-4">
              <Button className="bg-black text-white hover:bg-gray-800">
                СВЯЗАТЬСЯ
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                МОИ РАБОТЫ
              </Button>
            </div>
          </div>
          <div className="flex justify-center fade-in-right">
            <img 
              src="/img/e9779dd6-8022-42f1-9c1e-24d15d20df3a.jpg" 
              alt="Алексей Криптов"
              className="w-80 h-80 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="about" className="bg-gray-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center fade-in-up">Биография</h3>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="fade-in-left">
              <h4 className="text-2xl font-bold mb-6">Опыт и достижения</h4>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon name="TrendingUp" size={24} />
                    <span className="font-semibold">2017-2024</span>
                  </div>
                  <h5 className="font-bold mb-2">Профессиональный трейдер</h5>
                  <p className="text-gray-600">Управление портфелем свыше $2M. ROI 340% за последние 3 года.</p>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon name="Award" size={24} />
                    <span className="font-semibold">2020</span>
                  </div>
                  <h5 className="font-bold mb-2">Лучший трейдер года</h5>
                  <p className="text-gray-600">Награда биржи Binance за показатели доходности.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon name="BookOpen" size={24} />
                    <span className="font-semibold">2019</span>
                  </div>
                  <h5 className="font-bold mb-2">Автор курса</h5>
                  <p className="text-gray-600">"Технический анализ криптовалют" - 10,000+ студентов.</p>
                </Card>
              </div>
            </div>
            
            <div className="fade-in-right">
              <h4 className="text-2xl font-bold mb-6">Навыки</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Технический анализ</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Алгоритмическая торговля</span>
                    <span>88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Риск-менеджмент</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Python/JavaScript</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h5 className="font-bold mb-4">Специализации</h5>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Bitcoin</Badge>
                  <Badge variant="outline">Ethereum</Badge>
                  <Badge variant="outline">DeFi</Badge>
                  <Badge variant="outline">NFT</Badge>
                  <Badge variant="outline">Futures</Badge>
                  <Badge variant="outline">Spot Trading</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Gallery */}
      <section id="works" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center fade-in-up">Портфолио</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/img/081ecef1-069a-4683-82f0-15ecc69500af.jpg" 
                alt="Trading Charts"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="font-bold mb-2">Торговая стратегия</h5>
                <p className="text-gray-600 text-sm">Алгоритм на основе машинного обучения для BTC/USDT</p>
                <Button variant="outline" className="mt-4 w-full">
                  ПОДРОБНЕЕ
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow scale-in">
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                <Icon name="BarChart3" size={48} className="text-gray-400" />
              </div>
              <div className="p-6">
                <h5 className="font-bold mb-2">Аналитика DeFi</h5>
                <p className="text-gray-600 text-sm">Исследование доходности ликвидности Uniswap v3</p>
                <Button variant="outline" className="mt-4 w-full">
                  ЧИТАТЬ
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow scale-in">
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                <Icon name="TrendingUp" size={48} className="text-gray-400" />
              </div>
              <div className="p-6">
                <h5 className="font-bold mb-2">Прогноз рынка</h5>
                <p className="text-gray-600 text-sm">Квартальный отчет по криптовалютному рынку</p>
                <Button variant="outline" className="mt-4 w-full">
                  СКАЧАТЬ
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center fade-in-up">Публикации</h3>
          <div className="space-y-8">
            <Card className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h5 className="font-bold text-xl mb-2">Будущее DeFi: Анализ трендов 2024</h5>
                  <p className="text-gray-600">Подробный анализ развития децентрализованных финансов</p>
                </div>
                <Badge>Новое</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>15 января 2024</span>
                <span>•</span>
                <span>12 мин чтения</span>
              </div>
            </Card>

            <Card className="p-8 fade-in-up">
              <h5 className="font-bold text-xl mb-2">Как я заработал 500% на altcoin сезоне</h5>
              <p className="text-gray-600 mb-4">История успешных инвестиций в альтернативные криптовалюты</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>3 декабря 2023</span>
                <span>•</span>
                <span>8 мин чтения</span>
              </div>
            </Card>

            <Card className="p-8 fade-in-up">
              <h5 className="font-bold text-xl mb-2">Психология трейдинга: Работа с эмоциями</h5>
              <p className="text-gray-600 mb-4">Практические советы по ментальной подготовке трейдера</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>20 октября 2023</span>
                <span>•</span>
                <span>15 мин чтения</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 fade-in-up">Контакты</h3>
          <p className="text-xl text-gray-600 mb-12 fade-in-up">
            Готов обсудить инвестиционные возможности и поделиться опытом
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Icon name="Mail" size={32} className="mb-4" />
              <h5 className="font-bold mb-2">Email</h5>
              <p className="text-gray-600">aleksey@cryptotrader.ru</p>
            </div>
            
            <div className="flex flex-col items-center scale-in">
              <Icon name="MessageSquare" size={32} className="mb-4" />
              <h5 className="font-bold mb-2">Telegram</h5>
              <p className="text-gray-600">@aleksey_crypto</p>
            </div>
            
            <div className="flex flex-col items-center scale-in">
              <Icon name="Twitter" size={32} className="mb-4" />
              <h5 className="font-bold mb-2">Twitter</h5>
              <p className="text-gray-600">@aleksey_trader</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 fade-in-up">
            НАПИСАТЬ СООБЩЕНИЕ
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 Алексей Криптов. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;