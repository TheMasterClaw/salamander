"use strict";exports.id=8212,exports.ids=[8212],exports.modules={29452:(a,b,c)=>{var d=c(29856),e=c(44500);c(9612),c(67332),c(42190),c(29272),c(64222);var f=c(77292),g=c(14143),h=c(27680);let i=(0,h.AH)`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:a})=>a[1]};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[32]};
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a[32]};
  }

  wui-text {
    padding-left: ${({spacing:a})=>a[1]};
    padding-right: ${({spacing:a})=>a[1]};
  }

  .left-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    border: 1px solid ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] .token-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .token-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .token-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .chain-image {
    width: 12px;
    height: 12px;
    bottom: 2px;
    right: -4px;
  }

  button[data-size='md'] .chain-image {
    width: 10px;
    height: 10px;
    bottom: 2px;
    right: -4px;
  }

  button[data-size='sm'] .chain-image {
    width: 8px;
    height: 8px;
    bottom: 2px;
    right: -3px;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var j=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let k={lg:"lg-regular",md:"lg-regular",sm:"md-regular"},l={lg:"lg",md:"md",sm:"sm"},m=class extends d.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.text="",this.loading=!1}render(){return this.loading?(0,d.qy)` <wui-flex alignItems="center" gap="01" padding="01">
        <wui-shimmer width="20px" height="20px"></wui-shimmer>
        <wui-shimmer width="32px" height="18px" borderRadius="4xs"></wui-shimmer>
      </wui-flex>`:(0,d.qy)`
      <button ?disabled=${this.disabled} data-size=${this.size}>
        ${this.imageTemplate()} ${this.textTemplate()}
      </button>
    `}imageTemplate(){if(this.imageSrc&&this.chainImageSrc)return(0,d.qy)`<wui-flex class="left-image-container">
        <wui-image src=${this.imageSrc} class="token-image"></wui-image>
        <wui-image src=${this.chainImageSrc} class="chain-image"></wui-image>
      </wui-flex>`;if(this.imageSrc)return(0,d.qy)`<wui-image src=${this.imageSrc} class="token-image"></wui-image>`;let a=l[this.size];return(0,d.qy)`<wui-flex class="left-icon-container">
      <wui-icon size=${a} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}textTemplate(){let a=k[this.size];return(0,d.qy)`<wui-text color="primary" variant=${a}
      >${this.text}</wui-text
    >`}};m.styles=[f.W5,f.fD,i],j([(0,e.MZ)()],m.prototype,"size",void 0),j([(0,e.MZ)()],m.prototype,"imageSrc",void 0),j([(0,e.MZ)()],m.prototype,"chainImageSrc",void 0),j([(0,e.MZ)({type:Boolean})],m.prototype,"disabled",void 0),j([(0,e.MZ)()],m.prototype,"text",void 0),j([(0,e.MZ)({type:Boolean})],m.prototype,"loading",void 0),m=j([(0,g.E)("wui-token-button")],m)},88212:(a,b,c)=>{c.r(b),c.d(b,{W3mSwapPreviewView:()=>G,W3mSwapSelectTokenView:()=>R,W3mSwapView:()=>D});var d=c(29856),e=c(44500),f=c(31886),g=c(57339),h=c(87977),i=c(78066),j=c(13295),k=c(93175),l=c(26641),m=c(23799),n=c(74967);c(21238),c(58581),c(24307),c(35419),c(77041);var o=c(88693),p=c(851);c(30312),c(94235);let q=(0,n.AH)`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a["3"]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:a})=>a["3"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    cursor: pointer;
  }

  .details-content-container {
    padding: ${({spacing:a})=>a["2"]};
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:a})=>a["3"]};
    padding-left: ${({spacing:a})=>a["3"]};
    padding-right: ${({spacing:a})=>a["2"]};
    border-radius: calc(
      ${({borderRadius:a})=>a["1"]} + ${({borderRadius:a})=>a["1"]}
    );
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: ${({spacing:a})=>a["2"]};
  }
`;var r=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let s=p.oU.CONVERT_SLIPPAGE_TOLERANCE,t=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.networkName=g.W.state.activeCaipNetwork?.name,this.detailsOpen=!1,this.sourceToken=i.GN.state.sourceToken,this.toToken=i.GN.state.toToken,this.toTokenAmount=i.GN.state.toTokenAmount,this.sourceTokenPriceInUSD=i.GN.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=i.GN.state.toTokenPriceInUSD,this.priceImpact=i.GN.state.priceImpact,this.maxSlippage=i.GN.state.maxSlippage,this.networkTokenSymbol=i.GN.state.networkTokenSymbol,this.inputError=i.GN.state.inputError,this.unsubscribe.push(i.GN.subscribe(a=>{this.sourceToken=a.sourceToken,this.toToken=a.toToken,this.toTokenAmount=a.toTokenAmount,this.priceImpact=a.priceImpact,this.maxSlippage=a.maxSlippage,this.sourceTokenPriceInUSD=a.sourceTokenPriceInUSD,this.toTokenPriceInUSD=a.toTokenPriceInUSD,this.inputError=a.inputError}))}render(){let a=this.toTokenAmount&&this.maxSlippage?f.S.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;let b=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return(0,d.qy)`
      <wui-flex flexDirection="column" alignItems="center" gap="01" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","2","0","2"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="2">
                <wui-text variant="sm-regular" color="primary">
                  1 ${this.sourceToken.symbol} =
                  ${f.S.formatNumberToLocalString(b,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="sm-regular" color="secondary">
                  $${f.S.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?(0,d.qy)`
                <wui-flex flexDirection="column" gap="2" class="details-content-container">
                  ${this.priceImpact?(0,d.qy)` <wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${f.S.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?(0,d.qy)`<wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${a?`Transaction will be reversed if you receive less than ${f.S.formatNumberToLocalString(a,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${f.S.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${s}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="2">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="2">
                        <wui-text class="details-row-title" variant="sm-regular" color="secondary">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="sm-regular" color="secondary">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};t.styles=[q],r([(0,e.wk)()],t.prototype,"networkName",void 0),r([(0,e.MZ)()],t.prototype,"detailsOpen",void 0),r([(0,e.wk)()],t.prototype,"sourceToken",void 0),r([(0,e.wk)()],t.prototype,"toToken",void 0),r([(0,e.wk)()],t.prototype,"toTokenAmount",void 0),r([(0,e.wk)()],t.prototype,"sourceTokenPriceInUSD",void 0),r([(0,e.wk)()],t.prototype,"toTokenPriceInUSD",void 0),r([(0,e.wk)()],t.prototype,"priceImpact",void 0),r([(0,e.wk)()],t.prototype,"maxSlippage",void 0),r([(0,e.wk)()],t.prototype,"networkTokenSymbol",void 0),r([(0,e.wk)()],t.prototype,"inputError",void 0),t=r([(0,n.EM)("w3m-swap-details")],t),c(22855);let u=(0,n.AH)`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({borderRadius:a})=>a["5"]};
    padding: ${({spacing:a})=>a["5"]};
    padding-right: ${({spacing:a})=>a["3"]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    box-shadow: inset 0px 0px 0px 1px ${({tokens:a})=>a.theme.foregroundPrimary};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill ${({durations:a})=>a.md}
      ${({easings:a})=>a["ease-out-power-1"]};
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: ${({tokens:a})=>a.core.glass010};
  }

  :host wui-flex .input_mask__background {
    fill: ${({tokens:a})=>a.theme.foregroundPrimary};
  }
`;var v=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let w=class extends d.WF{constructor(){super(...arguments),this.target="sourceToken"}render(){return(0,d.qy)`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="1"
        >
          <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return(0,d.qy)`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
      </wui-flex>
    `}};w.styles=[u],v([(0,e.MZ)()],w.prototype,"target",void 0),w=v([(0,n.EM)("w3m-swap-input-skeleton")],w);let x={numericInputKeyDown(a,b,c){let d=a.metaKey||a.ctrlKey,e=a.key,f=e.toLocaleLowerCase(),g=","===e,h="."===e,i=e>="0"&&e<="9";d||"a"!==f&&"c"!==f&&"v"!==f&&"x"!==f||a.preventDefault(),"0"!==b||g||h||"0"!==e||a.preventDefault(),"0"===b&&i&&(c(e),a.preventDefault()),(g||h)&&(b||(c("0."),a.preventDefault()),(b?.includes(".")||b?.includes(","))&&a.preventDefault()),i||["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"].includes(e)||h||g||a.preventDefault()}};c(29452);let y=(0,n.AH)`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({borderRadius:a})=>a["5"]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    padding: ${({spacing:a})=>a["5"]};
    padding-right: ${({spacing:a})=>a["3"]};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px ${({tokens:a})=>a.theme.foregroundPrimary};
    position: relative;
    transition: box-shadow ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.lg};
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:a})=>a.core.glass010};
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
    color: ${({tokens:a})=>a.theme.textPrimary};
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({tokens:a})=>a.core.glass010};
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var z=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let A=class extends d.WF{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){let a=this.marketValue||"0",b=f.S.bigNumber(a).gt("0");return(0,d.qy)`
      <wui-flex
        class="${this.focused?"focus":""}"
        justifyContent="space-between"
        alignItems="center"
      >
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            value=${this.value||""}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
            pattern="[0-9,.]*"
          />
          <wui-text class="market-value" variant="sm-regular" color="secondary">
            ${b?`$${f.S.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(a){return x.numericInputKeyDown(a,this.value,a=>this.onSetAmount?.(this.target,a))}dispatchInputChangeEvent(a){if(!this.onSetAmount)return;let b=a.target.value.replace(/[^0-9.]/gu,"");","===b||"."===b?this.onSetAmount(this.target,"0."):b.endsWith(",")?this.onSetAmount(this.target,b.replace(",",".")):this.onSetAmount(this.target,b)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?(0,d.qy)`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="1"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:(0,d.qy)` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="neutral-secondary"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){let a=f.S.multiply(this.balance,this.price),b=!!a&&a?.gt(5e-5);return(0,d.qy)`
      ${b?(0,d.qy)`<wui-text variant="sm-regular" color="secondary">
            ${f.S.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(b):null}
    `}tokenActionButtonTemplate(a){return a?(0,d.qy)` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-primary" variant="sm-medium">Max</wui-text>
      </button>`:(0,d.qy)` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-primary" variant="sm-medium">Buy</wui-text>
    </button>`}onFocusChange(a){this.focused=a}onSelectToken(){l.E.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),h.I.push("SwapSelectToken",{target:this.target})}onBuyToken(){h.I.push("OnRampProviders")}};A.styles=[y],z([(0,e.MZ)()],A.prototype,"focused",void 0),z([(0,e.MZ)()],A.prototype,"balance",void 0),z([(0,e.MZ)()],A.prototype,"value",void 0),z([(0,e.MZ)()],A.prototype,"price",void 0),z([(0,e.MZ)()],A.prototype,"marketValue",void 0),z([(0,e.MZ)()],A.prototype,"disabled",void 0),z([(0,e.MZ)()],A.prototype,"target",void 0),z([(0,e.MZ)()],A.prototype,"token",void 0),z([(0,e.MZ)()],A.prototype,"onSetAmount",void 0),z([(0,e.MZ)()],A.prototype,"onSetMaxValue",void 0),A=z([(0,n.EM)("w3m-swap-input")],A);let B=(0,n.AH)`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: ${({borderRadius:a})=>a["4"]};
  }

  .action-button:disabled {
    border-color: 1px solid ${({tokens:a})=>a.core.glass010};
  }

  .swap-inputs-container {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:a})=>a["10"]} !important;
    border: 4px solid ${({tokens:a})=>a.theme.backgroundPrimary};
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: ${({spacing:a})=>a["2"]};
    border-radius: ${({borderRadius:a})=>a["4"]};
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    padding: ${({spacing:a})=>a["2"]};
  }

  .details-container > wui-flex {
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a["3"]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:a})=>a["3"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    transition: background ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({spacing:a})=>a["2"]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:a})=>a["3"]} ${({spacing:a})=>a["5"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }
`;var C=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let D=class extends d.WF{subscribe({resetSwapState:a,initializeSwapState:b}){return()=>{g.W.subscribeKey("activeCaipNetwork",c=>this.onCaipNetworkChange({newCaipNetwork:c,resetSwapState:a,initializeSwapState:b})),g.W.subscribeChainProp("accountState",c=>{this.onCaipAddressChange({newCaipAddress:c?.caipAddress,resetSwapState:a,initializeSwapState:b})})}}constructor(){super(),this.unsubscribe=[],this.initialParams=h.I.state.data?.swap,this.detailsOpen=!1,this.caipAddress=g.W.getAccountData()?.caipAddress,this.caipNetworkId=g.W.state.activeCaipNetwork?.caipNetworkId,this.initialized=i.GN.state.initialized,this.loadingQuote=i.GN.state.loadingQuote,this.loadingPrices=i.GN.state.loadingPrices,this.loadingTransaction=i.GN.state.loadingTransaction,this.sourceToken=i.GN.state.sourceToken,this.sourceTokenAmount=i.GN.state.sourceTokenAmount,this.sourceTokenPriceInUSD=i.GN.state.sourceTokenPriceInUSD,this.toToken=i.GN.state.toToken,this.toTokenAmount=i.GN.state.toTokenAmount,this.toTokenPriceInUSD=i.GN.state.toTokenPriceInUSD,this.inputError=i.GN.state.inputError,this.fetchError=i.GN.state.fetchError,this.lastTokenPriceUpdate=0,this.minTokenPriceUpdateInterval=1e4,this.visibilityChangeHandler=()=>{document?.hidden?(clearInterval(this.interval),this.interval=void 0):this.startTokenPriceInterval()},this.startTokenPriceInterval=()=>{this.interval&&Date.now()-this.lastTokenPriceUpdate<this.minTokenPriceUpdateInterval||(this.lastTokenPriceUpdate&&Date.now()-this.lastTokenPriceUpdate>this.minTokenPriceUpdateInterval&&this.fetchTokensAndValues(),clearInterval(this.interval),this.interval=setInterval(()=>{this.fetchTokensAndValues()},this.minTokenPriceUpdateInterval))},this.watchTokensAndValues=()=>{this.sourceToken&&this.toToken&&(this.subscribeToVisibilityChange(),this.startTokenPriceInterval())},this.onDebouncedGetSwapCalldata=j.w.debounce(async()=>{await i.GN.swapTokens()},200),this.subscribe({resetSwapState:!0,initializeSwapState:!1})(),this.unsubscribe.push(this.subscribe({resetSwapState:!1,initializeSwapState:!0}),k.W.subscribeKey("open",a=>{a||i.GN.resetState()}),h.I.subscribeKey("view",a=>{a.includes("Swap")||i.GN.resetValues()}),i.GN.subscribe(a=>{this.initialized=a.initialized,this.loadingQuote=a.loadingQuote,this.loadingPrices=a.loadingPrices,this.loadingTransaction=a.loadingTransaction,this.sourceToken=a.sourceToken,this.sourceTokenAmount=a.sourceTokenAmount,this.sourceTokenPriceInUSD=a.sourceTokenPriceInUSD,this.toToken=a.toToken,this.toTokenAmount=a.toTokenAmount,this.toTokenPriceInUSD=a.toTokenPriceInUSD,this.inputError=a.inputError,this.fetchError=a.fetchError,a.sourceToken&&a.toToken&&this.watchTokensAndValues()}))}async firstUpdated(){i.GN.initializeState(),this.watchTokensAndValues(),await this.handleSwapParameters()}disconnectedCallback(){this.unsubscribe.forEach(a=>a?.()),clearInterval(this.interval),document?.removeEventListener("visibilitychange",this.visibilityChangeHandler)}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}subscribeToVisibilityChange(){document?.removeEventListener("visibilitychange",this.visibilityChangeHandler),document?.addEventListener("visibilitychange",this.visibilityChangeHandler)}fetchTokensAndValues(){i.GN.getNetworkTokenPrice(),i.GN.getMyTokensWithBalance(),i.GN.swapTokens(),this.lastTokenPriceUpdate=Date.now()}templateSwap(){return(0,d.qy)`
      <wui-flex flexDirection="column" gap="3">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){let a=!this.sourceTokenAmount||"0"===this.sourceTokenAmount;return this.fetchError?"Swap":this.sourceToken&&this.toToken?a?"Enter amount":this.inputError?this.inputError:"Review swap":"Select token"}templateReplaceTokensButton(){return(0,d.qy)`
      <wui-flex class="replace-tokens-button-container">
        <wui-icon-box
          @click=${this.onSwitchTokens.bind(this)}
          icon="recycleHorizontal"
          size="md"
          variant="default"
        ></wui-icon-box>
      </wui-flex>
    `}templateLoading(){return(0,d.qy)`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(a,b){let c=i.GN.state.myTokensWithBalance?.find(a=>a?.address===b?.address),e="toToken"===a?this.toTokenAmount:this.sourceTokenAmount,g="toToken"===a?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,h=f.S.parseLocalStringToNumber(e)*g;return(0,d.qy)`<w3m-swap-input
      .value=${"toToken"===a?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${"toToken"===a}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${a}
      .token=${b}
      .balance=${c?.quantity?.numeric}
      .price=${c?.price}
      .marketValue=${h}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(a,b){let c=f.S.bigNumber(b||"0");this.handleChangeAmount(a,c.gt(0)?c.toFixed(20):"0")}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?(0,d.qy)`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(a,b){i.GN.clearError(),"sourceToken"===a?i.GN.setSourceTokenAmount(b):i.GN.setToTokenAmount(b),this.onDebouncedGetSwapCalldata()}templateActionButton(){let a=!this.toToken||!this.sourceToken,b=!this.sourceTokenAmount||"0"===this.sourceTokenAmount,c=this.loadingQuote||this.loadingPrices||this.loadingTransaction,e=c||a||b||this.inputError;return(0,d.qy)` <wui-flex gap="2">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant="accent-primary"
        ?loading=${!!c}
        ?disabled=${!!e}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}async onSwitchTokens(){await i.GN.switchTokens()}async onSwapPreview(){this.fetchError&&await i.GN.swapTokens(),l.E.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:(0,m.lj)(g.W.state.activeChain)===o.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),h.I.push("SwapPreview")}async handleSwapParameters(){if(this.initialParams){if(!i.GN.state.initialized){let a=new Promise(a=>{let b=i.GN.subscribeKey("initialized",c=>{c&&(b?.(),a())})});await a}await this.setSwapParameters(this.initialParams)}}async setSwapParameters({amount:a,fromToken:b,toToken:c}){if(!i.GN.state.tokens||!i.GN.state.myTokensWithBalance){let a=new Promise(a=>{let b=i.GN.subscribeKey("myTokensWithBalance",c=>{c&&c.length>0&&(b?.(),a())});setTimeout(()=>{b?.(),a()},5e3)});await a}let d=[...i.GN.state.tokens||[],...i.GN.state.myTokensWithBalance||[]];if(b){let a=d.find(a=>a.symbol.toLowerCase()===b.toLowerCase());a&&i.GN.setSourceToken(a)}if(c){let a=d.find(a=>a.symbol.toLowerCase()===c.toLowerCase());a&&i.GN.setToToken(a)}a&&!isNaN(Number(a))&&i.GN.setSourceTokenAmount(a)}onCaipAddressChange({newCaipAddress:a,resetSwapState:b,initializeSwapState:c}){this.caipAddress!==a&&(this.caipAddress=a,b&&i.GN.resetState(),c&&i.GN.initializeState())}onCaipNetworkChange({newCaipNetwork:a,resetSwapState:b,initializeSwapState:c}){this.caipNetworkId!==a?.caipNetworkId&&(this.caipNetworkId=a?.caipNetworkId,b&&i.GN.resetState(),c&&i.GN.initializeState())}};D.styles=B,C([(0,e.MZ)({type:Object})],D.prototype,"initialParams",void 0),C([(0,e.wk)()],D.prototype,"interval",void 0),C([(0,e.wk)()],D.prototype,"detailsOpen",void 0),C([(0,e.wk)()],D.prototype,"caipAddress",void 0),C([(0,e.wk)()],D.prototype,"caipNetworkId",void 0),C([(0,e.wk)()],D.prototype,"initialized",void 0),C([(0,e.wk)()],D.prototype,"loadingQuote",void 0),C([(0,e.wk)()],D.prototype,"loadingPrices",void 0),C([(0,e.wk)()],D.prototype,"loadingTransaction",void 0),C([(0,e.wk)()],D.prototype,"sourceToken",void 0),C([(0,e.wk)()],D.prototype,"sourceTokenAmount",void 0),C([(0,e.wk)()],D.prototype,"sourceTokenPriceInUSD",void 0),C([(0,e.wk)()],D.prototype,"toToken",void 0),C([(0,e.wk)()],D.prototype,"toTokenAmount",void 0),C([(0,e.wk)()],D.prototype,"toTokenPriceInUSD",void 0),C([(0,e.wk)()],D.prototype,"inputError",void 0),C([(0,e.wk)()],D.prototype,"fetchError",void 0),C([(0,e.wk)()],D.prototype,"lastTokenPriceUpdate",void 0),D=C([(0,n.EM)("w3m-swap-view")],D);let E=(0,n.AH)`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px ${({tokens:a})=>a.core.glass010};
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:a})=>a["2"]};
    padding: ${({spacing:a})=>a["2"]};
    height: 40px;
    border: none;
    border-radius: 80px;
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.theme.foregroundPrimary};
    cursor: pointer;
    transition: background ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background;
  }

  .token-item:hover {
    background: ${({tokens:a})=>a.core.glass010};
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:a})=>a["3"]} ${({spacing:a})=>a["5"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .action-buttons-container {
    width: 100%;
    gap: ${({spacing:a})=>a["2"]};
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: ${({borderRadius:a})=>a["4"]};
    border: none;
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.core.glass010};
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a["3"]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:a})=>a["3"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    transition: background ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({spacing:a})=>a["2"]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:a})=>a["3"]} ${({spacing:a})=>a["5"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }
`;var F=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let G=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=i.GN.state.approvalTransaction,this.swapTransaction=i.GN.state.swapTransaction,this.sourceToken=i.GN.state.sourceToken,this.sourceTokenAmount=i.GN.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=i.GN.state.sourceTokenPriceInUSD,this.balanceSymbol=g.W.getAccountData()?.balanceSymbol,this.toToken=i.GN.state.toToken,this.toTokenAmount=i.GN.state.toTokenAmount??"",this.toTokenPriceInUSD=i.GN.state.toTokenPriceInUSD,this.caipNetwork=g.W.state.activeCaipNetwork,this.inputError=i.GN.state.inputError,this.loadingQuote=i.GN.state.loadingQuote,this.loadingApprovalTransaction=i.GN.state.loadingApprovalTransaction,this.loadingBuildTransaction=i.GN.state.loadingBuildTransaction,this.loadingTransaction=i.GN.state.loadingTransaction,this.unsubscribe.push(g.W.subscribeChainProp("accountState",a=>{a?.balanceSymbol!==this.balanceSymbol&&h.I.goBack()}),g.W.subscribeKey("activeCaipNetwork",a=>{this.caipNetwork!==a&&(this.caipNetwork=a)}),i.GN.subscribe(a=>{this.approvalTransaction=a.approvalTransaction,this.swapTransaction=a.swapTransaction,this.sourceToken=a.sourceToken,this.toToken=a.toToken,this.toTokenPriceInUSD=a.toTokenPriceInUSD,this.sourceTokenAmount=a.sourceTokenAmount??"",this.toTokenAmount=a.toTokenAmount??"",this.inputError=a.inputError,a.inputError&&h.I.goBack(),this.loadingQuote=a.loadingQuote,this.loadingApprovalTransaction=a.loadingApprovalTransaction,this.loadingBuildTransaction=a.loadingBuildTransaction,this.loadingTransaction=a.loadingTransaction}))}firstUpdated(){i.GN.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(a=>a?.()),clearInterval(this.interval)}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{i.GN.getApprovalLoadingState()||i.GN.getTransaction()},1e4)}templateSwap(){let a=`${f.S.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,b=`${f.S.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,c=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,e=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD,g=f.S.formatNumberToLocalString(c),h=f.S.formatNumberToLocalString(e),i=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return(0,d.qy)`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="4">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Send</wui-text>
              <wui-text variant="md-regular" color="primary">$${g}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${a}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="default" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Receive</wui-text>
              <wui-text variant="md-regular" color="primary">$${h}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${b}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="2">
          <wui-icon size="sm" color="default" name="info"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral-secondary"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="secondary">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="accent-primary"
            ?loading=${i}
            ?disabled=${i}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="invert"> ${this.actionButtonLabel()} </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?(0,d.qy)`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){h.I.goBack()}onSendTransaction(){this.approvalTransaction?i.GN.sendTransactionForApproval(this.approvalTransaction):i.GN.sendTransactionForSwap(this.swapTransaction)}};G.styles=E,F([(0,e.wk)()],G.prototype,"interval",void 0),F([(0,e.wk)()],G.prototype,"detailsOpen",void 0),F([(0,e.wk)()],G.prototype,"approvalTransaction",void 0),F([(0,e.wk)()],G.prototype,"swapTransaction",void 0),F([(0,e.wk)()],G.prototype,"sourceToken",void 0),F([(0,e.wk)()],G.prototype,"sourceTokenAmount",void 0),F([(0,e.wk)()],G.prototype,"sourceTokenPriceInUSD",void 0),F([(0,e.wk)()],G.prototype,"balanceSymbol",void 0),F([(0,e.wk)()],G.prototype,"toToken",void 0),F([(0,e.wk)()],G.prototype,"toTokenAmount",void 0),F([(0,e.wk)()],G.prototype,"toTokenPriceInUSD",void 0),F([(0,e.wk)()],G.prototype,"caipNetwork",void 0),F([(0,e.wk)()],G.prototype,"inputError",void 0),F([(0,e.wk)()],G.prototype,"loadingQuote",void 0),F([(0,e.wk)()],G.prototype,"loadingApprovalTransaction",void 0),F([(0,e.wk)()],G.prototype,"loadingBuildTransaction",void 0),F([(0,e.wk)()],G.prototype,"loadingTransaction",void 0),G=F([(0,n.EM)("w3m-swap-preview-view")],G),c(79550),c(67332),c(29272),c(64222);var H=c(77292),I=c(14143),J=c(27680);let K=(0,J.AH)`
  :host {
    width: 100%;
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: ${({spacing:a})=>a["3"]};
    padding: ${({spacing:a})=>a["2"]};
    padding-right: ${({spacing:a})=>a["4"]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:a})=>a["4"]};
    color: ${({tokens:a})=>a.theme.foregroundSecondary};
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      opacity ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    }

    :host > wui-flex:active {
      background-color: ${({tokens:a})=>a.core.glass010};
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:a})=>a["20"]};
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.core.glass010};
    border-radius: ${({borderRadius:a})=>a["8"]};
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: ${({borderRadius:a})=>a["2"]};
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var L=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let M=class extends d.WF{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;let a=this.amount&&this.price?f.S.multiply(this.price,this.amount)?.toFixed(3):null;return(0,d.qy)`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="1">
          <wui-flex justifyContent="space-between">
            <wui-text variant="md-medium" color="primary" lineClamp="1">${this.name}</wui-text>
            ${a?(0,d.qy)`
                  <wui-text variant="md-medium" color="primary">
                    $${f.S.formatNumberToLocalString(a,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="sm-regular" color="secondary" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?(0,d.qy)`<wui-text variant="sm-regular" color="secondary">
                  ${f.S.formatNumberToLocalString(this.amount,5)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?(0,d.qy)`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?(0,d.qy)`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};M.styles=[H.W5,H.fD,K],L([(0,e.MZ)()],M.prototype,"imageSrc",void 0),L([(0,e.MZ)()],M.prototype,"name",void 0),L([(0,e.MZ)()],M.prototype,"symbol",void 0),L([(0,e.MZ)()],M.prototype,"price",void 0),L([(0,e.MZ)()],M.prototype,"amount",void 0),L([(0,e.wk)()],M.prototype,"visible",void 0),L([(0,e.wk)()],M.prototype,"imageError",void 0),M=L([(0,I.E)("wui-token-list-item")],M),c(42190);let N=(0,J.AH)`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    column-gap: ${({spacing:a})=>a["3"]};
    padding: ${({spacing:a})=>a["2"]};
    padding-right: ${({spacing:a})=>a["4"]};
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,O=class extends d.WF{render(){return(0,d.qy)`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="1" alignItems="flex-end">
          <wui-shimmer width="24px" height="12px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="32px" height="12px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};O.styles=[H.W5,N],O=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,I.E)("wui-token-list-item-loader")],O);let P=(0,n.AH)`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid ${({tokens:a})=>a.core.glass010};
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:a})=>a["2"]};
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.core.glass010};
    background-color: transparent;
    border-radius: ${({borderRadius:a})=>a["3"]};
    padding: ${({spacing:a})=>a["2"]};
    align-items: center;
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
  }

  .select-network-button:hover {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: ${({borderRadius:a})=>a["4"]};
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.core.glass010};
  }
`;var Q=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let R=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.targetToken=h.I.state.data?.target,this.sourceToken=i.GN.state.sourceToken,this.sourceTokenAmount=i.GN.state.sourceTokenAmount,this.toToken=i.GN.state.toToken,this.myTokensWithBalance=i.GN.state.myTokensWithBalance,this.popularTokens=i.GN.state.popularTokens,this.suggestedTokens=i.GN.state.suggestedTokens,this.tokensLoading=i.GN.state.tokensLoading,this.searchValue="",this.unsubscribe.push(i.GN.subscribe(a=>{this.sourceToken=a.sourceToken,this.toToken=a.toToken,this.myTokensWithBalance=a.myTokensWithBalance,this.popularTokens=a.popularTokens,this.suggestedTokens=a.suggestedTokens,this.tokensLoading=a.tokensLoading}))}async firstUpdated(){await i.GN.getTokenList()}updated(){let a=this.renderRoot?.querySelector(".suggested-tokens-container");a?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));let b=this.renderRoot?.querySelector(".tokens");b?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();let a=this.renderRoot?.querySelector(".suggested-tokens-container"),b=this.renderRoot?.querySelector(".tokens");a?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),b?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" gap="3">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(a){"sourceToken"===this.targetToken?i.GN.setSourceToken(a):(i.GN.setToToken(a),this.sourceToken&&this.sourceTokenAmount&&i.GN.swapTokens()),h.I.goBack()}templateSearchInput(){return(0,d.qy)`
      <wui-flex .padding=${["1","3","0","3"]} gap="2">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateMyTokens(){let a=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],b=this.filterTokensWithText(a,this.searchValue);return b?.length>0?(0,d.qy)`<wui-flex justifyContent="flex-start" padding="2">
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        ${b.map(a=>{let b=a.symbol===this.sourceToken?.symbol||a.symbol===this.toToken?.symbol;return(0,d.qy)`
            <wui-token-list-item
              data-testid="swap-select-token-item-${a.symbol}"
              name=${a.name}
              ?disabled=${b}
              symbol=${a.symbol}
              price=${a?.price}
              amount=${a?.quantity?.numeric}
              imageSrc=${a.logoUri}
              @click=${()=>{b||this.onSelectToken(a)}}
            >
            </wui-token-list-item>
          `})}`:null}templateAllTokens(){let a=this.popularTokens?this.popularTokens:[],b=this.filterTokensWithText(a,this.searchValue);return this.tokensLoading?(0,d.qy)`
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
      `:b?.length>0?(0,d.qy)`
        ${b.map(a=>(0,d.qy)`
            <wui-token-list-item
              data-testid="swap-select-token-item-${a.symbol}"
              name=${a.name}
              symbol=${a.symbol}
              imageSrc=${a.logoUri}
              @click=${()=>this.onSelectToken(a)}
            >
            </wui-token-list-item>
          `)}
      `:null}templateTokens(){return(0,d.qy)`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","2","2","2"]} flexDirection="column">
          ${this.templateMyTokens()}
          <wui-flex justifyContent="flex-start" padding="3">
            <wui-text variant="md-medium" color="secondary">Tokens</wui-text>
          </wui-flex>
          ${this.templateAllTokens()}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){let a=this.suggestedTokens?this.suggestedTokens.slice(0,8):null;return this.tokensLoading?(0,d.qy)`
        <wui-flex
          class="suggested-tokens-container"
          .padding=${["0","3","0","3"]}
          gap="2"
        >
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
        </wui-flex>
      `:a?(0,d.qy)`
      <wui-flex
        class="suggested-tokens-container"
        .padding=${["0","3","0","3"]}
        gap="2"
      >
        ${a.map(a=>(0,d.qy)`
            <wui-token-button
              text=${a.symbol}
              imageSrc=${a.logoUri}
              @click=${()=>this.onSelectToken(a)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(a){this.searchValue=a.detail}handleSuggestedTokensScroll(){let a=this.renderRoot?.querySelector(".suggested-tokens-container");a&&(a.style.setProperty("--suggested-tokens-scroll--left-opacity",n.z8.interpolate([0,100],[0,1],a.scrollLeft).toString()),a.style.setProperty("--suggested-tokens-scroll--right-opacity",n.z8.interpolate([0,100],[0,1],a.scrollWidth-a.scrollLeft-a.offsetWidth).toString()))}handleTokenListScroll(){let a=this.renderRoot?.querySelector(".tokens");a&&(a.style.setProperty("--tokens-scroll--top-opacity",n.z8.interpolate([0,100],[0,1],a.scrollTop).toString()),a.style.setProperty("--tokens-scroll--bottom-opacity",n.z8.interpolate([0,100],[0,1],a.scrollHeight-a.scrollTop-a.offsetHeight).toString()))}filterTokensWithText(a,b){return a.filter(a=>`${a.symbol} ${a.name} ${a.address}`.toLowerCase().includes(b.toLowerCase())).sort((a,c)=>{let d=`${a.symbol} ${a.name} ${a.address}`.toLowerCase(),e=`${c.symbol} ${c.name} ${c.address}`.toLowerCase();return d.indexOf(b.toLowerCase())-e.indexOf(b.toLowerCase())})}};R.styles=P,Q([(0,e.wk)()],R.prototype,"interval",void 0),Q([(0,e.wk)()],R.prototype,"targetToken",void 0),Q([(0,e.wk)()],R.prototype,"sourceToken",void 0),Q([(0,e.wk)()],R.prototype,"sourceTokenAmount",void 0),Q([(0,e.wk)()],R.prototype,"toToken",void 0),Q([(0,e.wk)()],R.prototype,"myTokensWithBalance",void 0),Q([(0,e.wk)()],R.prototype,"popularTokens",void 0),Q([(0,e.wk)()],R.prototype,"suggestedTokens",void 0),Q([(0,e.wk)()],R.prototype,"tokensLoading",void 0),Q([(0,e.wk)()],R.prototype,"searchValue",void 0),R=Q([(0,n.EM)("w3m-swap-select-token-view")],R)}};