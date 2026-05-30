import { MasterComponent } from '../core.js';

export class MasterHero extends MasterComponent {
  render() {
    const { title, subtitle, primaryAction, secondaryAction } = this.props;

    return this.create('section', { className: 'hero animate-fade-in' },
      this.create('div', { className: 'hero-bg' }),
      this.create('div', { className: 'container hero-content' },
        this.create('h1', { className: 'gradient-text' }, title),
        this.create('p', {}, subtitle),
        this.create('div', { className: 'hero-actions' },
          this.create('button', { 
            className: 'pk-btn pk-btn-primary', 
            style: { marginRight: '1rem' },
            onclick: primaryAction.onClick 
          }, primaryAction.text),
          this.create('button', { 
            className: 'pk-btn pk-btn-outline',
            onclick: secondaryAction.onClick 
          }, secondaryAction.text)
        )
      )
    );
  }
}
