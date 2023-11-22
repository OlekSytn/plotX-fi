"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4863],{34863:(rt,M,o)=>{o.r(M),o.d(M,{MarketModule:()=>st});var k=o(69808),u=o(30325),l=o(59928),v=o(93075),c=o(70655),C=o(8929),p=o(92340),m=o(7625),h=o(48577),t=o(5e3);function T(a,n){if(1&a&&(t.ynx(0),t.TgZ(1,"ion-item",7),t.TgZ(2,"ion-label"),t.TgZ(3,"div",8),t._uU(4),t.qZA(),t.qZA(),t._UZ(5,"ion-radio",11),t.qZA(),t.BQk()),2&a){const e=n.$implicit;t.xp6(4),t.Oqu(e.contractCurrency),t.xp6(1),t.s9C("value",e.contractCurrency)}}let x=(()=>{class a{constructor(e,i){this.modalController=e,this.navParams=i,this.selectedValue="",this.assets=p.N.marketCurrencies,this.searchValue="",this.selectedValue=this.navParams.get("selectedAsset")}dismissModal(e){this.modalController.dismiss({output:e||this.selectedValue})}selectFilterAsset(e){this.dismissModal(e.detail.value)}searchAsset(){for(let e=0;e<this.assets.length;e++)this.assets[e].hide=!this.assets[e].contractCurrency.includes(this.searchValue.toUpperCase());return this.assets}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(l.IN),t.Y36(l.X1))},a.\u0275cmp=t.Xpm({type:a,selectors:[["modal-filter-assets"]],decls:15,vars:2,consts:[["fullscreen","",2,"--padding-top","32px","--padding-bottom","32px"],[1,"d-flex","justify-content-between","mb25"],[1,"me-3"],[1,"btn-fab",2,"--size","32px","--bg-color","rgba(255, 255, 255, 0.2)","--text-color","#FFFFFF","top","32px","right","32px","--padding","4px",3,"click"],["slot","icon-only","name","close"],[1,"token-list",3,"ionChange"],[3,"value","ionChange"],[1,"token-item"],[1,"token--name"],["slot","end","color","secondary","value","All"],[4,"ngFor","ngForOf"],["slot","end","color","secondary",3,"value"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-content",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h2"),t._uU(4,"Filter by Asset"),t.qZA(),t.qZA(),t.TgZ(5,"ion-button",3),t.NdJ("click",function(){return i.dismissModal()}),t._UZ(6,"ion-icon",4),t.qZA(),t.qZA(),t.TgZ(7,"ion-list",5),t.NdJ("ionChange",function(r){return i.selectFilterAsset(r)}),t.TgZ(8,"ion-radio-group",6),t.NdJ("ionChange",function(r){return i.selectFilterAsset(r)}),t.TgZ(9,"ion-item",7),t.TgZ(10,"ion-label"),t.TgZ(11,"div",8),t._uU(12,"All"),t.qZA(),t.qZA(),t._UZ(13,"ion-radio",9),t.qZA(),t.YNc(14,T,6,2,"ng-container",10),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(8),t.s9C("value",i.selectedValue),t.xp6(6),t.Q6J("ngForOf",i.searchAsset()))},directives:[l.W2,l.YG,l.gu,l.q_,l.se,l.QI,l.Ie,l.Q$,l.B7,l.U5,k.sg],styles:["ion-content[_ngcontent-%COMP%]::part(background){background:var(--ion-toolbar-background);border-radius:16px 16px 0 0}"]}),a})();var A=o(53855),y=o(63014),Z=o.n(y),f=o(42550),P=o(67990),O=o(62562),b=o(74236),S=o(64873),F=o(51704),D=o(16628),U=o(64676),L=o(40453),w=o(36863);function I(a,n){if(1&a&&t.GkF(0,4),2&a){t.oxw();const e=t.MAs(6);t.Q6J("ngTemplateOutlet",e)}}function R(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",16),t.TgZ(1,"a",17),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).routeToPath("/my-predictions")}),t.TgZ(2,"div",18),t._UZ(3,"ion-icon",19),t.TgZ(4,"span"),t._uU(5,"My forecasts"),t.qZA(),t.qZA(),t._UZ(6,"ion-icon",20),t.qZA(),t.qZA()}}function q(a,n){if(1&a&&(t.TgZ(0,"div",31),t._UZ(1,"ion-icon",32),t._uU(2),t.ALo(3,"counter_slice"),t.qZA()),2&a){const e=t.oxw(2).$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,e.timeLeft)," ")}}function N(a,n){if(1&a&&(t.TgZ(0,"div",33),t._uU(1),t.qZA()),2&a){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e.marketStatus)}}function J(a,n){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,q,4,3,"div",29),t.YNc(2,N,2,1,"div",30),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",e.isLive),t.xp6(1),t.Q6J("ngIf",!e.isLive)}}function E(a,n){1&a&&t._UZ(0,"i",41)}function Y(a,n){if(1&a&&(t.TgZ(0,"div",34),t.TgZ(1,"div",35),t.TgZ(2,"div",36),t.YNc(3,E,1,0,"i",37),t._uU(4),t.ALo(5,"mycurrency"),t.qZA(),t.TgZ(6,"div",38),t._uU(7,"total pool"),t.qZA(),t.qZA(),t.TgZ(8,"div",39),t.TgZ(9,"div",40),t._uU(10),t.ALo(11,"formatNumber"),t.qZA(),t.TgZ(12,"div",38),t._uU(13,"potential ROI"),t.qZA(),t.qZA(),t.qZA()),2&a){const e=t.oxw().$implicit,i=t.oxw(2);t.xp6(3),t.Q6J("ngIf",e.participation),t.xp6(1),t.hij(" ",t.xi3(5,3,e.totalPoolInDollar*i.platformCurrency.price,i.platformCurrency.currency)," "),t.xp6(6),t.hij("",t.xi3(11,6,e.ROI/100+1,2),"x")}}function W(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"ion-card",21),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).routeToPath(r.routerLink,r,"rapid")}),t.TgZ(2,"ion-card-content"),t.TgZ(3,"div",22),t.TgZ(4,"div",23),t.TgZ(5,"div",24),t._UZ(6,"ion-img",25),t.qZA(),t.TgZ(7,"div",26),t._uU(8),t.qZA(),t.qZA(),t.YNc(9,J,3,2,"div",27),t.qZA(),t.YNc(10,Y,14,9,"div",28),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=n.$implicit;t.xp6(1),t.Gre("widget-rapid-market ",e.className,""),t.xp6(5),t.Q6J("src",e.icon),t.xp6(2),t.Oqu(e.assetType),t.xp6(1),t.Q6J("ngIf",!e.isLive||e.timeLeft&&e.timeLeft>0),t.xp6(1),t.Q6J("ngIf",e.isLive)}}function j(a,n){if(1&a&&(t.TgZ(0,"div",52),t._uU(1),t.ALo(2,"counter_slice"),t.qZA()),2&a){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.timeLeft)," ")}}function Q(a,n){1&a&&t._UZ(0,"i",41)}function B(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"ion-card",43),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit;return t.oxw(2).routeToPath(s.routerLink,s,"market")}),t.TgZ(1,"ion-card-content"),t.TgZ(2,"div",22),t.TgZ(3,"div",44),t.TgZ(4,"div",45),t._uU(5),t.qZA(),t.YNc(6,j,3,3,"div",46),t.qZA(),t.TgZ(7,"div",47),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"div",48),t._UZ(10,"ion-img",49),t.TgZ(11,"ion-text"),t._uU(12),t.qZA(),t.TgZ(13,"ion-text",50),t._uU(14),t.ALo(15,"removeComma"),t.ALo(16,"number"),t.qZA(),t.qZA(),t._UZ(17,"div",51),t.TgZ(18,"div",34),t.TgZ(19,"div",35),t.TgZ(20,"div",36),t.YNc(21,Q,1,0,"i",37),t._uU(22),t.ALo(23,"mycurrency"),t.qZA(),t.TgZ(24,"div",38),t._uU(25,"total pool"),t.qZA(),t.qZA(),t.TgZ(26,"div",39),t.TgZ(27,"div",40),t._uU(28),t.ALo(29,"formatNumber"),t.qZA(),t.TgZ(30,"div",38),t._uU(31,"potential ROI"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw().$implicit,i=t.oxw(2);t.xp6(5),t.Oqu(e.marketStatus),t.xp6(1),t.Q6J("ngIf",e.timeLeft&&e.timeLeft>0),t.xp6(2),t.Oqu(e.marketType),t.xp6(2),t.Q6J("src",e.icon),t.xp6(2),t.Oqu(e.assetType),t.xp6(1),t.Q6J("color",i.getColor(e)),t.xp6(1),t.hij(" $",t.lcZ(15,10,t.xi3(16,12,i.price[e.assetType.split("/")[0]],"."+i.tickerDecimal[e.assetType]))," "),t.xp6(7),t.Q6J("ngIf",e.participation),t.xp6(1),t.hij(" ",t.xi3(23,15,e.totalPoolInDollar*i.platformCurrency.price,i.platformCurrency.currency)," "),t.xp6(6),t.hij("",t.xi3(29,18,e.ROI/100+1,2),"x")}}function z(a,n){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,B,32,21,"ion-card",42),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Q6J("ngIf",e.timeLeft&&e.timeLeft>0)}}function $(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",5),t.TgZ(1,"div",6),t.TgZ(2,"h1",7),t._uU(3,"Forecasts"),t.qZA(),t.qZA(),t.YNc(4,R,7,0,"div",8),t.TgZ(5,"div",9),t.TgZ(6,"div"),t._uU(7,"Rapid Markets"),t.qZA(),t.qZA(),t.YNc(8,W,11,7,"div",10),t.TgZ(9,"div",11),t.TgZ(10,"div"),t._uU(11,"Crypto Markets"),t.qZA(),t.qZA(),t.TgZ(12,"div",12),t.TgZ(13,"div",13),t.TgZ(14,"label"),t._uU(15,"Filter by Asset:"),t.qZA(),t.TgZ(16,"button",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().filterAssetsModal()}),t._uU(17),t.qZA(),t.qZA(),t.TgZ(18,"div",15),t.TgZ(19,"label"),t._uU(20,"Filter by type:"),t.qZA(),t.TgZ(21,"button",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().filterTypeModal()}),t._uU(22),t.qZA(),t.qZA(),t.qZA(),t.YNc(23,z,2,1,"div",10),t.qZA()}if(2&a){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",""!=e.userAddress&&"0x"!=e.userAddress),t.xp6(4),t.Q6J("ngForOf",e.rapidMarketsData),t.xp6(9),t.Oqu(e.selectedAsset),t.xp6(5),t.Oqu(e.selectedType),t.xp6(1),t.Q6J("ngForOf",e.cryptoMarketList)}}function V(a,n){1&a&&(t.TgZ(0,"div"),t.TgZ(1,"ion-card",59),t.TgZ(2,"ion-card-content"),t.TgZ(3,"div",22),t.TgZ(4,"div",23),t._UZ(5,"ion-skeleton-text",60),t._UZ(6,"ion-skeleton-text",61),t.qZA(),t._UZ(7,"ion-skeleton-text",62),t.qZA(),t.TgZ(8,"div",34),t.TgZ(9,"div",35),t._UZ(10,"ion-skeleton-text",63),t._UZ(11,"ion-skeleton-text",64),t.qZA(),t.TgZ(12,"div",65),t._UZ(13,"ion-skeleton-text",63),t._UZ(14,"ion-skeleton-text",64),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())}const H=function(){return[1,2,3]};function K(a,n){1&a&&(t.TgZ(0,"div",53),t.TgZ(1,"div",6),t.TgZ(2,"h1",7),t._uU(3,"Forecasts"),t.qZA(),t._UZ(4,"ion-skeleton-text",54),t.qZA(),t.TgZ(5,"div",16),t.TgZ(6,"a",55),t.TgZ(7,"div",18),t._UZ(8,"ion-skeleton-text",56),t._UZ(9,"ion-skeleton-text",57),t.qZA(),t._UZ(10,"ion-skeleton-text",58),t.qZA(),t.qZA(),t.TgZ(11,"div",9),t.TgZ(12,"div"),t._uU(13,"Rapid Markets"),t.qZA(),t.qZA(),t.YNc(14,V,15,0,"div",10),t.qZA()),2&a&&(t.xp6(14),t.Q6J("ngForOf",t.DdM(1,H)))}let X=(()=>{class a{constructor(e,i,s,r,d,_,g,at){this.navController=e,this.modalController=i,this.helperService=s,this.httpService=r,this.binanceWebsocketService=d,this.websocketService=_,this.web3Service=g,this._analytics=at,this.unsubscribe=new C.xQ,this.skeletonLoading=!0,this.userAddressParam="",this.userAddress="",this.rapidMarketsData=[],this.isWebsocketServiceInitiated=!1,this.MARKET_TYPE_NAMES=p.N.MARKET_TYPE_NAMES,this.assets=p.N.marketCurrencies,this.wssMarketIds=[],this.countDownForRapid=[],this.countDownForAllMarkets=[],this.initiated=!1,this.price={},this.isBasePrice=!1,this.basePrice={},this.tickerDecimal={},this.cryptoMarketList=[],this.allMarketsList=[],this.isEligibleForBonus=!1,this.unUsedClaimedAmount=0,this.selectedType="All",this.selectedAsset="All",this.analyticsParam={}}ionViewWillEnter(){return(0,c.__awaiter)(this,void 0,void 0,function*(){this.helperService.forPlatformCurrency.pipe((0,m.R)(this.unsubscribe)).subscribe(e=>(0,c.__awaiter)(this,void 0,void 0,function*(){this.platformCurrency=e})),this.userAddress=sessionStorage.getItem("userAddress"),this.web3Service.isInstancesParam.pipe((0,m.R)(this.unsubscribe)).subscribe(e=>(0,c.__awaiter)(this,void 0,void 0,function*(){"initialzed"==e&&this.web3Service.addressParam.pipe((0,m.R)(this.unsubscribe)).subscribe(i=>(0,c.__awaiter)(this,void 0,void 0,function*(){this.userAddress=i,this.userAddressParam!=this.userAddress&&(this.userAddressParam=this.userAddress,sessionStorage.setItem("userAddress",this.userAddress),console.log("Connected address: ",this.userAddress),null!=this.userAddress&&"0x"!=this.userAddress&&""!=this.userAddress?(this.subscribeForIsClaimedForApp(),this.updateCoinsForUserOnStartUp()):this.updatecoinDisconnection())}))})),this.getPrices()})}ionViewDidEnter(){console.log("..............market")}ionViewWillLeave(){this.resetSubscriptions()}resetSubscriptions(){try{if(this.binanceWebsocketService.close(),this.isWebsocketServiceInitiated&&(console.log("Closing market socket"),this.websocketService.close()),this.countDownForRapid.length>0)for(let e=0;e<this.countDownForRapid.length;e++)h.cv(this.countDownForRapid[e]);if(this.countDownForAllMarkets.length>0)for(let e=0;e<this.countDownForAllMarkets.length;e++)h.cv(this.countDownForAllMarkets[e]);this.intervalPing&&h.cv(this.intervalPing)}catch(e){}this.unsubscribe.next(),this.unsubscribe.complete()}routeToPath(e,i={},s=""){this.navController.navigateBack([e]),this.resetSubscriptions(),["market","rapid"].indexOf(s.toLowerCase())>-1&&(this.analyticsParam.market_name=i.assetType,this.analyticsParam.market_type="market"==s?i.marketType:"rapid",this.analyticsParam.market_id=i.marketIndex,this.analyticsParam.source="forecast page",console.log("..............Market Select......"),this.sendAnalyticsEvent(f.b.market_selection,!0))}getPrices(){return(0,c.__awaiter)(this,void 0,void 0,function*(){this.httpService.httpCallCaching(p.N.pricesApiUrl).pipe((0,m.R)(this.unsubscribe)).subscribe(e=>(0,c.__awaiter)(this,void 0,void 0,function*(){this.plotPrice=e.data.PLOT,this.initCall()}),e=>console.log(e))})}initCall(){return(0,c.__awaiter)(this,void 0,void 0,function*(){this.skeletonLoading=!0,this.isWebsocketServiceInitiated=!1,Z().get("https://assets.plotx.io/rapid-market-list/rapid-market-list.json").then(e=>{this.assetTypesForRapidMarkets=e.data.assetTypesForRapidMarkets,this.rapidMarketsWssParams=e.data.rapidMarketsWssParams,this.httpService.httpCallCaching(p.N.newLiveMarketsApi).pipe((0,m.R)(this.unsubscribe)).subscribe(i=>(0,c.__awaiter)(this,void 0,void 0,function*(){this.allMarketsData=i.data,this.allMarketsData.markets.filter(r=>r.totalPoolInDollar=parseFloat(r.totalPLOTStaked)/1e8*this.plotPrice);let s=Math.floor(Date.now()/1e3);this.allMarketsData.markets=this.allMarketsData.markets.filter(r=>parseInt(r.StartTime)<=s),this.allMarketsData.markets.filter(r=>{r.icon=p.N.imageURL+"token/"+this.helperService.updateAssetFormat(r.assetType)+"/logo.svg"}),yield this.calculateOptionsRoi(this.allMarketsData.markets),this.setRapidMarkets("init"),this.setAllMarkets(),this.predictionSocket()}),i=>console.log(i))}).catch(e=>console.log(e))})}predictionSocket(){return(0,c.__awaiter)(this,void 0,void 0,function*(){this.web3Service.forPredictionSocket.pipe((0,m.R)(this.unsubscribe)).subscribe(e=>(0,c.__awaiter)(this,void 0,void 0,function*(){if(Object.keys(e).length>0){let i=1*e.marketIndex;this.allMarketsData.markets.filter(s=>{parseInt(s.marketIndex)==i&&(s.totalPLOTStaked=parseFloat(s.totalPLOTStaked)+parseFloat(e.value),s.totalPoolInDollar=s.totalPLOTStaked/1e8*this.plotPrice,s.totalPredictions=parseFloat(s.totalPredictions)+1)})}}))})}calculateOptionsRoi(e){return(0,c.__awaiter)(this,void 0,void 0,function*(){for(let i=0;i<e.length;i++){let s=10/this.plotPrice,r=s*(100-p.N.tokenFees/100)/100;r*=100;let d={positions:[],poolShares:[],potentialWinnings:[],potentialROI:[]};e[i].optionPrices.map((_,g)=>(0,c.__awaiter)(this,void 0,void 0,function*(){d.positions.push(1*r*1e8/_/1e5),d.poolShares.push(d.positions[g]/(parseFloat(e[i].positionsPerOption[g])/1e3+d.positions[g])*100)})),d.poolShares.map((_,g)=>(0,c.__awaiter)(this,void 0,void 0,function*(){d.potentialWinnings.push(.95*(parseFloat(e[i].totalPLOTStaked)/1e8-parseFloat(e[i].plotStakedPerOption[g])/1e8)*_/100),d.potentialROI.push(d.potentialWinnings[g]/s*100)})),e[i].ROI=Math.max(...d.potentialROI)}})}setRapidMarkets(e){return(0,c.__awaiter)(this,void 0,void 0,function*(){let i=Math.floor(Date.now()/1e3);"init"==e?(this.filteredRapidMarkets=this.allMarketsData.markets.filter(s=>"Rapid"==s.marketType),this.filteredRapidMarkets=JSON.parse(JSON.stringify(this.filteredRapidMarkets)),console.log("filteredRapidMarkets init: ",this.filteredRapidMarkets),this.filteredRapidMarkets.sort(this.helperService.sortByProperty("StartTime","asc")),this.proceedToSetRapidMarkets()):"updation"==e?(this.filteredRapidMarkets=this.allMarketsData.markets.filter(s=>"Rapid"==s.marketType&&s.EndTime>i),this.filteredRapidMarkets=JSON.parse(JSON.stringify(this.filteredRapidMarkets)),console.log("filteredRapidMarkets updation: ",this.filteredRapidMarkets),this.filteredRapidMarkets.sort(this.helperService.sortByProperty("StartTime","asc")),this.proceedToSetRapidMarkets()):"wssUpdation"==e&&(this.filteredRapidMarkets=this.filteredRapidMarkets.filter(s=>"Rapid"==s.marketType&&s.EndTime>i),this.filteredRapidMarkets=JSON.parse(JSON.stringify(this.filteredRapidMarkets)),console.log("filteredRapidMarkets wssUpdation: ",this.filteredRapidMarkets),this.filteredRapidMarkets.sort(this.helperService.sortByProperty("StartTime","asc")),this.proceedToSetRapidMarkets())})}setAllMarkets(){return(0,c.__awaiter)(this,void 0,void 0,function*(){let e=[];for(let i=0;i<this.allMarketsData.markets.length;i++){let r=new Date(1e3*this.allMarketsData.markets[i].SettleTime).toString().substr(4,12),d=this.helperService.formatAMPM(new Date(1e3*this.allMarketsData.markets[i].SettleTime));this.allMarketsData.markets[i].dateTime=r+" "+d,-1!=this.allMarketsData.markets[i].status_num&&("Live"==this.allMarketsData.markets[i].marketStatus?this.allMarketsData.markets[i].countDate=this.helperService.dateFormat(this.allMarketsData.markets[i].EndTime):"Cooling"==this.allMarketsData.markets[i].marketStatus?this.allMarketsData.markets[i].countDate=this.helperService.dateFormat(this.allMarketsData.markets[i].coolingTime):"InSettlement"==this.allMarketsData.markets[i].marketStatus&&(this.allMarketsData.markets[i].countDate=this.helperService.dateFormat(this.allMarketsData.markets[i].SettleTime))),this.allMarketsData.markets[i].routerLink=`/market/${this.helperService.updateAssetFormat(this.allMarketsData.markets[i].assetType)}/${this.allMarketsData.markets[i].marketType}`;let _=Math.floor(Date.now()/1e3);this.allMarketsData.markets[i].timeLeft=this.allMarketsData.markets[i].EndTime-_,this.countDownForAllMarkets[i]&&h.cv(this.countDownForAllMarkets[i]),this.countDownForAllMarkets[i]=h.Zi(()=>{--this.allMarketsData.markets[i].timeLeft},1e3),e.push(this.allMarketsData.markets[i]),e=e.filter(g=>"Live"==g.marketStatus&&"SPORT"!=g.marketType)}e=e.sort(function(i,s){return s.ROI-i.ROI}),(null!=this.unUsedClaimedAmount&&this.unUsedClaimedAmount>0||this.isEligibleForBonus)&&(e=e.sort(function(i,s){return i.EndTime-i.StartTime-(s.EndTime-s.StartTime)})),e=e.sort(function(i,s){return i.status_num-s.status_num}),this.allMarketsList=e,this.cryptoMarketList=e,this.ticker()})}proceedToSetRapidMarkets(){let e=[];for(let i=0;i<this.filteredRapidMarkets.length;i++)if(e.length<this.rapidMarketsWssParams.marketsCount){const s=this.filteredRapidMarkets[i];s.assetName=this.helperService.updateAssetFormat(s.assetType),s.isLive="Live"==s.marketStatus||s.StartTime<=Math.floor(Date.now()/1e3),s.routerLink=s.isLive?`/market/${s.assetName}/${s.marketType}`:"",s.className=s.isLive?"":"disabled",s.icon=p.N.imageURL+"token/"+this.helperService.updateAssetFormat(s.assetType)+"/logo.svg";let r=Math.floor(Date.now()/1e3);s.timeLeft=s.isLive?s.EndTime-r:s.StartTime-r,this.countDownForRapid[i]&&h.cv(this.countDownForRapid[i]),this.countDownForRapid[i]=h.Zi(()=>{--s.timeLeft},1e3),e.push(s)}if(e.length==this.rapidMarketsWssParams.marketsCount)this.rapidMarketsData=e;else{let i=this.assetTypesForRapidMarkets;for(let s=0;s<i.length;s++){const r=i[s];0==e.filter(_=>_.assetType==r).length&&e.push({assetType:r,marketStatus:"In Creation",assetName:this.helperService.updateAssetFormat(r),isLive:!1,routerLink:"",className:"disabled",timeLeft:-1,icon:p.N.imageURL+"token/"+this.helperService.updateAssetFormat(r)+"/logo.svg"})}this.rapidMarketsData=e}console.log("rapidMarketsData ",this.rapidMarketsData),this.skeletonLoading=!1,this.checkForUpdations(this.filteredRapidMarkets.length==this.rapidMarketsWssParams.marketsCountWithBuffered?"updation":"wssUpdation"),this.checkForWebSockerConnection()}checkForUpdations(e){return(0,c.__awaiter)(this,void 0,void 0,function*(){this.intervalUpdation&&h.cv(this.intervalUpdation),this.intervalUpdation=h.Zi(()=>{0==this.rapidMarketsData[0].timeLeft&&(h.cv(this.intervalUpdation),"wssUpdation"==e?this.getDataOfMarkets():"updation"==e&&this.setRapidMarkets("updation"))},1e3)})}getDataOfMarkets(e){return(0,c.__awaiter)(this,void 0,void 0,function*(){this.httpService.httpCallCaching(p.N.newLiveMarketsApi).pipe((0,m.R)(this.unsubscribe)).subscribe(i=>(0,c.__awaiter)(this,void 0,void 0,function*(){let s=Math.floor(Date.now()/1e3);this.filteredRapidMarkets=i.data.markets.filter(d=>"Rapid"==d.marketType&&parseInt(d.StartTime)<=s),this.filteredRapidMarkets.filter(d=>d.totalPoolInDollar=parseFloat(d.totalPLOTStaked)/1e8*this.plotPrice),yield this.calculateOptionsRoi(this.filteredRapidMarkets),this.setRapidMarkets("wssUpdation"),this.wssMarketIds=[]}),i=>console.log(i))})}checkForWebSockerConnection(){if(!this.isWebsocketServiceInitiated){let e=!1;this.isWebsocketServiceInitiated=!0,this.websocketService.connect(p.N.wssSocketListener).subscribe(i=>{let s=JSON.parse(i.data);if(console.log("websocketService data: ",s),"marketIndex"in s){console.log("Event emited for rapid markets.");let r=1*s.marketIndex;e=!1,console.log("wssMarketIds: ",this.wssMarketIds),0==this.wssMarketIds.length&&(e=!0),this.wssMarketIds.push(r),e&&this.getDataOfMarkets()}}),setTimeout(()=>{this.callOnce()},5e3)}}callOnce(){return(0,c.__awaiter)(this,void 0,void 0,function*(){this.initiated||(this.initiated=!0,this.websocketService.sendMessage({action:"message",message:{type:"market"}}),setTimeout(()=>{this.callPing()},1e4))})}callPing(){return(0,c.__awaiter)(this,void 0,void 0,function*(){this.intervalPing&&h.cv(this.intervalPing),this.intervalPing=h.Zi(()=>{this.websocketService.sendMessage({action:"ping"})},3e5)})}updateCoinsForUserOnStartUp(){this.httpService.httpCall(p.N.predictedMarkets+this.userAddress,this.userAddress).pipe((0,m.R)(this.unsubscribe)).subscribe(i=>{if(this.allPredictedMarkets=i.data.data.placePredictionEntities,this.rapidMarketsData)for(let s=0;s<this.rapidMarketsData.length;s++)for(let r=0;r<this.allPredictedMarkets.length;r++)parseInt(this.rapidMarketsData[s].marketIndex)===parseInt(this.allPredictedMarkets[r].marketIndex)&&(this.rapidMarketsData[s].participation=!0);if(this.cryptoMarketList)for(let s=0;s<this.cryptoMarketList.length;s++)for(let r=0;r<this.allPredictedMarkets.length;r++)parseInt(this.cryptoMarketList[s].marketIndex)===parseInt(this.allPredictedMarkets[r].marketIndex)&&(this.cryptoMarketList[s].participation=!0)},i=>console.log(i))}updatecoinDisconnection(){if(this.rapidMarketsData)for(let e=0;e<this.rapidMarketsData.length;e++)this.rapidMarketsData[e].participation=!1;for(let e=0;e<this.cryptoMarketList.length;e++)this.cryptoMarketList[e].participation=!1}ticker(){let e="";for(let i=0;i<p.N.marketCurrencies.length;i++)this.tickerDecimal[p.N.marketCurrencies[i].contractCurrency]=p.N.marketCurrencies[i].currencyDecimal,e=i==p.N.marketCurrencies.length-1?e+p.N.marketCurrencies[i].ipfsCurrency.toLowerCase()+"@ticker":e+p.N.marketCurrencies[i].ipfsCurrency.toLowerCase()+"@ticker/";this.binanceWebsocketService.connect("wss://stream.binance.com:9443/stream?streams="+e).subscribe(i=>{let s=JSON.parse(i.data),r=p.N.marketCurrencies.filter(d=>d.ipfsCurrency==s.stream.split("@")[0].toUpperCase());this.isBasePrice&&(this.basePrice[r[0].coreName]=this.price[r[0].coreName]),this.price[r[0].coreName]=s.data.c,this.isBasePrice=!0})}subscribeForIsClaimedForApp(){return(0,c.__awaiter)(this,void 0,void 0,function*(){this.userAddress&&this.helperService.forIsClaimedForApp.pipe((0,m.R)(this.unsubscribe)).subscribe(e=>(0,c.__awaiter)(this,void 0,void 0,function*(){if(Object.keys(e).length>0){let i=e,s=i.isClaimedForApp;this.isEligibleForBonus=i.isEligibleForBonus,s?i.isValid&&(this.unUsedClaimedAmount=i.unused):this.unUsedClaimedAmount=0}}))})}getColor(e){return this.price[e.assetType.split("/")[0]]<this.basePrice[e.assetType.split("/")[0]]?"danger":this.price[e.assetType.split("/")[0]]>this.basePrice[e.assetType.split("/")[0]]?"success":""}filterAssetsModal(){return(0,c.__awaiter)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:x,initialBreakpoint:1,breakpoints:[0,1],handle:!1,componentProps:{selectedAsset:this.selectedAsset}});return e.onDidDismiss().then(i=>{i&&i.data&&i.data.output!=this.selectedAsset?(this.analyticsParam.sort_by_option=i.data.output,this.analyticsParam.status="false"):this.analyticsParam.status="true",this.sendAnalyticsEvent(f.b.sort_by_view),this.selectedAsset=i.data.output,this.setFilteredCryptoMarkets()}),yield e.present()})}filterTypeModal(){return(0,c.__awaiter)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:A.x,initialBreakpoint:.7,breakpoints:[0,.7,1],handle:!1,componentProps:{selectedType:this.selectedType}});return e.onDidDismiss().then(i=>{i&&i.data&&i.data.output!=this.selectedType?(this.analyticsParam.sort_by=i.data.output,this.analyticsParam.sort_by_option=this.selectedAsset,this.analyticsParam.status="false"):this.analyticsParam.status="true",this.sendAnalyticsEvent(f.b.apply_sort_apply,!0),this.selectedType=i.data.output,this.setFilteredCryptoMarkets()}),yield e.present()})}setFilteredCryptoMarkets(){"All"!=this.selectedAsset&&"All"!=this.selectedType?this.cryptoMarketList=this.allMarketsList.filter(e=>e.assetType==this.selectedAsset&&e.marketType==this.selectedType):"All"!=this.selectedAsset&&"All"==this.selectedType?this.cryptoMarketList=this.allMarketsList.filter(e=>e.assetType==this.selectedAsset):"All"==this.selectedAsset&&"All"!=this.selectedType?this.cryptoMarketList=this.allMarketsList.filter(e=>e.marketType==this.selectedType):"All"==this.selectedAsset&&"All"==this.selectedType&&(this.cryptoMarketList=this.allMarketsList)}doRefresh(e){console.log("Begin async operation"),this.initCall(),setTimeout(()=>{console.log("Async operation has ended"),e.target.complete()},2e3)}sendAnalyticsEvent(e,i=!1){this._analytics.trackMixPanel(e,this.analyticsParam),i&&(this.analyticsParam={})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(l.SH),t.Y36(l.IN),t.Y36(P.$),t.Y36(O.O),t.Y36(b.Q),t.Y36(S.i),t.Y36(F.U),t.Y36(D.y))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-market"]],decls:7,vars:2,consts:[["slot","fixed",3,"ionRefresh"],[3,"ngTemplateOutlet",4,"ngIf"],["class","content",4,"ngIf"],["skeletonLoader",""],[3,"ngTemplateOutlet"],[1,"content"],[1,"heading","mb25"],[1,"heading__title"],["class","tab-stats mb30",4,"ngIf"],[1,"count-n-filter","mb-4"],[4,"ngFor","ngForOf"],[1,"count-n-filter","my-4"],[1,"d-flex","justify-content-between","flex-wrap"],[1,"filter_wrapper","mr-2"],[1,"btn-filtter",3,"click"],[1,"filter_wrapper"],[1,"tab-stats","mb30"],[1,"tab-stat",2,"--text-color","var(--ion-color-secondary)",3,"click"],[1,"d-flex","align-items-center"],["src","assets/icon/fa-trophy-solid.svg",1,"me-2"],["name","arrow-forward"],["ion-no-margin","",3,"click"],[1,"widget-market__head"],[1,"widget-market__head-title-wrapper"],[1,"widget-market__wrapper-icon"],[1,"widget-market__icon",3,"src"],[1,"widget-market__title"],[4,"ngIf"],["class","widget-market__wrapper-stats",4,"ngIf"],["class","widget-market--timer",4,"ngIf"],["class","widget-market--status",4,"ngIf"],[1,"widget-market--timer"],["size","small","color","light","name","alarm-outline"],[1,"widget-market--status"],[1,"widget-market__wrapper-stats"],[1,"widget-market__wrapper-stats--left"],[1,"widget-market__stats-value"],["class","fas fa-coins text-warning pr5",4,"ngIf"],[1,"widget-market__stats-label"],[1,"widget-market__wrapper-stats--right"],[1,"widget-market__stats-value",2,"color","var(--ion-color-success)"],[1,"fas","fa-coins","text-warning","pr5"],["class","widget-crypto-market",3,"click",4,"ngIf"],[1,"widget-crypto-market",3,"click"],[1,"market-wrapper__status"],[1,"market__status"],["class","market__timer",4,"ngIf"],[1,"market__type"],[1,"widget-market__wrapper-currency"],[1,"currency-icon",3,"src"],[3,"color"],[1,"separator","separator-text-20","my20"],[1,"market__timer"],[1,"content",2,"--border-radius","8px"],["animated","",2,"width","60%"],[1,"tab-stat",2,"--background-rgb","var(--ion-background-color-rgb)"],["animated","",1,"me-2",2,"width","24px"],["animated","",2,"width","100px"],["animated","",2,"width","24px"],["ion-no-margin","",1,"widget-rapid-market"],["animated","",2,"width","20px","height","20px","--border-radius","50%"],["animated","",1,"ms-2",2,"width","80px","height","16px"],["animated","",2,"width","60px","height","16px"],["animated","",2,"width","70px","height","14px"],["animated","",2,"width","80px"],[1,"widget-market__wrapper-stats--right","d-flex","flex-column","align-items-end"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-content"),t.TgZ(1,"ion-refresher",0),t.NdJ("ionRefresh",function(r){return i.doRefresh(r)}),t._UZ(2,"ion-refresher-content"),t.qZA(),t.YNc(3,I,1,1,"ng-container",1),t.YNc(4,$,24,5,"div",2),t.qZA(),t.YNc(5,K,15,2,"ng-template",null,3,t.W1O)),2&e&&(t.xp6(3),t.Q6J("ngIf",i.skeletonLoading),t.xp6(1),t.Q6J("ngIf",!i.skeletonLoading))},directives:[l.W2,l.nJ,l.Wo,k.O5,k.tP,k.sg,l.gu,l.PM,l.FN,l.Xz,l.yW,l.CK],pipes:[U.D,L.n,w.ws,w.fK,k.JJ],styles:["ion-refresher{top:84px!important}.content[_ngcontent-%COMP%]{padding-top:50px;padding-bottom:30px}.widget-rapid-market[_ngcontent-%COMP%]{width:100%;background-color:var(--ion-card-background);border-radius:10px;margin:0 auto 1rem;cursor:pointer;position:relative;z-index:1;border:1px solid rgba(var(--ion-text-color-rgb),.05)}.widget-rapid-market.disabled[_ngcontent-%COMP%]{cursor:auto;opacity:.5;-webkit-user-select:none;user-select:none;pointer-events:none}.widget-rapid-market[_ngcontent-%COMP%]   .widget-market__head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.widget-rapid-market[_ngcontent-%COMP%]   .widget-market__head[_ngcontent-%COMP%]   .widget-market__head-title-wrapper[_ngcontent-%COMP%], .widget-rapid-market[_ngcontent-%COMP%]   .widget-market__head[_ngcontent-%COMP%]   .widget-market__head-title-wrapper[_ngcontent-%COMP%]   .widget-market__wrapper-icon[_ngcontent-%COMP%]{display:flex;align-items:center}.widget-rapid-market[_ngcontent-%COMP%]   .widget-market__head[_ngcontent-%COMP%]   .widget-market__head-title-wrapper[_ngcontent-%COMP%]   .widget-market__wrapper-icon[_ngcontent-%COMP%]   .widget-market__icon[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%}.widget-rapid-market[_ngcontent-%COMP%]   .widget-market__head[_ngcontent-%COMP%]   .widget-market__head-title-wrapper[_ngcontent-%COMP%]   .widget-market__title[_ngcontent-%COMP%]{margin-left:.5rem;font-size:12px;font-weight:700}.widget-rapid-market[_ngcontent-%COMP%]   .widget-market__head[_ngcontent-%COMP%]   .widget-market--status[_ngcontent-%COMP%]{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase}.widget-rapid-market[_ngcontent-%COMP%]   .widget-market__head[_ngcontent-%COMP%]   .widget-market--timer[_ngcontent-%COMP%]{font-size:12px;font-weight:700;letter-spacing:1px;color:var(--ion-color-danger);display:flex;align-items:center}.widget-rapid-market[_ngcontent-%COMP%]   .widget-market__head[_ngcontent-%COMP%]   .widget-market--timer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:5px}.widget-rapid-market[_ngcontent-%COMP%]   .widget-market__wrapper-stats[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between;margin-top:1rem}.widget-rapid-market[_ngcontent-%COMP%]   .widget-market__wrapper-stats[_ngcontent-%COMP%]   .widget-market__wrapper-stats--left[_ngcontent-%COMP%]{text-align:left;padding-right:.25rem}.widget-rapid-market[_ngcontent-%COMP%]   .widget-market__wrapper-stats[_ngcontent-%COMP%]   .widget-market__wrapper-stats--right[_ngcontent-%COMP%]{text-align:right;padding-left:.25rem}.widget-rapid-market[_ngcontent-%COMP%]   .widget-market__wrapper-stats[_ngcontent-%COMP%]   .widget-market__stats-value[_ngcontent-%COMP%]{font-weight:600;line-height:1.3;color:var(--ion-text-color)}.widget-rapid-market[_ngcontent-%COMP%]   .widget-market__wrapper-stats[_ngcontent-%COMP%]   .widget-market__stats-label[_ngcontent-%COMP%]{font-weight:400;font-size:12px;color:rgba(var(--ion-text-color-rgb),.5)}.widget-crypto-market[_ngcontent-%COMP%]{cursor:pointer;margin-bottom:1rem;border:1px solid rgba(var(--ion-text-color-rgb),.05)}.widget-crypto-market[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .widget-market__head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.widget-crypto-market[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .widget-market__head[_ngcontent-%COMP%]   .market-wrapper__status[_ngcontent-%COMP%]{border-radius:7px;background-color:rgba(var(--ion-text-color-rgb),.08);display:flex;align-items:center;color:var(--ion-text-color);font-size:12px;font-weight:500}.widget-crypto-market[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .widget-market__head[_ngcontent-%COMP%]   .market-wrapper__status[_ngcontent-%COMP%]   .market__status[_ngcontent-%COMP%]{padding:6px 8px;border-radius:7px;background:linear-gradient(90deg,#c84e89,#f15f79)}.widget-crypto-market[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .widget-market__head[_ngcontent-%COMP%]   .market-wrapper__status[_ngcontent-%COMP%]   .market__timer[_ngcontent-%COMP%]{padding:6px 8px}.widget-crypto-market[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .widget-market__head[_ngcontent-%COMP%]   .market__type[_ngcontent-%COMP%]{color:var(--ion-text-color);font-size:12px;font-weight:500;padding:6px 8px;border-radius:7px;background-color:rgba(var(--ion-text-color-rgb),.08)}.widget-crypto-market[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .widget-market__wrapper-currency[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1rem;font-weight:700;color:var(--ion-text-color);margin:24px 0}.widget-crypto-market[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .widget-market__wrapper-currency[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:first-child){margin-left:1rem}.widget-crypto-market[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .widget-market__wrapper-currency[_ngcontent-%COMP%]   .currency-icon[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:50%}.widget-crypto-market[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .widget-market__wrapper-stats[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between}.widget-crypto-market[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .widget-market__wrapper-stats[_ngcontent-%COMP%]   .widget-market__wrapper-stats--left[_ngcontent-%COMP%]{text-align:left;padding-right:.25rem}.widget-crypto-market[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .widget-market__wrapper-stats[_ngcontent-%COMP%]   .widget-market__wrapper-stats--right[_ngcontent-%COMP%]{text-align:right;padding-left:.25rem}.widget-crypto-market[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .widget-market__wrapper-stats[_ngcontent-%COMP%]   .widget-market__stats-value[_ngcontent-%COMP%]{font-weight:600;font-size:12px;color:var(--ion-text-color)}.widget-crypto-market[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .widget-market__wrapper-stats[_ngcontent-%COMP%]   .widget-market__stats-label[_ngcontent-%COMP%]{font-weight:400;font-size:12px;color:rgba(var(--ion-text-color-rgb),.6)}"]}),a})();var G=o(75658);let tt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[k.ez,u.Bz,v.u5,l.Pc]]}),a})();var et=o(88903);const it=[{path:"",component:X}];let st=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[k.ez,v.u5,l.Pc,u.Bz.forChild(it),G.d,l.Pc,tt,et.$],u.Bz]}),a})()}}]);