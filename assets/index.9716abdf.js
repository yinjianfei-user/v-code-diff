import{h as e,c as n,l as t,d as i,r as l,w as o,o as r,a,b as s,e as d,f as c,g as u,v as f,i as p,F as m,j as g,k as h,m as v,n as S,A as y}from"./vendor.538272a1.js";!function(e=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(t){const i=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[n]=e=>new Promise(((t,o)=>{const r=new URL(e,i);if(self[n].moduleMap[r])return t(self[n].moduleMap[r]);const a=new Blob([`import * as m from '${r}';`,`${n}.moduleMap['${r}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){o(new Error(`Failed to import: ${e}`)),l(s)},onload(){t(self[n].moduleMap[r]),l(s)}});document.head.appendChild(s)})),self[n].moduleMap={}}}("/v-code-diff/assets/");const w=t=>{let i=t.trim?t.oldString.trim():t.oldString,l=t.trim?t.newString.trim():t.newString;i=t.noDiffLineFeed?i.replace(/(\r\n)/g,"\n"):i,l=t.noDiffLineFeed?l.replace(/(\r\n)/g,"\n"):l;let o=t.context;t.isShowNoChange&&i===l&&(i="File Without Change\tOldString: ======================== \n"+i,l="File Without Change\tNewString: ======================== \n"+l,o=99999);const r=n(t.fileName,i,l,"","",{context:o});return e(r,{outputFormat:t.outputFormat,drawFileList:t.drawFileList,matching:"lines",diffStyle:t.diffStyle,renderNothingWhenEmpty:t.renderNothingWhenEmpty})};async function b(e,n,i){i.emit("before-render");const l=await async function(e){return new Promise((n=>{setTimeout((()=>{const t=e.querySelectorAll(".d2h-wrapper .d2h-code-line-ctn");n(Array.from(t))}),0)}))}(e),o=Array.from(l).map((e=>async function(e,n){return new Promise((i=>{setTimeout((()=>{if(n){const i=e.innerText;e.innerHTML=t.highlight(i,{language:n}).value}else t.highlightElement(e);i(!0)}),0)}))}(e,n.language)));await Promise.all(o),i.emit("after-render")}var x=i({name:"CodeDiff",props:{highlight:{type:Boolean,default:!0},oldString:{type:String,default:""},newString:{type:String,default:""},context:{type:Number,default:10},outputFormat:{type:String,default:"line-by-line"},drawFileList:{type:Boolean,default:!1},renderNothingWhenEmpty:{type:Boolean,default:!1},diffStyle:{type:String,default:"word"},fileName:{type:String,default:""},isShowNoChange:{type:Boolean,default:!1},trim:{type:Boolean,default:!1},language:{type:String,default:""},noDiffLineFeed:{type:Boolean,default:!1},syncScroll:{type:Boolean,default:!0}},emits:["before-render","after-render"],setup(e,n){const t=l(w(e)),i=function(e,n){let t;return function(){const i=this,l=arguments;clearTimeout(t),t=setTimeout((function(){e.apply(i,l)}),n)}}((async()=>{if(t.value=w(e),e.highlight){const i=document.createElement("div");i.innerHTML=t.value,await b(i,e,n),t.value=i.innerHTML}}),200);o(e,i,{deep:!0,immediate:!0});const{addSyncScroll:a,removeSyncScroll:s}=function(e){let n=document.createElement("div");function t(t){t.target===n&&document.querySelectorAll(e).forEach((function(e){n!==e&&(e.scrollTop=n.scrollTop,e.scrollLeft=n.scrollLeft)}))}function i(e){n=e.target}return{addSyncScroll:function(){document.querySelectorAll(e).forEach((function(e){e.addEventListener("mouseenter",i),e.addEventListener("scroll",t)}))},removeSyncScroll:function(){document.querySelectorAll(e).forEach((function(e){e.removeEventListener("mouseenter",i),e.removeEventListener("scroll",t)}))}}}(".d2h-file-side-diff");return o((()=>e.syncScroll),((e,n)=>{s(),e&&a()})),r((()=>{a()})),{html:t}},render(){return a("div",{innerHTML:this.html})}});let k=l('\n{\n  "name": "v-code-diff",\n  "description": "A diff plugin of vue, support vue2 and vue3",\n  "version": "0.0.1",\n  "scripts": {\n    "dev": "vite",\n    "build": "npx rimraf dist && rollup --config rollup.config.js",\n    "serve": "vite preview",\n    "commit": "git-cz",\n    "gh-pages": "vite build --base=/v-code-diff/ && gh-pages -d ./pages"\n  },\n  "main": "dist/v-code-diff.cjs.js",\n  "module": "dist/v-code-diff.esm.js",\n  "unpkg": "dist/v-code-diff.umd.js",\n  "files": [\n    "dist",\n    "src/lib"\n  ],\n  "types": "dist/index.d.ts",\n  "keywords": [\n    "vue",\n    "vue3",\n    "code",\n    "diff"\n  ],\n  "author": "Shimada666<649940882@qq.com>",\n  "license": "MIT",\n  "bugs": {\n    "url": "https://github.com/Shimada666/v-code-diff/issues"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/Shimada666/v-code-diff.git"\n  },\n  "peerDependencies": {\n    "@vue/composition-api": "^1.0.0-beta.1",\n    "vue": "^2.0.0 || >=3.0.0-rc.0"\n  },\n  "peerDependenciesMeta": {\n    "@vue/composition-api": {\n      "optional": true\n    }\n  },\n  "dependencies": {\n    "diff": "^5.0.0",\n    "diff2html": "^3.4.5",\n    "highlight.js": "^10.7.3",\n    "vue-demi": "latest"\n  },\n  "devDependencies": {\n    "@ant-design-vue/use": "^0.0.1-alpha.10",\n    "@commitlint/cli": "^8.2.0",\n    "@commitlint/config-conventional": "^8.2.0",\n    "@rollup/plugin-node-resolve": "^11.1.1",\n    "@types/diff": "^5.0.0",\n    "@types/node": "^14.14.41",\n    "@typescript-eslint/eslint-plugin": "^4.22.0",\n    "@typescript-eslint/parser": "^4.22.0",\n    "@vitejs/plugin-legacy": "^1.3.1",\n    "@vitejs/plugin-vue": "^1.1.5",\n    "@vitejs/plugin-vue-jsx": "^1.1.2",\n    "@vue/compiler-sfc": "^3.1.1",\n    "@vue/eslint-config-standard": "^4.0.0",\n    "@vue/eslint-config-typescript": "^4.0.0",\n    "@vueuse/core": "^4.11.2",\n    "ant-design-vue": "^2.1.2",\n    "body-parser": "^1.19.0",\n    "commitizen": "^4.2.3",\n    "conventional-changelog-cli": "^2.1.1",\n    "cross-env": "^7.0.3",\n    "dotenv": "^8.2.0",\n    "eslint": "^7.22.0",\n    "eslint-config-airbnb-base": "^14.2.1",\n    "eslint-config-prettier": "^8.1.0",\n    "eslint-plugin-import": "^2.22.1",\n    "eslint-plugin-prettier": "^3.4.0",\n    "eslint-plugin-vue": "^7.8.0",\n    "gh-pages": "^3.2.1",\n    "lint-staged": "^10.5.4",\n    "prettier": "^2.2.1",\n    "rollup": "^2.38.5",\n    "rollup-plugin-styles": "^3.14.1",\n    "rollup-plugin-terser": "^7.0.2",\n    "rollup-plugin-typescript2": "^0.29.0",\n    "rollup-plugin-vue": "^6.0.0",\n    "sass": "^1.35.1",\n    "stylelint": "^13.12.0",\n    "stylelint-config-prettier": "^8.0.2",\n    "stylelint-config-standard": "^21.0.0",\n    "stylelint-order": "^4.1.0",\n    "typescript": "^4.1.4",\n    "vite": "^2.1.0",\n    "vue": "^3.1.1",\n    "vue-eslint-parser": "^7.6.0",\n    "vue-tsc": "^0.0.8",\n    "yorkie": "^2.0.0"\n  },\n  "gitHooks": {\n    "pre-commit": "lint-staged",\n    "commit-msg": "commitlint -e"\n  },\n  "config": {\n    "commitizen": {\n      "path": "cz-conventional-changelog"\n    }\n  },\n  "lint-staged": {\n    "*.{js,vue,ts}": [\n      "eslint  --ext .ts,.vue,.tsx src",\n      "git add"\n    ]\n  }\n}\n'),L=l('\n{\n  "name": "vatex",\n  "description": "A plugin of vue latex(base on katex), support vue2 and vue3",\n  "version": "0.1.0",\n  "scripts": {\n    "dev": "vite",\n    "build": "npx rimraf dist && rollup --config rollup.config.js",\n    "serve": "vite preview",\n    "commit": "git-cz",\n    "gh-pages": "vite build --base=/VaTex/ && gh-pages -d ./pages"\n  },\n  "main": "dist/vatex.cjs.js",\n  "module": "dist/vatex.esm.js",\n  "unpkg": "dist/vatex.umd.js",\n  "files": [\n    "dist",\n    "src/lib"\n  ],\n  "types": "dist/index.d.ts",\n  "keywords": [\n    "Vue",\n    "KaTeX",\n    "LaTex"\n  ],\n  "author": "Shimada666<649940882@qq.com>",\n  "license": "MIT",\n  "bugs": {\n    "url": "https://github.com/Shimada666/vatex/issues"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/Shimada666/vatex.git"\n  },\n  "peerDependencies": {\n    "@vue/composition-api": "^1.0.0-rc.11",\n    "katex": "^0.13.11",\n    "vue": "^2.6.12 || ^3.1.1"\n  },\n  "peerDependenciesMeta": {\n    "@vue/composition-api": {\n      "optional": true\n    }\n  },\n  "dependencies": {\n    "vue-demi": "latest"\n  },\n  "devDependencies": {\n    "@ant-design-vue/use": "^0.0.1-alpha.10",\n    "@commitlint/cli": "^8.2.0",\n    "@commitlint/config-conventional": "^8.2.0",\n    "@rollup/plugin-node-resolve": "^11.1.1",\n    "@types/katex": "^0.11.0",\n    "@types/node": "^14.14.41",\n    "@typescript-eslint/eslint-plugin": "^4.22.0",\n    "@typescript-eslint/parser": "^4.22.0",\n    "@vitejs/plugin-legacy": "^1.3.1",\n    "@vitejs/plugin-vue": "^1.1.5",\n    "@vitejs/plugin-vue-jsx": "^1.1.2",\n    "@vue/compiler-sfc": "^3.0.11",\n    "@vue/eslint-config-standard": "^4.0.0",\n    "@vue/eslint-config-typescript": "^4.0.0",\n    "@vueuse/core": "^4.11.2",\n    "ant-design-vue": "^2.1.2",\n    "body-parser": "^1.19.0",\n    "commitizen": "^4.2.3",\n    "conventional-changelog-cli": "^2.1.1",\n    "cross-env": "^7.0.3",\n    "dotenv": "^8.2.0",\n    "eslint": "^7.22.0",\n    "eslint-config-airbnb-base": "^14.2.1",\n    "eslint-config-prettier": "^8.1.0",\n    "eslint-plugin-import": "^2.22.1",\n    "eslint-plugin-prettier": "^3.4.0",\n    "eslint-plugin-vue": "^7.8.0",\n    "gh-pages": "^3.2.1",\n    "katex": "^0.13.11",\n    "lint-staged": "^10.5.4",\n    "prettier": "^2.2.1",\n    "rollup": "^2.38.5",\n    "rollup-plugin-dts": "2.0.1",\n    "rollup-plugin-terser": "^7.0.2",\n    "rollup-plugin-typescript2": "^0.29.0",\n    "rollup-plugin-vue": "^6.0.0",\n    "sass": "^1.32.8",\n    "stylelint": "^13.12.0",\n    "stylelint-config-prettier": "^8.0.2",\n    "stylelint-config-standard": "^21.0.0",\n    "stylelint-order": "^4.1.0",\n    "typescript": "^4.1.4",\n    "vite": "^2.1.0",\n    "vue": "3.0.11",\n    "vue-eslint-parser": "^7.6.0",\n    "vue-tsc": "^0.0.8",\n    "yorkie": "^2.0.0"\n  },\n  "gitHooks": {\n    "pre-commit": "lint-staged",\n    "commit-msg": "commitlint -e"\n  },\n  "config": {\n    "commitizen": {\n      "path": "cz-conventional-changelog"\n    }\n  },\n  "lint-staged": {\n    "*.{js,vue,ts}": [\n      "eslint  --ext .ts,.vue,.tsx src",\n      "git add"\n    ]\n  }\n}\n');var j=i({name:"App",components:{CodeDiff:x},setup(){const e=l(L.value),n=l(k.value);localStorage.getItem("oldString")&&(e.value=localStorage.getItem("oldString")),localStorage.getItem("newString")&&(n.value=localStorage.getItem("newString"));const t=s({highlight:!1,filename:"package.json",context:10,outputFormat:"side-by-side",diffStyle:"word",drawFileList:!0,renderNothingWhenEmpty:!1,isShowNoChange:!1,trim:!1,noDiffLineFeed:!1,syncScroll:!0});return o(e,(()=>localStorage.setItem("oldString",e.value))),o(n,(()=>localStorage.setItem("newString",n.value))),{formState:t,oldString:e,newString:n,renderStart:()=>{console.log("render start: "+(new Date).toLocaleString())},renderEnd:()=>{console.log("render end: "+(new Date).toLocaleString())},resetText:()=>{localStorage.removeItem("oldString"),localStorage.removeItem("newString"),e.value=L.value,n.value=k.value},clearText:()=>{localStorage.removeItem("oldString"),localStorage.removeItem("newString"),e.value="",n.value=""}}}});const F={style:{display:"flex","justify-content":"space-around"}},_=v("line-by-line"),E=v("side-by-side"),T=v("word"),N=v("char"),U=v("重置文本(reset text)"),D=v("清空文本(clear text)");j.render=function(e,n,t,i,l,o){const r=g("a-switch"),a=g("a-form-item"),s=g("a-input"),v=g("a-input-number"),S=g("a-radio"),y=g("a-radio-group"),w=g("a-button"),b=g("a-form"),x=g("code-diff");return h(),d(m,null,[c("div",F,[u(c("textarea",{"onUpdate:modelValue":n[1]||(n[1]=n=>e.oldString=n),style:{width:"49%",height:"400px"}},null,512),[[f,e.oldString]]),u(c("textarea",{"onUpdate:modelValue":n[2]||(n[2]=n=>e.newString=n),style:{width:"49%",height:"400px"}},null,512),[[f,e.newString]])]),c(b,{style:{margin:"10px"},layout:"inline",model:e.formState},{default:p((()=>[c(a,{label:"是否高亮(highlight)"},{default:p((()=>[c(r,{checked:e.formState.highlight,"onUpdate:checked":n[3]||(n[3]=n=>e.formState.highlight=n)},null,8,["checked"])])),_:1}),c(a,{label:"文件名(filename)"},{default:p((()=>[c(s,{value:e.formState.filename,"onUpdate:value":n[4]||(n[4]=n=>e.formState.filename=n),placeholder:"请输入文件名"},null,8,["value"])])),_:1}),c(a,{label:"差异化范围(context)"},{default:p((()=>[c(v,{value:e.formState.context,"onUpdate:value":n[5]||(n[5]=n=>e.formState.context=n),min:0},null,8,["value"])])),_:1}),c(a,{label:"显示方式(outputFormat)"},{default:p((()=>[c(y,{value:e.formState.outputFormat,"onUpdate:value":n[6]||(n[6]=n=>e.formState.outputFormat=n)},{default:p((()=>[c(S,{value:"line-by-line"},{default:p((()=>[_])),_:1}),c(S,{value:"side-by-side"},{default:p((()=>[E])),_:1})])),_:1},8,["value"])])),_:1}),c(a,{label:"差异级别(diffStyle)"},{default:p((()=>[c(y,{value:e.formState.diffStyle,"onUpdate:value":n[7]||(n[7]=n=>e.formState.diffStyle=n)},{default:p((()=>[c(S,{value:"word"},{default:p((()=>[T])),_:1}),c(S,{value:"char"},{default:p((()=>[N])),_:1})])),_:1},8,["value"])])),_:1}),c(a,{label:"显示文件列表(drawFileList)"},{default:p((()=>[c(r,{checked:e.formState.drawFileList,"onUpdate:checked":n[8]||(n[8]=n=>e.formState.drawFileList=n)},null,8,["checked"])])),_:1}),c(a,{label:"内容为空时不显示(renderNothingWhenEmpty)"},{default:p((()=>[c(r,{checked:e.formState.renderNothingWhenEmpty,"onUpdate:checked":n[9]||(n[9]=n=>e.formState.renderNothingWhenEmpty=n)},null,8,["checked"])])),_:1}),c(a,{label:"内容无变化时显示源代码(isShowNoChange)"},{default:p((()=>[c(r,{checked:e.formState.isShowNoChange,"onUpdate:checked":n[10]||(n[10]=n=>e.formState.isShowNoChange=n)},null,8,["checked"])])),_:1}),c(a,{label:"移除字符串前后空白字符(trim)"},{default:p((()=>[c(r,{checked:e.formState.trim,"onUpdate:checked":n[11]||(n[11]=n=>e.formState.trim=n)},null,8,["checked"])])),_:1}),c(a,{label:"不 diff 换行符(noDiffLineFeed)"},{default:p((()=>[c(r,{checked:e.formState.noDiffLineFeed,"onUpdate:checked":n[12]||(n[12]=n=>e.formState.noDiffLineFeed=n)},null,8,["checked"])])),_:1}),c(a,{label:"同步滚动(syncScroll)"},{default:p((()=>[c(r,{checked:e.formState.syncScroll,"onUpdate:checked":n[13]||(n[13]=n=>e.formState.syncScroll=n)},null,8,["checked"])])),_:1}),c(a,null,{default:p((()=>[c(w,{type:"link",onClick:e.resetText},{default:p((()=>[U])),_:1},8,["onClick"])])),_:1}),c(a,null,{default:p((()=>[c(w,{type:"link",onClick:e.clearText},{default:p((()=>[D])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),c(x,{highlight:e.formState.highlight,"old-string":e.oldString,"new-string":e.newString,context:e.formState.context,"file-name":e.formState.filename,"diff-style":e.formState.diffStyle,"output-format":e.formState.outputFormat,"draw-file-list":e.formState.drawFileList,"render-nothing-when-empty":e.formState.renderNothingWhenEmpty,"is-show-no-change":e.formState.isShowNoChange,trim:e.formState.trim,"no-diff-line-feed":e.formState.noDiffLineFeed,"sync-scroll":e.formState.syncScroll,onBeforeRender:e.renderStart,onAfterRender:e.renderEnd},null,8,["highlight","old-string","new-string","context","file-name","diff-style","output-format","draw-file-list","render-nothing-when-empty","is-show-no-change","trim","no-diff-line-feed","sync-scroll","onBeforeRender","onAfterRender"])],64)};S(j).use(y).mount("#app");