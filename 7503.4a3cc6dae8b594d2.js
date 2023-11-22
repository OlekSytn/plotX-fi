"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
    [7503], {
        97503: (ce, b, c) => {
            c.r(b), c.d(b, {
                SigninModule: () => se
            });
            var l = c(59928),
                d = c(69808),
                p = c(93075),
                v = c(30325),
                g = c(70655),
                _ = c(92340),
                u = c(5218),
                S = c(66416),
                e = c(5e3),
                y = c(67990),
                w = c(62562),
                A = c(51704),
                M = c(16628),
                P = c(21086),
                k = c(591);
            const I_loadScript = function E(n, s, t, i, o) {
                    window.ng2recaptchaloaded = () => {
                        s(grecaptcha)
                    };
                    const a = document.createElement("script");
                    a.innerHTML = "", a.src = `${i||"https://www.google.com/recaptcha/api.js"}?render=${n}&onload=ng2recaptchaloaded${t}`, o && (a.nonce = o), a.async = !0, a.defer = !0, document.head.appendChild(a)
                },
                U = new e.OlP("recaptcha-language"),
                O = new e.OlP("recaptcha-base-url"),
                N = new e.OlP("recaptcha-nonce-tag"),
                R = new e.OlP("recaptcha-settings"),
                q = new e.OlP("recaptcha-v3-site-key");
            let x = (() => {
                    class n {
                        constructor(t, i, o, a, h) {
                            this.platformId = t, this.language = i, this.baseUrl = o, this.nonce = a, this.v3SiteKey = h, this.init(), this.ready = (0, d.NF)(this.platformId) ? n.ready.asObservable() : (0, P.of)()
                        }
                        init() {
                            if (!n.ready && (0, d.NF)(this.platformId)) {
                                const t = new k.X(null);
                                n.ready = t, I_loadScript(this.v3SiteKey || "explicit", a => t.next(a), this.language ? "&hl=" + this.language : "", this.baseUrl, this.nonce)
                            }
                        }
                    }
                    return n.\u0275fac = function (t) {
                        return new(t || n)(e.LFG(e.Lbi), e.LFG(U, 8), e.LFG(O, 8), e.LFG(N, 8), e.LFG(q, 8))
                    }, n.\u0275prov = e.Yz7({
                        token: n,
                        factory: n.\u0275fac
                    }), n.ready = null, n
                })(),
                L = 0,
                C = (() => {
                    class n {
                        constructor(t, i, o, a) {
                            this.elementRef = t, this.loader = i, this.zone = o, this.id = "ngrecaptcha-" + L++, this.errorMode = "default", this.resolved = new e.vpe, this.error = new e.vpe, a && (this.siteKey = a.siteKey, this.theme = a.theme, this.type = a.type, this.size = a.size, this.badge = a.badge)
                        }
                        ngAfterViewInit() {
                            this.subscription = this.loader.ready.subscribe(t => {
                                null != t && t.render instanceof Function && (this.grecaptcha = t, this.renderRecaptcha())
                            })
                        }
                        ngOnDestroy() {
                            this.grecaptchaReset(), this.subscription && this.subscription.unsubscribe()
                        }
                        execute() {
                            "invisible" === this.size && (null != this.widget ? this.grecaptcha.execute(this.widget) : this.executeRequested = !0)
                        }
                        reset() {
                            null != this.widget && (this.grecaptcha.getResponse(this.widget) && this.resolved.emit(null), this.grecaptchaReset())
                        }
                        get __unsafe_widgetValue() {
                            return null != this.widget ? this.grecaptcha.getResponse(this.widget) : null
                        }
                        expired() {
                            this.resolved.emit(null)
                        }
                        errored(t) {
                            this.error.emit(t)
                        }
                        captchaResponseCallback(t) {
                            this.resolved.emit(t)
                        }
                        grecaptchaReset() {
                            null != this.widget && this.zone.runOutsideAngular(() => this.grecaptcha.reset(this.widget))
                        }
                        renderRecaptcha() {
                            const t = {
                                badge: this.badge,
                                callback: i => {
                                    this.zone.run(() => this.captchaResponseCallback(i))
                                },
                                "expired-callback": () => {
                                    this.zone.run(() => this.expired())
                                },
                                sitekey: this.siteKey,
                                size: this.size,
                                tabindex: this.tabIndex,
                                theme: this.theme,
                                type: this.type
                            };
                            "handled" === this.errorMode && (t["error-callback"] = (...i) => {
                                this.zone.run(() => this.errored(i))
                            }), this.widget = this.grecaptcha.render(this.elementRef.nativeElement, t), !0 === this.executeRequested && (this.executeRequested = !1, this.execute())
                        }
                    }
                    return n.\u0275fac = function (t) {
                        return new(t || n)(e.Y36(e.SBq), e.Y36(x), e.Y36(e.R0b), e.Y36(R, 8))
                    }, n.\u0275cmp = e.Xpm({
                        type: n,
                        selectors: [
                            ["re-captcha"]
                        ],
                        hostVars: 1,
                        hostBindings: function (t, i) {
                            2 & t && e.uIk("id", i.id)
                        },
                        inputs: {
                            id: "id",
                            errorMode: "errorMode",
                            siteKey: "siteKey",
                            theme: "theme",
                            type: "type",
                            size: "size",
                            badge: "badge",
                            tabIndex: "tabIndex"
                        },
                        outputs: {
                            resolved: "resolved",
                            error: "error"
                        },
                        exportAs: ["reCaptcha"],
                        decls: 0,
                        vars: 0,
                        template: function (t, i) {},
                        encapsulation: 2
                    }), n
                })(),
                T = (() => {
                    class n {}
                    return n.\u0275fac = function (t) {
                        return new(t || n)
                    }, n.\u0275mod = e.oAB({
                        type: n
                    }), n.\u0275inj = e.cJS({}), n
                })(),
                J = (() => {
                    class n {}
                    return n.\u0275fac = function (t) {
                        return new(t || n)
                    }, n.\u0275mod = e.oAB({
                        type: n
                    }), n.\u0275inj = e.cJS({
                        providers: [x],
                        imports: [
                            [T]
                        ]
                    }), n
                })();

            function F(n, s) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "ion-buttons", 17), e.TgZ(1, "ion-button", 18), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw().closeWindow()
                    }), e._UZ(2, "ion-icon", 19), e.qZA(), e.qZA()
                }
            }

            function Y(n, s) {
                if (1 & n && e.GkF(0, 20), 2 & n) {
                    e.oxw();
                    const t = e.MAs(29);
                    e.Q6J("ngTemplateOutlet", t)
                }
            }

            function j(n, s) {
                if (1 & n && e.GkF(0, 20), 2 & n) {
                    e.oxw();
                    const t = e.MAs(31);
                    e.Q6J("ngTemplateOutlet", t)
                }
            }

            function W(n, s) {
                if (1 & n && e.GkF(0, 20), 2 & n) {
                    e.oxw();
                    const t = e.MAs(27);
                    e.Q6J("ngTemplateOutlet", t)
                }
            }

            function H(n, s) {
                if (1 & n && e.GkF(0, 20), 2 & n) {
                    e.oxw();
                    const t = e.MAs(33);
                    e.Q6J("ngTemplateOutlet", t)
                }
            }

            function V(n, s) {
                if (1 & n && e.GkF(0, 20), 2 & n) {
                    e.oxw();
                    const t = e.MAs(35);
                    e.Q6J("ngTemplateOutlet", t)
                }
            }

            function D(n, s) {
                1 & n && e._UZ(0, "ion-icon", 35)
            }

            function B(n, s) {
                1 & n && e._UZ(0, "ion-icon", 36)
            }

            function z(n, s) {
                1 & n && (e.TgZ(0, "div", 37), e._uU(1, " Email not permitted. Please use a different email "), e.qZA())
            }
            const G = function (n) {
                return {
                    "btn-loader": n
                }
            };

            function K(n, s) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 21), e.TgZ(1, "h2", 22), e._uU(2, "Get Started"), e.qZA(), e.TgZ(3, "form"), e.TgZ(4, "div", 23), e.TgZ(5, "ion-input", 24), e.NdJ("keyup", function () {
                        return e.CHM(t), e.oxw().validateEmail()
                    })("ngModelChange", function (o) {
                        return e.CHM(t), e.oxw().emailId = o
                    }), e.qZA(), e.YNc(6, D, 1, 0, "ion-icon", 25), e.YNc(7, B, 1, 0, "ion-icon", 26), e.qZA(), e.YNc(8, z, 2, 0, "div", 27), e.TgZ(9, "div", 28), e.TgZ(10, "button", 29), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw().handleEmailLogin()
                    }), e._uU(11, "Continue"), e.TgZ(12, "span", 30), e._UZ(13, "span"), e.qZA(), e._UZ(14, "ion-ripple-effect"), e.qZA(), e.qZA(), e.qZA(), e.TgZ(15, "div", 31), e.TgZ(16, "div", 32), e._uU(17, "or"), e.qZA(), e.TgZ(18, "ion-button", 33), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw().selectWalletPref(2)
                    }), e._uU(19, "Login via social"), e.qZA(), e.TgZ(20, "div", 34), e._uU(21, "or"), e.qZA(), e.TgZ(22, "ion-button", 33), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw().selectWalletPref(1)
                    }), e._uU(23, "Web3 wallet "), e.qZA(), e.qZA(), e.qZA()
                }
                if (2 & n) {
                    const t = e.oxw();
                    e.xp6(5), e.Q6J("ngModel", t.emailId), e.xp6(1), e.Q6J("ngIf", t.emailId && !t.validEmail), e.xp6(1), e.Q6J("ngIf", t.emailId && t.validEmail), e.xp6(1), e.Q6J("ngIf", t.isInvalidEmail), e.xp6(2), e.Q6J("disabled", !t.validEmail || t.emailLoginProcess)("ngClass", e.VKq(6, G, t.emailLoginProcess))
                }
            }

            function Q(n, s) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 21), e.TgZ(1, "h2", 22), e._uU(2, "Get Started"), e.qZA(), e.TgZ(3, "a", 38), e.NdJ("click", function () {
                        e.CHM(t);
                        const o = e.MAs(27),
                            a = e.oxw();
                        return o.execute(), a.socialTypeTemp = "google"
                    }), e.TgZ(4, "span", 39), e._UZ(5, "ion-icon", 40), e.qZA(), e.TgZ(6, "span", 41), e._uU(7, "Continue with Google"), e.qZA(), e._UZ(8, "ion-ripple-effect"), e.qZA(), e.TgZ(9, "a", 42), e.NdJ("click", function () {
                        e.CHM(t);
                        const o = e.MAs(27),
                            a = e.oxw();
                        return o.execute(), a.socialTypeTemp = "facebook"
                    }), e.TgZ(10, "span", 39), e._UZ(11, "ion-icon", 43), e.qZA(), e.TgZ(12, "span", 41), e._uU(13, "Continue with Facebook"), e.qZA(), e._UZ(14, "ion-ripple-effect"), e.qZA(), e.TgZ(15, "div", 31), e.TgZ(16, "div", 32), e._uU(17, "or"), e.qZA(), e.TgZ(18, "ion-button", 33), e.NdJ("click", function () {
                        e.CHM(t);
                        const o = e.MAs(25),
                            a = e.oxw();
                        return o.execute(), a.userPrefTemp = 0
                    }), e._uU(19, "Use email "), e.qZA(), e.TgZ(20, "div", 34), e._uU(21, "or"), e.qZA(), e.TgZ(22, "ion-button", 33), e.NdJ("click", function () {
                        e.CHM(t);
                        const o = e.MAs(25),
                            a = e.oxw();
                        return o.execute(), a.userPrefTemp = 1
                    }), e._uU(23, "Web3 wallet "), e.qZA(), e.qZA(), e.TgZ(24, "re-captcha", 44, 45), e.NdJ("resolved", function (o) {
                        e.CHM(t);
                        const a = e.oxw();
                        return o && a.selectWalletPref(o)
                    }), e.qZA(), e.TgZ(26, "re-captcha", 44, 46), e.NdJ("resolved", function (o) {
                        e.CHM(t);
                        const a = e.oxw();
                        return o && a.handleSocialLogin(o)
                    }), e.qZA(), e.qZA()
                }
                if (2 & n) {
                    const t = e.oxw();
                    e.xp6(24), e.s9C("siteKey", t.siteKey), e.xp6(2), e.s9C("siteKey", t.siteKey)
                }
            }

            function $(n, s) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 21), e.TgZ(1, "h2", 22), e._uU(2, "Get Started"), e.qZA(), e.TgZ(3, "a", 38), e.NdJ("click", function () {
                        e.CHM(t);
                        const o = e.oxw();
                        return o.socialTypeTemp = "google", o.handleSocialLogin(null)
                    }), e.TgZ(4, "span", 39), e._UZ(5, "ion-icon", 40), e.qZA(), e.TgZ(6, "span", 41), e._uU(7, "Continue with Google"), e.qZA(), e._UZ(8, "ion-ripple-effect"), e.qZA(), e.TgZ(9, "a", 42), e.NdJ("click", function () {
                        e.CHM(t);
                        const o = e.oxw();
                        return o.socialTypeTemp = "facebook", o.handleSocialLogin(null)
                    }), e.TgZ(10, "span", 39), e._UZ(11, "ion-icon", 43), e.qZA(), e.TgZ(12, "span", 41), e._uU(13, "Continue with Facebook"), e.qZA(), e._UZ(14, "ion-ripple-effect"), e.qZA(), e.TgZ(15, "div", 31), e.TgZ(16, "div", 32), e._uU(17, "or"), e.qZA(), e.TgZ(18, "ion-button", 33), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw().selectWalletPref(0)
                    }), e._uU(19, "Use email "), e.qZA(), e.TgZ(20, "div", 34), e._uU(21, "or"), e.qZA(), e.TgZ(22, "ion-button", 33), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw().selectWalletPref(1)
                    }), e._uU(23, "Web3 wallet "), e.qZA(), e.qZA(), e.qZA()
                }
            }

            function X(n, s) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "a", 49), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw(2).enableMetamaskForLogin()
                    }), e._UZ(1, "ion-img", 54), e.TgZ(2, "div"), e._uU(3, "Metamask"), e.qZA(), e._UZ(4, "ion-ripple-effect"), e.qZA()
                }
            }

            function ee(n, s) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "a", 49), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw(2).installMetamask()
                    }), e._UZ(1, "ion-img", 54), e.TgZ(2, "div"), e._uU(3, "Install Metamask"), e.qZA(), e._UZ(4, "ion-ripple-effect"), e.qZA()
                }
            }

            function te(n, s) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "button", 57), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw(3).enableMetamaskForLogin()
                    }), e._UZ(1, "ion-img", 54), e._UZ(2, "ion-img", 50), e._UZ(3, "ion-img", 52), e._UZ(4, "ion-img", 58), e.qZA()
                }
            }

            function ne(n, s) {
                if (1 & n && (e.TgZ(0, "div", 55), e.YNc(1, te, 5, 0, "button", 56), e.qZA()), 2 & n) {
                    const t = e.oxw(2);
                    e.xp6(1), e.Q6J("ngIf", t.isMetamaskInstalled || t.mobileAccessability)
                }
            }

            function ie(n, s) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 21), e.TgZ(1, "h2", 22), e._uU(2, "Get Started"), e.qZA(), e.TgZ(3, "div", 47), e.YNc(4, X, 5, 0, "a", 48), e.YNc(5, ee, 5, 0, "a", 48), e.TgZ(6, "a", 49), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw().enableWC("Trust Wallet")
                    }), e._UZ(7, "ion-img", 50), e.TgZ(8, "div"), e._uU(9, "Trust Wallet"), e.qZA(), e._UZ(10, "ion-ripple-effect"), e.qZA(), e.TgZ(11, "a", 49), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw().enableWC("Wallet Connect")
                    }), e._UZ(12, "ion-img", 51), e.TgZ(13, "div"), e._uU(14, "WalletConnect"), e.qZA(), e._UZ(15, "ion-ripple-effect"), e.qZA(), e.TgZ(16, "a", 49), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw().enableWC("Gnosis Safe")
                    }), e._UZ(17, "ion-img", 52), e.TgZ(18, "div"), e._uU(19, "Gnosis Safe"), e.qZA(), e._UZ(20, "ion-ripple-effect"), e.qZA(), e.qZA(), e.TgZ(21, "div", 31), e.TgZ(22, "div", 32), e._uU(23, "or"), e.qZA(), e.TgZ(24, "ion-button", 33), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw().selectWalletPref(2)
                    }), e._uU(25, "Login via social"), e.qZA(), e.TgZ(26, "div", 34), e._uU(27, "or"), e.qZA(), e.TgZ(28, "ion-button", 33), e.NdJ("click", function () {
                        return e.CHM(t), e.oxw().selectWalletPref(0)
                    }), e._uU(29, "Use email "), e.qZA(), e.qZA(), e.qZA(), e.YNc(30, ne, 2, 1, "div", 53)
                }
                if (2 & n) {
                    const t = e.oxw();
                    e.xp6(4), e.Q6J("ngIf", t.isMetamaskInstalled || t.mobileAccessability), e.xp6(1), e.Q6J("ngIf", !t.isMetamaskInstalled && !t.mobileAccessability), e.xp6(25), e.Q6J("ngIf", !1)
                }
            }

            function oe(n, s) {
                if (1 & n && (e.TgZ(0, "div", 21), e.TgZ(1, "h2"), e._uU(2, "Please check your inbox"), e.qZA(), e._UZ(3, "ion-img", 59), e.TgZ(4, "div", 60), e._uU(5, "We have emailed login details to "), e.TgZ(6, "span", 61), e._uU(7), e.qZA(), e._uU(8, "."), e._UZ(9, "br"), e._uU(10, " To start using the app, tap the login button in the email we sent to you."), e.qZA(), e.qZA()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(7), e.Oqu(t.emailId)
                }
            }
            const ae = [{
                path: "",
                component: (() => {
                    class n {
                        constructor(t, i, o, a, h, Z) {
                            this.router = t, this.helpersService = i, this.apiService = o, this.web3Service = a, this._analytics = h, this.platform = Z, this.isOpen = !0, this.waitingForLogin = !1, this.loginSuccess = !1, this.invalidEmail = !1, this.wcConnected = !1, this.emailLoginProcess = !1, this.DEFAULT_CONNECTION_TYPE = _.N.DEFAULT_CONNECTION_TYPE, this.WALLET_CONNECTION_TYPES = _.N.WALLET_CONNECTION_TYPES, this.socialLoginProcess = !1, this.initialStep = !0, this.isAddressSet = !1, this.siteKey = _.N.captchaSiteKey, this.isInvalidEmail = !1, this.analyticsParam = {}, this.showCaptcha = _.N.showCaptcha, this.handleEmailLogin = () => (0, g.__awaiter)(this, void 0, void 0, function* () {
                                try {
                                    let r = this;
                                    this.choosePreference("magic-link"), this.validEmail ? (this.emailLoginProcess = !0, localStorage.setItem("userEmail", this.emailId), console.log("..........email id", this.emailId), this.analyticsParam.email_id = this.emailId, this.analyticsParam.login_type = "email", localStorage.setItem("login-type", "email"), this.sendAnalyticsEvent(u.$.continue_with_login), this.web3Service.loginWithMagicLink(this.emailId).on("email-sent", () => {
                                        r.waitingForLogin = !0, r.emailLoginProcess = !1
                                    }).then(f => {
                                        r.web3Service.getMetadata(), setTimeout(() => {
                                            r.loginSuccess = !0, setTimeout(() => {
                                                this.emailId = void 0, r.router.navigate(["/home"]), localStorage.removeItem("pendingTask")
                                            }, 1e3)
                                        }, 2e3)
                                    }).catch(f => {
                                        console.log("Catch error: ", f.message), f.message.includes("permission") && (r.isInvalidEmail = !0, r.emailLoginProcess = !1)
                                    })) : this.invalidEmail = !0
                                } catch (r) {
                                    this.emailLoginProcess = !1, console.log(r)
                                }
                            }), this.enableWC = (r = "") => (0, g.__awaiter)(this, void 0, void 0, function* () {
                                try {
                                    this.analyticsParam.login_type = r || "wallet", localStorage.setItem("login-type", this.analyticsParam.login_type), this.sendAnalyticsEvent(u.$.continue_with_login);
                                    let {
                                        connected: m
                                    } = yield this.web3Service.enableWalletConnectForLogin();
                                    this.loginSuccess = m, yield this.choosePreference("wallet"), this.sendAnalyticsEvent(u.$.login_success_server), r && localStorage.setItem("selectConnection", r), sessionStorage.setItem("connectionTypeParam", this.WALLET_CONNECTION_TYPES[1]), localStorage.setItem("connectionTypeParam", this.WALLET_CONNECTION_TYPES[1]), localStorage.setItem("walletType", r), setTimeout(() => {
                                        this.router.navigate(["/home"]), localStorage.removeItem("pendingTask")
                                    }, 1e3)
                                } catch (m) {
                                    console.log("permission denied")
                                }
                            })
                        }
                        ionViewWillEnter() {
                            this.waitingForLogin = !1, this.isAddressSet = !1, this.waitingForLogin = !1, this.platform.is("cordova") && S.Z.registerUnidentifiedUser()
                        }
                        ionViewDidEnter() {
                            this.web3Service.isReady.next(!0), localStorage.clear(), this._analytics.reset()
                        }
                        ngOnInit() {
                            return (0, g.__awaiter)(this, void 0, void 0, function* () {
                                this.checkForMetamask();
                                let t = localStorage.getItem("pendingTask");
                                this.isPendingTask = t ? JSON.parse(t).isPending : void 0, this.challengeId = this.isPendingTask ? JSON.parse(t).challengeId : void 0, this.web3Service.addressParam.subscribe(i => (0, g.__awaiter)(this, void 0, void 0, function* () {
                                    console.log(this.web3Service.isLoggedIn.value, "..................signin", i, localStorage.getItem("userAddress")), i && "0x" != i && i.includes("0x") ? (this.userAddress = i, this.userAddressParam != this.userAddress && (this.userAddressParam = this.userAddress), this.web3Service.setLocalProperty(), this._analytics.showCTWebPush(1e4), !this.isAddressSet && !this.web3Service.isLogout.value && (console.log("...............iaddress set......."), this._analytics.setUserWallet(i), this.sendAnalyticsEvent(u.$.login_success_server, !0), "/home" != this.router.url && this.router.navigateByUrl("/home"), this.isAddressSet = !0), this.web3Service.isLogout.next(!1)) : this.userAddress = null
                                }))
                            })
                        }
                        checkForMetamask() {
                            return (0, g.__awaiter)(this, void 0, void 0, function* () {
                                this.isMetamaskInstalled = yield this.web3Service.isMetamaskInstalled(), this.mobileAccessability = this.helpersService.getUserAccessability()
                            })
                        }
                        installMetamask() {
                            this.analyticsParam.login_type = "metamask", this.sendAnalyticsEvent(u.$.continue_with_login), window.open("https://metamask.io/", "_blank")
                        }
                        handleSocialLogin(t) {
                            return (0, g.__awaiter)(this, void 0, void 0, function* () {
                                try {
                                    t && this.verifyRecaptcha(t);
                                    let i = this.socialTypeTemp;
                                    if (this.socialLoginProcess = !0, this.socialLoginProvider = i, localStorage.getItem("affiliate_data")) {
                                        let o = `${_.N.socialAffiliateAPI}${i}`;
                                        localStorage.setItem("ukey_SL", Date.now().toString()), this.apiService.postCallBonus(o, {
                                            key: localStorage.getItem("ukey_SL")
                                        }).subscribe(a => (0, g.__awaiter)(this, void 0, void 0, function* () {
                                            localStorage.setItem("uid_SL", a.data), this.choosePreference("magic-link"), localStorage.setItem("login-type", i), this.analyticsParam.login_type = i, this.sendAnalyticsEvent(u.$.continue_with_login), yield this.web3Service.socialLoginWithProvider(i)
                                        }), a => {
                                            this.socialLoginProcess = !1, console.log(a)
                                        })
                                    } else this.choosePreference("magic-link"), localStorage.setItem("login-type", i), this.analyticsParam.login_type = i, this.sendAnalyticsEvent(u.$.continue_with_login), yield this.web3Service.socialLoginWithProvider(i)
                                } catch (i) {
                                    this.socialLoginProcess = !1, console.log(i)
                                }
                            })
                        }
                        validateEmail() {
                            this.isInvalidEmail = !1, setTimeout(() => {
                                this.emailId = this.emailId.replace(" ", ""), this.validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.emailId)
                            }, 100)
                        }
                        enableMetamaskForLogin() {
                            return (0, g.__awaiter)(this, void 0, void 0, function* () {
                                try {
                                    this.mobileAccessability && this.isMetamaskInstalled || !this.mobileAccessability ? (this.analyticsParam.login_type = "metamask", localStorage.setItem("login-type", "metamask"), this.sendAnalyticsEvent(u.$.continue_with_login), setTimeout(() => (0, g.__awaiter)(this, void 0, void 0, function* () {
                                        let {
                                            connected: t
                                        } = yield this.web3Service.enableMetamaskForLogin();
                                        this.loginSuccess = t, yield this.choosePreference("wallet"), sessionStorage.setItem("connectionTypeParam", this.WALLET_CONNECTION_TYPES[0]), localStorage.setItem("connectionTypeParam", this.WALLET_CONNECTION_TYPES[0]), setTimeout(() => {
                                            this.router.navigate(["/home"]), localStorage.removeItem("pendingTask")
                                        }, 1e3)
                                    }), 100)) : this.enableWC("metamask")
                                } catch (t) {
                                    console.log("permission denied")
                                }
                            })
                        }
                        closeWindow() {
                            this.initialStep = !0, this.userPref = void 0, this.analyticsParam = {}
                        }
                        choosePreference(t) {
                            switch (t) {
                                case "wallet":
                                    this.selectedPreference = "wallet", localStorage.setItem("user-preference", this.selectedPreference);
                                    break;
                                case "magic-link":
                                    this.selectedPreference = "magic-link", this.web3Service.isMagicLink.next(!0), localStorage.setItem("user-preference", this.selectedPreference), sessionStorage.removeItem("connectionTypeParam"), localStorage.removeItem("connectionTypeParam"), localStorage.removeItem("selectConnection");
                                    break;
                                default:
                                    this.selectedPreference = this.DEFAULT_CONNECTION_TYPE, localStorage.setItem("user-preference", this.selectedPreference), localStorage.setItem("login-type", "wallet"), sessionStorage.removeItem("connectionTypeParam"), localStorage.removeItem("connectionTypeParam"), localStorage.removeItem("selectConnection")
                            }
                        }
                        selectWalletPref(t) {
                            "string" != typeof t ? this.userPrefTemp = null != t && t.toString() ? this.userPrefTemp = t : this.userPrefTemp : this.verifyRecaptcha(t),
                            this.emailId = void 0,
                            this.initialStep = !1,
                            this.emailLoginProcess = !1,
                            this.waitingForLogin = !1,
                            this.userPref = parseInt(this.userPrefTemp),
                            this.initialStep = 2 == this.userPref
                        }
                        verifyRecaptcha(t) {
                            t && this.apiService.postCall(_.N.captchaVerifyApi, {
                                token: t
                            }).subscribe(i => {
                                try {
                                    console.log("captcha:   ",i)
                                } catch (o) {
                                    console.log("captcha:   ",o)
                                }
                            })
                        }
                        sendAnalyticsEvent(t, i = !1) {
                            this._analytics.trackMixPanel(t, this.analyticsParam), i && (this.analyticsParam = {})
                        }
                        captchaReset() {
                            grecaptcha.reset(), grecaptcha.reset(1)
                        }
                    }
                    return n.\u0275fac = function (t) {
                        return new(t || n)(e.Y36(v.F0), e.Y36(y.$), e.Y36(w.O), e.Y36(A.U), e.Y36(M.y), e.Y36(l.t4))
                    }, n.\u0275cmp = e.Xpm({
                        type: n,
                        selectors: [
                            ["app-signin"]
                        ],
                        decls: 36,
                        vars: 7,
                        consts: [
                            [1, "header", 2, "border", "none"],
                            [2, "--background", "transparent"],
                            ["slot", "start", 4, "ngIf"],
                            ["src", "assets/img/PlotX_logo-light.svg", "alt", "PlotX", 2, "height", "30px"],
                            [3, "fullscreen"],
                            [3, "ngTemplateOutlet", 4, "ngIf"],
                            [1, "text-center"],
                            [1, "fs-sm", "text-color-60"],
                            ["href", "https://plotx.io/disclaimers", "target", "_blank", 1, "link", "link-secondary"],
                            ["href", "https://plotx.io/terms", "target", "_blank", 1, "link", "link-secondary"],
                            ["href", "https://plotx.io/privacy", "target", "_blank", 1, "link", "link-secondary"],
                            ["href", "https://docsend.com/view/nnea7um4434u49uh", "target", "_blank", 1, "link", "link-secondary"],
                            ["emailTemplate", ""],
                            ["socialTemplateCaptcha", ""],
                            ["socialTemplate", ""],
                            ["walletTemplate", ""],
                            ["waitingMagiclinkResponse", ""],
                            ["slot", "start"],
                            [1, "btn-back", 3, "click"],
                            ["slot", "icon-only", "name", "arrow-back"],
                            [3, "ngTemplateOutlet"],
                            [1, "content", "text-center"],
                            [1, "mb-4"],
                            [1, "form-group", "mb-3"],
                            ["name", "emailId", "placeholder", "Enter Email Address", "inputmode", "email", "type", "email", 3, "ngModel", "keyup", "ngModelChange"],
                            ["class", "validation-icon text-danger", "name", "close-circle", 4, "ngIf"],
                            ["class", "validation-icon text-success", "name", "checkmark-circle", 4, "ngIf"],
                            ["class", "fs-sm text-danger mb-2", 4, "ngIf"],
                            [2, "width", "120px", "margin", "0 auto"],
                            [1, "btn", "btn-block", "btn-fill-primary", "ion-activatable", "ripple-parent", 3, "disabled", "ngClass", "click"],
                            [1, "dot-flashing", "dot-flashing__danger-warning-success"],
                            [2, "width", "250px", "margin", "0 auto"],
                            [1, "separator", "separator-content", "separator-text-20", "mt40", "mb20"],
                            ["fill", "clear", "shape", "round", "color", "secondary", 1, "fs-reg", 3, "click"],
                            [1, "separator", "separator-content", "separator-text-20", "my20"],
                            ["name", "close-circle", 1, "validation-icon", "text-danger"],
                            ["name", "checkmark-circle", 1, "validation-icon", "text-success"],
                            [1, "fs-sm", "text-danger", "mb-2"],
                            [1, "btn-social-login", "ion-activatable", "ripple-parent", "mb-4", 3, "click"],
                            [1, "social-icon"],
                            ["src", "assets/icon/fa-google-brands.svg"],
                            [1, "social-txt"],
                            [1, "btn-social-login", "ion-activatable", "ripple-parent", 3, "click"],
                            ["src", "assets/icon/fa-facebook-f-brands.svg"],
                            ["size", "invisible", 3, "siteKey", "resolved"],
                            ["captchaRef", "reCaptcha"],
                            ["captchaRef1", "reCaptcha"],
                            [1, "web3-items"],
                            ["class", "web3-item ion-activatable ripple-parent", 3, "click", 4, "ngIf"],
                            [1, "web3-item", "ion-activatable", "ripple-parent", 3, "click"],
                            ["src", "assets/img/trust_wallet.svg"],
                            ["src", "assets/img/walletConnect.svg"],
                            ["src", "assets/img/gnosis_safe.png"],
                            ["class", "text-center mt30", 4, "ngIf"],
                            ["src", "assets/img/metamask-fox.svg"],
                            [1, "text-center", "mt30"],
                            ["class", "btn btn-block btn-lg btn-outline-light btn-web3 mb15", 3, "click", 4, "ngIf"],
                            [1, "btn", "btn-block", "btn-lg", "btn-outline-light", "btn-web3", "mb15", 3, "click"],
                            ["src", "assets/img/crypto-com.png"],
                            ["src", "assets/img/illustration-connection.png", 2, "width", "213px", "max-width", "80vw", "margin", "0 auto"],
                            [1, "fs-sm"],
                            [1, "fw-700", "text-primary"]
                        ],
                        template: function (t, i) {
                            1 & t && (e.TgZ(0, "ion-header", 0), e.TgZ(1, "ion-toolbar", 1), e.YNc(2, F, 3, 0, "ion-buttons", 2), e.TgZ(3, "ion-title"), e._UZ(4, "ion-img", 3), e.qZA(), e.qZA(), e.qZA(), e.TgZ(5, "ion-content", 4), e.YNc(6, Y, 1, 1, "ng-container", 5), e.YNc(7, j, 1, 1, "ng-container", 5), e.YNc(8, W, 1, 1, "ng-container", 5), e.YNc(9, H, 1, 1, "ng-container", 5), e.YNc(10, V, 1, 1, "ng-container", 5), e.qZA(), e.TgZ(11, "ion-footer", 6), e.TgZ(12, "div", 7), e._uU(13, "I agree to the "), e.TgZ(14, "a", 8), e._uU(15, "Disclaimer"), e.qZA(), e._uU(16, ", "), e.TgZ(17, "a", 9), e._uU(18, "Terms of Use"), e.qZA(), e._uU(19, ", "), e.TgZ(20, "a", 10), e._uU(21, "Privacy Policy"), e.qZA(), e._uU(22, " & "), e.TgZ(23, "a", 11), e._uU(24, "risks"), e.qZA(), e._uU(25, " attached "), e.qZA(), e.qZA(), e.YNc(26, K, 24, 8, "ng-template", null, 12, e.W1O), e.YNc(28, Q, 28, 2, "ng-template", null, 13, e.W1O), e.YNc(30, $, 24, 0, "ng-template", null, 14, e.W1O), e.YNc(32, ie, 31, 3, "ng-template", null, 15, e.W1O), e.YNc(34, oe, 11, 1, "ng-template", null, 16, e.W1O)), 2 & t && (e.xp6(2), e.Q6J("ngIf", !i.initialStep), e.xp6(3), e.Q6J("fullscreen", !1), e.xp6(1), e.Q6J("ngIf", i.initialStep && i.showCaptcha), e.xp6(1), e.Q6J("ngIf", i.initialStep && !i.showCaptcha), e.xp6(1), e.Q6J("ngIf", 0 == i.userPref && !i.waitingForLogin), e.xp6(1), e.Q6J("ngIf", 1 == i.userPref), e.xp6(1), e.Q6J("ngIf", i.waitingForLogin && !i.initialStep))
                        },
                        directives: [l.Gu, l.sr, d.O5, l.wd, l.Xz, l.W2, l.fr, l.Sm, l.YG, l.gu, d.tP, p._Y, p.JL, p.F, l.pK, l.j9, p.JJ, p.On, d.mk, l.H$, C],
                        styles: [".header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;left:0;top:0;text-align:center}.content[_ngcontent-%COMP%]{padding-top:30px;padding-bottom:30px}.btn-social-login[_ngcontent-%COMP%]{max-width:300px;margin-left:auto;margin-right:auto}.form-group[_ngcontent-%COMP%]{position:relative;border:1px solid #a1a1a1;border-radius:12px}.form-group[_ngcontent-%COMP%]   .validation-icon[_ngcontent-%COMP%]{font-size:22px;position:absolute;right:1rem;top:50%;transform:translateY(-50%)}.btn-web3[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-color:rgba(var(--ion-text-color-rgb),.08);gap:10px}.btn-web3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .btn-web3[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:100%;max-width:24px;max-height:24px}.wrapper_walletaddress[_ngcontent-%COMP%]{background-color:rgba(var(--ion-text-color-rgb),.05);border-radius:12px;padding:16px 16px 16px 12px;display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-top:10px}.wrapper_walletaddress[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .wrapper_walletaddress[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:24px!important;height:24px!important;border-radius:50%;border:1px solid #4e75ff!important;margin-right:10px}.web3-items[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem;gap:1rem}.web3-items[_ngcontent-%COMP%]   .web3-item[_ngcontent-%COMP%]{border-radius:20px;color:var(--ion-text-color);font-size:12px;text-decoration:none;cursor:pointer;text-align:center;padding:1rem}.web3-items[_ngcontent-%COMP%]   .web3-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .web3-items[_ngcontent-%COMP%]   .web3-item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:25px;margin-bottom:1rem}.signup-types[_ngcontent-%COMP%]{display:grid;grid-gap:42px;gap:42px;margin-top:42px}.signup-types[_ngcontent-%COMP%]   .signup-type[_ngcontent-%COMP%]{background-color:#202020;border:1px solid rgba(var(--ion-text-color-rgb),.1);border-radius:20px;color:var(--ion-text-color);text-decoration:none;cursor:pointer;text-align:center;padding:16px;display:flex;flex-direction:column;height:190px;align-items:center;justify-content:space-between}.signup-types[_ngcontent-%COMP%]   .signup-type[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:.5rem}.signup-types[_ngcontent-%COMP%]   .signup-type[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .signup-types[_ngcontent-%COMP%]   .signup-type[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{opacity:.5;height:38px}  .grecaptcha-badge{bottom:80px!important}"]
                    }), n
                })()
            }];
            let se = (() => {
                class n {}
                return n.\u0275fac = function (t) {
                    return new(t || n)
                }, n.\u0275mod = e.oAB({
                    type: n
                }), n.\u0275inj = e.cJS({
                    imports: [
                        [l.Pc, d.ez, p.u5, v.Bz.forChild(ae), J], v.Bz
                    ]
                }), n
            })()
        }
    }
]);