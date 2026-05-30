/**
 * Master Framework Core
 * A zero-dependency, ultra-performance reactive UI library.
 */

export class Master {
  static createSignal(initialValue) {
    let value = initialValue;
    const subscribers = new Set();

    return {
      get: () => {
        // If we were using an effect system, we would track the subscriber here.
        return value;
      },
      set: (newValue) => {
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
    if (typeof container === 'string') {
      container = document.querySelector(container);
    }
    container.innerHTML = '';
    container.appendChild(component.render());
  }
}

export class MasterComponent {
  constructor(props = {}) {
    this.props = props;
    this.element = null;
  }

  render() {
    throw new Error('Component must implement render()');
  }

  create(tag, props = {}, ...children) {
    const el = document.createElement(tag);
    
    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith('on') && typeof value === 'function') {
        el.addEventListener(key.toLowerCase().substring(2), value);
      } else if (key === 'className') {
        el.className = value;
      } else if (key === 'style' && typeof value === 'object') {
        Object.assign(el.style, value);
      } else {
        el.setAttribute(key, value);
      }
    });

    children.forEach(child => {
      if (typeof child === 'string' || typeof child === 'number') {
        el.appendChild(document.createTextNode(child));
      } else if (Array.isArray(child)) {
        child.forEach(c => el.appendChild(c));
      } else if (child instanceof HTMLElement) {
        el.appendChild(child);
      } else if (child && child.render) {
        el.appendChild(child.render());
      }
    });

    return el;
  }
}
