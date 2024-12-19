(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{5576:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(294)}])},2065:(e,t,r)=>{"use strict";r.d(t,{OJ:()=>d,cy:()=>u});var a=r(4848),n=r(4335),o=r(6540),s=r(1409),l=r(998),i=r.n(l),c=r(7836);i().config(),n.A.interceptors.response.use(e=>e,e=>(404===e.response.status?s.oR.error("Request failed with status code 404"):401===e.response.status?s.oR.error("Invalid credentials"):409===e.response.status?s.oR.error("User already exists"):s.oR.error("An unexpected error occurred"),Promise.reject(e)));let u=(0,o.createContext)(),d=e=>{let{children:t}=e,[r,l]=(0,o.useState)(localStorage.getItem("token")),i=async(e,t)=>{try{let{data:r}=await n.A.post("".concat(c.env.SERVER_URL,"/api/auth/login"),{email:e,password:t});localStorage.setItem("token",r.data.token),l({email:e}),s.oR.success("Login successful")}catch(e){throw s.oR.error(e.response.data.message),Error(e.response.data.message)}},d=async(e,t)=>{try{let{data:r}=await n.A.post("".concat(c.env.SERVER_URL,"/api/auth/register"),{email:e,password:t});localStorage.setItem("token",r.data.token),l({email:e}),s.oR.success("Registration successful")}catch(e){throw s.oR.error(e.response.data.message),Error(e.response.data.message)}};return(0,a.jsx)(u.Provider,{value:{user:r,login:i,register:d,logout:()=>{localStorage.removeItem("token"),l(null),s.oR.success("Logged out successfully")}},children:t})}},294:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>V});var a=r(4848),n=r(2064),o=r(1501),s=r(2689),l=r(2413),i=r(992),c=r(1402),u=r(6540),d=r(4164),p=r(4136),m=r(5659),h=r(4899),x=r(7306),y=r(2706),g=r(2907),v=r(186),b=r(172),A=r(8301),f=r(8413),w=r(1609);function k(e){return(0,w.Ay)("MuiLink",e)}let R=(0,f.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var C=r(3539);let S=e=>{let{theme:t,ownerState:r}=e,a=r.color,n=(0,C.Yn)(t,"palette.".concat(a),!1)||r.color,o=(0,C.Yn)(t,"palette.".concat(a,"Channel"));return"vars"in t&&o?"rgba(".concat(o," / 0.4)"):(0,p.X4)(n,.4)},j={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},L=e=>{let{classes:t,component:r,focusVisible:a,underline:n}=e,o={root:["root","underline".concat((0,x.A)(n)),"button"===r&&"button",a&&"focusVisible"]};return(0,m.A)(o,k,t)},_=(0,y.Ay)(l.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t["underline".concat((0,x.A)(r.underline))],"button"===r.component&&t.button]}})((0,v.A)(e=>{let{theme:t}=e;return{variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:e=>{let{underline:t,ownerState:r}=e;return"always"===t&&"inherit"!==r.color},style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(t.palette).filter((0,b.A)()).map(e=>{let[r]=e;return{props:{underline:"always",color:r},style:{"--Link-underlineColor":t.vars?"rgba(".concat(t.vars.palette[r].mainChannel," / 0.4)"):(0,p.X4)(t.palette[r].main,.4)}}}),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":t.vars?"rgba(".concat(t.vars.palette.text.primaryChannel," / 0.4)"):(0,p.X4)(t.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":t.vars?"rgba(".concat(t.vars.palette.text.secondaryChannel," / 0.4)"):(0,p.X4)(t.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(t.vars||t).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(R.focusVisible)]:{outline:"auto"}}}]}})),E=u.forwardRef(function(e,t){let r=(0,A.b)({props:e,name:"MuiLink"}),n=(0,g.A)(),{className:o,color:s="primary",component:l="a",onBlur:i,onFocus:c,TypographyClasses:p,underline:m="always",variant:x="inherit",sx:y,...v}=r,[b,f]=u.useState(!1),w={...r,color:s,component:l,focusVisible:b,underline:m,variant:x},k=L(w);return(0,a.jsx)(_,{color:s,className:(0,d.A)(k.root,o),classes:p,component:l,onBlur:e=>{(0,h.A)(e.target)||f(!1),i&&i(e)},onFocus:e=>{(0,h.A)(e.target)&&f(!0),c&&c(e)},ref:t,ownerState:w,variant:x,...v,sx:[...void 0===j[s]?[{color:s}]:[],...Array.isArray(y)?y:[y]],style:{...v.style,..."always"===m&&"inherit"!==s&&!j[s]&&{"--Link-underlineColor":S({theme:n,ownerState:w})}}})});var D=r(2026),z=r(7371),P=r(6715),I=r(2065);let N=(0,D.A)({palette:{mode:"dark"}}),W=()=>{let{login:e}=(0,u.useContext)(I.cy),t=(0,P.useRouter)(),[r,d]=(0,u.useState)(""),[p,m]=(0,u.useState)(""),[h,x]=(0,u.useState)(""),[y,g]=(0,u.useState)(""),[v,b]=(0,u.useState)(!1),A=e=>{/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(e)?x(""):x("Invalid email format")},f=e=>{e.length<8?g("Password must be at least 8 characters"):g("")},w=async a=>{if(a.preventDefault(),A(r),f(p),!h&&!y)try{await e(r,p),t.push("/")}catch(e){console.error(e)}};return(0,a.jsx)(z.A,{theme:N,children:(0,a.jsx)(n.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,a.jsx)(o.A,{sx:{maxWidth:400,p:2,borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},children:(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{variant:"h4",component:"h1",gutterBottom:!0,sx:{mb:2,mt:2},children:"Blog App Login"}),(0,a.jsxs)("form",{onSubmit:w,noValidate:!0,children:[(0,a.jsx)(i.A,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,onChange:e=>{d(e.target.value),A(e.target.value)},sx:{mb:1},error:!!h,helperText:h,size:"small"}),(0,a.jsx)(i.A,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:v?"text":"password",id:"password",autoComplete:"current-password",onChange:e=>{m(e.target.value),f(e.target.value)},sx:{mb:1},error:!!y,helperText:y,size:"small"}),(0,a.jsx)(c.A,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"small",children:"Login"})]}),(0,a.jsx)(E,{href:"/register",passHref:!0,children:(0,a.jsx)(c.A,{fullWidth:!0,variant:"text",sx:{mt:1,mb:2},size:"small",children:"Don't have an account? Register"})})]})})})})},V=()=>(0,a.jsx)(I.OJ,{children:(0,a.jsx)(W,{})})},2016:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[200,59,371,636,593,792],()=>t(5576)),_N_E=e.O()}]);