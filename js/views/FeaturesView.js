import { MasterComponent } from '../core.js';
import { MasterCard } from '../components/MasterCard.js';

export class FeaturesView extends MasterComponent {
  render() {
    return this.create('section', { className: 'section container animate-fade-in', style: { paddingTop: '150px' } },
      this.create('h1', { className: 'gradient-text', style: { fontSize: '4rem', marginBottom: '2rem', textAlign: 'center' } }, 'Powerful Features'),
      this.create('p', { style: { textAlign: 'center', color: 'var(--pk-text-secondary)', maxWidth: '800px', margin: '0 auto 5rem', fontSize: '1.2rem' } }, 
        'Master Framework provides everything you need to build state-of-the-art applications without the complexity of modern build tools.'
      ),
      this.create('div', { className: 'grid-3' },
        new MasterCard({
          title: 'Signal Reactivity',
          description: 'A native implementation of signals for fine-grained reactivity and ultra-efficient DOM updates.',
          icon: '📡'
        }),
        new MasterCard({
          title: 'SPA Router',
          description: 'Built-in client-side routing for seamless page transitions without full page reloads.',
          icon: '🛣️'
        }),
        new MasterCard({
          title: 'Micro-Animations',
          description: 'Pre-configred hardware-accelerated animations that make your app feel alive.',
          icon: '✨'
        }),
        new MasterCard({
          title: 'Responsive Design',
          description: 'Mobile-first fluid layouts that adapt perfectly to any screen size.',
          icon: '📱'
        }),
        new MasterCard({
          title: 'Glassmorphism',
          description: 'High-end transparency and blur effects out of the box with CSS variables.',
          icon: '🪟'
        }),
        new MasterCard({
          title: 'Atomic CSS',
          description: 'Lightweight utility system that keeps your bundle size extremely small.',
          icon: '⚛️'
        })
      )
    );
  }
}
