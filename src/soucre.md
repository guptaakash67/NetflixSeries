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
