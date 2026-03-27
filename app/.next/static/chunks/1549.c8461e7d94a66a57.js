"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1549],{71596:(e,t,i)=>{var a=i(83138),n=i(98410),s=i(78964);i(91404);var r=i(71084),o=i(47327),c=i(20296);let l=(0,c.AH)`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var u=function(e,t,i,a){var n,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let d=class extends a.WF{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return(0,a.qy)`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,s.J)(this.iconSize)}></wui-icon>
    </button>`}};d.styles=[r.W5,r.fD,l],u([(0,n.MZ)()],d.prototype,"icon",void 0),u([(0,n.MZ)()],d.prototype,"variant",void 0),u([(0,n.MZ)()],d.prototype,"type",void 0),u([(0,n.MZ)()],d.prototype,"size",void 0),u([(0,n.MZ)()],d.prototype,"iconSize",void 0),u([(0,n.MZ)({type:Boolean})],d.prototype,"fullWidth",void 0),u([(0,n.MZ)({type:Boolean})],d.prototype,"disabled",void 0),d=u([(0,o.E)("wui-icon-button")],d)},80205:(e,t,i)=>{i(45166)},91549:(e,t,i)=>{i.r(t),i.d(t,{PayController:()=>es,W3mPayLoadingView:()=>eA,W3mPayQuoteView:()=>eW,W3mPayView:()=>ec,arbitrumUSDC:()=>eX,arbitrumUSDT:()=>e2,baseETH:()=>eH,baseSepoliaETH:()=>eK,baseUSDC:()=>eV,ethereumUSDC:()=>eJ,ethereumUSDT:()=>e3,getExchanges:()=>ej,getIsPaymentInProgress:()=>eY,getPayError:()=>eG,getPayResult:()=>ez,openPay:()=>eM,optimismUSDC:()=>eZ,optimismUSDT:()=>e5,pay:()=>eB,polygonUSDC:()=>e0,polygonUSDT:()=>e4,solanaSOL:()=>e8,solanaUSDC:()=>e1,solanaUSDT:()=>e6});var a=i(83138),n=i(98410),s=i(78964),r=i(10899),o=i(93481),c=i(14744),l=i(67869),u=i(81701),d=i(97418),p=i(65374),m=i(36211);i(41028),i(40575),i(77237),i(71596),i(51568),i(80205),i(26670),i(75484),i(56975),i(39752),i(41163),i(1805);var h=i(1220),y=i(98866),g=i(45553),w=i(65103),f=i(12182),b=i(70417),x=i(12319),E=i(30982),A=i(79355);let v={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS",UNABLE_TO_GET_TOKEN_BALANCES:"UNABLE_TO_GET_TOKEN_BALANCES",UNABLE_TO_GET_QUOTE:"UNABLE_TO_GET_QUOTE",UNABLE_TO_GET_QUOTE_STATUS:"UNABLE_TO_GET_QUOTE_STATUS",INVALID_RECIPIENT_ADDRESS_FOR_ASSET:"INVALID_RECIPIENT_ADDRESS_FOR_ASSET"},I={[v.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[v.INVALID_RECIPIENT]:"Invalid recipient address",[v.INVALID_ASSET]:"Invalid asset specified",[v.INVALID_AMOUNT]:"Invalid payment amount",[v.INVALID_RECIPIENT_ADDRESS_FOR_ASSET]:"Invalid recipient address for the asset selected",[v.UNKNOWN_ERROR]:"Unknown payment error occurred",[v.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[v.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[v.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[v.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[v.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[v.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[v.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status",[v.UNABLE_TO_GET_TOKEN_BALANCES]:"Unable to get token balances",[v.UNABLE_TO_GET_QUOTE]:"Unable to get quote. Please choose a different token",[v.UNABLE_TO_GET_QUOTE_STATUS]:"Unable to get quote status"};class k extends Error{get message(){return I[this.code]}constructor(e,t){super(I[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,k)}}var N=i(32464),S=i(67074),P=i(71305);let T="reown_test";var C=i(425),$=i(32009);async function _(e,t,i){if(t!==g.o.CHAIN.EVM)throw new k(v.INVALID_CHAIN_NAMESPACE);if(!i.fromAddress)throw new k(v.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.");let a="string"==typeof i.amount?parseFloat(i.amount):i.amount;if(isNaN(a))throw new k(v.INVALID_PAYMENT_CONFIG);let n=e.metadata?.decimals??18,s=d.x.parseUnits(a.toString(),n);if("bigint"!=typeof s)throw new k(v.GENERIC_PAYMENT_ERROR);return await d.x.sendTransaction({chainNamespace:t,to:i.recipient,address:i.fromAddress,value:s,data:"0x"})??void 0}async function q(e,t){if(!t.fromAddress)throw new k(v.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.");let i=e.asset,a=t.recipient,n=Number(e.metadata.decimals),s=d.x.parseUnits(t.amount.toString(),n);if(void 0===s)throw new k(v.GENERIC_PAYMENT_ERROR);return await d.x.writeContract({fromAddress:t.fromAddress,tokenAddress:i,args:[a,s],method:"transfer",abi:C.v.getERC20Abi(i),chainNamespace:g.o.CHAIN.EVM})??void 0}async function O(e,t){if(e!==g.o.CHAIN.SOLANA)throw new k(v.INVALID_CHAIN_NAMESPACE);if(!t.fromAddress)throw new k(v.INVALID_PAYMENT_CONFIG,"fromAddress is required for Solana payments.");let i="string"==typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(i)||i<=0)throw new k(v.INVALID_PAYMENT_CONFIG,"Invalid payment amount.");try{if(!$.G.getProvider(e))throw new k(v.GENERIC_PAYMENT_ERROR,"No Solana provider available.");let a=await d.x.sendTransaction({chainNamespace:g.o.CHAIN.SOLANA,to:t.recipient,value:i,tokenMint:t.tokenMint});if(!a)throw new k(v.GENERIC_PAYMENT_ERROR,"Transaction failed.");return a}catch(e){if(e instanceof k)throw e;throw new k(v.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${e}`)}}async function R({sourceToken:e,toToken:t,amount:i,recipient:a}){let n=d.x.parseUnits(i,e.metadata.decimals),s=d.x.parseUnits(i,t.metadata.decimals);return Promise.resolve({type:et,origin:{amount:n?.toString()??"0",currency:e},destination:{amount:s?.toString()??"0",currency:t},fees:[{id:"service",label:"Service Fee",amount:"0",currency:t}],steps:[{requestId:et,type:"deposit",deposit:{amount:n?.toString()??"0",currency:e.asset,receiver:a}}],timeInSeconds:6})}function U(e){if(!e)return null;let t=e.steps[0];return t&&t.type===ei?t:null}function D(e,t=0){if(!e)return[];let i=e.steps.filter(e=>e.type===ea),a=i.filter((e,i)=>i+1>t);return i.length>0&&i.length<3?a:[]}let L=new N.Z({baseUrl:x.w.getApiUrl(),clientId:null});class F extends Error{}function W(){let{projectId:e,sdkType:t,sdkVersion:i}=S.H.state;return{projectId:e,st:t||"appkit",sv:i||"html-wagmi-4.2.2"}}async function M(e,t){let i=function(){let e=S.H.getSnapshot().projectId;return`https://rpc.walletconnect.org/v1/json-rpc?projectId=${e}`}(),{sdkType:a,sdkVersion:n,projectId:s}=S.H.getSnapshot(),r={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:a,sv:n,projectId:s}},o=await fetch(i,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}),c=await o.json();if(c.error)throw new F(c.error.message);return c}async function B(e){return(await M("reown_getExchanges",e)).result}async function j(e){return(await M("reown_getExchangePayUrl",e)).result}async function z(e){return(await M("reown_getExchangeBuyStatus",e)).result}async function G(e){let t=f.S.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:i,chainNamespace:a}=w.C.parseCaipNetworkId(e.sourceToken.network),{chainId:n,chainNamespace:s}=w.C.parseCaipNetworkId(e.toToken.network),r="native"===e.sourceToken.asset?(0,P.NH)(a):e.sourceToken.asset,o="native"===e.toToken.asset?(0,P.NH)(s):e.toToken.asset;return await L.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:i.toString(),originCurrency:r,destinationChainId:n.toString(),destinationCurrency:o,recipient:e.recipient,amount:t},params:W()})}async function Y(e){let t=A.y.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),i=A.y.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&i?R(e):G(e)}async function Q(e){return await L.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,...W()}})}async function H(e){return await L.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:W()})}let V=["eip155","solana"],K={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},J={56:"714",204:"714"};function Z(e,t){let{chainNamespace:i,chainId:a}=w.C.parseCaipNetworkId(e),n=K[i];if(!n)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${i}`);let s=n.native.assetNamespace,r=n.native.assetReference;"native"!==t?(s=n.defaultTokenNamespace,r=t):"eip155"===i&&J[a]&&(r=J[a]);let o=`${i}:${a}`;return`${o}/${s}:${r}`}function X(e){let t=f.S.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}let ee="unknown",et="direct-transfer",ei="deposit",ea="transaction",en=(0,h.BX)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[g.o.CHAIN.EVM]:[],[g.o.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),es={state:en,subscribe:e=>(0,h.B1)(en,()=>e(en)),subscribeKey:(e,t)=>(0,y.u$)(en,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics();let{chainNamespace:t}=w.C.parseCaipNetworkId(es.state.paymentAsset.network);if(!x.w.isAddress(es.state.recipient,t))throw new k(v.INVALID_RECIPIENT_ADDRESS_FOR_ASSET,`Provide valid recipient address for namespace "${t}"`);await this.prepareTokenLogo(),en.isConfigured=!0,b.E.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:en.exchanges,configuration:{network:en.paymentAsset.network,asset:en.paymentAsset.asset,recipient:en.recipient,amount:en.amount}}}),await u.W.open({view:"Pay"})},resetState(){en.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},en.recipient="0x0",en.amount=0,en.isConfigured=!1,en.error=null,en.isPaymentInProgress=!1,en.isLoading=!1,en.currentPayment=void 0,en.selectedExchange=void 0,en.exchangeUrlForQuote=void 0,en.requestId=void 0},resetQuoteState(){en.quote=void 0,en.quoteStatus="waiting",en.quoteError=null,en.isFetchingQuote=!1,en.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new k(v.INVALID_PAYMENT_CONFIG);try{en.choice=e.choice??"pay",en.paymentAsset=e.paymentAsset,en.recipient=e.recipient,en.amount=e.amount,en.openInNewTab=e.openInNewTab??!0,en.redirectUrl=e.redirectUrl,en.payWithExchange=e.payWithExchange,en.error=null}catch(e){throw new k(v.INVALID_PAYMENT_CONFIG,e.message)}},setSelectedPaymentAsset(e){en.selectedPaymentAsset=e},setSelectedExchange(e){en.selectedExchange=e},setRequestId(e){en.requestId=e},setPaymentInProgress(e){en.isPaymentInProgress=e},getPaymentAsset:()=>en.paymentAsset,getExchanges:()=>en.exchanges,async fetchExchanges(){try{en.isLoading=!0,en.exchanges=(await B({page:0})).exchanges.slice(0,2)}catch(e){throw p.P.showError(I.UNABLE_TO_GET_EXCHANGES),new k(v.UNABLE_TO_GET_EXCHANGES)}finally{en.isLoading=!1}},async getAvailableExchanges(e){try{let t=e?.asset&&e?.network?Z(e.network,e.asset):void 0;return await B({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch(e){throw new k(v.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(e,t,i=!1){try{let a=Number(t.amount),n=await j({exchangeId:e,asset:Z(t.network,t.asset),amount:a.toString(),recipient:`${t.network}:${t.recipient}`});return b.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:e},headless:i}}),i&&(this.initiatePayment(),b.E.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:en.paymentId||ee,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:e}}})),n}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw new k(v.ASSET_NOT_SUPPORTED);throw Error(e.message)}},async generateExchangeUrlForQuote({exchangeId:e,paymentAsset:t,amount:i,recipient:a}){let n=await j({exchangeId:e,asset:Z(t.network,t.asset),amount:i.toString(),recipient:a});en.exchangeSessionId=n.sessionId,en.exchangeUrlForQuote=n.url},async openPayUrl(e,t,i=!1){try{let a=await this.getPayUrl(e.exchangeId,t,i);if(!a)throw new k(v.UNABLE_TO_GET_PAY_URL);let n=e.openInNewTab??!0;return x.w.openHref(a.url,n?"_blank":"_self"),a}catch(e){throw e instanceof k?en.error=e.message:en.error=I.GENERIC_PAYMENT_ERROR,new k(v.UNABLE_TO_GET_PAY_URL)}},async onTransfer({chainNamespace:e,fromAddress:t,toAddress:i,amount:a,paymentAsset:n}){if(en.currentPayment={type:"wallet",status:"IN_PROGRESS"},!en.isPaymentInProgress)try{this.initiatePayment();let s=o.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===n.network);if(!s)throw Error("Target network not found");let r=o.W.state.activeCaipNetwork;switch(!A.y.isLowerCaseMatch(r?.caipNetworkId,s.caipNetworkId)&&await o.W.switchActiveNetwork(s),e){case g.o.CHAIN.EVM:"native"===n.asset&&(en.currentPayment.result=await _(n,e,{recipient:i,amount:a,fromAddress:t})),n.asset.startsWith("0x")&&(en.currentPayment.result=await q(n,{recipient:i,amount:a,fromAddress:t})),en.currentPayment.status="SUCCESS";break;case g.o.CHAIN.SOLANA:en.currentPayment.result=await O(e,{recipient:i,amount:a,fromAddress:t,tokenMint:"native"===n.asset?void 0:n.asset}),en.currentPayment.status="SUCCESS";break;default:throw new k(v.INVALID_CHAIN_NAMESPACE)}}catch(e){throw e instanceof k?en.error=e.message:en.error=I.GENERIC_PAYMENT_ERROR,en.currentPayment.status="FAILED",p.P.showError(en.error),e}finally{en.isPaymentInProgress=!1}},async onSendTransaction(e){try{let{namespace:t,transactionStep:i}=e;es.initiatePayment();let a=o.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===en.paymentAsset?.network);if(!a)throw Error("Target network not found");let n=o.W.state.activeCaipNetwork;if(A.y.isLowerCaseMatch(n?.caipNetworkId,a.caipNetworkId)||await o.W.switchActiveNetwork(a),t===g.o.CHAIN.EVM){let{from:e,to:a,data:n,value:s}=i.transaction;await d.x.sendTransaction({address:e,to:a,data:n,value:BigInt(s),chainNamespace:t})}else if(t===g.o.CHAIN.SOLANA){let{instructions:e}=i.transaction;await d.x.writeSolanaTransaction({instructions:e})}}catch(e){throw e instanceof k?en.error=e.message:en.error=I.GENERIC_PAYMENT_ERROR,p.P.showError(en.error),e}finally{en.isPaymentInProgress=!1}},getExchangeById:e=>en.exchanges.find(t=>t.id===e),validatePayConfig(e){let{paymentAsset:t,recipient:i,amount:a}=e;if(!t)throw new k(v.INVALID_PAYMENT_CONFIG);if(!i)throw new k(v.INVALID_RECIPIENT);if(!t.asset)throw new k(v.INVALID_ASSET);if(null==a||a<=0)throw new k(v.INVALID_AMOUNT)},async handlePayWithExchange(e){try{en.currentPayment={type:"exchange",exchangeId:e};let{network:t,asset:i}=en.paymentAsset,a={network:t,asset:i,amount:en.amount,recipient:en.recipient},n=await this.getPayUrl(e,a);if(!n)throw new k(v.UNABLE_TO_INITIATE_PAYMENT);return en.currentPayment.sessionId=n.sessionId,en.currentPayment.status="IN_PROGRESS",en.currentPayment.exchangeId=e,this.initiatePayment(),{url:n.url,openInNewTab:en.openInNewTab}}catch(e){return e instanceof k?en.error=e.message:en.error=I.GENERIC_PAYMENT_ERROR,en.isPaymentInProgress=!1,p.P.showError(en.error),null}},async getBuyStatus(e,t){try{let i=await z({sessionId:t,exchangeId:e});return("SUCCESS"===i.status||"FAILED"===i.status)&&b.E.sendEvent({type:"track",event:"SUCCESS"===i.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===i.status?x.w.parseError(en.error):void 0,source:"pay",paymentId:en.paymentId||ee,configuration:{network:en.paymentAsset.network,asset:en.paymentAsset.asset,recipient:en.recipient,amount:en.amount},currentPayment:{type:"exchange",exchangeId:en.currentPayment?.exchangeId,sessionId:en.currentPayment?.sessionId,result:i.txHash}}}),i}catch(e){throw new k(v.UNABLE_TO_GET_BUY_STATUS)}},async fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}){if(!e)return[];let{address:a}=w.C.parseCaipAddress(e),n=t;return i===g.o.CHAIN.EVM&&(n=void 0),await E.Z.getMyTokensWithBalance({address:a,caipNetwork:n})},async fetchTokensFromExchange(){if(!en.selectedExchange)return[];let e=Object.values((await H(en.selectedExchange.id)).assets).flat();return await Promise.all(e.map(async e=>{let t={chainId:e.network,address:`${e.network}:${e.asset}`,symbol:e.metadata.symbol,name:e.metadata.name,iconUrl:e.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:e.metadata.decimals.toString()}},{chainNamespace:i}=w.C.parseCaipNetworkId(t.chainId),a=t.address;if(x.w.isCaipAddress(a)){let{address:e}=w.C.parseCaipAddress(a);a=e}return t.iconUrl=await c.$.getImageByToken(a??"",i).catch(()=>void 0)??"",t}))},async fetchTokens({caipAddress:e,caipNetwork:t,namespace:i}){try{en.isFetchingTokenBalances=!0;let a=en.selectedExchange?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}),n=await a;en.tokenBalances={...en.tokenBalances,[i]:n}}catch(t){let e=t instanceof Error?t.message:"Unable to get token balances";p.P.showError(e)}finally{en.isFetchingTokenBalances=!1}},async fetchQuote({amount:e,address:t,sourceToken:i,toToken:a,recipient:n}){try{es.resetQuoteState(),en.isFetchingQuote=!0;let s=await Y({amount:e,address:en.selectedExchange?void 0:t,sourceToken:i,toToken:a,recipient:n});if(en.selectedExchange){let e=U(s);if(e){let t=`${i.network}:${e.deposit.receiver}`,a=f.S.formatNumber(e.deposit.amount,{decimals:i.metadata.decimals??0,round:8});await es.generateExchangeUrlForQuote({exchangeId:en.selectedExchange.id,paymentAsset:i,amount:a.toString(),recipient:t})}}en.quote=s}catch(t){let e=I.UNABLE_TO_GET_QUOTE;if(t instanceof Error&&t.cause&&t.cause instanceof Response)try{let i=await t.cause.json();i.error&&"string"==typeof i.error&&(e=i.error)}catch{}throw en.quoteError=e,p.P.showError(e),new k(v.UNABLE_TO_GET_QUOTE)}finally{en.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:e}){try{if(e===et){let e=en.selectedExchange,t=en.exchangeSessionId;if(e&&t){switch((await this.getBuyStatus(e.id,t)).status){case"IN_PROGRESS":case"UNKNOWN":default:en.quoteStatus="waiting";break;case"SUCCESS":en.quoteStatus="success",en.isPaymentInProgress=!1;break;case"FAILED":en.quoteStatus="failure",en.isPaymentInProgress=!1}return}en.quoteStatus="success";return}let{status:t}=await Q({requestId:e});en.quoteStatus=t}catch{throw en.quoteStatus="failure",new k(v.UNABLE_TO_GET_QUOTE_STATUS)}},initiatePayment(){en.isPaymentInProgress=!0,en.paymentId=crypto.randomUUID()},initializeAnalytics(){en.analyticsSet||(en.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{if(en.currentPayment?.status&&"UNKNOWN"!==en.currentPayment.status){let e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[en.currentPayment.status];b.E.sendEvent({type:"track",event:e,properties:{message:"FAILED"===en.currentPayment.status?x.w.parseError(en.error):void 0,source:"pay",paymentId:en.paymentId||ee,configuration:{network:en.paymentAsset.network,asset:en.paymentAsset.asset,recipient:en.recipient,amount:en.amount},currentPayment:{type:en.currentPayment.type,exchangeId:en.currentPayment.exchangeId,sessionId:en.currentPayment.sessionId,result:en.currentPayment.result}}})}}))},async prepareTokenLogo(){if(!en.paymentAsset.metadata.logoURI)try{let{chainNamespace:e}=w.C.parseCaipNetworkId(en.paymentAsset.network),t=await c.$.getImageByToken(en.paymentAsset.asset,e);en.paymentAsset.metadata.logoURI=t}catch{}}},er=(0,m.AH)`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[8]};
    border-top-left-radius: ${({borderRadius:e})=>e[8]};
  }
`;var eo=function(e,t,i,a){var n,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let ec=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.amount=es.state.amount,this.namespace=void 0,this.paymentAsset=es.state.paymentAsset,this.activeConnectorIds=r.a.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=es.state.exchanges,this.isLoading=es.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(es.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(r.a.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(es.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(es.subscribeKey("isLoading",e=>this.isLoading=e)),es.fetchExchanges(),es.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,a.qy)`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return(0,a.qy)`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){let e=o.W.state.activeChain;this.namespace=e,this.caipAddress=o.W.getAccountData(e)?.caipAddress,this.unsubscribe.push(o.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},e))}paymentDetailsTemplate(){let e=o.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return(0,a.qy)`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${X(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${e?.name||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${(0,s.J)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,s.J)(c.$.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return!function(e){let{chainNamespace:t}=w.C.parseCaipNetworkId(e);return V.includes(t)}(this.paymentAsset.network)?(0,a.qy)``:this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate()}connectedWalletTemplate(){let{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return(0,a.qy)`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${(0,s.J)(t)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return(0,a.qy)`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return(0,a.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;let e=this.exchanges.filter(e=>!function(e){let t=o.W.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.network);return!!t&&!!t.testnet}(this.paymentAsset)?e.id!==T:e.id===T);return 0===e.length?(0,a.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map(e=>(0,a.qy)`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${(0,s.J)(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return(0,a.qy)`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw Error("Namespace not found");this.caipAddress?l.I.push("PayQuote"):(await r.a.connect(),await u.W.open({view:"PayQuote"}))}onExchangePayment(e){es.setSelectedExchange(e),l.I.push("PayQuote")}async onDisconnect(){try{await d.x.disconnect(),await u.W.open({view:"Pay"})}catch{console.error("Failed to disconnect"),p.P.showError("Failed to disconnect")}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let i=r.a.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};let a=c.$.getConnectorImage(i);return{name:i.name,image:a}}};ec.styles=er,eo([(0,n.wk)()],ec.prototype,"amount",void 0),eo([(0,n.wk)()],ec.prototype,"namespace",void 0),eo([(0,n.wk)()],ec.prototype,"paymentAsset",void 0),eo([(0,n.wk)()],ec.prototype,"activeConnectorIds",void 0),eo([(0,n.wk)()],ec.prototype,"caipAddress",void 0),eo([(0,n.wk)()],ec.prototype,"exchanges",void 0),eo([(0,n.wk)()],ec.prototype,"isLoading",void 0),ec=eo([(0,m.EM)("w3m-pay-view")],ec);var el=i(2354),eu=i(20296),ed=i(71084),ep=i(47327);let em=(0,eu.AH)`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;var eh=function(e,t,i,a){var n,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let ey={"accent-primary":eu.f.tokens.core.backgroundAccentPrimary},eg=class extends a.WF{constructor(){super(...arguments),this.rings=3,this.duration=2,this.opacity=.3,this.size="200px",this.variant="accent-primary"}render(){let e=ey[this.variant];this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${e};
      --pulse-opacity: ${this.opacity};
    `;let t=Array.from({length:this.rings},(e,t)=>this.renderRing(t,this.rings));return(0,a.qy)`
      <div class="pulse-container">
        <div class="pulse-rings">${t}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){let i=e/t*this.duration,n=`animation-delay: ${i}s;`;return(0,a.qy)`<div class="pulse-ring" style=${n}></div>`}};eg.styles=[ed.W5,em],eh([(0,n.MZ)({type:Number})],eg.prototype,"rings",void 0),eh([(0,n.MZ)({type:Number})],eg.prototype,"duration",void 0),eh([(0,n.MZ)({type:Number})],eg.prototype,"opacity",void 0),eh([(0,n.MZ)()],eg.prototype,"size",void 0),eh([(0,n.MZ)()],eg.prototype,"variant",void 0),eg=eh([(0,ep.E)("wui-pulse")],eg);let ew=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],ef=["success","submitted","failure","timeout","refund"],eb=(0,m.AH)`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:e})=>e[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:e})=>e.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[6]};
    border-top-left-radius: ${({borderRadius:e})=>e[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }
`;var ex=function(e,t,i,a){var n,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let eE={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]},eA=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=es.state.paymentAsset,this.quoteStatus=es.state.quoteStatus,this.quote=es.state.quote,this.amount=es.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=r.a.state.activeConnectorIds,this.selectedExchange=es.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(es.subscribeKey("quoteStatus",e=>this.quoteStatus=e),es.subscribeKey("quote",e=>this.quote=e),r.a.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e),es.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(e=>e())}render(){return(0,a.qy)`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){let e=X(this.amount||"0"),t=this.paymentAsset.metadata.symbol??"Unknown",i=o.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network),n="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus;return"success"===this.quoteStatus||"submitted"===this.quoteStatus?(0,a.qy)`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:n?(0,a.qy)`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:(0,a.qy)`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${(0,s.J)(c.$.getNetworkImage(i))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${t}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return(0,a.qy)`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){let e=this.getStepsWithStatus();return(0,a.qy)`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map(e=>this.renderStep(e))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){let e="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus,t="success"===this.quoteStatus||"submitted"===this.quoteStatus;if(e)return(0,a.qy)`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(t)return(0,a.qy)`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;let i=this.quote?.timeInSeconds??0;return(0,a.qy)`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${i} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){let e=o.W.getAllRequestedCaipNetworks().find(e=>{let t=this.quote?.origin.currency.network;if(!t)return!1;let{chainId:i}=w.C.parseCaipNetworkId(t);return A.y.isLowerCaseMatch(e.id.toString(),i.toString())}),t=X(f.S.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString()),i=this.quote?.origin.currency.metadata.symbol??"Unknown";return(0,a.qy)`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${t}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${i}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,s.J)(c.$.getNetworkImage(e))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${e?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return(0,a.qy)`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary"
          >${this.selectedExchange?"Exchange":"Wallet"}</wui-text
        >

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){let{image:e}=this.getWalletProperties({namespace:this.namespace}),{address:t}=this.caipAddress?w.C.parseCaipAddress(this.caipAddress):{},i=this.selectedExchange?.name;return this.selectedExchange?(0,a.qy)`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${i}</wui-text>
          <wui-image src=${(0,s.J)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:(0,a.qy)`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${m.Zv.getTruncateString({string:this.profileName||t||i||"",charsStart:this.profileName?16:4,charsEnd:6*!this.profileName,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${(0,s.J)(e)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?ew.map(e=>({...e,status:"failed"})):ew.map(e=>{let t=(eE[e.id]??[]).includes(this.quoteStatus)?"completed":"pending";return{...e,status:t}})}renderStep({title:e,icon:t,status:i}){return(0,a.qy)`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${t} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,el.H)({"step-icon-box":!0,success:"completed"===i})}>
            ${this.renderStatusIndicator(i)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${e}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return"completed"===e?(0,a.qy)`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:"failed"===e?(0,a.qy)`<wui-icon size="sm" color="error" name="close"></wui-icon>`:"pending"===e?(0,a.qy)`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval(()=>{this.fetchQuoteStatus()},3e3))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){let e=es.state.requestId;if(!e||ef.includes(this.quoteStatus))this.stopPolling();else try{await es.fetchQuoteStatus({requestId:e}),ef.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){let e=o.W.state.activeChain;this.namespace=e,this.caipAddress=o.W.getAccountData(e)?.caipAddress,this.profileName=o.W.getAccountData(e)?.profileName??null,this.unsubscribe.push(o.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null},e))}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let i=r.a.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};let a=c.$.getConnectorImage(i);return{name:i.name,image:a}}};eA.styles=eb,ex([(0,n.wk)()],eA.prototype,"paymentAsset",void 0),ex([(0,n.wk)()],eA.prototype,"quoteStatus",void 0),ex([(0,n.wk)()],eA.prototype,"quote",void 0),ex([(0,n.wk)()],eA.prototype,"amount",void 0),ex([(0,n.wk)()],eA.prototype,"namespace",void 0),ex([(0,n.wk)()],eA.prototype,"caipAddress",void 0),ex([(0,n.wk)()],eA.prototype,"profileName",void 0),ex([(0,n.wk)()],eA.prototype,"activeConnectorIds",void 0),ex([(0,n.wk)()],eA.prototype,"selectedExchange",void 0),eA=ex([(0,m.EM)("w3m-pay-loading-view")],eA),i(9419),i(41699);let ev=(0,a.AH)`
  :host {
    display: block;
  }
`,eI=class extends a.WF{render(){return(0,a.qy)`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};eI.styles=[ev],eI=function(e,t,i,a){var n,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}([(0,m.EM)("w3m-pay-fees-skeleton")],eI);let ek=(0,m.AH)`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }
`;var eN=function(e,t,i,a){var n,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let eS=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.quote=es.state.quote,this.unsubscribe.push(es.subscribeKey("quote",e=>this.quote=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=f.S.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString();return(0,a.qy)`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${e} ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(e=>this.renderFee(e)):null}
      </wui-flex>
    `}renderFee(e){let t="network"===e.id,i=f.S.formatNumber(e.amount||"0",{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(t){let t=o.W.getAllRequestedCaipNetworks().find(t=>A.y.isLowerCaseMatch(t.caipNetworkId,e.currency.network));return(0,a.qy)`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${i} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,s.J)(c.$.getNetworkImage(t))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${t?.name||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return(0,a.qy)`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${i} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};eS.styles=[ek],eN([(0,n.wk)()],eS.prototype,"quote",void 0),eS=eN([(0,m.EM)("w3m-pay-fees")],eS);let eP=(0,m.AH)`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:e})=>e[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:e})=>e[8]};
    height: ${({spacing:e})=>e[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var eT=function(e,t,i,a){var n,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let eC=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.selectedExchange=es.state.selectedExchange,this.unsubscribe.push(es.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=!!this.selectedExchange;return(0,a.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${e?null:(0,a.qy)`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};eC.styles=[eP],eT([(0,n.MZ)({type:Array})],eC.prototype,"selectedExchange",void 0),eC=eT([(0,m.EM)("w3m-pay-options-empty")],eC);let e$=(0,m.AH)`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`,e_=class extends a.WF{render(){return(0,a.qy)`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return(0,a.qy)`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};e_.styles=[e$],e_=function(e,t,i,a){var n,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}([(0,m.EM)("w3m-pay-options-skeleton")],e_);let eq=(0,m.AH)`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var eO=function(e,t,i,a){var n,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let eR=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect();let e=this.shadowRoot?.querySelector(".pay-options-container");e?.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){let e=this.shadowRoot?.querySelector(".pay-options-container");e&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),e?.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),this.resizeObserver?.observe(e),this.handleOptionsListScroll())}render(){return(0,a.qy)`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(e=>this.payOptionTemplate(e))}
      </wui-flex>
    `}payOptionTemplate(e){let{network:t,metadata:i,asset:n,amount:r="0"}=e,l=o.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===t),u=`${t}:${n}`,d=`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,p=f.S.bigNumber(r,{safe:!0}),m=p.gt(0);return(0,a.qy)`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>this.onSelect?.(e)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${(0,s.J)(i.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,s.J)(c.$.getNetworkImage(l))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${i.symbol}</wui-text>
            ${m?(0,a.qy)`<wui-text variant="sm-regular" color="secondary">
                  ${p.round(6).toString()} ${i.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${u===d?(0,a.qy)`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){let e=this.shadowRoot?.querySelector(".pay-options-container");e&&(e.scrollHeight>300?(e.style.setProperty("--options-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--options-scroll--top-opacity",m.z8.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--options-scroll--bottom-opacity",m.z8.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--options-mask-image","none"),e.style.setProperty("--options-scroll--top-opacity","0"),e.style.setProperty("--options-scroll--bottom-opacity","0")))}};eR.styles=[eq],eO([(0,n.MZ)({type:Array})],eR.prototype,"options",void 0),eO([(0,n.MZ)()],eR.prototype,"selectedPaymentAsset",void 0),eO([(0,n.MZ)()],eR.prototype,"onSelect",void 0),eR=eO([(0,m.EM)("w3m-pay-options")],eR);let eU=(0,m.AH)`
  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[5]};
    border-top-left-radius: ${({borderRadius:e})=>e[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var eD=function(e,t,i,a){var n,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};let eL={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton"},eF={eip155:{icon:eL.eip155,label:"EVM"},solana:{icon:eL.solana,label:"Solana"},bip122:{icon:eL.bip122,label:"Bitcoin"},ton:{icon:eL.ton,label:"Ton"}},eW=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=es.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=es.state.amount,this.recipient=es.state.recipient,this.activeConnectorIds=r.a.state.activeConnectorIds,this.selectedPaymentAsset=es.state.selectedPaymentAsset,this.selectedExchange=es.state.selectedExchange,this.isFetchingQuote=es.state.isFetchingQuote,this.quoteError=es.state.quoteError,this.quote=es.state.quote,this.isFetchingTokenBalances=es.state.isFetchingTokenBalances,this.tokenBalances=es.state.tokenBalances,this.isPaymentInProgress=es.state.isPaymentInProgress,this.exchangeUrlForQuote=es.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(es.subscribeKey("paymentAsset",e=>this.paymentAsset=e)),this.unsubscribe.push(es.subscribeKey("tokenBalances",e=>this.onTokenBalancesChanged(e))),this.unsubscribe.push(es.subscribeKey("isFetchingTokenBalances",e=>this.isFetchingTokenBalances=e)),this.unsubscribe.push(r.a.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(es.subscribeKey("selectedPaymentAsset",e=>this.selectedPaymentAsset=e)),this.unsubscribe.push(es.subscribeKey("isFetchingQuote",e=>this.isFetchingQuote=e)),this.unsubscribe.push(es.subscribeKey("quoteError",e=>this.quoteError=e)),this.unsubscribe.push(es.subscribeKey("quote",e=>this.quote=e)),this.unsubscribe.push(es.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(es.subscribeKey("recipient",e=>this.recipient=e)),this.unsubscribe.push(es.subscribeKey("isPaymentInProgress",e=>this.isPaymentInProgress=e)),this.unsubscribe.push(es.subscribeKey("selectedExchange",e=>this.selectedExchange=e)),this.unsubscribe.push(es.subscribeKey("exchangeUrlForQuote",e=>this.exchangeUrlForQuote=e)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(e=>e())}updated(e){super.updated(e),e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return(0,a.qy)`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){if(this.selectedExchange){let e=f.S.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return(0,a.qy)`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?(0,a.qy)`<wui-text variant="lg-regular" color="primary">
                ${f.S.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:(0,a.qy)`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}let e=x.w.getPlainAddress(this.caipAddress)??"",{name:t,image:i}=this.getWalletProperties({namespace:this.namespace}),{icon:n,label:r}=eF[this.namespace]??{};return(0,a.qy)`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,s.J)(this.profileName)}
          address=${(0,s.J)(e)}
          imageSrc=${(0,s.J)(i)}
          alt=${(0,s.J)(t)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,s.J)(r)}
          address=${(0,s.J)(e)}
          icon=${(0,s.J)(n)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${(0,s.J)(r)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){let e=o.W.state.activeChain;this.namespace=e,this.caipAddress=o.W.getAccountData(e)?.caipAddress,this.profileName=o.W.getAccountData(e)?.profileName??null,this.unsubscribe.push(o.W.subscribeChainProp("accountState",e=>this.onAccountStateChanged(e),e))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){let{chainId:t,chainNamespace:i}=w.C.parseCaipAddress(this.caipAddress),a=`${i}:${t}`;e=o.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===a)}await es.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){let{address:e}=this.caipAddress?w.C.parseCaipAddress(this.caipAddress):{};es.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let i=r.a.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};let a=c.$.getConnectorImage(i);return{name:i.name,image:a}}paymentOptionsViewTemplate(){return(0,a.qy)`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){let e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return(0,a.qy)`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(0===e.length)return(0,a.qy)`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;let t={disabled:this.isFetchingQuote};return(0,a.qy)`<w3m-pay-options
      class=${(0,el.H)(t)}
      .options=${e}
      .selectedPaymentAsset=${(0,s.J)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?(0,a.qy)`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:(0,a.qy)`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){let e=this.isFetchingQuote||this.isFetchingTokenBalances,t=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||!!this.quoteError,i=f.S.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?e||t?(0,a.qy)`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:(0,a.qy)`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:(0,a.qy)`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${e||t?(0,a.qy)`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:(0,a.qy)`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${X(i)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:e,isDisabled:t})}
      </wui-flex>
    `}actionButtonTemplate(e){let t=D(this.quote),{isLoading:i,isDisabled:n}=e,s="Pay";return t.length>1&&0===this.completedTransactionsCount&&(s="Approve"),(0,a.qy)`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${i||this.isPaymentInProgress}
        ?disabled=${n||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${s}
        ${i?null:(0,a.qy)`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(e=>{try{let t=o.W.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.chainId),i=e.address;if(!t)throw Error(`Target network not found for balance chainId "${e.chainId}"`);if(A.y.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))i="native";else if(x.w.isCaipAddress(i)){let{address:e}=w.C.parseCaipAddress(i);i=e}else if(!i)throw Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:i,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}catch(e){return null}}).filter(e=>!!e).filter(e=>{let{chainId:t}=w.C.parseCaipNetworkId(e.network),{chainId:i}=w.C.parseCaipNetworkId(this.paymentAsset.network);return!!A.y.isLowerCaseMatch(e.asset,this.paymentAsset.asset)||!this.selectedExchange||!A.y.isLowerCaseMatch(t.toString(),i.toString())}):[]}onTokenBalancesChanged(e){this.tokenBalances=e;let[t]=this.getPaymentAssetFromTokenBalances();t&&es.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await r.a.connect(),await u.W.open({view:"PayQuote"})}onAccountStateChanged(e){let{address:t}=this.caipAddress?w.C.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null,t){let{address:e}=this.caipAddress?w.C.parseCaipAddress(this.caipAddress):{};e?A.y.isLowerCaseMatch(e,t)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):u.W.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||es.setSelectedPaymentAsset(e)}async onTransfer(){let e=U(this.quote);if(e){if(!A.y.isLowerCaseMatch(this.selectedPaymentAsset?.asset,e.deposit.currency))throw Error("Quote asset is not the same as the selected payment asset");let t=this.selectedPaymentAsset?.amount??"0",i=f.S.formatNumber(e.deposit.amount,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!f.S.bigNumber(t).gte(i))return void p.P.showError("Insufficient funds");if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){let{address:t}=w.C.parseCaipAddress(this.caipAddress);await es.onTransfer({chainNamespace:this.namespace,fromAddress:t,toAddress:e.deposit.receiver,amount:i,paymentAsset:this.selectedPaymentAsset}),es.setRequestId(e.requestId),l.I.push("PayLoading")}}}async onSendTransactions(){let e=this.selectedPaymentAsset?.amount??"0",t=f.S.formatNumber(this.quote?.origin.amount??0,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!f.S.bigNumber(e).gte(t))return void p.P.showError("Insufficient funds");let i=D(this.quote),[a]=D(this.quote,this.completedTransactionsCount);a&&this.namespace&&(await es.onSendTransaction({namespace:this.namespace,transactionStep:a}),this.completedTransactionsCount+=1,this.completedTransactionsCount===i.length&&(es.setRequestId(a.requestId),l.I.push("PayLoading")))}onPayWithExchange(){if(this.exchangeUrlForQuote){let e=x.w.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;let t=U(this.quote);t&&es.setRequestId(t.requestId),es.initiatePayment(),l.I.push("PayLoading")}}resetAssetsState(){es.setSelectedPaymentAsset(null)}resetQuoteState(){es.resetQuoteState()}};async function eM(e){return es.handleOpenPay(e)}async function eB(e,t=3e5){if(t<=0)throw new k(v.INVALID_PAYMENT_CONFIG,"Timeout must be greater than 0");try{await eM(e)}catch(e){if(e instanceof k)throw e;throw new k(v.UNABLE_TO_INITIATE_PAYMENT,e.message)}return new Promise((e,i)=>{var a;let n=!1,s=setTimeout(()=>{n||(n=!0,c(),i(new k(v.GENERIC_PAYMENT_ERROR,"Payment timeout")))},t);function r(){if(n)return;let t=es.state.currentPayment,i=es.state.error,a=es.state.isPaymentInProgress;if(t?.status==="SUCCESS"){n=!0,c(),clearTimeout(s),e({success:!0,result:t.result});return}if(t?.status==="FAILED"){n=!0,c(),clearTimeout(s),e({success:!1,error:i||"Payment failed"});return}!i||a||t||(n=!0,c(),clearTimeout(s),e({success:!1,error:i}))}let o=eQ("currentPayment",r),c=(a=[o,eQ("error",r),eQ("isPaymentInProgress",r)],()=>{a.forEach(e=>{try{e()}catch{}})});r()})}function ej(){return es.getExchanges()}function ez(){return es.state.currentPayment?.result}function eG(){return es.state.error}function eY(){return es.state.isPaymentInProgress}function eQ(e,t){return es.subscribeKey(e,t)}eW.styles=eU,eD([(0,n.wk)()],eW.prototype,"profileName",void 0),eD([(0,n.wk)()],eW.prototype,"paymentAsset",void 0),eD([(0,n.wk)()],eW.prototype,"namespace",void 0),eD([(0,n.wk)()],eW.prototype,"caipAddress",void 0),eD([(0,n.wk)()],eW.prototype,"amount",void 0),eD([(0,n.wk)()],eW.prototype,"recipient",void 0),eD([(0,n.wk)()],eW.prototype,"activeConnectorIds",void 0),eD([(0,n.wk)()],eW.prototype,"selectedPaymentAsset",void 0),eD([(0,n.wk)()],eW.prototype,"selectedExchange",void 0),eD([(0,n.wk)()],eW.prototype,"isFetchingQuote",void 0),eD([(0,n.wk)()],eW.prototype,"quoteError",void 0),eD([(0,n.wk)()],eW.prototype,"quote",void 0),eD([(0,n.wk)()],eW.prototype,"isFetchingTokenBalances",void 0),eD([(0,n.wk)()],eW.prototype,"tokenBalances",void 0),eD([(0,n.wk)()],eW.prototype,"isPaymentInProgress",void 0),eD([(0,n.wk)()],eW.prototype,"exchangeUrlForQuote",void 0),eD([(0,n.wk)()],eW.prototype,"completedTransactionsCount",void 0),eW=eD([(0,m.EM)("w3m-pay-quote-view")],eW);let eH={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},eV={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},eK={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},eJ={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},eZ={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},eX={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},e0={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},e1={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},e3={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},e5={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},e2={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},e4={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},e6={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},e8={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}}}]);