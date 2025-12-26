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
                onClick={() => scrollToSection('achievements')}
                className={`transition-colors hover:text-primary ${
                  activeSection === 'achievements' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Достижения
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
              src="https://cdn.poehali.dev/files/photo_2025-12-26_20-02-33.jpg"
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
          
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow animate-slide-up">
              <div className="mb-4 text-primary">
                <Icon name="Briefcase" size={40} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">Профорг группы М561</h3>
              <p className="text-muted-foreground mb-4">Активная студенческая позиция</p>
              <p>Представляю интересы студентов группы, координирую взаимодействие с администрацией учебного заведения</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4 text-primary">
                <Icon name="Users" size={40} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">Член профкома</h3>
              <p className="text-muted-foreground mb-4">Профсоюзная деятельность</p>
              <p>Участвую в работе профсоюзного комитета, защищаю права студентов</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow animate-slide-up md:col-span-2" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4 text-primary">
                <Icon name="Calendar" size={40} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">Организатор мероприятий</h3>
              <p className="text-muted-foreground mb-4">Активная общественная позиция</p>
              <p>Организую и провожу различные студенческие, культурные и спортивные мероприятия для группы, факультета и учебного заведения</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="achievements" className="min-h-screen py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-heading mb-12 text-center">Достижения</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-slide-up">
              <img
                src="https://cdn.poehali.dev/projects/2a2dd0a7-585a-4f8c-bc71-93e4152cd577/files/116ac5bf-8dac-45e9-ac70-6b8b1429bc31.jpg"
                alt="Участник актива профбюро"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Icon name="Users" className="mr-2 text-primary" size={24} />
                  <h3 className="text-xl font-bold font-heading">Участник актива профбюро</h3>
                </div>
                <p className="text-muted-foreground">
                  Активная работа в составе профсоюзного бюро, участие в принятии важных решений и защите прав студентов
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <img
                src="https://cdn.poehali.dev/projects/2a2dd0a7-585a-4f8c-bc71-93e4152cd577/files/5388d75c-50de-4882-8bb0-539deb9fe19f.jpg"
                alt="Бывший кадет"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Icon name="Shield" className="mr-2 text-primary" size={24} />
                  <h3 className="text-xl font-bold font-heading">Бывший кадет</h3>
                </div>
                <p className="text-muted-foreground">
                  Прошел обучение в кадетском корпусе, получил навыки дисциплины, ответственности и патриотизма
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://cdn.poehali.dev/projects/2a2dd0a7-585a-4f8c-bc71-93e4152cd577/files/e52dea2e-86a8-4111-9e93-cac0ab5764cc.jpg"
                alt="Спортсмен"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Icon name="Trophy" className="mr-2 text-primary" size={24} />
                  <h3 className="text-xl font-bold font-heading">Спортсмен</h3>
                </div>
                <p className="text-muted-foreground">
                  Активные занятия спортом, участие в соревнованиях и поддержание здорового образа жизни
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <img
                src="https://cdn.poehali.dev/projects/2a2dd0a7-585a-4f8c-bc71-93e4152cd577/files/f0d046ec-760a-4b24-bf95-b91cb1701408.jpg"
                alt="Активист-волонтер"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Icon name="Heart" className="mr-2 text-primary" size={24} />
                  <h3 className="text-xl font-bold font-heading">Активист-волонтер</h3>
                </div>
                <p className="text-muted-foreground">
                  Участие в волонтерских проектах, помощь нуждающимся и активная общественная позиция
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <img
                src="https://cdn.poehali.dev/projects/2a2dd0a7-585a-4f8c-bc71-93e4152cd577/files/d47582da-20cf-4737-9c2b-1995f24dca3d.jpg"
                alt="Участник патриотических мероприятий"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Icon name="Flag" className="mr-2 text-primary" size={24} />
                  <h3 className="text-xl font-bold font-heading">Участник и организатор патриотических мероприятий</h3>
                </div>
                <p className="text-muted-foreground">
                  Организация и участие в патриотических акциях, мероприятиях памяти и военно-патриотических событиях
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <img
                src="https://cdn.poehali.dev/projects/2a2dd0a7-585a-4f8c-bc71-93e4152cd577/files/7d23fbce-90b9-4876-b8d0-bb8c073d1f6d.jpg"
                alt="Представитель проф-активистов"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Icon name="Award" className="mr-2 text-primary" size={24} />
                  <h3 className="text-xl font-bold font-heading">Представитель проф-активистов группы М561</h3>
                </div>
                <p className="text-muted-foreground">
                  Являюсь официальным представителем профсоюзных активистов группы, координирую их деятельность
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen flex items-center justify-center py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold font-heading mb-6">Контакты для связи</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Буду рад обсудить возможности сотрудничества или ответить на ваши вопросы
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
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
          <p>&copy; 2024 Николашкин Артём. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;