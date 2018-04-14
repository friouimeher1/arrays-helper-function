import React, { Component } from 'react';

class App extends Component {
  render() {
    const computers =[
      {name:'Apple',ram:15 },
      {name:'Acer',ram:20 },
      {name:'HP',ram:10 },
    ]
    console.log('-------------------------------------------')
console.log('using for')
for (var i=0;i<computers.length;i++){
  console.log(computers[i])
}
console.log('-------------------------------------------')
console.log('using forEach Function Helper')
  let sum = 0
computers.forEach((computer)=>{
   sum+=computer.ram
})
console.log(sum)
console.log('-------------------------------------------')
console.log('using Map Function Helper')

console.log(computers.map((computer)=>{
  return computer.ram + ' ' +computer.name
}))
console.log('-------------------------------------------')
console.log('using Find Function Helper')

console.log(computers.find((computer)=>{
  return computer.ram ===10
}))
console.log('-------------------------------------------')
console.log('using Filter Function Helper')

console.log(computers.filter((computer)=>{
  return computer.ram > 10
}))
console.log('-------------------------------------------')
console.log('using Every Function Helper')
console.log(computers.every((computer)=>{
  return computer.ram >10
}))
console.log('-------------------------------------------')
console.log('using Some Function Helper')
console.log(computers.some((computer)=>{
  return computer.ram >10
}))
const username="FRIOUI"
const lastname="Meher"
const fields =[username,lastname]
var formField=fields.every((field)=>{
  return field.length > 4
})
if(formField){
  console.log('I will allow you to submit the form')
}
else{
  console.log('something went wrong hereS')
}

const numbers=[1,2,3,4,5,6]
console.log('-------------------------------------------')
console.log('using Reduce Function Helper')
let Sum = numbers.reduce((sum,number)=>{
  return sum+number
},0);
console.log(Sum)
const primaryColors=[
{color:'red'},
{color:'yellow'},
{color:'blue'},
]
console.log('-------------------------------------------')
console.log('other exemple for using Reduce Function Helper')
console.log(primaryColors.reduce((previous,primaryColor)=>{
  previous.push(primaryColor.color)
  return previous
},[]))

console.log('-------------------------------------------')
console.log('best exemple for using Reduce Function Helper')

const BalacedParen =")("

let arraysBalanced = BalacedParen.split('')

var isBalanced =arraysBalanced.reduce((previous,arrayBalance)=>{
  if(previous<0){return previous}
  if(arrayBalance==='('){
    previous++
  }
  if(arrayBalance===')'){
    previous--
  }
  return previous
},0)

if(isBalanced===0){
  console.log('yes is balanced ')
}else{
  console.log('not balanced')
}


console.log('-------------------------------------------')
console.log('Template String')

let getMessage=()=>{
 const year = Date()
 return `The year = ${year}`
}
console.log(getMessage())

console.log('-------------------------------------------')
console.log('Enhanced (improve) Object Literal')

const data=[
  {title:'book',price:20},
  {title:'pen',price:22},
  {title:'paper',price:15},
]

const totalPrice = data.reduce((p,d)=>{
    return p+=d.price
} ,0)

console.log(totalPrice)

console.log('-------------------------------------------')
console.log('Default function argument')
/* Exemple */
function makeAjaxReques(url,method){
  if(!method){
    method='GET'
  }
  console.log('url : ',url,' , Method : ',method)
}
makeAjaxReques('google.com')
makeAjaxReques('google.com',"PUT")
console.log('-------------------------------------------')
console.log('Complex for Default function argument')

function User(id){
  this.id=id
}

function generateId(){
  return (Math.floor(Math.random()*9))
}
function createAdminUser(user=new User(generateId())){
  user.admin=true
  return user
}
let user = new User(generateId())
console.log(createAdminUser(user))
console.log(createAdminUser(user))
console.log(createAdminUser(user))


console.log('-------------------------------------------')
console.log('Rest and Spread Operator')
/* the purpose is to write less code */

function addNumbers(...numbers){
  return numbers.reduce((sum,number)=>{
    return sum+number
  },0)
}
/* ...numbers :this represent arrays of numbers caputre all the arrgument passed into a function*/
console.log(addNumbers(1,2,3))
console.log('-------------------------------------------')
console.log('Spread Operator')
const defaultColors =['red','green']
const UsersFavoriteColors =['orange','yellow']
/* concatenate this two arrays*/
const dataColors= [...defaultColors,...UsersFavoriteColors]
console.log(dataColors)
/*
renvoie le premier indice pour lequel on trouve un élément
donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau,
la méthode renverra -1.
search by value if you have object .
*/
const findingMilk=(...item)=>{

  if(item.lastIndexOf('milk')){
   return ['milk',...item]
  }
  return item
}
console.log(findingMilk('orange','bule'))

console.log('-------------------------------------------')
console.log('Destructuring')
const Data ={
  name:'meher',
  age:20
}
const { name } = Data
const { age } = Data
console.log(`name is ${name}`)
console.log(`age is ${age}`)
console.log('Exemple for Destructuring')

let saveField = {
  extention:'.jpg',
  name:'book',
  size:123654
}
function fileSummary (file){
  const {name,extention,size} = file
  return `the file ${name}.${extention} is of size ${size}`
}
console.log(fileSummary(saveField))
console.log('-------------------------------------------')
console.log('Destructuring Arrays')
const data1 = ['Facebook','Google','Yahoo','Quora','AirBinBe']
const [ facebook,google,yahoo ,...rest] = data1
console.log(facebook,google,yahoo,rest)
console.log('-------------------------------------------')
console.log('Exemple for Destructuring : Arrays of objects')

const companies =[
  {name:'Google',location:'America'},
  {name:'Facebook',location:'San Fran'},
  {name:'Quora',location:'Tunise'},

]
console.log(companies.map((company,index)=>{
  return ('here',company)
}))

const [ { location } ]=companies

console.log(location)
console.log('Exemple for Destructuring :objects of Arrays')
const compnay={
  locations:['France','Tunis','Turky']
}
const { locations:[location1,location2]} = compnay
console.log(location1,location2)
console.log('Exemple for Destructuring :Arrays of Arrays')
const dataArrays =[
  [1,2],
  [3,4],
  [5,6],
]
const arraysOfArrays =dataArrays.map(([x,y])=>{
  return { x,y }
  // return { x:x,y:y }
})
console.log(arraysOfArrays)
console.log('-------------------------------------------')
console.log('Section how to use Class')
class Car{
  constructor({ title }){
    this.title=title
  }
  drive(){
    return 'vromm'
  }
}
let car = new Car({title:'BMV'})
console.log(car)
console.log(car.drive())
console.log('-------------------------------------------')

class Toyata extends Car{
  constructor({title,color}){
    super({title,color}) //Car.constructor
    this.title=title
    this.color=color
  }
  honck(){
    return 'Honck'
  }
}
let tayouta = new Toyata({title:'BWV',color:'red'})
console.log(tayouta.drive())
console.log(tayouta)

console.log('-------------------------------------------')
console.log('Section how to use Generators')
const colors=[
  'red','green','blue'
]
for (let color of colors){
  console.log(color)
}
//what is happen here is just iterate for each element in the arrays of colors
console.log('-------------------------------------------')
const arraysOfNumbers =[1,2,3,4]
let sumArrays=0
for (let i of arraysOfNumbers){
  sumArrays+=i
}
console.log(sumArrays)
console.log('-------------------------------------------')
/*
what is Generators !
Generators :is function that can be entred and exit multiple time
what does do  !
iteration with generator !
generator delegation

*/
// 1- Create Generator
// there are two way function* nameFunction() or function *nameFunction make sure the start is present mean that
//its a generator
console.log('-------------------------------------------')
console.log('Exemple of Generators')
function* a(){
yield
}
const gen = a()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(a())
return (
      <div className="App">

      </div>
    );
  }
}

export default App;
