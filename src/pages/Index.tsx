import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [passengers, setPassengers] = useState('');
  const [route, setRoute] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const calculatePrice = () => {
    const passengerCount = parseInt(passengers) || 0;
    const basePrice = route === 'city' ? 3000 : route === 'airport' ? 5000 : 8000;
    const total = basePrice + (passengerCount * 150);
    setCalculatedPrice(total);
  };

  return (
    <div className="min-h-screen bg-transport-light-blue font-open-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Bus" size={32} className="text-transport-blue" />
              <h1 className="font-montserrat font-bold text-2xl text-transport-dark-blue">СочиТранс</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-transport-gray hover:text-transport-blue transition-colors">Услуги</a>
              <a href="#booking" className="text-transport-gray hover:text-transport-blue transition-colors">Бронирование</a>
              <a href="#about" className="text-transport-gray hover:text-transport-blue transition-colors">О компании</a>
              <a href="#reviews" className="text-transport-gray hover:text-transport-blue transition-colors">Отзывы</a>
              <a href="#contacts" className="text-transport-gray hover:text-transport-blue transition-colors">Контакты</a>
            </nav>
            <Button className="bg-transport-blue hover:bg-transport-dark-blue text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-transport-blue to-transport-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white text-transport-blue hover:bg-gray-100">
                🚌 Комфортные перевозки по Сочи
              </Badge>
              <h1 className="font-montserrat font-bold text-5xl leading-tight">
                Пассажирские перевозки по всему Сочи и за его пределами
              </h1>
              <p className="text-xl text-blue-100">
                Безопасные и комфортные поездки для групп от 15 до 55 мест. 
                Собственный автопарк современных автобусов с опытными водителями.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-transport-blue hover:bg-gray-100">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-transport-blue">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 928 450-25-25
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/b8f4a7b3-d3ea-4289-baf2-fa13cf73ba12.jpg" 
                alt="Современный автобус компании СочиТранс"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-transport-dark-blue mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-transport-gray max-w-3xl mx-auto">
              Предоставляем полный спектр пассажирских перевозок с гарантией безопасности и комфорта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="MapPin" size={48} className="text-transport-blue mx-auto mb-4" />
                <CardTitle className="font-montserrat">Экскурсионные туры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-transport-gray text-center">
                  Живописные места Сочи, комфортабельные автобусы, профессиональные гиды
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Plane" size={48} className="text-transport-blue mx-auto mb-4" />
                <CardTitle className="font-montserrat">Трансферы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-transport-gray text-center">
                  Аэропорт, вокзал, отели - доставим точно по расписанию
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Building" size={48} className="text-transport-blue mx-auto mb-4" />
                <CardTitle className="font-montserrat">Городские маршруты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-transport-gray text-center">
                  Удобные поездки по Сочи для групп и корпоративных клиентов
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Route" size={48} className="text-transport-blue mx-auto mb-4" />
                <CardTitle className="font-montserrat">Междугородние</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-transport-gray text-center">
                  Поездки по всему Краснодарскому краю на современных автобусах
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-transport-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-transport-dark-blue mb-4">
              Бронирование онлайн
            </h2>
            <p className="text-xl text-transport-gray">
              Рассчитайте стоимость и забронируйте поездку прямо сейчас
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl">Расчет стоимости</CardTitle>
                <CardDescription>
                  Заполните данные для получения точной стоимости поездки
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="route">Тип маршрута</Label>
                  <Select value={route} onValueChange={setRoute}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип поездки" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="city">Городской маршрут</SelectItem>
                      <SelectItem value="airport">Трансфер в аэропорт</SelectItem>
                      <SelectItem value="intercity">Междугородний</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="passengers">Количество пассажиров</Label>
                  <Input
                    id="passengers"
                    type="number"
                    placeholder="Введите количество"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="comments">Дополнительные пожелания</Label>
                  <Textarea
                    id="comments"
                    placeholder="Особые требования, время отправления..."
                    rows={3}
                  />
                </div>
                
                <Button onClick={calculatePrice} className="w-full bg-transport-blue hover:bg-transport-dark-blue">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                
                {calculatedPrice > 0 && (
                  <div className="bg-transport-blue text-white p-4 rounded-lg text-center">
                    <p className="text-lg font-montserrat">
                      Примерная стоимость: <span className="font-bold text-2xl">{calculatedPrice.toLocaleString()} ₽</span>
                    </p>
                    <p className="text-sm mt-2 opacity-90">
                      *Включает страхование пассажиров
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="font-montserrat flex items-center">
                    <Icon name="Shield" size={24} className="text-green-500 mr-2" />
                    Страхование пассажиров
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-transport-gray">
                    Все наши пассажиры застрахованы на сумму до 2 млн рублей. 
                    Страховка включена в стоимость билета без дополнительной платы.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="font-montserrat">Почему выбирают нас</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-green-500" />
                      <span>Собственный автопарк современных автобусов</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-green-500" />
                      <span>Опытные водители с правами категории D</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-green-500" />
                      <span>Точное соблюдение расписания</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-green-500" />
                      <span>Круглосуточная поддержка клиентов</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-4xl text-transport-dark-blue mb-6">
                О компании СочиТранс
              </h2>
              <p className="text-xl text-transport-gray mb-6">
                Более 10 лет обеспечиваем безопасные и комфортные пассажирские перевозки 
                по Сочи и Краснодарскому краю.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={24} className="text-transport-blue" />
                  <span className="font-semibold">Все необходимые лицензии и разрешения</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={24} className="text-transport-blue" />
                  <span className="font-semibold">Более 50,000 довольных пассажиров</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Truck" size={24} className="text-transport-blue" />
                  <span className="font-semibold">Автопарк из 25 современных автобусов</span>
                </div>
              </div>
            </div>
            <div className="bg-transport-light-blue p-8 rounded-lg">
              <h3 className="font-montserrat font-bold text-2xl text-transport-dark-blue mb-6">
                Наши преимущества
              </h3>
              <Accordion type="single" collapsible>
                <AccordionItem value="comfort">
                  <AccordionTrigger>Комфорт и безопасность</AccordionTrigger>
                  <AccordionContent>
                    Все автобусы оснащены кондиционерами, удобными креслами, 
                    системами безопасности и регулярно проходят техосмотр.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="drivers">
                  <AccordionTrigger>Профессиональные водители</AccordionTrigger>
                  <AccordionContent>
                    Опытные водители с категорией D, стажем от 5 лет и 
                    регулярным прохождением курсов повышения квалификации.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="service">
                  <AccordionTrigger>Сервис высокого уровня</AccordionTrigger>
                  <AccordionContent>
                    Индивидуальный подход к каждому клиенту, гибкие тарифы 
                    и круглосуточная поддержка для решения любых вопросов.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-transport-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-transport-dark-blue mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-xl text-transport-gray">
              Что говорят о нас пассажиры
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-transport-gray mb-4">
                  "Отличный сервис! Автобус прибыл точно по расписанию, водитель очень 
                  вежливый и профессиональный. Поездка прошла комфортно."
                </p>
                <p className="font-semibold text-transport-dark-blue">— Елена К.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-transport-gray mb-4">
                  "Организовывали корпоративную поездку на 40 человек. Всё прошло 
                  идеально, от бронирования до возвращения домой."
                </p>
                <p className="font-semibold text-transport-dark-blue">— Михаил Р.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-transport-gray mb-4">
                  "Пользуемся услугами уже несколько лет. Всегда надёжно, 
                  безопасно и по разумным ценам. Рекомендуем!"
                </p>
                <p className="font-semibold text-transport-dark-blue">— Анна С.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-transport-dark-blue mb-4">
              Контакты
            </h2>
            <p className="text-xl text-transport-gray">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <Icon name="Phone" size={48} className="text-transport-blue mx-auto" />
              <h3 className="font-montserrat font-bold text-xl">Телефон</h3>
              <p className="text-transport-gray">
                +7 928 450-25-25<br />
                Круглосуточно
              </p>
            </div>
            
            <div className="space-y-4">
              <Icon name="MapPin" size={48} className="text-transport-blue mx-auto" />
              <h3 className="font-montserrat font-bold text-xl">Адрес</h3>
              <p className="text-transport-gray">
                г. Сочи, ул. Транспортная, 15<br />
                Офис работает 24/7
              </p>
            </div>
            
            <div className="space-y-4">
              <Icon name="Mail" size={48} className="text-transport-blue mx-auto" />
              <h3 className="font-montserrat font-bold text-xl">Email</h3>
              <p className="text-transport-gray">
                info@sochi-trans.ru<br />
                booking@sochi-trans.ru
              </p>
            </div>
            
            <div className="space-y-4">
              <Icon name="Clock" size={48} className="text-transport-blue mx-auto" />
              <h3 className="font-montserrat font-bold text-xl">Режим работы</h3>
              <p className="text-transport-gray">
                Диспетчерская: круглосуточно<br />
                Офис: ежедневно 8:00-20:00
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="tel:+79284502525" className="inline-block">
              <Button size="lg" className="bg-transport-blue hover:bg-transport-dark-blue text-white">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 928 450-25-25
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transport-dark-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Bus" size={24} />
                <h3 className="font-montserrat font-bold text-xl">СочиТранс</h3>
              </div>
              <p className="text-blue-200">
                Надёжные пассажирские перевозки по Сочи и Краснодарскому краю
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Экскурсионные туры</li>
                <li>Трансферы</li>
                <li>Городские маршруты</li>
                <li>Междугородние поездки</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-blue-200">
                <li>О нас</li>
                <li>Лицензии</li>
                <li>Автопарк</li>
                <li>Вакансии</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-blue-200">
                <p>+7 928 450-25-25</p>
                <p>info@sochi-trans.ru</p>
                <p>г. Сочи, ул. Транспортная, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-600 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 СочиТранс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;