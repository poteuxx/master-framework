import { MasterComponent } from '../core.js';
import { MasterButton } from './MasterButton.js';

export class MasterNav extends MasterComponent {
  onMount(el) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        el.classList.add('scrolled');
      } else {
        el.classList.remove('scrolled');
      }
    });
  }

  render() {
    const { logo = 'MASTER', links = [] } = this.props;

    return this.create('nav', { className: 'navbar' },
      this.create('div', { className: 'container nav-content' },
        this.create('a', { href: '#', className: 'logo' },
          this.create('img', { src: './assets/logo.png', alt: 'Logo', style: { height: '32px', marginRight: '10px' } }),
          this.create('span', {}, logo), 'FRAMEWORK'
        ),
        this.create('div', { className: 'nav-links' },
          links.map(link => 
            this.create('a', { href: link.href, className: 'nav-link' }, link.text)
          )
        ),
        new MasterButton({ 
          variant: 'primary', 
          size: 'sm', 
          text: 'Get Started',
          onClick: () => window.location.hash = '#docs'
        })
      )
    );
  }
}
