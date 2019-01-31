import React, {Component} from 'react';
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoLIst";
import './style.css'
import ItemStatusFilter from "../itemStatusFilter";
import ItemAddForm from "../ItemAddForm";


export default class App extends Component  {

    key = 0;

    state ={
        toDoData: [
            this.createToDoItem("Drink Coffe"),
            this.createToDoItem("Make awesome App"),
            this.createToDoItem("Have a lunch")
        ]
    };


    createToDoItem(label,id){
        return {
            label,
            important:false,
            done:false,
            id:this.key++
        }
    }

    deleteItem = (id) =>{
        this.setState(({toDoData})=>{
            const idx = toDoData.findIndex((el)=>el.id===id);
            const before = toDoData.slice(0,idx);
            const after = toDoData.slice(idx+1);
            const newArray = [...before,...after];
            return{
                toDoData: newArray
            }
        });
    };

    addItem = (text) =>{
      const newItem = this.createToDoItem(text);

      this.setState(({toDoData})=>{
          const newArr=[
              ...toDoData,
              newItem
          ];

          return{
              toDoData:newArr
          };
      });
    };

    toggleProperty(arr,id,propName){
        const idx = arr.findIndex((el)=>el.id===id);
        const oldItem = arr[idx];
        const newItem = {...oldItem,[propName]:!oldItem[propName]};

        return[
            ...arr.slice(0,idx),
            newItem,
            ...arr.slice(idx+1)
        ];
    }

    onToggleImportant = (id)=>{
        this.setState(({toDoData})=>{
            const lastId = toDoData.length;
            console.log("last elemetn "+lastId);

            return {
                toDoData: this.toggleProperty(toDoData,id,'important')
        }
        });
    };

    onToggleDone = (id)=>{
        this.setState(({toDoData})=>{
            const lastId = toDoData.length;
            console.log("last elemetn "+lastId);
            return {
                toDoData: this.toggleProperty(toDoData,id,'done')
            }
        });
    };

    render(){
        const {toDoData} = this.state;
        const doneCount = toDoData.filter((el)=>el.done).length;
        const toDoCount = toDoData.length-doneCount;

    return (
        <div className="todo-app ">
            <AppHeader toDo={toDoCount} done={doneCount}/>
            <div className="top-panel ">
                <SearchPanel />
                <ItemStatusFilter/>
            </div>

            <ToDoList
                todos = {toDoData}
                onDeleted={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}
            />
                <ItemAddForm
                onItemAdded={this.addItem} />
        </div>
    );
}
};

