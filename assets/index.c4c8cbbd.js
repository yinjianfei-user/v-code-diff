import{h as e,c as n,l as t,d as i,r as o,w as l,a as r,b as a,e as s,f as d,g as u,i as c,v as p,j as m,k as g,F as f,o as v,m as h,n as y,A as S}from"./vendor.32792c66.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&n(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){if(e.ep)return;e.ep=!0;const n=function(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?n.credentials="include":"anonymous"===e.crossorigin?n.credentials="omit":n.credentials="same-origin",n}(e);fetch(e.href,n)}}();const w=t=>{let i=t.trim?t.oldString.trim():t.oldString,o=t.trim?t.newString.trim():t.newString;t.isShowNoChange&&(i="File Without Change\tOldString: ======================== \n"+i,o="File Without Change\tNewString: ======================== \n"+o);const l=n(t.fileName,i,o,"","",{context:t.context});return e(l,{outputFormat:t.outputFormat,drawFileList:t.drawFileList,matching:"lines",diffStyle:t.diffStyle,renderNothingWhenEmpty:t.renderNothingWhenEmpty})};async function b(e,n,i){i.emit("before-render");const o=await async function(e){return new Promise((n=>{setTimeout((()=>{const t=e.querySelectorAll(".d2h-wrapper .d2h-code-line-ctn");n(Array.from(t))}),0)}))}(e),l=Array.from(o).map((e=>async function(e){return new Promise((n=>{setTimeout((()=>{t.highlightElement(e),n(!0)}),0)}))}(e)));await Promise.all(l),i.emit("after-render")}var x=i({name:"CodeDiff",props:{highlight:{type:Boolean,default:!0},oldString:{type:String,default:""},newString:{type:String,default:""},context:{type:Number,default:10},outputFormat:{type:String,default:"line-by-line"},drawFileList:{type:Boolean,default:!1},renderNothingWhenEmpty:{type:Boolean,default:!1},diffStyle:{type:String,default:"word"},fileName:{type:String,default:""},isShowNoChange:{type:Boolean,default:!1},trim:{type:Boolean,default:!1}},emits:["before-render","after-render"],setup(e,n){const t=o(w(e)),i=function(e,n){let t;return function(){const i=this,o=arguments;clearTimeout(t),t=setTimeout((function(){e.apply(i,o)}),n)}}((async()=>{if(t.value=w(e),e.highlight){const e=document.createElement("div");e.innerHTML=t.value,await b(e,0,n),t.value=e.innerHTML}}),200);return l(e,i,{deep:!0,immediate:!0}),{html:t}},render(){return r("div",{innerHTML:this.html})}});let k=o('\n{\n  "name": "v-code-diff",\n  "description": "A diff plugin of vue, support vue2 and vue3",\n  "version": "0.0.1",\n  "scripts": {\n    "dev": "vite",\n    "build": "npx rimraf dist && rollup --config rollup.config.js",\n    "serve": "vite preview",\n    "commit": "git-cz",\n    "gh-pages": "vite build --base=/v-code-diff/ && gh-pages -d ./pages"\n  },\n  "main": "dist/v-code-diff.cjs.js",\n  "module": "dist/v-code-diff.esm.js",\n  "unpkg": "dist/v-code-diff.umd.js",\n  "files": [\n    "dist",\n    "src/lib"\n  ],\n  "types": "dist/index.d.ts",\n  "keywords": [\n    "vue",\n    "vue3",\n    "code",\n    "diff"\n  ],\n  "author": "Shimada666<649940882@qq.com>",\n  "license": "MIT",\n  "bugs": {\n    "url": "https://github.com/Shimada666/v-code-diff/issues"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/Shimada666/v-code-diff.git"\n  },\n  "peerDependencies": {\n    "@vue/composition-api": "^1.0.0-beta.1",\n    "vue": "^2.0.0 || >=3.0.0-rc.0"\n  },\n  "peerDependenciesMeta": {\n    "@vue/composition-api": {\n      "optional": true\n    }\n  },\n  "dependencies": {\n    "diff": "^5.0.0",\n    "diff2html": "^3.4.5",\n    "highlight.js": "^10.7.3",\n    "vue-demi": "latest"\n  },\n  "devDependencies": {\n    "@ant-design-vue/use": "^0.0.1-alpha.10",\n    "@commitlint/cli": "^8.2.0",\n    "@commitlint/config-conventional": "^8.2.0",\n    "@rollup/plugin-node-resolve": "^11.1.1",\n    "@types/diff": "^5.0.0",\n    "@types/node": "^14.14.41",\n    "@typescript-eslint/eslint-plugin": "^4.22.0",\n    "@typescript-eslint/parser": "^4.22.0",\n    "@vitejs/plugin-legacy": "^1.3.1",\n    "@vitejs/plugin-vue": "^1.1.5",\n    "@vitejs/plugin-vue-jsx": "^1.1.2",\n    "@vue/compiler-sfc": "^3.1.1",\n    "@vue/eslint-config-standard": "^4.0.0",\n    "@vue/eslint-config-typescript": "^4.0.0",\n    "@vueuse/core": "^4.11.2",\n    "ant-design-vue": "^2.1.2",\n    "body-parser": "^1.19.0",\n    "commitizen": "^4.2.3",\n    "conventional-changelog-cli": "^2.1.1",\n    "cross-env": "^7.0.3",\n    "dotenv": "^8.2.0",\n    "eslint": "^7.22.0",\n    "eslint-config-airbnb-base": "^14.2.1",\n    "eslint-config-prettier": "^8.1.0",\n    "eslint-plugin-import": "^2.22.1",\n    "eslint-plugin-prettier": "^3.4.0",\n    "eslint-plugin-vue": "^7.8.0",\n    "gh-pages": "^3.2.1",\n    "lint-staged": "^10.5.4",\n    "prettier": "^2.2.1",\n    "rollup": "^2.38.5",\n    "rollup-plugin-styles": "^3.14.1",\n    "rollup-plugin-terser": "^7.0.2",\n    "rollup-plugin-typescript2": "^0.29.0",\n    "rollup-plugin-vue": "^6.0.0",\n    "sass": "^1.35.1",\n    "stylelint": "^13.12.0",\n    "stylelint-config-prettier": "^8.0.2",\n    "stylelint-config-standard": "^21.0.0",\n    "stylelint-order": "^4.1.0",\n    "typescript": "^4.1.4",\n    "vite": "^2.1.0",\n    "vue": "^3.1.1",\n    "vue-eslint-parser": "^7.6.0",\n    "vue-tsc": "^0.0.8",\n    "yorkie": "^2.0.0"\n  },\n  "gitHooks": {\n    "pre-commit": "lint-staged",\n    "commit-msg": "commitlint -e"\n  },\n  "config": {\n    "commitizen": {\n      "path": "cz-conventional-changelog"\n    }\n  },\n  "lint-staged": {\n    "*.{js,vue,ts}": [\n      "eslint  --ext .ts,.vue,.tsx src",\n      "git add"\n    ]\n  }\n}\n'),j=o('\n{\n  "name": "vatex",\n  "description": "A plugin of vue latex(base on katex), support vue2 and vue3",\n  "version": "0.1.0",\n  "scripts": {\n    "dev": "vite",\n    "build": "npx rimraf dist && rollup --config rollup.config.js",\n    "serve": "vite preview",\n    "commit": "git-cz",\n    "gh-pages": "vite build --base=/VaTex/ && gh-pages -d ./pages"\n  },\n  "main": "dist/vatex.cjs.js",\n  "module": "dist/vatex.esm.js",\n  "unpkg": "dist/vatex.umd.js",\n  "files": [\n    "dist",\n    "src/lib"\n  ],\n  "types": "dist/index.d.ts",\n  "keywords": [\n    "Vue",\n    "KaTeX",\n    "LaTex"\n  ],\n  "author": "Shimada666<649940882@qq.com>",\n  "license": "MIT",\n  "bugs": {\n    "url": "https://github.com/Shimada666/vatex/issues"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/Shimada666/vatex.git"\n  },\n  "peerDependencies": {\n    "@vue/composition-api": "^1.0.0-rc.11",\n    "katex": "^0.13.11",\n    "vue": "^2.6.12 || ^3.1.1"\n  },\n  "peerDependenciesMeta": {\n    "@vue/composition-api": {\n      "optional": true\n    }\n  },\n  "dependencies": {\n    "vue-demi": "latest"\n  },\n  "devDependencies": {\n    "@ant-design-vue/use": "^0.0.1-alpha.10",\n    "@commitlint/cli": "^8.2.0",\n    "@commitlint/config-conventional": "^8.2.0",\n    "@rollup/plugin-node-resolve": "^11.1.1",\n    "@types/katex": "^0.11.0",\n    "@types/node": "^14.14.41",\n    "@typescript-eslint/eslint-plugin": "^4.22.0",\n    "@typescript-eslint/parser": "^4.22.0",\n    "@vitejs/plugin-legacy": "^1.3.1",\n    "@vitejs/plugin-vue": "^1.1.5",\n    "@vitejs/plugin-vue-jsx": "^1.1.2",\n    "@vue/compiler-sfc": "^3.0.11",\n    "@vue/eslint-config-standard": "^4.0.0",\n    "@vue/eslint-config-typescript": "^4.0.0",\n    "@vueuse/core": "^4.11.2",\n    "ant-design-vue": "^2.1.2",\n    "body-parser": "^1.19.0",\n    "commitizen": "^4.2.3",\n    "conventional-changelog-cli": "^2.1.1",\n    "cross-env": "^7.0.3",\n    "dotenv": "^8.2.0",\n    "eslint": "^7.22.0",\n    "eslint-config-airbnb-base": "^14.2.1",\n    "eslint-config-prettier": "^8.1.0",\n    "eslint-plugin-import": "^2.22.1",\n    "eslint-plugin-prettier": "^3.4.0",\n    "eslint-plugin-vue": "^7.8.0",\n    "gh-pages": "^3.2.1",\n    "katex": "^0.13.11",\n    "lint-staged": "^10.5.4",\n    "prettier": "^2.2.1",\n    "rollup": "^2.38.5",\n    "rollup-plugin-dts": "2.0.1",\n    "rollup-plugin-terser": "^7.0.2",\n    "rollup-plugin-typescript2": "^0.29.0",\n    "rollup-plugin-vue": "^6.0.0",\n    "sass": "^1.32.8",\n    "stylelint": "^13.12.0",\n    "stylelint-config-prettier": "^8.0.2",\n    "stylelint-config-standard": "^21.0.0",\n    "stylelint-order": "^4.1.0",\n    "typescript": "^4.1.4",\n    "vite": "^2.1.0",\n    "vue": "3.0.11",\n    "vue-eslint-parser": "^7.6.0",\n    "vue-tsc": "^0.0.8",\n    "yorkie": "^2.0.0"\n  },\n  "gitHooks": {\n    "pre-commit": "lint-staged",\n    "commit-msg": "commitlint -e"\n  },\n  "config": {\n    "commitizen": {\n      "path": "cz-conventional-changelog"\n    }\n  },\n  "lint-staged": {\n    "*.{js,vue,ts}": [\n      "eslint  --ext .ts,.vue,.tsx src",\n      "git add"\n    ]\n  }\n}\n');var N=i({name:"App",components:{CodeDiff:x},setup(){const e=o(j.value),n=o(k.value);localStorage.getItem("oldString")&&(e.value=localStorage.getItem("oldString")),localStorage.getItem("newString")&&(n.value=localStorage.getItem("newString"));const t=a({filename:"package.json",context:10,outputFormat:"side-by-side",diffStyle:"word",drawFileList:!0,renderNothingWhenEmpty:!1,isShowNoChange:!1,trim:!1});return l(e,(()=>localStorage.setItem("oldString",e.value))),l(n,(()=>localStorage.setItem("newString",n.value))),{formState:t,oldString:e,newString:n,renderStart:()=>{console.log("render start: "+(new Date).toLocaleString())},renderEnd:()=>{console.log("render end: "+(new Date).toLocaleString())},resetText:()=>{localStorage.removeItem("oldString"),localStorage.removeItem("newString"),e.value=j.value,n.value=k.value}}}});const F={style:{display:"flex","justify-content":"space-around"}},L=h("line-by-line"),_=h("side-by-side"),T=h("word"),C=h("char"),E=h("重置文本(reset text)");N.render=function(e,n,t,i,o,l){const r=s("a-input"),a=s("a-form-item"),h=s("a-input-number"),y=s("a-radio"),S=s("a-radio-group"),w=s("a-switch"),b=s("a-button"),x=s("a-form"),k=s("code-diff");return v(),d(f,null,[u("div",F,[c(u("textarea",{"onUpdate:modelValue":n[0]||(n[0]=n=>e.oldString=n),style:{width:"49%",height:"400px"}},null,512),[[p,e.oldString]]),c(u("textarea",{"onUpdate:modelValue":n[1]||(n[1]=n=>e.newString=n),style:{width:"49%",height:"400px"}},null,512),[[p,e.newString]])]),m(x,{style:{margin:"10px"},layout:"inline",model:e.formState},{default:g((()=>[m(a,{label:"文件名(filename)"},{default:g((()=>[m(r,{value:e.formState.filename,"onUpdate:value":n[2]||(n[2]=n=>e.formState.filename=n),placeholder:"请输入文件名"},null,8,["value"])])),_:1}),m(a,{label:"差异化范围(context)"},{default:g((()=>[m(h,{value:e.formState.context,"onUpdate:value":n[3]||(n[3]=n=>e.formState.context=n),min:0},null,8,["value"])])),_:1}),m(a,{label:"显示方式(outputFormat)"},{default:g((()=>[m(S,{value:e.formState.outputFormat,"onUpdate:value":n[4]||(n[4]=n=>e.formState.outputFormat=n)},{default:g((()=>[m(y,{value:"line-by-line"},{default:g((()=>[L])),_:1}),m(y,{value:"side-by-side"},{default:g((()=>[_])),_:1})])),_:1},8,["value"])])),_:1}),m(a,{label:"差异级别(diffStyle)"},{default:g((()=>[m(S,{value:e.formState.diffStyle,"onUpdate:value":n[5]||(n[5]=n=>e.formState.diffStyle=n)},{default:g((()=>[m(y,{value:"word"},{default:g((()=>[T])),_:1}),m(y,{value:"char"},{default:g((()=>[C])),_:1})])),_:1},8,["value"])])),_:1}),m(a,{label:"显示文件列表(drawFileList)"},{default:g((()=>[m(w,{checked:e.formState.drawFileList,"onUpdate:checked":n[6]||(n[6]=n=>e.formState.drawFileList=n)},null,8,["checked"])])),_:1}),m(a,{label:"内容为空时不显示(renderNothingWhenEmpty)"},{default:g((()=>[m(w,{checked:e.formState.renderNothingWhenEmpty,"onUpdate:checked":n[7]||(n[7]=n=>e.formState.renderNothingWhenEmpty=n)},null,8,["checked"])])),_:1}),m(a,{label:"内容无变化时显示源代码(isShowNoChange)"},{default:g((()=>[m(w,{checked:e.formState.isShowNoChange,"onUpdate:checked":n[8]||(n[8]=n=>e.formState.isShowNoChange=n)},null,8,["checked"])])),_:1}),m(a,{label:"移除字符串前后空白字符(trim)"},{default:g((()=>[m(w,{checked:e.formState.trim,"onUpdate:checked":n[9]||(n[9]=n=>e.formState.trim=n)},null,8,["checked"])])),_:1}),m(a,null,{default:g((()=>[m(b,{type:"link",onClick:e.resetText},{default:g((()=>[E])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),m(k,{"old-string":e.oldString,"new-string":e.newString,context:e.formState.context,"file-name":e.formState.filename,"diff-style":e.formState.diffStyle,"output-format":e.formState.outputFormat,"draw-file-list":e.formState.drawFileList,"render-nothing-when-empty":e.formState.renderNothingWhenEmpty,"is-show-no-change":e.formState.isShowNoChange,trim:e.formState.trim,onBeforeRender:e.renderStart,onAfterRender:e.renderEnd},null,8,["old-string","new-string","context","file-name","diff-style","output-format","draw-file-list","render-nothing-when-empty","is-show-no-change","trim","onBeforeRender","onAfterRender"])],64)};y(N).use(S).mount("#app");
