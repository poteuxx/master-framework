import { MasterComponent } from '../core.js';
import { MasterButton } from './MasterButton.js';

export class MasterHero extends MasterComponent {
  render() {
    const { title, subtitle, primaryAction, secondaryAction } = this.props;

    return this.create('section', { className: 'hero animate-fade-in' },
      this.create('div', { className: 'hero-bg' }),
      this.create('div', { className: 'container hero-content' },
        this.create('h1', { className: 'gradient-text' }, title),
        this.create('p', {}, subtitle),
        this.create('div', { className: 'hero-actions' },
          new MasterButton({ 
            variant: 'primary', 
            text: primaryAction.text, 
            onClick: primaryAction.onClick,
            style: { marginRight: '1rem' }
          }),
          new MasterButton({ 
            variant: 'outline', 
            text: secondaryAction.text, 
            onClick: secondaryAction.onClick 
          })
        )
      )
    );
  }
}
