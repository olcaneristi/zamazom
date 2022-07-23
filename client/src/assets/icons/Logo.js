import * as React from 'react';

const Logo = props => (
  <svg
    width={props.width || 154}
    height={props.height || 28}
    fill="none"
    viewBox="0 0 154 28"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M50.172 8.86c.124.286.155.578.093.873a1.468 1.468 0 0 1-.396.769l-7.003 6.991h7.282v3.03h-10.93c-.31 0-.594-.085-.85-.256a1.683 1.683 0 0 1-.56-.677 1.54 1.54 0 0 1-.093-.873c.063-.303.206-.567.431-.793l6.969-6.968h-7.283v-3.03h10.953c.303 0 .58.083.827.245.256.164.443.393.56.688Zm15.427 7.491c0 .42-.074.874-.221 1.364a4.08 4.08 0 0 1-.723 1.352c-.326.41-.757.757-1.293 1.037-.529.279-1.174.419-1.934.419h-5.466c-.419 0-.873-.074-1.363-.222a4.192 4.192 0 0 1-1.351-.71 4.114 4.114 0 0 1-1.037-1.294c-.28-.536-.42-1.184-.42-1.946 0-.42.074-.874.222-1.363.149-.492.39-.95.71-1.352.334-.419.766-.769 1.293-1.048.537-.28 1.185-.42 1.946-.42h5.465v2.89h-5.465c-.411 0-.73.128-.955.385-.225.248-.338.559-.338.932 0 .396.129.706.385.931.261.217.592.333.932.327h5.442c.411 0 .73-.124.955-.373.225-.249.338-.56.338-.932v-4.23c0-.396-.124-.71-.373-.943-.24-.233-.548-.35-.92-.35h-6.654V7.927h6.654c.419 0 .87.074 1.35.221.495.15.954.395 1.353.723.42.326.769.757 1.048 1.293.28.529.42 1.173.42 1.934v4.253Zm13.831 4.172H76.4v-8.355c0-.396-.105-.695-.314-.897-.21-.21-.52-.315-.932-.315h-3.939v9.567h-3.03V9.43c0-.21.04-.404.117-.583.078-.186.186-.345.326-.477a1.529 1.529 0 0 1 1.084-.443h5.465c.42 0 .87.074 1.352.221.481.148.94.385 1.375.71v-.931h4.101c.288 0 .59.035.91.105a4.3 4.3 0 0 1 .943.303c.325.143.63.327.909.547.287.218.54.486.757.804.217.311.392.672.525 1.084.131.412.197.878.197 1.398v8.355h-3.03v-8.355c0-.396-.1-.695-.302-.897-.194-.21-.497-.315-.909-.315h-2.727c.101.373.152.777.152 1.212v8.355Zm22.617-4.172c0 .42-.074.874-.222 1.364-.153.492-.398.95-.722 1.352-.326.41-.757.757-1.293 1.037-.528.279-1.173.419-1.935.419h-5.464c-.42 0-.874-.074-1.364-.222a4.2 4.2 0 0 1-1.352-.71 4.123 4.123 0 0 1-1.037-1.294c-.28-.536-.419-1.184-.419-1.946 0-.42.074-.874.222-1.363.148-.492.39-.95.71-1.352.334-.419.765-.769 1.294-1.048.535-.28 1.184-.42 1.946-.42h5.464v2.89h-5.464c-.412 0-.73.128-.956.385-.225.248-.338.559-.338.932 0 .396.128.706.385.931.261.217.592.333.932.327h5.441c.412 0 .73-.124.956-.373.225-.249.338-.56.338-.932v-4.23c0-.396-.124-.71-.373-.943-.241-.233-.548-.35-.92-.35h-6.654V7.927h6.653c.42 0 .87.074 1.352.221.49.148.94.388 1.352.723.419.326.769.757 1.048 1.293.28.529.42 1.173.42 1.934v4.253Zm14.472-7.492c.124.287.155.579.093.874-.052.29-.19.558-.396.769l-7.003 6.991h7.282v3.03h-10.929c-.303.002-.6-.087-.851-.256a1.678 1.678 0 0 1-.559-.677 1.538 1.538 0 0 1-.093-.873c.062-.303.206-.567.431-.793l6.968-6.968h-7.283v-3.03h10.953c.303 0 .579.083.828.245.256.164.442.393.559.688Zm16.08 7.411c0 .52-.066.99-.198 1.41a4.238 4.238 0 0 1-.524 1.095 3.757 3.757 0 0 1-.758.804 4.5 4.5 0 0 1-.909.536 4.724 4.724 0 0 1-.956.315 4.713 4.713 0 0 1-.908.093h-5.465c-.42 0-.878-.074-1.375-.222a4.166 4.166 0 0 1-1.387-.722 4.284 4.284 0 0 1-1.06-1.316c-.28-.544-.419-1.209-.419-1.993v-4.102c0-.776.139-1.433.419-1.97a4.097 4.097 0 0 1 1.06-1.316c.41-.332.881-.582 1.387-.734a4.851 4.851 0 0 1 1.375-.221h5.465c.777 0 1.437.14 1.981.42.543.279.983.633 1.317 1.06.327.407.572.874.722 1.375.155.496.233.959.233 1.386v4.102Zm-3.03-4.078c0-.42-.104-.73-.315-.932-.209-.203-.512-.304-.908-.304h-5.442c-.404 0-.71.105-.92.315-.21.202-.315.501-.315.897v4.102c0 .396.105.699.315.91.21.208.516.313.92.313h5.442c.411 0 .719-.105.92-.314.202-.21.303-.513.303-.91v-4.077Zm16.861 8.33h-3.03v-8.354c0-.396-.105-.695-.314-.897-.21-.21-.521-.315-.932-.315h-3.939v9.567h-3.029V9.43c0-.21.038-.404.116-.583.078-.186.187-.345.326-.477a1.533 1.533 0 0 1 1.084-.443h5.465c.419 0 .87.074 1.352.221.481.148.94.385 1.374.71v-.931h4.102c.287 0 .59.035.909.105.318.062.633.163.944.303.325.143.63.327.909.547.287.218.54.486.757.804.217.311.392.672.524 1.084.133.412.198.878.198 1.398v8.355h-3.029v-8.355c0-.396-.101-.695-.303-.897-.194-.21-.497-.315-.909-.315h-2.727c.101.373.152.777.152 1.212v8.355Z"
      fill="#fff"
    />
    <path
      d="M17.284 17.489a6.996 6.996 0 1 0-13.991 0 6.996 6.996 0 0 0 13.991 0Zm-12.345 0a5.35 5.35 0 1 1 10.7 0 5.35 5.35 0 0 1-10.7 0Z"
      fill="#FFC700"
    />
    <path d="M11.935 16.667a.823.823 0 1 0 1.647 0 .823.823 0 0 0-1.647 0Z" fill="#77CEFF" />
    <path d="M9.056 19.958a1.235 1.235 0 1 0 2.469 0 1.235 1.235 0 0 0-2.47 0" fill="#ECA0FF" />
    <path d="M6.998 15.843a1.646 1.646 0 1 0 3.292 0 1.646 1.646 0 0 0-3.292 0Z" fill="#fff" />
    <path
      d="M19.137 16.3a.823.823 0 0 0-.238.65 8.642 8.642 0 1 1-8.047-7.892.823.823 0 0 0 .635-.239L18.9 1.405A.823.823 0 0 0 17.737.241L10.576 7.4s-.187-.005-.288-.005C4.606 7.394 0 12 0 17.683S4.606 27.97 10.288 27.97c5.681 0 10.287-4.606 10.287-10.288 0-.291-.009-.483-.009-.483l7.193-7.193a.823.823 0 1 0-1.164-1.164L19.137 16.3Z"
      fill="#fff"
    />
    <path
      d="M20.817 7.865a.823.823 0 0 0 1.164 1.164l5.772-5.772a.823.823 0 0 0-1.164-1.164l-5.772 5.772Z"
      fill="#FFAFAF"
    />
    <path d="M18.108 11.316a.823.823 0 1 0 1.646 0 .823.823 0 0 0-1.646 0Z" fill="#8DD382" />
    <path
      d="M14.643 8.276a.823.823 0 0 0 1.164 1.164l4.126-4.126A.823.823 0 1 0 18.77 4.15l-4.126 4.126Z"
      fill="#FFCA42"
    />
    <path
      d="M20.817 2.122a.823.823 0 0 0 1.164 1.164l1.676-1.676A.823.823 0 0 0 22.493.446l-1.676 1.676Z"
      fill="#C9B6FF"
    />
  </svg>
);

export default Logo;
