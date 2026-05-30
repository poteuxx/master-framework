import { Master, MasterComponent } from './core.js';
import { MasterNav } from './components/MasterNav.js';
import { MasterHero } from './components/MasterHero.js';
import { MasterCard } from './components/MasterCard.js';

class App extends MasterComponent {
  render() {
    return this.create('div', { className: 'app-container' },
      new MasterNav({
        logo: 'MASTER',
        links: [
          { text: 'Features', href: '#features' },
          { text: 'Components', href: '#components' },
          { text: 'Docs', href: '#docs' }
        ]
      }),
      this.create('main', {},
        new MasterHero({
          title: 'The Ultimate Web Foundation',
          subtitle: 'Build ultra-fast, premium web applications with a zero-dependency framework designed for performance and aesthetics.',
          primaryAction: { text: 'Quick Start', onClick: () => alert('Starting...') },
          secondaryAction: { text: 'View GitHub', onClick: () => window.open('https://github.com/poteuxx/master-framework', '_blank') }
        }),
        this.create('section', { id: 'features', className: 'section container' },
          this.create('h2', { className: 'glow-text section-title' }, 'Core Philosophy'),
          this.create('div', { className: 'grid-3' },
            new MasterCard({
              title: 'Zero Dependency',
              description: 'No node_modules, no build step, no bloat. Just clean, optimized vanilla JavaScript and CSS.',
              icon: '🚀'
            }),
            new MasterCard({
              title: 'Premium Design',
              description: 'A built-in design system focused on high-end glassmorphism, fluid typography, and micro-animations.',
              icon: '💎'
            }),
            new MasterCard({
              title: 'Ultra Performance',
              description: 'Engineered for 100/100 Lighthouse scores. Minimal footprint, maximum speed.',
              icon: '⚡'
            })
          )
        )
      ),
      this.create('footer', { className: 'footer section' },
        this.create('div', { className: 'container' },
          this.create('p', {}, '© 2026 Master Framework. Created with ❤️ by André.')
        )
      )
    );
  }
}

// Initialize App
Master.render(new App(), '#app');
