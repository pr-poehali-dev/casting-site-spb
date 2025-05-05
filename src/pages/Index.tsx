
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 to-white">
      {/* Шапка */}
      <header className="py-4 bg-white shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold text-indigo-700">Кастинг СПб</div>
          <a 
            href="https://t.me/vocoders" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
          >
            <Mail size={18} />
            <span className="hidden sm:inline">Связаться</span>
          </a>
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-slate-800">
            Кастинги в Санкт-Петербурге
          </h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg mb-4">
              Для ТФП проектов ищу в Санкт-Петербурге начинающую актрису, модель для различных видео съёмок.
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-slate-800">Требуемый типаж:</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Привлекательная внешность</li>
              <li>Европейский тип внешности</li>
              <li>Природные артистические задатки</li>
            </ul>
            
            <p className="mb-6">
              Рассмотрю начинающих моделей и актрис, обучу всему что связано со съёмками.
            </p>
            
            <div className="flex justify-center">
              <Button 
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700"
                onClick={() => {
                  window.open('https://t.me/vocoders', '_blank');
                }}
              >
                Связаться в Telegram
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Подвал */}
      <footer className="py-4 bg-slate-800 text-slate-300 text-sm text-center">
        <p>© 2025 Кастинг СПб | Обратная связь: <a href="https://t.me/vocoders" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-200">t.me/vocoders</a></p>
      </footer>
    </div>
  );
};

export default Index;
