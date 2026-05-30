import { MasterComponent } from '../core.js';
import { MasterButton } from '../components/MasterButton.js';

export class ComponentsView extends MasterComponent {
  render() {
    return this.create('section', { className: 'section container animate-fade-in', style: { paddingTop: '150px' } },
      this.create('h1', { className: 'gradient-text', style: { fontSize: '4rem', marginBottom: '2rem', textAlign: 'center' } }, 'Ready-to-use Components'),
      this.create('p', { style: { textAlign: 'center', color: 'var(--pk-text-secondary)', maxWidth: '800px', margin: '0 auto 5rem', fontSize: '1.2rem' } }, 
        'Each component is meticulously designed to provide a premium user experience with zero external dependencies.'
      ),
      this.create('div', { className: 'grid-2', style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' } },
        this.create('div', { className: 'glass', style: { padding: '3rem' } },
          this.create('h3', { className: 'pk-card-title', style: { marginBottom: '2rem' } }, 'Buttons & Interactions'),
          this.create('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '1rem' } },
            new MasterButton({ text: 'Primary Button', variant: 'primary' }),
            new MasterButton({ text: 'Outline Button', variant: 'outline' }),
            new MasterButton({ text: 'Glass Button', variant: 'glass' }),
            new MasterButton({ text: 'Small', variant: 'primary', size: 'sm' })
          ),
          this.create('p', { style: { marginTop: '2rem', color: 'var(--pk-text-muted)', fontSize: '0.9rem' } }, 'Features: Multi-variant, auto-ripple, icon support, size scaling.')
        ),
        this.create('div', { className: 'glass', style: { padding: '3rem' } },
          this.create('h3', { className: 'pk-card-title', style: { marginBottom: '2rem' } }, 'Navigation & Structure'),
          this.create('ul', { style: { color: 'var(--pk-text-secondary)', listStyle: 'none', padding: '0' } },
            this.create('li', { style: { marginBottom: '0.8rem' } }, '✨ MasterNav: Dynamic scroll detection & glassmorphism.'),
            this.create('li', { style: { marginBottom: '0.8rem' } }, '✨ MasterHero: High-impact display area.'),
            this.create('li', { style: { marginBottom: '0.8rem' } }, '✨ MasterCard: Hover effects & icon integration.'),
            this.create('li', { style: { marginBottom: '0.8rem' } }, '✨ MasterRouter: Hash-based routing.')
          )
        )
      )
    );
  }
}
