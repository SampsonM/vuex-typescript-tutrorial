<template>
  <div id="app">

    <button v-if="!login.isLoggedIn" @click="loginMutation">Login</button>
    <p v-else>hello {{ login.user }}</p>

    <h3> All todos </h3>
    <ul>
      <li v-for="(todo, i) in todosNotDone" :key="i">
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
import { State, Getter, Mutation, Action, namespace } from 'vuex-class';
import { Todo, LoginState } from './types';

const Todo = namespace('todos');
const Login = namespace('login');

@Component
export default class App extends Vue {
  // Initialise data using vue property decorator syntax
  public todoId: string = '0';
  public newTodo: Todo = {
    text: '',
    checked: false,
    id: 0,
  };

  // This is like ...mapState
  @State public login!: LoginState;

  // ...mapActions
  @Todo.Action public addTodoAsync: any;

  // ...mapGetters
  @Todo.Getter('todos') public todosNotDone!: Todo[];
  @Todo.Getter('doneTodos') public doneTodos!: Todo[];

  // This pulls in Mutations to be commited directly in component
  @Login.Mutation('login') public loginMutation: any;
  @Todo.Mutation public addTodo: any;
  @Todo.Mutation public toggleTodo: any;

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
