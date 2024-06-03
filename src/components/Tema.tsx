import {FC, useLayoutEffect, useState, useEffect } from 'react';
import "../assets/css/select.css"

const ColorSelector: FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>('rgb(203, 159, 123)'); // Белый по умолчанию
  const [linkColor, setLinkColor] = useState<string>('rgb(252, 219, 179)'); // Цвет ссылок по умолчанию

  useEffect(() => {
    // Загрузка сохранённых цветов из localStorage при монтировании компонента
    const savedBackgroundColor = localStorage.getItem('backgroundColor');
    const savedLinkColor = localStorage.getItem('linkColor');
    if (savedBackgroundColor) setBackgroundColor(savedBackgroundColor);
    if (savedLinkColor) setLinkColor(savedLinkColor);
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case 'default':
        setBackgroundColor('rgb(203, 159, 123)');
        setLinkColor('rgb(252, 219, 179)');
        break;
      case 'dark':
        setBackgroundColor('rgb(10, 31, 50)');
        setLinkColor('brown');
        break;
      case 'light-dark':
       setBackgroundColor('rgb(68, 68, 68)')
        setLinkColor('rgb(292, 279, 179');
        break;
      default:
        setBackgroundColor('rgb(203, 159, 123)');
        setLinkColor('rgb(252, 219, 179)');
    }
  };

  useLayoutEffect(() => {
    // Сохранение выбранных цветов в localStorage
    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('linkColor', linkColor);


    
    // Изменение стилей body и a
    document.body.style.backgroundColor = backgroundColor;
    document.querySelectorAll('a').forEach(a => {
      a.style.color = linkColor;
    });
  }, [backgroundColor, linkColor]);

  return (
    <div id='tema'>
      <h1>Тема</h1> <br />
      <select onChange={handleSelectChange}>
        <option value="default">Стандартная</option>
        <option value="dark">Тёмная</option>
        <option value="light-dark">Светло-тёмная</option>
      </select>
    </div>
  );
};

export default ColorSelector;