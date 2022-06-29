import * as React from 'react';

const Logo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props?.width || 264}
    height={props?.height || 54}
    viewBox="0 0 264 54"
    fill="none"
    {...props}
  >
    <path
      d="M79.502 21.472c.219.505.273 1.018.164 1.538-.096.52-.328.97-.697 1.353L66.644 36.668H79.46V42H60.225c-.547 0-1.046-.15-1.498-.451a2.96 2.96 0 0 1-.984-1.19 2.71 2.71 0 0 1-.164-1.538c.11-.533.362-.998.759-1.394l12.264-12.264H57.784v-5.332h19.277c.534 0 1.02.144 1.457.43.45.288.779.691.984 1.21Zm27.152 13.186c0 .739-.13 1.538-.389 2.4a7.18 7.18 0 0 1-1.272 2.379c-.574.724-1.333 1.333-2.276 1.825-.93.492-2.065.738-3.404.738h-9.619c-.738 0-1.538-.13-2.4-.39a7.377 7.377 0 0 1-2.378-1.25c-.725-.588-1.333-1.347-1.825-2.277-.492-.943-.738-2.085-.738-3.425 0-.738.13-1.538.39-2.4a7.105 7.105 0 0 1 1.25-2.378c.588-.738 1.347-1.354 2.276-1.846.944-.492 2.085-.738 3.425-.738h9.618v5.086h-9.618c-.724 0-1.285.225-1.681.677-.397.437-.595.984-.595 1.64 0 .698.226 1.244.677 1.64a2.501 2.501 0 0 0 1.64.575h9.578c.724 0 1.285-.219 1.681-.656.397-.438.595-.985.595-1.64v-7.445c0-.697-.219-1.251-.656-1.661-.424-.41-.964-.616-1.62-.616h-11.71v-5.065h11.71c.738 0 1.531.13 2.378.39a6.91 6.91 0 0 1 2.379 1.271c.739.574 1.354 1.333 1.846 2.277.492.93.738 2.064.738 3.404v7.485ZM130.997 42h-5.332V27.296c0-.697-.185-1.224-.554-1.58-.369-.368-.916-.553-1.64-.553h-6.932V42h-5.332V22.477c0-.37.068-.711.205-1.026.137-.328.328-.608.574-.84a2.69 2.69 0 0 1 1.908-.78h9.618c.738 0 1.531.13 2.379.39.847.26 1.654.677 2.42 1.25v-1.64h7.218c.506 0 1.039.062 1.6.185.56.109 1.114.287 1.661.533a7.426 7.426 0 0 1 1.6.964c.506.382.95.854 1.333 1.415.382.547.69 1.182.923 1.907.232.725.348 1.545.348 2.46V42h-5.332V27.296c0-.697-.178-1.224-.533-1.58-.342-.368-.875-.553-1.6-.553h-4.799c.178.656.267 1.367.267 2.133V42Zm39.806-7.342c0 .739-.13 1.538-.39 2.4a7.195 7.195 0 0 1-1.271 2.379c-.575.724-1.333 1.333-2.277 1.825-.929.492-2.064.738-3.404.738h-9.618c-.739 0-1.538-.13-2.4-.39a7.39 7.39 0 0 1-2.379-1.25c-.724-.588-1.333-1.347-1.825-2.277-.492-.943-.738-2.085-.738-3.425 0-.738.13-1.538.39-2.4a7.078 7.078 0 0 1 1.251-2.378c.587-.738 1.346-1.354 2.276-1.846.943-.492 2.085-.738 3.425-.738h9.618v5.086h-9.618c-.725 0-1.285.225-1.682.677-.396.437-.595.984-.595 1.64 0 .698.226 1.244.677 1.64a2.502 2.502 0 0 0 1.641.575h9.577c.725 0 1.285-.219 1.682-.656.396-.438.594-.985.594-1.64v-7.445c0-.697-.218-1.251-.656-1.661-.424-.41-.964-.616-1.62-.616h-11.71v-5.065h11.71c.738 0 1.531.13 2.379.39.861.26 1.654.683 2.379 1.271.738.574 1.353 1.333 1.845 2.277.493.93.739 2.064.739 3.404v7.485Zm25.47-13.186c.219.505.274 1.018.165 1.538a2.59 2.59 0 0 1-.698 1.353l-12.325 12.305h12.817V42h-19.236a2.64 2.64 0 0 1-1.497-.451 2.957 2.957 0 0 1-.984-1.19 2.708 2.708 0 0 1-.164-1.538c.109-.533.362-.998.758-1.394l12.264-12.264h-12.817v-5.332h19.277c.533 0 1.019.144 1.456.43.451.288.779.691.984 1.21Zm28.301 13.043c0 .916-.116 1.743-.348 2.481a7.418 7.418 0 0 1-.923 1.928 6.575 6.575 0 0 1-1.333 1.415 7.92 7.92 0 0 1-1.6.943 8.34 8.34 0 0 1-1.682.554c-.56.11-1.093.164-1.599.164h-9.618c-.739 0-1.545-.13-2.42-.39a7.324 7.324 0 0 1-2.441-1.271c-.738-.602-1.36-1.374-1.866-2.317-.492-.957-.738-2.127-.738-3.507v-7.22c0-1.366.246-2.522.738-3.465.506-.957 1.128-1.73 1.866-2.317a7.136 7.136 0 0 1 2.441-1.292c.875-.26 1.681-.39 2.42-.39h9.618c1.367 0 2.529.246 3.486.738.957.492 1.73 1.115 2.318 1.867a7.12 7.12 0 0 1 1.271 2.42c.274.874.41 1.688.41 2.44v7.219Zm-5.332-7.178c0-.738-.184-1.285-.554-1.64-.369-.356-.902-.534-1.599-.534h-9.577c-.711 0-1.251.185-1.62.554-.37.355-.554.882-.554 1.579v7.219c0 .697.184 1.23.554 1.6.369.368.909.553 1.62.553h9.577c.724 0 1.265-.185 1.62-.554.355-.369.533-.902.533-1.6v-7.177ZM248.917 42h-5.332V27.296c0-.697-.185-1.224-.554-1.58-.369-.368-.916-.553-1.64-.553h-6.932V42h-5.332V22.477c0-.37.068-.711.205-1.026.137-.328.328-.608.574-.84a2.688 2.688 0 0 1 1.907-.78h9.619c.738 0 1.531.13 2.379.39.847.26 1.654.677 2.419 1.25v-1.64h7.219c.506 0 1.039.062 1.6.185.56.109 1.114.287 1.661.533a7.426 7.426 0 0 1 1.6.964c.505.382.95.854 1.333 1.415.382.547.69 1.182.922 1.907.233.725.349 1.545.349 2.46V42h-5.332V27.296c0-.697-.178-1.224-.533-1.58-.342-.368-.875-.553-1.6-.553h-4.799c.178.656.267 1.367.267 2.133V42Z"
      fill="#fff"
    />
    <path fill="url(#a)" d="M0 9h45v45H0z" />
    <defs>
      <pattern id="a" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#b" transform="scale(.005)" />
      </pattern>
      <image
        id="b"
        width={200}
        height={200}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default Logo;