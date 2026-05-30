import { MasterComponent } from '../core.js';

export class MasterButton extends MasterComponent {
  onMount(el) {
    el.addEventListener('mousedown', (e) => {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      el.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  }

  render() {
    const { 
      variant = 'primary', 
      size = 'md', 
      text = 'Button', 
      onClick, 
      icon = null,
      className = '',
      style = {}
    } = this.props;
    
    return this.create('button', {
      className: `pk-btn pk-btn-${variant} pk-btn-${size} ${className}`,
      onclick: onClick,
      style: style
    }, 
      icon ? this.create('span', { className: 'pk-btn-icon' }, icon) : null,
      this.create('span', { className: 'pk-btn-text' }, text)
    );
  }
}
