
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Camera, Clapperboard, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 to-white">
      {/* Шапка */}
      <header className="py-6 bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold text-indigo-700">Кастинг СПб</div>
          <a 
            href="https://t.me/vocoders" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <Mail size={18} />
            <span className="hidden sm:inline">Связаться</span>
          </a>
        </div>
      </header>

      {/* Главная секция */}
      <main className="flex-grow">
        {/* Баннер */}
        <section className="py-16 md:py-24 px-4 container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800">
            Кастинги в Санкт-Петербурге
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Начни карьеру модели или актрисы! ТФП съёмки для талантливых новичков.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700"
              onClick={() => {
                const element = document.getElementById('about');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Узнать больше
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              onClick={() => {
                window.open('https://t.me/vocoders', '_blank');
              }}
            >
              Связаться
            </Button>
          </div>
        </section>

        {/* О проекте */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-800">Кого мы ищем</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Camera className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle>Начинающие модели</CardTitle>
                  <CardDescription>
                    Для фото и видео проектов в формате ТФП
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Ищем девушек с привлекательной внешностью европейского типа. Отсутствие опыта - не проблема!
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Clapperboard className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle>Начинающие актрисы</CardTitle>
                  <CardDescription>
                    Для творческих видеопроектов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Приглашаем девушек с природными артистическими задатками. Обучим всему необходимому.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle>Санкт-Петербург</CardTitle>
                  <CardDescription>
                    Съёмки проходят в Санкт-Петербурге
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Все проекты проходят в комфортной обстановке в Санкт-Петербурге. Безопасность гарантируем.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Требования */}
        <section className="py-16 bg-indigo-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-slate-800">Требования к кандидатам</h2>
            
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">1</div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Привлекательная внешность</h3>
                    <p className="text-slate-600 mt-1">Европейский тип внешности</p>
                  </div>
                </li>
                <Separator />
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">2</div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Природные артистические задатки</h3>
                    <p className="text-slate-600 mt-1">Способность к самовыражению, творческое мышление</p>
                  </div>
                </li>
                <Separator />
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">3</div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Желание обучаться</h3>
                    <p className="text-slate-600 mt-1">Готовность совершенствовать навыки и работать над собой</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="py-16 md:py-24 px-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Начни карьеру модели или актрисы сегодня!</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
              Предоставляем опыт, обучение и портфолио для твоего успешного старта в индустрии
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-indigo-600 hover:bg-gray-100"
              onClick={() => {
                window.open('https://t.me/vocoders', '_blank');
              }}
            >
              Написать в Telegram
            </Button>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="py-6 bg-slate-900 text-slate-400 text-sm">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>© 2025 Кастинг СПб. Все права защищены.</p>
          <p className="mt-2">
            Для обратной связи: <a href="https://t.me/vocoders" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">t.me/vocoders</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
