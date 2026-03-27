"use strict";exports.id=3744,exports.ids=[3744],exports.modules={13744:(a,b,c)=>{c.r(b),c.d(b,{W3mDataCaptureOtpConfirmView:()=>u,W3mDataCaptureView:()=>y,W3mEmailSuffixesWidget:()=>j,W3mRecentEmailsWidget:()=>m});var d=c(29856),e=c(44500),f=c(74967);let g=(0,d.AH)`
  .email-sufixes {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-3xs);
    overflow-x: auto;
    max-width: 100%;
    margin-top: var(--wui-spacing-s);
    margin-bottom: calc(-1 * var(--wui-spacing-m));
    padding-bottom: var(--wui-spacing-m);
    margin-left: calc(-1 * var(--wui-spacing-m));
    margin-right: calc(-1 * var(--wui-spacing-m));
    padding-left: var(--wui-spacing-m);
    padding-right: var(--wui-spacing-m);

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;var h=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let i=["@gmail.com","@outlook.com","@yahoo.com","@hotmail.com","@aol.com","@icloud.com","@zoho.com"],j=class extends d.WF{constructor(){super(...arguments),this.email=""}render(){let a=i.filter(this.filter.bind(this)).map(this.item.bind(this));return 0===a.length?null:(0,d.qy)`<div class="email-sufixes">${a}</div>`}filter(a){if(!this.email)return!1;let b=this.email.split("@");if(b.length<2)return!0;let c=b.pop();return a.includes(c)&&a!==`@${c}`}item(a){let b=()=>{let b=this.email.split("@");b.length>1&&b.pop();let c=b[0]+a;this.dispatchEvent(new CustomEvent("change",{detail:c,bubbles:!0,composed:!0}))};return(0,d.qy)`<wui-button variant="neutral" size="sm" @click=${b}
      >${a}</wui-button
    >`}};j.styles=[g],h([(0,e.MZ)()],j.prototype,"email",void 0),j=h([(0,f.EM)("w3m-email-suffixes-widget")],j);let k=(0,d.AH)`
  .recent-emails {
    display: flex;
    flex-direction: column;
    padding: var(--wui-spacing-s) 0;
    border-top: 1px solid var(--wui-color-gray-glass-005);
    border-bottom: 1px solid var(--wui-color-gray-glass-005);
  }

  .recent-emails-heading {
    margin-bottom: var(--wui-spacing-s);
  }

  .recent-emails-list-item {
    --wui-color-gray-glass-002: transparent;
  }
`;var l=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let m=class extends d.WF{constructor(){super(...arguments),this.emails=[]}render(){return 0===this.emails.length?null:(0,d.qy)`<div class="recent-emails">
      <wui-text variant="micro-600" color="fg-200" class="recent-emails-heading"
        >Recently used emails</wui-text
      >
      ${this.emails.map(this.item.bind(this))}
    </div>`}item(a){let b=()=>{this.dispatchEvent(new CustomEvent("select",{detail:a,bubbles:!0,composed:!0}))};return(0,d.qy)`<wui-list-item
      @click=${b}
      ?chevron=${!0}
      icon="mail"
      iconVariant="overlay"
      class="recent-emails-list-item"
    >
      <wui-text variant="paragraph-500" color="fg-100">${a}</wui-text>
    </wui-list-item>`}};m.styles=[k],l([(0,e.MZ)()],m.prototype,"emails",void 0),m=l([(0,f.EM)("w3m-recent-emails-widget")],m);var n=c(51048),o=c(87977),p=c(57339),q=c(33504),r=c(35641),s=c(23967),t=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let u=class extends s.H{constructor(){super(...arguments),this.siwx=n.H.state.siwx,this.onOtpSubmit=async a=>{await this.siwx.confirmEmailOtp({code:a}),o.I.replace("SIWXSignMessage")},this.onOtpResend=async a=>{let b=p.W.getAccountData();if(!b?.caipAddress)throw Error("No account data found");await this.siwx.requestEmailOtp({email:a,account:b.caipAddress})}}connectedCallback(){this.siwx&&this.siwx instanceof r.u||q.P.showError("ReownAuthentication is not initialized."),super.connectedCallback()}shouldSubmitOnOtpChange(){return this.otp.length===s.H.OTP_LENGTH}};t([(0,e.wk)()],u.prototype,"siwx",void 0),u=t([(0,f.EM)("w3m-data-capture-otp-confirm-view")],u);var v=c(85699);let w=(0,d.AH)`
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);

    transition-property: margin, height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    margin-top: -100px;

    &[data-state='loading'] {
      margin-top: 0px;
    }

    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 252px;
      width: 360px;
      background: radial-gradient(
        96.11% 53.95% at 50% 51.28%,
        transparent 0%,
        color-mix(in srgb, var(--wui-color-bg-100) 5%, transparent) 49%,
        color-mix(in srgb, var(--wui-color-bg-100) 65%, transparent) 99.43%
      );
    }
  }

  .hero-main-icon {
    width: 176px;
    transition-property: background-color;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      width: 56px;
    }
  }

  .hero-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
    flex-wrap: nowrap;
    min-width: fit-content;

    &:nth-child(1) {
      transform: translateX(-30px);
    }

    &:nth-child(2) {
      transform: translateX(30px);
    }

    &:nth-child(4) {
      transform: translateX(40px);
    }

    transition-property: height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    height: 68px;

    &[data-state='loading'] {
      height: 0px;
    }
  }

  .hero-row-icon {
    opacity: 0.1;
    transition-property: opacity;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      opacity: 0;
    }
  }
`;var x=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let y=class extends d.WF{constructor(){super(...arguments),this.email=o.I.state.data?.email??p.W.getAccountData()?.user?.email??"",this.address=p.W.getAccountData()?.address??"",this.loading=!1,this.appName=n.H.state.metadata?.name??"AppKit",this.siwx=n.H.state.siwx,this.isRequired=Array.isArray(n.H.state.remoteFeatures?.emailCapture)&&n.H.state.remoteFeatures?.emailCapture.includes("required"),this.recentEmails=this.getRecentEmails()}connectedCallback(){this.siwx&&this.siwx instanceof r.u||q.P.showError("ReownAuthentication is not initialized. Please contact support."),super.connectedCallback()}firstUpdated(){this.loading=!1,this.recentEmails=this.getRecentEmails(),this.email&&this.onSubmit()}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" .padding=${["3xs","m","m","m"]} gap="l">
        ${this.hero()} ${this.paragraph()} ${this.emailInput()} ${this.recentEmailsWidget()}
        ${this.footerActions()}
      </wui-flex>
    `}hero(){return(0,d.qy)`
      <div class="hero" data-state=${this.loading?"loading":"default"}>
        ${this.heroRow(["id","mail","wallet","x","solana","qrCode"])}
        ${this.heroRow(["mail","farcaster","wallet","discord","mobile","qrCode"])}
        <div class="hero-row">
          ${this.heroIcon("github")} ${this.heroIcon("bank")}
          <wui-icon-box
            size="xl"
            iconSize="xxl"
            iconColor=${this.loading?"fg-100":"accent-100"}
            backgroundColor=${this.loading?"fg-100":"accent-100"}
            icon=${this.loading?"id":"user"}
            isOpaque
            class="hero-main-icon"
            data-state=${this.loading?"loading":"default"}
          >
          </wui-icon-box>
          ${this.heroIcon("id")} ${this.heroIcon("card")}
        </div>
        ${this.heroRow(["google","id","github","verify","apple","mobile"])}
      </div>
    `}heroRow(a){return(0,d.qy)`
      <div class="hero-row" data-state=${this.loading?"loading":"default"}>
        ${a.map(this.heroIcon.bind(this))}
      </div>
    `}heroIcon(a){return(0,d.qy)`
      <wui-icon-box
        size="xl"
        iconSize="xxl"
        iconColor="fg-100"
        backgroundColor="fg-100"
        icon=${a}
        data-state=${this.loading?"loading":"default"}
        isOpaque
        class="hero-row-icon"
      >
      </wui-icon-box>
    `}paragraph(){return this.loading?(0,d.qy)`
        <wui-text variant="paragraph-400" color="fg-200" align="center"
          >We are verifying your account with email
          <wui-text variant="paragraph-600" color="accent-100">${this.email}</wui-text> and address
          <wui-text variant="paragraph-600" color="fg-100">
            ${f.Zv.getTruncateString({string:this.address,charsEnd:4,charsStart:4,truncate:"middle"})} </wui-text
          >, please wait a moment.</wui-text
        >
      `:this.isRequired?(0,d.qy)`
        <wui-text variant="paragraph-600" color="fg-100" align="center">
          ${this.appName} requires your email for authentication.
        </wui-text>
      `:(0,d.qy)`
      <wui-flex flexDirection="column" gap="xs" alignItems="center">
        <wui-text variant="paragraph-600" color="fg-100" align="center" size>
          ${this.appName} would like to collect your email.
        </wui-text>

        <wui-text variant="small-400" color="fg-200" align="center">
          Don't worry, it's optional&mdash;you can skip this step.
        </wui-text>
      </wui-flex>
    `}emailInput(){if(this.loading)return null;let a=a=>{"Enter"===a.key&&this.onSubmit()},b=a=>{this.email=a.detail};return(0,d.qy)`
      <wui-flex flexDirection="column">
        <wui-email-input
          .value=${this.email}
          .disabled=${this.loading}
          @inputChange=${b}
          @keydown=${a}
        ></wui-email-input>

        <w3m-email-suffixes-widget
          .email=${this.email}
          @change=${b}
        ></w3m-email-suffixes-widget>
      </wui-flex>
    `}recentEmailsWidget(){if(0===this.recentEmails.length||this.loading)return null;let a=a=>{this.email=a.detail,this.onSubmit()};return(0,d.qy)`
      <w3m-recent-emails-widget
        .emails=${this.recentEmails}
        @select=${a}
      ></w3m-recent-emails-widget>
    `}footerActions(){return(0,d.qy)`
      <wui-flex flexDirection="row" fullWidth gap="s">
        ${this.isRequired?null:(0,d.qy)`<wui-button
              size="lg"
              variant="neutral"
              fullWidth
              .disabled=${this.loading}
              @click=${this.onSkip.bind(this)}
              >Skip this step</wui-button
            >`}

        <wui-button
          size="lg"
          variant="main"
          type="submit"
          fullWidth
          .disabled=${!this.email||!this.isValidEmail(this.email)}
          .loading=${this.loading}
          @click=${this.onSubmit.bind(this)}
        >
          Continue
        </wui-button>
      </wui-flex>
    `}async onSubmit(){if(!(this.siwx instanceof r.u))return void q.P.showError("ReownAuthentication is not initialized. Please contact support.");let a=p.W.getActiveCaipAddress();if(!a)throw Error("Account is not connected.");if(!this.isValidEmail(this.email))return void q.P.showError("Please provide a valid email.");try{this.loading=!0;let b=await this.siwx.requestEmailOtp({email:this.email,account:a});this.pushRecentEmail(this.email),null===b.uuid?o.I.replace("SIWXSignMessage"):o.I.replace("DataCaptureOtpConfirm",{email:this.email})}catch(a){q.P.showError("Failed to send email OTP"),this.loading=!1}}onSkip(){o.I.replace("SIWXSignMessage")}getRecentEmails(){let a=v.Ud.getItem(v.Ws.RECENT_EMAILS);return(a?a.split(","):[]).filter(this.isValidEmail.bind(this)).slice(0,3)}pushRecentEmail(a){let b=Array.from(new Set([a,...this.getRecentEmails()])).slice(0,3);v.Ud.setItem(v.Ws.RECENT_EMAILS,b.join(","))}isValidEmail(a){return/^\S+@\S+\.\S+$/u.test(a)}};y.styles=[w],x([(0,e.wk)()],y.prototype,"email",void 0),x([(0,e.wk)()],y.prototype,"address",void 0),x([(0,e.wk)()],y.prototype,"loading",void 0),x([(0,e.wk)()],y.prototype,"appName",void 0),x([(0,e.wk)()],y.prototype,"siwx",void 0),x([(0,e.wk)()],y.prototype,"isRequired",void 0),x([(0,e.wk)()],y.prototype,"recentEmails",void 0),y=x([(0,f.EM)("w3m-data-capture-view")],y)},23967:(a,b,c)=>{c.d(b,{H:()=>y});var d,e=c(29856),f=c(44500),g=c(87977),h=c(95209),i=c(13295),j=c(33504),k=c(74967);c(58581),c(48850),c(20356),c(64222);var l=c(77292),m=c(16627),n=c(14143),o=c(27680);let p=(0,o.AH)`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 48px;
    height: 48px;
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[4]};
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
    font-family: ${({fontFamily:a})=>a.regular};
    font-size: ${({textSize:a})=>a.large};
    line-height: 18px;
    letter-spacing: -0.16px;
    text-align: center;
    color: ${({tokens:a})=>a.theme.textPrimary};
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      border-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      box-shadow ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: ${({spacing:a})=>a[4]};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input:focus-visible:enabled {
    background-color: transparent;
    border: 1px solid ${({tokens:a})=>a.theme.borderSecondary};
    box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }
`;var q=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let r=class extends e.WF{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return(0,e.qy)`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};r.styles=[l.W5,l.fD,p],q([(0,f.MZ)({type:Boolean})],r.prototype,"disabled",void 0),q([(0,f.MZ)({type:String})],r.prototype,"value",void 0),r=q([(0,n.E)("wui-input-numeric")],r);let s=(0,e.AH)`
  :host {
    position: relative;
    display: block;
  }
`;var t=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let u=class extends e.WF{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=a=>this.values.slice(0,a).every(a=>""!==a),this.handleKeyDown=(a,b)=>{let c=a.target,d=this.getInputElement(c);if(!d)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(a.key)&&a.preventDefault();let e=d.selectionStart;switch(a.key){case"ArrowLeft":e&&d.setSelectionRange(e+1,e+1),this.focusInputField("prev",b);break;case"ArrowRight":case"Shift":this.focusInputField("next",b);break;case"Delete":case"Backspace":""===d.value?this.focusInputField("prev",b):this.updateInput(d,b,"")}},this.focusInputField=(a,b)=>{if("next"===a){let a=b+1;if(!this.shouldInputBeEnabled(a))return;let c=this.numerics[a<this.length?a:b],d=c?this.getInputElement(c):void 0;d&&(d.disabled=!1,d.focus())}if("prev"===a){let a=b-1,c=this.numerics[a>-1?a:b],d=c?this.getInputElement(c):void 0;d&&d.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let a=this.shadowRoot?.querySelectorAll("wui-input-numeric");a&&(this.numerics=Array.from(a)),this.numerics[0]?.focus()}render(){return(0,e.qy)`
      <wui-flex gap="1" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((a,b)=>(0,e.qy)`
            <wui-input-numeric
              @input=${a=>this.handleInput(a,b)}
              @click=${a=>this.selectInput(a)}
              @keydown=${a=>this.handleKeyDown(a,b)}
              .disabled=${!this.shouldInputBeEnabled(b)}
              .value=${this.values[b]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(a,b,c){let d=this.numerics[b],e=a||(d?this.getInputElement(d):void 0);e&&(e.value=c,this.values=this.values.map((a,d)=>d===b?c:a))}selectInput(a){let b=a.target;if(b){let a=this.getInputElement(b);a?.select()}}handleInput(a,b){let c=a.target,d=this.getInputElement(c);if(d){let c=d.value;"insertFromPaste"===a.inputType?this.handlePaste(d,c,b):m.Z.isNumber(c)&&a.data?(this.updateInput(d,b,a.data),this.focusInputField("next",b)):this.updateInput(d,b,"")}this.dispatchInputChangeEvent()}handlePaste(a,b,c){let d=b[0];if(d&&m.Z.isNumber(d)){this.updateInput(a,c,d);let e=b.substring(1);if(c+1<this.length&&e.length){let a=this.numerics[c+1],b=a?this.getInputElement(a):void 0;b&&this.handlePaste(b,e,c+1)}else this.focusInputField("next",c)}else this.updateInput(a,c,"")}getInputElement(a){return a.shadowRoot?.querySelector("input")?a.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let a=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:a,bubbles:!0,composed:!0}))}};u.styles=[l.W5,s],t([(0,f.MZ)({type:Number})],u.prototype,"length",void 0),t([(0,f.MZ)({type:String})],u.prototype,"otp",void 0),t([(0,f.wk)()],u.prototype,"values",void 0),u=t([(0,n.E)("wui-otp")],u),c(77041);var v=c(54678);let w=(0,e.AH)`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var x=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let y=d=class extends e.WF{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=v.Q.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=g.I.state.data?.email,this.authConnector=h.a.getAuthConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let a=!!this.timeoutTimeLeft,b=this.getFooterLabels(a);return(0,e.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","0","4","0"]}
        gap="4"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","5","0","5"]}
        >
          <wui-text variant="md-regular" color="primary" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="md-medium" color="primary" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="sm-regular" color="secondary">The code expires in 20 minutes</wui-text>

        ${this.loading?(0,e.qy)`<wui-loading-spinner size="xl" color="accent-primary"></wui-loading-spinner>`:(0,e.qy)` <wui-flex flexDirection="column" alignItems="center" gap="2">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?(0,e.qy)`
                    <wui-text variant="sm-regular" align="center" color="error">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="2">
          <wui-text variant="sm-regular" color="secondary">${b.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${a}>
            ${b.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=v.Q.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=v.Q.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(a){try{!this.loading&&(this.otp=a.detail,this.shouldSubmitOnOtpChange()&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(a){this.error=i.w.parseError(a),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!h.a.getAuthConnector()||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),j.P.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(a){j.P.showError(a)}finally{this.loading=!1}}getFooterLabels(a){return this.onStartOver?{title:"Something wrong?",action:`Try again ${a?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${a?`in ${this.timeoutTimeLeft}s`:"Code"}`}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===d.OTP_LENGTH}};y.OTP_LENGTH=6,y.styles=w,x([(0,f.wk)()],y.prototype,"loading",void 0),x([(0,f.wk)()],y.prototype,"timeoutTimeLeft",void 0),x([(0,f.wk)()],y.prototype,"error",void 0),y=d=x([(0,k.EM)("w3m-email-otp-widget")],y)},35641:(a,b,c)=>{c.d(b,{u:()=>l});var d=c(85699),e=c(85601),f=c(10306),g=c(88912),h=c(57339),i=c(23799),j=c(79110);class k{constructor(a){this.getNonce=a.getNonce}async createMessage(a){let b={accountAddress:a.accountAddress,chainId:a.chainId,version:"1",domain:"undefined"==typeof document?"Unknown Domain":document.location.host,uri:"undefined"==typeof document?"Unknown URI":document.location.href,resources:this.resources,nonce:await this.getNonce(a),issuedAt:this.stringifyDate(new Date),statement:void 0,expirationTime:void 0,notBefore:void 0};return Object.assign(b,{toString:()=>this.stringify(b)})}stringify(a){let b=this.getNetworkName(a.chainId);return[`${a.domain} wants you to sign in with your ${b} account:`,a.accountAddress,a.statement?`
${a.statement}
`:"",`URI: ${a.uri}`,`Version: ${a.version}`,`Chain ID: ${a.chainId}`,`Nonce: ${a.nonce}`,a.issuedAt&&`Issued At: ${a.issuedAt}`,a.expirationTime&&`Expiration Time: ${a.expirationTime}`,a.notBefore&&`Not Before: ${a.notBefore}`,a.requestId&&`Request ID: ${a.requestId}`,a.resources?.length&&a.resources.reduce((a,b)=>`${a}
- ${b}`,"Resources:")].filter(a=>"string"==typeof a).join("\n").trim()}getNetworkName(a){let b=h.W.getAllRequestedCaipNetworks();return j.L.getNetworkNameByCaipNetworkId(b,a)}stringifyDate(a){return a.toISOString()}}class l{constructor(a={}){this.otpUuid=null,this.listeners={sessionChanged:[]},this.localAuthStorageKey=a.localAuthStorageKey||d.Ws.SIWX_AUTH_TOKEN,this.localNonceStorageKey=a.localNonceStorageKey||d.Ws.SIWX_NONCE_TOKEN,this.required=a.required??!0,this.messenger=new k({getNonce:this.getNonce.bind(this)})}async createMessage(a){return this.messenger.createMessage(a)}async addSession(a){let b=await this.request({method:"POST",key:"authenticate",body:{data:a.data,message:a.message,signature:a.signature,clientId:this.getClientId(),walletInfo:this.getWalletInfo()},headers:["nonce","otp"]});this.setStorageToken(b.token,this.localAuthStorageKey),this.emit("sessionChanged",a),this.setAppKitAccountUser(function(a){let b=a.split(".");if(3!==b.length)throw Error("Invalid token");let c=b[1];if("string"!=typeof c)throw Error("Invalid token");let d=c.replace(/-/gu,"+").replace(/_/gu,"/");return JSON.parse(atob(d.padEnd(d.length+(4-d.length%4)%4,"=")))}(b.token)),this.otpUuid=null}async getSessions(a,b){try{if(!this.getStorageToken(this.localAuthStorageKey))return[];let c=await this.request({method:"GET",key:"me",query:{},headers:["auth"]});if(!c)return[];let d=c.address.toLowerCase()===b.toLowerCase(),e=c.caip2Network===a;if(!d||!e)return[];let f={data:{accountAddress:c.address,chainId:c.caip2Network},message:"",signature:""};return this.emit("sessionChanged",f),this.setAppKitAccountUser(c),[f]}catch{return[]}}async revokeSession(a,b){return Promise.resolve(this.clearStorageTokens())}async setSessions(a){if(0===a.length)this.clearStorageTokens();else{let b=a.find(a=>a.data.chainId===(0,i.kg)()?.caipNetworkId)||a[0];await this.addSession(b)}}getRequired(){return this.required}async getSessionAccount(){if(!this.getStorageToken(this.localAuthStorageKey))throw Error("Not authenticated");return this.request({method:"GET",key:"me",body:void 0,query:{includeAppKitAccount:!0},headers:["auth"]})}async setSessionAccountMetadata(a=null){if(!this.getStorageToken(this.localAuthStorageKey))throw Error("Not authenticated");return this.request({method:"PUT",key:"account-metadata",body:{metadata:a},headers:["auth"]})}on(a,b){return this.listeners[a].push(b),()=>{this.listeners[a]=this.listeners[a].filter(a=>a!==b)}}removeAllListeners(){Object.keys(this.listeners).forEach(a=>{this.listeners[a]=[]})}async requestEmailOtp({email:a,account:b}){let c=await this.request({method:"POST",key:"otp",body:{email:a,account:b}});return this.otpUuid=c.uuid,this.messenger.resources=[`email:${a}`],c}confirmEmailOtp({code:a}){return this.request({method:"PUT",key:"otp",body:{code:a},headers:["otp"]})}async request({method:a,key:b,query:c,body:d,headers:f}){let{projectId:g,st:h,sv:i}=this.getSDKProperties(),j=new URL(`${e.o.W3M_API_URL}/auth/v1/${String(b)}`);j.searchParams.set("projectId",g),j.searchParams.set("st",h),j.searchParams.set("sv",i),c&&Object.entries(c).forEach(([a,b])=>j.searchParams.set(a,String(b)));let k=await fetch(j,{method:a,body:d?JSON.stringify(d):void 0,headers:Array.isArray(f)?f.reduce((a,b)=>{switch(b){case"nonce":a["x-nonce-jwt"]=`Bearer ${this.getStorageToken(this.localNonceStorageKey)}`;break;case"auth":a.Authorization=`Bearer ${this.getStorageToken(this.localAuthStorageKey)}`;break;case"otp":this.otpUuid&&(a["x-otp"]=this.otpUuid)}return a},{}):void 0});if(!k.ok)throw Error(await k.text());return k.headers.get("content-type")?.includes("application/json")?k.json():null}getStorageToken(a){return d.Ud.getItem(a)}setStorageToken(a,b){d.Ud.setItem(b,a)}clearStorageTokens(){this.otpUuid=null,d.Ud.removeItem(this.localAuthStorageKey),d.Ud.removeItem(this.localNonceStorageKey),this.emit("sessionChanged",void 0)}async getNonce(){let{nonce:a,token:b}=await this.request({method:"GET",key:"nonce"});return this.setStorageToken(b,this.localNonceStorageKey),a}getClientId(){return g.T.state.clientId}getWalletInfo(){let a=h.W.getAccountData()?.connectedWalletInfo;if(!a)return;if("social"in a&&"identifier"in a)return{type:"social",social:a.social,identifier:a.identifier};let{name:b,icon:c}=a,d="unknown";switch(a.type){case"EXTERNAL":case"INJECTED":case"ANNOUNCED":d="extension";break;case"WALLET_CONNECT":d="walletconnect";break;default:d="unknown"}return{type:d,name:b,icon:c}}getSDKProperties(){return f.N._getSdkProperties()}emit(a,b){this.listeners[a].forEach(a=>a(b))}setAppKitAccountUser(a){let{email:b}=a;b&&Object.values(e.o.CHAIN).forEach(a=>{h.W.setAccountProp("user",{email:b},a)})}}}};