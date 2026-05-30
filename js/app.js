import { Master, MasterComponent, MasterRouter } from './core.js';
import { MasterNav } from './components/MasterNav.js';
import { HomeView } from './views/HomeView.js';
import { FeaturesView } from './views/FeaturesView.js';
import { ComponentsView } from './views/ComponentsView.js';
import { DocsView } from './views/DocsView.js';

class App extends MasterComponent {
  onMount() {
    new MasterRouter({
      '#': HomeView,
      '#features': FeaturesView,
      '#components': ComponentsView,
      '#docs': DocsView
    }, '#main-content');
  }

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
      this.create('div', { id: 'main-content' }),
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
