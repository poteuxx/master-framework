/**
 * Master Framework Core
 * A zero-dependency, ultra-performance reactive UI library.
 */

export class Master {
  static createSignal(initialValue) {
    let value = initialValue;
    const subscribers = new Set();

    return {
      get: () => value,
      set: (newValue) => {
        if (value === newValue) return;
        value = newValue;
        subscribers.forEach(sub => sub(value));
      },
      subscribe: (callback) => {
        subscribers.add(callback);
        return () => subscribers.delete(callback);
      }
    };
  }

  static render(component, container) {
    const parent = typeof container === 'string' ? document.querySelector(container) : container;
    if (!parent) return;
    
    parent.innerHTML = '';
    const node = component.render();
    parent.appendChild(node);
    
    // Trigger onMount
    if (component.onMount) component.onMount(node);
  }
}

export class MasterComponent {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
  }

  // To be overridden
  onMount(element) {}

  create(tag, props = {}, ...children) {
    const el = document.createElement(tag);
    
    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith('on') && typeof value === 'function') {
        const eventName = key.toLowerCase().substring(2);
        el.addEventListener(eventName, value);
      } else if (key === 'className') {
        el.className = value;
      } else if (key === 'style' && typeof value === 'object') {
        Object.assign(el.style, value);
      } else if (key === 'id') {
        el.id = value;
      } else {
        el.setAttribute(key, value);
      }
    });

    children.flat().forEach(child => {
      if (child === null || child === undefined) return;
      
      if (typeof child === 'string' || typeof child === 'number') {
        el.appendChild(document.createTextNode(child));
      } else if (child instanceof HTMLElement) {
        el.appendChild(child);
      } else if (child && typeof child.render === 'function') {
        const componentNode = child.render();
        el.appendChild(componentNode);
        if (child.onMount) {
          // Delay onMount until the element is actually in the DOM
          setTimeout(() => child.onMount(componentNode), 0);
        }
      }
    });

    return el;
  }
}
