import container from 'markdown-it-container';

const regExp = /message/;
const withOptions = /message [\S ]+/;

const message = {
  validate(params) {
    console.log(params);

    return params.trim().match(withOptions) || params.trim().match(regExp);
  },

  render(tokens, idx) {
    const match = tokens[idx].info;

    const [, title, ...options] = match.split(' ');
    console.log(title);
    console.log(options);

    const classList = [];

    while (options[0] && options[0].includes('is-')) {
      classList.push(options.shift());
    }

    const message = options.join(' ');

    if (tokens[idx].nesting === 1) {
      return `
        <article class="message ${classList.join(' ')}">
          ${
            message
              ? `
            <div class="message-header">
              <p>${message}</p>
            </div>
          `
              : ''
          }
          <div class="message-body">
      `;
    }

    return `
        </div>
      </article>
    `;
  }
};

export default function bulmaMessage(md) {
  md.use(container, 'message', message);
}