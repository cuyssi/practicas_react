// Ejercicio 2: Usando Props (Propiedades)
// Los props (propiedades) permiten pasar datos a un componente.
// 🔹 Objetivo:
// Modifica tu componente Welcome para que reciba un nombre como prop y lo muestre en pantalla.
// Ahora, prueba esto:
// ¿Qué pasa si renderizas <Welcome /> sin pasar name? 🤔
// ¿Cómo harías para que, si no se pasa un nombre, se muestre "¡Hola, Invitado!" en su lugar?


// // const  Welcome = (props) => {
//     return <h1>¡Hola, {props.name}!</h1>     
// }

// Welcome.defaultProps = {name: "Invitado"}
// ReactDOM.createRoot(document.getElementById("root")).render(<Welcome name="Carlos" />);

//cambia el nombre, al darle un valor en particular ya no utiliza el  valor de la propiedad por defecto, en este caso en el html pintaria: ¡Hola, Carlos!
//si no le damos un valor a name al renderizarlo por defecto pintaria ambia el nombre, al darle un valor en particular ya no utiliza el  valor de la propiedad por defecto, en este caso en el html pintaria: ¡Hola, Invitado!

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Ejercicio 3: Componente con estado (state)
// Ahora vamos a aprender cómo manejar estado dentro de un componente. El estado te permite almacenar información que puede cambiar y hacer que tu componente se actualice cuando esa información cambie.
// 🔹 Objetivo:
// Vamos a crear un contador que aumente su valor cada vez que presionas un botón.



// const Counter = () => {
    
//     const [counter, setValor] = React.useState(0); // React.useState() en vez de useState() directamente

//     const aumentarContador = () => {
//         setValor(counter + 1);
//     };

//     return (
//         <div>
//             <h1>Contador: {counter}</h1>
//             <button onClick={aumentarContador}>Aumentar</button>
//         </div>
//     );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Ejercicio: Contador con Incremento, Decremento y Reset
// Crea un componente llamado ContadorAvanzado.
// El componente debe tener tres botones:
// Un botón para incrementar el contador.
// Un botón para decrementar el contador.
// Un botón para resetear el contador a 0.
// Muestra el valor actual del contador en la pantalla.
// Si quieres hacerlo un poco más avanzado, podrías añadir límites al contador (por ejemplo, no permitir que el contador sea menor que 0), o quizás mostrar un mensaje si el contador está en cero.


// const ContadorAvanzado = () => {

//     const [counter, setValor] = React.useState(0);

//     const sumar = () => {
//         setValor(counter + 1);
//     }

//     const restar = () => {
//         setValor((prevCounter) =>{
//             if(prevCounter > 0) {
//                 return prevCounter - 1;
//             } else {
//                 alert("El valor del contador no puede ser menor que 0.")
//                 return prevCounter;
//             }
//         } )                
//     }

//     const resetear = () => {
//         setValor(0);
//     }

//     return (
//         <div>
//             <h1>Contador: {counter}</h1>
//             <button onClick={sumar}>Añadir</button>
//             <button onClick={restar}>Restar</button>
//             <button onClick={resetear}>Resetear</button>
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<ContadorAvanzado />);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Ejercicio: Contador con Múltiples Botones para Incrementar en Diferentes Cantidades
// Crea un contador que:

// Tenga un valor inicial de 0.
// Tendrá tres botones:
// Un botón para incrementar el contador en 1.
// Un botón para incrementar el contador en 5.
// Un botón para incrementar el contador en 10.
// El contador debe mostrar su valor actualizado al hacer clic en cada uno de los botones.
// Debe tener un botón para restablecer el contador a 0.

// const CounterVariousQuantities = () => {
//     const [counter, setValue] = React.useState(0);
    
//     const incrementOne = () => {
//         setValue((prevCounter) => {
//             return prevCounter + 1;
//         })
//     }

//     const incrementFive = () => {
//         setValue((prevCounter) => {
//             return prevCounter + 5;
//         })
//     }

//     const incrementTen = () => {
//         setValue((prevCounter) => {
//             return prevCounter + 10;
//         })
//     }

//     const reset = () => {
//         setValue(0)
//     }

//     return(
//         <div>
//             <h1>Contador: {counter}</h1>
//             <button onClick={incrementOne}>Sumar 1</button>
//             <button onClick={incrementFive}>Sumar 5</button>
//             <button onClick={incrementTen}>Sumar 10</button>
//             <button onClick={reset}>Reiniciar</button>
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<CounterVariousQuantities />)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// En lugar de incrementOne, incrementFive e incrementTen, crea una sola función increment que reciba un número como argumento y lo sume al contador.


// const Counter = () => {
//     const [counter, setCounter] = React.useState(0);   

//     const increment = (value) => {
//         setCounter((prevCounter) =>{
//             return prevCounter + value
//         })
//     }

//     return(
//         <div>
//             <h1>Contador: {counter}</h1>
//             <button onClick={() => increment(1)}>Sumar 1</button>
//             <button onClick={() => increment(5)}>Sumar 5</button>
//             <button onClick={() => increment(10)}>Sumar 10</button>
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Counter />)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Ejercicio: Contador dinámico
// 🔹 Objetivo:
// Crear un contador donde el usuario pueda escribir en un <input> la cantidad que quiere sumar y, al hacer clic en el botón, el contador se actualiza con esa cantidad.

// const Counter = () => {
//     const [counter, setCounter] = React.useState(0);
//     const [quantity, setQuantity] = React.useState(0);
    
//     const addQuantity = (e) => {
//         setQuantity( Number(e.target.value))
//     }

//     const add = () => {
//         setCounter((prevCounter) => {
//            return  prevCounter + quantity
//         })
//     }

//     return(
//         <div>
//             <h1>Contador: {counter}</h1>
//             <label htmlFor="input"></label>
//             <input id="input" type="number" onChange={addQuantity} placeholder="Ingresa aquí la cantidad a sumar" />
//             <button onClick= {add}>Sumar</button>
//         </div>        
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Crea un componente Multiplier que tenga un número inicial de 1 y tres botones:
// Un botón que lo multiplique por 2
// Un botón que lo multiplique por 3
// Un botón que lo reinicie a 1

// const Multiplier = () => {
//     const [counter, setCounter] = React.useState(1);

//     const MultiplierFunction = (value) => {
//         setCounter((prevCounter) => {
//             return prevCounter * value;
//         })
//     }

//     const reset =() => {
//         return setCounter(1)
//     }

//     return(
//         <div>
//             <h1>Resultado: {counter}</h1>
//             <button onClick={() =>{MultiplierFunction(2)}}>x2</button>
//             <button onClick={() =>{MultiplierFunction(3)}}>x3</button>            
//             <button onClick= {reset}>Reiniciar</button>
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Multiplier />);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Vamos a hacer un contador con multiplicador dinámico.
// 🔹 Objetivo:
// Un número que empieza en 1.
// Un input donde puedas escribir por cuánto quieres multiplicarlo.
// Un botón que use ese número del input para hacer la multiplicación.
// Un botón para reiniciar el contador a 1.


// const Counter = () => {
//     const [counter, setCounter] = React.useState(1);
//     const [number, setNumber] = React.useState(1);

//     const num = (event) => {
//         setNumber(Number(event.target.value)); 
//     }

//     const multiplier = () => {
//             if( number === 0 || num ===""){
//                 alert("Introduce un número que sea mayor que 0")
//                 return
//             }else {setCounter((prevCounter) => {
//                 return prevCounter * number
//             })
//          }        
//     }

//     const reset = () => {
//         return setCounter(1)
//     }

//     return(
//         <div>
//             <h1>Resultado: {counter}</h1>
//             <label htmlFor="input">Ingresa aquí tu numero</label>
//             <input type="number" onChange={num} placeholder="Pon aquí el número por el que quieras multiplicar." />
//             <div>
//                 <button onClick={multiplier}>Multiplicar</button>
//                 <button onClick={reset}>Reiniciar</button>
//             </div>
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Reto:
// Haz un contador que:

// Sume y reste un número ingresado por el usuario.
// No permita valores negativos en el contador.
// Tenga un botón de reinicio que lo vuelva a 0.
// Por ejemplo:
// Si el usuario ingresa 5, y hace clic en "Sumar", el contador se incrementará en 5.
// Si luego ingresa 3, y hace clic en "Restar", el contador disminuirá en 3 (siempre que no pase de 0).

// const Counter = () => {
    
//     const [counter, setCounter] = React.useState(0);
//     const [num, setNum] = React.useState(0);

//     const number = (e) => {
//         return setNum(Number(e.target.value));
//     }    

//     const sum = () => {
//         if(num <= 0 || isNaN(num)) {
//         alert("Introduce un numero valido, mayor que 0");
//         return;
//         } else {
//         setCounter((prevCounter) => {
//             return prevCounter + num;
//             })
//         }
//     }

//     const sub = () => {
//         if(num <= 0 || isNaN(num)) {
//             alert("Introduce un numero valido, mayor que 0");
//             return;
//         } else {
//             setCounter((prevCounter) => {
//             return prevCounter - num;
//             })
//         }
//     }

//     const reset = () => {
//         return setCounter(0);
//     }

//     return(
//         <div>
//             <h1>Contador: {counter}</h1>
//             <label htmlFor="input"></label>
//             <input type="number" id="input" onChange={number} />
//             <button onClick = {sum}>Sumar</button>
//             <button onClick = {sub}>Restar</button>
//             <button onClick = {reset}>Reiniciar</button>
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Counter />)