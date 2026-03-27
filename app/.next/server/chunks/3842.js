"use strict";exports.id=3842,exports.ids=[3842],exports.modules={23967:(a,b,c)=>{c.d(b,{H:()=>y});var d,e=c(29856),f=c(44500),g=c(87977),h=c(95209),i=c(13295),j=c(33504),k=c(74967);c(58581),c(48850),c(20356),c(64222);var l=c(77292),m=c(16627),n=c(14143),o=c(27680);let p=(0,o.AH)`
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
    `}startOTPTimeout(){this.timeoutTimeLeft=v.Q.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=v.Q.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(a){try{!this.loading&&(this.otp=a.detail,this.shouldSubmitOnOtpChange()&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(a){this.error=i.w.parseError(a),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!h.a.getAuthConnector()||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),j.P.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(a){j.P.showError(a)}finally{this.loading=!1}}getFooterLabels(a){return this.onStartOver?{title:"Something wrong?",action:`Try again ${a?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${a?`in ${this.timeoutTimeLeft}s`:"Code"}`}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===d.OTP_LENGTH}};y.OTP_LENGTH=6,y.styles=w,x([(0,f.wk)()],y.prototype,"loading",void 0),x([(0,f.wk)()],y.prototype,"timeoutTimeLeft",void 0),x([(0,f.wk)()],y.prototype,"error",void 0),y=d=x([(0,k.EM)("w3m-email-otp-widget")],y)},33842:(a,b,c)=>{c.r(b),c.d(b,{W3mEmailLoginView:()=>D,W3mEmailOtpWidget:()=>m.H,W3mEmailVerifyDeviceView:()=>t,W3mEmailVerifyOtpView:()=>n,W3mUpdateEmailPrimaryOtpView:()=>y,W3mUpdateEmailSecondaryOtpView:()=>z,W3mUpdateEmailWalletView:()=>x});var d=c(57339),e=c(69801),f=c(51048),g=c(26641),h=c(93175),i=c(87977),j=c(33504),k=c(13295),l=c(74967),m=c(23967);let n=class extends m.H{constructor(){super(...arguments),this.onOtpSubmit=async a=>{try{if(this.authConnector){let b=d.W.state.activeChain,c=e.x.getConnections(b),k=f.H.state.remoteFeatures?.multiWallet,l=c.length>0;if(await this.authConnector.provider.connectOtp({otp:a}),g.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),b)await e.x.connectExternal(this.authConnector,b);else throw Error("Active chain is not set on ChainController");if(f.H.state.remoteFeatures?.emailCapture)return;if(f.H.state.siwx)return void h.W.close();if(l&&k){i.I.replace("ProfileWallets"),j.P.showSuccess("New Wallet Added");return}h.W.close()}}catch(a){throw g.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:k.w.parseError(a)}}),a}},this.onOtpResend=async a=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:a}),g.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};n=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,l.EM)("w3m-email-verify-otp-view")],n);var o=c(29856),p=c(44500),q=c(95209);c(58581),c(35419),c(48850),c(77041);let r=(0,l.AH)`
  wui-icon-box {
    height: ${({spacing:a})=>a["16"]};
    width: ${({spacing:a})=>a["16"]};
  }
`;var s=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let t=class extends o.WF{constructor(){super(),this.email=i.I.state.data?.email,this.authConnector=q.a.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw Error("w3m-email-verify-device-view: No auth connector provided");return(0,o.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["6","3","6","3"]}
        gap="4"
      >
        <wui-icon-box size="xl" color="accent-primary" icon="sealCheck"></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="3">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="md-regular" color="primary">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="md-regular" color="primary"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="sm-regular" color="secondary" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="2">
            <wui-text variant="sm-regular" color="primary" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),g.E.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),g.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),i.I.replace("EmailVerifyOtp",{email:this.email})}catch(a){i.I.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),j.P.showSuccess("Code email resent")}}catch(a){j.P.showError(a)}finally{this.loading=!1}}};t.styles=r,s([(0,p.wk)()],t.prototype,"loading",void 0),t=s([(0,l.EM)("w3m-email-verify-device-view")],t);var u=c(84600);c(21238),c(21924);let v=(0,o.AH)`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var w=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let x=class extends o.WF{constructor(){super(...arguments),this.formRef=(0,u._)(),this.initialEmail=i.I.state.data?.email??"",this.redirectView=i.I.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",a=>{"Enter"===a.key&&this.onSubmitEmail(a)})}render(){return(0,o.qy)`
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${(0,u.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(a){this.email=a.detail}async onSubmitEmail(a){try{if(this.loading)return;this.loading=!0,a.preventDefault();let b=q.a.getAuthConnector();if(!b)throw Error("w3m-update-email-wallet: Auth connector not found");let c=await b.provider.updateEmail({email:this.email});g.E.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===c.action?i.I.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):i.I.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(a){j.P.showError(a),this.loading=!1}}buttonsTemplate(){let a=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?(0,o.qy)`
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${i.I.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!a}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:(0,o.qy)`
        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!a}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};x.styles=v,w([(0,p.wk)()],x.prototype,"email",void 0),w([(0,p.wk)()],x.prototype,"loading",void 0),x=w([(0,l.EM)("w3m-update-email-wallet-view")],x);let y=class extends m.H{constructor(){super(),this.email=i.I.state.data?.email,this.onOtpSubmit=async a=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:a}),g.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),i.I.replace("UpdateEmailSecondaryOtp",i.I.state.data))}catch(a){throw g.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:k.w.parseError(a)}}),a}},this.onStartOver=()=>{i.I.replace("UpdateEmailWallet",i.I.state.data)}}};y=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,l.EM)("w3m-update-email-primary-otp-view")],y);let z=class extends m.H{constructor(){super(),this.email=i.I.state.data?.newEmail,this.redirectView=i.I.state.data?.redirectView,this.onOtpSubmit=async a=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:a}),g.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&i.I.reset(this.redirectView))}catch(a){throw g.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:k.w.parseError(a)}}),a}},this.onStartOver=()=>{i.I.replace("UpdateEmailWallet",i.I.state.data)}}};z=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,l.EM)("w3m-update-email-secondary-otp-view")],z);var A=c(85601),B=c(10358),C=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let D=class extends o.WF{constructor(){super(),this.authConnector=q.a.getAuthConnector(),this.isEmailEnabled=f.H.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(q.a.state.connectors),this.connectors=q.a.state.connectors,q.a.subscribeKey("connectors",a=>{this.connectors=a,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw Error("w3m-email-login-view: No auth connector provided");return(0,o.qy)`<wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(a){let b=a.filter(a=>a.type===B.o.CONNECTOR_TYPE_AUTH).map(a=>a.chain);return A.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(a=>b.includes(a))}};C([(0,p.wk)()],D.prototype,"connectors",void 0),D=C([(0,l.EM)("w3m-email-login-view")],D)}};