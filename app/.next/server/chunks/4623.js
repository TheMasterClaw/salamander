"use strict";exports.id=4623,exports.ids=[4623],exports.modules={54623:(a,b,c)=>{c.r(b),c.d(b,{W3mBuyInProgressView:()=>J,W3mOnRampProvidersView:()=>A,W3mOnrampFiatSelectView:()=>o,W3mOnrampTokensView:()=>D,W3mOnrampWidget:()=>S,W3mWhatIsABuyView:()=>K});var d=c(29856),e=c(44500),f=c(22734),g=c(38837),h=c(69710),i=c(30147),j=c(51048),k=c(93175),l=c(74967);c(58581),c(66162),c(77041),c(30874);let m=(0,l.AH)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.md};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var n=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let o=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=g.aG.state.paymentCurrency,this.currencies=g.aG.state.paymentCurrencies,this.currencyImages=h.j.state.currencyImages,this.checked=i.o.state.isLegalCheckboxChecked,this.unsubscribe.push(g.aG.subscribe(a=>{this.selectedCurrency=a.paymentCurrency,this.currencies=a.paymentCurrencies}),h.j.subscribeKey("currencyImages",a=>this.currencyImages=a),i.o.subscribeKey("isLegalCheckboxChecked",a=>{this.checked=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=j.H.state,c=j.H.state.features?.legalCheckbox,e=!!(a||b)&&!!c&&!this.checked;return(0,d.qy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="2"
        class=${(0,f.J)(e?"disabled":void 0)}
      >
        ${this.currenciesTemplate(e)}
      </wui-flex>
    `}currenciesTemplate(a=!1){return this.currencies.map(b=>(0,d.qy)`
        <wui-list-item
          imageSrc=${(0,f.J)(this.currencyImages?.[b.id])}
          @click=${()=>this.selectCurrency(b)}
          variant="image"
          tabIdx=${(0,f.J)(a?-1:void 0)}
        >
          <wui-text variant="md-medium" color="primary">${b.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(a){a&&(g.aG.setPaymentCurrency(a),k.W.close())}};o.styles=m,n([(0,e.wk)()],o.prototype,"selectedCurrency",void 0),n([(0,e.wk)()],o.prototype,"currencies",void 0),n([(0,e.wk)()],o.prototype,"currencyImages",void 0),n([(0,e.wk)()],o.prototype,"checked",void 0),o=n([(0,l.EM)("w3m-onramp-fiat-select-view")],o);var p=c(57339),q=c(87977),r=c(13295),s=c(26641),t=c(23799),u=c(88693),v=c(40190);c(24307),c(96901),c(20356),c(47734);let w=(0,l.AH)`
  button {
    padding: ${({spacing:a})=>a["3"]};
    border-radius: ${({borderRadius:a})=>a["4"]};
    border: none;
    outline: none;
    background-color: ${({tokens:a})=>a.core.glass010};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${({spacing:a})=>a["3"]};
    transition: background-color ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.md};
    will-change: background-color;
    cursor: pointer;
  }

  button:hover {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .provider-image {
    width: ${({spacing:a})=>a["10"]};
    min-width: ${({spacing:a})=>a["10"]};
    height: ${({spacing:a})=>a["10"]};
    border-radius: calc(
      ${({borderRadius:a})=>a["4"]} - calc(${({spacing:a})=>a["3"]} / 2)
    );
    position: relative;
    overflow: hidden;
  }

  .network-icon {
    width: ${({spacing:a})=>a["3"]};
    height: ${({spacing:a})=>a["3"]};
    border-radius: calc(${({spacing:a})=>a["3"]} / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px ${({tokens:a})=>a.theme.foregroundPrimary},
      0 0 0 3px ${({tokens:a})=>a.theme.backgroundPrimary};
    transition: box-shadow ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.md};
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px ${({tokens:a})=>a.core.glass010},
      0 0 0 3px ${({tokens:a})=>a.theme.backgroundPrimary};
  }
`;var x=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let y=class extends d.WF{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return(0,d.qy)`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${(0,f.J)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="01">
          <wui-text variant="md-regular" color="primary">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="4">
            <wui-text variant="sm-medium" color="primary">
              <wui-text variant="sm-regular" color="secondary">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="2">
              <wui-icon name="bank" size="sm" color="default"></wui-icon>
              <wui-icon name="card" size="sm" color="default"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?(0,d.qy)`<wui-loading-spinner color="secondary" size="md"></wui-loading-spinner>`:(0,d.qy)`<wui-icon name="chevronRight" color="default" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let a=p.W.getAllRequestedCaipNetworks(),b=a?.filter(a=>a?.assets?.imageId)?.slice(0,5);return(0,d.qy)`
      <wui-flex class="networks">
        ${b?.map(a=>(0,d.qy)`
            <wui-flex class="network-icon">
              <wui-image src=${(0,f.J)(v.$.getNetworkImage(a))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};y.styles=[w],x([(0,e.MZ)({type:Boolean})],y.prototype,"disabled",void 0),x([(0,e.MZ)()],y.prototype,"color",void 0),x([(0,e.MZ)()],y.prototype,"name",void 0),x([(0,e.MZ)()],y.prototype,"label",void 0),x([(0,e.MZ)()],y.prototype,"feeRange",void 0),x([(0,e.MZ)({type:Boolean})],y.prototype,"loading",void 0),x([(0,e.MZ)()],y.prototype,"onClick",void 0),y=x([(0,l.EM)("w3m-onramp-provider-item")],y),c(4776);var z=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let A=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.providers=g.aG.state.providers,this.unsubscribe.push(g.aG.subscribeKey("providers",a=>{this.providers=a}))}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
    `}onRampProvidersTemplate(){return this.providers.filter(a=>a.supportedChains.includes(p.W.state.activeChain??"eip155")).map(a=>(0,d.qy)`
          <w3m-onramp-provider-item
            label=${a.label}
            name=${a.name}
            feeRange=${a.feeRange}
            @click=${()=>{this.onClickProvider(a)}}
            ?disabled=${!a.url}
            data-testid=${`onramp-provider-${a.name}`}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(a){g.aG.setSelectedProvider(a),q.I.push("BuyInProgress"),r.w.openHref(g.aG.state.selectedProvider?.url||a.url,"popupWindow","width=600,height=800,scrollbars=yes"),s.E.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:a.name,isSmartAccount:(0,t.lj)(p.W.state.activeChain)===u.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};z([(0,e.wk)()],A.prototype,"providers",void 0),A=z([(0,l.EM)("w3m-onramp-providers-view")],A),c(43367);let B=(0,l.AH)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({easings:a})=>a["ease-out-power-1"]}
      ${({durations:a})=>a.md};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var C=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let D=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=g.aG.state.purchaseCurrencies,this.tokens=g.aG.state.purchaseCurrencies,this.tokenImages=h.j.state.tokenImages,this.checked=i.o.state.isLegalCheckboxChecked,this.unsubscribe.push(g.aG.subscribe(a=>{this.selectedCurrency=a.purchaseCurrencies,this.tokens=a.purchaseCurrencies}),h.j.subscribeKey("tokenImages",a=>this.tokenImages=a),i.o.subscribeKey("isLegalCheckboxChecked",a=>{this.checked=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=j.H.state,c=j.H.state.features?.legalCheckbox,e=!!(a||b)&&!!c&&!this.checked;return(0,d.qy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="2"
        class=${(0,f.J)(e?"disabled":void 0)}
      >
        ${this.currenciesTemplate(e)}
      </wui-flex>
    `}currenciesTemplate(a=!1){return this.tokens.map(b=>(0,d.qy)`
        <wui-list-item
          imageSrc=${(0,f.J)(this.tokenImages?.[b.symbol])}
          @click=${()=>this.selectToken(b)}
          variant="image"
          tabIdx=${(0,f.J)(a?-1:void 0)}
        >
          <wui-flex gap="1" alignItems="center">
            <wui-text variant="md-medium" color="primary">${b.name}</wui-text>
            <wui-text variant="sm-regular" color="secondary">${b.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(a){a&&(g.aG.setPurchaseCurrency(a),k.W.close())}};D.styles=B,C([(0,e.wk)()],D.prototype,"selectedCurrency",void 0),C([(0,e.wk)()],D.prototype,"tokens",void 0),C([(0,e.wk)()],D.prototype,"tokenImages",void 0),C([(0,e.wk)()],D.prototype,"checked",void 0),D=C([(0,l.EM)("w3m-onramp-token-select-view")],D);var E=c(69801),F=c(5119),G=c(33504);c(21238),c(35419),c(48850),c(44133);let H=(0,l.AH)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:a})=>a["1"]} * 9 - ${({borderRadius:a})=>a["3"]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:a})=>a["1"]} * -1);
    bottom: calc(${({spacing:a})=>a["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      transform ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:a})=>a["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:a})=>a["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:a})=>a["01"]} ${({spacing:a})=>a["2"]};
  }
`;var I=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let J=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=g.aG.state.selectedProvider,this.uri=E.x.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(g.aG.subscribeKey("selectedProvider",a=>{this.selectedOnRampProvider=a}))}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let a="Continue in external window";this.error?a="Buy failed":this.selectedOnRampProvider&&(a=`Buy in ${this.selectedOnRampProvider?.label}`);let b=this.error?"Buy can be declined from your side or due to and error on the provider app":`We’ll notify you once your Buy is processed`;return(0,d.qy)`
      <wui-flex
        data-error=${(0,f.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,f.J)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["4","0","0","0"]}
        >
          <wui-text variant="md-medium" color=${this.error?"error":"primary"}>
            ${a}
          </wui-text>
          <wui-text align="center" variant="sm-medium" color="secondary">${b}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="secondary">
          <wui-icon size="sm" color="default" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,r.w.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?(0,d.qy)`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let a=F.W.state.themeVariables["--w3m-border-radius-master"],b=a?parseInt(a.replace("px",""),10):4;return(0,d.qy)`<wui-loading-thumbnail radius=${9*b}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){G.P.showError("No link found"),q.I.goBack();return}try{r.w.copyToClopboard(this.selectedOnRampProvider.url),G.P.showSuccess("Link copied")}catch{G.P.showError("Failed to copy")}}};J.styles=H,I([(0,e.wk)()],J.prototype,"intervalId",void 0),I([(0,e.wk)()],J.prototype,"selectedOnRampProvider",void 0),I([(0,e.wk)()],J.prototype,"uri",void 0),I([(0,e.wk)()],J.prototype,"ready",void 0),I([(0,e.wk)()],J.prototype,"showRetry",void 0),I([(0,e.wk)()],J.prototype,"buffering",void 0),I([(0,e.wk)()],J.prototype,"error",void 0),I([(0,e.MZ)({type:Boolean})],J.prototype,"isMobile",void 0),I([(0,e.MZ)()],J.prototype,"onRetry",void 0),J=I([(0,l.EM)("w3m-buy-in-progress-view")],J);let K=class extends d.WF{render(){return(0,d.qy)`
      <wui-flex
        flexDirection="column"
        .padding=${["6","10","5","10"]}
        alignItems="center"
        gap="5"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="2" alignItems="center">
          <wui-text align="center" variant="md-medium" color="primary">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${q.I.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};K=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,l.EM)("w3m-what-is-a-buy-view")],K),c(79550);let L=(0,l.AH)`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:a})=>a["2"]};
    height: 40px;
    padding: ${({spacing:a})=>a["2"]} ${({spacing:a})=>a["2"]}
      ${({spacing:a})=>a["2"]} ${({spacing:a})=>a["2"]};
    min-width: 95px;
    border-radius: ${({borderRadius:a})=>a.round};
    border: 1px solid ${({tokens:a})=>a.theme.foregroundPrimary};
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var M=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let N=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=h.j.state.currencyImages,this.tokenImages=h.j.state.tokenImages,this.unsubscribe.push(g.aG.subscribeKey("purchaseCurrency",a=>{a&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(a))}),g.aG.subscribeKey("paymentCurrency",a=>{a&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(a))}),g.aG.subscribe(a=>{"Fiat"===this.type?this.currencies=a.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=a.paymentCurrencies.map(this.formatPaymentCurrency)}),h.j.subscribe(a=>{this.currencyImages={...a.currencyImages},this.tokenImages={...a.tokenImages}}))}firstUpdated(){g.aG.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=this.selectedCurrency?.symbol||"",b=this.currencyImages[a]||this.tokenImages[a];return(0,d.qy)`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?(0,d.qy)` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="1"
            @click=${()=>k.W.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,f.J)(b)}></wui-image>
            <wui-text color="primary">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:(0,d.qy)`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(a){return{name:a.id,symbol:a.id}}formatPurchaseCurrency(a){return{name:a.name,symbol:a.symbol}}};N.styles=L,M([(0,e.MZ)({type:String})],N.prototype,"type",void 0),M([(0,e.MZ)({type:Number})],N.prototype,"value",void 0),M([(0,e.wk)()],N.prototype,"currencies",void 0),M([(0,e.wk)()],N.prototype,"selectedCurrency",void 0),M([(0,e.wk)()],N.prototype,"currencyImages",void 0),M([(0,e.wk)()],N.prototype,"tokenImages",void 0),N=M([(0,l.EM)("w3m-onramp-input")],N);let O=(0,l.AH)`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: ${({borderRadius:a})=>a["8"]};
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var P=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let Q={USD:"$",EUR:"€",GBP:"\xa3"},R=[100,250,500,1e3],S=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=p.W.state.activeCaipAddress,this.loading=k.W.state.loading,this.paymentCurrency=g.aG.state.paymentCurrency,this.paymentAmount=g.aG.state.paymentAmount,this.purchaseAmount=g.aG.state.purchaseAmount,this.quoteLoading=g.aG.state.quotesLoading,this.unsubscribe.push(p.W.subscribeKey("activeCaipAddress",a=>this.caipAddress=a),k.W.subscribeKey("loading",a=>{this.loading=a}),g.aG.subscribe(a=>{this.paymentCurrency=a.paymentCurrency,this.paymentAmount=a.paymentAmount,this.purchaseAmount=a.purchaseAmount,this.quoteLoading=a.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="2">
            ${R.map(a=>(0,d.qy)`<wui-button
                  variant=${this.paymentAmount===a?"accent-secondary":"neutral-secondary"}
                  size="md"
                  textVariant="md-medium"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(a)}
                  >${`${Q[this.paymentCurrency?.id||"USD"]} ${a}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?(0,d.qy)`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="accent-primary"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:(0,d.qy)`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||k.W.open({view:"OnRampProviders"})}openModal(){k.W.open({view:"Connect"})}async onPaymentAmountChange(a){g.aG.setPaymentAmount(Number(a.detail)),await g.aG.getQuote()}async selectPresetAmount(a){g.aG.setPaymentAmount(a),await g.aG.getQuote()}};S.styles=O,P([(0,e.MZ)({type:Boolean})],S.prototype,"disabled",void 0),P([(0,e.wk)()],S.prototype,"caipAddress",void 0),P([(0,e.wk)()],S.prototype,"loading",void 0),P([(0,e.wk)()],S.prototype,"paymentCurrency",void 0),P([(0,e.wk)()],S.prototype,"paymentAmount",void 0),P([(0,e.wk)()],S.prototype,"purchaseAmount",void 0),P([(0,e.wk)()],S.prototype,"quoteLoading",void 0),S=P([(0,l.EM)("w3m-onramp-widget")],S)},96901:(a,b,c)=>{c(67332)}};