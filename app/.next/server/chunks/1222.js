"use strict";exports.id=1222,exports.ids=[1222],exports.modules={21008:(a,b,c)=>{var d=c(29856),e=c(44500),f=c(84600),g=c(27680),h=c(77292),i=c(16627),j=c(14143);let k=(0,g.AH)`
  :host {
    position: relative;
    display: inline-block;
  }

  :host([data-error='true']) > input {
    color: ${({tokens:a})=>a.core.textError};
  }

  :host([data-error='false']) > input {
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  input {
    background: transparent;
    height: auto;
    box-sizing: border-box;
    color: ${({tokens:a})=>a.theme.textPrimary};
    font-feature-settings: 'case' on;
    font-size: ${({textSize:a})=>a.h4};
    caret-color: ${({tokens:a})=>a.core.backgroundAccentPrimary};
    line-height: ${({typography:a})=>a["h4-regular-mono"].lineHeight};
    letter-spacing: ${({typography:a})=>a["h4-regular-mono"].letterSpacing};
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    font-family: ${({fontFamily:a})=>a.mono};
  }

  :host([data-width-variant='auto']) input {
    width: 100%;
  }

  :host([data-width-variant='fit']) input {
    width: 1ch;
  }

  .wui-input-amount-fit-mirror {
    position: absolute;
    visibility: hidden;
    white-space: pre;
    font-size: var(--local-font-size);
    line-height: 130%;
    letter-spacing: -1.28px;
    font-family: ${({fontFamily:a})=>a.mono};
  }

  .wui-input-amount-fit-width {
    display: inline-block;
    position: relative;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: ${({tokens:a})=>a.theme.textSecondary};
  }
`;var l=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let m=class extends d.WF{constructor(){super(...arguments),this.inputElementRef=(0,f._)(),this.disabled=!1,this.value="",this.placeholder="0",this.widthVariant="auto",this.maxDecimals=void 0,this.maxIntegers=void 0,this.fontSize="h4",this.error=!1}firstUpdated(){this.resizeInput()}updated(){this.style.setProperty("--local-font-size",g.f.textSize[this.fontSize]),this.resizeInput()}render(){return(this.dataset.widthVariant=this.widthVariant,this.dataset.error=String(this.error),this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),"auto"===this.widthVariant)?this.inputTemplate():(0,d.qy)`
      <div class="wui-input-amount-fit-width">
        <span class="wui-input-amount-fit-mirror"></span>
        ${this.inputTemplate()}
      </div>
    `}inputTemplate(){return(0,d.qy)`<input
      ${(0,f.K)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    />`}dispatchInputChangeEvent(){this.inputElementRef.value&&(this.inputElementRef.value.value=i.Z.maskInput({value:this.inputElementRef.value.value,decimals:this.maxDecimals,integers:this.maxIntegers}),this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value.value,bubbles:!0,composed:!0})),this.resizeInput())}resizeInput(){if("fit"===this.widthVariant){let a=this.inputElementRef.value;if(a){let b=a.previousElementSibling;b&&(b.textContent=a.value||"0",a.style.width=`${b.offsetWidth}px`)}}}};m.styles=[h.W5,h.fD,k],l([(0,e.MZ)({type:Boolean})],m.prototype,"disabled",void 0),l([(0,e.MZ)({type:String})],m.prototype,"value",void 0),l([(0,e.MZ)({type:String})],m.prototype,"placeholder",void 0),l([(0,e.MZ)({type:String})],m.prototype,"widthVariant",void 0),l([(0,e.MZ)({type:Number})],m.prototype,"maxDecimals",void 0),l([(0,e.MZ)({type:Number})],m.prototype,"maxIntegers",void 0),l([(0,e.MZ)({type:String})],m.prototype,"fontSize",void 0),l([(0,e.MZ)({type:Boolean})],m.prototype,"error",void 0),m=l([(0,j.E)("wui-input-amount")],m)},31222:(a,b,c)=>{c.r(b),c.d(b,{W3mDepositFromExchangeSelectAssetView:()=>D,W3mDepositFromExchangeView:()=>z});var d=c(29856),e=c(44500),f=c(22734),g=c(57339),h=c(57109),i=c(87977),j=c(40190),k=c(33504),l=c(69801),m=c(74967);c(9612),c(67332),c(29272);var n=c(77292),o=c(14143),p=c(27680);let q=(0,p.AH)`
  button {
    border: none;
    border-radius: ${({borderRadius:a})=>a["20"]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:a})=>a[1]};
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      box-shadow ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, box-shadow;
  }

  /* -- Variants --------------------------------------------------------------- */
  button[data-type='accent'] {
    background-color: ${({tokens:a})=>a.core.backgroundAccentPrimary};
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  button[data-type='neutral'] {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  /* -- Sizes --------------------------------------------------------------- */
  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='sm'] > wui-image,
  button[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image,
  button[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-image,
  button[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:a})=>a[1]};
    padding-right: ${({spacing:a})=>a[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-type='accent']:not(:disabled):hover {
      background-color: ${({tokens:a})=>a.core.foregroundAccent060};
    }

    button[data-type='neutral']:not(:disabled):hover {
      background-color: ${({tokens:a})=>a.theme.foregroundTertiary};
    }
  }

  button[data-type='accent']:not(:disabled):focus-visible,
  button[data-type='accent']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent020};
  }

  button[data-type='neutral']:not(:disabled):focus-visible,
  button[data-type='neutral']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent020};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var r=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let s={sm:"sm-regular",md:"md-regular",lg:"lg-regular"},t=class extends d.WF{constructor(){super(...arguments),this.type="accent",this.size="md",this.imageSrc="",this.disabled=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.text=""}render(){return(0,d.qy)`
      <button ?disabled=${this.disabled} data-type=${this.type} data-size=${this.size}>
        ${this.imageSrc?(0,d.qy)`<wui-image src=${this.imageSrc}></wui-image>`:null}
        ${this.leftIcon?(0,d.qy)`<wui-icon name=${this.leftIcon} color="inherit" size="inherit"></wui-icon>`:null}
        <wui-text variant=${s[this.size]} color="inherit">${this.text}</wui-text>
        ${this.rightIcon?(0,d.qy)`<wui-icon name=${this.rightIcon} color="inherit" size="inherit"></wui-icon>`:null}
      </button>
    `}};t.styles=[n.W5,n.fD,q],r([(0,e.MZ)()],t.prototype,"type",void 0),r([(0,e.MZ)()],t.prototype,"size",void 0),r([(0,e.MZ)()],t.prototype,"imageSrc",void 0),r([(0,e.MZ)({type:Boolean})],t.prototype,"disabled",void 0),r([(0,e.MZ)()],t.prototype,"leftIcon",void 0),r([(0,e.MZ)()],t.prototype,"rightIcon",void 0),r([(0,e.MZ)()],t.prototype,"text",void 0),t=r([(0,o.E)("wui-chip-button")],t),c(58581),c(76968),c(96901),c(66162),c(22855),c(77041),c(21238),c(21008),c(48850);var u=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let v=class extends d.WF{constructor(){super(...arguments),this.maxDecimals=void 0,this.maxIntegers=void 0}render(){return(0,d.qy)`
      <wui-flex alignItems="center" gap="1">
        <wui-input-amount
          widthVariant="fit"
          fontSize="h2"
          .maxDecimals=${(0,f.J)(this.maxDecimals)}
          .maxIntegers=${(0,f.J)(this.maxIntegers)}
          .value=${this.amount?String(this.amount):""}
        ></wui-input-amount>
        <wui-text variant="md-regular" color="secondary">USD</wui-text>
      </wui-flex>
    `}};u([(0,e.MZ)({type:Number})],v.prototype,"amount",void 0),u([(0,e.MZ)({type:Number})],v.prototype,"maxDecimals",void 0),u([(0,e.MZ)({type:Number})],v.prototype,"maxIntegers",void 0),v=u([(0,m.EM)("w3m-fund-input")],v);let w=(0,m.AH)`
  .amount-input-container {
    border-radius: ${({borderRadius:a})=>a["6"]};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    padding: ${({spacing:a})=>a[1]};
  }

  .container {
    border-radius: 30px;
  }
`;var x=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let y=[10,50,100],z=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.network=g.W.state.activeCaipNetwork,this.exchanges=h.g.state.exchanges,this.isLoading=h.g.state.isLoading,this.amount=h.g.state.amount,this.tokenAmount=h.g.state.tokenAmount,this.priceLoading=h.g.state.priceLoading,this.isPaymentInProgress=h.g.state.isPaymentInProgress,this.currentPayment=h.g.state.currentPayment,this.paymentId=h.g.state.paymentId,this.paymentAsset=h.g.state.paymentAsset,this.unsubscribe.push(g.W.subscribeKey("activeCaipNetwork",a=>{this.network=a,this.setDefaultPaymentAsset()}),h.g.subscribe(a=>{this.exchanges=a.exchanges,this.isLoading=a.isLoading,this.amount=a.amount,this.tokenAmount=a.tokenAmount,this.priceLoading=a.priceLoading,this.paymentId=a.paymentId,this.isPaymentInProgress=a.isPaymentInProgress,this.currentPayment=a.currentPayment,this.paymentAsset=a.paymentAsset,a.isPaymentInProgress&&a.currentPayment?.exchangeId&&a.currentPayment?.sessionId&&a.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),h.g.state.isPaymentInProgress||h.g.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),h.g.setAmount(y[0]),await h.g.fetchExchanges()}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map(()=>(0,d.qy)`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`)}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map(a=>(0,d.qy)`<wui-list-item
              @click=${()=>this.onExchangeClick(a)}
              chevron
              variant="image"
              imageSrc=${a.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="primary">
                Deposit from ${a.name}
              </wui-text>
            </wui-list-item>`):(0,d.qy)`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return(0,d.qy)`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){return(0,d.qy)`
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        class="amount-input-container"
      >
        <wui-flex
          justifyContent="space-between"
          alignItems="center"
          .margin=${["0","0","6","0"]}
        >
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>
          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${this.paymentAsset?.metadata.symbol||""}
            imageSrc=${this.paymentAsset?.metadata.iconUrl||""}
            @click=${()=>i.I.push("PayWithExchangeSelectAsset")}
            size="lg"
            .chainImageSrc=${(0,f.J)(j.$.getNetworkImage(this.network))}
          >
          </wui-token-button>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          .margin=${["0","0","4","0"]}
        >
          <w3m-fund-input
            @inputChange=${this.onAmountChange.bind(this)}
            .amount=${this.amount}
            .maxDecimals=${6}
            .maxIntegers=${10}
          >
          </w3m-fund-input>
          ${this.tokenAmountTemplate()}
        </wui-flex>
        <wui-flex justifyContent="center" gap="2">
          ${y.map(a=>(0,d.qy)`<wui-chip-button
                @click=${()=>h.g.setAmount(a)}
                type="neutral"
                size="lg"
                text=${`$${a}`}
              ></wui-chip-button>`)}
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){return this.priceLoading?(0,d.qy)`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:(0,d.qy)`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${this.paymentAsset?.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(a){if(!this.amount)return void k.P.showError("Please enter an amount");await h.g.handlePayWithExchange(a.id)}handlePaymentInProgress(){let a=g.W.state.activeChain,{redirectView:b="Account"}=i.I.state.data??{};this.isPaymentInProgress&&this.currentPayment?.exchangeId&&this.currentPayment?.sessionId&&this.paymentId&&(h.g.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(b=>{"SUCCESS"===b.status?(k.P.showSuccess("Deposit completed"),h.g.reset(),a&&(g.W.fetchTokenBalance(),l.x.updateBalance(a)),i.I.replace("Transactions")):"FAILED"===b.status&&k.P.showError("Deposit failed")}),k.P.showLoading("Deposit in progress..."),i.I.replace(b))}onAmountChange({detail:a}){h.g.setAmount(a?Number(a):null)}async getPaymentAssets(){this.network&&await h.g.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){let a=await h.g.getAssetsForNetwork(this.network.caipNetworkId);a[0]&&h.g.setPaymentAsset(a[0])}}};z.styles=w,x([(0,e.wk)()],z.prototype,"network",void 0),x([(0,e.wk)()],z.prototype,"exchanges",void 0),x([(0,e.wk)()],z.prototype,"isLoading",void 0),x([(0,e.wk)()],z.prototype,"amount",void 0),x([(0,e.wk)()],z.prototype,"tokenAmount",void 0),x([(0,e.wk)()],z.prototype,"priceLoading",void 0),x([(0,e.wk)()],z.prototype,"isPaymentInProgress",void 0),x([(0,e.wk)()],z.prototype,"currentPayment",void 0),x([(0,e.wk)()],z.prototype,"paymentId",void 0),x([(0,e.wk)()],z.prototype,"paymentAsset",void 0),z=x([(0,m.EM)("w3m-deposit-from-exchange-view")],z);var A=c(13295);c(24307),c(35419),c(79550),c(73363),c(61016);let B=(0,m.AH)`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:a})=>a["3"]};
  }
`;var C=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let D=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.assets=h.g.state.assets,this.search="",this.onDebouncedSearch=A.w.debounce(a=>{this.search=a}),this.unsubscribe.push(h.g.subscribe(a=>{this.assets=a.assets}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return(0,d.qy)`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return(0,d.qy)`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){let a=this.assets.filter(a=>a.metadata.name.toLowerCase().includes(this.search.toLowerCase())),b=a.length>0;return(0,d.qy)`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${b?a.map(a=>(0,d.qy)`<wui-list-item
                    .imageSrc=${a.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,a)}
                  >
                    <wui-text variant="md-medium" color="primary">${a.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${a.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`):(0,d.qy)`<wui-flex
                .padding=${["20","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){i.I.push("OnRampProviders")}onInputChange(a){this.onDebouncedSearch(a.detail)}handleTokenClick(a){h.g.setPaymentAsset(a),i.I.goBack()}};D.styles=B,C([(0,e.wk)()],D.prototype,"assets",void 0),C([(0,e.wk)()],D.prototype,"search",void 0),D=C([(0,m.EM)("w3m-deposit-from-exchange-select-asset-view")],D)},96901:(a,b,c)=>{c(67332)}};