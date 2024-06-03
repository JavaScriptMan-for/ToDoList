import { FC } from "react"
import "../assets/css/ToDo.css"
import {useRef, useState, useEffect} from 'react'


interface Todo {
  id: number;
  text: string;
}
export let isR:boolean = false

const ToDo:FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [redactInputText, setRedactInputText] = useState<string>('') 
  const [isRedact, setIsRedact] = useState<boolean>(false);
  const [redactID, setRedactID] = useState<number | null>(null)
  const [isDisable, setIsDisable] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null);
  const redactInputRef = useRef<HTMLInputElement>(null)
  const [isBr, setIsBr] = useState<boolean>(false)


  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: inputText.trim(),
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const handleEditTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  useEffect(()=> {
  setInterval(()=> {
    if(window.innerWidth <= 125) {
      setIsBr(true)
      document.querySelector('form')!.style.flexDirection = 'column'
    } else {
      setIsBr(false)
      document.querySelector('form')!.style.flexDirection = 'row'
    }
  },100)
  if(inputText === "") {
    setIsDisable(true)
  } else {
    setIsDisable(false)
  }
    document.addEventListener('keydown', (e:KeyboardEvent)=> {
        if(e.key === 'Enter') {
          if(inputText) {
            e.preventDefault()
            handleAddTodo()
          }
        }
    })
}, [handleAddTodo])
  return (
    <>
    <form action="">
    <input
    placeholder="Задача..."
        type="text"
        value={inputText}
        onChange={() => setInputText(String(inputRef.current?.value))}
        ref={inputRef}
      />
      {isBr && <br />}
      <button disabled={
      isDisable
      }
       id="submit" type="button" onClick={handleAddTodo}>Добавить задачу</button>
    </form>



    <div id="toDos">
        {todos.map(todo => (
          <div className="todo" key={todo.id}>
            <p onClick={() => handleDeleteTodo(todo.id)}>{todo.text}</p>
            <button className="edit" onClick={() => {
              if(!isRedact) {
                setIsRedact(true)
                setRedactID(todo.id)
                isR = true
              } else {
                setIsRedact(false)
                setRedactID(null)
                isR = false
              }    
            }}>{!isRedact ? 'Редактировать' : "Закрыть"}</button>
          </div>
        ))}
      
        <dialog open={isRedact}>
      <input onChange={() => {setRedactInputText(String(redactInputRef.current?.value))}} value={redactInputText} ref={redactInputRef} type="text" placeholder="Редактировать..."/> <br />
      <button onClick={()=> {
     redactInputText &&  handleEditTodo(Number(redactID), redactInputText)
        setRedactInputText("")
        setIsRedact(false)
      }}>Исправить!</button>
    </dialog>
        </div>

    </>
  );    
        
 
   
}
export default ToDo
