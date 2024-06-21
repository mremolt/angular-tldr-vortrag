import { Component, computed, effect, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

import { PrettyCounterComponent } from './components/pretty-counter/pretty-counter.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [MatButtonModule, PrettyCounterComponent, Highlight, HighlightLineNumbers, MatTabsModule, JsonPipe],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  public readonly counter = signal(0);
  public readonly doubleCounter = computed(() => this.counter() * 2);
  public readonly todo = signal({});

  public example1 = `  const count = signal(0);
  console.log('The count is: ' + count()); // 0

  count.set(42);
  console.log('The count is: ' + count()); // 42
  `;

  public example2 = `  const count = signal(0);
  const doubleCount = computed(() => count() * 2);

  count.set(21);
  console.log('The count is: ' + doubleCount()); // 42
  `;

  public example3 = `  effect(async () => {
    const todo = await fetch("https://jsonplaceholder.typicode.com/todos/" + this.counter()).then((response) =>
      response.json()
    );
    this.todo.set(todo);
  });
  `;

  public example4 = `  import {Component, input} from '@angular/core';

  @Component({...})
  export class PersonComponent {
    firstName = input<string>();         // InputSignal<string|undefined>
    age = input(0);                      // InputSignal<number>
    lastName = input.required<string>(); // InputSignal<string>
  }
  `;

  constructor() {
    effect(() => {
      console.log(`Der aktuelle Wert des counters ist: ${this.counter()}!`);
    });

    effect(async () => {
      const todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.counter()}`).then((response) =>
        response.json()
      );
      this.todo.set(todo);
    });
  }

  public increaseCounter(): void {
    this.counter.set(this.counter() + 1);
  }

  public decreaseCounter(): void {
    this.counter.set(this.counter() - 1);
  }
}
