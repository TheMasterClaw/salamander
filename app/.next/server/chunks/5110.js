"use strict";exports.id=5110,exports.ids=[5110],exports.modules={25110:(a,b,c)=>{c.r(b),c.d(b,{AppKitModal:()=>al,W3mListWallet:()=>ar,W3mModal:()=>ak,W3mModalBase:()=>aj,W3mRouterContainer:()=>au,W3mUsageExceededView:()=>an});var d=c(29856),e=c(44500),f=c(22734),g=c(51048),h=c(93175),i=c(57339),j=c(95209),k=c(10306),l=c(87977),m=c(69801),n=c(17203);let o={isUnsupportedChainView:()=>"UnsupportedChain"===l.I.state.view||"SwitchNetwork"===l.I.state.view&&l.I.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView()||await n.U.isSIWXCloseDisabled())return void h.W.shake();("DataCapture"===l.I.state.view||"DataCaptureOtpConfirm"===l.I.state.view)&&m.x.disconnect(),h.W.close()}};var p=c(5119),q=c(33504),r=c(78066),s=c(74967),t=c(77292),u=c(14143),v=c(27680);let w=(0,v.AH)`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:a})=>a["8"]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:a})=>a.theme.foregroundPrimary};
    overflow: hidden;
  }
`,x=class extends d.WF{render(){return(0,d.qy)`<slot></slot>`}};x.styles=[t.W5,w],x=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,u.E)("wui-card")],x),c(58581);var y=c(81104);c(9612),c(29272),c(64222);let z=(0,v.AH)`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:a})=>a[2]};
    padding: ${({spacing:a})=>a[3]};
    border-radius: ${({borderRadius:a})=>a[6]};
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:a})=>a.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:a})=>a.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:a})=>a.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:a})=>a.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:a})=>a.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:a})=>a.core.backgroundError};

      wui-icon {
        color: ${({tokens:a})=>a.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:a})=>a.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:a})=>a["2"]};
    background-color: var(--local-icon-bg-value);
  }
`;var A=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let B={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"},C=class extends d.WF{constructor(){super(...arguments),this.message="",this.type="info"}render(){return(0,d.qy)`
      <wui-flex
        data-type=${(0,f.J)(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${B[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){y.h.close()}};C.styles=[t.W5,z],A([(0,e.MZ)()],C.prototype,"message",void 0),A([(0,e.MZ)()],C.prototype,"type",void 0),C=A([(0,u.E)("wui-alertbar")],C);let D=(0,s.AH)`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:a})=>a["3"]};
    left: ${({spacing:a})=>a["4"]};
    right: ${({spacing:a})=>a["4"]};
    opacity: 0;
    pointer-events: none;
  }
`;var E=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let F={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}},G=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.open=y.h.state.open,this.onOpen(!0),this.unsubscribe.push(y.h.subscribeKey("open",a=>{this.open=a,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{message:a,variant:b}=y.h.state,c=F[b];return(0,d.qy)`
      <wui-alertbar
        message=${a}
        backgroundColor=${c?.backgroundColor}
        iconColor=${c?.iconColor}
        icon=${c?.icon}
        type=${b}
      ></wui-alertbar>
    `}onOpen(a){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):a||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};G.styles=D,E([(0,e.wk)()],G.prototype,"open",void 0),G=E([(0,s.EM)("w3m-alertbar")],G);var H=c(40190),I=c(69710),J=c(26641);c(79297),c(67332);let K=(0,v.AH)`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:a})=>a[1]};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:a})=>a[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:a})=>a[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:a})=>a.theme.iconDefault};
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

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
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

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
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
`;var L=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let M={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},N={lg:"lg",md:"md",sm:"sm"},O=class extends d.WF{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return(0,d.qy)`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){let a=M[this.size];return this.text?(0,d.qy)`<wui-text color="primary" variant=${a}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return(0,d.qy)`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;let a=N[this.size];return(0,d.qy)` <wui-flex class="left-icon-container">
      <wui-icon size=${a} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};O.styles=[t.W5,t.fD,K],L([(0,e.MZ)()],O.prototype,"imageSrc",void 0),L([(0,e.MZ)()],O.prototype,"text",void 0),L([(0,e.MZ)()],O.prototype,"size",void 0),L([(0,e.MZ)()],O.prototype,"type",void 0),L([(0,e.MZ)({type:Boolean})],O.prototype,"disabled",void 0),O=L([(0,u.E)("wui-select")],O),c(96296),c(77041);var P=c(1317),Q=c(8239);let R=(0,s.AH)`
  wui-image {
    border-radius: ${({borderRadius:a})=>a.round};
  }

  .transfers-badge {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border: 1px solid ${({tokens:a})=>a.theme.foregroundSecondary};
    border-radius: ${({borderRadius:a})=>a[4]};
  }
`;var S=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let T=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.paymentAsset=Q.PayController.state.paymentAsset,this.amount=Q.PayController.state.amount,this.unsubscribe.push(Q.PayController.subscribeKey("paymentAsset",a=>{this.paymentAsset=a}),Q.PayController.subscribeKey("amount",a=>{this.amount=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=i.W.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===this.paymentAsset.network);return(0,d.qy)`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${(0,f.J)(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${a?.name??"Unknown"}
      </wui-text>
    </wui-flex>`}};T.styles=[R],S([(0,e.MZ)()],T.prototype,"paymentAsset",void 0),S([(0,e.MZ)()],T.prototype,"amount",void 0),T=S([(0,s.EM)("w3m-pay-header")],T);let U=(0,s.AH)`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:a})=>a["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:a})=>a["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:a})=>a["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:a})=>a["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var V=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let W=["SmartSessionList"],X={PayWithExchange:s.f.tokens.theme.foregroundPrimary};function Y(){let a=l.I.state.data?.connector?.name,b=l.I.state.data?.wallet?.name,c=l.I.state.data?.network?.name,d=b??a,e=j.a.getConnectors(),f=1===e.length&&e[0]?.id==="w3m-email",g=i.W.getAccountData()?.socialProvider;return{Connect:`Connect ${f?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:d??"Connect Wallet",ConnectingWalletConnect:d??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:d?`Get ${d}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:c??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:g?g.charAt(0).toUpperCase()+g.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let Z=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.heading=Y()[l.I.state.view],this.network=i.W.state.activeCaipNetwork,this.networkImage=H.$.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=l.I.state.view,this.viewDirection="",this.unsubscribe.push(I.j.subscribeNetworkImages(()=>{this.networkImage=H.$.getNetworkImage(this.network)}),l.I.subscribeKey("view",a=>{setTimeout(()=>{this.view=a,this.heading=Y()[a]},P.o.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),i.W.subscribeKey("activeCaipNetwork",a=>{this.network=a,this.networkImage=H.$.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=X[l.I.state.view]??s.f.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",a),(0,d.qy)`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){J.E.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),l.I.push("WhatIsAWallet")}async onClose(){await o.safeClose()}rightHeaderTemplate(){let a=g.H?.state?.features?.smartSessions;return"Account"===l.I.state.view&&a?(0,d.qy)`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>l.I.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return(0,d.qy)`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if("PayQuote"===this.view)return(0,d.qy)`<w3m-pay-header></w3m-pay-header>`;let a=W.includes(this.view);return(0,d.qy)`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${a?(0,d.qy)`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){let{view:a}=l.I.state,b="Connect"===a,c=g.H.state.enableEmbedded,e=g.H.state.enableNetworkSwitch;return"Account"===a&&e?(0,d.qy)`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,f.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,f.J)(this.networkImage)}
      ></wui-select>`:this.showBack&&!("ApproveTransaction"===a||"ConnectingSiwe"===a||b&&c)?(0,d.qy)`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:(0,d.qy)`<wui-icon-button
      data-hidden=${!b}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(J.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),l.I.push("Networks"))}isAllowedNetworkSwitch(){let a=i.W.getAllRequestedCaipNetworks(),b=!!a&&a.length>1,c=a?.find(({id:a})=>a===this.network?.id);return b||!c}onViewChange(){let{history:a}=l.I.state,b=P.o.VIEW_DIRECTION.Next;a.length<this.prevHistoryLength&&(b=P.o.VIEW_DIRECTION.Prev),this.prevHistoryLength=a.length,this.viewDirection=b}async onHistoryChange(){let{history:a}=l.I.state,b=this.shadowRoot?.querySelector("#dynamic");a.length>1&&!this.showBack&&b?(await b.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,b.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):a.length<=1&&this.showBack&&b&&(await b.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,b.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){l.I.goBack()}};Z.styles=U,V([(0,e.wk)()],Z.prototype,"heading",void 0),V([(0,e.wk)()],Z.prototype,"network",void 0),V([(0,e.wk)()],Z.prototype,"networkImage",void 0),V([(0,e.wk)()],Z.prototype,"showBack",void 0),V([(0,e.wk)()],Z.prototype,"prevHistoryLength",void 0),V([(0,e.wk)()],Z.prototype,"view",void 0),V([(0,e.wk)()],Z.prototype,"viewDirection",void 0),Z=V([(0,s.EM)("w3m-header")],Z),c(79763),c(1222);let $=(0,v.AH)`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:a})=>a[1]};
    padding: ${({spacing:a})=>a[2]} ${({spacing:a})=>a[3]}
      ${({spacing:a})=>a[2]} ${({spacing:a})=>a[2]};
    border-radius: ${({borderRadius:a})=>a[20]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:a})=>a.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:a})=>a.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:a})=>a[1]};
    background-color: ${({tokens:a})=>a.core.foregroundAccent010};
    border-radius: ${({borderRadius:a})=>a.round} !important;
  }
`;var _=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aa=class extends d.WF{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return(0,d.qy)`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?(0,d.qy)`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:(0,d.qy)`<wui-icon-box
      size="md"
      color=${({success:"success",error:"error",warning:"warning",info:"default"})[this.variant]}
      icon=${({success:"checkmark",error:"warning",warning:"warningCircle",info:"info"})[this.variant]}
    ></wui-icon-box>`}};aa.styles=[t.W5,$],_([(0,e.MZ)()],aa.prototype,"message",void 0),_([(0,e.MZ)()],aa.prototype,"variant",void 0),aa=_([(0,u.E)("wui-snackbar")],aa);let ab=(0,d.AH)`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ac=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ad=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=q.P.state.open,this.unsubscribe.push(q.P.subscribeKey("open",a=>{this.open=a,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(a=>a())}render(){let{message:a,variant:b}=q.P.state;return(0,d.qy)` <wui-snackbar message=${a} variant=${b}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),q.P.state.autoClose&&(this.timeout=setTimeout(()=>q.P.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ad.styles=ab,ac([(0,e.wk)()],ad.prototype,"open",void 0),ad=ac([(0,s.EM)("w3m-snackbar")],ad),c(30312),c(94235);var ae=c(71965);c(89766),c(95844);let af=(0,s.AH)`
  :host {
    z-index: ${({tokens:a})=>a.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:a})=>a.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      backdrop-filter ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      border-radius ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]},
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]},
      box-shadow ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    transition-delay: ${({durations:a})=>a.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:a})=>a.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:a})=>a["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:a})=>a["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      w3m-shake ${({durations:a})=>a.xl}
        ${({easings:a})=>a["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:a})=>a["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    }
  }
`;var ag=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ah="scroll-lock",ai={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class aj extends d.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=g.H.state.enableEmbedded,this.open=h.W.state.open,this.caipAddress=i.W.state.activeCaipAddress,this.caipNetwork=i.W.state.activeCaipNetwork,this.shake=h.W.state.shake,this.filterByNamespace=j.a.state.filterByNamespace,this.padding=s.f.spacing[1],this.mobileFullScreen=g.H.state.enableMobileFullScreen,this.initializeTheming(),k.N.prefetchAnalyticsConfig(),this.unsubscribe.push(h.W.subscribeKey("open",a=>a?this.onOpen():this.onClose()),h.W.subscribeKey("shake",a=>this.shake=a),i.W.subscribeKey("activeCaipNetwork",a=>this.onNewNetwork(a)),i.W.subscribeKey("activeCaipAddress",a=>this.onNewAddress(a)),g.H.subscribeKey("enableEmbedded",a=>this.enableEmbedded=a),j.a.subscribeKey("filterByNamespace",a=>{this.filterByNamespace===a||i.W.getAccountData(a)?.caipAddress||(k.N.fetchRecommendedWallets(),this.filterByNamespace=a)}),l.I.subscribeKey("view",()=>{this.dataset.border=ae.y.hasFooter()?"true":"false",this.padding=ai[l.I.state.view]??s.f.spacing[1]}))}firstUpdated(){if(this.dataset.border=ae.y.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded){h.W.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),this.onRemoveKeyboardListener()}render(){return(this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded)?(0,d.qy)`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?(0,d.qy)`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return(0,d.qy)` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,f.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(a){a.target===a.currentTarget&&(this.mobileFullScreen||await this.handleClose())}async handleClose(){await o.safeClose()}initializeTheming(){let{themeVariables:a,themeMode:b}=p.W.state,c=s.Zv.getColorTheme(b);(0,s.RF)(a,c)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),q.P.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let a=document.createElement("style");a.dataset.w3m=ah,a.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(a)}onScrollUnlock(){let a=document.head.querySelector(`style[data-w3m="${ah}"]`);a&&a.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let a=this.shadowRoot?.querySelector("wui-card");a?.focus(),window.addEventListener("keydown",b=>{if("Escape"===b.key)this.handleClose();else if("Tab"===b.key){let{tagName:c}=b.target;!c||c.includes("W3M-")||c.includes("WUI-")||a?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(a){let b=i.W.state.isSwitchingNamespace,c="ProfileWallets"===l.I.state.view;a||b||c||h.W.close(),await n.U.initializeIfEnabled(a),this.caipAddress=a,i.W.setIsSwitchingNamespace(!1)}onNewNetwork(a){let b=this.caipNetwork,c=b?.caipNetworkId?.toString(),d=a?.caipNetworkId?.toString(),e="UnsupportedChain"===l.I.state.view,f=h.W.state.open,g=!1;this.enableEmbedded&&"SwitchNetwork"===l.I.state.view&&(g=!0),c!==d&&r.GN.resetState(),f&&e&&(g=!0),g&&"SIWXSignMessage"!==l.I.state.view&&l.I.goBack(),this.caipNetwork=a}prefetch(){this.hasPrefetched||(k.N.prefetch(),k.N.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}aj.styles=af,ag([(0,e.MZ)({type:Boolean})],aj.prototype,"enableEmbedded",void 0),ag([(0,e.wk)()],aj.prototype,"open",void 0),ag([(0,e.wk)()],aj.prototype,"caipAddress",void 0),ag([(0,e.wk)()],aj.prototype,"caipNetwork",void 0),ag([(0,e.wk)()],aj.prototype,"shake",void 0),ag([(0,e.wk)()],aj.prototype,"filterByNamespace",void 0),ag([(0,e.wk)()],aj.prototype,"padding",void 0),ag([(0,e.wk)()],aj.prototype,"mobileFullScreen",void 0);let ak=class extends aj{};ak=ag([(0,s.EM)("w3m-modal")],ak);let al=class extends aj{};al=ag([(0,s.EM)("appkit-modal")],al),c(21238),c(24307);let am=(0,s.AH)`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({borderRadius:a})=>a[5]};
    background-color: ${({colors:a})=>a.semanticError010};
  }
`,an=class extends d.WF{constructor(){super()}render(){return(0,d.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `}onTryAgainClick(){l.I.goBack()}};an.styles=am,an=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,s.EM)("w3m-usage-exceeded-view")],an);var ao=c(87410);c(15344);let ap=(0,s.AH)`
  :host {
    width: 100%;
  }
`;var aq=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ar=class extends d.WF{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(a){super.updated(a),(a.has("name")||a.has("imageSrc")||a.has("walletRank"))&&(this.hasImpressionSent=!1),a.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(a=>{a.forEach(a=>{!a.isIntersecting||this.loading||this.hasImpressionSent||this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&J.E.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:l.I.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(ao.q.state.adapters).length>1?this.namespaces:[]}render(){return(0,d.qy)`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,f.J)(this.imageSrc)}
        name=${this.name}
        size=${(0,f.J)(this.size)}
        tagLabel=${(0,f.J)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};ar.styles=ap,aq([(0,e.MZ)({type:Array})],ar.prototype,"walletImages",void 0),aq([(0,e.MZ)()],ar.prototype,"imageSrc",void 0),aq([(0,e.MZ)()],ar.prototype,"name",void 0),aq([(0,e.MZ)()],ar.prototype,"size",void 0),aq([(0,e.MZ)()],ar.prototype,"tagLabel",void 0),aq([(0,e.MZ)()],ar.prototype,"tagVariant",void 0),aq([(0,e.MZ)()],ar.prototype,"walletIcon",void 0),aq([(0,e.MZ)()],ar.prototype,"tabIdx",void 0),aq([(0,e.MZ)({type:Boolean})],ar.prototype,"disabled",void 0),aq([(0,e.MZ)({type:Boolean})],ar.prototype,"showAllWallets",void 0),aq([(0,e.MZ)({type:Boolean})],ar.prototype,"loading",void 0),aq([(0,e.MZ)({type:String})],ar.prototype,"loadingSpinnerColor",void 0),aq([(0,e.MZ)()],ar.prototype,"rdnsId",void 0),aq([(0,e.MZ)()],ar.prototype,"displayIndex",void 0),aq([(0,e.MZ)()],ar.prototype,"walletRank",void 0),aq([(0,e.MZ)({type:Array})],ar.prototype,"namespaces",void 0),ar=aq([(0,s.EM)("w3m-list-wallet")],ar);let as=(0,s.AH)`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:a})=>a.lg};
    --local-transition: ${({easings:a})=>a["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:a})=>a.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:a})=>a.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var at=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let au=class extends d.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=g.H.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(a){if(a.has("history")){let a=this.history;""!==this.historyState&&this.historyState!==a&&this.onViewChange(a)}a.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),a.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(a=>{for(let b of a)if(b.target===this.getWrapper()){let a=b.contentRect.height,c=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");this.mobileFullScreen?(a=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-c,this.style.setProperty("--local-border-bottom-radius","0px")):(a+=c,this.style.setProperty("--local-border-bottom-radius",c?"var(--apkt-borderRadius-5)":"0px")),this.style.setProperty("--local-container-height",`${a}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${a}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),window.visualViewport?.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){let a=this.getWrapper();a&&this.resizeObserver&&this.resizeObserver.unobserve(a),window.removeEventListener("resize",this.onViewportResize),window.visualViewport?.removeEventListener("resize",this.onViewportResize)}render(){return(0,d.qy)`
      <div class="container" data-mobile-fullscreen="${(0,f.J)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,f.J)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(a){let b=a.split(",").filter(Boolean),c=this.historyState.split(",").filter(Boolean),d=c.length,e=b.length,f=b[b.length-1]||"",g=s.Zv.cssDurationToNumber(this.transitionDuration),h="";e>d?h="next":e<d?h="prev":e===d&&b[e-1]!==c[d-1]&&(h="next"),this.viewDirection=`${h}-${f}`,setTimeout(()=>{this.historyState=a,this.setView?.(f)},g),setTimeout(()=>{this.viewDirection=""},2*g)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}updateContainerHeight(){let a=this.getWrapper();if(!a)return;let b=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0"),c=0;this.mobileFullScreen?(c=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-b,this.style.setProperty("--local-border-bottom-radius","0px")):(c=a.getBoundingClientRect().height+b,this.style.setProperty("--local-border-bottom-radius",b?"var(--apkt-borderRadius-5)":"0px")),this.style.setProperty("--local-container-height",`${c}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${c}px`}getHeaderHeight(){return 60}};au.styles=[as],at([(0,e.MZ)({type:String})],au.prototype,"transitionDuration",void 0),at([(0,e.MZ)({type:String})],au.prototype,"transitionFunction",void 0),at([(0,e.MZ)({type:String})],au.prototype,"history",void 0),at([(0,e.MZ)({type:String})],au.prototype,"view",void 0),at([(0,e.MZ)({attribute:!1})],au.prototype,"setView",void 0),at([(0,e.wk)()],au.prototype,"viewDirection",void 0),at([(0,e.wk)()],au.prototype,"historyState",void 0),at([(0,e.wk)()],au.prototype,"previousHeight",void 0),at([(0,e.wk)()],au.prototype,"mobileFullScreen",void 0),au=at([(0,s.EM)("w3m-router-container")],au)}};