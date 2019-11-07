<template>
  <div class="hello">
    <h1>{{ getName }}</h1>

    <p data-cy="fullname">{{ fullName }}</p>

    <p id="countNumber">
      {{ countNumber }}
    </p>

    <p id="sumofCountNumber">
      {{ sumOfCountNumber }}
    </p>

    <button data-ui="incrementBtn" @click="incrementCounter()">
      increment
    </button>

  <div>
    <p>
      Vuex firstName: <span>{{ vuexFirstname }}</span>
    </p>
    <p>
      Local firstName: <span>{{ firstName }}</span>
    </p>
  </div>

    <form>
      <input data-ui="firstName" type="text" v-model="firstName" />
      <input data-ui="lastName" type="text" v-model="lastName" />
      <button @click.prevent="updateNameAsync(firstName)">Update first name</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { State, Getter, Mutation, Action, namespace } from 'vuex-class'

const User = namespace('user')

@Component
export default class ExampleTS extends Vue {
  // How to pull in vuex state, mutations, getters, actions
  @User.State('firstname') public vuexFirstname!: string;

  @User.Mutation public updateName: any

  @User.Action public updateNameAsync: any

  @User.Getter public getName: any

  // Basic Typescript vue component class syntax
  // Props
  @Prop() private msg!: string

  // Data
  private countNumber: number = 0
  private firstName: string = ''
  private lastName: string = ''

  // Computed
  get sumOfCountNumber(): number {
    return this.countNumber / 2
  }

  get fullName(): string {
    return this.firstName + ' ' + this.lastName
  }

  // Methods
  private incrementCounter(): void {
    this.countNumber++
  }

  // Watchers
  @Watch('countNumber')
  private onCountreachesFive(newVal: number, oldVal: number): void {
    if (newVal === 5) {
      // tslint:disable-next-line:no-console
      console.warn('five reached')
    }
  }
}
</script>
