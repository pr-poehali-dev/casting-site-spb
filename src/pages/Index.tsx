
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Camera, Video, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Фиксированная навигация */}
      <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            CASTING SPB
          </div>
          <a 
            href="https://t.me/vocoders" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
          >
            <Mail className="h-4 w-4" />
            <span>Telegram</span>
          </a>
        </div>
      </nav>

      {/* Герой-секция */}
      <section className="relative pt-32 pb-20 min-h-screen flex items-center">
        {/* Фоновые элементы */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-600/30 blur-3xl"></div>
          <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-pink-600/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl"></div>
        </div>
        
        {/* Контент */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-8">
              <Star className="h-4 w-4 text-yellow-400" /> 
              <span>ТФП проекты в Санкт-Петербурге</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text leading-tight">
              Кастинг моделей и актрис
            </h1>
            
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Ищем талантливых начинающих моделей и актрис для разнообразных видеопроектов в Санкт-Петербурге
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 rounded-full px-8 py-6 text-lg h-auto"
                onClick={() => {
                  window.open('https://t.me/vocoders', '_blank');
                }}
              >
                Присоединиться к проекту
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Требования */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
              Кого мы ищем
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transform transition-transform hover:scale-105 hover:bg-white/10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 mb-6">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Привлекательная внешность</h3>
                <p className="text-white/70">
                  Ищем девушек с яркой, запоминающейся и гармоничной внешностью для фото и видеосъемок.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transform transition-transform hover:scale-105 hover:bg-white/10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Европейский тип внешности</h3>
                <p className="text-white/70">
                  Предпочтение отдается девушкам с европейским типом внешности, соответствующим концепции проектов.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transform transition-transform hover:scale-105 hover:bg-white/10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 mb-6">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Артистические задатки</h3>
                <p className="text-white/70">
                  Важны естественность, харизма и природные артистические способности. Опыт не требуется.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О проекте */}
      <section className="py-20 bg-gradient-to-b from-purple-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-pink-600/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              О наших проектах
            </h2>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Для ТФП проектов ищу в Санкт-Петербурге начинающую актрису, модель для различных видео съёмок.
              </p>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Рассмотрю начинающих моделей и актрис, обучу всему что связано со съёмками. Это отличная возможность получить опыт и портфолио.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600"></div>
                <h3 className="text-2xl font-bold text-white">Что вы получаете</h3>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/80">Профессиональные фото и видеоматериалы для вашего портфолио</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/80">Обучение основам актерского мастерства и работы на камеру</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/80">Ценный опыт в индустрии и возможности для дальнейшего роста</span>
                </li>
              </ul>
              
              <Button 
                className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 rounded-full px-8 py-6 text-lg h-auto"
                onClick={() => {
                  window.open('https://t.me/vocoders', '_blank');
                }}
              >
                Связаться в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              CASTING SPB
            </div>
            
            <div className="text-white/60 text-center md:text-right">
              <p>© 2025 Кастинг в Санкт-Петербурге</p>
              <p className="mt-1">Связаться: <a href="https://t.me/vocoders" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">t.me/vocoders</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
