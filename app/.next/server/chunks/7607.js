"use strict";exports.id=7607,exports.ids=[7607],exports.modules={97607:(a,b,c)=>{c.r(b),c.d(b,{W3mApproveTransactionView:()=>n,W3mRegisterAccountNameSuccess:()=>$,W3mRegisterAccountNameView:()=>W,W3mSmartAccountSettingsView:()=>G,W3mUpgradeWalletView:()=>x});var d=c(29856),e=c(44500),f=c(37449),g=c(93175),h=c(51048),i=c(95209),j=c(5119),k=c(74967);let l=(0,d.AH)`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let n=class extends d.WF{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(g.W.subscribeKey("open",a=>{a||this.onHideIframe()}),g.W.subscribeKey("shake",a=>{a?this.iframe.style.animation="w3m-shake 500ms var(--apkt-easings-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(a=>a()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";let a=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver(b=>{let c=b?.[0]?.contentBoxSize,d=c?.[0]?.inlineSize;this.iframe.style.height="600px",a.style.height="600px",h.H.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():(d&&d<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 300px + 32px)",this.iframe.style.bottom="unset"),this.onShowIframe())}),this.bodyObserver.observe(window.document.body)}render(){return(0,d.qy)`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){let a=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=a?"w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)"}async syncTheme(){let a=i.a.getAuthConnector();if(a){let b=j.W.getSnapshot().themeMode,c=j.W.getSnapshot().themeVariables;await a.provider.syncTheme({themeVariables:c,w3mThemeVariables:(0,f.o)(c,b)})}}async updateFrameSizeForEmbeddedMode(){let a=this?.renderRoot?.querySelector("div");await new Promise(a=>{setTimeout(a,300)});let b=this.getBoundingClientRect();a.style.width="100%",this.iframe.style.left=`${b.left}px`,this.iframe.style.top=`${b.top}px`,this.iframe.style.width=`${b.width}px`,this.iframe.style.height=`${b.height}px`,this.onShowIframe()}};n.styles=l,m([(0,e.wk)()],n.prototype,"ready",void 0),n=m([(0,k.EM)("w3m-approve-transaction-view")],n);var o=c(851);c(58581),c(9612),c(67332),c(29272);var p=c(77292),q=c(14143),r=c(27680);let s=(0,r.AH)`
  a {
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
        ${({easings:a})=>a["ease-out-power-2"]},
      border ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${({tokens:a})=>a.core.backgroundSuccess};
    color: ${({tokens:a})=>a.core.textSuccess};
  }

  a[data-type='error'] {
    background-color: ${({tokens:a})=>a.core.backgroundError};
    color: ${({tokens:a})=>a.core.textError};
  }

  a[data-type='warning'] {
    background-color: ${({tokens:a})=>a.core.backgroundWarning};
    color: ${({tokens:a})=>a.core.textWarning};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
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
    a[data-type='success']:not(:disabled):hover {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:a})=>a.core.borderSuccess};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:a})=>a.core.borderError};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:a})=>a.core.borderWarning};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:a})=>a.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent020};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:a})=>a.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent020};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:a})=>a.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent020};
  }

  a:disabled {
    opacity: 0.5;
  }
`;var t=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let u={sm:"md-regular",md:"lg-regular",lg:"lg-regular"},v={success:"sealCheck",error:"warning",warning:"exclamationCircle"},w=class extends d.WF{constructor(){super(...arguments),this.type="success",this.size="md",this.imageSrc=void 0,this.disabled=!1,this.href="",this.text=void 0}render(){return(0,d.qy)`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${u[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `}imageTemplate(){return this.imageSrc?(0,d.qy)`<wui-image src=${this.imageSrc} size="inherit"></wui-image>`:(0,d.qy)`<wui-icon
      name=${v[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`}};w.styles=[p.W5,p.fD,s],t([(0,e.MZ)()],w.prototype,"type",void 0),t([(0,e.MZ)()],w.prototype,"size",void 0),t([(0,e.MZ)()],w.prototype,"imageSrc",void 0),t([(0,e.MZ)({type:Boolean})],w.prototype,"disabled",void 0),t([(0,e.MZ)()],w.prototype,"href",void 0),t([(0,e.MZ)()],w.prototype,"text",void 0),w=t([(0,q.E)("wui-semantic-chip")],w),c(77041);let x=class extends d.WF{render(){return(0,d.qy)`
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${o.oU.SECURE_SITE_DASHBOARD}
          href=${o.oU.SECURE_SITE_DASHBOARD}
          imageSrc=${o.oU.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};x=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,k.EM)("w3m-upgrade-wallet-view")],x);var y=c(85601),z=c(57339),A=c(23799),B=c(69801),C=c(83342),D=c(9457),E=c(88693),F=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let G=class extends d.WF{constructor(){super(...arguments),this.loading=!1,this.switched=!1,this.text="",this.network=z.W.state.activeCaipNetwork}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
        ${this.togglePreferredAccountTypeTemplate()} ${this.toggleSmartAccountVersionTemplate()}
      </wui-flex>
    `}toggleSmartAccountVersionTemplate(){return(0,d.qy)`
      <w3m-tooltip-trigger text="Changing the smart account version will reload the page">
        <wui-list-item
          icon=${this.isV6()?"arrowTop":"arrowBottom"}
          ?rounded=${!0}
          ?chevron=${!0}
          data-testid="account-toggle-smart-account-version"
          @click=${this.toggleSmartAccountVersion.bind(this)}
        >
          <wui-text variant="lg-regular" color="primary"
            >Force Smart Account Version ${this.isV6()?"7":"6"}</wui-text
          >
        </wui-list-item>
      </w3m-tooltip-trigger>
    `}isV6(){return"v6"===(D.o.get("dapp_smart_account_version")||"v6")}toggleSmartAccountVersion(){D.o.set("dapp_smart_account_version",this.isV6()?"v7":"v6"),"undefined"!=typeof window&&window?.location?.reload()}togglePreferredAccountTypeTemplate(){let a=this.network?.chainNamespace,b=z.W.checkIfSmartAccountEnabled(),c=i.a.getConnectorId(a);return i.a.getAuthConnector()&&c===y.o.CONNECTOR_ID.AUTH&&b?(this.switched||(this.text=(0,A.lj)(a)===E.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),(0,d.qy)`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `):null}async changePreferredAccountType(){let a=this.network?.chainNamespace,b=z.W.checkIfSmartAccountEnabled(),c=(0,A.lj)(a)!==E.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&b?E.Vl.ACCOUNT_TYPES.SMART_ACCOUNT:E.Vl.ACCOUNT_TYPES.EOA;i.a.getAuthConnector()&&(this.loading=!0,await B.x.setPreferredAccountType(c,a),this.text=c===E.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,C.R.resetSend(),this.loading=!1,this.requestUpdate())}};F([(0,e.wk)()],G.prototype,"loading",void 0),F([(0,e.wk)()],G.prototype,"switched",void 0),F([(0,e.wk)()],G.prototype,"text",void 0),F([(0,e.wk)()],G.prototype,"network",void 0),G=F([(0,k.EM)("w3m-smart-account-settings-view")],G);var H=c(84600),I=c(2234),J=c(13295),K=c(26641),L=c(33504);c(79763),c(86851);let M=(0,r.AH)`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[4]};
    padding: ${({spacing:a})=>a[4]};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
      border-radius: ${({borderRadius:a})=>a[6]};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent040};
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }
`;var N=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let O=class extends d.WF{constructor(){super(...arguments),this.name="",this.registered=!1,this.loading=!1,this.disabled=!1}render(){return(0,d.qy)`
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `}templateRightContent(){return this.loading?(0,d.qy)`<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`:this.registered?(0,d.qy)`<wui-tag variant="info" size="sm">Registered</wui-tag>`:(0,d.qy)`<wui-tag variant="success" size="sm">Available</wui-tag>`}};O.styles=[p.W5,p.fD,M],N([(0,e.MZ)()],O.prototype,"name",void 0),N([(0,e.MZ)({type:Boolean})],O.prototype,"registered",void 0),N([(0,e.MZ)({type:Boolean})],O.prototype,"loading",void 0),N([(0,e.MZ)({type:Boolean})],O.prototype,"disabled",void 0),O=N([(0,q.E)("wui-account-name-suggestion-item")],O);var P=c(22734);c(15609);let Q=(0,r.AH)`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${({spacing:a})=>a[4]};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${({spacing:a})=>a[1]};
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    border-radius: ${({borderRadius:a})=>a[1]};
  }
`;var R=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let S=class extends d.WF{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return(0,d.qy)`
      <wui-input-text
        value=${(0,P.J)(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `}};S.styles=[p.W5,Q],R([(0,e.MZ)()],S.prototype,"errorMessage",void 0),R([(0,e.MZ)({type:Boolean})],S.prototype,"disabled",void 0),R([(0,e.MZ)()],S.prototype,"value",void 0),R([(0,e.MZ)({type:Boolean})],S.prototype,"loading",void 0),R([(0,e.MZ)({attribute:!1})],S.prototype,"onKeyDown",void 0),S=R([(0,q.E)("wui-ens-input")],S),c(24307),c(76968),c(20356);var T=c(71965);let U=(0,k.AH)`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[4]};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    border-radius: ${({borderRadius:a})=>a[6]};
    padding: ${({spacing:a})=>a[4]};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent040};
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var V=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let W=class extends d.WF{constructor(){super(),this.formRef=(0,H._)(),this.usubscribe=[],this.name="",this.error="",this.loading=I.f.state.loading,this.suggestions=I.f.state.suggestions,this.profileName=z.W.getAccountData()?.profileName,this.onDebouncedNameInputChange=J.w.debounce(a=>{a.length<4?this.error="Name must be at least 4 characters long":T.y.isValidReownName(a)?(this.error="",I.f.getSuggestions(a)):this.error="The value is not a valid username"}),this.usubscribe.push(I.f.subscribe(a=>{this.suggestions=a.suggestions,this.loading=a.loading}),z.W.subscribeChainProp("accountState",a=>{this.profileName=a?.profileName,a?.profileName&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(a=>a()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return(0,d.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["1","3","4","3"]}
      >
        <form ${(0,H.K)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){let a=this.suggestions.find(a=>a.name?.split(".")?.[0]===this.name&&a.registered);if(this.loading)return(0,d.qy)`<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;let b=`${this.name}${y.o.WC_NAME_SUFFIX}`;return(0,d.qy)`
      <wui-icon-link
        ?disabled=${!!a}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${a?"default":"accent-primary"}
        @click=${()=>this.onSubmitName(b)}
      >
      </wui-icon-link>
    `}onNameInputChange(a){let b=T.y.validateReownName(a.detail||"");this.name=b,this.onDebouncedNameInputChange(b)}onKeyDown(a){1!==a.key.length||T.y.isValidReownName(a.key)||a.preventDefault()}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:(0,d.qy)`<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map(a=>(0,d.qy)`<wui-account-name-suggestion-item
            name=${a.name}
            ?registered=${a.registered}
            ?loading=${this.loading}
            ?disabled=${a.registered||this.loading}
            data-testid="account-name-suggestion"
            @click=${()=>this.onSubmitName(a.name)}
          ></wui-account-name-suggestion-item>`)}
    </wui-flex>`}isAllowedToSubmit(a){let b=a.split(".")?.[0],c=this.suggestions.find(a=>a.name?.split(".")?.[0]===b&&a.registered);return!this.loading&&!this.error&&!this.profileName&&b&&I.f.validateName(b)&&!c}async onSubmitName(a){try{if(!this.isAllowedToSubmit(a))return;K.E.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:(0,A.lj)(z.W.state.activeChain)===E.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:a}}),await I.f.registerName(a),K.E.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:(0,A.lj)(z.W.state.activeChain)===E.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:a}})}catch(b){L.P.showError(b.message),K.E.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:(0,A.lj)(z.W.state.activeChain)===E.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:a,error:J.w.parseError(b)}})}}onEnterKey(a){if("Enter"===a.key&&this.name&&this.isAllowedToSubmit(this.name)){let a=`${this.name}${y.o.WC_NAME_SUFFIX}`;this.onSubmitName(a)}}};W.styles=U,V([(0,e.MZ)()],W.prototype,"errorMessage",void 0),V([(0,e.wk)()],W.prototype,"name",void 0),V([(0,e.wk)()],W.prototype,"error",void 0),V([(0,e.wk)()],W.prototype,"loading",void 0),V([(0,e.wk)()],W.prototype,"suggestions",void 0),V([(0,e.wk)()],W.prototype,"profileName",void 0),W=V([(0,k.EM)("w3m-register-account-name-view")],W);var X=c(4820),Y=c(87977);c(21238),c(35419),c(48850);let Z=(0,d.AH)`
  .continue-button-container {
    width: 100%;
  }
`,$=class extends d.WF{render(){return(0,d.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{J.w.openHref(X.T.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return(0,d.qy)` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return(0,d.qy)`<wui-flex
      .padding=${["0","4","0","4"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){Y.I.replace("Account")}};$.styles=Z,$=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,k.EM)("w3m-register-account-name-success-view")],$)}};