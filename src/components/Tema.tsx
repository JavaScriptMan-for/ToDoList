import { FC, useRef, useState } from "react";
import '../assets/css/select.css';


const Tema:FC = () => {
    const selectRef = useRef<HTMLSelectElement>(null);
    const [mainOption, setMainOption] = useState<boolean[]>([true,false,false]) 

    const handleChange = () => {
      const selectedOption = selectRef.current?.value;
  
      switch (selectedOption) {
        case 'option1':
            setMainOption([true, false, false])
            localStorage.setItem('op_1', String(mainOption[0]))
            localStorage.setItem('op', String(1))
          document.body.style.backgroundColor = 'rgb(203, 159, 123)';
          const links_1 = document.getElementsByTagName('a');
          Array.from(links_1).forEach(link => {
            link.style.color = 'rgb(252, 219, 179)';
          });
          break;
        case 'option2':
            setMainOption([false, true, false])
            localStorage.setItem('op_2', String(mainOption[1]))
            localStorage.setItem('op', String(2))
          document.body.style.backgroundColor = 'rgb(10, 31, 50)';
          const links_2 = document.getElementsByTagName('a');
          Array.from(links_2).forEach(link => {
            link.style.color = 'brown';
          });
          break;
        case 'option3':
            setMainOption([false, false, true])
            localStorage.setItem('op_3', String(mainOption[2]))
            localStorage.setItem('op', String(3))
          document.body.style.backgroundColor = 'rgb(68, 68, 68)';
          const links_3 = document.getElementsByTagName('a');
          Array.from(links_3).forEach(link => {
            link.style.color = 'rgb(292, 279, 179)';
          });
          break;
        default:
          break;
      }
      if(localStorage.getItem('op') == '1') {
        document.body.style.backgroundColor = 'rgb(203, 159, 123)';
        const links_1 = document.getElementsByTagName('a');
        Array.from(links_1).forEach(link => {
          link.style.color = 'rgb(252, 219, 179)';
        });
      } else if(localStorage.getItem('op') == '2') {
        document.body.style.backgroundColor = 'rgb(10, 31, 50)';
        const links_2 = document.getElementsByTagName('a');
        Array.from(links_2).forEach(link => {
          link.style.color = 'brown';
        })
      } else if(localStorage.getItem('op') == '3') {
        document.body.style.backgroundColor = 'rgb(68, 68, 68)';
          const links_3 = document.getElementsByTagName('a');
          Array.from(links_3).forEach(link => {
            link.style.color = 'rgb(292, 279, 179)';
          })
      }
    };
  
    return (
      <div id="tema">
        <h1>Тема:</h1> 
        <select ref={selectRef} onChange={handleChange}>
          <option selected={Boolean(localStorage.getItem('op_1'))} value="option1">Стандартная</option>
          <option selected={Boolean(localStorage.getItem('op_2'))} value="option2">Тёмная</option>
          <option selected={Boolean(localStorage.getItem('op_3'))} value="option3">Светло тёмная</option>
        </select>
      </div>
    );
}
export default Tema;