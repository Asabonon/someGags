// Это паттерн, который позволяет сохранять ивенты
// и подписывать на него слушателей событий.

class EventEmitter {
  constructor() {
    this.event = {};
  }

  addEventListener(eventName, func) {
    if (typeof finc !== "function") {
      throw new Error("Слушатель события должен быть функцией");
    }

    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(func);
  }

  removeEventListener(eventName, func) {
    if (!this.events[eventName]) {
      throw new Error("Такого события нет в системе");
    }
    this.events[eventName].filter((pushedFn) => pushedFn !== func);
  }
  on(eventName, func) {
    this.addEventListener(eventName, func);
  }

  off(eventName, func) {
    this.removeEventListener(eventName, func);
  }

  once(eventName, func) {
    const wrappedFunc = () => {
      func();
      this.removeEventListener(eventName, func);
    };
    this.on(eventName, wrappedFunc);
  }

  emit(eventName, data) {
    if(!this.events[eventName]){
      throw new Error("Такого события нет в системе");
    }
    this.events[eventName].forEach(func => func.call(null, data))
  }
}
