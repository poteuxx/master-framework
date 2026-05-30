import { MasterComponent } from '../core.js';

export class MasterCard extends MasterComponent {
  render() {
    const { title, description, icon, variant = 'glass' } = this.props;

    return this.create('div', { className: `${variant} pk-card` },
      icon ? this.create('div', { className: 'pk-card-icon' }, icon) : null,
      this.create('h3', { className: 'pk-card-title' }, title),
      this.create('p', { className: 'pk-card-description' }, description)
    );
  }
}
