REACT VERSION 19


//* DAY1 = components
//* DAY2 = Fragment
//* DAY3 = JSX
//* CONDITIONAL JSX
//* PRACTICES DAY
//* Import Export 








// REACT IS ALL ABOUT YOUR COMPONENTS


//you can add any variable of your components in jsx {} Syntax


//in react we do like this way this is called delectrative way
function Mycomponents (){
    const value = "hey";
    return <p>{value}</p>;
}
return Mycomponents()

 <div>the result is:{1 + 2+ 3}</div>;


//In javascript we do like this to egt any element there its called imparative way
const p_elem = document.getElementById('p_id')
p_elem.innerText = 'hey'

// we can use currly braces for start javascript code in html this is beauty of react

// practices question explanantion
React does not render 'false', 'null', 'undefined', or 'NaN' in the DOM. these valuse, when used in JSX, will result in nothing being displayed

however, '0' and empty strings ('""') are exceptions:
& operators check the left side of area first if it is true go for right side and both will true 





//* variables
//? you can embed any javascript variables within jsx by enclosing it in curly braces.
//? the value of the variables will be inserted inti the respective location. 

//* 2: Expression
//? JSX allows you to write javascript expression inside curly braces. this includes operations, functionscalls, and other javascript expression that produce a value.

//* function calls
//? functions, espacially those that return JSX, can be invoked directly within your JSX.




 Import Export

// 1. Default Export and import
// 2. Named Export ans import
// 3. Mixes Export and Import


1. Default Export: A file can have only one default export.
Default Import: then importing a default export, you can name the import whatever you like.

Named Export:
A File can have multipled named exports.
Each named export must be explicitly exported.

Named Import:
When Importing named exportfs, the impot names must match the export names exactly.
named imports must be enclosed in curly braces.

//looping in jsx
*we dont have for loops in JSX, sonwe have to use .map() method of arrays.

return(
    <ul>
    {students.map(student)=>(
        <li key = {students}>{student}</li>
    )}
    </ul>
)

*react.js will complain if you dont pass key prop tp <li>
*React.js uses keys to differentiate each elements so that it can remove


*props in jsx
React props(properties) facilite data transfer from parent to child components.
Data flows unidirectionally, ensuring a clear direction of information in react applications.
props are immutable, meaning child components cannot modify the data received from parents.
child components access props through their function parameter.
you can also pass JSX as props to another componenets. 

*destructuring in jsx


# 1 Javascript object Syntax

Inline styles in react are specifies using javascript objects. property naems are written in camelcases instead of the traditional css kebab-case.

cosnt style ={
 backgroundColor: 'blue';
 fontSize: '10px'   
}

#2 units
for most numeric values you need to specify units as a string (eg, '16px'). some properties like zIndex can take numeric values directly.

const style = {
padding : '10px',
zIndex: 1,
}


#CSS conditional stylings in reactjs

you can use ternary operators to add conditional stylings to your css.

#Event Propagation
Evenr Propagation refers to the process of how events propagate or travel through the dom
in javascript there are two phases of events propagate capturing phase and bubbling phase

capturing phases
the events starts from the root of the DOM and goes down to the target elements.

target phase
the event reaches the target elements

bubbling phase
the events start the target element bubbles buttom uo to the root of the DOM

#states in reactjs - job bhi value aage ja kr change hone wale hai uske lia state use karta hai
in react state refers to an object that holds data or information about the components,
state is managed within the components just like variable declared in a function. however
 unlike regular variable when state changes, react re-render the components to reflects these changes, keeping the user interface in sync with the data.

 state is dyanamic and mutable meaning it changes over the time in respones to user actions, server respones or other events.

 #why react
 its because those are normal variable and reactjs dosent know that its going to be changed
 -And that react should respond or update DOM based on that.
 -Those values are already rendered on DOM there is no way they will re-rendered.
 -for that react.js provides a function called "useState".
 -This types of function which starts with "use" is called hook.
 -this is a speacial function ehich has some features provided by react.js
 -we will larb about other hooks in future. 


 #useState Syntax
 const[count,setCount]=useState(0)

 #react quwstion
 in console why were getting same output 2times- beacuse in main jsx there is react.strickmode is

 #lifting state update
 -lifting si a pattern in reactjs
 -koi toh ek state hoga jo tumne child componenets banie or dusre child component o chaiya 
 -child component mai banyie usko parent componenets 
 -agar parent ke pass ko data hai or unke child component ko data chaiya toh apun Props use krke data pass kar sakte
 -agar apne ko child componenets se parent componenets mai data pass karn hai toh lifting up state use kar sakte hai