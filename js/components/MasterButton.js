import { MasterComponent } from '../core.js';

export class MasterButton extends MasterComponent {
  render() {
    const { variant = 'primary', size = 'md', text = 'Button', onClick } = this.props;
    
    return this.create('button', {
      className: `pk-btn pk-btn-${variant} pk-btn-${size}`,
      onclick: onClick
    }, text);
  }
}

/* Base styles for the button (to be added to master.css) */
const styles = `
.pk-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: var(--pk-radius-md);
  font-weight: 600;
  transition: all var(--pk-transition-fast);
  position: relative;
  overflow: hidden;
  gap: 0.5rem;
}

.pk-btn-primary {
  background: var(--pk-accent-primary);
  color: white;
  box-shadow: 0 4px 15px var(--pk-accent-glow);
}

.pk-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px var(--pk-accent-glow);
  filter: brightness(1.1);
}

.pk-btn-outline {
  background: transparent;
  border: 1px solid var(--pk-accent-primary);
  color: var(--pk-accent-primary);
}

.pk-btn-outline:hover {
  background: var(--pk-accent-primary);
  color: white;
}

.pk-btn-glass {
  background: var(--pk-glass-bg);
  backdrop-filter: var(--pk-glass-blur);
  border: 1px solid var(--pk-glass-border);
  color: white;
}

.pk-btn-glass:hover {
  background: rgba(255, 255, 255, 0.1);
}
`;
