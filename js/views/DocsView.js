import { MasterComponent } from '../core.js';

export class DocsView extends MasterComponent {
  render() {
    return this.create('section', { className: 'section container animate-fade-in', style: { paddingTop: '150px' } },
      this.create('h1', { className: 'gradient-text', style: { fontSize: '4rem', marginBottom: '2rem', textAlign: 'center' } }, 'Documentation'),
      this.create('div', { style: { maxWidth: '800px', margin: '0 auto' } },
        this.create('div', { className: 'glass', style: { padding: '3rem', marginBottom: '2rem' } },
          this.create('h2', { style: { color: 'var(--pk-accent-secondary)', marginBottom: '1.5rem' } }, 'Installation'),
          this.create('pre', { style: { background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '8px', color: '#888', overflowX: 'auto' } },
            'git clone https://github.com/poteuxx/master-framework.git'
          ),
          this.create('p', { style: { marginTop: '1.5rem', color: 'var(--pk-text-secondary)' } }, 'No installation of dependencies is required. The framework is entirely standalone.')
        ),
        this.create('div', { className: 'glass', style: { padding: '3rem' } },
          this.create('h2', { style: { color: 'var(--pk-accent-secondary)', marginBottom: '1.5rem' } }, 'Core Concepts'),
          this.create('h3', { style: { marginTop: '2rem', marginBottom: '1rem' } }, '1. Signals'),
          this.create('p', { style: { color: 'var(--pk-text-secondary)' } }, 'Use Master.createSignal(value) to create reactive state.'),
          this.create('h3', { style: { marginTop: '2rem', marginBottom: '1rem' } }, '2. Components'),
          this.create('p', { style: { color: 'var(--pk-text-secondary)' } }, 'Extend MasterComponent and implement the render() method.'),
          this.create('h3', { style: { marginTop: '2rem', marginBottom: '1rem' } }, '3. Routing'),
          this.create('p', { style: { color: 'var(--pk-text-secondary)' } }, 'Navigation is handled automatically for any link starting with #.')
        )
      )
    );
  }
}
