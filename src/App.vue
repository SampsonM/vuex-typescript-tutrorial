<template>
  <div id="app">

    <h3> All todos </h3>
    <ul>
      <li v-for="(todo, i) in todos.todos" :key="i">
        <!-- v-model is no longer useful and we have to revert to
        | binding the model and change eventhandlers  -->
        <input type="checkbox" :checked="todo.checked" @change="toggleTodo(todo)" >
        {{ todo.text }}
      </li>
    </ul>
    
    <h3> Done </h3>
    <ul>
      <li v-for="(todo, i) in doneTodos" :key="i">
        <input type="checkbox" :checked="todo.checked" @change="toggleTodo(todo)" >
        {{ todo.text }}
      </li>
    </ul>

    <p>Add todo:</p>
    <input type="text" v-model="newTodo.text" @keypress.enter="addTodo(newTodo)">
    
    <p>Add todo Async:</p>
    <input type="text" v-model="todoId" @keypress.enter="addTodoAsync(todoId)">

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Mutation, Action } from 'vuex-class';
import { Todo } from './types';

@Component
export default class App extends Vue {
  // Initialise data using vue property decorator syntax
  public todoId: string = '0';
  public newTodo: Todo = {
    text: '',
    checked: false,
  };

  // This is like ...mapState
  @State public todos!: Todo[];

  // This pulls in Mutations to be commited directly in component
  @Mutation public addTodo: any;
  @Mutation public toggleTodo: any;

  // ...mapActions
  @Action public addTodoAsync: any;

  // ...mapGetters can be renames by invoking getters
  // as a function with the name of the getter    ..or not
  @Getter('todos') public todosNotDone!: Todo[];
  @Getter('todos/doneTodos') public doneTodos!: Todo[];

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
