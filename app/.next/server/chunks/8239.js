"use strict";exports.id=8239,exports.ids=[8239],exports.modules={8239:(a,b,c)=>{c.r(b),c.d(b,{PayController:()=>af,W3mPayLoadingView:()=>aw,W3mPayQuoteView:()=>aO,W3mPayView:()=>ai,arbitrumUSDC:()=>a_,arbitrumUSDT:()=>a4,baseETH:()=>aW,baseSepoliaETH:()=>aY,baseUSDC:()=>aX,ethereumUSDC:()=>aZ,ethereumUSDT:()=>a2,getExchanges:()=>aR,getIsPaymentInProgress:()=>aU,getPayError:()=>aT,getPayResult:()=>aS,openPay:()=>aP,optimismUSDC:()=>a$,optimismUSDT:()=>a3,pay:()=>aQ,polygonUSDC:()=>a0,polygonUSDT:()=>a5,solanaSOL:()=>a7,solanaUSDC:()=>a1,solanaUSDT:()=>a6});var d=c(29856),e=c(44500),f=c(22734),g=c(95209),h=c(57339),i=c(40190),j=c(87977),k=c(93175),l=c(69801),m=c(33504),n=c(74967);c(21238),c(58581),c(24307),c(79297),c(76968),c(96901),c(66162),c(20356),c(7805),c(61016),c(77041),c(72147);var o=c(26972),p=c(90062),q=c(85601),r=c(63363),s=c(31886),t=c(26641),u=c(13295),v=c(15471),w=c(6353);let x={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS",UNABLE_TO_GET_TOKEN_BALANCES:"UNABLE_TO_GET_TOKEN_BALANCES",UNABLE_TO_GET_QUOTE:"UNABLE_TO_GET_QUOTE",UNABLE_TO_GET_QUOTE_STATUS:"UNABLE_TO_GET_QUOTE_STATUS",INVALID_RECIPIENT_ADDRESS_FOR_ASSET:"INVALID_RECIPIENT_ADDRESS_FOR_ASSET"},y={[x.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[x.INVALID_RECIPIENT]:"Invalid recipient address",[x.INVALID_ASSET]:"Invalid asset specified",[x.INVALID_AMOUNT]:"Invalid payment amount",[x.INVALID_RECIPIENT_ADDRESS_FOR_ASSET]:"Invalid recipient address for the asset selected",[x.UNKNOWN_ERROR]:"Unknown payment error occurred",[x.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[x.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[x.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[x.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[x.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[x.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[x.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status",[x.UNABLE_TO_GET_TOKEN_BALANCES]:"Unable to get token balances",[x.UNABLE_TO_GET_QUOTE]:"Unable to get quote. Please choose a different token",[x.UNABLE_TO_GET_QUOTE_STATUS]:"Unable to get quote status"};class z extends Error{get message(){return y[this.code]}constructor(a,b){super(y[a]),this.name="AppKitPayError",this.code=a,this.details=b,Error.captureStackTrace&&Error.captureStackTrace(this,z)}}var A=c(82750),B=c(51048),C=c(23799);let D="reown_test";var E=c(19162),F=c(74077);async function G(a,b,c){if(b!==q.o.CHAIN.EVM)throw new z(x.INVALID_CHAIN_NAMESPACE);if(!c.fromAddress)throw new z(x.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.");let d="string"==typeof c.amount?parseFloat(c.amount):c.amount;if(isNaN(d))throw new z(x.INVALID_PAYMENT_CONFIG);let e=a.metadata?.decimals??18,f=l.x.parseUnits(d.toString(),e);if("bigint"!=typeof f)throw new z(x.GENERIC_PAYMENT_ERROR);return await l.x.sendTransaction({chainNamespace:b,to:c.recipient,address:c.fromAddress,value:f,data:"0x"})??void 0}async function H(a,b){if(!b.fromAddress)throw new z(x.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.");let c=a.asset,d=b.recipient,e=Number(a.metadata.decimals),f=l.x.parseUnits(b.amount.toString(),e);if(void 0===f)throw new z(x.GENERIC_PAYMENT_ERROR);return await l.x.writeContract({fromAddress:b.fromAddress,tokenAddress:c,args:[d,f],method:"transfer",abi:E.v.getERC20Abi(c),chainNamespace:q.o.CHAIN.EVM})??void 0}async function I(a,b){if(a!==q.o.CHAIN.SOLANA)throw new z(x.INVALID_CHAIN_NAMESPACE);if(!b.fromAddress)throw new z(x.INVALID_PAYMENT_CONFIG,"fromAddress is required for Solana payments.");let c="string"==typeof b.amount?parseFloat(b.amount):b.amount;if(isNaN(c)||c<=0)throw new z(x.INVALID_PAYMENT_CONFIG,"Invalid payment amount.");try{if(!F.G.getProvider(a))throw new z(x.GENERIC_PAYMENT_ERROR,"No Solana provider available.");let d=await l.x.sendTransaction({chainNamespace:q.o.CHAIN.SOLANA,to:b.recipient,value:c,tokenMint:b.tokenMint});if(!d)throw new z(x.GENERIC_PAYMENT_ERROR,"Transaction failed.");return d}catch(a){if(a instanceof z)throw a;throw new z(x.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${a}`)}}async function J({sourceToken:a,toToken:b,amount:c,recipient:d}){let e=l.x.parseUnits(c,a.metadata.decimals),f=l.x.parseUnits(c,b.metadata.decimals);return Promise.resolve({type:ab,origin:{amount:e?.toString()??"0",currency:a},destination:{amount:f?.toString()??"0",currency:b},fees:[{id:"service",label:"Service Fee",amount:"0",currency:b}],steps:[{requestId:ab,type:"deposit",deposit:{amount:e?.toString()??"0",currency:a.asset,receiver:d}}],timeInSeconds:6})}function K(a){if(!a)return null;let b=a.steps[0];return b&&b.type===ac?b:null}function L(a,b=0){if(!a)return[];let c=a.steps.filter(a=>a.type===ad),d=c.filter((a,c)=>c+1>b);return c.length>0&&c.length<3?d:[]}let M=new A.Z({baseUrl:u.w.getApiUrl(),clientId:null});class N extends Error{}function O(){let{projectId:a,sdkType:b,sdkVersion:c}=B.H.state;return{projectId:a,st:b||"appkit",sv:c||"html-wagmi-4.2.2"}}async function P(a,b){let c=function(){let a=B.H.getSnapshot().projectId;return`https://rpc.walletconnect.org/v1/json-rpc?projectId=${a}`}(),{sdkType:d,sdkVersion:e,projectId:f}=B.H.getSnapshot(),g={jsonrpc:"2.0",id:1,method:a,params:{...b||{},st:d,sv:e,projectId:f}},h=await fetch(c,{method:"POST",body:JSON.stringify(g),headers:{"Content-Type":"application/json"}}),i=await h.json();if(i.error)throw new N(i.error.message);return i}async function Q(a){return(await P("reown_getExchanges",a)).result}async function R(a){return(await P("reown_getExchangePayUrl",a)).result}async function S(a){return(await P("reown_getExchangeBuyStatus",a)).result}async function T(a){let b=s.S.bigNumber(a.amount).times(10**a.toToken.metadata.decimals).toString(),{chainId:c,chainNamespace:d}=r.C.parseCaipNetworkId(a.sourceToken.network),{chainId:e,chainNamespace:f}=r.C.parseCaipNetworkId(a.toToken.network),g="native"===a.sourceToken.asset?(0,C.NH)(d):a.sourceToken.asset,h="native"===a.toToken.asset?(0,C.NH)(f):a.toToken.asset;return await M.post({path:"/appkit/v1/transfers/quote",body:{user:a.address,originChainId:c.toString(),originCurrency:g,destinationChainId:e.toString(),destinationCurrency:h,recipient:a.recipient,amount:b},params:O()})}async function U(a){let b=w.y.isLowerCaseMatch(a.sourceToken.network,a.toToken.network),c=w.y.isLowerCaseMatch(a.sourceToken.asset,a.toToken.asset);return b&&c?J(a):T(a)}async function V(a){return await M.get({path:"/appkit/v1/transfers/status",params:{requestId:a.requestId,...O()}})}async function W(a){return await M.get({path:`/appkit/v1/transfers/assets/exchanges/${a}`,params:O()})}let X=["eip155","solana"],Y={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},Z={56:"714",204:"714"};function $(a,b){let{chainNamespace:c,chainId:d}=r.C.parseCaipNetworkId(a),e=Y[c];if(!e)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${c}`);let f=e.native.assetNamespace,g=e.native.assetReference;"native"!==b?(f=e.defaultTokenNamespace,g=b):"eip155"===c&&Z[d]&&(g=Z[d]);let h=`${c}:${d}`;return`${h}/${f}:${g}`}function _(a){let b=s.S.bigNumber(a,{safe:!0});return b.lt(.001)?"<0.001":b.round(4).toString()}let aa="unknown",ab="direct-transfer",ac="deposit",ad="transaction",ae=(0,o.BX)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[q.o.CHAIN.EVM]:[],[q.o.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),af={state:ae,subscribe:a=>(0,o.B1)(ae,()=>a(ae)),subscribeKey:(a,b)=>(0,p.u$)(ae,a,b),async handleOpenPay(a){this.resetState(),this.setPaymentConfig(a),this.initializeAnalytics();let{chainNamespace:b}=r.C.parseCaipNetworkId(af.state.paymentAsset.network);if(!u.w.isAddress(af.state.recipient,b))throw new z(x.INVALID_RECIPIENT_ADDRESS_FOR_ASSET,`Provide valid recipient address for namespace "${b}"`);await this.prepareTokenLogo(),ae.isConfigured=!0,t.E.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:ae.exchanges,configuration:{network:ae.paymentAsset.network,asset:ae.paymentAsset.asset,recipient:ae.recipient,amount:ae.amount}}}),await k.W.open({view:"Pay"})},resetState(){ae.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},ae.recipient="0x0",ae.amount=0,ae.isConfigured=!1,ae.error=null,ae.isPaymentInProgress=!1,ae.isLoading=!1,ae.currentPayment=void 0,ae.selectedExchange=void 0,ae.exchangeUrlForQuote=void 0,ae.requestId=void 0},resetQuoteState(){ae.quote=void 0,ae.quoteStatus="waiting",ae.quoteError=null,ae.isFetchingQuote=!1,ae.requestId=void 0},setPaymentConfig(a){if(!a.paymentAsset)throw new z(x.INVALID_PAYMENT_CONFIG);try{ae.choice=a.choice??"pay",ae.paymentAsset=a.paymentAsset,ae.recipient=a.recipient,ae.amount=a.amount,ae.openInNewTab=a.openInNewTab??!0,ae.redirectUrl=a.redirectUrl,ae.payWithExchange=a.payWithExchange,ae.error=null}catch(a){throw new z(x.INVALID_PAYMENT_CONFIG,a.message)}},setSelectedPaymentAsset(a){ae.selectedPaymentAsset=a},setSelectedExchange(a){ae.selectedExchange=a},setRequestId(a){ae.requestId=a},setPaymentInProgress(a){ae.isPaymentInProgress=a},getPaymentAsset:()=>ae.paymentAsset,getExchanges:()=>ae.exchanges,async fetchExchanges(){try{ae.isLoading=!0,ae.exchanges=(await Q({page:0})).exchanges.slice(0,2)}catch(a){throw m.P.showError(y.UNABLE_TO_GET_EXCHANGES),new z(x.UNABLE_TO_GET_EXCHANGES)}finally{ae.isLoading=!1}},async getAvailableExchanges(a){try{let b=a?.asset&&a?.network?$(a.network,a.asset):void 0;return await Q({page:a?.page??0,asset:b,amount:a?.amount?.toString()})}catch(a){throw new z(x.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(a,b,c=!1){try{let d=Number(b.amount),e=await R({exchangeId:a,asset:$(b.network,b.asset),amount:d.toString(),recipient:`${b.network}:${b.recipient}`});return t.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:a},configuration:{network:b.network,asset:b.asset,recipient:b.recipient,amount:d},currentPayment:{type:"exchange",exchangeId:a},headless:c}}),c&&(this.initiatePayment(),t.E.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:ae.paymentId||aa,configuration:{network:b.network,asset:b.asset,recipient:b.recipient,amount:d},currentPayment:{type:"exchange",exchangeId:a}}})),e}catch(a){if(a instanceof Error&&a.message.includes("is not supported"))throw new z(x.ASSET_NOT_SUPPORTED);throw Error(a.message)}},async generateExchangeUrlForQuote({exchangeId:a,paymentAsset:b,amount:c,recipient:d}){let e=await R({exchangeId:a,asset:$(b.network,b.asset),amount:c.toString(),recipient:d});ae.exchangeSessionId=e.sessionId,ae.exchangeUrlForQuote=e.url},async openPayUrl(a,b,c=!1){try{let d=await this.getPayUrl(a.exchangeId,b,c);if(!d)throw new z(x.UNABLE_TO_GET_PAY_URL);let e=a.openInNewTab??!0;return u.w.openHref(d.url,e?"_blank":"_self"),d}catch(a){throw a instanceof z?ae.error=a.message:ae.error=y.GENERIC_PAYMENT_ERROR,new z(x.UNABLE_TO_GET_PAY_URL)}},async onTransfer({chainNamespace:a,fromAddress:b,toAddress:c,amount:d,paymentAsset:e}){if(ae.currentPayment={type:"wallet",status:"IN_PROGRESS"},!ae.isPaymentInProgress)try{this.initiatePayment();let f=h.W.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===e.network);if(!f)throw Error("Target network not found");let g=h.W.state.activeCaipNetwork;switch(!w.y.isLowerCaseMatch(g?.caipNetworkId,f.caipNetworkId)&&await h.W.switchActiveNetwork(f),a){case q.o.CHAIN.EVM:"native"===e.asset&&(ae.currentPayment.result=await G(e,a,{recipient:c,amount:d,fromAddress:b})),e.asset.startsWith("0x")&&(ae.currentPayment.result=await H(e,{recipient:c,amount:d,fromAddress:b})),ae.currentPayment.status="SUCCESS";break;case q.o.CHAIN.SOLANA:ae.currentPayment.result=await I(a,{recipient:c,amount:d,fromAddress:b,tokenMint:"native"===e.asset?void 0:e.asset}),ae.currentPayment.status="SUCCESS";break;default:throw new z(x.INVALID_CHAIN_NAMESPACE)}}catch(a){throw a instanceof z?ae.error=a.message:ae.error=y.GENERIC_PAYMENT_ERROR,ae.currentPayment.status="FAILED",m.P.showError(ae.error),a}finally{ae.isPaymentInProgress=!1}},async onSendTransaction(a){try{let{namespace:b,transactionStep:c}=a;af.initiatePayment();let d=h.W.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===ae.paymentAsset?.network);if(!d)throw Error("Target network not found");let e=h.W.state.activeCaipNetwork;if(w.y.isLowerCaseMatch(e?.caipNetworkId,d.caipNetworkId)||await h.W.switchActiveNetwork(d),b===q.o.CHAIN.EVM){let{from:a,to:d,data:e,value:f}=c.transaction;await l.x.sendTransaction({address:a,to:d,data:e,value:BigInt(f),chainNamespace:b})}else if(b===q.o.CHAIN.SOLANA){let{instructions:a}=c.transaction;await l.x.writeSolanaTransaction({instructions:a})}}catch(a){throw a instanceof z?ae.error=a.message:ae.error=y.GENERIC_PAYMENT_ERROR,m.P.showError(ae.error),a}finally{ae.isPaymentInProgress=!1}},getExchangeById:a=>ae.exchanges.find(b=>b.id===a),validatePayConfig(a){let{paymentAsset:b,recipient:c,amount:d}=a;if(!b)throw new z(x.INVALID_PAYMENT_CONFIG);if(!c)throw new z(x.INVALID_RECIPIENT);if(!b.asset)throw new z(x.INVALID_ASSET);if(null==d||d<=0)throw new z(x.INVALID_AMOUNT)},async handlePayWithExchange(a){try{ae.currentPayment={type:"exchange",exchangeId:a};let{network:b,asset:c}=ae.paymentAsset,d={network:b,asset:c,amount:ae.amount,recipient:ae.recipient},e=await this.getPayUrl(a,d);if(!e)throw new z(x.UNABLE_TO_INITIATE_PAYMENT);return ae.currentPayment.sessionId=e.sessionId,ae.currentPayment.status="IN_PROGRESS",ae.currentPayment.exchangeId=a,this.initiatePayment(),{url:e.url,openInNewTab:ae.openInNewTab}}catch(a){return a instanceof z?ae.error=a.message:ae.error=y.GENERIC_PAYMENT_ERROR,ae.isPaymentInProgress=!1,m.P.showError(ae.error),null}},async getBuyStatus(a,b){try{let c=await S({sessionId:b,exchangeId:a});return("SUCCESS"===c.status||"FAILED"===c.status)&&t.E.sendEvent({type:"track",event:"SUCCESS"===c.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===c.status?u.w.parseError(ae.error):void 0,source:"pay",paymentId:ae.paymentId||aa,configuration:{network:ae.paymentAsset.network,asset:ae.paymentAsset.asset,recipient:ae.recipient,amount:ae.amount},currentPayment:{type:"exchange",exchangeId:ae.currentPayment?.exchangeId,sessionId:ae.currentPayment?.sessionId,result:c.txHash}}}),c}catch(a){throw new z(x.UNABLE_TO_GET_BUY_STATUS)}},async fetchTokensFromEOA({caipAddress:a,caipNetwork:b,namespace:c}){if(!a)return[];let{address:d}=r.C.parseCaipAddress(a),e=b;return c===q.o.CHAIN.EVM&&(e=void 0),await v.Z.getMyTokensWithBalance({address:d,caipNetwork:e})},async fetchTokensFromExchange(){if(!ae.selectedExchange)return[];let a=Object.values((await W(ae.selectedExchange.id)).assets).flat();return await Promise.all(a.map(async a=>{let b={chainId:a.network,address:`${a.network}:${a.asset}`,symbol:a.metadata.symbol,name:a.metadata.name,iconUrl:a.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:a.metadata.decimals.toString()}},{chainNamespace:c}=r.C.parseCaipNetworkId(b.chainId),d=b.address;if(u.w.isCaipAddress(d)){let{address:a}=r.C.parseCaipAddress(d);d=a}return b.iconUrl=await i.$.getImageByToken(d??"",c).catch(()=>void 0)??"",b}))},async fetchTokens({caipAddress:a,caipNetwork:b,namespace:c}){try{ae.isFetchingTokenBalances=!0;let d=ae.selectedExchange?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:a,caipNetwork:b,namespace:c}),e=await d;ae.tokenBalances={...ae.tokenBalances,[c]:e}}catch(b){let a=b instanceof Error?b.message:"Unable to get token balances";m.P.showError(a)}finally{ae.isFetchingTokenBalances=!1}},async fetchQuote({amount:a,address:b,sourceToken:c,toToken:d,recipient:e}){try{af.resetQuoteState(),ae.isFetchingQuote=!0;let f=await U({amount:a,address:ae.selectedExchange?void 0:b,sourceToken:c,toToken:d,recipient:e});if(ae.selectedExchange){let a=K(f);if(a){let b=`${c.network}:${a.deposit.receiver}`,d=s.S.formatNumber(a.deposit.amount,{decimals:c.metadata.decimals??0,round:8});await af.generateExchangeUrlForQuote({exchangeId:ae.selectedExchange.id,paymentAsset:c,amount:d.toString(),recipient:b})}}ae.quote=f}catch(b){let a=y.UNABLE_TO_GET_QUOTE;if(b instanceof Error&&b.cause&&b.cause instanceof Response)try{let c=await b.cause.json();c.error&&"string"==typeof c.error&&(a=c.error)}catch{}throw ae.quoteError=a,m.P.showError(a),new z(x.UNABLE_TO_GET_QUOTE)}finally{ae.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:a}){try{if(a===ab){let a=ae.selectedExchange,b=ae.exchangeSessionId;if(a&&b){switch((await this.getBuyStatus(a.id,b)).status){case"IN_PROGRESS":case"UNKNOWN":default:ae.quoteStatus="waiting";break;case"SUCCESS":ae.quoteStatus="success",ae.isPaymentInProgress=!1;break;case"FAILED":ae.quoteStatus="failure",ae.isPaymentInProgress=!1}return}ae.quoteStatus="success";return}let{status:b}=await V({requestId:a});ae.quoteStatus=b}catch{throw ae.quoteStatus="failure",new z(x.UNABLE_TO_GET_QUOTE_STATUS)}},initiatePayment(){ae.isPaymentInProgress=!0,ae.paymentId=crypto.randomUUID()},initializeAnalytics(){ae.analyticsSet||(ae.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",a=>{if(ae.currentPayment?.status&&"UNKNOWN"!==ae.currentPayment.status){let a={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[ae.currentPayment.status];t.E.sendEvent({type:"track",event:a,properties:{message:"FAILED"===ae.currentPayment.status?u.w.parseError(ae.error):void 0,source:"pay",paymentId:ae.paymentId||aa,configuration:{network:ae.paymentAsset.network,asset:ae.paymentAsset.asset,recipient:ae.recipient,amount:ae.amount},currentPayment:{type:ae.currentPayment.type,exchangeId:ae.currentPayment.exchangeId,sessionId:ae.currentPayment.sessionId,result:ae.currentPayment.result}}})}}))},async prepareTokenLogo(){if(!ae.paymentAsset.metadata.logoURI)try{let{chainNamespace:a}=r.C.parseCaipNetworkId(ae.paymentAsset.network),b=await i.$.getImageByToken(ae.paymentAsset.asset,a);ae.paymentAsset.metadata.logoURI=b}catch{}}},ag=(0,n.AH)`
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
    border-radius: ${({borderRadius:a})=>a.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:a})=>a.round};
    border: 2px solid ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:a})=>a[8]};
    border-top-left-radius: ${({borderRadius:a})=>a[8]};
  }
`;var ah=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ai=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.amount=af.state.amount,this.namespace=void 0,this.paymentAsset=af.state.paymentAsset,this.activeConnectorIds=g.a.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=af.state.exchanges,this.isLoading=af.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(af.subscribeKey("amount",a=>this.amount=a)),this.unsubscribe.push(g.a.subscribeKey("activeConnectorIds",a=>this.activeConnectorIds=a)),this.unsubscribe.push(af.subscribeKey("exchanges",a=>this.exchanges=a)),this.unsubscribe.push(af.subscribeKey("isLoading",a=>this.isLoading=a)),af.fetchExchanges(),af.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return(0,d.qy)`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return(0,d.qy)`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){let a=h.W.state.activeChain;this.namespace=a,this.caipAddress=h.W.getAccountData(a)?.caipAddress,this.unsubscribe.push(h.W.subscribeChainProp("accountState",a=>{this.caipAddress=a?.caipAddress},a))}paymentDetailsTemplate(){let a=h.W.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===this.paymentAsset.network);return(0,d.qy)`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${_(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${a?.name||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${(0,f.J)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,f.J)(i.$.getNetworkImage(a))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return!function(a){let{chainNamespace:b}=r.C.parseCaipNetworkId(a);return X.includes(b)}(this.paymentAsset.network)?(0,d.qy)``:this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate()}connectedWalletTemplate(){let{name:a,image:b}=this.getWalletProperties({namespace:this.namespace});return(0,d.qy)`
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
          imageSrc=${(0,f.J)(b)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${a}</wui-text>
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
    `}disconnectedWalletTemplate(){return(0,d.qy)`<wui-list-item
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
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return(0,d.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;let a=this.exchanges.filter(a=>!function(a){let b=h.W.getAllRequestedCaipNetworks().find(b=>b.caipNetworkId===a.network);return!!b&&!!b.testnet}(this.paymentAsset)?a.id!==D:a.id===D);return 0===a.length?(0,d.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:a.map(a=>(0,d.qy)`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(a)}
          data-testid="exchange-option-${a.id}"
          ?chevron=${!0}
          imageSrc=${(0,f.J)(a.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${a.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return(0,d.qy)`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw Error("Namespace not found");this.caipAddress?j.I.push("PayQuote"):(await g.a.connect(),await k.W.open({view:"PayQuote"}))}onExchangePayment(a){af.setSelectedExchange(a),j.I.push("PayQuote")}async onDisconnect(){try{await l.x.disconnect(),await k.W.open({view:"Pay"})}catch{console.error("Failed to disconnect"),m.P.showError("Failed to disconnect")}}getWalletProperties({namespace:a}){if(!a)return{name:void 0,image:void 0};let b=this.activeConnectorIds[a];if(!b)return{name:void 0,image:void 0};let c=g.a.getConnector({id:b,namespace:a});if(!c)return{name:void 0,image:void 0};let d=i.$.getConnectorImage(c);return{name:c.name,image:d}}};ai.styles=ag,ah([(0,e.wk)()],ai.prototype,"amount",void 0),ah([(0,e.wk)()],ai.prototype,"namespace",void 0),ah([(0,e.wk)()],ai.prototype,"paymentAsset",void 0),ah([(0,e.wk)()],ai.prototype,"activeConnectorIds",void 0),ah([(0,e.wk)()],ai.prototype,"caipAddress",void 0),ah([(0,e.wk)()],ai.prototype,"exchanges",void 0),ah([(0,e.wk)()],ai.prototype,"isLoading",void 0),ai=ah([(0,n.EM)("w3m-pay-view")],ai);var aj=c(66705),ak=c(27680),al=c(77292),am=c(14143);let an=(0,ak.AH)`
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
`;var ao=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ap={"accent-primary":ak.f.tokens.core.backgroundAccentPrimary},aq=class extends d.WF{constructor(){super(...arguments),this.rings=3,this.duration=2,this.opacity=.3,this.size="200px",this.variant="accent-primary"}render(){let a=ap[this.variant];this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${a};
      --pulse-opacity: ${this.opacity};
    `;let b=Array.from({length:this.rings},(a,b)=>this.renderRing(b,this.rings));return(0,d.qy)`
      <div class="pulse-container">
        <div class="pulse-rings">${b}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(a,b){let c=a/b*this.duration,e=`animation-delay: ${c}s;`;return(0,d.qy)`<div class="pulse-ring" style=${e}></div>`}};aq.styles=[al.W5,an],ao([(0,e.MZ)({type:Number})],aq.prototype,"rings",void 0),ao([(0,e.MZ)({type:Number})],aq.prototype,"duration",void 0),ao([(0,e.MZ)({type:Number})],aq.prototype,"opacity",void 0),ao([(0,e.MZ)()],aq.prototype,"size",void 0),ao([(0,e.MZ)()],aq.prototype,"variant",void 0),aq=ao([(0,am.E)("wui-pulse")],aq);let ar=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],as=["success","submitted","failure","timeout","refund"],at=(0,n.AH)`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:a})=>a[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    border: 3px solid ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    border: 3px solid ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:a})=>a.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:a})=>a.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border: 1px solid ${({tokens:a})=>a.theme.foregroundSecondary};
    border-radius: ${({borderRadius:a})=>a[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:a})=>a[6]};
    border-top-left-radius: ${({borderRadius:a})=>a[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:a})=>a[1]} ${({spacing:a})=>a[2]};
    border-radius: ${({borderRadius:a})=>a[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:a})=>a.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:a})=>a.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:a})=>a.round};
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:a})=>a.round};
    border: 2px solid ${({tokens:a})=>a.theme.backgroundPrimary};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:a})=>a.core.backgroundSuccess};
  }
`;var au=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let av={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]},aw=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=af.state.paymentAsset,this.quoteStatus=af.state.quoteStatus,this.quote=af.state.quote,this.amount=af.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=g.a.state.activeConnectorIds,this.selectedExchange=af.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(af.subscribeKey("quoteStatus",a=>this.quoteStatus=a),af.subscribeKey("quote",a=>this.quote=a),g.a.subscribeKey("activeConnectorIds",a=>this.activeConnectorIds=a),af.subscribeKey("selectedExchange",a=>this.selectedExchange=a))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(a=>a())}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){let a=_(this.amount||"0"),b=this.paymentAsset.metadata.symbol??"Unknown",c=h.W.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===this.paymentAsset.network),e="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus;return"success"===this.quoteStatus||"submitted"===this.quoteStatus?(0,d.qy)`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:e?(0,d.qy)`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:(0,d.qy)`
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
                src=${(0,f.J)(i.$.getNetworkImage(c))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${a} ${b}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return(0,d.qy)`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){let a=this.getStepsWithStatus();return(0,d.qy)`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${a.map(a=>this.renderStep(a))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){let a="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus,b="success"===this.quoteStatus||"submitted"===this.quoteStatus;if(a)return(0,d.qy)`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(b)return(0,d.qy)`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;let c=this.quote?.timeInSeconds??0;return(0,d.qy)`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${c} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){let a=h.W.getAllRequestedCaipNetworks().find(a=>{let b=this.quote?.origin.currency.network;if(!b)return!1;let{chainId:c}=r.C.parseCaipNetworkId(b);return w.y.isLowerCaseMatch(a.id.toString(),c.toString())}),b=_(s.S.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString()),c=this.quote?.origin.currency.metadata.symbol??"Unknown";return(0,d.qy)`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${b}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${c}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,f.J)(i.$.getNetworkImage(a))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${a?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return(0,d.qy)`
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
    `}renderWalletText(){let{image:a}=this.getWalletProperties({namespace:this.namespace}),{address:b}=this.caipAddress?r.C.parseCaipAddress(this.caipAddress):{},c=this.selectedExchange?.name;return this.selectedExchange?(0,d.qy)`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${c}</wui-text>
          <wui-image src=${(0,f.J)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:(0,d.qy)`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${n.Zv.getTruncateString({string:this.profileName||b||c||"",charsStart:this.profileName?16:4,charsEnd:6*!this.profileName,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${(0,f.J)(a)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?ar.map(a=>({...a,status:"failed"})):ar.map(a=>{let b=(av[a.id]??[]).includes(this.quoteStatus)?"completed":"pending";return{...a,status:b}})}renderStep({title:a,icon:b,status:c}){return(0,d.qy)`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${b} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,aj.H)({"step-icon-box":!0,success:"completed"===c})}>
            ${this.renderStatusIndicator(c)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${a}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(a){return"completed"===a?(0,d.qy)`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:"failed"===a?(0,d.qy)`<wui-icon size="sm" color="error" name="close"></wui-icon>`:"pending"===a?(0,d.qy)`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval(()=>{this.fetchQuoteStatus()},3e3))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){let a=af.state.requestId;if(!a||as.includes(this.quoteStatus))this.stopPolling();else try{await af.fetchQuoteStatus({requestId:a}),as.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){let a=h.W.state.activeChain;this.namespace=a,this.caipAddress=h.W.getAccountData(a)?.caipAddress,this.profileName=h.W.getAccountData(a)?.profileName??null,this.unsubscribe.push(h.W.subscribeChainProp("accountState",a=>{this.caipAddress=a?.caipAddress,this.profileName=a?.profileName??null},a))}getWalletProperties({namespace:a}){if(!a)return{name:void 0,image:void 0};let b=this.activeConnectorIds[a];if(!b)return{name:void 0,image:void 0};let c=g.a.getConnector({id:b,namespace:a});if(!c)return{name:void 0,image:void 0};let d=i.$.getConnectorImage(c);return{name:c.name,image:d}}};aw.styles=at,au([(0,e.wk)()],aw.prototype,"paymentAsset",void 0),au([(0,e.wk)()],aw.prototype,"quoteStatus",void 0),au([(0,e.wk)()],aw.prototype,"quote",void 0),au([(0,e.wk)()],aw.prototype,"amount",void 0),au([(0,e.wk)()],aw.prototype,"namespace",void 0),au([(0,e.wk)()],aw.prototype,"caipAddress",void 0),au([(0,e.wk)()],aw.prototype,"profileName",void 0),au([(0,e.wk)()],aw.prototype,"activeConnectorIds",void 0),au([(0,e.wk)()],aw.prototype,"selectedExchange",void 0),aw=au([(0,n.EM)("w3m-pay-loading-view")],aw),c(99796),c(22855);let ax=(0,d.AH)`
  :host {
    display: block;
  }
`,ay=class extends d.WF{render(){return(0,d.qy)`
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
    `}};ay.styles=[ax],ay=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,n.EM)("w3m-pay-fees-skeleton")],ay);let az=(0,n.AH)`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a.round};
  }
`;var aA=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aB=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.quote=af.state.quote,this.unsubscribe.push(af.subscribeKey("quote",a=>this.quote=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=s.S.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString();return(0,d.qy)`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${a} ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(a=>this.renderFee(a)):null}
      </wui-flex>
    `}renderFee(a){let b="network"===a.id,c=s.S.formatNumber(a.amount||"0",{decimals:a.currency.metadata.decimals??0,round:6}).toString();if(b){let b=h.W.getAllRequestedCaipNetworks().find(b=>w.y.isLowerCaseMatch(b.caipNetworkId,a.currency.network));return(0,d.qy)`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${a.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${c} ${a.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,f.J)(i.$.getNetworkImage(b))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${b?.name||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return(0,d.qy)`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${a.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${c} ${a.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};aB.styles=[az],aA([(0,e.wk)()],aB.prototype,"quote",void 0),aB=aA([(0,n.EM)("w3m-pay-fees")],aB);let aC=(0,n.AH)`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:a})=>a[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:a})=>a[8]};
    height: ${({spacing:a})=>a[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var aD=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aE=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.selectedExchange=af.state.selectedExchange,this.unsubscribe.push(af.subscribeKey("selectedExchange",a=>this.selectedExchange=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=!!this.selectedExchange;return(0,d.qy)`
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

        ${a?null:(0,d.qy)`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};aE.styles=[aC],aD([(0,e.MZ)({type:Array})],aE.prototype,"selectedExchange",void 0),aE=aD([(0,n.EM)("w3m-pay-options-empty")],aE);let aF=(0,n.AH)`
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
    border-radius: ${({borderRadius:a})=>a[4]};
    padding: ${({spacing:a})=>a[3]};
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
    border: 2px solid ${({tokens:a})=>a.theme.foregroundSecondary};
  }
`,aG=class extends d.WF{render(){return(0,d.qy)`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return(0,d.qy)`
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
    `}};aG.styles=[aF],aG=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,n.EM)("w3m-pay-options-skeleton")],aG);let aH=(0,n.AH)`
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
    border-radius: ${({borderRadius:a})=>a[4]};
    padding: ${({spacing:a})=>a[3]};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:a})=>a.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:a})=>a.round};
    border: 2px solid ${({tokens:a})=>a.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    }
  }
`;var aI=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aJ=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),this.resizeObserver?.disconnect();let a=this.shadowRoot?.querySelector(".pay-options-container");a?.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){let a=this.shadowRoot?.querySelector(".pay-options-container");a&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),a?.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),this.resizeObserver?.observe(a),this.handleOptionsListScroll())}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(a=>this.payOptionTemplate(a))}
      </wui-flex>
    `}payOptionTemplate(a){let{network:b,metadata:c,asset:e,amount:g="0"}=a,j=h.W.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===b),k=`${b}:${e}`,l=`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,m=s.S.bigNumber(g,{safe:!0}),n=m.gt(0);return(0,d.qy)`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>this.onSelect?.(a)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${(0,f.J)(c.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,f.J)(i.$.getNetworkImage(j))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${c.symbol}</wui-text>
            ${n?(0,d.qy)`<wui-text variant="sm-regular" color="secondary">
                  ${m.round(6).toString()} ${c.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${k===l?(0,d.qy)`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){let a=this.shadowRoot?.querySelector(".pay-options-container");a&&(a.scrollHeight>300?(a.style.setProperty("--options-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`),a.style.setProperty("--options-scroll--top-opacity",n.z8.interpolate([0,50],[0,1],a.scrollTop).toString()),a.style.setProperty("--options-scroll--bottom-opacity",n.z8.interpolate([0,50],[0,1],a.scrollHeight-a.scrollTop-a.offsetHeight).toString())):(a.style.setProperty("--options-mask-image","none"),a.style.setProperty("--options-scroll--top-opacity","0"),a.style.setProperty("--options-scroll--bottom-opacity","0")))}};aJ.styles=[aH],aI([(0,e.MZ)({type:Array})],aJ.prototype,"options",void 0),aI([(0,e.MZ)()],aJ.prototype,"selectedPaymentAsset",void 0),aI([(0,e.MZ)()],aJ.prototype,"onSelect",void 0),aJ=aI([(0,n.EM)("w3m-pay-options")],aJ);let aK=(0,n.AH)`
  .payment-methods-container {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:a})=>a[5]};
    border-top-left-radius: ${({borderRadius:a})=>a[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    border-radius: ${({borderRadius:a})=>a[5]};
    padding: ${({spacing:a})=>a[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var aL=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aM={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton"},aN={eip155:{icon:aM.eip155,label:"EVM"},solana:{icon:aM.solana,label:"Solana"},bip122:{icon:aM.bip122,label:"Bitcoin"},ton:{icon:aM.ton,label:"Ton"}},aO=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=af.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=af.state.amount,this.recipient=af.state.recipient,this.activeConnectorIds=g.a.state.activeConnectorIds,this.selectedPaymentAsset=af.state.selectedPaymentAsset,this.selectedExchange=af.state.selectedExchange,this.isFetchingQuote=af.state.isFetchingQuote,this.quoteError=af.state.quoteError,this.quote=af.state.quote,this.isFetchingTokenBalances=af.state.isFetchingTokenBalances,this.tokenBalances=af.state.tokenBalances,this.isPaymentInProgress=af.state.isPaymentInProgress,this.exchangeUrlForQuote=af.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(af.subscribeKey("paymentAsset",a=>this.paymentAsset=a)),this.unsubscribe.push(af.subscribeKey("tokenBalances",a=>this.onTokenBalancesChanged(a))),this.unsubscribe.push(af.subscribeKey("isFetchingTokenBalances",a=>this.isFetchingTokenBalances=a)),this.unsubscribe.push(g.a.subscribeKey("activeConnectorIds",a=>this.activeConnectorIds=a)),this.unsubscribe.push(af.subscribeKey("selectedPaymentAsset",a=>this.selectedPaymentAsset=a)),this.unsubscribe.push(af.subscribeKey("isFetchingQuote",a=>this.isFetchingQuote=a)),this.unsubscribe.push(af.subscribeKey("quoteError",a=>this.quoteError=a)),this.unsubscribe.push(af.subscribeKey("quote",a=>this.quote=a)),this.unsubscribe.push(af.subscribeKey("amount",a=>this.amount=a)),this.unsubscribe.push(af.subscribeKey("recipient",a=>this.recipient=a)),this.unsubscribe.push(af.subscribeKey("isPaymentInProgress",a=>this.isPaymentInProgress=a)),this.unsubscribe.push(af.subscribeKey("selectedExchange",a=>this.selectedExchange=a)),this.unsubscribe.push(af.subscribeKey("exchangeUrlForQuote",a=>this.exchangeUrlForQuote=a)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(a=>a())}updated(a){super.updated(a),a.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return(0,d.qy)`
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
    `}profileTemplate(){if(this.selectedExchange){let a=s.S.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return(0,d.qy)`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?(0,d.qy)`<wui-text variant="lg-regular" color="primary">
                ${s.S.bigNumber(a,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:(0,d.qy)`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}let a=u.w.getPlainAddress(this.caipAddress)??"",{name:b,image:c}=this.getWalletProperties({namespace:this.namespace}),{icon:e,label:g}=aN[this.namespace]??{};return(0,d.qy)`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,f.J)(this.profileName)}
          address=${(0,f.J)(a)}
          imageSrc=${(0,f.J)(c)}
          alt=${(0,f.J)(b)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,f.J)(g)}
          address=${(0,f.J)(a)}
          icon=${(0,f.J)(e)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${(0,f.J)(g)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){let a=h.W.state.activeChain;this.namespace=a,this.caipAddress=h.W.getAccountData(a)?.caipAddress,this.profileName=h.W.getAccountData(a)?.profileName??null,this.unsubscribe.push(h.W.subscribeChainProp("accountState",a=>this.onAccountStateChanged(a),a))}async fetchTokens(){if(this.namespace){let a;if(this.caipAddress){let{chainId:b,chainNamespace:c}=r.C.parseCaipAddress(this.caipAddress),d=`${c}:${b}`;a=h.W.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===d)}await af.fetchTokens({caipAddress:this.caipAddress,caipNetwork:a,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){let{address:a}=this.caipAddress?r.C.parseCaipAddress(this.caipAddress):{};af.fetchQuote({amount:this.amount.toString(),address:a,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:a}){if(!a)return{name:void 0,image:void 0};let b=this.activeConnectorIds[a];if(!b)return{name:void 0,image:void 0};let c=g.a.getConnector({id:b,namespace:a});if(!c)return{name:void 0,image:void 0};let d=i.$.getConnectorImage(c);return{name:c.name,image:d}}paymentOptionsViewTemplate(){return(0,d.qy)`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){let a=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return(0,d.qy)`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(0===a.length)return(0,d.qy)`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;let b={disabled:this.isFetchingQuote};return(0,d.qy)`<w3m-pay-options
      class=${(0,aj.H)(b)}
      .options=${a}
      .selectedPaymentAsset=${(0,f.J)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?(0,d.qy)`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:(0,d.qy)`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){let a=this.isFetchingQuote||this.isFetchingTokenBalances,b=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||!!this.quoteError,c=s.S.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?a||b?(0,d.qy)`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:(0,d.qy)`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:(0,d.qy)`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${a||b?(0,d.qy)`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:(0,d.qy)`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${_(c)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:a,isDisabled:b})}
      </wui-flex>
    `}actionButtonTemplate(a){let b=L(this.quote),{isLoading:c,isDisabled:e}=a,f="Pay";return b.length>1&&0===this.completedTransactionsCount&&(f="Approve"),(0,d.qy)`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${c||this.isPaymentInProgress}
        ?disabled=${e||this.isPaymentInProgress}
        @click=${()=>{b.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${f}
        ${c?null:(0,d.qy)`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(a=>{try{let b=h.W.getAllRequestedCaipNetworks().find(b=>b.caipNetworkId===a.chainId),c=a.address;if(!b)throw Error(`Target network not found for balance chainId "${a.chainId}"`);if(w.y.isLowerCaseMatch(a.symbol,b.nativeCurrency.symbol))c="native";else if(u.w.isCaipAddress(c)){let{address:a}=r.C.parseCaipAddress(c);c=a}else if(!c)throw Error(`Balance address not found for balance symbol "${a.symbol}"`);return{network:b.caipNetworkId,asset:c,metadata:{name:a.name,symbol:a.symbol,decimals:Number(a.quantity.decimals),logoURI:a.iconUrl},amount:a.quantity.numeric}}catch(a){return null}}).filter(a=>!!a).filter(a=>{let{chainId:b}=r.C.parseCaipNetworkId(a.network),{chainId:c}=r.C.parseCaipNetworkId(this.paymentAsset.network);return!!w.y.isLowerCaseMatch(a.asset,this.paymentAsset.asset)||!this.selectedExchange||!w.y.isLowerCaseMatch(b.toString(),c.toString())}):[]}onTokenBalancesChanged(a){this.tokenBalances=a;let[b]=this.getPaymentAssetFromTokenBalances();b&&af.setSelectedPaymentAsset(b)}async onConnectOtherWallet(){await g.a.connect(),await k.W.open({view:"PayQuote"})}onAccountStateChanged(a){let{address:b}=this.caipAddress?r.C.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=a?.caipAddress,this.profileName=a?.profileName??null,b){let{address:a}=this.caipAddress?r.C.parseCaipAddress(this.caipAddress):{};a?w.y.isLowerCaseMatch(a,b)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):k.W.close()}}onSelectedPaymentAssetChanged(a){this.isFetchingQuote||af.setSelectedPaymentAsset(a)}async onTransfer(){let a=K(this.quote);if(a){if(!w.y.isLowerCaseMatch(this.selectedPaymentAsset?.asset,a.deposit.currency))throw Error("Quote asset is not the same as the selected payment asset");let b=this.selectedPaymentAsset?.amount??"0",c=s.S.formatNumber(a.deposit.amount,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!s.S.bigNumber(b).gte(c))return void m.P.showError("Insufficient funds");if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){let{address:b}=r.C.parseCaipAddress(this.caipAddress);await af.onTransfer({chainNamespace:this.namespace,fromAddress:b,toAddress:a.deposit.receiver,amount:c,paymentAsset:this.selectedPaymentAsset}),af.setRequestId(a.requestId),j.I.push("PayLoading")}}}async onSendTransactions(){let a=this.selectedPaymentAsset?.amount??"0",b=s.S.formatNumber(this.quote?.origin.amount??0,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!s.S.bigNumber(a).gte(b))return void m.P.showError("Insufficient funds");let c=L(this.quote),[d]=L(this.quote,this.completedTransactionsCount);d&&this.namespace&&(await af.onSendTransaction({namespace:this.namespace,transactionStep:d}),this.completedTransactionsCount+=1,this.completedTransactionsCount===c.length&&(af.setRequestId(d.requestId),j.I.push("PayLoading")))}onPayWithExchange(){if(this.exchangeUrlForQuote){let a=u.w.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!a)throw Error("Could not create popup window");a.location.href=this.exchangeUrlForQuote;let b=K(this.quote);b&&af.setRequestId(b.requestId),af.initiatePayment(),j.I.push("PayLoading")}}resetAssetsState(){af.setSelectedPaymentAsset(null)}resetQuoteState(){af.resetQuoteState()}};async function aP(a){return af.handleOpenPay(a)}async function aQ(a,b=3e5){if(b<=0)throw new z(x.INVALID_PAYMENT_CONFIG,"Timeout must be greater than 0");try{await aP(a)}catch(a){if(a instanceof z)throw a;throw new z(x.UNABLE_TO_INITIATE_PAYMENT,a.message)}return new Promise((a,c)=>{var d;let e=!1,f=setTimeout(()=>{e||(e=!0,i(),c(new z(x.GENERIC_PAYMENT_ERROR,"Payment timeout")))},b);function g(){if(e)return;let b=af.state.currentPayment,c=af.state.error,d=af.state.isPaymentInProgress;if(b?.status==="SUCCESS"){e=!0,i(),clearTimeout(f),a({success:!0,result:b.result});return}if(b?.status==="FAILED"){e=!0,i(),clearTimeout(f),a({success:!1,error:c||"Payment failed"});return}!c||d||b||(e=!0,i(),clearTimeout(f),a({success:!1,error:c}))}let h=aV("currentPayment",g),i=(d=[h,aV("error",g),aV("isPaymentInProgress",g)],()=>{d.forEach(a=>{try{a()}catch{}})});g()})}function aR(){return af.getExchanges()}function aS(){return af.state.currentPayment?.result}function aT(){return af.state.error}function aU(){return af.state.isPaymentInProgress}function aV(a,b){return af.subscribeKey(a,b)}aO.styles=aK,aL([(0,e.wk)()],aO.prototype,"profileName",void 0),aL([(0,e.wk)()],aO.prototype,"paymentAsset",void 0),aL([(0,e.wk)()],aO.prototype,"namespace",void 0),aL([(0,e.wk)()],aO.prototype,"caipAddress",void 0),aL([(0,e.wk)()],aO.prototype,"amount",void 0),aL([(0,e.wk)()],aO.prototype,"recipient",void 0),aL([(0,e.wk)()],aO.prototype,"activeConnectorIds",void 0),aL([(0,e.wk)()],aO.prototype,"selectedPaymentAsset",void 0),aL([(0,e.wk)()],aO.prototype,"selectedExchange",void 0),aL([(0,e.wk)()],aO.prototype,"isFetchingQuote",void 0),aL([(0,e.wk)()],aO.prototype,"quoteError",void 0),aL([(0,e.wk)()],aO.prototype,"quote",void 0),aL([(0,e.wk)()],aO.prototype,"isFetchingTokenBalances",void 0),aL([(0,e.wk)()],aO.prototype,"tokenBalances",void 0),aL([(0,e.wk)()],aO.prototype,"isPaymentInProgress",void 0),aL([(0,e.wk)()],aO.prototype,"exchangeUrlForQuote",void 0),aL([(0,e.wk)()],aO.prototype,"completedTransactionsCount",void 0),aO=aL([(0,n.EM)("w3m-pay-quote-view")],aO);let aW={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},aX={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},aY={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},aZ={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},a$={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},a_={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},a0={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},a1={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},a2={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},a3={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},a4={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},a5={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},a6={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},a7={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}},79297:(a,b,c)=>{var d=c(29856),e=c(44500),f=c(22734);c(9612);var g=c(77292),h=c(14143),i=c(27680);let j=(0,i.AH)`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:a})=>a[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:a})=>a.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:a})=>a.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:a})=>a.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:a})=>a.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:a})=>a.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:a})=>a[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:a})=>a[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:a})=>a[2]};
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
      background-color: ${({tokens:a})=>a.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:a})=>a.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:a})=>a.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent020};
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
`;var k=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let l=class extends d.WF{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return(0,d.qy)`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,f.J)(this.iconSize)}></wui-icon>
    </button>`}};l.styles=[g.W5,g.fD,j],k([(0,e.MZ)()],l.prototype,"icon",void 0),k([(0,e.MZ)()],l.prototype,"variant",void 0),k([(0,e.MZ)()],l.prototype,"type",void 0),k([(0,e.MZ)()],l.prototype,"size",void 0),k([(0,e.MZ)()],l.prototype,"iconSize",void 0),k([(0,e.MZ)({type:Boolean})],l.prototype,"fullWidth",void 0),k([(0,e.MZ)({type:Boolean})],l.prototype,"disabled",void 0),l=k([(0,h.E)("wui-icon-button")],l)},96901:(a,b,c)=>{c(67332)}};