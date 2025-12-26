import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold font-heading">Портфолио</h1>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors hover:text-primary ${
                  activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                О себе
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`transition-colors hover:text-primary ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <img
              src="https://cdn.poehali.dev/projects/2a2dd0a7-585a-4f8c-bc71-93e4152cd577/files/be3bc382-ac23-4699-89b9-536574a919c0.jpg"
              alt="Николашкин Артём"
              className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-primary shadow-lg"
            />
          </div>
          <h2 className="text-6xl font-bold font-heading mb-6 text-secondary">
            Николашкин Артём
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Добро пожаловать! Здесь вы найдете информацию о моем опыте, навыках и достижениях в профессиональной сфере.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('contacts')}
            className="text-lg px-8 py-6"
          >
            Связаться со мной
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="about" className="min-h-screen py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-heading mb-12 text-center">О себе</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 hover:shadow-lg transition-shadow animate-slide-up">
              <div className="mb-4 text-primary">
                <Icon name="Briefcase" size={40} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">Опыт и деятельность</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Профорг группы М561</h4>
                  <p className="text-muted-foreground">Активная студенческая позиция</p>
                  <p className="mt-2">Представляю интересы студентов группы, координирую взаимодействие с администрацией учебного заведения</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Член профкома</h4>
                  <p className="text-muted-foreground">Профсоюзная деятельность</p>
                  <p className="mt-2">Участвую в работе профсоюзного комитета, защищаю права студентов</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Разработчик</h4>
                  <p className="text-muted-foreground">IT-сфера</p>
                  <p className="mt-2">Занимаюсь разработкой веб-приложений и программных решений</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4 text-primary">
                <Icon name="Award" size={40} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">Навыки</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">Управление проектами</span>
                    <span className="text-muted-foreground">95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">Аналитика данных</span>
                    <span className="text-muted-foreground">90%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">Коммуникация</span>
                    <span className="text-muted-foreground">88%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">Стратегическое планирование</span>
                    <span className="text-muted-foreground">92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4 text-primary">
                <Icon name="Trophy" size={40} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">Достижения</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                  <span>Организовал более 10 студенческих мероприятий для группы и факультета</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                  <span>Успешно реализовал несколько IT-проектов в области веб-разработки</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                  <span>Активное участие в общественной жизни учебного заведения</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                  <span>Координация работы профсоюзной организации студентов</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold font-heading mb-6">Контакты для связи</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Буду рад обсудить возможности сотрудничества или ответить на ваши вопросы
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Mail" className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:your.email@example.com" className="text-primary hover:underline">
                your.email@example.com
              </a>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Phone" className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-bold text-lg mb-2">Телефон</h3>
              <a href="tel:+79001234567" className="text-primary hover:underline">
                +7 (900) 123-45-67
              </a>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Linkedin" className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-bold text-lg mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                linkedin.com/in/yourprofile
              </a>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="MessageCircle" className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-bold text-lg mb-2">Telegram</h3>
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                @yourusername
              </a>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Профессиональное портфолио. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;