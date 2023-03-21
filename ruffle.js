(() => {
	var e, t, n = {
			240: (e, t, n) => {
				"use strict";

				function r(e, t, n) {
					t && e.getChannelData(0).set(t), n && e.getChannelData(1).set(n)
				}
				n.r(t), n.d(t, {
					AutoPlay: () => te,
					FLASH7_AND_8_MIMETYPE: () => ce,
					FLASH_ACTIVEX_CLASSID: () => ue,
					FLASH_MIMETYPE: () => ae,
					FLASH_MOVIE_MIMETYPE: () => le,
					FLASH_PLUGIN: () => Y,
					FUTURESPLASH_MIMETYPE: () => se,
					Letterbox: () => ne,
					LogLevel: () => ie,
					PublicAPI: () => De,
					ReadyState: () => de,
					RuffleEmbed: () => pe,
					RuffleObject: () => xe,
					RufflePlayer: () => we,
					SourceAPI: () => Ue,
					UnmuteOverlay: () => re,
					Version: () => We,
					VersionRange: () => Be,
					copyToAudioBuffer: () => r,
					installPlugin: () => X,
					isScriptAccessAllowed: () => he,
					isSwfFilename: () => me,
					loadRuffle: () => H,
					lookupElement: () => Z,
					pluginPolyfill: () => je,
					polyfill: () => Ne,
					publicPath: () => ke,
					registerElement: () => ee,
					ruffleShadowTemplate: () => K
				});
				const i = "undefined" != typeof AudioContext ? AudioContext : "undefined" != typeof webkitAudioContext ? webkitAudioContext : void 0;
				let o;
				const a = new Array(32).fill(void 0);

				function s(e) {
					return a[e]
				}
				a.push(void 0, null, !0, !1);
				let c = a.length;

				function l(e) {
					c === a.length && a.push(a.length + 1);
					const t = c;
					return c = a[t], a[t] = e, t
				}

				function u(e) {
					const t = s(e);
					return function(e) {
						e < 36 || (a[e] = c, c = e)
					}(e), t
				}
				let _ = new TextDecoder("utf-8", {
					ignoreBOM: !0,
					fatal: !0
				});
				_.decode();
				let f = null;

				function b() {
					return null !== f && f.buffer === o.memory.buffer || (f = new Uint8Array(o.memory.buffer)), f
				}

				function d(e, t) {
					return _.decode(b().subarray(e, e + t))
				}
				let g = 0,
					w = new TextEncoder("utf-8");
				const h = "function" == typeof w.encodeInto ? function(e, t) {
					return w.encodeInto(e, t)
				} : function(e, t) {
					const n = w.encode(e);
					return t.set(n), {
						read: e.length,
						written: n.length
					}
				};

				function m(e, t, n) {
					if (void 0 === n) {
						const n = w.encode(e),
							r = t(n.length);
						return b().subarray(r, r + n.length).set(n), g = n.length, r
					}
					let r = e.length,
						i = t(r);
					const o = b();
					let a = 0;
					for (; a < r; a++) {
						const t = e.charCodeAt(a);
						if (t > 127) break;
						o[i + a] = t
					}
					if (a !== r) {
						0 !== a && (e = e.slice(a)), i = n(i, r, r = a + 3 * e.length);
						const t = b().subarray(i + a, i + r);
						a += h(e, t).written
					}
					return g = a, i
				}
				let p = null;

				function y() {
					return null !== p && p.buffer === o.memory.buffer || (p = new Int32Array(o.memory.buffer)), p
				}

				function v(e) {
					return null == e
				}
				let x = null;

				function k(e) {
					const t = typeof e;
					if ("number" == t || "boolean" == t || null == e) return `${e}`;
					if ("string" == t) return `"${e}"`;
					if ("symbol" == t) {
						const t = e.description;
						return null == t ? "Symbol" : `Symbol(${t})`
					}
					if ("function" == t) {
						const t = e.name;
						return "string" == typeof t && t.length > 0 ? `Function(${t})` : "Function"
					}
					if (Array.isArray(e)) {
						const t = e.length;
						let n = "[";
						t > 0 && (n += k(e[0]));
						for (let r = 1; r < t; r++) n += ", " + k(e[r]);
						return n += "]", n
					}
					const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
					let r;
					if (!(n.length > 1)) return toString.call(e);
					if (r = n[1], "Object" == r) try {
						return "Object(" + JSON.stringify(e) + ")"
					} catch (e) {
						return "Object"
					}
					return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : r
				}

				function E(e, t, n, r) {
					const i = {
							a: e,
							b: t,
							cnt: 1,
							dtor: n
						},
						a = (...e) => {
							i.cnt++;
							const t = i.a;
							i.a = 0;
							try {
								return r(t, i.b, ...e)
							} finally {
								0 == --i.cnt ? o.__wbindgen_export_2.get(i.dtor)(t, i.b) : i.a = t
							}
						};
					return a.original = i, a
				}

				function S(e, t, n) {
					o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h08b35b209a139415(e, t, l(n))
				}

				function C(e, t, n) {
					o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h08b35b209a139415(e, t, l(n))
				}

				function A(e, t, n) {
					o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h08b35b209a139415(e, t, l(n))
				}

				function I(e, t, n) {
					o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2a4bc7e130fa01d5(e, t, n)
				}

				function P(e, t, n) {
					o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h08b35b209a139415(e, t, l(n))
				}

				function R(e, t, n) {
					o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h08b35b209a139415(e, t, l(n))
				}

				function F(e, t, n) {
					o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h08b35b209a139415(e, t, l(n))
				}

				function O(e, t) {
					o._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5f8345860c7f8b21(e, t)
				}

				function T(e, t, n) {
					o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hdce6c36b86516137(e, t, l(n))
				}
				let M = null;

				function L(e, t) {
					return (null !== M && M.buffer === o.memory.buffer || (M = new Float32Array(o.memory.buffer)), M).subarray(e / 4, e / 4 + t)
				}

				function j(e) {
					return function() {
						try {
							return e.apply(this, arguments)
						} catch (e) {
							o.__wbindgen_exn_store(l(e))
						}
					}
				}
				let N = 32;

				function W(e) {
					if (1 == N) throw new Error("out of js stack");
					return a[--N] = e, N
				}
				let B = null;

				function D(e, t) {
					return b().subarray(e / 1, e / 1 + t)
				}
				class U {
					static __wrap(e) {
						const t = Object.create(U.prototype);
						return t.ptr = e, t
					}
					__destroy_into_raw() {
						const e = this.ptr;
						return this.ptr = 0, e
					}
					free() {
						const e = this.__destroy_into_raw();
						o.__wbg_ruffle_free(e)
					}
					constructor(e, t, n) {
						try {
							var r = o.ruffle_new(l(e), l(t), W(n));
							return U.__wrap(r)
						} finally {
							a[N++] = void 0
						}
					}
					stream_from(e, t) {
						try {
							var n = m(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
								r = g;
							o.ruffle_stream_from(this.ptr, n, r, W(t))
						} finally {
							a[N++] = void 0
						}
					}
					load_data(e, t) {
						try {
							o.ruffle_load_data(this.ptr, l(e), W(t))
						} finally {
							a[N++] = void 0
						}
					}
					play() {
						o.ruffle_play(this.ptr)
					}
					pause() {
						o.ruffle_pause(this.ptr)
					}
					is_playing() {
						return 0 !== o.ruffle_is_playing(this.ptr)
					}
					prepare_context_menu() {
						return u(o.ruffle_prepare_context_menu(this.ptr))
					}
					run_context_menu_callback(e) {
						o.ruffle_run_context_menu_callback(this.ptr, e)
					}
					clear_custom_menu_items() {
						o.ruffle_clear_custom_menu_items(this.ptr)
					}
					destroy() {
						o.ruffle_destroy(this.ptr)
					}
					call_exposed_callback(e, t) {
						var n = m(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
							r = g,
							i = function(e, t) {
								const n = t(4 * e.length),
									r = (null !== B && B.buffer === o.memory.buffer || (B = new Uint32Array(o.memory.buffer)), B);
								for (let t = 0; t < e.length; t++) r[n / 4 + t] = l(e[t]);
								return g = e.length, n
							}(t, o.__wbindgen_malloc),
							a = g;
						return u(o.ruffle_call_exposed_callback(this.ptr, n, r, i, a))
					}
					set_trace_observer(e) {
						o.ruffle_set_trace_observer(this.ptr, l(e))
					}
					audio_context() {
						return u(o.ruffle_audio_context(this.ptr))
					}
				}
				const V = async function e(t) {
					void 0 === t && (t = new URL(n(903), n.b));
					const a = {
						wbg: {}
					};
					a.wbg.__wbindgen_object_clone_ref = function(e) {
						return l(s(e))
					}, a.wbg.__wbindgen_object_drop_ref = function(e) {
						u(e)
					}, a.wbg.__wbindgen_cb_drop = function(e) {
						const t = u(e).original;
						return 1 == t.cnt-- && (t.a = 0, !0)
					}, a.wbg.__wbindgen_is_function = function(e) {
						return "function" == typeof s(e)
					}, a.wbg.__wbindgen_json_parse = function(e, t) {
						return l(JSON.parse(d(e, t)))
					}, a.wbg.__wbindgen_json_serialize = function(e, t) {
						const n = s(t);
						var r = m(JSON.stringify(void 0 === n ? null : n), o.__wbindgen_malloc, o.__wbindgen_realloc),
							i = g;
						y()[e / 4 + 1] = i, y()[e / 4 + 0] = r
					}, a.wbg.__wbindgen_string_new = function(e, t) {
						return l(d(e, t))
					}, a.wbg.__wbg_isFullscreen_96b85640554e160d = function(e) {
						return s(e).isFullscreen
					}, a.wbg.__wbg_displayUnsupportedMessage_a8f81a8e054e5e91 = function(e) {
						s(e).displayUnsupportedMessage()
					}, a.wbg.__wbg_displayMessage_c57c20204892da2b = function(e, t, n) {
						s(e).displayMessage(d(t, n))
					}, a.wbg.__wbg_new_df6e6ab7a65c4c4d = function(e, t) {
						return l(new Error(d(e, t)))
					}, a.wbg.__wbg_panic_bbc809dd04a12c60 = function(e, t) {
						s(e).panic(s(t))
					}, a.wbg.__wbg_copyToAudioBuffer_58f244be94bac1d2 = function(e, t, n, i, o) {
						r(s(e), 0 === t ? void 0 : L(t, n), 0 === i ? void 0 : L(i, o))
					}, a.wbg.__wbg_setMetadata_bbaeaee7f48274e6 = function(e, t) {
						s(e).setMetadata(u(t))
					}, a.wbg.__wbg_onCallbackAvailable_3a48fae397926c96 = function(e, t, n) {
						s(e).onCallbackAvailable(d(t, n))
					}, a.wbg.__wbg_onFSCommand_fb2f94653f71796e = j((function(e, t, n, r, i) {
						return s(e).onFSCommand(d(t, n), d(r, i))
					})), a.wbg.__wbindgen_number_new = function(e) {
						return l(e)
					}, a.wbg.__wbg_new_59cb74e423758ede = function() {
						return l(new Error)
					}, a.wbg.__wbg_stack_558ba5917b466edd = function(e, t) {
						var n = m(s(t).stack, o.__wbindgen_malloc, o.__wbindgen_realloc),
							r = g;
						y()[e / 4 + 1] = r, y()[e / 4 + 0] = n
					}, a.wbg.__wbg_error_4bb6c2a97407129a = function(e, t) {
						try {
							console.error(d(e, t))
						} finally {
							o.__wbindgen_free(e, t)
						}
					}, a.wbg.__wbindgen_is_undefined = function(e) {
						return void 0 === s(e)
					}, a.wbg.__wbg_instanceof_WebGl2RenderingContext_61a66a1af6516586 = function(e) {
						return s(e) instanceof WebGL2RenderingContext
					}, a.wbg.__wbg_bindVertexArray_808c39d3c0f17264 = function(e, t) {
						s(e).bindVertexArray(s(t))
					}, a.wbg.__wbg_blitFramebuffer_3b625df19331f21c = function(e, t, n, r, i, o, a, c, l, u, _) {
						s(e).blitFramebuffer(t, n, r, i, o, a, c, l, u >>> 0, _ >>> 0)
					}, a.wbg.__wbg_createVertexArray_855d59250230c563 = function(e) {
						var t = s(e).createVertexArray();
						return v(t) ? 0 : l(t)
					}, a.wbg.__wbg_renderbufferStorageMultisample_bbeb2b87cb14307f = function(e, t, n, r, i, o) {
						s(e).renderbufferStorageMultisample(t >>> 0, n, r >>> 0, i, o)
					}, a.wbg.__wbg_texImage2D_173d216c50e54701 = j((function(e, t, n, r, i, o, a, c, l, u, _) {
						s(e).texImage2D(t >>> 0, n, r, i, o, a, c >>> 0, l >>> 0, 0 === u ? void 0 : D(u, _))
					})), a.wbg.__wbg_bindFramebuffer_ce3cfcfec4aa02cc = function(e, t, n) {
						s(e).bindFramebuffer(t >>> 0, s(n))
					}, a.wbg.__wbg_bindRenderbuffer_35f3639b7da4e4c7 = function(e, t, n) {
						s(e).bindRenderbuffer(t >>> 0, s(n))
					}, a.wbg.__wbg_bindTexture_f2a0487a487a78d9 = function(e, t, n) {
						s(e).bindTexture(t >>> 0, s(n))
					}, a.wbg.__wbg_createFramebuffer_7fd863d54241be81 = function(e) {
						var t = s(e).createFramebuffer();
						return v(t) ? 0 : l(t)
					}, a.wbg.__wbg_createRenderbuffer_52ebc0325ed6e885 = function(e) {
						var t = s(e).createRenderbuffer();
						return v(t) ? 0 : l(t)
					}, a.wbg.__wbg_createTexture_a46f881a1c96b496 = function(e) {
						var t = s(e).createTexture();
						return v(t) ? 0 : l(t)
					}, a.wbg.__wbg_deleteFramebuffer_867aba8474910f62 = function(e, t) {
						s(e).deleteFramebuffer(s(t))
					}, a.wbg.__wbg_deleteRenderbuffer_eb162fd0beb632da = function(e, t) {
						s(e).deleteRenderbuffer(s(t))
					}, a.wbg.__wbg_deleteTexture_1affe310edd12b75 = function(e, t) {
						s(e).deleteTexture(s(t))
					}, a.wbg.__wbg_framebufferRenderbuffer_7bb033ee5a2eca8c = function(e, t, n, r, i) {
						s(e).framebufferRenderbuffer(t >>> 0, n >>> 0, r >>> 0, s(i))
					}, a.wbg.__wbg_framebufferTexture2D_9a77a023fd4aedcc = function(e, t, n, r, i, o) {
						s(e).framebufferTexture2D(t >>> 0, n >>> 0, r >>> 0, s(i), o)
					}, a.wbg.__wbg_getError_142acae679908a25 = function(e) {
						return s(e).getError()
					}, a.wbg.__wbg_getParameter_34e9af6606eb8544 = j((function(e, t) {
						return l(s(e).getParameter(t >>> 0))
					})), a.wbg.__wbg_texParameteri_e99b48aa90ae569b = function(e, t, n, r) {
						s(e).texParameteri(t >>> 0, n >>> 0, r)
					}, a.wbg.__wbg_instanceof_Window_9c4fd26090e1d029 = function(e) {
						return s(e) instanceof Window
					}, a.wbg.__wbg_document_249e9cf340780f93 = function(e) {
						var t = s(e).document;
						return v(t) ? 0 : l(t)
					}, a.wbg.__wbg_location_cf542a8f458da7b4 = function(e) {
						return l(s(e).location)
					}, a.wbg.__wbg_navigator_fdf3521d0e190a9b = function(e) {
						return l(s(e).navigator)
					}, a.wbg.__wbg_devicePixelRatio_ea9c0157a379b3ec = function(e) {
						return s(e).devicePixelRatio
					}, a.wbg.__wbg_performance_e029cf47e1c47c09 = function(e) {
						var t = s(e).performance;
						return v(t) ? 0 : l(t)
					}, a.wbg.__wbg_localStorage_884d77b5cedf820a = j((function(e) {
						var t = s(e).localStorage;
						return v(t) ? 0 : l(t)
					})), a.wbg.__wbg_cancelAnimationFrame_28c6665c9b2a3944 = j((function(e, t) {
						s(e).cancelAnimationFrame(t)
					})), a.wbg.__wbg_focus_b5729f61a3280cbc = j((function(e) {
						s(e).focus()
					})), a.wbg.__wbg_open_313f5801aab5e2f1 = j((function(e, t, n, r, i) {
						var o = s(e).open(d(t, n), d(r, i));
						return v(o) ? 0 : l(o)
					})), a.wbg.__wbg_requestAnimationFrame_aa3bab1f9557a4da = j((function(e, t) {
						return s(e).requestAnimationFrame(s(t))
					})), a.wbg.__wbg_fetch_eaee025997e4cd56 = function(e, t) {
						return l(s(e).fetch(s(t)))
					}, a.wbg.__wbg_destination_c5ce4ac317c9219f = function(e) {
						return l(s(e).destination)
					}, a.wbg.__wbg_sampleRate_cc13fe55474678eb = function(e) {
						return s(e).sampleRate
					}, a.wbg.__wbg_currentTime_ae061c195387b7ac = function(e) {
						return s(e).currentTime
					}, a.wbg.__wbg_new_29e8884899ea6ee2 = j((function() {
						return l(new i)
					})), a.wbg.__wbg_suspend_4b5d3b7ee1f4a3ec = j((function(e) {
						return l(s(e).suspend())
					})), a.wbg.__wbg_createBuffer_53c7286e081d0b3e = j((function(e, t, n, r) {
						return l(s(e).createBuffer(t >>> 0, n >>> 0, r))
					})), a.wbg.__wbg_createBufferSource_8b7fd8bc4222b208 = j((function(e) {
						return l(s(e).createBufferSource())
					})), a.wbg.__wbg_createChannelMerger_c059636adf34e09d = j((function(e, t) {
						return l(s(e).createChannelMerger(t >>> 0))
					})), a.wbg.__wbg_createChannelSplitter_68062f62d4d66ed8 = j((function(e, t) {
						return l(s(e).createChannelSplitter(t >>> 0))
					})), a.wbg.__wbg_createGain_7b6dadac3a6522d6 = j((function(e) {
						return l(s(e).createGain())
					})), a.wbg.__wbg_createScriptProcessor_bce5438a51faa41d = j((function(e, t, n, r) {
						return l(s(e).createScriptProcessor(t >>> 0, n >>> 0, r >>> 0))
					})), a.wbg.__wbg_decodeAudioData_81b31c0703465a21 = j((function(e, t, n, r) {
						return l(s(e).decodeAudioData(s(t), s(n), s(r)))
					})), a.wbg.__wbg_resume_2c75f8fc1fd26d4b = j((function(e) {
						return l(s(e).resume())
					})), a.wbg.__wbg_gain_b3536e37256053f5 = function(e) {
						return l(s(e).gain)
					}, a.wbg.__wbg_baseURI_6a10de9fa3003a69 = j((function(e, t) {
						var n = s(t).baseURI,
							r = v(n) ? 0 : m(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
							i = g;
						y()[e / 4 + 1] = i, y()[e / 4 + 0] = r
					})), a.wbg.__wbg_appendChild_6ae001e6d3556190 = j((function(e, t) {
						return l(s(e).appendChild(s(t)))
					})), a.wbg.__wbg_get_36b7a676e4c8aee9 = j((function(e, t, n, r) {
						var i = s(t)[d(n, r)],
							a = v(i) ? 0 : m(i, o.__wbindgen_malloc, o.__wbindgen_realloc),
							c = g;
						y()[e / 4 + 1] = c, y()[e / 4 + 0] = a
					})), a.wbg.__wbg_set_ad2026ce7b489f96 = j((function(e, t, n, r, i) {
						s(e)[d(t, n)] = d(r, i)
					})), a.wbg.__wbg_delete_9614de882c9a0cf5 = j((function(e, t, n) {
						delete s(e)[d(t, n)]
					})), a.wbg.__wbg_setProperty_84c0a22125c731d6 = j((function(e, t, n, r, i) {
						s(e).setProperty(d(t, n), d(r, i))
					})), a.wbg.__wbg_protocol_2d293dcd35a07041 = j((function(e, t) {
						var n = m(s(t).protocol, o.__wbindgen_malloc, o.__wbindgen_realloc),
							r = g;
						y()[e / 4 + 1] = r, y()[e / 4 + 0] = n
					})), a.wbg.__wbg_assign_fc277322e1a88614 = j((function(e, t, n) {
						s(e).assign(d(t, n))
					})), a.wbg.__wbg_new_3c2bf2a5257369ec = j((function() {
						return l(new Path2D)
					})), a.wbg.__wbg_addPath_cf691ede06f38917 = function(e, t, n) {
						s(e).addPath(s(t), s(n))
					}, a.wbg.__wbg_closePath_48f860f5bcbc79f3 = function(e) {
						s(e).closePath()
					}, a.wbg.__wbg_lineTo_7fd48462a80ac962 = function(e, t, n) {
						s(e).lineTo(t, n)
					}, a.wbg.__wbg_moveTo_62ea44f899317925 = function(e, t, n) {
						s(e).moveTo(t, n)
					}, a.wbg.__wbg_quadraticCurveTo_6f746087da5a242c = function(e, t, n, r, i) {
						s(e).quadraticCurveTo(t, n, r, i)
					}, a.wbg.__wbg_instanceof_SvgsvgElement_28ef05afde3449f9 = function(e) {
						return s(e) instanceof SVGSVGElement
					}, a.wbg.__wbg_createSVGMatrix_43815bd5777c567f = function(e) {
						return l(s(e).createSVGMatrix())
					}, a.wbg.__wbg_length_914ec377666a1fb8 = function(e) {
						return s(e).length
					}, a.wbg.__wbg_setTransform_4c6870c885e2b89e = function(e, t) {
						s(e).setTransform(s(t))
					}, a.wbg.__wbg_offsetX_951495e9516f0aeb = function(e) {
						return s(e).offsetX
					}, a.wbg.__wbg_offsetY_0377a1f53f902a1e = function(e) {
						return s(e).offsetY
					}, a.wbg.__wbg_button_c35922e0098b9cda = function(e) {
						return s(e).button
					}, a.wbg.__wbg_bindVertexArrayOES_bb8a104f35d5cf4f = function(e, t) {
						s(e).bindVertexArrayOES(s(t))
					}, a.wbg.__wbg_createVertexArrayOES_51a703442a9d8099 = function(e) {
						var t = s(e).createVertexArrayOES();
						return v(t) ? 0 : l(t)
					}, a.wbg.__wbg_deltaY_49d792c5901e3fc1 = function(e) {
						return s(e).deltaY
					}, a.wbg.__wbg_deltaMode_7ed5ee895d112617 = function(e) {
						return s(e).deltaMode
					}, a.wbg.__wbg_connect_3a117c24756fdf62 = j((function(e, t) {
						return l(s(e).connect(s(t)))
					})), a.wbg.__wbg_connect_3a51bca7e31cd323 = j((function(e, t, n) {
						return l(s(e).connect(s(t), n >>> 0))
					})), a.wbg.__wbg_connect_52449bed6e387d23 = j((function(e, t, n, r) {
						return l(s(e).connect(s(t), n >>> 0, r >>> 0))
					})), a.wbg.__wbg_disconnect_b101656fb34b9fa3 = j((function(e) {
						s(e).disconnect()
					})), a.wbg.__wbg_outputBuffer_7e7061041aa8a304 = j((function(e) {
						return l(s(e).outputBuffer)
					})), a.wbg.__wbg_pointerId_e68d773decdc9224 = function(e) {
						return s(e).pointerId
					}, a.wbg.__wbg_instanceof_Response_8295bf7aacde3233 = function(e) {
						return s(e) instanceof Response
					}, a.wbg.__wbg_ok_e1e8f70fbf7c1fdc = function(e) {
						return s(e).ok
					}, a.wbg.__wbg_statusText_c5b7d9b4bc84d715 = function(e, t) {
						var n = m(s(t).statusText, o.__wbindgen_malloc, o.__wbindgen_realloc),
							r = g;
						y()[e / 4 + 1] = r, y()[e / 4 + 0] = n
					}, a.wbg.__wbg_arrayBuffer_a98df6d58bb5ea26 = j((function(e) {
						return l(s(e).arrayBuffer())
					})), a.wbg.__wbg_seta_5138c769bc027dee = function(e, t) {
						s(e).a = t
					}, a.wbg.__wbg_setb_d92c5b9331343d2e = function(e, t) {
						s(e).b = t
					}, a.wbg.__wbg_setc_c6fbbb68c7ba4693 = function(e, t) {
						s(e).c = t
					}, a.wbg.__wbg_setd_42dcf42c3ceabc9b = function(e, t) {
						s(e).d = t
					}, a.wbg.__wbg_sete_49250c2d46b375b3 = function(e, t) {
						s(e).e = t
					}, a.wbg.__wbg_setf_12cb2512fe19ba3f = function(e, t) {
						s(e).f = t
					}, a.wbg.__wbg_setbuffer_5aca59a6f26d3307 = function(e, t) {
						s(e).buffer = s(t)
					}, a.wbg.__wbg_setloop_710fa1431c2bc494 = function(e, t) {
						s(e).loop = 0 !== t
					}, a.wbg.__wbg_setloopStart_988c5aad78cc446c = function(e, t) {
						s(e).loopStart = t
					}, a.wbg.__wbg_setloopEnd_fcc6c08574ca8ae5 = function(e, t) {
						s(e).loopEnd = t
					}, a.wbg.__wbg_setonended_0efd780b31d16bbf = function(e, t) {
						s(e).onended = s(t)
					}, a.wbg.__wbg_start_e92060130d43d928 = j((function(e) {
						s(e).start()
					})), a.wbg.__wbg_start_a8d199336331f3a5 = j((function(e, t, n) {
						s(e).start(t, n)
					})), a.wbg.__wbg_stop_37842cd5a56a341c = j((function(e, t) {
						s(e).stop(t)
					})), a.wbg.__wbg_instanceof_HtmlFormElement_de39c8070c818493 = function(e) {
						return s(e) instanceof HTMLFormElement
					}, a.wbg.__wbg_submit_e668f2e6a4582aa6 = j((function(e) {
						s(e).submit()
					})), a.wbg.__wbg_now_4abbca4ef2aba8d6 = function(e) {
						return s(e).now()
					}, a.wbg.__wbg_setonaudioprocess_9d6a213da205ae4d = function(e, t) {
						s(e).onaudioprocess = s(t)
					}, a.wbg.__wbg_newwithbuffersourcesequenceandoptions_689c4999a01e0d8c = j((function(e, t) {
						return l(new Blob(s(e), s(t)))
					})), a.wbg.__wbg_instanceof_HtmlCanvasElement_e0e251da2aa0b541 = function(e) {
						return s(e) instanceof HTMLCanvasElement
					}, a.wbg.__wbg_width_5843e31ec081f978 = function(e) {
						return s(e).width
					}, a.wbg.__wbg_setwidth_fd251e9da5abcced = function(e, t) {
						s(e).width = t >>> 0
					}, a.wbg.__wbg_height_872c06b1bc666dd9 = function(e) {
						return s(e).height
					}, a.wbg.__wbg_setheight_5b882973e84fa13c = function(e, t) {
						s(e).height = t >>> 0
					}, a.wbg.__wbg_getContext_d778ffc8203f64ae = j((function(e, t, n) {
						var r = s(e).getContext(d(t, n));
						return v(r) ? 0 : l(r)
					})), a.wbg.__wbg_getContext_4678c25f580222b0 = j((function(e, t, n, r) {
						var i = s(e).getContext(d(t, n), s(r));
						return v(i) ? 0 : l(i)
					})), a.wbg.__wbg_key_97a48109ce6890c4 = function(e, t) {
						var n = m(s(t).key, o.__wbindgen_malloc, o.__wbindgen_realloc),
							r = g;
						y()[e / 4 + 1] = r, y()[e / 4 + 0] = n
					}, a.wbg.__wbg_code_e70e2272901f086c = function(e, t) {
						var n = m(s(t).code, o.__wbindgen_malloc, o.__wbindgen_realloc),
							r = g;
						y()[e / 4 + 1] = r, y()[e / 4 + 0] = n
					}, a.wbg.__wbg_newwithstrandinit_a58924208f457f33 = j((function(e, t, n) {
						return l(new Request(d(e, t), s(n)))
					})), a.wbg.__wbg_body_0d97f334de622953 = function(e) {
						var t = s(e).body;
						return v(t) ? 0 : l(t)
					}, a.wbg.__wbg_createElement_ba61aad8af6be7f4 = j((function(e, t, n) {
						return l(s(e).createElement(d(t, n)))
					})), a.wbg.__wbg_createElementNS_c951238dc260501e = j((function(e, t, n, r, i) {
						return l(s(e).createElementNS(0 === t ? void 0 : d(t, n), d(r, i)))
					})), a.wbg.__wbg_setid_16518c90432c2f8e = function(e, t, n) {
						s(e).id = d(t, n)
					}, a.wbg.__wbg_clientWidth_405142b36824cd4f = function(e) {
						return s(e).clientWidth
					}, a.wbg.__wbg_clientHeight_645231c9da3480a9 = function(e) {
						return s(e).clientHeight
					}, a.wbg.__wbg_querySelector_6c8f27227fc14315 = j((function(e, t, n) {
						var r = s(e).querySelector(d(t, n));
						return v(r) ? 0 : l(r)
					})), a.wbg.__wbg_releasePointerCapture_758b760808d6ce02 = j((function(e, t) {
						s(e).releasePointerCapture(t)
					})), a.wbg.__wbg_setAttribute_0b50656f1ccc45bf = j((function(e, t, n, r, i) {
						s(e).setAttribute(d(t, n), d(r, i))
					})), a.wbg.__wbg_setAttributeNS_d31649e78e2cf95c = j((function(e, t, n, r, i, o, a) {
						s(e).setAttributeNS(0 === t ? void 0 : d(t, n), d(r, i), d(o, a))
					})), a.wbg.__wbg_setPointerCapture_6f31425163cf44a1 = j((function(e, t) {
						s(e).setPointerCapture(t)
					})), a.wbg.__wbg_remove_eabff3d9e444a826 = function(e) {
						s(e).remove()
					}, a.wbg.__wbg_instanceof_WebGlRenderingContext_5671fd2c102046b1 = function(e) {
						return s(e) instanceof WebGLRenderingContext
					}, a.wbg.__wbg_drawingBufferWidth_0f8ef2b95bb66c81 = function(e) {
						return s(e).drawingBufferWidth
					}, a.wbg.__wbg_drawingBufferHeight_04a3507b6fb21bac = function(e) {
						return s(e).drawingBufferHeight
					}, a.wbg.__wbg_bufferData_9f09145baa3273f9 = function(e, t, n, r, i) {
						s(e).bufferData(t >>> 0, D(n, r), i >>> 0)
					}, a.wbg.__wbg_texImage2D_48722cf9f95c8df8 = j((function(e, t, n, r, i, o, a, c, l, u, _) {
						s(e).texImage2D(t >>> 0, n, r, i, o, a, c >>> 0, l >>> 0, 0 === u ? void 0 : D(u, _))
					})), a.wbg.__wbg_uniform1fv_0b5950d4f588ac7e = function(e, t, n, r) {
						s(e).uniform1fv(s(t), L(n, r))
					}, a.wbg.__wbg_uniform4fv_8fa4c0052d79aed2 = function(e, t, n, r) {
						s(e).uniform4fv(s(t), L(n, r))
					}, a.wbg.__wbg_uniformMatrix3fv_c4a15deb8d8fbd61 = function(e, t, n, r, i) {
						s(e).uniformMatrix3fv(s(t), 0 !== n, L(r, i))
					}, a.wbg.__wbg_uniformMatrix4fv_62951f66fbf764cd = function(e, t, n, r, i) {
						s(e).uniformMatrix4fv(s(t), 0 !== n, L(r, i))
					}, a.wbg.__wbg_activeTexture_790fa161eaf8dcb0 = function(e, t) {
						s(e).activeTexture(t >>> 0)
					}, a.wbg.__wbg_attachShader_5446231928034874 = function(e, t, n) {
						s(e).attachShader(s(t), s(n))
					}, a.wbg.__wbg_bindBuffer_5b0bd39cdc9f3c91 = function(e, t, n) {
						s(e).bindBuffer(t >>> 0, s(n))
					}, a.wbg.__wbg_bindFramebuffer_9490ff183a431d0d = function(e, t, n) {
						s(e).bindFramebuffer(t >>> 0, s(n))
					}, a.wbg.__wbg_bindRenderbuffer_86495e658e23020f = function(e, t, n) {
						s(e).bindRenderbuffer(t >>> 0, s(n))
					}, a.wbg.__wbg_bindTexture_6df7d2262019c813 = function(e, t, n) {
						s(e).bindTexture(t >>> 0, s(n))
					}, a.wbg.__wbg_blendFunc_c91f929b64e24ca6 = function(e, t, n) {
						s(e).blendFunc(t >>> 0, n >>> 0)
					}, a.wbg.__wbg_clear_216e95e64c0ce688 = function(e, t) {
						s(e).clear(t >>> 0)
					}, a.wbg.__wbg_clearColor_f7316ccd75b2a3b1 = function(e, t, n, r, i) {
						s(e).clearColor(t, n, r, i)
					}, a.wbg.__wbg_colorMask_cc8730de91ea02ce = function(e, t, n, r, i) {
						s(e).colorMask(0 !== t, 0 !== n, 0 !== r, 0 !== i)
					}, a.wbg.__wbg_compileShader_749eb91c541c360c = function(e, t) {
						s(e).compileShader(s(t))
					}, a.wbg.__wbg_createBuffer_8ae1735de737ca21 = function(e) {
						var t = s(e).createBuffer();
						return v(t) ? 0 : l(t)
					}, a.wbg.__wbg_createProgram_28f1378728397a46 = function(e) {
						var t = s(e).createProgram();
						return v(t) ? 0 : l(t)
					}, a.wbg.__wbg_createShader_f6da8384be38c095 = function(e, t) {
						var n = s(e).createShader(t >>> 0);
						return v(n) ? 0 : l(n)
					}, a.wbg.__wbg_createTexture_be549d53d11ebf83 = function(e) {
						var t = s(e).createTexture();
						return v(t) ? 0 : l(t)
					}, a.wbg.__wbg_disable_b2672dfd98db0d2c = function(e, t) {
						s(e).disable(t >>> 0)
					}, a.wbg.__wbg_disableVertexAttribArray_f5154961c6bbc61f = function(e, t) {
						s(e).disableVertexAttribArray(t >>> 0)
					}, a.wbg.__wbg_drawElements_19a4ea67a2f14d44 = function(e, t, n, r, i) {
						s(e).drawElements(t >>> 0, n, r >>> 0, i)
					}, a.wbg.__wbg_enable_9c5b69ae0579565d = function(e, t) {
						s(e).enable(t >>> 0)
					}, a.wbg.__wbg_enableVertexAttribArray_eff1f71734ec0c24 = function(e, t) {
						s(e).enableVertexAttribArray(t >>> 0)
					}, a.wbg.__wbg_getAttribLocation_7321b82ba20f42ed = function(e, t, n, r) {
						return s(e).getAttribLocation(s(t), d(n, r))
					}, a.wbg.__wbg_getExtension_29e749f65dd345b5 = j((function(e, t, n) {
						var r = s(e).getExtension(d(t, n));
						return v(r) ? 0 : l(r)
					})), a.wbg.__wbg_getParameter_e02390c31b2aedb9 = j((function(e, t) {
						return l(s(e).getParameter(t >>> 0))
					})), a.wbg.__wbg_getProgramInfoLog_89c655cf7d3deb29 = function(e, t, n) {
						var r = s(t).getProgramInfoLog(s(n)),
							i = v(r) ? 0 : m(r, o.__wbindgen_malloc, o.__wbindgen_realloc),
							a = g;
						y()[e / 4 + 1] = a, y()[e / 4 + 0] = i
					}, a.wbg.__wbg_getProgramParameter_97fb617622a1e9c6 = function(e, t, n) {
						return l(s(e).getProgramParameter(s(t), n >>> 0))
					}, a.wbg.__wbg_getShaderInfoLog_8fbfc8052cd2a5c2 = function(e, t, n) {
						var r = s(t).getShaderInfoLog(s(n)),
							i = v(r) ? 0 : m(r, o.__wbindgen_malloc, o.__wbindgen_realloc),
							a = g;
						y()[e / 4 + 1] = a, y()[e / 4 + 0] = i
					}, a.wbg.__wbg_getUniformLocation_8ef86decd2ceb6a0 = function(e, t, n, r) {
						var i = s(e).getUniformLocation(s(t), d(n, r));
						return v(i) ? 0 : l(i)
					}, a.wbg.__wbg_linkProgram_b060b6f5c6419695 = function(e, t) {
						s(e).linkProgram(s(t))
					}, a.wbg.__wbg_pixelStorei_1e9534b41710bd3f = function(e, t, n) {
						s(e).pixelStorei(t >>> 0, n)
					}, a.wbg.__wbg_shaderSource_e00c8c2b41679a01 = function(e, t, n, r) {
						s(e).shaderSource(s(t), d(n, r))
					}, a.wbg.__wbg_stencilFunc_eeb2374a49160e1e = function(e, t, n, r) {
						s(e).stencilFunc(t >>> 0, n, r >>> 0)
					}, a.wbg.__wbg_stencilMask_8383787c8968e634 = function(e, t) {
						s(e).stencilMask(t >>> 0)
					}, a.wbg.__wbg_stencilOp_d618117604d44e35 = function(e, t, n, r) {
						s(e).stencilOp(t >>> 0, n >>> 0, r >>> 0)
					}, a.wbg.__wbg_texParameteri_58c0d4e82f062e6f = function(e, t, n, r) {
						s(e).texParameteri(t >>> 0, n >>> 0, r)
					}, a.wbg.__wbg_uniform1f_affc2490c2cff524 = function(e, t, n) {
						s(e).uniform1f(s(t), n)
					}, a.wbg.__wbg_uniform1i_584ce89a2fa7078d = function(e, t, n) {
						s(e).uniform1i(s(t), n)
					}, a.wbg.__wbg_useProgram_ad5593b87b2aec4f = function(e, t) {
						s(e).useProgram(s(t))
					}, a.wbg.__wbg_vertexAttribPointer_3e272f16a22bb68c = function(e, t, n, r, i, o, a) {
						s(e).vertexAttribPointer(t >>> 0, n, r >>> 0, 0 !== i, o, a)
					}, a.wbg.__wbg_viewport_40ac6422fa7e7109 = function(e, t, n, r, i) {
						s(e).viewport(t, n, r, i)
					}, a.wbg.__wbg_debug_3c0b82934d1dd91e = function(e) {
						console.debug(s(e))
					}, a.wbg.__wbg_error_9ff84d33a850b1ef = function(e) {
						console.error(s(e))
					}, a.wbg.__wbg_info_3b2058a219fa31b9 = function(e) {
						console.info(s(e))
					}, a.wbg.__wbg_log_386a8115a84a780d = function(e) {
						console.log(s(e))
					}, a.wbg.__wbg_warn_5fc232d538408d4a = function(e) {
						console.warn(s(e))
					}, a.wbg.__wbg_style_9290c51fe7cb7783 = function(e) {
						return l(s(e).style)
					}, a.wbg.__wbg_setvalue_e8ff05630a7ffecb = function(e, t) {
						s(e).value = t
					}, a.wbg.__wbg_linearRampToValueAtTime_0245aa9e5d87776f = j((function(e, t, n) {
						return l(s(e).linearRampToValueAtTime(t, n))
					})), a.wbg.__wbg_setValueAtTime_b4a172acdfc9830f = j((function(e, t, n) {
						return l(s(e).setValueAtTime(t, n))
					})), a.wbg.__wbg_currentTarget_a3b06d00ff76859b = function(e) {
						var t = s(e).currentTarget;
						return v(t) ? 0 : l(t)
					}, a.wbg.__wbg_preventDefault_19876bf3a4179b34 = function(e) {
						s(e).preventDefault()
					}, a.wbg.__wbg_addEventListener_b334b84e6525699c = j((function(e, t, n, r) {
						s(e).addEventListener(d(t, n), s(r))
					})), a.wbg.__wbg_addEventListener_502683a26945b1a5 = j((function(e, t, n, r, i) {
						s(e).addEventListener(d(t, n), s(r), s(i))
					})), a.wbg.__wbg_addEventListener_b88d8dd107ce2f39 = j((function(e, t, n, r, i) {
						s(e).addEventListener(d(t, n), s(r), 0 !== i)
					})), a.wbg.__wbg_removeEventListener_380d0ebdf9cd12ba = j((function(e, t, n, r) {
						s(e).removeEventListener(d(t, n), s(r))
					})), a.wbg.__wbg_removeEventListener_1f30d3e3ef4ee58e = j((function(e, t, n, r, i) {
						s(e).removeEventListener(d(t, n), s(r), 0 !== i)
					})), a.wbg.__wbg_setsrc_21ed0b40d0ff0413 = function(e, t, n) {
						s(e).src = d(t, n)
					}, a.wbg.__wbg_new_0891fac076d9e6b3 = j((function() {
						return l(new Image)
					})), a.wbg.__wbg_newwithwidthandheight_045e54743ae79290 = j((function(e, t) {
						return l(new Image(e >>> 0, t >>> 0))
					})), a.wbg.__wbg_data_7db9e348ce1855fa = function(e, t) {
						var n = function(e, t) {
								const n = t(1 * e.length);
								return b().set(e, n / 1), g = e.length, n
							}(s(t).data, o.__wbindgen_malloc),
							r = g;
						y()[e / 4 + 1] = r, y()[e / 4 + 0] = n
					}, a.wbg.__wbg_userAgent_89e0d93ea0bfe354 = j((function(e, t) {
						var n = m(s(t).userAgent, o.__wbindgen_malloc, o.__wbindgen_realloc),
							r = g;
						y()[e / 4 + 1] = r, y()[e / 4 + 0] = n
					})), a.wbg.__wbg_instanceof_CanvasRenderingContext2d_eea9cd931eb496b7 = function(e) {
						return s(e) instanceof CanvasRenderingContext2D
					}, a.wbg.__wbg_setglobalAlpha_6b6fb9a57a09df9d = function(e, t) {
						s(e).globalAlpha = t
					}, a.wbg.__wbg_setglobalCompositeOperation_e404daf7e6bb63e4 = j((function(e, t, n) {
						s(e).globalCompositeOperation = d(t, n)
					})), a.wbg.__wbg_setstrokeStyle_72f1ad8117744d41 = function(e, t) {
						s(e).strokeStyle = s(t)
					}, a.wbg.__wbg_setfillStyle_5306396b0368ba08 = function(e, t) {
						s(e).fillStyle = s(t)
					}, a.wbg.__wbg_setfilter_fa947e793349a2de = function(e, t, n) {
						s(e).filter = d(t, n)
					}, a.wbg.__wbg_setlineWidth_9f25e0ceca65a4d7 = function(e, t) {
						s(e).lineWidth = t
					}, a.wbg.__wbg_setlineCap_6c7169ac07a6349e = function(e, t, n) {
						s(e).lineCap = d(t, n)
					}, a.wbg.__wbg_setlineJoin_d6311997533dcdbf = function(e, t, n) {
						s(e).lineJoin = d(t, n)
					}, a.wbg.__wbg_setmiterLimit_cd181ac4dc64fc1d = function(e, t) {
						s(e).miterLimit = t
					}, a.wbg.__wbg_drawImage_ff0075aa41bc6155 = j((function(e, t, n, r) {
						s(e).drawImage(s(t), n, r)
					})), a.wbg.__wbg_drawImage_b43cf9d292491493 = j((function(e, t, n, r) {
						s(e).drawImage(s(t), n, r)
					})), a.wbg.__wbg_fill_a928208ebdb3fecc = function(e, t) {
						s(e).fill(s(t))
					}, a.wbg.__wbg_stroke_c19677a93050ef02 = function(e, t) {
						s(e).stroke(s(t))
					}, a.wbg.__wbg_createPattern_a737181b452c0941 = j((function(e, t, n, r) {
						var i = s(e).createPattern(s(t), d(n, r));
						return v(i) ? 0 : l(i)
					})), a.wbg.__wbg_getImageData_6e56dc172cd2ed36 = j((function(e, t, n, r, i) {
						return l(s(e).getImageData(t, n, r, i))
					})), a.wbg.__wbg_clearRect_dbb56982eff2a250 = function(e, t, n, r, i) {
						s(e).clearRect(t, n, r, i)
					}, a.wbg.__wbg_fillRect_33b210367d4a0063 = function(e, t, n, r, i) {
						s(e).fillRect(t, n, r, i)
					}, a.wbg.__wbg_resetTransform_09cd4a47a1d0fc9c = j((function(e) {
						s(e).resetTransform()
					})), a.wbg.__wbg_setTransform_36254c0c8f264eee = j((function(e, t, n, r, i, o, a) {
						s(e).setTransform(t, n, r, i, o, a)
					})), a.wbg.__wbg_get_f099d98ea7d68360 = function(e, t) {
						return l(s(e)[t >>> 0])
					}, a.wbg.__wbg_next_9d10ccb28a5fd327 = j((function(e) {
						return l(s(e).next())
					})), a.wbg.__wbg_done_faa42c8d1dd8ca9e = function(e) {
						return s(e).done
					}, a.wbg.__wbg_value_9befa7ab4a7326bf = function(e) {
						return l(s(e).value)
					}, a.wbg.__wbg_get_0c6963cbab34fbb6 = j((function(e, t) {
						return l(Reflect.get(s(e), s(t)))
					})), a.wbg.__wbg_call_cb478d88f3068c91 = j((function(e, t) {
						return l(s(e).call(s(t)))
					})), a.wbg.__wbg_new_8528c110a833413f = function() {
						return l(new Array)
					}, a.wbg.__wbg_isArray_bccef1135dd559c1 = function(e) {
						return Array.isArray(s(e))
					}, a.wbg.__wbg_of_1988d238bc84b807 = function(e, t) {
						return l(Array.of(s(e), s(t)))
					}, a.wbg.__wbg_push_17a514d8ab666103 = function(e, t) {
						return s(e).push(s(t))
					}, a.wbg.__wbg_instanceof_ArrayBuffer_ee6a79eaea0f4f5b = function(e) {
						return s(e) instanceof ArrayBuffer
					}, a.wbg.__wbg_new_66923a754de9cf28 = function(e) {
						return l(new ArrayBuffer(e >>> 0))
					}, a.wbg.__wbg_slice_1b99bf7e559f62b2 = function(e, t, n) {
						return l(s(e).slice(t >>> 0, n >>> 0))
					}, a.wbg.__wbg_values_0e37ea0767d5caba = function(e) {
						return l(s(e).values())
					}, a.wbg.__wbg_newnoargs_3efc7bfa69a681f9 = function(e, t) {
						return l(new Function(d(e, t)))
					}, a.wbg.__wbg_apply_2d67e7379df5344f = j((function(e, t, n) {
						return l(s(e).apply(s(t), s(n)))
					})), a.wbg.__wbg_call_f5e0576f61ee7461 = j((function(e, t, n) {
						return l(s(e).call(s(t), s(n)))
					})), a.wbg.__wbg_getTime_135e6afc6013ba72 = function(e) {
						return s(e).getTime()
					}, a.wbg.__wbg_getTimezoneOffset_39fb6af112fac02f = function(e) {
						return s(e).getTimezoneOffset()
					}, a.wbg.__wbg_new0_8e8ab0e7714cf1dd = function() {
						return l(new Date)
					}, a.wbg.__wbg_instanceof_Object_d6b4e933180fbb26 = function(e) {
						return s(e) instanceof Object
					}, a.wbg.__wbg_entries_a9881e0ca10e3cb2 = function(e) {
						return l(Object.entries(s(e)))
					}, a.wbg.__wbg_fromEntries_8be754b4532b35f4 = j((function(e) {
						return l(Object.fromEntries(s(e)))
					})), a.wbg.__wbg_is_573b30cf06a763fb = function(e, t) {
						return Object.is(s(e), s(t))
					}, a.wbg.__wbg_new_d14bf16e62c6b3d5 = function() {
						return l(new Object)
					}, a.wbg.__wbg_resolve_778af3f90b8e2b59 = function(e) {
						return l(Promise.resolve(s(e)))
					}, a.wbg.__wbg_then_367b3e718069cfb9 = function(e, t) {
						return l(s(e).then(s(t)))
					}, a.wbg.__wbg_then_ac66ca61394bfd21 = function(e, t, n) {
						return l(s(e).then(s(t), s(n)))
					}, a.wbg.__wbg_self_05c54dcacb623b9a = j((function() {
						return l(self.self)
					})), a.wbg.__wbg_window_9777ce446d12989f = j((function() {
						return l(window.window)
					})), a.wbg.__wbg_globalThis_f0ca0bbb0149cf3d = j((function() {
						return l(globalThis.globalThis)
					})), a.wbg.__wbg_global_c3c8325ae8c7f1a9 = j((function() {
						return l(n.g.global)
					})), a.wbg.__wbg_buffer_ebc6c8e75510eae3 = function(e) {
						return l(s(e).buffer)
					}, a.wbg.__wbg_newwithbyteoffsetandlength_ca3d3d8811ecb569 = function(e, t, n) {
						return l(new Uint8Array(s(e), t >>> 0, n >>> 0))
					}, a.wbg.__wbg_length_317f0dd77f7a6673 = function(e) {
						return s(e).length
					}, a.wbg.__wbg_new_135e963dedf67b22 = function(e) {
						return l(new Uint8Array(s(e)))
					}, a.wbg.__wbg_set_4a5072a31008e0cb = function(e, t, n) {
						s(e).set(s(t), n >>> 0)
					}, a.wbg.__wbg_fill_f08a873179c69e31 = function(e, t, n, r) {
						return l(s(e).fill(t, n >>> 0, r >>> 0))
					}, a.wbg.__wbg_buffer_3580452571655bd0 = function(e) {
						return l(s(e).buffer)
					}, a.wbg.__wbg_byteLength_7d55aca7ec6c42cb = function(e) {
						return s(e).byteLength
					}, a.wbg.__wbg_byteOffset_2ebe3f5c421f3a99 = function(e) {
						return s(e).byteOffset
					}, a.wbg.__wbg_ownKeys_b6c8becb6576203e = j((function(e) {
						return l(Reflect.ownKeys(s(e)))
					})), a.wbg.__wbg_set_61642586f7156f4a = j((function(e, t, n) {
						return Reflect.set(s(e), s(t), s(n))
					})), a.wbg.__wbindgen_number_get = function(e, t) {
						const n = s(t);
						var r = "number" == typeof n ? n : void 0;
						(null !== x && x.buffer === o.memory.buffer || (x = new Float64Array(o.memory.buffer)), x)[e / 8 + 1] = v(r) ? 0 : r, y()[e / 4 + 0] = !v(r)
					}, a.wbg.__wbindgen_string_get = function(e, t) {
						const n = s(t);
						var r = "string" == typeof n ? n : void 0,
							i = v(r) ? 0 : m(r, o.__wbindgen_malloc, o.__wbindgen_realloc),
							a = g;
						y()[e / 4 + 1] = a, y()[e / 4 + 0] = i
					}, a.wbg.__wbindgen_boolean_get = function(e) {
						const t = s(e);
						return "boolean" == typeof t ? t ? 1 : 0 : 2
					}, a.wbg.__wbindgen_debug_string = function(e, t) {
						var n = m(k(s(t)), o.__wbindgen_malloc, o.__wbindgen_realloc),
							r = g;
						y()[e / 4 + 1] = r, y()[e / 4 + 0] = n
					}, a.wbg.__wbindgen_throw = function(e, t) {
						throw new Error(d(e, t))
					}, a.wbg.__wbindgen_rethrow = function(e) {
						throw u(e)
					}, a.wbg.__wbindgen_memory = function() {
						return l(o.memory)
					}, a.wbg.__wbindgen_closure_wrapper1167 = function(e, t, n) {
						return l(E(e, t, 488, S))
					}, a.wbg.__wbindgen_closure_wrapper1169 = function(e, t, n) {
						return l(E(e, t, 488, C))
					}, a.wbg.__wbindgen_closure_wrapper1171 = function(e, t, n) {
						return l(E(e, t, 488, A))
					}, a.wbg.__wbindgen_closure_wrapper1173 = function(e, t, n) {
						return l(E(e, t, 488, I))
					}, a.wbg.__wbindgen_closure_wrapper1175 = function(e, t, n) {
						return l(E(e, t, 488, P))
					}, a.wbg.__wbindgen_closure_wrapper1177 = function(e, t, n) {
						return l(E(e, t, 488, R))
					}, a.wbg.__wbindgen_closure_wrapper1179 = function(e, t, n) {
						return l(E(e, t, 488, F))
					}, a.wbg.__wbindgen_closure_wrapper1181 = function(e, t, n) {
						return l(E(e, t, 488, O))
					}, a.wbg.__wbindgen_closure_wrapper1755 = function(e, t, n) {
						return l(E(e, t, 848, T))
					}, ("string" == typeof t || "function" == typeof Request && t instanceof Request || "function" == typeof URL && t instanceof URL) && (t = fetch(t));
					const {
						instance: c,
						module: _
					} = await async function(e, t) {
						if ("function" == typeof Response && e instanceof Response) {
							if ("function" == typeof WebAssembly.instantiateStreaming) try {
								return await WebAssembly.instantiateStreaming(e, t)
							} catch (t) {
								if ("application/wasm" == e.headers.get("Content-Type")) throw t;
								console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t)
							}
							const n = await e.arrayBuffer();
							return await WebAssembly.instantiate(n, t)
						} {
							const n = await WebAssembly.instantiate(e, t);
							return n instanceof WebAssembly.Instance ? {
								instance: n,
								module: e
							} : n
						}
					}(await t, a);
					return o = c.exports, e.__wbindgen_wasm_module = _, o
				};

				function $(e) {
					const t = "function" == typeof Function.prototype.toString ? Function.prototype.toString() : null;
					return "string" == typeof t && t.indexOf("[native code]") >= 0 && Function.prototype.toString.call(e).indexOf("[native code]") >= 0
				}
				let q = null;

				function H() {
					return null == q && (q = function() {
						return e = this, t = void 0, i = function*() {
							"function" == typeof Array.prototype.reduce && $(Array.prototype.reduce) || Object.defineProperty(Array.prototype, "reduce", {
								value(...e) {
									if (0 === e.length && window.Prototype && window.Prototype.Version && window.Prototype.Version < "1.6.1") return this.length > 1 ? this : this[0];
									const t = e[0];
									if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
									if ("function" != typeof t) throw new TypeError(`${t} is not a function`);
									const n = Object(this),
										r = n.length >>> 0;
									let i, o = 0;
									if (e.length >= 2) i = e[1];
									else {
										for (; o < r && !(o in n);) o++;
										if (o >= r) throw new TypeError("Reduce of empty array with no initial value");
										i = n[o++]
									}
									for (; o < r;) o in n && (i = t(i, n[o], o, n)), o++;
									return i
								}
							}), "function" == typeof Window && $(Window) || "function" == typeof window.constructor && $(window.constructor) && (window.Window = window.constructor), null == window.Reflect && (window.Reflect = {}), "function" != typeof Reflect.get && Object.defineProperty(Reflect, "get", {
								value: (e, t) => e[t]
							}), "function" != typeof Reflect.set && Object.defineProperty(Reflect, "set", {
								value(e, t, n) {
									e[t] = n
								}
							});
							const e = yield Promise.resolve().then(n.t.bind(n, 903, 17));
							return yield V(e.default), U
						}, new((r = void 0) || (r = Promise))((function(n, o) {
							function a(e) {
								try {
									c(i.next(e))
								} catch (e) {
									o(e)
								}
							}

							function s(e) {
								try {
									c(i.throw(e))
								} catch (e) {
									o(e)
								}
							}

							function c(e) {
								var t;
								e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
									e(t)
								}))).then(a, s)
							}
							c((i = i.apply(e, t || [])).next())
						}));
						var e, t, r, i
					}()), q
				}
				class z {
					constructor(e) {
						if (this.__mimetypes = [], this.__named_mimetypes = {}, e)
							for (let t = 0; t < e.length; t++) this.install(e[t])
					}
					install(e) {
						const t = this.__mimetypes.length;
						this.__mimetypes.push(e), this.__named_mimetypes[e.type] = e, this[e.type] = e, this[t] = e
					}
					item(e) {
						return this.__mimetypes[e]
					}
					namedItem(e) {
						return this.__named_mimetypes[e]
					}
					get length() {
						return this.__mimetypes.length
					} [Symbol.iterator]() {
						return this.__mimetypes[Symbol.iterator]()
					}
				}
				class J extends z {
					constructor(e, t, n, r) {
						super(r), this.name = e, this.description = t, this.filename = n
					}
					install(e) {
						super.install(e)
					} [Symbol.iterator]() {
						return super[Symbol.iterator]()
					}
				}
				class G {
					constructor(e) {
						this.__plugins = [], this.__named_plugins = {};
						for (let t = 0; t < e.length; t++) this.install(e[t])
					}
					install(e) {
						const t = this.__plugins.length;
						this.__plugins.push(e), this.__named_plugins[e.name] = e, this[e.name] = e, this[t] = e
					}
					item(e) {
						return this.__plugins[e]
					}
					namedItem(e) {
						return this.__named_plugins[e]
					}
					get length() {
						return this.__plugins.length
					}
				}
				const Y = new J("Shockwave Flash", "Shockwave Flash 32.0 r0", "ruffle.js", null);

				function X(e) {
					"install" in navigator.plugins && navigator.plugins.install || Object.defineProperty(navigator, "plugins", {
						value: new G(navigator.plugins),
						writable: !1
					}), navigator.plugins.install(e), !(e.length > 0) || "install" in navigator.mimeTypes && navigator.mimeTypes.install || Object.defineProperty(navigator, "mimeTypes", {
						value: new z(navigator.mimeTypes),
						writable: !1
					});
					const t = navigator.mimeTypes;
					for (let n = 0; n < e.length; n += 1) t.install(e[n])
				}
				Y.install({
					type: "application/futuresplash",
					description: "Shockwave Flash",
					suffixes: "spl",
					enabledPlugin: Y
				}), Y.install({
					type: "application/x-shockwave-flash",
					description: "Shockwave Flash",
					suffixes: "swf",
					enabledPlugin: Y
				}), Y.install({
					type: "application/x-shockwave-flash2-preview",
					description: "Shockwave Flash",
					suffixes: "swf",
					enabledPlugin: Y
				}), Y.install({
					type: "application/vnd.adobe.flash-movie",
					description: "Shockwave Flash",
					suffixes: "swf",
					enabledPlugin: Y
				});
				const K = document.createElement("template");
				K.innerHTML = '\n    <style>\n        :host {\n            --ruffle-blue: #37528c;\n            --ruffle-orange: #ffad33;\n\n            display: inline-block;\n            position: relative;\n            /* Default width/height; this will get overridden by user styles/attributes. */\n            width: 550px;\n            height: 400px;\n            font-family: Arial, sans-serif;\n            letter-spacing: 0.4px;\n            touch-action: none;\n            user-select: none;\n            -webkit-user-select: none;\n            -webkit-tap-highlight-color: transparent;\n        }\n        \n        /* Ruffle\'s width/height CSS interferes Safari fullscreen CSS. */\n        /* Ensure that Safari\'s fullscreen mode actually fills the screen. */\n        :host(:-webkit-full-screen) {\n            display: block;\n            width: 100% !important;\n            height: 100% !important;\n        }\n\n        /* All of these use the dimensions specified by the embed. */\n        #container,\n        #play_button,\n        #unmute_overlay,\n        #unmute_overlay .background,\n        #panic,\n        #message_overlay {\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n        }\n\n        #container {\n            overflow: hidden;\n        }\n\n        #container canvas {\n            width: 100%;\n            height: 100%;\n        }\n\n        #play_button,\n        #unmute_overlay {\n            cursor: pointer;\n            display: none;\n        }\n\n        #unmute_overlay .background {\n            background: black;\n            opacity: 0.7;\n        }\n\n        #play_button .icon,\n        #unmute_overlay .icon {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 50%;\n            height: 50%;\n            max-width: 384px;\n            max-height: 384px;\n            transform: translate(-50%, -50%);\n            opacity: 0.8;\n        }\n\n        #play_button:hover .icon,\n        #unmute_overlay:hover .icon {\n            opacity: 1;\n        }\n\n        #panic {\n            font-size: 20px;\n            text-align: center;\n            /* Inverted colors from play button! */\n            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);\n            color: white;\n            display: flex;\n            flex-flow: column;\n            justify-content: space-around;\n        }\n\n        #panic a {\n            color: var(--ruffle-blue);\n            font-weight: bold;\n        }\n\n        #panic-title {\n            font-size: xxx-large;\n            font-weight: bold;\n        }\n\n        #panic-body.details {\n            flex: 0.9;\n            margin: 0 10px;\n        }\n\n        #panic-body textarea {\n            width: 100%;\n            height: 100%;\n            resize: none;\n        }\n\n        #panic ul {\n            padding: 0;\n            display: flex;\n            list-style-type: none;\n            justify-content: space-evenly;\n        }\n\n        #message_overlay {\n            position: absolute;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            opacity: 1;\n            z-index: 2;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            overflow: auto;\n        }\n\n        #message_overlay .message {\n            text-align: center;\n            max-height: 100%;\n            max-width: 100%;\n            padding: 5%;\n        }\n\n        #message_overlay p {\n            margin: 0.5em 0;\n        }\n\n        #message_overlay .message div {\n            display: flex;\n            justify-content: center;\n            flex-wrap: wrap;\n            column-gap: 1em;\n        }\n\n        #message_overlay a, #message_overlay button {\n            cursor: pointer;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            border: 2px solid var(--ruffle-orange);\n            font-weight: bold;\n            font-size: 1.25em;\n            border-radius: 0.6em;\n            padding: 10px;\n            text-decoration: none;\n            margin: 2% 0;\n        }\n\n        #message_overlay a:hover, #message_overlay button:hover {\n            background: #ffffff4c;\n        }\n\n        #continue-btn {\n             cursor: pointer;\n             background: var(--ruffle-blue);\n             color: var(--ruffle-orange);\n             border: 2px solid var(--ruffle-orange);\n             font-weight: bold;\n             font-size: 20px;\n             border-radius: 20px;\n             padding: 10px;\n        }\n\n        #continue-btn:hover {\n            background: #ffffff4c;\n        }\n\n        #context-menu {\n            display: none;\n            color: black;\n            background: #fafafa;\n            border: 1px solid gray;\n            box-shadow: 0px 5px 10px -5px black;\n            position: absolute;\n            font-size: 14px;\n            text-align: left;\n            list-style: none;\n            padding: 0;\n            margin: 0;\n        }\n\n        #context-menu .menu_item {\n            padding: 5px 10px;\n        }\n\n        #context-menu .active {\n            cursor: pointer;\n            color: black;\n        }\n\n        #context-menu .disabled {\n            cursor: default;\n            color: gray;\n        }\n\n        #context-menu .active:hover {\n            background: lightgray;\n        }\n\n        #context-menu .menu_separator hr {\n            border: none;\n            border-bottom: 1px solid lightgray;\n            margin: 2px;\n        }\n    </style>\n    <style id="dynamic_styles"></style>\n\n    <div id="container">\n        <div id="play_button"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 250 250" style="width:100%;height:100%;"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="125" y1="0" x2="125" y2="250" spreadMethod="pad"><stop offset="0%" stop-color="#FDA138"/><stop offset="100%" stop-color="#FD3A40"/></linearGradient><g id="b"><path fill="url(#a)" d="M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"/><path fill="#FFF" d="M87 55v140l100-70L87 55z"/></g></defs><use xlink:href="#b"/></svg></div></div>\n        <div id="unmute_overlay"><div class="background"></div><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 512 584" style="width:100%;height:100%;scale:0.8;"><path fill="#FFF" stroke="#FFF" d="m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"/><path fill="#FFF" stroke="#FFF" d="m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"/><path fill="#FFF" stroke="#FFF" d="m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"/><text x="256" y="560" text-anchor="middle" style="font-size:60px;fill:#FFF;stroke:#FFF;">Click to unmute</text></svg></div></div>\n    </div>\n\n    <ul id="context-menu"></ul>\n';
				const Q = {};

				function Z(e) {
					const t = Q[e];
					return void 0 !== t ? {
						internalName: e,
						name: t.name,
						class: t.class
					} : null
				}

				function ee(e, t) {
					if (void 0 !== Q[e]) {
						if (Q[e].class !== t) throw new Error("Internal naming conflict on " + e);
						return Q[e].name
					}
					let n = 0;
					if (void 0 !== window.customElements)
						for (; n < 999;) {
							let r = e;
							if (n > 0 && (r = r + "-" + n), void 0 === window.customElements.get(r)) return window.customElements.define(r, t), Q[e] = {
								class: t,
								name: r,
								internalName: e
							}, r;
							n += 1
						}
					throw new Error("Failed to assign custom element " + e)
				}
				var te, ne, re, ie;
				! function(e) {
					e.On = "on", e.Off = "off", e.Auto = "auto"
				}(te || (te = {})),
				function(e) {
					e.Off = "off", e.Fullscreen = "fullscreen", e.On = "on"
				}(ne || (ne = {})),
				function(e) {
					e.Visible = "visible", e.Hidden = "hidden"
				}(re || (re = {})),
				function(e) {
					e.Error = "error", e.Warn = "warn", e.Info = "info", e.Debug = "debug", e.Trace = "trace"
				}(ie || (ie = {}));
				var oe = function(e, t, n, r) {
					return new(n || (n = Promise))((function(i, o) {
						function a(e) {
							try {
								c(r.next(e))
							} catch (e) {
								o(e)
							}
						}

						function s(e) {
							try {
								c(r.throw(e))
							} catch (e) {
								o(e)
							}
						}

						function c(e) {
							var t;
							e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							}))).then(a, s)
						}
						c((r = r.apply(e, t || [])).next())
					}))
				};
				const ae = "application/x-shockwave-flash",
					se = "application/futuresplash",
					ce = "application/x-shockwave-flash2-preview",
					le = "application/vnd.adobe.flash-movie",
					ue = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
					_e = "https://ruffle.rs",
					fe = /^\s*(\d+(\.\d+)?(%)?)/;
				var be, de;

				function ge(e) {
					if (null == e) return {};
					e instanceof URLSearchParams || (e = new URLSearchParams(e));
					const t = {};
					for (const [n, r] of e) t[n] = r.toString();
					return t
				}! function(e) {
					e[e.Unknown = 0] = "Unknown", e[e.CSPConflict = 1] = "CSPConflict", e[e.FileProtocol = 2] = "FileProtocol", e[e.JavascriptConfiguration = 3] = "JavascriptConfiguration", e[e.JavascriptConflict = 4] = "JavascriptConflict", e[e.WasmCors = 5] = "WasmCors", e[e.WasmMimeType = 6] = "WasmMimeType", e[e.WasmNotFound = 7] = "WasmNotFound"
				}(be || (be = {}));
				class we extends HTMLElement {
					constructor() {
						return super(), this.hasContextMenu = !1, this.isTouch = !1, this.panicked = !1, this.config = {}, this.shadow = this.attachShadow({
							mode: "open"
						}), this.shadow.appendChild(K.content.cloneNode(!0)), this.dynamicStyles = this.shadow.getElementById("dynamic_styles"), this.container = this.shadow.getElementById("container"), this.playButton = this.shadow.getElementById("play_button"), this.playButton && this.playButton.addEventListener("click", this.playButtonClicked.bind(this)), this.unmuteOverlay = this.shadow.getElementById("unmute_overlay"), this.unmuteOverlay.addEventListener("click", this.unmuteOverlayClicked.bind(this)), this.contextMenuElement = this.shadow.getElementById("context-menu"), this.addEventListener("contextmenu", this.showContextMenu.bind(this)), this.addEventListener("pointerdown", this.pointerDown.bind(this)), window.addEventListener("click", this.hideContextMenu.bind(this)), this.instance = null, this.options = null, this.onFSCommand = null, this._trace_observer = null, this._readyState = de.HaveNothing, this._metadata = null, this.ruffleConstructor = H(), this.lastActivePlayingState = !1, this.setupPauseOnTabHidden(), this
					}
					get readyState() {
						return this._readyState
					}
					get metadata() {
						return this._metadata
					}
					setupPauseOnTabHidden() {
						document.addEventListener("visibilitychange", (() => {
							this.instance && (document.hidden && (this.lastActivePlayingState = this.instance.is_playing(), this.instance.pause()), document.hidden || !0 !== this.lastActivePlayingState || this.instance.play())
						}), !1)
					}
					connectedCallback() {
						this.updateStyles()
					}
					static get observedAttributes() {
						return ["width", "height"]
					}
					attributeChangedCallback(e, t, n) {
						"width" !== e && "height" !== e || this.updateStyles()
					}
					disconnectedCallback() {
						this.destroy()
					}
					updateStyles() {
						if (this.dynamicStyles.sheet) {
							if (this.dynamicStyles.sheet.rules)
								for (let e = 0; e < this.dynamicStyles.sheet.rules.length; e++) this.dynamicStyles.sheet.deleteRule(e);
							const e = this.attributes.getNamedItem("width");
							if (null != e) {
								const t = we.htmlDimensionToCssDimension(e.value);
								null !== t && this.dynamicStyles.sheet.insertRule(`:host { width: ${t}; }`)
							}
							const t = this.attributes.getNamedItem("height");
							if (null != t) {
								const e = we.htmlDimensionToCssDimension(t.value);
								null !== e && this.dynamicStyles.sheet.insertRule(`:host { height: ${e}; }`)
							}
						}
					}
					isUnusedFallbackObject() {
						let e = this.parentNode;
						const t = Z("ruffle-object");
						if (null !== t)
							for (; e != document && null != e;) {
								if (e.nodeName === t.name) return !0;
								e = e.parentNode
							}
						return !1
					}
					ensureFreshInstance(e) {
						var t;
						return oe(this, void 0, void 0, (function*() {
							this.destroy();
							const n = yield this.ruffleConstructor.catch((e => {
								if (console.error(`Serious error loading Ruffle: ${e}`), "file:" === window.location.protocol) e.ruffleIndexError = be.FileProtocol;
								else {
									e.ruffleIndexError = be.WasmNotFound;
									const t = String(e.message).toLowerCase();
									t.includes("mime") ? e.ruffleIndexError = be.WasmMimeType : t.includes("networkerror") || t.includes("failed to fetch") ? e.ruffleIndexError = be.WasmCors : t.includes("disallowed by embedder") ? e.ruffleIndexError = be.CSPConflict : t.includes("magic") || "CompileError" !== e.name && "TypeError" !== e.name || (e.ruffleIndexError = be.JavascriptConflict)
								}
								throw this.panic(e), e
							}));
							this.instance = new n(this.container, this, e), console.log("New Ruffle instance created."), "running" !== this.audioState() && (this.container.style.visibility = "hidden", yield new Promise((e => {
								window.setTimeout((() => {
									e()
								}), 200)
							})), this.container.style.visibility = "");
							const r = Object.values(Object(te)).includes(e.autoplay) ? e.autoplay : te.Auto,
								i = Object.values(Object(re)).includes(e.unmuteOverlay) ? e.unmuteOverlay : re.Visible;
							if (r == te.On || r == te.Auto && "running" === this.audioState()) {
								if (this.play(), "running" !== this.audioState()) {
									this.unmuteOverlay.style.display = "block", this.unmuteOverlay.childNodes.forEach((e => {
										"style" in e && (e.style.visibility = i == re.Visible ? "" : "hidden")
									}));
									const e = null === (t = this.instance) || void 0 === t ? void 0 : t.audio_context();
									e && (e.onstatechange = () => {
										"running" === e.state && this.unmuteOverlayClicked(), e.onstatechange = null
									})
								}
							} else this.playButton.style.display = "block"
						}))
					}
					destroy() {
						this.instance && (this.instance.destroy(), this.instance = null, this._metadata = null, this._readyState = de.HaveNothing, console.log("Ruffle instance destroyed."))
					}
					load(e) {
						var t, n;
						return oe(this, void 0, void 0, (function*() {
							let r = "";
							switch (typeof e) {
								case "string":
									e = {
										url: e
									};
									break;
								case "object":
									null === e ? r = "Argument 0 must be a string or object" : "url" in e || "data" in e ? "url" in e && "string" != typeof e.url && (r = "`url` must be a string") : r = "Argument 0 must contain a `url` or `data` key";
									break;
								default:
									r = "Argument 0 must be a string or object"
							}
							if (r.length > 0) {
								const e = new TypeError(r);
								throw e.ruffleIndexError = be.JavascriptConfiguration, this.panic(e), e
							}
							if (this.isConnected && !this.isUnusedFallbackObject()) try {
								const r = Object.assign(Object.assign(Object.assign({}, null !== (n = null === (t = window.RufflePlayer) || void 0 === t ? void 0 : t.config) && void 0 !== n ? n : {}), this.config), e);
								if (r.allowScriptAccess = e.allowScriptAccess, this.options = e, this.hasContextMenu = !1 !== r.contextMenu, r.backgroundColor && (this.container.style.backgroundColor = r.backgroundColor), yield this.ensureFreshInstance(r), "url" in e) {
									console.log(`Loading SWF file ${e.url}`);
									try {
										this.swfUrl = new URL(e.url, document.location.href).href
									} catch (t) {
										this.swfUrl = e.url
									}
									const t = Object.assign(Object.assign({}, ge(e.url.substring(e.url.indexOf("?")))), ge(e.parameters));
									this.instance.stream_from(e.url, t)
								} else "data" in e && (console.log("Loading SWF data"), this.instance.load_data(new Uint8Array(e.data), ge(e.parameters)))
							} catch (e) {
								throw console.error(`Serious error occurred loading SWF file: ${e}`), e
							} else console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element")
						}))
					}
					playButtonClicked() {
						this.play()
					}
					play() {
						this.instance && (this.instance.play(), this.playButton && (this.playButton.style.display = "none"))
					}
					get fullscreenEnabled() {
						return !(!document.fullscreenEnabled && !document.webkitFullscreenEnabled)
					}
					get isFullscreen() {
						return (document.fullscreenElement || document.webkitFullscreenElement) === this
					}
					enterFullscreen() {
						const e = {
							navigationUI: "hide"
						};
						this.requestFullscreen ? this.requestFullscreen(e) : this.webkitRequestFullscreen ? this.webkitRequestFullscreen(e) : this.webkitRequestFullScreen && this.webkitRequestFullScreen(e)
					}
					exitFullscreen() {
						document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
					}
					pointerDown(e) {
						"touch" !== e.pointerType && "pen" !== e.pointerType || (this.isTouch = !0)
					}
					contextMenuItems() {
						const e = [];
						return this.instance && this.instance.prepare_context_menu().forEach(((t, n) => {
							t.separatorBefore && e.push(null), e.push({
								text: t.caption + (t.checked ? " (☑)" : ""),
								onClick: () => {
									var e;
									return null === (e = this.instance) || void 0 === e ? void 0 : e.run_context_menu_callback(n)
								},
								enabled: t.enabled
							})
						})), e.push(null), this.fullscreenEnabled && (this.isFullscreen ? e.push({
							text: "Exit fullscreen",
							onClick: this.exitFullscreen.bind(this)
						}) : e.push({
							text: "Enter fullscreen",
							onClick: this.enterFullscreen.bind(this)
						})), e.push(null), e.push({
							text: "About Ruffle (nightly 2021-05-05)",
							onClick() {
								window.open(_e, "_blank")
							}
						}), e
					}
					showContextMenu(e) {
						if (e.preventDefault(), !this.hasContextMenu || this.isTouch) return;
						for (; this.contextMenuElement.firstChild;) this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);
						for (const e of this.contextMenuItems())
							if (null === e) {
								if (!this.contextMenuElement.lastElementChild) continue;
								if (this.contextMenuElement.lastElementChild.classList.contains("menu_separator")) continue;
								const e = document.createElement("li");
								e.className = "menu_separator";
								const t = document.createElement("hr");
								e.appendChild(t), this.contextMenuElement.appendChild(e)
							} else {
								const {
									text: t,
									onClick: n,
									enabled: r
								} = e, i = document.createElement("li");
								i.className = "menu_item active", i.textContent = t, this.contextMenuElement.appendChild(i), !1 !== r ? i.addEventListener("click", n) : i.classList.add("disabled")
							} this.contextMenuElement.style.left = "0", this.contextMenuElement.style.top = "0", this.contextMenuElement.style.display = "block";
						const t = this.getBoundingClientRect(),
							n = e.clientX - t.x,
							r = e.clientY - t.y,
							i = t.width - this.contextMenuElement.clientWidth - 1,
							o = t.height - this.contextMenuElement.clientHeight - 1;
						this.contextMenuElement.style.left = Math.floor(Math.min(n, i)) + "px", this.contextMenuElement.style.top = Math.floor(Math.min(r, o)) + "px"
					}
					hideContextMenu() {
						var e;
						null === (e = this.instance) || void 0 === e || e.clear_custom_menu_items(), this.contextMenuElement.style.display = "none"
					}
					pause() {
						this.instance && (this.instance.pause(), this.playButton && (this.playButton.style.display = "block"))
					}
					audioState() {
						if (this.instance) {
							const e = this.instance.audio_context();
							return e && e.state || "running"
						}
						return "suspended"
					}
					unmuteOverlayClicked() {
						if (this.instance) {
							if ("running" !== this.audioState()) {
								const e = this.instance.audio_context();
								e && e.resume()
							}
							this.unmuteOverlay && (this.unmuteOverlay.style.display = "none")
						}
					}
					copyElement(e) {
						if (e) {
							for (let t = 0; t < e.attributes.length; t++) {
								const n = e.attributes[t];
								if (n.specified) {
									if ("title" === n.name && "Adobe Flash Player" === n.value) continue;
									try {
										this.setAttribute(n.name, n.value)
									} catch (e) {
										console.warn(`Unable to set attribute ${n.name} on Ruffle instance`)
									}
								}
							}
							for (const t of Array.from(e.children)) this.appendChild(t)
						}
					}
					static htmlDimensionToCssDimension(e) {
						if (e) {
							const t = e.match(fe);
							if (t) {
								let e = t[1];
								return t[3] || (e += "px"), e
							}
						}
						return null
					}
					onCallbackAvailable(e) {
						const t = this.instance;
						this[e] = (...n) => null == t ? void 0 : t.call_exposed_callback(e, n)
					}
					set traceObserver(e) {
						var t;
						null === (t = this.instance) || void 0 === t || t.set_trace_observer(e)
					}
					panic(e) {
						var t;
						if (this.panicked) return;
						if (this.panicked = !0, e instanceof Error && ("AbortError" === e.name || e.message.includes("AbortError"))) return;
						const n = null !== (t = null == e ? void 0 : e.ruffleIndexError) && void 0 !== t ? t : be.Unknown,
							r = Object.assign([], {
								stackIndex: -1
							});
						if (r.push("# Error Info\n"), e instanceof Error) {
							if (r.push(`Error name: ${e.name}\n`), r.push(`Error message: ${e.message}\n`), e.stack) {
								const t = r.push(`Error stack:\n\`\`\`\n${e.stack}\n\`\`\`\n`) - 1;
								r.stackIndex = t
							}
						} else r.push(`Error: ${e}\n`);
						r.push("\n# Player Info\n"), r.push(this.debugPlayerInfo()), r.push("\n# Page Info\n"), r.push(`Page URL: ${document.location.href}\n`), this.swfUrl && r.push(`SWF URL: ${this.swfUrl}\n`), r.push("\n# Browser Info\n"), r.push(`Useragent: ${window.navigator.userAgent}\n`), r.push(`OS: ${window.navigator.platform}\n`), r.push("\n# Ruffle Info\n"), r.push("Version: 0.1.0\n"), r.push("Name: nightly 2021-05-05\n"), r.push("Channel: nightly\n"), r.push("Built: 2021-05-05T00:12:57.039Z\n"), r.push("Commit: b82391726f76c059b3c33636e6c9980a4fdac5c4\n");
						const i = r.join(""),
							o = document.location.href.split(/[?#]/)[0];
						let a, s, c = `https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(`Error on ${o}`)}&body=`,
							l = encodeURIComponent(i);
						switch (r.stackIndex > -1 && String(c + l).length > 8195 && (r[r.stackIndex] = null, l = encodeURIComponent(r.join(""))), c += l, n) {
							case be.FileProtocol:
								a = '\n                    <p>It appears you are running Ruffle on the "file:" protocol.</p>\n                    <p>This doesn\'t work as browsers block many features from working for security reasons.</p>\n                    <p>Instead, we invite you to setup a local server or either use the web demo or the desktop application.</p>\n                ', s = `\n                    <li><a target="_top" href="${_e}/demo">Web Demo</a></li>\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/tags">Desktop Application</a></li>\n                `;
								break;
							case be.JavascriptConfiguration:
								a = "\n                    <p>Ruffle has encountered a major issue due to an incorrect JavaScript configuration.</p>\n                    <p>If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.</p>\n                    <p>You can also consult the Ruffle wiki for help.</p>\n                ", s = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
								break;
							case be.WasmNotFound:
								a = '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>If you are the server administrator, please ensure the file has correctly been uploaded.</p>\n                    <p>If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.</p>\n                ', s = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
								break;
							case be.WasmMimeType:
								a = '\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server is not serving ".wasm" files with the correct MIME type.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ', s = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
								break;
							case be.WasmCors:
								a = '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>Access to fetch has likely been blocked by CORS policy.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ', s = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#web">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
								break;
							case be.JavascriptConflict:
								a = "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>It seems like this page uses JavaScript code that conflicts with Ruffle.</p>\n                    <p>If you are the server administrator, we invite you to try loading the file on a blank page.</p>\n                ", s = `\n                    <li><a target="_top" href="${c}">Report Bug</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `;
								break;
							case be.CSPConflict:
								a = '\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server\'s Content Security Policy does not allow the required ".wasm" component to run.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ', s = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-wasm-csp">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
								break;
							default:
								a = "\n                    <p>Ruffle has encountered a major issue whilst trying to display this Flash content.</p>\n                    <p>This isn't supposed to happen, so we'd really appreciate if you could file a bug!</p>\n                ", s = `\n                    <li><a target="_top" href="${c}">Report Bug</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `
						}
						this.container.innerHTML = `\n            <div id="panic">\n                <div id="panic-title">Something went wrong :(</div>\n                <div id="panic-body">${a}</div>\n                <div id="panic-footer">\n                    <ul>${s}</ul>\n                </div>\n            </div>\n        `;
						const u = this.container.querySelector("#panic-view-details");
						u && (u.onclick = () => {
							const e = this.container.querySelector("#panic-body");
							return e.classList.add("details"), e.innerHTML = `<textarea>${i}</textarea>`, !1
						}), this.destroy()
					}
					displayUnsupportedMessage() {
						const e = document.createElement("div");
						e.id = "message_overlay", e.innerHTML = '<div class="message">\n            <p>Flash Player has been removed from browsers in 2021.</p>\n            <p>This content is not yet supported by the Ruffle emulator and will likely not run as intended.</p>\n            <div>\n                <a target="_top" class="more-info-link" href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users">More info</a>\n                <button id="run-anyway-btn">Run anyway</button>\n            </div>\n        </div>', this.container.prepend(e), e.querySelector("#run-anyway-btn").onclick = () => {
							e.parentNode.removeChild(e)
						}
					}
					displayMessage(e) {
						const t = document.createElement("div");
						t.id = "message_overlay", t.innerHTML = `<div class="message">\n            <p>${e}</p>\n            <div>\n                <button id="continue-btn">continue</button>\n            </div>\n        </div>`, this.container.prepend(t), this.container.querySelector("#continue-btn").onclick = () => {
							t.parentNode.removeChild(t)
						}
					}
					debugPlayerInfo() {
						var e, t;
						return `Allows script access: ${null!==(t=null===(e=this.options)||void 0===e?void 0:e.allowScriptAccess)&&void 0!==t&&t}\n`
					}
					setMetadata(e) {
						this._metadata = e, this._readyState = de.Loaded, this.dispatchEvent(new Event(we.LOADED_METADATA))
					}
				}

				function he(e, t) {
					switch (e || (e = "sameDomain"), e.toLowerCase()) {
						case "always":
							return !0;
						case "never":
							return !1;
						case "samedomain":
						default:
							try {
								return new URL(window.location.href).origin === new URL(t, window.location.href).origin
							} catch (e) {
								return !1
							}
					}
				}

				function me(e) {
					if (e) {
						let t = "";
						try {
							t = new URL(e, _e).pathname
						} catch (e) {}
						if (t && t.length >= 4) {
							const e = t.slice(-4).toLowerCase();
							if (".swf" === e || ".spl" === e) return !0
						}
					}
					return !1
				}
				we.LOADED_METADATA = "loadedmetadata",
					function(e) {
						e[e.HaveNothing = 0] = "HaveNothing", e[e.Loading = 1] = "Loading", e[e.Loaded = 2] = "Loaded"
					}(de || (de = {}));
				class pe extends we {
					constructor() {
						super()
					}
					connectedCallback() {
						var e, t, n, r;
						super.connectedCallback();
						const i = this.attributes.getNamedItem("src");
						if (i) {
							const o = null !== (t = null === (e = this.attributes.getNamedItem("allowScriptAccess")) || void 0 === e ? void 0 : e.value) && void 0 !== t ? t : null;
							this.load({
								url: i.value,
								allowScriptAccess: he(o, i.value),
								parameters: null === (n = this.attributes.getNamedItem("flashvars")) || void 0 === n ? void 0 : n.value,
								backgroundColor: null === (r = this.attributes.getNamedItem("bgcolor")) || void 0 === r ? void 0 : r.value
							})
						}
					}
					get src() {
						var e;
						return null === (e = this.attributes.getNamedItem("src")) || void 0 === e ? void 0 : e.value
					}
					set src(e) {
						if (null != e) {
							const t = document.createAttribute("src");
							t.value = e, this.attributes.setNamedItem(t)
						} else this.attributes.removeNamedItem("src")
					}
					static get observedAttributes() {
						return ["src", "width", "height"]
					}
					attributeChangedCallback(e, t, n) {
						if (super.attributeChangedCallback(e, t, n), this.isConnected && "src" === e) {
							let e;
							const t = this.attributes.getNamedItem("flashvars");
							t && (e = t.value);
							const n = this.attributes.getNamedItem("src");
							n && this.load({
								url: n.value,
								parameters: e
							})
						}
					}
					static isInterdictable(e) {
						var t;
						if (!e.getAttribute("src")) return !1;
						const n = null === (t = e.getAttribute("type")) || void 0 === t ? void 0 : t.toLowerCase();
						return n === ae.toLowerCase() || n === se.toLowerCase() || n === ce.toLowerCase() || n === le.toLowerCase() || (null == n || "" === n) && me(e.getAttribute("src"))
					}
					static fromNativeEmbedElement(e) {
						const t = ee("ruffle-embed", pe),
							n = document.createElement(t);
						return n.copyElement(e), n
					}
				}

				function ye(e, t, n) {
					t = t.toLowerCase();
					for (const n in e)
						if (Object.hasOwnProperty.call(e, n) && t === n.toLowerCase()) return e[n];
					return n
				}

				function ve(e) {
					var t, n;
					const r = {};
					for (const i of e.children)
						if (i instanceof HTMLParamElement) {
							const e = null === (t = i.attributes.getNamedItem("name")) || void 0 === t ? void 0 : t.value,
								o = null === (n = i.attributes.getNamedItem("value")) || void 0 === n ? void 0 : n.value;
							e && o && (r[e] = o)
						} return r
				}
				class xe extends we {
					constructor() {
						super(), this.params = {}
					}
					connectedCallback() {
						var e;
						super.connectedCallback(), this.params = ve(this);
						let t = null;
						this.attributes.getNamedItem("data") ? t = null === (e = this.attributes.getNamedItem("data")) || void 0 === e ? void 0 : e.value : this.params.movie && (t = this.params.movie);
						const n = ye(this.params, "allowScriptAccess", null),
							r = ye(this.params, "flashvars", this.getAttribute("flashvars")),
							i = ye(this.params, "bgcolor", this.getAttribute("bgcolor"));
						if (t) {
							const e = {
								url: t
							};
							e.allowScriptAccess = he(n, t), r && (e.parameters = r), i && (e.backgroundColor = i), this.load(e)
						}
					}
					debugPlayerInfo() {
						var e;
						let t = super.debugPlayerInfo();
						t += "Player type: Object\n";
						let n = null;
						return this.attributes.getNamedItem("data") ? n = null === (e = this.attributes.getNamedItem("data")) || void 0 === e ? void 0 : e.value : this.params.movie && (n = this.params.movie), t += `SWF URL: ${n}\n`, Object.keys(this.params).forEach((e => {
							t += `Param ${e}: ${this.params[e]}\n`
						})), Object.keys(this.attributes).forEach((e => {
							var n;
							t += `Attribute ${e}: ${null===(n=this.attributes.getNamedItem(e))||void 0===n?void 0:n.value}\n`
						})), t
					}
					get data() {
						return this.getAttribute("data")
					}
					set data(e) {
						if (null != e) {
							const t = document.createAttribute("data");
							t.value = e, this.attributes.setNamedItem(t)
						} else this.attributes.removeNamedItem("data")
					}
					static isInterdictable(e) {
						var t, n, r;
						if (e.getElementsByTagName("ruffle-embed").length > 0) return !1;
						const i = null === (t = e.attributes.getNamedItem("data")) || void 0 === t ? void 0 : t.value.toLowerCase(),
							o = ve(e);
						let a;
						if (i) a = me(i);
						else {
							if (!o || !o.movie) return !1;
							a = me(o.movie)
						}
						const s = null === (n = e.attributes.getNamedItem("classid")) || void 0 === n ? void 0 : n.value.toLowerCase();
						if (s === ue.toLowerCase()) return !Array.from(e.getElementsByTagName("embed")).some(pe.isInterdictable);
						if (null != s && "" !== s) return !1;
						const c = null === (r = e.attributes.getNamedItem("type")) || void 0 === r ? void 0 : r.value.toLowerCase();
						return c === ae.toLowerCase() || c === se.toLowerCase() || c === ce.toLowerCase() || c === le.toLowerCase() || (null == c || "" === c) && a
					}
					static fromNativeObjectElement(e) {
						const t = ee("ruffle-object", xe),
							n = document.createElement(t);
						for (const t of Array.from(e.getElementsByTagName("embed"))) pe.isInterdictable(t) && t.remove();
						for (const t of Array.from(e.getElementsByTagName("object"))) xe.isInterdictable(t) && t.remove();
						return n.copyElement(e), n
					}
				}

				function ke(e, t) {
					let n = "";
					if (void 0 !== e && void 0 !== e.publicPaths && void 0 !== e.publicPaths[t]) n = e.publicPaths[t];
					else if (void 0 !== e && void 0 !== e.publicPath) n = e.publicPath;
					else if (void 0 !== document.currentScript && null !== document.currentScript && "src" in document.currentScript && "" !== document.currentScript.src) try {
						n = new URL(".", document.currentScript.src).href
					} catch (e) {
						console.warn("Unable to get currentScript URL")
					}
					return "" === n || n.endsWith("/") || (n += "/"), n
				}
				var Ee, Se;
				let Ce;
				const Ae = null !== (Se = null === (Ee = window.RufflePlayer) || void 0 === Ee ? void 0 : Ee.config) && void 0 !== Se ? Se : {},
					Ie = ke(Ae, "ruffle.js") + "ruffle.js";
				let Pe, Re, Fe, Oe;

				function Te() {
					try {
						Pe = null != Pe ? Pe : document.getElementsByTagName("object"), Re = null != Re ? Re : document.getElementsByTagName("embed");
						for (const e of Array.from(Pe))
							if (xe.isInterdictable(e)) {
								const t = xe.fromNativeObjectElement(e);
								e.replaceWith(t)
							} for (const e of Array.from(Re))
							if (pe.isInterdictable(e)) {
								const t = pe.fromNativeEmbedElement(e);
								e.replaceWith(t)
							}
					} catch (e) {
						console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`)
					}
				}

				function Me() {
					Fe = null != Fe ? Fe : document.getElementsByTagName("iframe"), Oe = null != Oe ? Oe : document.getElementsByTagName("frame"), [Fe, Oe].forEach((e => {
						for (let t = 0; t < e.length; t++) {
							const n = e[t];
							if (void 0 !== n.dataset.rufflePolyfilled) continue;
							n.dataset.rufflePolyfilled = "";
							const r = n.contentWindow,
								i = `Couldn't load Ruffle into ${n.tagName}[${n.src}]: `;
							try {
								"complete" === r.document.readyState && Le(r, i)
							} catch (e) {
								Ce || console.warn(i + e)
							}
							n.addEventListener("load", (() => {
								Le(r, i)
							}), !1)
						}
					}))
				}

				function Le(e, t) {
					var n, r, i, o, a;
					return r = this, i = void 0, a = function*() {
						let r;
						yield new Promise((e => {
							window.setTimeout((() => {
								e()
							}), 100)
						}));
						try {
							if (r = e.document, !r) return
						} catch (e) {
							return void(Ce || console.warn(t + e))
						}
						if (Ce || void 0 === r.documentElement.dataset.ruffleOptout)
							if (Ce) e.RufflePlayer || (e.RufflePlayer = {}), e.RufflePlayer.config = Object.assign(Object.assign({}, Ae), null !== (n = e.RufflePlayer.config) && void 0 !== n ? n : {});
							else if (!e.RufflePlayer) {
							const t = r.createElement("script");
							t.setAttribute("src", Ie), t.onload = () => {
								e.RufflePlayer = {}, e.RufflePlayer.config = Ae
							}, r.head.appendChild(t)
						}
					}, new((o = void 0) || (o = Promise))((function(e, t) {
						function n(e) {
							try {
								c(a.next(e))
							} catch (e) {
								t(e)
							}
						}

						function s(e) {
							try {
								c(a.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function c(t) {
							var r;
							t.done ? e(t.value) : (r = t.value, r instanceof o ? r : new o((function(e) {
								e(r)
							}))).then(n, s)
						}
						c((a = a.apply(r, i || [])).next())
					}))
				}

				function je() {
					X(Y)
				}

				function Ne(e) {
					Ce = e, Te(), Me(), new MutationObserver((function(e) {
						e.some((e => e.addedNodes.length > 0)) && (Te(), Me())
					})).observe(document, {
						childList: !0,
						subtree: !0
					})
				}
				class We {
					constructor(e, t, n, r, i) {
						this.major = e, this.minor = t, this.patch = n, this.prIdent = r, this.buildIdent = i
					}
					static fromSemver(e) {
						const t = e.split("+"),
							n = t[0].split("-"),
							r = n[0].split("."),
							i = parseInt(r[0], 10);
						let o = 0,
							a = 0,
							s = null,
							c = null;
						return null != r[1] && (o = parseInt(r[1], 10)), null != r[2] && (a = parseInt(r[2], 10)), null != n[1] && (s = n[1].split(".")), null != t[1] && (c = t[1].split(".")), new We(i, o, a, s, c)
					}
					isCompatibleWith(e) {
						return 0 !== this.major && this.major === e.major || 0 === this.major && 0 === e.major && 0 !== this.minor && this.minor === e.minor || 0 === this.major && 0 === e.major && 0 === this.minor && 0 === e.minor && 0 !== this.patch && this.patch === e.patch
					}
					hasPrecedenceOver(e) {
						if (this.major > e.major) return !0;
						if (this.major < e.major) return !1;
						if (this.minor > e.minor) return !0;
						if (this.minor < e.minor) return !1;
						if (this.patch > e.patch) return !0;
						if (this.patch < e.patch) return !1;
						if (null == this.prIdent && null != e.prIdent) return !0;
						if (null != this.prIdent && null != e.prIdent) {
							const t = /^[0-9]*$/;
							for (let n = 0; n < this.prIdent.length && n < e.prIdent.length; n += 1) {
								if (!t.test(this.prIdent[n]) && t.test(e.prIdent[n])) return !0;
								if (t.test(this.prIdent[n]) && t.test(e.prIdent[n])) {
									if (parseInt(this.prIdent[n], 10) > parseInt(e.prIdent[n], 10)) return !0;
									if (parseInt(this.prIdent[n], 10) < parseInt(e.prIdent[n], 10)) return !1
								} else {
									if (t.test(this.prIdent[n]) && !t.test(e.prIdent[n])) return !1;
									if (!t.test(this.prIdent[n]) && !t.test(e.prIdent[n])) {
										if (this.prIdent[n] > e.prIdent[n]) return !0;
										if (this.prIdent[n] < e.prIdent[n]) return !1
									}
								}
							}
							return this.prIdent.length > e.prIdent.length
						}
						return !1
					}
					isEqual(e) {
						return this.major === e.major && this.minor === e.minor && this.patch === e.patch
					}
					isStableOrCompatiblePrerelease(e) {
						return null == e.prIdent || this.major === e.major && this.minor === e.minor && this.patch === e.patch
					}
				}
				class Be {
					constructor(e) {
						this.requirements = e
					}
					satisfiedBy(e) {
						for (let t = 0; t < this.requirements.length; t += 1) {
							let n = !0;
							for (let r = 0; r < this.requirements[t].length; r += 1) {
								const i = this.requirements[t][r].comparator,
									o = this.requirements[t][r].version;
								n = n && o.isStableOrCompatiblePrerelease(e), "" === i || "=" === i ? n = n && o.isEqual(e) : ">" === i ? n = n && e.hasPrecedenceOver(o) : ">=" === i ? n = n && (e.hasPrecedenceOver(o) || o.isEqual(e)) : "<" === i ? n = n && o.hasPrecedenceOver(e) : "<=" === i ? n = n && (o.hasPrecedenceOver(e) || o.isEqual(e)) : "^" === i && (n = n && o.isCompatibleWith(e))
							}
							if (n) return !0
						}
						return !1
					}
					static fromRequirementString(e) {
						const t = e.split(" ");
						let n = [];
						const r = [];
						for (let e = 0; e < t.length; e += 1)
							if ("||" === t[e]) n.length > 0 && (r.push(n), n = []);
							else if (t[e].length > 0) {
							const r = /[0-9]/.exec(t[e]);
							if (r) {
								const i = t[e].slice(0, r.index).trim(),
									o = We.fromSemver(t[e].slice(r.index).trim());
								n.push({
									comparator: i,
									version: o
								})
							}
						}
						return n.length > 0 && r.push(n), new Be(r)
					}
				}
				class De {
					constructor(e) {
						this.sources = {}, this.config = {}, this.invoked = !1, this.newestName = null, this.conflict = null, null != e && (e instanceof De ? (this.sources = e.sources, this.config = e.config, this.invoked = e.invoked, this.conflict = e.conflict, this.newestName = e.newestName, e.superseded()) : e.constructor === Object && e.config instanceof Object ? this.config = e.config : this.conflict = e), "loading" === document.readyState ? window.addEventListener("DOMContentLoaded", this.init.bind(this)) : window.setTimeout(this.init.bind(this), 0)
					}
					get version() {
						return "0.1.0"
					}
					registerSource(e, t) {
						this.sources[e] = t
					}
					newestSourceName() {
						let e = null,
							t = We.fromSemver("0.0.0");
						for (const n in this.sources)
							if (Object.prototype.hasOwnProperty.call(this.sources, n)) {
								const r = We.fromSemver(this.sources[n].version);
								r.hasPrecedenceOver(t) && (e = n, t = r)
							} return e
					}
					init() {
						if (!this.invoked) {
							if (this.invoked = !0, this.newestName = this.newestSourceName(), null === this.newestName) throw new Error("No registered Ruffle source!");
							!1 !== this.config.polyfills && this.sources[this.newestName].polyfill("extension" === this.newestName)
						}
					}
					newest() {
						const e = this.newestSourceName();
						return null != e ? this.sources[e] : null
					}
					satisfying(e) {
						const t = Be.fromRequirementString(e);
						let n = null;
						for (const e in this.sources)
							if (Object.prototype.hasOwnProperty.call(this.sources, e)) {
								const r = We.fromSemver(this.sources[e].version);
								t.satisfiedBy(r) && (n = this.sources[e])
							} return n
					}
					localCompatible() {
						return void 0 !== this.sources.local ? this.satisfying("^" + this.sources.local.version) : this.newest()
					}
					local() {
						return void 0 !== this.sources.local ? this.satisfying("=" + this.sources.local.version) : this.newest()
					}
					superseded() {
						this.invoked = !0
					}
					static negotiate(e, t, n) {
						let r;
						return r = e instanceof De ? e : new De(e), void 0 !== t && void 0 !== n && (r.registerSource(t, n), !1 !== r.config.polyfills && n.pluginPolyfill()), r
					}
				}
				class Ue {
					constructor(e) {
						this.name = e
					}
					get version() {
						return "0.1.0"
					}
					polyfill(e) {
						Ne(e)
					}
					pluginPolyfill() {
						je()
					}
					createPlayer() {
						const e = ee("ruffle-player", we);
						return document.createElement(e)
					}
				}
			},
			903: (e, t, n) => {
				"use strict";
				e.exports = "https://cdn.jsdelivr.net/gh/WaterZ-dev/FlashPlayer/d6dd295efb44ba365d0d.wasm"
			}
		},
		r = {};

	function i(e) {
		var t = r[e];
		if (void 0 !== t) return t.exports;
		var o = r[e] = {
			exports: {}
		};
		return n[e](o, o.exports, i), o.exports
	}
	i.m = n, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(n, r) {
		if (1 & r && (n = this(n)), 8 & r) return n;
		if ("object" == typeof n && n) {
			if (4 & r && n.__esModule) return n;
			if (16 & r && "function" == typeof n.then) return n
		}
		var o = Object.create(null);
		i.r(o);
		var a = {};
		e = e || [null, t({}), t([]), t(t)];
		for (var s = 2 & r && n;
			"object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach((e => a[e] = () => n[e]));
		return a.default = () => n, i.d(o, a), o
	}, i.d = (e, t) => {
		for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		})
	}, i.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, i.p = "", i.b = document.baseURI || self.location.href, (() => {
		const {
			PublicAPI: e,
			SourceAPI: t,
			publicPath: n
		} = i(240);
		window.RufflePlayer = e.negotiate(window.RufflePlayer, "local", new t("local")), i.p = n(window.RufflePlayer.config, "local")
	})()
})();
