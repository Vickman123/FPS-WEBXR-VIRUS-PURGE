(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="174",wl=0,Na=1,Al=2,Wo=1,Rl=2,hn=3,An=0,Ut=1,ot=2,bn=0,fi=1,Oa=2,Fa=3,Ba=4,Cl=5,Gn=100,Pl=101,Dl=102,Ll=103,Il=104,Ul=200,Nl=201,Ol=202,Fl=203,Sr=204,yr=205,Bl=206,zl=207,Hl=208,Gl=209,kl=210,Vl=211,Wl=212,Xl=213,ql=214,Er=0,Tr=1,br=2,_i=3,wr=4,Ar=5,Rr=6,Cr=7,la=0,Yl=1,$l=2,wn=0,Xo=1,Kl=2,jl=3,Zl=4,Jl=5,Ql=6,ec=7,qo=300,xi=301,vi=302,Pr=303,Dr=304,Ns=306,Hi=1e3,Vn=1001,Lr=1002,Jt=1003,tc=1004,Zi=1005,It=1006,Vs=1007,Wn=1008,mn=1009,Yo=1010,$o=1011,Gi=1012,ca=1013,Xn=1014,un=1015,qi=1016,ha=1017,ua=1018,Mi=1020,Ko=35902,jo=1021,Zo=1022,Zt=1023,Jo=1024,Qo=1025,pi=1026,Si=1027,el=1028,da=1029,tl=1030,fa=1031,pa=1033,Ts=33776,bs=33777,ws=33778,As=33779,Ir=35840,Ur=35841,Nr=35842,Or=35843,Fr=36196,Br=37492,zr=37496,Hr=37808,Gr=37809,kr=37810,Vr=37811,Wr=37812,Xr=37813,qr=37814,Yr=37815,$r=37816,Kr=37817,jr=37818,Zr=37819,Jr=37820,Qr=37821,Rs=36492,ea=36494,ta=36495,nl=36283,na=36284,ia=36285,sa=36286,nc=3200,ic=3201,ma=0,sc=1,Tn="",Wt="srgb",yi="srgb-linear",Ps="linear",Je="srgb",Zn=7680,za=519,rc=512,ac=513,oc=514,il=515,lc=516,cc=517,hc=518,uc=519,Ha=35044,ga=35048,Ga="300 es",dn=2e3,Ds=2001;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ka=1234567;const mi=Math.PI/180,ki=180/Math.PI;function Ri(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[s&255]+bt[s>>8&255]+bt[s>>16&255]+bt[s>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Fe(s,e,t){return Math.max(e,Math.min(t,s))}function _a(s,e){return(s%e+e)%e}function dc(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function fc(s,e,t){return s!==e?(t-s)/(e-s):0}function zi(s,e,t){return(1-t)*s+t*e}function pc(s,e,t,n){return zi(s,e,1-Math.exp(-t*n))}function mc(s,e=1){return e-Math.abs(_a(s,e*2)-e)}function gc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function _c(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function xc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function vc(s,e){return s+Math.random()*(e-s)}function Mc(s){return s*(.5-Math.random())}function Sc(s){s!==void 0&&(ka=s);let e=ka+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yc(s){return s*mi}function Ec(s){return s*ki}function Tc(s){return(s&s-1)===0&&s!==0}function bc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ac(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ui(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ei={DEG2RAD:mi,RAD2DEG:ki,generateUUID:Ri,clamp:Fe,euclideanModulo:_a,mapLinear:dc,inverseLerp:fc,lerp:zi,damp:pc,pingpong:mc,smoothstep:gc,smootherstep:_c,randInt:xc,randFloat:vc,randFloatSpread:Mc,seededRandom:Sc,degToRad:yc,radToDeg:Ec,isPowerOfTwo:Tc,ceilPowerOfTwo:bc,floorPowerOfTwo:wc,setQuaternionFromProperEuler:Ac,normalize:Rt,denormalize:ui};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,i,r,a,o,l,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],d=i[6],E=i[1],T=i[4],S=i[7],C=i[2],A=i[5],R=i[8];return r[0]=a*_+o*E+l*C,r[3]=a*p+o*T+l*A,r[6]=a*d+o*S+l*R,r[1]=c*_+h*E+u*C,r[4]=c*p+h*T+u*A,r[7]=c*d+h*S+u*R,r[2]=f*_+m*E+g*C,r[5]=f*p+m*T+g*A,r[8]=f*d+m*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=t*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ws.makeScale(e,t)),this}rotate(e){return this.premultiply(Ws.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ws.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ws=new Pe;function sl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ls(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rc(){const s=Ls("canvas");return s.style.display="block",s}const Va={};function Bn(s){s in Va||(Va[s]=!0,console.warn(s))}function Cc(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Pc(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Dc(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wa=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xa=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lc(){const s={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(i.r=pn(i.r),i.g=pn(i.g),i.b=pn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Tn?Ps:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[yi]:{primaries:e,whitePoint:n,transfer:Ps,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),s}const Xe=Lc();function pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Jn;class Ic{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=Ls("canvas")),Jn.width=e.width,Jn.height=e.height;const n=Jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jn}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=pn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uc=0;class xa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Xs(i[a].image)):r.push(Xs(i[a]))}else r=Xs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ic.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nc=0;class Pt extends Ai{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Vn,i=Vn,r=It,a=Wn,o=Zt,l=mn,c=Pt.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Ri(),this.name="",this.source=new xa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=qo;Pt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,S=(m+1)/2,C=(d+1)/2,A=(h+f)/4,R=(u+_)/4,L=(g+p)/4;return T>S&&T>C?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=A/n,r=R/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=L/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=R/r,i=L/r),this.set(n,i,r,t),this}let E=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oc extends Ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new xa(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Oc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rl extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fc extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-o;const d=l*f+c*m+h*g+u*_,E=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const C=Math.sqrt(T),A=Math.atan2(C,d*E);p=Math.sin(p*A)/C,o=Math.sin(o*A)/C}const S=o*E;if(l=l*p+f*S,c=c*p+m*S,h=h*p+g*S,u=u*p+_*S,p===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-o*m,e[t+2]=c*g+h*m+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qs.copy(this).projectOnVector(e),this.sub(qs)}reflect(e){return this.sub(qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new w,qa=new en;class fn{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(r,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),Qi.subVectors(this.max,Di),Qn.subVectors(e.a,Di),ei.subVectors(e.b,Di),ti.subVectors(e.c,Di),xn.subVectors(ei,Qn),vn.subVectors(ti,ei),Dn.subVectors(Qn,ti);let t=[0,-xn.z,xn.y,0,-vn.z,vn.y,0,-Dn.z,Dn.y,xn.z,0,-xn.x,vn.z,0,-vn.x,Dn.z,0,-Dn.x,-xn.y,xn.x,0,-vn.y,vn.x,0,-Dn.y,Dn.x,0];return!Ys(t,Qn,ei,ti,Qi)||(t=[1,0,0,0,1,0,0,0,1],!Ys(t,Qn,ei,ti,Qi))?!1:(es.crossVectors(xn,vn),t=[es.x,es.y,es.z],Ys(t,Qn,ei,ti,Qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new w,new w,new w,new w,new w,new w,new w,new w],$t=new w,Ji=new fn,Qn=new w,ei=new w,ti=new w,xn=new w,vn=new w,Dn=new w,Di=new w,Qi=new w,es=new w,Ln=new w;function Ys(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ln.fromArray(s,r);const o=i.x*Math.abs(Ln.x)+i.y*Math.abs(Ln.y)+i.z*Math.abs(Ln.z),l=e.dot(Ln),c=t.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Bc=new fn,Li=new w,$s=new w;class Os{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Li,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add($s)),this.expandByPoint(Li.copy(e.center).sub($s))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new w,Ks=new w,ts=new w,Mn=new w,js=new w,ns=new w,Zs=new w;class va{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ks.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(Ks);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ts),o=Mn.dot(this.direction),l=-Mn.dot(ts),c=Mn.lengthSq(),h=Math.abs(1-a*a);let u,f,m,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ks).addScaledVector(ts,f),m}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,i,r){js.subVectors(t,e),ns.subVectors(n,e),Zs.crossVectors(js,ns);let a=this.direction.dot(Zs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mn.subVectors(this.origin,e);const l=o*this.direction.dot(ns.crossVectors(Mn,ns));if(l<0)return null;const c=o*this.direction.dot(js.cross(Mn));if(c<0||l+c>a)return null;const h=-o*Mn.dot(Zs);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,i,r,a,o,l,c,h,u,f,m,g,_,p){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,m,g,_,p)}set(e,t,n,i,r,a,o,l,c,h,u,f,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ni.setFromMatrixColumn(e,0).length(),r=1/ni.setFromMatrixColumn(e,1).length(),a=1/ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,m=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zc,e,Hc)}lookAt(e,t,n){const i=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Sn.crossVectors(n,Ot),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Sn.crossVectors(n,Ot)),Sn.normalize(),is.crossVectors(Ot,Sn),i[0]=Sn.x,i[4]=is.x,i[8]=Ot.x,i[1]=Sn.y,i[5]=is.y,i[9]=Ot.y,i[2]=Sn.z,i[6]=is.z,i[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],E=n[3],T=n[7],S=n[11],C=n[15],A=i[0],R=i[4],L=i[8],y=i[12],v=i[1],D=i[5],H=i[9],z=i[13],W=i[2],K=i[6],V=i[10],Z=i[14],k=i[3],re=i[7],ue=i[11],ve=i[15];return r[0]=a*A+o*v+l*W+c*k,r[4]=a*R+o*D+l*K+c*re,r[8]=a*L+o*H+l*V+c*ue,r[12]=a*y+o*z+l*Z+c*ve,r[1]=h*A+u*v+f*W+m*k,r[5]=h*R+u*D+f*K+m*re,r[9]=h*L+u*H+f*V+m*ue,r[13]=h*y+u*z+f*Z+m*ve,r[2]=g*A+_*v+p*W+d*k,r[6]=g*R+_*D+p*K+d*re,r[10]=g*L+_*H+p*V+d*ue,r[14]=g*y+_*z+p*Z+d*ve,r[3]=E*A+T*v+S*W+C*k,r[7]=E*R+T*D+S*K+C*re,r[11]=E*L+T*H+S*V+C*ue,r[15]=E*y+T*z+S*Z+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*m-n*l*m)+_*(+t*l*m-t*c*f+r*a*f-i*a*m+i*c*h-r*l*h)+p*(+t*c*u-t*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+d*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],E=u*p*c-_*f*c+_*l*m-o*p*m-u*l*d+o*f*d,T=g*f*c-h*p*c-g*l*m+a*p*m+h*l*d-a*f*d,S=h*_*c-g*u*c+g*o*m-a*_*m-h*o*d+a*u*d,C=g*u*l-h*_*l-g*o*f+a*_*f+h*o*p-a*u*p,A=t*E+n*T+i*S+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=E*R,e[1]=(_*f*r-u*p*r-_*i*m+n*p*m+u*i*d-n*f*d)*R,e[2]=(o*p*r-_*l*r+_*i*c-n*p*c-o*i*d+n*l*d)*R,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*m-n*l*m)*R,e[4]=T*R,e[5]=(h*p*r-g*f*r+g*i*m-t*p*m-h*i*d+t*f*d)*R,e[6]=(g*l*r-a*p*r-g*i*c+t*p*c+a*i*d-t*l*d)*R,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*m+t*l*m)*R,e[8]=S*R,e[9]=(g*u*r-h*_*r-g*n*m+t*_*m+h*n*d-t*u*d)*R,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*d+t*o*d)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*m-t*o*m)*R,e[12]=C*R,e[13]=(h*_*i-g*u*i+g*n*f-t*_*f-h*n*p+t*u*p)*R,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*p-t*o*p)*R,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,g=r*u,_=a*h,p=a*u,d=o*u,E=l*c,T=l*h,S=l*u,C=n.x,A=n.y,R=n.z;return i[0]=(1-(_+d))*C,i[1]=(m+S)*C,i[2]=(g-T)*C,i[3]=0,i[4]=(m-S)*A,i[5]=(1-(f+d))*A,i[6]=(p+E)*A,i[7]=0,i[8]=(g+T)*R,i[9]=(p-E)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ni.set(i[0],i[1],i[2]).length();const a=ni.set(i[4],i[5],i[6]).length(),o=ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Kt.copy(this);const c=1/r,h=1/a,u=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=u,Kt.elements[9]*=u,Kt.elements[10]*=u,t.setFromRotationMatrix(Kt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=dn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(o===dn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ds)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=dn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*c,m=(n+i)*h;let g,_;if(o===dn)g=(a+r)*u,_=-2*u;else if(o===Ds)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ni=new w,Kt=new st,zc=new w(0,0,0),Hc=new w(1,1,1),Sn=new w,is=new w,Ot=new w,Ya=new st,$a=new en;class ut{constructor(e=0,t=0,n=0,i=ut.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ya.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ya,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $a.setFromEuler(this),this.setFromQuaternion($a,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ut.DEFAULT_ORDER="XYZ";class Ma{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gc=0;const Ka=new w,ii=new en,on=new st,ss=new w,Ii=new w,kc=new w,Vc=new en,ja=new w(1,0,0),Za=new w(0,1,0),Ja=new w(0,0,1),Qa={type:"added"},Wc={type:"removed"},si={type:"childadded",child:null},Js={type:"childremoved",child:null};class _t extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new w,t=new ut,n=new en,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new Pe}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(ja,e)}rotateY(e){return this.rotateOnAxis(Za,e)}rotateZ(e){return this.rotateOnAxis(Ja,e)}translateOnAxis(e,t){return Ka.copy(e).applyQuaternion(this.quaternion),this.position.add(Ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ja,e)}translateY(e){return this.translateOnAxis(Za,e)}translateZ(e){return this.translateOnAxis(Ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ss.copy(e):ss.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ii,ss,this.up):on.lookAt(ss,Ii,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),ii.setFromRotationMatrix(on),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qa),si.child=e,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wc),Js.child=e,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qa),si.child=e,this.dispatchEvent(si),si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,e,kc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,Vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new w(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new w,ln=new w,Qs=new w,cn=new w,ri=new w,ai=new w,eo=new w,er=new w,tr=new w,nr=new w,ir=new Qe,sr=new Qe,rr=new Qe;class Xt{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){jt.subVectors(i,t),ln.subVectors(n,t),Qs.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(ln),l=jt.dot(Qs),c=ln.dot(ln),h=ln.dot(Qs),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ir.setScalar(0),sr.setScalar(0),rr.setScalar(0),ir.fromBufferAttribute(e,t),sr.fromBufferAttribute(e,n),rr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ir,r.x),a.addScaledVector(sr,r.y),a.addScaledVector(rr,r.z),a}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),ln.subVectors(e,t),jt.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),jt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ri.subVectors(i,n),ai.subVectors(r,n),er.subVectors(e,n);const l=ri.dot(er),c=ai.dot(er);if(l<=0&&c<=0)return t.copy(n);tr.subVectors(e,i);const h=ri.dot(tr),u=ai.dot(tr);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ri,a);nr.subVectors(e,r);const m=ri.dot(nr),g=ai.dot(nr);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ai,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return eo.subVectors(r,i),o=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(eo,o);const d=1/(p+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(ri,a).addScaledVector(ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function ar(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=_a(e,1),t=Fe(t,0,1),n=Fe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ar(a,r,e+1/3),this.g=ar(a,r,e),this.b=ar(a,r,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=al[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Xe.fromWorkingColorSpace(wt.copy(this),e),Math.round(Fe(wt.r*255,0,255))*65536+Math.round(Fe(wt.g*255,0,255))*256+Math.round(Fe(wt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(wt.copy(this),t);const n=wt.r,i=wt.g,r=wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Wt){Xe.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,i=wt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(rs);const n=zi(yn.h,rs.h,t),i=zi(yn.s,rs.s,t),r=zi(yn.l,rs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ne;Ne.NAMES=al;let Xc=0;class Yn extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=fi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=yr,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==yr&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==za&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oe extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ut,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new w,as=new Ie;let qc=0;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}}class ol extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ll extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yc=0;const Vt=new st,or=new _t,oi=new w,Ft=new fn,Ui=new fn,St=new w;class pt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sl(e)?ll:ol)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return or.lookAt(e),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Ft.min,Ui.min),Ft.expandByPoint(St),St.addVectors(Ft.max,Ui.max),Ft.expandByPoint(St)):(Ft.expandByPoint(Ui.min),Ft.expandByPoint(Ui.max))}Ft.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(oi.fromBufferAttribute(e,c),St.add(oi)),i=Math.max(i,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new w,l[L]=new w;const c=new w,h=new w,u=new w,f=new Ie,m=new Ie,g=new Ie,_=new w,p=new w;function d(L,y,v){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,L),m.fromBufferAttribute(r,y),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),m.sub(f),g.sub(f);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(D),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(D),o[L].add(_),o[y].add(_),o[v].add(_),l[L].add(p),l[y].add(p),l[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,y=E.length;L<y;++L){const v=E[L],D=v.start,H=v.count;for(let z=D,W=D+H;z<W;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new w,S=new w,C=new w,A=new w;function R(L){C.fromBufferAttribute(i,L),A.copy(C);const y=o[L];T.copy(y),T.sub(C.multiplyScalar(C.dot(y))).normalize(),S.crossVectors(A,y);const D=S.dot(l[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,D)}for(let L=0,y=E.length;L<y;++L){const v=E[L],D=v.start,H=v.count;for(let z=D,W=D+H;z<W;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new zt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const to=new st,In=new va,os=new Os,no=new w,ls=new w,cs=new w,hs=new w,lr=new w,us=new w,io=new w,ds=new w;class J extends _t{constructor(e=new pt,t=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(lr.fromBufferAttribute(u,e),a?us.addScaledVector(lr,h):us.addScaledVector(lr.sub(t),h))}t.add(us)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(r),In.copy(e.ray).recast(e.near),!(os.containsPoint(In.origin)===!1&&(In.intersectSphere(os,no)===null||In.origin.distanceToSquared(no)>(e.far-e.near)**2))&&(to.copy(r).invert(),In.copy(e.ray).applyMatrix4(to),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],E=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,C=T;S<C;S+=3){const A=o.getX(S),R=o.getX(S+1),L=o.getX(S+2);i=fs(this,d,e,n,c,h,u,A,R,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const E=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);i=fs(this,a,e,n,c,h,u,E,T,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],E=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,C=T;S<C;S+=3){const A=S,R=S+1,L=S+2;i=fs(this,d,e,n,c,h,u,A,R,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const E=p,T=p+1,S=p+2;i=fs(this,a,e,n,c,h,u,E,T,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function $c(s,e,t,n,i,r,a,o){let l;if(e.side===Ut?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===An,o),l===null)return null;ds.copy(o),ds.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ds);return c<t.near||c>t.far?null:{distance:c,point:ds.clone(),object:s}}function fs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ls),s.getVertexPosition(l,cs),s.getVertexPosition(c,hs);const h=$c(s,e,t,n,ls,cs,hs,io);if(h){const u=new w;Xt.getBarycoord(io,ls,cs,hs,u),i&&(h.uv=Xt.getInterpolatedAttribute(i,o,l,c,u,new Ie)),r&&(h.uv1=Xt.getInterpolatedAttribute(r,o,l,c,u,new Ie)),a&&(h.normal=Xt.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new w,materialIndex:0};Xt.getNormal(ls,cs,hs,f.normal),h.face=f,h.barycoord=u}return h}class Ye extends pt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2));function g(_,p,d,E,T,S,C,A,R,L,y){const v=S/R,D=C/L,H=S/2,z=C/2,W=A/2,K=R+1,V=L+1;let Z=0,k=0;const re=new w;for(let ue=0;ue<V;ue++){const ve=ue*D-z;for(let Ue=0;Ue<K;Ue++){const et=Ue*v-H;re[_]=et*E,re[p]=ve*T,re[d]=W,c.push(re.x,re.y,re.z),re[_]=0,re[p]=0,re[d]=A>0?1:-1,h.push(re.x,re.y,re.z),u.push(Ue/R),u.push(1-ue/L),Z+=1}}for(let ue=0;ue<L;ue++)for(let ve=0;ve<R;ve++){const Ue=f+ve+K*ue,et=f+ve+K*(ue+1),q=f+(ve+1)+K*(ue+1),te=f+(ve+1)+K*ue;l.push(Ue,et,te),l.push(et,q,te),k+=6}o.addGroup(m,k,y),m+=k,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ye(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ct(s){const e={};for(let t=0;t<s.length;t++){const n=Ti(s[t]);for(const i in n)e[i]=n[i]}return e}function Kc(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function cl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const jc={clone:Ti,merge:Ct};var Zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zc,this.fragmentShader=Jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hl extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new w,so=new Ie,ro=new Ie;class Bt extends hl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,so,ro),t.subVectors(ro,so)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const li=-90,ci=1;class Qc extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bt(li,ci,e,t);i.layers=this.layers,this.add(i);const r=new Bt(li,ci,e,t);r.layers=this.layers,this.add(r);const a=new Bt(li,ci,e,t);a.layers=this.layers,this.add(a);const o=new Bt(li,ci,e,t);o.layers=this.layers,this.add(o);const l=new Bt(li,ci,e,t);l.layers=this.layers,this.add(l);const c=new Bt(li,ci,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ul extends Pt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:xi,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eh extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ul(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ye(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:bn});r.uniforms.tEquirect.value=t;const a=new J(i,r),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=It),new Qc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class gt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const th={type:"move"};class cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(th)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Sa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new Sa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nh extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ut,this.environmentIntensity=1,this.environmentRotation=new ut,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hr=new w,ih=new w,sh=new Pe;class zn{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=hr.subVectors(n,t).cross(ih.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(hr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sh.getNormalMatrix(e),i=this.coplanarPoint(hr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Os,ps=new w;class ya{constructor(e=new zn,t=new zn,n=new zn,i=new zn,r=new zn,a=new zn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],d=i[12],E=i[13],T=i[14],S=i[15];if(n[0].setComponents(l-r,f-c,p-m,S-d).normalize(),n[1].setComponents(l+r,f+c,p+m,S+d).normalize(),n[2].setComponents(l+a,f+h,p+g,S+E).normalize(),n[3].setComponents(l-a,f-h,p-g,S-E).normalize(),n[4].setComponents(l-o,f-u,p-_,S-T).normalize(),t===dn)n[5].setComponents(l+o,f+u,p+_,S+T).normalize();else if(t===Ds)n[5].setComponents(o,u,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ps.x=i.normal.x>0?e.max.x:e.min.x,ps.y=i.normal.y>0?e.max.y:e.min.y,ps.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qt extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Is=new w,Us=new w,ao=new st,Ni=new va,ms=new Os,ur=new w,oo=new w;class Yi extends _t{constructor(e=new pt,t=new Qt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Is.fromBufferAttribute(t,i-1),Us.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Is.distanceTo(Us);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(i),ms.radius+=r,e.ray.intersectsSphere(ms)===!1)return;ao.copy(i).invert(),Ni.copy(e.ray).applyMatrix4(ao);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=c){const d=h.getX(_),E=h.getX(_+1),T=gs(this,e,Ni,l,d,E,_);T&&t.push(T)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(m),d=gs(this,e,Ni,l,_,p,g-1);d&&t.push(d)}}else{const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=c){const d=gs(this,e,Ni,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){const _=gs(this,e,Ni,l,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function gs(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Is.fromBufferAttribute(o,i),Us.fromBufferAttribute(o,r),t.distanceSqToSegment(Is,Us,ur,oo)>n)return;ur.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ur);if(!(c<e.near||c>e.far))return{distance:c,point:oo.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const lo=new w,co=new w;class bi extends Yi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)lo.fromBufferAttribute(t,i),co.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+lo.distanceTo(co);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gn extends Pt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dl extends Pt{constructor(e,t,n,i,r,a,o,l,c,h=pi){if(h!==pi&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pi&&(n=Xn),n===void 0&&h===Si&&(n=Mi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fs extends pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new w,h=new Ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const m=n+u/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Dt extends pt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],m=[];let g=0;const _=[],p=n/2;let d=0;E(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(m,2));function E(){const S=new w,C=new w;let A=0;const R=(t-e)/n;for(let L=0;L<=r;L++){const y=[],v=L/r,D=v*(t-e)+e;for(let H=0;H<=i;H++){const z=H/i,W=z*l+o,K=Math.sin(W),V=Math.cos(W);C.x=D*K,C.y=-v*n+p,C.z=D*V,u.push(C.x,C.y,C.z),S.set(K,R,V).normalize(),f.push(S.x,S.y,S.z),m.push(z,1-v),y.push(g++)}_.push(y)}for(let L=0;L<i;L++)for(let y=0;y<r;y++){const v=_[y][L],D=_[y+1][L],H=_[y+1][L+1],z=_[y][L+1];(e>0||y!==0)&&(h.push(v,D,z),A+=3),(t>0||y!==r-1)&&(h.push(D,H,z),A+=3)}c.addGroup(d,A,0),d+=A}function T(S){const C=g,A=new Ie,R=new w;let L=0;const y=S===!0?e:t,v=S===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,p*v,0),f.push(0,v,0),m.push(.5,.5),g++;const D=g;for(let H=0;H<=i;H++){const W=H/i*l+o,K=Math.cos(W),V=Math.sin(W);R.x=y*V,R.y=p*v,R.z=y*K,u.push(R.x,R.y,R.z),f.push(0,v,0),A.x=K*.5+.5,A.y=V*.5*v+.5,m.push(A.x,A.y),g++}for(let H=0;H<i;H++){const z=C+H,W=D+H;S===!0?h.push(W,W+1,z):h.push(W+1,W,z),L+=3}c.addGroup(d,L,S===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ea extends Dt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ea(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $i extends pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const T=new w,S=new w,C=new w;for(let A=0;A<t.length;A+=3)m(t[A+0],T),m(t[A+1],S),m(t[A+2],C),l(T,S,C,E)}function l(E,T,S,C){const A=C+1,R=[];for(let L=0;L<=A;L++){R[L]=[];const y=E.clone().lerp(S,L/A),v=T.clone().lerp(S,L/A),D=A-L;for(let H=0;H<=D;H++)H===0&&L===A?R[L][H]=y:R[L][H]=y.clone().lerp(v,H/D)}for(let L=0;L<A;L++)for(let y=0;y<2*(A-L)-1;y++){const v=Math.floor(y/2);y%2===0?(f(R[L][v+1]),f(R[L+1][v]),f(R[L][v])):(f(R[L][v+1]),f(R[L+1][v+1]),f(R[L+1][v]))}}function c(E){const T=new w;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(E),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function h(){const E=new w;for(let T=0;T<r.length;T+=3){E.x=r[T+0],E.y=r[T+1],E.z=r[T+2];const S=p(E)/2/Math.PI+.5,C=d(E)/Math.PI+.5;a.push(S,1-C)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){const T=a[E+0],S=a[E+2],C=a[E+4],A=Math.max(T,S,C),R=Math.min(T,S,C);A>.9&&R<.1&&(T<.2&&(a[E+0]+=1),S<.2&&(a[E+2]+=1),C<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function m(E,T){const S=E*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function g(){const E=new w,T=new w,S=new w,C=new w,A=new Ie,R=new Ie,L=new Ie;for(let y=0,v=0;y<r.length;y+=9,v+=6){E.set(r[y+0],r[y+1],r[y+2]),T.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),A.set(a[v+0],a[v+1]),R.set(a[v+2],a[v+3]),L.set(a[v+4],a[v+5]),C.copy(E).add(T).add(S).divideScalar(3);const D=p(C);_(A,v+0,E,D),_(R,v+2,T,D),_(L,v+4,S,D)}}function _(E,T,S,C){C<0&&E.x===1&&(a[T]=E.x-1),S.x===0&&S.z===0&&(a[T]=C/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.vertices,e.indices,e.radius,e.details)}}class Ta extends $i{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ta(e.radius,e.detail)}}const _s=new w,xs=new w,dr=new w,vs=new Xt;class Vi extends pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(mi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:d}=vs;if(_.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),vs.getNormal(dr),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const T=(E+1)%3,S=u[E],C=u[T],A=vs[h[E]],R=vs[h[T]],L=`${S}_${C}`,y=`${C}_${S}`;y in f&&f[y]?(dr.dot(f[y].normal)<=r&&(m.push(A.x,A.y,A.z),m.push(R.x,R.y,R.z)),f[y]=null):L in f||(f[L]={index0:c[E],index1:c[T],normal:dr.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:p}=f[g];_s.fromBufferAttribute(o,_),xs.fromBufferAttribute(o,p),m.push(_s.x,_s.y,_s.z),m.push(xs.x,xs.y,xs.z)}this.setAttribute("position",new Ze(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Bs extends $i{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bs(e.radius,e.detail)}}class $n extends $i{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $n(e.radius,e.detail)}}class xt extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){const E=d*f-a;for(let T=0;T<c;T++){const S=T*u-r;g.push(S,-E,0),_.push(0,0,1),p.push(T/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const T=E+c*d,S=E+c*(d+1),C=E+1+c*(d+1),A=E+1+c*d;m.push(T,S,A),m.push(S,C,A)}this.setIndex(m),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wi extends pt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,m=new w,g=new Ie;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const d=r+p/n*a;m.x=u*Math.cos(d),m.y=u*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const p=_*(n+1);for(let d=0;d<n;d++){const E=d+p,T=E,S=E+n+1,C=E+n+2,A=E+1;o.push(T,S,A),o.push(S,C,A)}}this.setIndex(o),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nn extends pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new w,f=new w,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const E=[],T=d/n;let S=0;d===0&&a===0?S=.5/t:d===n&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const A=C/t;u.x=-e*Math.cos(i+A*r)*Math.sin(a+T*o),u.y=e*Math.cos(a+T*o),u.z=e*Math.sin(i+A*r)*Math.sin(a+T*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(A+S,1-T),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){const T=h[d][E+1],S=h[d][E],C=h[d+1][E],A=h[d+1][E+1];(d!==0||a>0)&&m.push(T,S,A),(d!==n-1||l<Math.PI)&&m.push(S,C,A)}this.setIndex(m),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _n extends pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new w,u=new w,f=new w;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,d=(i+1)*(m-1)+g,E=(i+1)*m+g;a.push(_,p,E),a.push(p,d,E)}this.setIndex(a),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rh extends pt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new w,r=new w;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,m=u.count;for(let g=f,_=f+m;g<_;g+=3)for(let p=0;p<3;p++){const d=o.getX(g+p),E=o.getX(g+(p+1)%3);i.fromBufferAttribute(a,d),r.fromBufferAttribute(a,E),ho(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),ho(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function ho(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class tt extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ut,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nn extends Yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ut,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ah extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oh extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ba extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class lh extends ba{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const fr=new st,uo=new w,fo=new w;class fl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uo.setFromMatrixPosition(e.matrixWorld),t.position.copy(uo),fo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fo),t.updateMatrixWorld(),fr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const po=new st,Oi=new w,pr=new w;class ch extends fl{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oi),pr.copy(n.position),pr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pr),n.updateMatrixWorld(),i.makeTranslation(-Oi.x,-Oi.y,-Oi.z),po.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po)}}class Xi extends ba{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ch}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pl extends hl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hh extends fl{constructor(){super(new pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uh extends ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new hh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dh extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class fh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=mo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function mo(){return performance.now()}const go=new st;class Kn{constructor(e,t,n=0,i=1/0){this.ray=new va(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ma,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return go.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(go),this}intersectObject(e,t=!0,n=[]){return ra(e,this,n,t),n.sort(_o),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ra(e[i],this,n,t);return n.sort(_o),n}}function _o(s,e){return s.distance-e.distance}function ra(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)ra(r[a],e,t,!0)}}function xo(s,e,t,n){const i=ph(n);switch(t){case jo:return s*e;case Jo:return s*e;case Qo:return s*e*2;case el:return s*e/i.components*i.byteLength;case da:return s*e/i.components*i.byteLength;case tl:return s*e*2/i.components*i.byteLength;case fa:return s*e*2/i.components*i.byteLength;case Zo:return s*e*3/i.components*i.byteLength;case Zt:return s*e*4/i.components*i.byteLength;case pa:return s*e*4/i.components*i.byteLength;case Ts:case bs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ws:case As:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ur:case Or:return Math.max(s,16)*Math.max(e,8)/4;case Ir:case Nr:return Math.max(s,8)*Math.max(e,8)/2;case Fr:case Br:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case kr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Wr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xr:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case qr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yr:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $r:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Kr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case jr:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Zr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qr:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rs:case ea:case ta:return Math.ceil(s/4)*Math.ceil(e/4)*16;case nl:case na:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ia:case sa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ph(s){switch(s){case mn:case Yo:return{byteLength:1,components:1};case Gi:case $o:case qi:return{byteLength:2,components:1};case ha:case ua:return{byteLength:2,components:4};case Xn:case ca:case un:return{byteLength:4,components:1};case Ko:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ml(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function mh(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_h=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Th=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ch=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ph=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ou=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ru=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Du=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$u=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ed=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,td=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ld=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const md=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ed=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Td=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ld=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ud=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Od=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:gh,alphahash_pars_fragment:_h,alphamap_fragment:xh,alphamap_pars_fragment:vh,alphatest_fragment:Mh,alphatest_pars_fragment:Sh,aomap_fragment:yh,aomap_pars_fragment:Eh,batching_pars_vertex:Th,batching_vertex:bh,begin_vertex:wh,beginnormal_vertex:Ah,bsdfs:Rh,iridescence_fragment:Ch,bumpmap_pars_fragment:Ph,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Ih,clipping_planes_vertex:Uh,color_fragment:Nh,color_pars_fragment:Oh,color_pars_vertex:Fh,color_vertex:Bh,common:zh,cube_uv_reflection_fragment:Hh,defaultnormal_vertex:Gh,displacementmap_pars_vertex:kh,displacementmap_vertex:Vh,emissivemap_fragment:Wh,emissivemap_pars_fragment:Xh,colorspace_fragment:qh,colorspace_pars_fragment:Yh,envmap_fragment:$h,envmap_common_pars_fragment:Kh,envmap_pars_fragment:jh,envmap_pars_vertex:Zh,envmap_physical_pars_fragment:lu,envmap_vertex:Jh,fog_vertex:Qh,fog_pars_vertex:eu,fog_fragment:tu,fog_pars_fragment:nu,gradientmap_pars_fragment:iu,lightmap_pars_fragment:su,lights_lambert_fragment:ru,lights_lambert_pars_fragment:au,lights_pars_begin:ou,lights_toon_fragment:cu,lights_toon_pars_fragment:hu,lights_phong_fragment:uu,lights_phong_pars_fragment:du,lights_physical_fragment:fu,lights_physical_pars_fragment:pu,lights_fragment_begin:mu,lights_fragment_maps:gu,lights_fragment_end:_u,logdepthbuf_fragment:xu,logdepthbuf_pars_fragment:vu,logdepthbuf_pars_vertex:Mu,logdepthbuf_vertex:Su,map_fragment:yu,map_pars_fragment:Eu,map_particle_fragment:Tu,map_particle_pars_fragment:bu,metalnessmap_fragment:wu,metalnessmap_pars_fragment:Au,morphinstance_vertex:Ru,morphcolor_vertex:Cu,morphnormal_vertex:Pu,morphtarget_pars_vertex:Du,morphtarget_vertex:Lu,normal_fragment_begin:Iu,normal_fragment_maps:Uu,normal_pars_fragment:Nu,normal_pars_vertex:Ou,normal_vertex:Fu,normalmap_pars_fragment:Bu,clearcoat_normal_fragment_begin:zu,clearcoat_normal_fragment_maps:Hu,clearcoat_pars_fragment:Gu,iridescence_pars_fragment:ku,opaque_fragment:Vu,packing:Wu,premultiplied_alpha_fragment:Xu,project_vertex:qu,dithering_fragment:Yu,dithering_pars_fragment:$u,roughnessmap_fragment:Ku,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:Zu,shadowmap_pars_vertex:Ju,shadowmap_vertex:Qu,shadowmask_pars_fragment:ed,skinbase_vertex:td,skinning_pars_vertex:nd,skinning_vertex:id,skinnormal_vertex:sd,specularmap_fragment:rd,specularmap_pars_fragment:ad,tonemapping_fragment:od,tonemapping_pars_fragment:ld,transmission_fragment:cd,transmission_pars_fragment:hd,uv_pars_fragment:ud,uv_pars_vertex:dd,uv_vertex:fd,worldpos_vertex:pd,background_vert:md,background_frag:gd,backgroundCube_vert:_d,backgroundCube_frag:xd,cube_vert:vd,cube_frag:Md,depth_vert:Sd,depth_frag:yd,distanceRGBA_vert:Ed,distanceRGBA_frag:Td,equirect_vert:bd,equirect_frag:wd,linedashed_vert:Ad,linedashed_frag:Rd,meshbasic_vert:Cd,meshbasic_frag:Pd,meshlambert_vert:Dd,meshlambert_frag:Ld,meshmatcap_vert:Id,meshmatcap_frag:Ud,meshnormal_vert:Nd,meshnormal_frag:Od,meshphong_vert:Fd,meshphong_frag:Bd,meshphysical_vert:zd,meshphysical_frag:Hd,meshtoon_vert:Gd,meshtoon_frag:kd,points_vert:Vd,points_frag:Wd,shadow_vert:Xd,shadow_frag:qd,sprite_vert:Yd,sprite_frag:$d},ne={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},tn={basic:{uniforms:Ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Ct([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Ct([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Ct([ne.points,ne.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Ct([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Ct([ne.common,ne.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Ct([ne.sprite,ne.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Ct([ne.common,ne.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Ct([ne.lights,ne.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};tn.physical={uniforms:Ct([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Ms={r:0,b:0,g:0},On=new ut,Kd=new st;function jd(s,e,t,n,i,r,a){const o=new Ne(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function _(T){let S=!1;const C=g(T);C===null?d(o,l):C&&C.isColor&&(d(C,1),S=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(T,S){const C=g(S);C&&(C.isCubeTexture||C.mapping===Ns)?(h===void 0&&(h=new J(new Ye(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Ti(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),On.copy(S.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kd.makeRotationFromEuler(On)),h.material.toneMapped=Xe.getTransfer(C.colorSpace)!==Je,(u!==C||f!==C.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,m=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new J(new xt(2,2),new Rn({name:"BackgroundMaterial",uniforms:Ti(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(C.colorSpace)!==Je,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,m=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,S){T.getRGB(Ms,cl(s)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,S,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:_,addToRenderList:p,dispose:E}}function Zd(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(v,D,H,z,W){let K=!1;const V=u(z,H,D);r!==V&&(r=V,c(r.object)),K=m(v,z,H,W),K&&g(v,z,H,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(v,D,H,z),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,D,H){const z=H.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let K=W[D.id];K===void 0&&(K={},W[D.id]=K);let V=K[z];return V===void 0&&(V=f(l()),K[z]=V),V}function f(v){const D=[],H=[],z=[];for(let W=0;W<t;W++)D[W]=0,H[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:z,object:v,attributes:{},index:null}}function m(v,D,H,z){const W=r.attributes,K=D.attributes;let V=0;const Z=H.getAttributes();for(const k in Z)if(Z[k].location>=0){const ue=W[k];let ve=K[k];if(ve===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(ve=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(ve=v.instanceColor)),ue===void 0||ue.attribute!==ve||ve&&ue.data!==ve.data)return!0;V++}return r.attributesNum!==V||r.index!==z}function g(v,D,H,z){const W={},K=D.attributes;let V=0;const Z=H.getAttributes();for(const k in Z)if(Z[k].location>=0){let ue=K[k];ue===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor));const ve={};ve.attribute=ue,ue&&ue.data&&(ve.data=ue.data),W[k]=ve,V++}r.attributes=W,r.attributesNum=V,r.index=z}function _(){const v=r.newAttributes;for(let D=0,H=v.length;D<H;D++)v[D]=0}function p(v){d(v,0)}function d(v,D){const H=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;H[v]=1,z[v]===0&&(s.enableVertexAttribArray(v),z[v]=1),W[v]!==D&&(s.vertexAttribDivisor(v,D),W[v]=D)}function E(){const v=r.newAttributes,D=r.enabledAttributes;for(let H=0,z=D.length;H<z;H++)D[H]!==v[H]&&(s.disableVertexAttribArray(H),D[H]=0)}function T(v,D,H,z,W,K,V){V===!0?s.vertexAttribIPointer(v,D,H,W,K):s.vertexAttribPointer(v,D,H,z,W,K)}function S(v,D,H,z){_();const W=z.attributes,K=H.getAttributes(),V=D.defaultAttributeValues;for(const Z in K){const k=K[Z];if(k.location>=0){let re=W[Z];if(re===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),re!==void 0){const ue=re.normalized,ve=re.itemSize,Ue=e.get(re);if(Ue===void 0)continue;const et=Ue.buffer,q=Ue.type,te=Ue.bytesPerElement,ge=q===s.INT||q===s.UNSIGNED_INT||re.gpuType===ca;if(re.isInterleavedBufferAttribute){const ae=re.data,Ee=ae.stride,qe=re.offset;if(ae.isInstancedInterleavedBuffer){for(let be=0;be<k.locationSize;be++)d(k.location+be,ae.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let be=0;be<k.locationSize;be++)p(k.location+be);s.bindBuffer(s.ARRAY_BUFFER,et);for(let be=0;be<k.locationSize;be++)T(k.location+be,ve/k.locationSize,q,ue,Ee*te,(qe+ve/k.locationSize*be)*te,ge)}else{if(re.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)d(k.location+ae,re.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ae=0;ae<k.locationSize;ae++)p(k.location+ae);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ae=0;ae<k.locationSize;ae++)T(k.location+ae,ve/k.locationSize,q,ue,ve*te,ve/k.locationSize*ae*te,ge)}}else if(V!==void 0){const ue=V[Z];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(k.location,ue);break;case 3:s.vertexAttrib3fv(k.location,ue);break;case 4:s.vertexAttrib4fv(k.location,ue);break;default:s.vertexAttrib1fv(k.location,ue)}}}}E()}function C(){L();for(const v in n){const D=n[v];for(const H in D){const z=D[H];for(const W in z)h(z[W].object),delete z[W];delete D[H]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const D=n[v.id];for(const H in D){const z=D[H];for(const W in z)h(z[W].object),delete z[W];delete D[H]}delete n[v.id]}function R(v){for(const D in n){const H=n[D];if(H[v.id]===void 0)continue;const z=H[v.id];for(const W in z)h(z[W].object),delete z[W];delete H[v.id]}}function L(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function Jd(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,n,1)}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qd(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==Zt&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==mn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==un&&!L)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:C,maxSamples:A}}function ef(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new zn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const E=r?0:n,T=E*4;let S=d.clippingState||null;l.value=S,S=h(g,f,T,m);for(let C=0;C!==T;++C)S[C]=t[C];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,S=m;T!==_;++T,S+=4)a.copy(u[T]).applyMatrix4(E,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function tf(s){let e=new WeakMap;function t(a,o){return o===Pr?a.mapping=xi:o===Dr&&(a.mapping=vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Pr||o===Dr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new eh(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const di=4,vo=[.125,.215,.35,.446,.526,.582],kn=20,mr=new pl,Mo=new Ne;let gr=null,_r=0,xr=0,vr=!1;const Hn=(1+Math.sqrt(5))/2,hi=1/Hn,So=[new w(-Hn,hi,0),new w(Hn,hi,0),new w(-hi,0,Hn),new w(hi,0,Hn),new w(0,Hn,-hi),new w(0,Hn,hi),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],nf=new w;class yo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=nf}=r;gr=this._renderer.getRenderTarget(),_r=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=To(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gr,_r,xr),this._renderer.xr.enabled=vr,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gr=this._renderer.getRenderTarget(),_r=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:qi,format:Zt,colorSpace:yi,depthBuffer:!1},i=Eo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sf(r)),this._blurMaterial=rf(r,e,t)}return i}_compileMaterial(e){const t=new J(this._lodPlanes[0],e);this._renderer.compile(t,mr)}_sceneToCubeUV(e,t,n,i,r){const l=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(Mo),u.toneMapping=wn,u.autoClear=!1;const g=new Oe({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),_=new J(new Ye,g);let p=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,p=!0):(g.color.copy(Mo),p=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):T===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const S=this._cubeSize;Ss(i,T*S,E>2?S:0,S,S),u.setRenderTarget(i),p&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=m,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xi||e.mapping===vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=To());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new J(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ss(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,mr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=So[(i-r-1)%So.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new J(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*kn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):kn;p>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kn}`);const d=[];let E=0;for(let R=0;R<kn;++R){const L=R/_,y=Math.exp(-L*L/2);d.push(y),R===0?E+=y:R<p&&(E+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const S=this._sizeLods[i],C=3*S*(i>T-di?i-T+di:0),A=4*(this._cubeSize-S);Ss(t,C,A,3*S,2*S),l.setRenderTarget(t),l.render(u,mr)}}function sf(s){const e=[],t=[],n=[];let i=s;const r=s-di+1+vo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-di?l=vo[a-s+di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,E=new Float32Array(_*g*m),T=new Float32Array(p*g*m),S=new Float32Array(d*g*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,L=A>2?0:-1,y=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];E.set(y,_*g*A),T.set(f,p*g*A);const v=[A,A,A,A,A,A];S.set(v,d*g*A)}const C=new pt;C.setAttribute("position",new zt(E,_)),C.setAttribute("uv",new zt(T,p)),C.setAttribute("faceIndex",new zt(S,d)),e.push(C),i>di&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eo(s,e,t){const n=new qn(s,e,t);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function rf(s,e,t){const n=new Float32Array(kn),i=new w(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function To(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function bo(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function wa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function af(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pr||l===Dr,h=l===xi||l===vi;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new yo(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&i(m)?(t===null&&(t=new yo(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function of(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Bn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lf(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)e.update(f[m],s.ARRAY_BUFFER)}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let T=0,S=E.length;T<S;T+=3){const C=E[T+0],A=E[T+1],R=E[T+2];f.push(C,A,A,R,R,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let T=0,S=E.length/3-1;T<S;T+=3){const C=T+0,A=T+1,R=T+2;f.push(C,A,A,R,R,C)}}else return;const p=new(sl(f)?ll:ol)(f,1);p.version=_;const d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function cf(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){s.drawElements(n,m,r,f*a),t.update(m,n,1)}function c(f,m,g){g!==0&&(s.drawElementsInstanced(n,m,r,f*a,g),t.update(m,n,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,n,1)}function u(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/a,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=m[E]*_[E];t.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function uf(s,e,t){const n=new WeakMap,i=new Qe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let v=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var m=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let C=o.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*A*4*u),L=new rl(R,C,A,u);L.type=un,L.needsUpdate=!0;const y=S*4;for(let D=0;D<u;D++){const H=d[D],z=E[D],W=T[D],K=C*A*4*D;for(let V=0;V<H.count;V++){const Z=V*y;g===!0&&(i.fromBufferAttribute(H,V),R[K+Z+0]=i.x,R[K+Z+1]=i.y,R[K+Z+2]=i.z,R[K+Z+3]=0),_===!0&&(i.fromBufferAttribute(z,V),R[K+Z+4]=i.x,R[K+Z+5]=i.y,R[K+Z+6]=i.z,R[K+Z+7]=0),p===!0&&(i.fromBufferAttribute(W,V),R[K+Z+8]=i.x,R[K+Z+9]=i.y,R[K+Z+10]=i.z,R[K+Z+11]=W.itemSize===4?i.w:1)}}f={count:u,texture:L,size:new Ie(C,A)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function df(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const gl=new Pt,wo=new dl(1,1),_l=new rl,xl=new Fc,vl=new ul,Ao=[],Ro=[],Co=new Float32Array(16),Po=new Float32Array(9),Do=new Float32Array(4);function Ci(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ao[i];if(r===void 0&&(r=new Float32Array(i),Ao[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Mt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function zs(s,e){let t=Ro[e];t===void 0&&(t=new Int32Array(e),Ro[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ff(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2fv(this.addr,e),Mt(t,e)}}function mf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;s.uniform3fv(this.addr,e),Mt(t,e)}}function gf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4fv(this.addr,e),Mt(t,e)}}function _f(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;Do.set(n),s.uniformMatrix2fv(this.addr,!1,Do),Mt(t,n)}}function xf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;Po.set(n),s.uniformMatrix3fv(this.addr,!1,Po),Mt(t,n)}}function vf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;Co.set(n),s.uniformMatrix4fv(this.addr,!1,Co),Mt(t,n)}}function Mf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Sf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2iv(this.addr,e),Mt(t,e)}}function yf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3iv(this.addr,e),Mt(t,e)}}function Ef(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4iv(this.addr,e),Mt(t,e)}}function Tf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2uiv(this.addr,e),Mt(t,e)}}function wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3uiv(this.addr,e),Mt(t,e)}}function Af(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4uiv(this.addr,e),Mt(t,e)}}function Rf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wo.compareFunction=il,r=wo):r=gl,t.setTexture2D(e||r,i)}function Cf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xl,i)}function Pf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vl,i)}function Df(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_l,i)}function Lf(s){switch(s){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return xf;case 35676:return vf;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return yf;case 35669:case 35673:return Ef;case 5125:return Tf;case 36294:return bf;case 36295:return wf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Df}}function If(s,e){s.uniform1fv(this.addr,e)}function Uf(s,e){const t=Ci(e,this.size,2);s.uniform2fv(this.addr,t)}function Nf(s,e){const t=Ci(e,this.size,3);s.uniform3fv(this.addr,t)}function Of(s,e){const t=Ci(e,this.size,4);s.uniform4fv(this.addr,t)}function Ff(s,e){const t=Ci(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Bf(s,e){const t=Ci(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function zf(s,e){const t=Ci(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Hf(s,e){s.uniform1iv(this.addr,e)}function Gf(s,e){s.uniform2iv(this.addr,e)}function kf(s,e){s.uniform3iv(this.addr,e)}function Vf(s,e){s.uniform4iv(this.addr,e)}function Wf(s,e){s.uniform1uiv(this.addr,e)}function Xf(s,e){s.uniform2uiv(this.addr,e)}function qf(s,e){s.uniform3uiv(this.addr,e)}function Yf(s,e){s.uniform4uiv(this.addr,e)}function $f(s,e,t){const n=this.cache,i=e.length,r=zs(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||gl,r[a])}function Kf(s,e,t){const n=this.cache,i=e.length,r=zs(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xl,r[a])}function jf(s,e,t){const n=this.cache,i=e.length,r=zs(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||vl,r[a])}function Zf(s,e,t){const n=this.cache,i=e.length,r=zs(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||_l,r[a])}function Jf(s){switch(s){case 5126:return If;case 35664:return Uf;case 35665:return Nf;case 35666:return Of;case 35674:return Ff;case 35675:return Bf;case 35676:return zf;case 5124:case 35670:return Hf;case 35667:case 35671:return Gf;case 35668:case 35672:return kf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return Xf;case 36295:return qf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Zf}}class Qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lf(t.type)}}class ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jf(t.type)}}class tp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Mr=/(\w+)(\])?(\[|\.)?/g;function Lo(s,e){s.seq.push(e),s.map[e.id]=e}function np(s,e,t){const n=s.name,i=n.length;for(Mr.lastIndex=0;;){const r=Mr.exec(n),a=Mr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Lo(t,c===void 0?new Qf(o,s,e):new ep(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new tp(o),Lo(t,u)),t=u}}}class Cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);np(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Io(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const ip=37297;let sp=0;function rp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Uo=new Pe;function ap(s){Xe._getMatrix(Uo,Xe.workingColorSpace,s);const e=`mat3( ${Uo.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(s)){case Ps:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function No(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+rp(s.getShaderSource(e),a)}else return i}function op(s,e){const t=ap(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lp(s,e){let t;switch(e){case Xo:t="Linear";break;case Kl:t="Reinhard";break;case jl:t="Cineon";break;case Zl:t="ACESFilmic";break;case Ql:t="AgX";break;case ec:t="Neutral";break;case Jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ys=new w;function cp(){Xe.getLuminanceCoefficients(ys);const s=ys.x.toFixed(4),e=ys.y.toFixed(4),t=ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)}function up(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Fi(s){return s!==""}function Oo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(s){return s.replace(fp,mp)}const pp=new Map;function mp(s,e){let t=Le[e];if(t===void 0){const n=pp.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return aa(t)}const gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bo(s){return s.replace(gp,_p)}function _p(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zo(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function vp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xi:case vi:e="ENVMAP_TYPE_CUBE";break;case Ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Sp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case la:e="ENVMAP_BLENDING_MULTIPLY";break;case Yl:e="ENVMAP_BLENDING_MIX";break;case $l:e="ENVMAP_BLENDING_ADD";break}return e}function yp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ep(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xp(t),c=vp(t),h=Mp(t),u=Sp(t),f=yp(t),m=hp(t),g=up(r),_=i.createProgram();let p,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fi).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fi).join(`
`),d.length>0&&(d+=`
`)):(p=[zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),d=[zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Le.tonemapping_pars_fragment:"",t.toneMapping!==wn?lp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,op("linearToOutputTexel",t.outputColorSpace),cp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fi).join(`
`)),a=aa(a),a=Oo(a,t),a=Fo(a,t),o=aa(o),o=Oo(o,t),o=Fo(o,t),a=Bo(a),o=Bo(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=E+p+a,S=E+d+o,C=Io(i,i.VERTEX_SHADER,T),A=Io(i,i.FRAGMENT_SHADER,S);i.attachShader(_,C),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(D){if(s.debug.checkShaderErrors){const H=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(C).trim(),W=i.getShaderInfoLog(A).trim();let K=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,A);else{const Z=No(i,C,"vertex"),k=No(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+Z+`
`+k)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||W==="")&&(V=!1);V&&(D.diagnostics={runnable:K,programLog:H,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:d}})}i.deleteShader(C),i.deleteShader(A),L=new Cs(i,_),y=dp(i,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,ip)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let Tp=0;class bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wp(e),t.set(e,n)),n}}class wp{constructor(e){this.id=Tp++,this.code=e,this.usedTimes=0}}function Ap(s,e,t,n,i,r,a){const o=new Ma,l=new bp,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,v,D,H,z){const W=H.fog,K=z.geometry,V=y.isMeshStandardMaterial?H.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),k=Z&&Z.mapping===Ns?Z.image.height:null,re=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ve=ue!==void 0?ue.length:0;let Ue=0;K.morphAttributes.position!==void 0&&(Ue=1),K.morphAttributes.normal!==void 0&&(Ue=2),K.morphAttributes.color!==void 0&&(Ue=3);let et,q,te,ge;if(re){const je=tn[re];et=je.vertexShader,q=je.fragmentShader}else et=y.vertexShader,q=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),ge=l.getFragmentShaderID(y);const ae=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),qe=z.isInstancedMesh===!0,be=z.isBatchedMesh===!0,ht=!!y.map,at=!!y.matcap,Be=!!Z,P=!!y.aoMap,Ht=!!y.lightMap,ze=!!y.bumpMap,He=!!y.normalMap,Me=!!y.displacementMap,it=!!y.emissiveMap,xe=!!y.metalnessMap,b=!!y.roughnessMap,x=y.anisotropy>0,O=y.clearcoat>0,Y=y.dispersion>0,j=y.iridescence>0,X=y.sheen>0,_e=y.transmission>0,oe=x&&!!y.anisotropyMap,de=O&&!!y.clearcoatMap,ke=O&&!!y.clearcoatNormalMap,ee=O&&!!y.clearcoatRoughnessMap,fe=j&&!!y.iridescenceMap,Te=j&&!!y.iridescenceThicknessMap,we=X&&!!y.sheenColorMap,pe=X&&!!y.sheenRoughnessMap,Ge=!!y.specularMap,De=!!y.specularColorMap,nt=!!y.specularIntensityMap,I=_e&&!!y.transmissionMap,ie=_e&&!!y.thicknessMap,G=!!y.gradientMap,$=!!y.alphaMap,ce=y.alphaTest>0,le=!!y.alphaHash,Ce=!!y.extensions;let lt=wn;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Tt={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:et,fragmentShader:q,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:be,batchingColor:be&&z._colorsTexture!==null,instancing:qe,instancingColor:qe&&z.instanceColor!==null,instancingMorph:qe&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:yi,alphaToCoverage:!!y.alphaToCoverage,map:ht,matcap:at,envMap:Be,envMapMode:Be&&Z.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:Ht,bumpMap:ze,normalMap:He,displacementMap:f&&Me,emissiveMap:it,normalMapObjectSpace:He&&y.normalMapType===sc,normalMapTangentSpace:He&&y.normalMapType===ma,metalnessMap:xe,roughnessMap:b,anisotropy:x,anisotropyMap:oe,clearcoat:O,clearcoatMap:de,clearcoatNormalMap:ke,clearcoatRoughnessMap:ee,dispersion:Y,iridescence:j,iridescenceMap:fe,iridescenceThicknessMap:Te,sheen:X,sheenColorMap:we,sheenRoughnessMap:pe,specularMap:Ge,specularColorMap:De,specularIntensityMap:nt,transmission:_e,transmissionMap:I,thicknessMap:ie,gradientMap:G,opaque:y.transparent===!1&&y.blending===fi&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ce,alphaHash:le,combine:y.combine,mapUv:ht&&_(y.map.channel),aoMapUv:P&&_(y.aoMap.channel),lightMapUv:Ht&&_(y.lightMap.channel),bumpMapUv:ze&&_(y.bumpMap.channel),normalMapUv:He&&_(y.normalMap.channel),displacementMapUv:Me&&_(y.displacementMap.channel),emissiveMapUv:it&&_(y.emissiveMap.channel),metalnessMapUv:xe&&_(y.metalnessMap.channel),roughnessMapUv:b&&_(y.roughnessMap.channel),anisotropyMapUv:oe&&_(y.anisotropyMap.channel),clearcoatMapUv:de&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ke&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(y.sheenRoughnessMap.channel),specularMapUv:Ge&&_(y.specularMap.channel),specularColorMapUv:De&&_(y.specularColorMap.channel),specularIntensityMapUv:nt&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:ie&&_(y.thicknessMap.channel),alphaMapUv:$&&_(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(He||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(ht||$),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ee,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ue,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:ht&&y.map.isVideoTexture===!0&&Xe.getTransfer(y.map.colorSpace)===Je,decodeVideoTextureEmissive:it&&y.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(y.emissiveMap.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ot,flipSided:y.side===Ut,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ce&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&y.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function d(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)v.push(D),v.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(E(v,y),T(v,y),v.push(s.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function E(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function T(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const v=g[y.type];let D;if(v){const H=tn[v];D=jc.clone(H.uniforms)}else D=y.uniforms;return D}function C(y,v){let D;for(let H=0,z=h.length;H<z;H++){const W=h[H];if(W.cacheKey===v){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Ep(s,v,y,r),h.push(D)),D}function A(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function R(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:L}}function Rp(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Cp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ho(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Go(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,m,g,_,p){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),e++,d}function o(u,f,m,g,_,p){const d=a(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):t.push(d)}function l(u,f,m,g,_,p){const d=a(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Cp),n.length>1&&n.sort(f||Ho),i.length>1&&i.sort(f||Ho)}function h(){for(let u=e,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Pp(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Go,s.set(n,[a])):i>=r.length?(a=new Go,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Dp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Ne};break;case"SpotLight":t={position:new w,direction:new w,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function Lp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ip=0;function Up(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Np(s){const e=new Dp,t=Lp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const i=new w,r=new st,a=new st;function o(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,E=0,T=0,S=0,C=0,A=0,R=0;c.sort(Up);for(let y=0,v=c.length;y<v;y++){const D=c[y],H=D.color,z=D.intensity,W=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=H.r*z,u+=H.g*z,f+=H.b*z;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],z);R++}else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,k=t.get(D);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=D.shadow.matrix,E++}n.directional[m]=V,m++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(H).multiplyScalar(z),V.distance=W,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[_]=V;const Z=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,Z.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,D.castShadow){const k=t.get(D);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=K,S++}_++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(H).multiplyScalar(z),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=V,p++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const Z=D.shadow,k=t.get(D);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=D.shadow.matrix,T++}n.point[g]=V,g++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(z),V.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[d]=V,d++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==E||L.numPointShadows!==T||L.numSpotShadows!==S||L.numSpotMaps!==C||L.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,L.directionalLength=m,L.pointLength=g,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=E,L.numPointShadows=T,L.numSpotShadows=S,L.numSpotMaps=C,L.numLightProbes=R,n.version=Ip++)}function l(c,h){let u=0,f=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const T=c[d];if(T.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),u++}else if(T.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function ko(s){const e=new Np(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Op(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new ko(s),e.set(i,[o])):r>=a.length?(o=new ko(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zp(s,e,t){let n=new ya;const i=new Ie,r=new Ie,a=new Qe,o=new ah({depthPacking:ic}),l=new oh,c={},h=t.maxTextureSize,u={[An]:Ut,[Ut]:An,[ot]:ot},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Fp,fragmentShader:Bp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wo;let d=this.type;this.render=function(A,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const y=s.getRenderTarget(),v=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),H=s.state;H.setBlending(bn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=d!==hn&&this.type===hn,W=d===hn&&this.type!==hn;for(let K=0,V=A.length;K<V;K++){const Z=A[K],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const re=k.getFrameExtents();if(i.multiply(re),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/re.x),i.x=r.x*re.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/re.y),i.y=r.y*re.y,k.mapSize.y=r.y)),k.map===null||z===!0||W===!0){const ve=this.type!==hn?{minFilter:Jt,magFilter:Jt}:{};k.map!==null&&k.map.dispose(),k.map=new qn(i.x,i.y,ve),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const ue=k.getViewportCount();for(let ve=0;ve<ue;ve++){const Ue=k.getViewport(ve);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),H.viewport(a),k.updateMatrices(Z,ve),n=k.getFrustum(),S(R,L,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===hn&&E(k,L),k.needsUpdate=!1}d=this.type,p.needsUpdate=!1,s.setRenderTarget(y,v,D)};function E(A,R){const L=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new qn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,L,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,L,m,_,null)}function T(A,R,L,y){let v=null;const D=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)v=D;else if(v=L.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=v.uuid,z=R.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let K=W[z];K===void 0&&(K=v.clone(),W[z]=K,R.addEventListener("dispose",C)),v=K}if(v.visible=R.visible,v.wireframe=R.wireframe,y===hn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const H=s.properties.get(v);H.light=L}return v}function S(A,R,L,y,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===hn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const z=e.update(A),W=A.material;if(Array.isArray(W)){const K=z.groups;for(let V=0,Z=K.length;V<Z;V++){const k=K[V],re=W[k.materialIndex];if(re&&re.visible){const ue=T(A,re,y,v);A.onBeforeShadow(s,A,R,L,z,ue,k),s.renderBufferDirect(L,null,z,ue,A,k),A.onAfterShadow(s,A,R,L,z,ue,k)}}}else if(W.visible){const K=T(A,W,y,v);A.onBeforeShadow(s,A,R,L,z,K,null),s.renderBufferDirect(L,null,z,K,A,null),A.onAfterShadow(s,A,R,L,z,K,null)}}const H=A.children;for(let z=0,W=H.length;z<W;z++)S(H[z],R,L,y,v)}function C(A){A.target.removeEventListener("dispose",C);for(const L in c){const y=c[L],v=A.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const Hp={[Er]:Tr,[br]:Rr,[wr]:Cr,[_i]:Ar,[Tr]:Er,[Rr]:br,[Cr]:wr,[Ar]:_i};function Gp(s,e){function t(){let I=!1;const ie=new Qe;let G=null;const $=new Qe(0,0,0,0);return{setMask:function(ce){G!==ce&&!I&&(s.colorMask(ce,ce,ce,ce),G=ce)},setLocked:function(ce){I=ce},setClear:function(ce,le,Ce,lt,Tt){Tt===!0&&(ce*=lt,le*=lt,Ce*=lt),ie.set(ce,le,Ce,lt),$.equals(ie)===!1&&(s.clearColor(ce,le,Ce,lt),$.copy(ie))},reset:function(){I=!1,G=null,$.set(-1,0,0,0)}}}function n(){let I=!1,ie=!1,G=null,$=null,ce=null;return{setReversed:function(le){if(ie!==le){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const lt=ce;ce=null,this.setClear(lt)}ie=le},getReversed:function(){return ie},setTest:function(le){le?ae(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(le){G!==le&&!I&&(s.depthMask(le),G=le)},setFunc:function(le){if(ie&&(le=Hp[le]),$!==le){switch(le){case Er:s.depthFunc(s.NEVER);break;case Tr:s.depthFunc(s.ALWAYS);break;case br:s.depthFunc(s.LESS);break;case _i:s.depthFunc(s.LEQUAL);break;case wr:s.depthFunc(s.EQUAL);break;case Ar:s.depthFunc(s.GEQUAL);break;case Rr:s.depthFunc(s.GREATER);break;case Cr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=le}},setLocked:function(le){I=le},setClear:function(le){ce!==le&&(ie&&(le=1-le),s.clearDepth(le),ce=le)},reset:function(){I=!1,G=null,$=null,ce=null,ie=!1}}}function i(){let I=!1,ie=null,G=null,$=null,ce=null,le=null,Ce=null,lt=null,Tt=null;return{setTest:function(je){I||(je?ae(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(je){ie!==je&&!I&&(s.stencilMask(je),ie=je)},setFunc:function(je,qt,sn){(G!==je||$!==qt||ce!==sn)&&(s.stencilFunc(je,qt,sn),G=je,$=qt,ce=sn)},setOp:function(je,qt,sn){(le!==je||Ce!==qt||lt!==sn)&&(s.stencilOp(je,qt,sn),le=je,Ce=qt,lt=sn)},setLocked:function(je){I=je},setClear:function(je){Tt!==je&&(s.clearStencil(je),Tt=je)},reset:function(){I=!1,ie=null,G=null,$=null,ce=null,le=null,Ce=null,lt=null,Tt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,E=null,T=null,S=null,C=null,A=null,R=new Ne(0,0,0),L=0,y=!1,v=null,D=null,H=null,z=null,W=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=Z>=2);let re=null,ue={};const ve=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),et=new Qe().fromArray(ve),q=new Qe().fromArray(Ue);function te(I,ie,G,$){const ce=new Uint8Array(4),le=s.createTexture();s.bindTexture(I,le),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<G;Ce++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(ie+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return le}const ge={};ge[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(s.DEPTH_TEST),a.setFunc(_i),ze(!1),He(Na),ae(s.CULL_FACE),P(bn);function ae(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Ee(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function qe(I,ie){return u[I]!==ie?(s.bindFramebuffer(I,ie),u[I]=ie,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ie),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function be(I,ie){let G=m,$=!1;if(I){G=f.get(ie),G===void 0&&(G=[],f.set(ie,G));const ce=I.textures;if(G.length!==ce.length||G[0]!==s.COLOR_ATTACHMENT0){for(let le=0,Ce=ce.length;le<Ce;le++)G[le]=s.COLOR_ATTACHMENT0+le;G.length=ce.length,$=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,$=!0);$&&s.drawBuffers(G)}function ht(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const at={[Gn]:s.FUNC_ADD,[Pl]:s.FUNC_SUBTRACT,[Dl]:s.FUNC_REVERSE_SUBTRACT};at[Ll]=s.MIN,at[Il]=s.MAX;const Be={[Ul]:s.ZERO,[Nl]:s.ONE,[Ol]:s.SRC_COLOR,[Sr]:s.SRC_ALPHA,[kl]:s.SRC_ALPHA_SATURATE,[Hl]:s.DST_COLOR,[Bl]:s.DST_ALPHA,[Fl]:s.ONE_MINUS_SRC_COLOR,[yr]:s.ONE_MINUS_SRC_ALPHA,[Gl]:s.ONE_MINUS_DST_COLOR,[zl]:s.ONE_MINUS_DST_ALPHA,[Vl]:s.CONSTANT_COLOR,[Wl]:s.ONE_MINUS_CONSTANT_COLOR,[Xl]:s.CONSTANT_ALPHA,[ql]:s.ONE_MINUS_CONSTANT_ALPHA};function P(I,ie,G,$,ce,le,Ce,lt,Tt,je){if(I===bn){_===!0&&(Ee(s.BLEND),_=!1);return}if(_===!1&&(ae(s.BLEND),_=!0),I!==Cl){if(I!==p||je!==y){if((d!==Gn||S!==Gn)&&(s.blendEquation(s.FUNC_ADD),d=Gn,S=Gn),je)switch(I){case fi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oa:s.blendFunc(s.ONE,s.ONE);break;case Fa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ba:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case fi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ba:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,T=null,C=null,A=null,R.set(0,0,0),L=0,p=I,y=je}return}ce=ce||ie,le=le||G,Ce=Ce||$,(ie!==d||ce!==S)&&(s.blendEquationSeparate(at[ie],at[ce]),d=ie,S=ce),(G!==E||$!==T||le!==C||Ce!==A)&&(s.blendFuncSeparate(Be[G],Be[$],Be[le],Be[Ce]),E=G,T=$,C=le,A=Ce),(lt.equals(R)===!1||Tt!==L)&&(s.blendColor(lt.r,lt.g,lt.b,Tt),R.copy(lt),L=Tt),p=I,y=!1}function Ht(I,ie){I.side===ot?Ee(s.CULL_FACE):ae(s.CULL_FACE);let G=I.side===Ut;ie&&(G=!G),ze(G),I.blending===fi&&I.transparent===!1?P(bn):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const $=I.stencilWrite;o.setTest($),$&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),it(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){v!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),v=I)}function He(I){I!==wl?(ae(s.CULL_FACE),I!==D&&(I===Na?s.cullFace(s.BACK):I===Al?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),D=I}function Me(I){I!==H&&(V&&s.lineWidth(I),H=I)}function it(I,ie,G){I?(ae(s.POLYGON_OFFSET_FILL),(z!==ie||W!==G)&&(s.polygonOffset(ie,G),z=ie,W=G)):Ee(s.POLYGON_OFFSET_FILL)}function xe(I){I?ae(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function b(I){I===void 0&&(I=s.TEXTURE0+K-1),re!==I&&(s.activeTexture(I),re=I)}function x(I,ie,G){G===void 0&&(re===null?G=s.TEXTURE0+K-1:G=re);let $=ue[G];$===void 0&&($={type:void 0,texture:void 0},ue[G]=$),($.type!==I||$.texture!==ie)&&(re!==G&&(s.activeTexture(G),re=G),s.bindTexture(I,ie||ge[I]),$.type=I,$.texture=ie)}function O(){const I=ue[re];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(I){et.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),et.copy(I))}function pe(I){q.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function Ge(I,ie){let G=c.get(ie);G===void 0&&(G=new WeakMap,c.set(ie,G));let $=G.get(I);$===void 0&&($=s.getUniformBlockIndex(ie,I.name),G.set(I,$))}function De(I,ie){const $=c.get(ie).get(I);l.get(ie)!==$&&(s.uniformBlockBinding(ie,$,I.__bindingPointIndex),l.set(ie,$))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},re=null,ue={},u={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,E=null,T=null,S=null,C=null,A=null,R=new Ne(0,0,0),L=0,y=!1,v=null,D=null,H=null,z=null,W=null,et.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Ee,bindFramebuffer:qe,drawBuffers:be,useProgram:ht,setBlending:P,setMaterial:Ht,setFlipSided:ze,setCullFace:He,setLineWidth:Me,setPolygonOffset:it,setScissorTest:xe,activeTexture:b,bindTexture:x,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:fe,texImage3D:Te,updateUBOMapping:Ge,uniformBlockBinding:De,texStorage2D:ke,texStorage3D:ee,texSubImage2D:X,texSubImage3D:_e,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:we,viewport:pe,reset:nt}}function kp(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return m?new OffscreenCanvas(b,x):Ls("canvas")}function _(b,x,O){let Y=1;const j=xe(b);if((j.width>O||j.height>O)&&(Y=O/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor(Y*j.width),_e=Math.floor(Y*j.height);u===void 0&&(u=g(X,_e));const oe=x?g(X,_e):u;return oe.width=X,oe.height=_e,oe.getContext("2d").drawImage(b,0,0,X,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+_e+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function p(b){return b.generateMipmaps}function d(b){s.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(b,x,O,Y,j=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=x;if(x===s.RED&&(O===s.FLOAT&&(X=s.R32F),O===s.HALF_FLOAT&&(X=s.R16F),O===s.UNSIGNED_BYTE&&(X=s.R8)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.R8UI),O===s.UNSIGNED_SHORT&&(X=s.R16UI),O===s.UNSIGNED_INT&&(X=s.R32UI),O===s.BYTE&&(X=s.R8I),O===s.SHORT&&(X=s.R16I),O===s.INT&&(X=s.R32I)),x===s.RG&&(O===s.FLOAT&&(X=s.RG32F),O===s.HALF_FLOAT&&(X=s.RG16F),O===s.UNSIGNED_BYTE&&(X=s.RG8)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RG8UI),O===s.UNSIGNED_SHORT&&(X=s.RG16UI),O===s.UNSIGNED_INT&&(X=s.RG32UI),O===s.BYTE&&(X=s.RG8I),O===s.SHORT&&(X=s.RG16I),O===s.INT&&(X=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGB8UI),O===s.UNSIGNED_SHORT&&(X=s.RGB16UI),O===s.UNSIGNED_INT&&(X=s.RGB32UI),O===s.BYTE&&(X=s.RGB8I),O===s.SHORT&&(X=s.RGB16I),O===s.INT&&(X=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),O===s.UNSIGNED_INT&&(X=s.RGBA32UI),O===s.BYTE&&(X=s.RGBA8I),O===s.SHORT&&(X=s.RGBA16I),O===s.INT&&(X=s.RGBA32I)),x===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),x===s.RGBA){const _e=j?Ps:Xe.getTransfer(Y);O===s.FLOAT&&(X=s.RGBA32F),O===s.HALF_FLOAT&&(X=s.RGBA16F),O===s.UNSIGNED_BYTE&&(X=_e===Je?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(b,x){let O;return b?x===null||x===Xn||x===Mi?O=s.DEPTH24_STENCIL8:x===un?O=s.DEPTH32F_STENCIL8:x===Gi&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xn||x===Mi?O=s.DEPTH_COMPONENT24:x===un?O=s.DEPTH_COMPONENT32F:x===Gi&&(O=s.DEPTH_COMPONENT16),O}function C(b,x){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Jt&&b.minFilter!==It?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function A(b){const x=b.target;x.removeEventListener("dispose",A),L(x),x.isVideoTexture&&h.delete(x)}function R(b){const x=b.target;x.removeEventListener("dispose",R),v(x)}function L(b){const x=n.get(b);if(x.__webglInit===void 0)return;const O=b.source,Y=f.get(O);if(Y){const j=Y[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(b),Object.keys(Y).length===0&&f.delete(O)}n.remove(b)}function y(b){const x=n.get(b);s.deleteTexture(x.__webglTexture);const O=b.source,Y=f.get(O);delete Y[x.__cacheKey],a.memory.textures--}function v(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let j=0;j<x.__webglFramebuffer[Y].length;j++)s.deleteFramebuffer(x.__webglFramebuffer[Y][j]);else s.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[Y]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let Y=0,j=O.length;Y<j;Y++){const X=n.get(O[Y]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(b)}let D=0;function H(){D=0}function z(){const b=D;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),D+=1,b}function W(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function K(b,x){const O=n.get(b);if(b.isVideoTexture&&Me(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,b,x);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function V(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){q(O,b,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function Z(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){q(O,b,x);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function k(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){te(O,b,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}const re={[Hi]:s.REPEAT,[Vn]:s.CLAMP_TO_EDGE,[Lr]:s.MIRRORED_REPEAT},ue={[Jt]:s.NEAREST,[tc]:s.NEAREST_MIPMAP_NEAREST,[Zi]:s.NEAREST_MIPMAP_LINEAR,[It]:s.LINEAR,[Vs]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},ve={[rc]:s.NEVER,[uc]:s.ALWAYS,[ac]:s.LESS,[il]:s.LEQUAL,[oc]:s.EQUAL,[hc]:s.GEQUAL,[lc]:s.GREATER,[cc]:s.NOTEQUAL};function Ue(b,x){if(x.type===un&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===It||x.magFilter===Vs||x.magFilter===Zi||x.magFilter===Wn||x.minFilter===It||x.minFilter===Vs||x.minFilter===Zi||x.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,re[x.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,re[x.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,re[x.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ue[x.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Jt||x.minFilter!==Zi&&x.minFilter!==Wn||x.type===un&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function et(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",A));const Y=x.source;let j=f.get(Y);j===void 0&&(j={},f.set(Y,j));const X=W(x);if(X!==b.__cacheKey){j[X]===void 0&&(j[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[X].usedTimes++;const _e=j[b.__cacheKey];_e!==void 0&&(j[b.__cacheKey].usedTimes--,_e.usedTimes===0&&y(x)),b.__cacheKey=X,b.__webglTexture=j[X].texture}return O}function q(b,x,O){let Y=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=s.TEXTURE_3D);const j=et(b,x),X=x.source;t.bindTexture(Y,b.__webglTexture,s.TEXTURE0+O);const _e=n.get(X);if(X.version!==_e.__version||j===!0){t.activeTexture(s.TEXTURE0+O);const oe=Xe.getPrimaries(Xe.workingColorSpace),de=x.colorSpace===Tn?null:Xe.getPrimaries(x.colorSpace),ke=x.colorSpace===Tn||oe===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ee=_(x.image,!1,i.maxTextureSize);ee=it(x,ee);const fe=r.convert(x.format,x.colorSpace),Te=r.convert(x.type);let we=T(x.internalFormat,fe,Te,x.colorSpace,x.isVideoTexture);Ue(Y,x);let pe;const Ge=x.mipmaps,De=x.isVideoTexture!==!0,nt=_e.__version===void 0||j===!0,I=X.dataReady,ie=C(x,ee);if(x.isDepthTexture)we=S(x.format===Si,x.type),nt&&(De?t.texStorage2D(s.TEXTURE_2D,1,we,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,we,ee.width,ee.height,0,fe,Te,null));else if(x.isDataTexture)if(Ge.length>0){De&&nt&&t.texStorage2D(s.TEXTURE_2D,ie,we,Ge[0].width,Ge[0].height);for(let G=0,$=Ge.length;G<$;G++)pe=Ge[G],De?I&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,Te,pe.data):t.texImage2D(s.TEXTURE_2D,G,we,pe.width,pe.height,0,fe,Te,pe.data);x.generateMipmaps=!1}else De?(nt&&t.texStorage2D(s.TEXTURE_2D,ie,we,ee.width,ee.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,Te,ee.data)):t.texImage2D(s.TEXTURE_2D,0,we,ee.width,ee.height,0,fe,Te,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){De&&nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,we,Ge[0].width,Ge[0].height,ee.depth);for(let G=0,$=Ge.length;G<$;G++)if(pe=Ge[G],x.format!==Zt)if(fe!==null)if(De){if(I)if(x.layerUpdates.size>0){const ce=xo(pe.width,pe.height,x.format,x.type);for(const le of x.layerUpdates){const Ce=pe.data.subarray(le*ce/pe.data.BYTES_PER_ELEMENT,(le+1)*ce/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,le,pe.width,pe.height,1,fe,Ce)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,ee.depth,fe,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,we,pe.width,pe.height,ee.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,ee.depth,fe,Te,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,G,we,pe.width,pe.height,ee.depth,0,fe,Te,pe.data)}else{De&&nt&&t.texStorage2D(s.TEXTURE_2D,ie,we,Ge[0].width,Ge[0].height);for(let G=0,$=Ge.length;G<$;G++)pe=Ge[G],x.format!==Zt?fe!==null?De?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,G,we,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?I&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,Te,pe.data):t.texImage2D(s.TEXTURE_2D,G,we,pe.width,pe.height,0,fe,Te,pe.data)}else if(x.isDataArrayTexture)if(De){if(nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,we,ee.width,ee.height,ee.depth),I)if(x.layerUpdates.size>0){const G=xo(ee.width,ee.height,x.format,x.type);for(const $ of x.layerUpdates){const ce=ee.data.subarray($*G/ee.data.BYTES_PER_ELEMENT,($+1)*G/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,fe,Te,ce)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,Te,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,fe,Te,ee.data);else if(x.isData3DTexture)De?(nt&&t.texStorage3D(s.TEXTURE_3D,ie,we,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,Te,ee.data)):t.texImage3D(s.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,fe,Te,ee.data);else if(x.isFramebufferTexture){if(nt)if(De)t.texStorage2D(s.TEXTURE_2D,ie,we,ee.width,ee.height);else{let G=ee.width,$=ee.height;for(let ce=0;ce<ie;ce++)t.texImage2D(s.TEXTURE_2D,ce,we,G,$,0,fe,Te,null),G>>=1,$>>=1}}else if(Ge.length>0){if(De&&nt){const G=xe(Ge[0]);t.texStorage2D(s.TEXTURE_2D,ie,we,G.width,G.height)}for(let G=0,$=Ge.length;G<$;G++)pe=Ge[G],De?I&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,fe,Te,pe):t.texImage2D(s.TEXTURE_2D,G,we,fe,Te,pe);x.generateMipmaps=!1}else if(De){if(nt){const G=xe(ee);t.texStorage2D(s.TEXTURE_2D,ie,we,G.width,G.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,Te,ee)}else t.texImage2D(s.TEXTURE_2D,0,we,fe,Te,ee);p(x)&&d(Y),_e.__version=X.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function te(b,x,O){if(x.image.length!==6)return;const Y=et(b,x),j=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);const X=n.get(j);if(j.version!==X.__version||Y===!0){t.activeTexture(s.TEXTURE0+O);const _e=Xe.getPrimaries(Xe.workingColorSpace),oe=x.colorSpace===Tn?null:Xe.getPrimaries(x.colorSpace),de=x.colorSpace===Tn||_e===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ke=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let $=0;$<6;$++)!ke&&!ee?fe[$]=_(x.image[$],!0,i.maxCubemapSize):fe[$]=ee?x.image[$].image:x.image[$],fe[$]=it(x,fe[$]);const Te=fe[0],we=r.convert(x.format,x.colorSpace),pe=r.convert(x.type),Ge=T(x.internalFormat,we,pe,x.colorSpace),De=x.isVideoTexture!==!0,nt=X.__version===void 0||Y===!0,I=j.dataReady;let ie=C(x,Te);Ue(s.TEXTURE_CUBE_MAP,x);let G;if(ke){De&&nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,Ge,Te.width,Te.height);for(let $=0;$<6;$++){G=fe[$].mipmaps;for(let ce=0;ce<G.length;ce++){const le=G[ce];x.format!==Zt?we!==null?De?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,le.width,le.height,we,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,Ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,le.width,le.height,we,pe,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,Ge,le.width,le.height,0,we,pe,le.data)}}}else{if(G=x.mipmaps,De&&nt){G.length>0&&ie++;const $=xe(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(ee){De?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,fe[$].width,fe[$].height,we,pe,fe[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,fe[$].width,fe[$].height,0,we,pe,fe[$].data);for(let ce=0;ce<G.length;ce++){const Ce=G[ce].image[$].image;De?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Ce.width,Ce.height,we,pe,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,Ge,Ce.width,Ce.height,0,we,pe,Ce.data)}}else{De?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,we,pe,fe[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,we,pe,fe[$]);for(let ce=0;ce<G.length;ce++){const le=G[ce];De?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,we,pe,le.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,Ge,we,pe,le.image[$])}}}p(x)&&d(s.TEXTURE_CUBE_MAP),X.__version=j.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ge(b,x,O,Y,j,X){const _e=r.convert(O.format,O.colorSpace),oe=r.convert(O.type),de=T(O.internalFormat,_e,oe,O.colorSpace),ke=n.get(x),ee=n.get(O);if(ee.__renderTarget=x,!ke.__hasExternalTextures){const fe=Math.max(1,x.width>>X),Te=Math.max(1,x.height>>X);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,X,de,fe,Te,x.depth,0,_e,oe,null):t.texImage2D(j,X,de,fe,Te,0,_e,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),He(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,j,ee.__webglTexture,0,ze(x)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,j,ee.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(b,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),x.depthBuffer){const Y=x.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,X=S(x.stencilBuffer,j),_e=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=ze(x);He(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,X,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,X,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,X,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,b)}else{const Y=x.textures;for(let j=0;j<Y.length;j++){const X=Y[j],_e=r.convert(X.format,X.colorSpace),oe=r.convert(X.type),de=T(X.internalFormat,_e,oe,X.colorSpace),ke=ze(x);O&&He(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,de,x.width,x.height):He(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke,de,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,de,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const j=Y.__webglTexture,X=ze(x);if(x.depthTexture.format===pi)He(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(x.depthTexture.format===Si)He(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function qe(b){const x=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Y}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ee(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=s.createRenderbuffer(),ae(x.__webglDepthbuffer[Y],b,!1);else{const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,X)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),ae(x.__webglDepthbuffer,b,!1);else{const Y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,j)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(b,x,O){const Y=n.get(b);x!==void 0&&ge(Y.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&qe(b)}function ht(b){const x=b.texture,O=n.get(b),Y=n.get(x);b.addEventListener("dispose",R);const j=b.textures,X=b.isWebGLCubeRenderTarget===!0,_e=j.length>1;if(_e||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=x.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let de=0;de<x.mipmaps.length;de++)O.__webglFramebuffer[oe][de]=s.createFramebuffer()}else O.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)O.__webglFramebuffer[oe]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(_e)for(let oe=0,de=j.length;oe<de;oe++){const ke=n.get(j[oe]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&He(b)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){const de=j[oe];O.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);const ke=r.convert(de.format,de.colorSpace),ee=r.convert(de.type),fe=T(de.internalFormat,ke,ee,de.colorSpace,b.isXRRenderTarget===!0),Te=ze(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,fe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ge(O.__webglFramebuffer[oe][de],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else ge(O.__webglFramebuffer[oe],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(x)&&d(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let oe=0,de=j.length;oe<de;oe++){const ke=j[oe],ee=n.get(ke);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),Ue(s.TEXTURE_2D,ke),ge(O.__webglFramebuffer,b,ke,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),p(ke)&&d(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),Ue(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ge(O.__webglFramebuffer[de],b,x,s.COLOR_ATTACHMENT0,oe,de);else ge(O.__webglFramebuffer,b,x,s.COLOR_ATTACHMENT0,oe,0);p(x)&&d(oe),t.unbindTexture()}b.depthBuffer&&qe(b)}function at(b){const x=b.textures;for(let O=0,Y=x.length;O<Y;O++){const j=x[O];if(p(j)){const X=E(b),_e=n.get(j).__webglTexture;t.bindTexture(X,_e),d(X),t.unbindTexture()}}}const Be=[],P=[];function Ht(b){if(b.samples>0){if(He(b)===!1){const x=b.textures,O=b.width,Y=b.height;let j=s.COLOR_BUFFER_BIT;const X=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(b),oe=x.length>1;if(oe)for(let de=0;de<x.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let de=0;de<x.length;de++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const ke=n.get(x[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ke,0)}s.blitFramebuffer(0,0,O,Y,0,0,O,Y,j,s.NEAREST),l===!0&&(Be.length=0,P.length=0,Be.push(s.COLOR_ATTACHMENT0+de),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Be.push(X),P.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<x.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const ke=n.get(x[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function ze(b){return Math.min(i.maxSamples,b.samples)}function He(b){const x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Me(b){const x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function it(b,x){const O=b.colorSpace,Y=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==yi&&O!==Tn&&(Xe.getTransfer(O)===Je?(Y!==Zt||j!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=be,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=He}function Vp(s,e){function t(n,i=Tn){let r;const a=Xe.getTransfer(i);if(n===mn)return s.UNSIGNED_BYTE;if(n===ha)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ko)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yo)return s.BYTE;if(n===$o)return s.SHORT;if(n===Gi)return s.UNSIGNED_SHORT;if(n===ca)return s.INT;if(n===Xn)return s.UNSIGNED_INT;if(n===un)return s.FLOAT;if(n===qi)return s.HALF_FLOAT;if(n===jo)return s.ALPHA;if(n===Zo)return s.RGB;if(n===Zt)return s.RGBA;if(n===Jo)return s.LUMINANCE;if(n===Qo)return s.LUMINANCE_ALPHA;if(n===pi)return s.DEPTH_COMPONENT;if(n===Si)return s.DEPTH_STENCIL;if(n===el)return s.RED;if(n===da)return s.RED_INTEGER;if(n===tl)return s.RG;if(n===fa)return s.RG_INTEGER;if(n===pa)return s.RGBA_INTEGER;if(n===Ts||n===bs||n===ws||n===As)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ts)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ts)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ir||n===Ur||n===Nr||n===Or)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Or)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fr||n===Br||n===zr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fr||n===Br)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hr||n===Gr||n===kr||n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===$r||n===Kr||n===jr||n===Zr||n===Jr||n===Qr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$r)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rs||n===ea||n===ta)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rs)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nl||n===na||n===ia||n===sa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Wp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Pt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:Wp,fragmentShader:Xp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new xt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yp extends Ai{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const _=new qp,p=t.getContextAttributes();let d=null,E=null;const T=[],S=[],C=new Ie;let A=null;const R=new Bt;R.viewport=new Qe;const L=new Bt;L.viewport=new Qe;const y=[R,L],v=new dh;let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=T[q];return te===void 0&&(te=new cr,T[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=T[q];return te===void 0&&(te=new cr,T[q]=te),te.getGripSpace()},this.getHand=function(q){let te=T[q];return te===void 0&&(te=new cr,T[q]=te),te.getHandSpace()};function z(q){const te=S.indexOf(q.inputSource);if(te===-1)return;const ge=T[te];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||a),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",K);for(let q=0;q<T.length;q++){const te=S[q];te!==null&&(S[q]=null,T[q].disconnect(te))}D=null,H=null,_.reset(),e.setRenderTarget(d),m=null,f=null,u=null,i=null,E=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ae=null,Ee=null;p.depth&&(Ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=p.stencil?Si:pi,ae=p.stencil?Mi:Xn);const qe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(qe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new qn(f.textureWidth,f.textureHeight,{format:Zt,type:mn,depthTexture:new dl(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new qn(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(q){for(let te=0;te<q.removed.length;te++){const ge=q.removed[te],ae=S.indexOf(ge);ae>=0&&(S[ae]=null,T[ae].disconnect(ge))}for(let te=0;te<q.added.length;te++){const ge=q.added[te];let ae=S.indexOf(ge);if(ae===-1){for(let qe=0;qe<T.length;qe++)if(qe>=S.length){S.push(ge),ae=qe;break}else if(S[qe]===null){S[qe]=ge,ae=qe;break}if(ae===-1)break}const Ee=T[ae];Ee&&Ee.connect(ge)}}const V=new w,Z=new w;function k(q,te,ge){V.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const ae=V.distanceTo(Z),Ee=te.projectionMatrix.elements,qe=ge.projectionMatrix.elements,be=Ee[14]/(Ee[10]-1),ht=Ee[14]/(Ee[10]+1),at=(Ee[9]+1)/Ee[5],Be=(Ee[9]-1)/Ee[5],P=(Ee[8]-1)/Ee[0],Ht=(qe[8]+1)/qe[0],ze=be*P,He=be*Ht,Me=ae/(-P+Ht),it=Me*-P;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(it),q.translateZ(Me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const xe=be+Me,b=ht+Me,x=ze-it,O=He+(ae-it),Y=at*ht/b*xe,j=Be*ht/b*xe;q.projectionMatrix.makePerspective(x,O,Y,j,xe,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function re(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let te=q.near,ge=q.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),v.near=L.near=R.near=te,v.far=L.far=R.far=ge,(D!==v.near||H!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,H=v.far),R.layers.mask=q.layers.mask|2,L.layers.mask=q.layers.mask|4,v.layers.mask=R.layers.mask|L.layers.mask;const ae=q.parent,Ee=v.cameras;re(v,ae);for(let qe=0;qe<Ee.length;qe++)re(Ee[qe],ae);Ee.length===2?k(v,R,L):v.projectionMatrix.copy(R.projectionMatrix),ue(q,v,ae)};function ue(q,te,ge){ge===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ki*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ve=null;function Ue(q,te){if(h=te.getViewerPose(c||a),g=te,h!==null){const ge=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let ae=!1;ge.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let be=0;be<ge.length;be++){const ht=ge[be];let at=null;if(m!==null)at=m.getViewport(ht);else{const P=u.getViewSubImage(f,ht);at=P.viewport,be===0&&(e.setRenderTargetTextures(E,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(E))}let Be=y[be];Be===void 0&&(Be=new Bt,Be.layers.enable(be),Be.viewport=new Qe,y[be]=Be),Be.matrix.fromArray(ht.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ht.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(at.x,at.y,at.width,at.height),be===0&&(v.matrix.copy(Be.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(Be)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const be=u.getDepthInformation(ge[0]);be&&be.isValid&&be.texture&&_.init(e,be,i.renderState)}}for(let ge=0;ge<T.length;ge++){const ae=S[ge],Ee=T[ge];ae!==null&&Ee!==void 0&&Ee.update(ae,te,c||a)}ve&&ve(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const et=new ml;et.setAnimationLoop(Ue),this.setAnimationLoop=function(q){ve=q},this.dispose=function(){}}}const Fn=new ut,$p=new st;function Kp(s,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,cl(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,E,T,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,E,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ut&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ut&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=e.get(d),T=E.envMap,S=E.envMapRotation;T&&(p.envMap.value=T,Fn.copy(S),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),p.envMapRotation.value.setFromMatrix4($p.makeRotationFromEuler(Fn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=T*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const E=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jp(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const S=T.program;n.uniformBlockBinding(E,S)}function c(E,T){let S=i[E.id];S===void 0&&(g(E),S=h(E),i[E.id]=S,E.addEventListener("dispose",p));const C=T.program;n.updateUBOMapping(E,C);const A=e.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function h(E){const T=u();E.__bindingPointIndex=T;const S=s.createBuffer(),C=E.__size,A=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,S),S}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=i[E.id],S=E.uniforms,C=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let A=0,R=S.length;A<R;A++){const L=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,v=L.length;y<v;y++){const D=L[y];if(m(D,A,y,C)===!0){const H=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let K=0;K<z.length;K++){const V=z[K],Z=_(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,H+W,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(E,T,S,C){const A=E.value,R=T+"_"+S;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const L=C[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return C[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(E){const T=E.uniforms;let S=0;const C=16;for(let R=0,L=T.length;R<L;R++){const y=Array.isArray(T[R])?T[R]:[T[R]];for(let v=0,D=y.length;v<D;v++){const H=y[v],z=Array.isArray(H.value)?H.value:[H.value];for(let W=0,K=z.length;W<K;W++){const V=z[W],Z=_(V),k=S%C,re=k%Z.boundary,ue=k+re;S+=re,ue!==0&&C-ue<Z.storage&&(S+=C-ue),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=Z.storage}}}const A=S%C;return A>0&&(S+=C-A),E.__size=S,E.__cache={},this}function _(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function p(E){const T=E.target;T.removeEventListener("dispose",p);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function d(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}class Zp{constructor(e={}){const{canvas:t=Rc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=wn,this.toneMappingExposure=1;const S=this;let C=!1,A=0,R=0,L=null,y=-1,v=null;const D=new Qe,H=new Qe;let z=null;const W=new Ne(0);let K=0,V=t.width,Z=t.height,k=1,re=null,ue=null;const ve=new Qe(0,0,V,Z),Ue=new Qe(0,0,V,Z);let et=!1;const q=new ya;let te=!1,ge=!1;this.transmissionResolutionScale=1;const ae=new st,Ee=new st,qe=new w,be=new Qe,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Be(){return L===null?k:1}let P=n;function Ht(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oa}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),P===null){const U="webgl2";if(P=Ht(U,M),P===null)throw Ht(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ze,He,Me,it,xe,b,x,O,Y,j,X,_e,oe,de,ke,ee,fe,Te,we,pe,Ge,De,nt,I;function ie(){ze=new of(P),ze.init(),De=new Vp(P,ze),He=new Qd(P,ze,e,De),Me=new Gp(P,ze),He.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),it=new hf(P),xe=new Rp,b=new kp(P,ze,Me,xe,He,De,it),x=new tf(S),O=new af(S),Y=new mh(P),nt=new Zd(P,Y),j=new lf(P,Y,it,nt),X=new df(P,j,Y,it),we=new uf(P,He,b),ee=new ef(xe),_e=new Ap(S,x,O,ze,He,nt,ee),oe=new Kp(S,xe),de=new Pp,ke=new Op(ze),Te=new jd(S,x,O,Me,X,m,l),fe=new zp(S,X,He),I=new jp(P,it,He,Me),pe=new Jd(P,ze,it),Ge=new cf(P,ze,it),it.programs=_e.programs,S.capabilities=He,S.extensions=ze,S.properties=xe,S.renderLists=de,S.shadowMap=fe,S.state=Me,S.info=it}ie();const G=new Yp(S,P);this.xr=G,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=ze.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ze.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(M){M!==void 0&&(k=M,this.setSize(V,Z,!1))},this.getSize=function(M){return M.set(V,Z)},this.setSize=function(M,U,F=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,Z=U,t.width=Math.floor(M*k),t.height=Math.floor(U*k),F===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(V*k,Z*k).floor()},this.setDrawingBufferSize=function(M,U,F){V=M,Z=U,k=F,t.width=Math.floor(M*F),t.height=Math.floor(U*F),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,U,F,B){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,U,F,B),Me.viewport(D.copy(ve).multiplyScalar(k).round())},this.getScissor=function(M){return M.copy(Ue)},this.setScissor=function(M,U,F,B){M.isVector4?Ue.set(M.x,M.y,M.z,M.w):Ue.set(M,U,F,B),Me.scissor(H.copy(Ue).multiplyScalar(k).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(M){Me.setScissorTest(et=M)},this.setOpaqueSort=function(M){re=M},this.setTransparentSort=function(M){ue=M},this.getClearColor=function(M){return M.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,F=!0){let B=0;if(M){let N=!1;if(L!==null){const Q=L.texture.format;N=Q===pa||Q===fa||Q===da}if(N){const Q=L.texture.type,se=Q===mn||Q===Xn||Q===Gi||Q===Mi||Q===ha||Q===ua,he=Te.getClearColor(),me=Te.getClearAlpha(),Ae=he.r,Re=he.g,Se=he.b;se?(g[0]=Ae,g[1]=Re,g[2]=Se,g[3]=me,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ae,_[1]=Re,_[2]=Se,_[3]=me,P.clearBufferiv(P.COLOR,0,_))}else B|=P.COLOR_BUFFER_BIT}U&&(B|=P.DEPTH_BUFFER_BIT),F&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Te.dispose(),de.dispose(),ke.dispose(),xe.dispose(),x.dispose(),O.dispose(),X.dispose(),nt.dispose(),I.dispose(),_e.dispose(),G.dispose(),G.removeEventListener("sessionstart",Ra),G.removeEventListener("sessionend",Ca),Cn.stop()};function $(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const M=it.autoReset,U=fe.enabled,F=fe.autoUpdate,B=fe.needsUpdate,N=fe.type;ie(),it.autoReset=M,fe.enabled=U,fe.autoUpdate=F,fe.needsUpdate=B,fe.type=N}function le(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ce(M){const U=M.target;U.removeEventListener("dispose",Ce),lt(U)}function lt(M){Tt(M),xe.remove(M)}function Tt(M){const U=xe.get(M).programs;U!==void 0&&(U.forEach(function(F){_e.releaseProgram(F)}),M.isShaderMaterial&&_e.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,F,B,N,Q){U===null&&(U=ht);const se=N.isMesh&&N.matrixWorld.determinant()<0,he=Ml(M,U,F,B,N);Me.setMaterial(B,se);let me=F.index,Ae=1;if(B.wireframe===!0){if(me=j.getWireframeAttribute(F),me===void 0)return;Ae=2}const Re=F.drawRange,Se=F.attributes.position;let Ve=Re.start*Ae,$e=(Re.start+Re.count)*Ae;Q!==null&&(Ve=Math.max(Ve,Q.start*Ae),$e=Math.min($e,(Q.start+Q.count)*Ae)),me!==null?(Ve=Math.max(Ve,0),$e=Math.min($e,me.count)):Se!=null&&(Ve=Math.max(Ve,0),$e=Math.min($e,Se.count));const dt=$e-Ve;if(dt<0||dt===1/0)return;nt.setup(N,B,he,F,me);let ct,We=pe;if(me!==null&&(ct=Y.get(me),We=Ge,We.setIndex(ct)),N.isMesh)B.wireframe===!0?(Me.setLineWidth(B.wireframeLinewidth*Be()),We.setMode(P.LINES)):We.setMode(P.TRIANGLES);else if(N.isLine){let ye=B.linewidth;ye===void 0&&(ye=1),Me.setLineWidth(ye*Be()),N.isLineSegments?We.setMode(P.LINES):N.isLineLoop?We.setMode(P.LINE_LOOP):We.setMode(P.LINE_STRIP)}else N.isPoints?We.setMode(P.POINTS):N.isSprite&&We.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Bn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),We.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))We.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const ye=N._multiDrawStarts,yt=N._multiDrawCounts,Ke=N._multiDrawCount,Yt=me?Y.get(me).bytesPerElement:1,jn=xe.get(B).currentProgram.getUniforms();for(let Nt=0;Nt<Ke;Nt++)jn.setValue(P,"_gl_DrawID",Nt),We.render(ye[Nt]/Yt,yt[Nt])}else if(N.isInstancedMesh)We.renderInstances(Ve,dt,N.count);else if(F.isInstancedBufferGeometry){const ye=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,yt=Math.min(F.instanceCount,ye);We.renderInstances(Ve,dt,yt)}else We.render(Ve,dt)};function je(M,U,F){M.transparent===!0&&M.side===ot&&M.forceSinglePass===!1?(M.side=Ut,M.needsUpdate=!0,ji(M,U,F),M.side=An,M.needsUpdate=!0,ji(M,U,F),M.side=ot):ji(M,U,F)}this.compile=function(M,U,F=null){F===null&&(F=M),d=ke.get(F),d.init(U),T.push(d),F.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),M!==F&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const B=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let se=0;se<Q.length;se++){const he=Q[se];je(he,F,N),B.add(he)}else je(Q,F,N),B.add(Q)}),d=T.pop(),B},this.compileAsync=function(M,U,F=null){const B=this.compile(M,U,F);return new Promise(N=>{function Q(){if(B.forEach(function(se){xe.get(se).currentProgram.isReady()&&B.delete(se)}),B.size===0){N(M);return}setTimeout(Q,10)}ze.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let qt=null;function sn(M){qt&&qt(M)}function Ra(){Cn.stop()}function Ca(){Cn.start()}const Cn=new ml;Cn.setAnimationLoop(sn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(M){qt=M,G.setAnimationLoop(M),M===null?Cn.stop():Cn.start()},G.addEventListener("sessionstart",Ra),G.addEventListener("sessionend",Ca),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,U,L),d=ke.get(M,T.length),d.init(U),T.push(d),Ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Ee),ge=this.localClippingEnabled,te=ee.init(this.clippingPlanes,ge),p=de.get(M,E.length),p.init(),E.push(p),G.enabled===!0&&G.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&Gs(Q,U,-1/0,S.sortObjects)}Gs(M,U,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(re,ue),at=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,at&&Te.addToRenderList(p,M),this.info.render.frame++,te===!0&&ee.beginShadows();const F=d.state.shadowsArray;fe.render(F,M,U),te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,N=p.transmissive;if(d.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let se=0,he=Q.length;se<he;se++){const me=Q[se];Da(B,N,M,me)}at&&Te.render(M);for(let se=0,he=Q.length;se<he;se++){const me=Q[se];Pa(p,M,me,me.viewport)}}else N.length>0&&Da(B,N,M,U),at&&Te.render(M),Pa(p,M,U);L!==null&&R===0&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(S,M,U),nt.resetDefaultState(),y=-1,v=null,T.pop(),T.length>0?(d=T[T.length-1],te===!0&&ee.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function Gs(M,U,F,B){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){B&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ee);const se=X.update(M),he=M.material;he.visible&&p.push(M,se,he,F,be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const se=X.update(M),he=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),be.copy(M.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),be.copy(se.boundingSphere.center)),be.applyMatrix4(M.matrixWorld).applyMatrix4(Ee)),Array.isArray(he)){const me=se.groups;for(let Ae=0,Re=me.length;Ae<Re;Ae++){const Se=me[Ae],Ve=he[Se.materialIndex];Ve&&Ve.visible&&p.push(M,se,Ve,F,be.z,Se)}}else he.visible&&p.push(M,se,he,F,be.z,null)}}const Q=M.children;for(let se=0,he=Q.length;se<he;se++)Gs(Q[se],U,F,B)}function Pa(M,U,F,B){const N=M.opaque,Q=M.transmissive,se=M.transparent;d.setupLightsView(F),te===!0&&ee.setGlobalState(S.clippingPlanes,F),B&&Me.viewport(D.copy(B)),N.length>0&&Ki(N,U,F),Q.length>0&&Ki(Q,U,F),se.length>0&&Ki(se,U,F),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Da(M,U,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new qn(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?qi:mn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const Q=d.state.transmissionRenderTarget[B.id],se=B.viewport||D;Q.setSize(se.z*S.transmissionResolutionScale,se.w*S.transmissionResolutionScale);const he=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(W),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),at&&Te.render(F);const me=S.toneMapping;S.toneMapping=wn;const Ae=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),te===!0&&ee.setGlobalState(S.clippingPlanes,B),Ki(M,F,B),b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Se=0,Ve=U.length;Se<Ve;Se++){const $e=U[Se],dt=$e.object,ct=$e.geometry,We=$e.material,ye=$e.group;if(We.side===ot&&dt.layers.test(B.layers)){const yt=We.side;We.side=Ut,We.needsUpdate=!0,La(dt,F,B,ct,We,ye),We.side=yt,We.needsUpdate=!0,Re=!0}}Re===!0&&(b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q))}S.setRenderTarget(he),S.setClearColor(W,K),Ae!==void 0&&(B.viewport=Ae),S.toneMapping=me}function Ki(M,U,F){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=M.length;N<Q;N++){const se=M[N],he=se.object,me=se.geometry,Ae=B===null?se.material:B,Re=se.group;he.layers.test(F.layers)&&La(he,U,F,me,Ae,Re)}}function La(M,U,F,B,N,Q){M.onBeforeRender(S,U,F,B,N,Q),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(S,U,F,B,M,Q),N.transparent===!0&&N.side===ot&&N.forceSinglePass===!1?(N.side=Ut,N.needsUpdate=!0,S.renderBufferDirect(F,U,B,N,M,Q),N.side=An,N.needsUpdate=!0,S.renderBufferDirect(F,U,B,N,M,Q),N.side=ot):S.renderBufferDirect(F,U,B,N,M,Q),M.onAfterRender(S,U,F,B,N,Q)}function ji(M,U,F){U.isScene!==!0&&(U=ht);const B=xe.get(M),N=d.state.lights,Q=d.state.shadowsArray,se=N.state.version,he=_e.getParameters(M,N.state,Q,U,F),me=_e.getProgramCacheKey(he);let Ae=B.programs;B.environment=M.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(M.isMeshStandardMaterial?O:x).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",Ce),Ae=new Map,B.programs=Ae);let Re=Ae.get(me);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===se)return Ua(M,he),Re}else he.uniforms=_e.getUniforms(M),M.onBeforeCompile(he,S),Re=_e.acquireProgram(he,me),Ae.set(me,Re),B.uniforms=he.uniforms;const Se=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Se.clippingPlanes=ee.uniform),Ua(M,he),B.needsLights=yl(M),B.lightsStateVersion=se,B.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function Ia(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Cs.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Ua(M,U){const F=xe.get(M);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.batchingColor=U.batchingColor,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.instancingMorph=U.instancingMorph,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function Ml(M,U,F,B,N){U.isScene!==!0&&(U=ht),b.resetTextureUnits();const Q=U.fog,se=B.isMeshStandardMaterial?U.environment:null,he=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:yi,me=(B.isMeshStandardMaterial?O:x).get(B.envMap||se),Ae=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Re=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Se=!!F.morphAttributes.position,Ve=!!F.morphAttributes.normal,$e=!!F.morphAttributes.color;let dt=wn;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(dt=S.toneMapping);const ct=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,We=ct!==void 0?ct.length:0,ye=xe.get(B),yt=d.state.lights;if(te===!0&&(ge===!0||M!==v)){const At=M===v&&B.id===y;ee.setState(B,M,At)}let Ke=!1;B.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==yt.state.version||ye.outputColorSpace!==he||N.isBatchedMesh&&ye.batching===!1||!N.isBatchedMesh&&ye.batching===!0||N.isBatchedMesh&&ye.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ye.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ye.instancing===!1||!N.isInstancedMesh&&ye.instancing===!0||N.isSkinnedMesh&&ye.skinning===!1||!N.isSkinnedMesh&&ye.skinning===!0||N.isInstancedMesh&&ye.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ye.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ye.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ye.instancingMorph===!1&&N.morphTexture!==null||ye.envMap!==me||B.fog===!0&&ye.fog!==Q||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==ee.numPlanes||ye.numIntersection!==ee.numIntersection)||ye.vertexAlphas!==Ae||ye.vertexTangents!==Re||ye.morphTargets!==Se||ye.morphNormals!==Ve||ye.morphColors!==$e||ye.toneMapping!==dt||ye.morphTargetsCount!==We)&&(Ke=!0):(Ke=!0,ye.__version=B.version);let Yt=ye.currentProgram;Ke===!0&&(Yt=ji(B,U,N));let jn=!1,Nt=!1,Pi=!1;const rt=Yt.getUniforms(),Gt=ye.uniforms;if(Me.useProgram(Yt.program)&&(jn=!0,Nt=!0,Pi=!0),B.id!==y&&(y=B.id,Nt=!0),jn||v!==M){Me.buffers.depth.getReversed()?(ae.copy(M.projectionMatrix),Pc(ae),Dc(ae),rt.setValue(P,"projectionMatrix",ae)):rt.setValue(P,"projectionMatrix",M.projectionMatrix),rt.setValue(P,"viewMatrix",M.matrixWorldInverse);const Lt=rt.map.cameraPosition;Lt!==void 0&&Lt.setValue(P,qe.setFromMatrixPosition(M.matrixWorld)),He.logarithmicDepthBuffer&&rt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&rt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,Nt=!0,Pi=!0)}if(N.isSkinnedMesh){rt.setOptional(P,N,"bindMatrix"),rt.setOptional(P,N,"bindMatrixInverse");const At=N.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),rt.setValue(P,"boneTexture",At.boneTexture,b))}N.isBatchedMesh&&(rt.setOptional(P,N,"batchingTexture"),rt.setValue(P,"batchingTexture",N._matricesTexture,b),rt.setOptional(P,N,"batchingIdTexture"),rt.setValue(P,"batchingIdTexture",N._indirectTexture,b),rt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&rt.setValue(P,"batchingColorTexture",N._colorsTexture,b));const kt=F.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&we.update(N,F,Yt),(Nt||ye.receiveShadow!==N.receiveShadow)&&(ye.receiveShadow=N.receiveShadow,rt.setValue(P,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Gt.envMap.value=me,Gt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Gt.envMapIntensity.value=U.environmentIntensity),Nt&&(rt.setValue(P,"toneMappingExposure",S.toneMappingExposure),ye.needsLights&&Sl(Gt,Pi),Q&&B.fog===!0&&oe.refreshFogUniforms(Gt,Q),oe.refreshMaterialUniforms(Gt,B,k,Z,d.state.transmissionRenderTarget[M.id]),Cs.upload(P,Ia(ye),Gt,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Cs.upload(P,Ia(ye),Gt,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&rt.setValue(P,"center",N.center),rt.setValue(P,"modelViewMatrix",N.modelViewMatrix),rt.setValue(P,"normalMatrix",N.normalMatrix),rt.setValue(P,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const At=B.uniformsGroups;for(let Lt=0,ks=At.length;Lt<ks;Lt++){const Pn=At[Lt];I.update(Pn,Yt),I.bind(Pn,Yt)}}return Yt}function Sl(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function yl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,U,F){xe.get(M.texture).__webglTexture=U,xe.get(M.depthTexture).__webglTexture=F;const B=xe.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const F=xe.get(M);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0};const El=P.createFramebuffer();this.setRenderTarget=function(M,U=0,F=0){L=M,A=U,R=F;let B=!0,N=null,Q=!1,se=!1;if(M){const me=xe.get(M);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(P.FRAMEBUFFER,null),B=!1;else if(me.__webglFramebuffer===void 0)b.setupRenderTarget(M);else if(me.__hasExternalTextures)b.rebindTextures(M,xe.get(M.texture).__webglTexture,xe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Se=M.depthTexture;if(me.__boundDepthTexture!==Se){if(Se!==null&&xe.has(Se)&&(M.width!==Se.image.width||M.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(se=!0);const Re=xe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?N=Re[U][F]:N=Re[U],Q=!0):M.samples>0&&b.useMultisampledRTT(M)===!1?N=xe.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[F]:N=Re,D.copy(M.viewport),H.copy(M.scissor),z=M.scissorTest}else D.copy(ve).multiplyScalar(k).floor(),H.copy(Ue).multiplyScalar(k).floor(),z=et;if(F!==0&&(N=El),Me.bindFramebuffer(P.FRAMEBUFFER,N)&&B&&Me.drawBuffers(M,N),Me.viewport(D),Me.scissor(H),Me.setScissorTest(z),Q){const me=xe.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,F)}else if(se){const me=xe.get(M.texture),Ae=U;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,me.__webglTexture,F,Ae)}else if(M!==null&&F!==0){const me=xe.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,me.__webglTexture,F)}y=-1},this.readRenderTargetPixels=function(M,U,F,B,N,Q,se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=xe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&se!==void 0&&(he=he[se]),he){Me.bindFramebuffer(P.FRAMEBUFFER,he);try{const me=M.texture,Ae=me.format,Re=me.type;if(!He.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-B&&F>=0&&F<=M.height-N&&P.readPixels(U,F,B,N,De.convert(Ae),De.convert(Re),Q)}finally{const me=L!==null?xe.get(L).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(M,U,F,B,N,Q,se){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=xe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&se!==void 0&&(he=he[se]),he){const me=M.texture,Ae=me.format,Re=me.type;if(!He.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-B&&F>=0&&F<=M.height-N){Me.bindFramebuffer(P.FRAMEBUFFER,he);const Se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),P.readPixels(U,F,B,N,De.convert(Ae),De.convert(Re),0);const Ve=L!==null?xe.get(L).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Ve);const $e=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Cc(P,$e,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(Se),P.deleteSync($e),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,F=0){M.isTexture!==!0&&(Bn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const B=Math.pow(2,-F),N=Math.floor(M.image.width*B),Q=Math.floor(M.image.height*B),se=U!==null?U.x:0,he=U!==null?U.y:0;b.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,se,he,N,Q),Me.unbindTexture()};const Tl=P.createFramebuffer(),bl=P.createFramebuffer();this.copyTextureToTexture=function(M,U,F=null,B=null,N=0,Q=null){M.isTexture!==!0&&(Bn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1],U=arguments[2],Q=arguments[3]||0,F=null),Q===null&&(N!==0?(Bn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let se,he,me,Ae,Re,Se,Ve,$e,dt;const ct=M.isCompressedTexture?M.mipmaps[Q]:M.image;if(F!==null)se=F.max.x-F.min.x,he=F.max.y-F.min.y,me=F.isBox3?F.max.z-F.min.z:1,Ae=F.min.x,Re=F.min.y,Se=F.isBox3?F.min.z:0;else{const kt=Math.pow(2,-N);se=Math.floor(ct.width*kt),he=Math.floor(ct.height*kt),M.isDataArrayTexture?me=ct.depth:M.isData3DTexture?me=Math.floor(ct.depth*kt):me=1,Ae=0,Re=0,Se=0}B!==null?(Ve=B.x,$e=B.y,dt=B.z):(Ve=0,$e=0,dt=0);const We=De.convert(U.format),ye=De.convert(U.type);let yt;U.isData3DTexture?(b.setTexture3D(U,0),yt=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),yt=P.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),yt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Ke=P.getParameter(P.UNPACK_ROW_LENGTH),Yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),jn=P.getParameter(P.UNPACK_SKIP_PIXELS),Nt=P.getParameter(P.UNPACK_SKIP_ROWS),Pi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ct.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ct.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,Re),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Se);const rt=M.isDataArrayTexture||M.isData3DTexture,Gt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const kt=xe.get(M),At=xe.get(U),Lt=xe.get(kt.__renderTarget),ks=xe.get(At.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,ks.__webglFramebuffer);for(let Pn=0;Pn<me;Pn++)rt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(M).__webglTexture,N,Se+Pn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(U).__webglTexture,Q,dt+Pn)),P.blitFramebuffer(Ae,Re,se,he,Ve,$e,se,he,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||xe.has(M)){const kt=xe.get(M),At=xe.get(U);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Tl),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,bl);for(let Lt=0;Lt<me;Lt++)rt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,N,Se+Lt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,kt.__webglTexture,N),Gt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.__webglTexture,Q,dt+Lt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,At.__webglTexture,Q),N!==0?P.blitFramebuffer(Ae,Re,se,he,Ve,$e,se,he,P.COLOR_BUFFER_BIT,P.NEAREST):Gt?P.copyTexSubImage3D(yt,Q,Ve,$e,dt+Lt,Ae,Re,se,he):P.copyTexSubImage2D(yt,Q,Ve,$e,Ae,Re,se,he);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Gt?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(yt,Q,Ve,$e,dt,se,he,me,We,ye,ct.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,Q,Ve,$e,dt,se,he,me,We,ct.data):P.texSubImage3D(yt,Q,Ve,$e,dt,se,he,me,We,ye,ct):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,Ve,$e,se,he,We,ye,ct.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,Ve,$e,ct.width,ct.height,We,ct.data):P.texSubImage2D(P.TEXTURE_2D,Q,Ve,$e,se,he,We,ye,ct);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ke),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,jn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Nt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pi),Q===0&&U.generateMipmaps&&P.generateMipmap(yt),Me.unbindTexture()},this.copyTextureToTexture3D=function(M,U,F=null,B=null,N=0){return M.isTexture!==!0&&(Bn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,M=arguments[2],U=arguments[3],N=arguments[4]||0),Bn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,F,B,N)},this.initRenderTarget=function(M){xe.get(M).__webglFramebuffer===void 0&&b.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,Me.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class wi{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function h(m){m.addEventListener("end",u),await e.xr.setSession(m),n.textContent="EXIT VR",c=m}function u(){c.removeEventListener("end",u),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const f={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",f).then(h):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(m=>{console.warn(m)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(m=>{console.warn(m)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){r(),n.textContent="VR NOT SUPPORTED"}function o(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():a(),c&&wi.xrSessionIsGranted&&n.click()}).catch(o),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{wi.xrSessionIsGranted=!0})}}}wi.xrSessionIsGranted=!1;wi.registerSessionGrantedListener();var Bi=(s=>(s.TRAINING="TRAINING",s.SURVIVAL="SURVIVAL",s.TIME_ATTACK="TIME_ATTACK",s))(Bi||{}),mt=(s=>(s.DETECTION_MODE="DETECTION_MODE",s.CINEMATIC_INTRO="CINEMATIC_INTRO",s.MAIN_MENU="MAIN_MENU",s.PLAYING="PLAYING",s.PAUSED="PAUSED",s.GAME_OVER="GAME_OVER",s))(mt||{});class Jp{currentState="MAIN_MENU";currentMode="TRAINING";stateListeners=[];stateTimer=0;getState(){return this.currentState}getMode(){return this.currentMode}setMode(e){this.currentMode=e}setState(e){if(this.currentState===e)return;const t=this.currentState;this.currentState=e,this.stateTimer=0;for(const n of this.stateListeners)n(e,t)}onStateChange(e){this.stateListeners.push(e)}update(e){this.stateTimer+=e}getStateTimer(){return this.stateTimer}}class Qp{activeSource;constructor(e){this.activeSource=e,this.activeSource.init()}setSource(e){this.activeSource.dispose(),this.activeSource=e,this.activeSource.init()}getSource(){return this.activeSource}update(e){this.activeSource.update(e)}getMovement(){return this.activeSource.getMovement()}getLookDelta(){return this.activeSource.getLookDelta()}resetLookDelta(){this.activeSource.resetLookDelta()}isShootHeld(){return this.activeSource.isShootHeld()}consumeShootTriggered(){return this.activeSource.consumeShootTriggered()}consumeReloadTriggered(){return this.activeSource.consumeReloadTriggered()}consumePauseTriggered(){return this.activeSource.consumePauseTriggered()}dispose(){this.activeSource.dispose()}}class em{domElement;isLocked=!1;keys={};lookDelta={x:0,y:0};isShooting=!1;shootTriggered=!1;reloadTriggered=!1;pauseTriggered=!1;sensitivity=.0022;onLockChange;constructor(e){this.domElement=e,this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onPointerLockChange=this.onPointerLockChange.bind(this)}init(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mousedown",this.onMouseDown),document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("pointerlockchange",this.onPointerLockChange)}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mousedown",this.onMouseDown),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("pointerlockchange",this.onPointerLockChange)}requestLock(){try{const e=this.domElement.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(t=>{})}catch{}}isPointerLocked(){return this.isLocked}onPointerLockChange(){this.isLocked=document.pointerLockElement===this.domElement,this.onLockChange&&this.onLockChange(this.isLocked)}onKeyDown(e){this.keys[e.code]=!0,e.code==="KeyR"&&!e.repeat&&(this.reloadTriggered=!0),e.code==="Escape"&&(this.pauseTriggered=!0)}onKeyUp(e){this.keys[e.code]=!1}onMouseMove(e){if(!this.isLocked)return;const t=e.movementX??0,n=e.movementY??0;this.lookDelta.x+=t*this.sensitivity,this.lookDelta.y+=n*this.sensitivity}onMouseDown(e){if(!this.isLocked){this.requestLock();return}e.button===0&&(this.isShooting=!0,this.shootTriggered=!0)}onMouseUp(e){e.button===0&&(this.isShooting=!1)}update(e){}getMovement(){if(!this.isLocked)return{x:0,z:0};let e=0,t=0;(this.keys.KeyW||this.keys.ArrowUp)&&(e+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(e-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(t+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(t-=1);const n=Math.hypot(t,e);return n>0?{x:t/n,z:e/n}:{x:0,z:0}}getLookDelta(){return this.lookDelta}resetLookDelta(){this.lookDelta.x=0,this.lookDelta.y=0}isShootHeld(){return this.isLocked&&this.isShooting}consumeShootTriggered(){if(!this.isLocked)return!1;const e=this.shootTriggered;return this.shootTriggered=!1,e}consumeReloadTriggered(){const e=this.reloadTriggered;return this.reloadTriggered=!1,e}consumePauseTriggered(){const e=this.pauseTriggered;return this.pauseTriggered=!1,e}}class tm{renderer;playerGroup;camera;rightController=null;leftController=null;rightGrip=null;leftGrip=null;shootTriggered=!1;isShooting=!1;reloadTriggered=!1;pauseTriggered=!1;moveVector={x:0,z:0};canSnapTurn=!0;snapTurnAngle=Math.PI/6;canPause=!0;onRightControllerReady;onLeftControllerReady;constructor(e,t,n){this.renderer=e,this.playerGroup=t,this.camera=n,this.setupControllers()}setupControllers(){for(let e=0;e<2;e++){const t=this.renderer.xr.getController(e),n=this.renderer.xr.getControllerGrip(e);this.playerGroup.add(t),this.playerGroup.add(n),t.addEventListener("connected",i=>{const r=i.data;r&&(r.handedness==="right"?(this.rightController=t,this.rightGrip=n,this.setupRightControllerEvents(t),this.onRightControllerReady&&this.onRightControllerReady(t,n)):r.handedness==="left"&&(this.leftController=t,this.leftGrip=n,this.setupLeftControllerEvents(t),this.onLeftControllerReady&&this.onLeftControllerReady(t,n)))})}}setupRightControllerEvents(e){e.addEventListener("selectstart",()=>{this.isShooting=!0,this.shootTriggered=!0,this.triggerHaptic(.7,40,"right")}),e.addEventListener("selectend",()=>{this.isShooting=!1})}setupLeftControllerEvents(e){e.addEventListener("selectstart",()=>{this.reloadTriggered=!0,this.triggerHaptic(.35,30,"left")})}init(){}dispose(){}update(e){const t=this.renderer.xr.getSession();if(!t)return;let n={x:0,y:0},i={x:0};for(const r of t.inputSources){if(!r.gamepad)continue;const a=r.gamepad,o=this.getSafeThumbstick(a);r.handedness==="left"?(n=o,a.buttons[1]?.pressed&&(this.reloadTriggered=!0),!!(a.buttons[4]?.pressed||a.buttons[5]?.pressed||a.buttons[3]?.pressed)?this.canPause&&(this.pauseTriggered=!0,this.canPause=!1,this.triggerHaptic(.35,35,"left")):this.canPause=!0):r.handedness==="right"&&(i=o,(a.buttons[1]?.pressed||a.buttons[4]?.pressed||a.buttons[5]?.pressed)&&(this.reloadTriggered=!0))}if(Math.abs(i.x)<.28&&(this.canSnapTurn=!0),this.canSnapTurn&&(i.x>.65?(this.playerGroup.rotation.y-=this.snapTurnAngle,this.canSnapTurn=!1,this.triggerHaptic(.25,25,"right")):i.x<-.65&&(this.playerGroup.rotation.y+=this.snapTurnAngle,this.canSnapTurn=!1,this.triggerHaptic(.25,25,"right"))),Math.hypot(n.x,n.y)>.18){const r=-n.y,a=n.x,o=new w;this.camera.getWorldDirection(o),o.y=0,o.normalize();const l=new w(-o.z,0,o.x),c=new w;c.addScaledVector(o,r),c.addScaledVector(l,a),this.moveVector.x=c.x,this.moveVector.z=c.z}else this.moveVector.x=0,this.moveVector.z=0}getSafeThumbstick(e){return e.axes?e.mapping==="xr-standard"&&e.axes.length>=4?{x:e.axes[2]??0,y:e.axes[3]??0}:e.axes.length>=2?{x:e.axes[0]??0,y:e.axes[1]??0}:{x:0,y:0}:{x:0,y:0}}triggerHaptic(e=.7,t=40,n="right"){const i=this.renderer.xr.getSession();if(i){for(const r of i.inputSources)if(r.handedness===n&&r.gamepad){const a=r.gamepad.hapticActuators;a&&a.length>0&&a[0].pulse(e,t)}}}getMovement(){return this.moveVector}getLookDelta(){return{x:0,y:0}}resetLookDelta(){}isShootHeld(){return this.isShooting}consumeShootTriggered(){const e=this.shootTriggered;return this.shootTriggered=!1,e}consumeReloadTriggered(){const e=this.reloadTriggered;return this.reloadTriggered=!1,e}consumePauseTriggered(){const e=this.pauseTriggered;return this.pauseTriggered=!1,e}getAimRay(){const e=new w,t=new w(0,0,-1);if(this.rightController){this.rightController.getWorldPosition(e);const n=new en;this.rightController.getWorldQuaternion(n),t.applyQuaternion(n).normalize()}else this.camera.getWorldPosition(e),this.camera.getWorldDirection(t);return{origin:e,direction:t}}}class nm{group;spawnPoints=[];playerStart=new w(0,0,9);obstacles=[];targetMeshes=[];arenaSize=38;wallHeight=5.5;constructor(){this.group=new gt,this.buildMotherboardFloor(),this.buildFirewallPerimeter(),this.buildHardwareCovers(),this.setupMotherboardLighting(),this.setupSpawnPoints(),this.cacheTargetMeshes()}buildMotherboardFloor(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#061321",t.fillRect(0,0,512,512),t.strokeStyle="rgba(0, 243, 255, 0.15)",t.lineWidth=1;for(let g=0;g<=512;g+=32)t.beginPath(),t.moveTo(g,0),t.lineTo(g,512),t.stroke(),t.beginPath(),t.moveTo(0,g),t.lineTo(512,g),t.stroke();t.strokeStyle="#eab308",t.lineWidth=3,[64,128,192,256,320,384,448].forEach(g=>{t.beginPath(),t.moveTo(g,0),t.lineTo(g,g+50),t.lineTo(g+50,g+100),t.lineTo(g+50,512),t.stroke()}),t.strokeStyle="#00f3ff",t.lineWidth=2;for(let g=32;g<512;g+=96)t.beginPath(),t.moveTo(0,g),t.lineTo(g+25,g),t.lineTo(g+75,g+50),t.lineTo(512,g+50),t.stroke();t.fillStyle="#fbbf24";for(let g=32;g<512;g+=64)for(let _=32;_<512;_+=64)t.beginPath(),t.arc(g,_,4,0,Math.PI*2),t.fill();const i=new gn(e);i.wrapS=Hi,i.wrapT=Hi,i.repeat.set(6,6);const r=new xt(this.arenaSize,this.arenaSize),a=new Nn({map:i}),o=new J(r,a);o.rotation.x=-Math.PI/2,this.group.add(o);const l=new xt(7,7),c=new Nn({color:1976635}),h=new J(l,c);h.rotation.x=-Math.PI/2,h.position.set(0,.02,-2),this.group.add(h);const u=new Wi(3.6,3.8,4),f=new Oe({color:16096779,side:ot}),m=new J(u,f);m.rotation.x=-Math.PI/2,m.rotation.z=Math.PI/4,m.position.set(0,.03,-2),this.group.add(m)}buildFirewallPerimeter(){const e=this.arenaSize/2,t=1.4,n=new Nn({color:988970}),i=new Oe({color:62463}),r=new Oe({color:16711765});[{pos:[0,this.wallHeight/2,-e],size:[this.arenaSize,this.wallHeight,t]},{pos:[0,this.wallHeight/2,e],size:[this.arenaSize,this.wallHeight,t]},{pos:[-e,this.wallHeight/2,0],size:[t,this.wallHeight,this.arenaSize]},{pos:[e,this.wallHeight/2,0],size:[t,this.wallHeight,this.arenaSize]}].forEach((l,c)=>{const h=new Ye(l.size[0],l.size[1],l.size[2]),u=new J(h,n);u.position.set(l.pos[0],l.pos[1],l.pos[2]),this.group.add(u);const f=l.size[0]>l.size[2],m=new Ye(f?l.size[0]:.25,.2,f?.25:l.size[2]),g=new J(m,c%2===0?i:r);g.position.set(l.pos[0],2.2,l.pos[2]),this.group.add(g);const _=new J(m,c%2===0?i:r);_.position.set(l.pos[0],4.5,l.pos[2]),this.group.add(_),u.updateWorldMatrix(!0,!1),this.obstacles.push(new fn().setFromObject(u))}),[[-e,-e],[e,-e],[-e,e],[e,e]].forEach(([l,c])=>{const h=new Ye(2.2,this.wallHeight+1,2.2),u=new J(h,n);u.position.set(l,(this.wallHeight+1)/2,c),this.group.add(u);const f=new Dt(.35,.35,1.4,8),m=new J(f,i);m.position.set(l,this.wallHeight+1.2,c),this.group.add(m)})}buildHardwareCovers(){const e=[{x:-7,z:2},{x:-7,z:-2},{x:7,z:2},{x:7,z:-2}],t=new Nn({color:1976635}),n=new Oe({color:62463});e.forEach(m=>{const d=new Ye(.5,2.6,3.6),E=new J(d,t);E.position.set(m.x,2.6/2,m.z),this.group.add(E);const T=new Ye(.5*.9,.15,3.6*.98),S=new J(T,n);S.position.set(m.x,2.6+.08,m.z),this.group.add(S),E.updateWorldMatrix(!0,!1),this.obstacles.push(new fn().setFromObject(E))});const i=[{x:-4,z:-8,r:.8,h:2},{x:4,z:-8,r:.8,h:2},{x:-10,z:-8,r:.9,h:2.2},{x:10,z:-8,r:.9,h:2.2}],r=new Nn({color:165063}),a=new Nn({color:9741240});i.forEach(m=>{const g=new Dt(m.r,m.r,m.h,12),_=new J(g,r);_.position.set(m.x,m.h/2,m.z),this.group.add(_);const p=new Dt(m.r*.95,m.r*.95,.05,12),d=new J(p,a);d.position.set(m.x,m.h+.02,m.z),this.group.add(d),_.updateWorldMatrix(!0,!1),this.obstacles.push(new fn().setFromObject(_))});const o=new Ye(4.2,1.4,4.2),l=new Nn({color:3359061}),c=new J(o,l);c.position.set(0,.7,-2),this.group.add(c);const h=new _n(1.6,.08,6,20),u=new Oe({color:62463}),f=new J(h,u);f.rotation.x=Math.PI/2,f.position.set(0,1.45,-2),this.group.add(f),c.updateWorldMatrix(!0,!1),this.obstacles.push(new fn().setFromObject(c))}setupMotherboardLighting(){const e=new lh(3718648,399892,2.2);this.group.add(e);const t=new uh(16317180,1.6);t.position.set(12,26,12),this.group.add(t);const n=new Xi(62463,20,24,1.2);n.position.set(-6,3.5,0),this.group.add(n);const i=new Xi(16711765,25,24,1.2);i.position.set(6,3.5,-4),this.group.add(i)}setupSpawnPoints(){this.spawnPoints=[new w(-12,1.3,-12),new w(0,1.3,-13),new w(12,1.3,-12),new w(-12,1.3,-4),new w(12,1.3,-4),new w(-9,1.3,5),new w(9,1.3,5)]}cacheTargetMeshes(){this.targetMeshes=[],this.group.traverse(e=>{e.isMesh&&this.targetMeshes.push(e)})}resolveCollision(e,t=.5){const n=this.arenaSize/2-.7;e.x=Math.max(-n,Math.min(n,e.x)),e.z=Math.max(-n,Math.min(n,e.z));for(const i of this.obstacles){const r=i.clone().expandByScalar(t);if(e.y>=r.min.y&&e.y<=r.max.y&&e.x>=r.min.x&&e.x<=r.max.x&&e.z>=r.min.z&&e.z<=r.max.z){const a=e.x-r.min.x,o=r.max.x-e.x,l=e.z-r.min.z,c=r.max.z-e.z,h=Math.min(a,o,l,c);h===a?e.x=r.min.x:h===o?e.x=r.max.x:h===l?e.z=r.min.z:e.z=r.max.z}}return e}}class im{playerGroup;camera;position;velocity=new w;health=100;maxHealth=100;isDead=!1;moveSpeed=6.5;friction=9;eyeHeight=1.68;pitch=0;yaw=0;walkCycle=0;invulnTimer=0;isVR=!1;vrInput=null;inputManager;arena;weaponManager;onHealthChange;onDeath;onHurt;constructor(e,t,n,i){this.camera=e,this.inputManager=t,this.arena=n,this.weaponManager=i,this.playerGroup=new gt,this.playerGroup.position.copy(this.arena.playerStart),this.position=this.playerGroup.position,this.playerGroup.add(this.camera),this.camera.position.set(0,this.eyeHeight,0),this.updateCameraRotation(),this.weaponManager.attachTo(this.camera)}setVRMode(e,t){this.isVR=e,this.vrInput=t||null,this.weaponManager.setVRMode(e),e&&t?(t.rightGrip&&this.weaponManager.attachTo(t.rightGrip),t.onRightControllerReady=(n,i)=>{this.weaponManager.attachTo(i)},this.camera.position.set(0,0,0)):(this.weaponManager.attachTo(this.camera),this.camera.position.set(0,this.eyeHeight,0),this.updateCameraRotation())}takeDamage(e){this.isDead||this.invulnTimer>0||(this.invulnTimer=.5,this.health-=e,this.isVR&&this.vrInput&&(this.vrInput.triggerHaptic(.9,100,"right"),this.vrInput.triggerHaptic(.9,100,"left")),this.onHurt&&this.onHurt(),this.health<=0&&(this.health=0,this.isDead=!0,this.onDeath&&this.onDeath()),this.onHealthChange&&this.onHealthChange(this.health,this.maxHealth))}respawn(){this.health=this.maxHealth,this.isDead=!1,this.invulnTimer=1,this.playerGroup.position.copy(this.arena.playerStart),this.velocity.set(0,0,0),this.isVR||(this.pitch=0,this.yaw=0,this.updateCameraRotation()),this.onHealthChange&&this.onHealthChange(this.health,this.maxHealth)}update(e){if(this.invulnTimer>0&&(this.invulnTimer-=e),this.isDead)return;if(!this.isVR){const i=this.inputManager.getLookDelta();this.yaw-=i.x,this.pitch-=i.y;const r=Math.PI/2-.05;this.pitch=Math.max(-r,Math.min(r,this.pitch)),this.inputManager.resetLookDelta(),this.updateCameraRotation()}const t=this.inputManager.getMovement(),n=new w;if(this.isVR)n.set(t.x,0,t.z);else{const i=new w(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),r=new w(Math.cos(this.yaw),0,-Math.sin(this.yaw));n.addScaledVector(i,t.z),n.addScaledVector(r,t.x)}if(n.lengthSq()>.001?(n.normalize(),this.velocity.x+=n.x*this.moveSpeed*10*e,this.velocity.z+=n.z*this.moveSpeed*10*e,this.walkCycle+=e*12):this.walkCycle=0,this.velocity.x-=this.velocity.x*this.friction*e,this.velocity.z-=this.velocity.z*this.friction*e,this.position.x+=this.velocity.x*e,this.position.z+=this.velocity.z*e,this.arena.resolveCollision(this.position,.45),!this.isVR){const i=Math.sin(this.walkCycle)*.02;this.camera.position.set(0,this.eyeHeight+i,0)}}updateCameraRotation(){const e=new ut(0,0,0,"YXZ");e.x=this.pitch,e.y=this.yaw,this.camera.quaternion.setFromEuler(e)}getShootRay(){if(this.isVR){const n=this.weaponManager.getActiveWeapon();if(n)return n.getMuzzleRay();if(this.vrInput)return this.vrInput.getAimRay()}const e=new w(0,0,-1).applyQuaternion(this.camera.quaternion),t=new w;return this.camera.getWorldPosition(t),{origin:t,direction:e.normalize()}}}class Aa{baseConfig;config;currentAmmo;isReloading=!1;isAutomatic=!1;reloadTimer=0;fireCooldown=0;model;muzzleObject;onAmmoChange;onReloadStart;onReloadEnd;constructor(e){this.baseConfig={...e},this.config={...e},this.isAutomatic=!!e.isAutomatic,this.currentAmmo=e.magSize,this.model=new gt,this.muzzleObject=new _t,this.model.add(this.muzzleObject)}applyUpgrades(e,t,n,i){this.config.damage=Math.round(this.baseConfig.damage*e),this.config.fireRate=Math.max(.04,Number((this.baseConfig.fireRate*t).toFixed(3))),this.config.magSize=this.baseConfig.magSize+n,this.config.reloadTime=Math.max(.3,Number((this.baseConfig.reloadTime*i).toFixed(2))),this.currentAmmo=Math.min(this.currentAmmo,this.config.magSize),this.onAmmoChange&&this.onAmmoChange(this.currentAmmo,this.config.magSize)}canFire(){return!this.isReloading&&this.fireCooldown<=0&&this.currentAmmo>0}fire(){return this.canFire()?(this.currentAmmo--,this.fireCooldown=this.config.fireRate,this.playRecoil(),this.onAmmoChange&&this.onAmmoChange(this.currentAmmo,this.config.magSize),!0):!1}reload(){return this.isReloading||this.currentAmmo>=this.config.magSize?!1:(this.isReloading=!0,this.reloadTimer=this.config.reloadTime,this.onReloadStart&&this.onReloadStart(),!0)}update(e){this.fireCooldown>0&&(this.fireCooldown-=e),this.isReloading&&(this.reloadTimer-=e,this.reloadTimer<=0&&(this.isReloading=!1,this.currentAmmo=this.config.magSize,this.onAmmoChange&&this.onAmmoChange(this.currentAmmo,this.config.magSize),this.onReloadEnd&&this.onReloadEnd()))}getMuzzleWorldPosition(e){return this.muzzleObject.getWorldPosition(e)}getMuzzleRay(){this.model.updateMatrixWorld(!0);const e=new w;this.muzzleObject.getWorldPosition(e);const t=new en;this.muzzleObject.getWorldQuaternion(t);const n=new w(0,0,-1).applyQuaternion(t).normalize();return{origin:e,direction:n}}}class sm extends Aa{recoilOffset=new w;recoilRotation=new ut;desktopPosition=new w(.26,-.24,-.5);desktopRotation=new ut(0,0,0);vrPosition=new w(0,-.03,-.07);vrRotation=new ut(-Math.PI/5,0,0);isVR=!1;muzzleLight;muzzleFlashMesh;laserSight;laserDot;laserRaycaster=new Kn;flashTimer=0;constructor(){super({name:"ANTIVIRUS CANNON // V1",damage:40,headshotMultiplier:2.5,fireRate:.18,magSize:12,reloadTime:1.2}),this.muzzleLight=new Xi(62463,0,8),this.muzzleFlashMesh=this.buildMuzzleFlash(),this.laserSight=this.buildLaserSight(),this.laserDot=this.buildLaserDot(),this.buildModel(),this.model.position.copy(this.desktopPosition)}buildModel(){const e=new gt,t=new tt({color:1976635,roughness:.25,metalness:.8}),n=new tt({color:3359061,roughness:.3,metalness:.7}),i=new tt({color:62463,emissive:62463,emissiveIntensity:2.5,roughness:.1}),r=new Oe({color:62463,transparent:!0,opacity:.7}),a=new Ye(.048,.16,.08),o=new J(a,t);o.position.set(0,-.07,.05),o.rotation.x=.28,e.add(o);const l=new Ye(.024,.09,.03),c=new J(l,i);c.position.set(0,-.07,.05),c.rotation.x=.28,e.add(c);const h=new Ye(.065,.075,.28),u=new J(h,n);u.position.set(0,.02,-.05),e.add(u);const f=new Ye(.068,.015,.2),m=new J(f,i);m.position.set(0,.035,-.05),e.add(m);const g=new Dt(.02,.02,.16,16),_=new J(g,t);_.rotation.x=Math.PI/2,_.position.set(0,.02,-.18),e.add(_);const p=new Ye(.04,.03,.06),d=new J(p,t);d.position.set(0,.075,-.03),e.add(d);const E=new _n(.018,.003,8,16),T=new J(E,t);T.position.set(0,.105,-.03),e.add(T);const S=new Fs(.017,16),C=new J(S,r);C.position.set(0,.105,-.03),e.add(C);const A=new nn(.003,8,8),R=new J(A,i);R.position.set(0,.105,-.03),e.add(R),this.muzzleObject.position.set(0,.02,-.27),e.add(this.muzzleObject),this.muzzleLight.position.set(0,.02,-.27),e.add(this.muzzleLight),this.muzzleFlashMesh.position.set(0,.02,-.28),e.add(this.muzzleFlashMesh),e.add(this.laserSight),e.add(this.laserDot),this.model.add(e)}buildMuzzleFlash(){const e=new $n(.08,0),t=new Oe({color:62463,transparent:!0,opacity:.95}),n=new J(e,t);return n.visible=!1,n}buildLaserSight(){const e=new Float32Array([0,.02,-.27,0,.02,-30]),t=new pt,n=new zt(e,3);n.setUsage(ga),t.setAttribute("position",n);const i=new Qt({color:62463,transparent:!0,opacity:.65}),r=new Yi(t,i);return r.frustumCulled=!1,r.visible=!1,r}buildLaserDot(){const e=new nn(.016,8,8),t=new Oe({color:62463,transparent:!0,opacity:.95}),n=new J(e,t);return n.position.set(0,.02,-30),n.frustumCulled=!1,n.visible=!1,n}setVRMode(e){this.isVR=e,this.laserSight.visible=e,this.laserDot.visible=e,e?(this.model.position.copy(this.vrPosition),this.model.rotation.copy(this.vrRotation)):(this.model.position.copy(this.desktopPosition),this.model.rotation.copy(this.desktopRotation))}updateLaserAim(e){if(!this.isVR||!this.laserSight.visible)return;this.model.updateMatrixWorld(!0);const t=new w;this.muzzleObject.getWorldPosition(t);const n=new en;this.muzzleObject.getWorldQuaternion(n);const i=new w(0,0,-1).applyQuaternion(n).normalize();this.laserRaycaster.set(t,i),this.laserRaycaster.far=40;const r=this.laserRaycaster.intersectObjects(e,!1);let a=30;r.length>0&&(a=Math.max(.1,r[0].distance));const o=this.laserSight.geometry.attributes.position,l=o.array;l[5]=-.27-a,o.needsUpdate=!0,this.laserDot.position.set(0,.02,-.27-a)}playRecoil(){this.recoilOffset.z=.055,this.recoilOffset.y=.02,this.recoilRotation.x=.2,this.recoilRotation.y=(Math.random()-.5)*.025,this.muzzleLight.intensity=25,this.muzzleFlashMesh.visible=!0,this.muzzleFlashMesh.rotation.z=Math.random()*Math.PI,this.flashTimer=.05}update(e){super.update(e),this.flashTimer>0&&(this.flashTimer-=e,this.flashTimer<=0&&(this.muzzleLight.intensity=0,this.muzzleFlashMesh.visible=!1));const t=14;this.recoilOffset.lerp(new w(0,0,0),e*t),this.recoilRotation.x=Ei.lerp(this.recoilRotation.x,0,e*t),this.recoilRotation.y=Ei.lerp(this.recoilRotation.y,0,e*t);let n=0,i=0;if(this.isReloading){const o=1-this.reloadTimer/this.config.reloadTime,l=Math.sin(o*Math.PI);n=-.4*l,i=-.12*l}const r=this.isVR?this.vrPosition:this.desktopPosition,a=this.isVR?this.vrRotation:this.desktopRotation;this.model.position.x=r.x+this.recoilOffset.x,this.model.position.y=r.y+this.recoilOffset.y+i,this.model.position.z=r.z+this.recoilOffset.z,this.model.rotation.x=a.x+this.recoilRotation.x+n,this.model.rotation.y=a.y+this.recoilRotation.y,this.model.rotation.z=a.z}}class rm extends Aa{recoilOffset=new w;recoilRotation=new ut;desktopPosition=new w(.24,-.22,-.48);desktopRotation=new ut(0,0,0);vrPosition=new w(0,-.04,-.1);vrRotation=new ut(-Math.PI/5,0,0);isVR=!1;muzzleLight;muzzleFlashMesh;laserSight;laserDot;laserRaycaster=new Kn;flashTimer=0;constructor(){super({name:"SCATTER SHOTGUN // PURGE SPREAD",damage:22,headshotMultiplier:2,fireRate:.55,magSize:8,reloadTime:1.5,pelletCount:6,spreadAngle:.055,isAutomatic:!1}),this.muzzleLight=new Xi(16742144,0,10),this.muzzleFlashMesh=this.buildMuzzleFlash(),this.laserSight=this.buildLaserSight(),this.laserDot=this.buildLaserDot(),this.buildModel(),this.model.position.copy(this.desktopPosition)}buildModel(){const e=new gt,t=new tt({color:1580585,roughness:.35,metalness:.85}),n=new tt({color:3029069,roughness:.3,metalness:.75}),i=new tt({color:16755200,emissive:16746496,emissiveIntensity:2.8,roughness:.1}),r=new Ye(.052,.17,.1),a=new J(r,t);a.position.set(0,-.08,.08),a.rotation.x=.32,e.add(a);const o=new Ye(.03,.09,.05),l=new J(o,i);l.position.set(0,-.06,.08),l.rotation.x=.32,e.add(l);const c=new Ye(.085,.09,.32),h=new J(c,n);h.position.set(0,.02,-.06),e.add(h);const u=new Ye(.088,.02,.22),f=new J(u,i);f.position.set(0,.045,-.06),e.add(f);const m=new Dt(.022,.022,.26,16),g=new J(m,t);g.rotation.x=Math.PI/2,g.position.set(0,.035,-.26),e.add(g);const _=new Dt(.022,.022,.26,16),p=new J(_,t);p.rotation.x=Math.PI/2,p.position.set(0,-.015,-.26),e.add(p),this.muzzleObject.position.set(0,.02,-.39),e.add(this.muzzleObject),this.muzzleLight.position.set(0,.02,-.39),e.add(this.muzzleLight),this.muzzleFlashMesh.position.set(0,.02,-.4),e.add(this.muzzleFlashMesh),e.add(this.laserSight),e.add(this.laserDot),this.model.add(e)}buildMuzzleFlash(){const e=new $n(.14,0),t=new Oe({color:16755200,transparent:!0,opacity:.95}),n=new J(e,t);return n.visible=!1,n}buildLaserSight(){const e=new Float32Array([0,.02,-.39,0,.02,-30]),t=new pt,n=new zt(e,3);n.setUsage(ga),t.setAttribute("position",n);const i=new Qt({color:16755200,transparent:!0,opacity:.65}),r=new Yi(t,i);return r.frustumCulled=!1,r.visible=!1,r}buildLaserDot(){const e=new nn(.02,8,8),t=new Oe({color:16755200,transparent:!0,opacity:.95}),n=new J(e,t);return n.position.set(0,.02,-30),n.frustumCulled=!1,n.visible=!1,n}setVRMode(e){this.isVR=e,this.laserSight.visible=e,this.laserDot.visible=e,e?(this.model.position.copy(this.vrPosition),this.model.rotation.copy(this.vrRotation)):(this.model.position.copy(this.desktopPosition),this.model.rotation.copy(this.desktopRotation))}updateLaserAim(e){if(!this.isVR||!this.laserSight.visible)return;this.model.updateMatrixWorld(!0);const t=new w;this.muzzleObject.getWorldPosition(t);const n=new en;this.muzzleObject.getWorldQuaternion(n);const i=new w(0,0,-1).applyQuaternion(n).normalize();this.laserRaycaster.set(t,i),this.laserRaycaster.far=40;const r=this.laserRaycaster.intersectObjects(e,!1);let a=30;r.length>0&&(a=Math.max(.1,r[0].distance));const o=this.laserSight.geometry.attributes.position,l=o.array;l[5]=-.39-a,o.needsUpdate=!0,this.laserDot.position.set(0,.02,-.39-a)}playRecoil(){this.recoilOffset.z=.12,this.recoilOffset.y=.04,this.recoilRotation.x=.38,this.recoilRotation.y=(Math.random()-.5)*.04,this.muzzleLight.intensity=40,this.muzzleFlashMesh.visible=!0,this.muzzleFlashMesh.rotation.z=Math.random()*Math.PI,this.flashTimer=.07}update(e){super.update(e),this.flashTimer>0&&(this.flashTimer-=e,this.flashTimer<=0&&(this.muzzleLight.intensity=0,this.muzzleFlashMesh.visible=!1));const t=10;this.recoilOffset.lerp(new w(0,0,0),e*t),this.recoilRotation.x=Ei.lerp(this.recoilRotation.x,0,e*t),this.recoilRotation.y=Ei.lerp(this.recoilRotation.y,0,e*t);let n=0,i=0;if(this.isReloading){const o=1-this.reloadTimer/this.config.reloadTime,l=Math.sin(o*Math.PI);n=-.5*l,i=-.16*l}const r=this.isVR?this.vrPosition:this.desktopPosition,a=this.isVR?this.vrRotation:this.desktopRotation;this.model.position.x=r.x+this.recoilOffset.x,this.model.position.y=r.y+this.recoilOffset.y+i,this.model.position.z=r.z+this.recoilOffset.z,this.model.rotation.x=a.x+this.recoilRotation.x+n,this.model.rotation.y=a.y+this.recoilRotation.y,this.model.rotation.z=a.z}}class am extends Aa{recoilOffset=new w;recoilRotation=new ut;desktopPosition=new w(.22,-.21,-.44);desktopRotation=new ut(0,0,0);vrPosition=new w(0,-.025,-.06);vrRotation=new ut(-Math.PI/5,0,0);isVR=!1;muzzleLight;muzzleFlashMesh;laserSight;laserDot;laserRaycaster=new Kn;flashTimer=0;constructor(){super({name:"PLASMA SMG // RAPID DEFENDER",damage:22,headshotMultiplier:2.2,fireRate:.085,magSize:36,reloadTime:1.1,isAutomatic:!0}),this.muzzleLight=new Xi(14239471,0,8),this.muzzleFlashMesh=this.buildMuzzleFlash(),this.laserSight=this.buildLaserSight(),this.laserDot=this.buildLaserDot(),this.buildModel(),this.model.position.copy(this.desktopPosition)}buildModel(){const e=new gt,t=new tt({color:1120295,roughness:.3,metalness:.9}),n=new tt({color:2042167,roughness:.35,metalness:.8}),i=new tt({color:14239471,emissive:12592851,emissiveIntensity:2.8,roughness:.1}),r=new Ye(.042,.15,.07),a=new J(r,t);a.position.set(0,-.06,.03),a.rotation.x=.25,e.add(a);const o=new Ye(.032,.16,.05),l=new J(o,i);l.position.set(0,-.11,-.02),l.rotation.x=.15,e.add(l);const c=new Ye(.058,.07,.26),h=new J(c,n);h.position.set(0,.02,-.06),e.add(h);const u=new Ye(.062,.012,.22),f=new J(u,i);f.position.set(0,.045,-.06),e.add(f);const m=new Dt(.018,.018,.14,16),g=new J(m,t);g.rotation.x=Math.PI/2,g.position.set(0,.02,-.22),e.add(g),this.muzzleObject.position.set(0,.02,-.3),e.add(this.muzzleObject),this.muzzleLight.position.set(0,.02,-.3),e.add(this.muzzleLight),this.muzzleFlashMesh.position.set(0,.02,-.31),e.add(this.muzzleFlashMesh),e.add(this.laserSight),e.add(this.laserDot),this.model.add(e)}buildMuzzleFlash(){const e=new $n(.07,0),t=new Oe({color:14239471,transparent:!0,opacity:.95}),n=new J(e,t);return n.visible=!1,n}buildLaserSight(){const e=new Float32Array([0,.02,-.3,0,.02,-30]),t=new pt,n=new zt(e,3);n.setUsage(ga),t.setAttribute("position",n);const i=new Qt({color:14239471,transparent:!0,opacity:.65}),r=new Yi(t,i);return r.frustumCulled=!1,r.visible=!1,r}buildLaserDot(){const e=new nn(.016,8,8),t=new Oe({color:14239471,transparent:!0,opacity:.95}),n=new J(e,t);return n.position.set(0,.02,-30),n.frustumCulled=!1,n.visible=!1,n}setVRMode(e){this.isVR=e,this.laserSight.visible=e,this.laserDot.visible=e,e?(this.model.position.copy(this.vrPosition),this.model.rotation.copy(this.vrRotation)):(this.model.position.copy(this.desktopPosition),this.model.rotation.copy(this.desktopRotation))}updateLaserAim(e){if(!this.isVR||!this.laserSight.visible)return;this.model.updateMatrixWorld(!0);const t=new w;this.muzzleObject.getWorldPosition(t);const n=new en;this.muzzleObject.getWorldQuaternion(n);const i=new w(0,0,-1).applyQuaternion(n).normalize();this.laserRaycaster.set(t,i),this.laserRaycaster.far=40;const r=this.laserRaycaster.intersectObjects(e,!1);let a=30;r.length>0&&(a=Math.max(.1,r[0].distance));const o=this.laserSight.geometry.attributes.position,l=o.array;l[5]=-.3-a,o.needsUpdate=!0,this.laserDot.position.set(0,.02,-.3-a)}playRecoil(){this.recoilOffset.z=.035,this.recoilOffset.y=.012,this.recoilRotation.x=.12,this.recoilRotation.y=(Math.random()-.5)*.02,this.muzzleLight.intensity=20,this.muzzleFlashMesh.visible=!0,this.muzzleFlashMesh.rotation.z=Math.random()*Math.PI,this.flashTimer=.04}update(e){super.update(e),this.flashTimer>0&&(this.flashTimer-=e,this.flashTimer<=0&&(this.muzzleLight.intensity=0,this.muzzleFlashMesh.visible=!1));const t=16;this.recoilOffset.lerp(new w(0,0,0),e*t),this.recoilRotation.x=Ei.lerp(this.recoilRotation.x,0,e*t),this.recoilRotation.y=Ei.lerp(this.recoilRotation.y,0,e*t);let n=0,i=0;if(this.isReloading){const o=1-this.reloadTimer/this.config.reloadTime,l=Math.sin(o*Math.PI);n=-.35*l,i=-.1*l}const r=this.isVR?this.vrPosition:this.desktopPosition,a=this.isVR?this.vrRotation:this.desktopRotation;this.model.position.x=r.x+this.recoilOffset.x,this.model.position.y=r.y+this.recoilOffset.y+i,this.model.position.z=r.z+this.recoilOffset.z,this.model.rotation.x=a.x+this.recoilRotation.x+n,this.model.rotation.y=a.y+this.recoilRotation.y,this.model.rotation.z=a.z}}class om{activeWeapon;weapons=new Map;weaponParent=null;isVR=!1;onAmmoChange;onReloadStart;onReloadEnd;onWeaponChanged;constructor(){const e=new sm,t=new rm,n=new am;this.weapons.set("pistol",e),this.weapons.set("shotgun",t),this.weapons.set("smg",n),this.activeWeapon=e,this.bindWeaponCallbacks(this.activeWeapon)}bindWeaponCallbacks(e){e.onAmmoChange=(t,n)=>this.onAmmoChange?.(t,n),e.onReloadStart=()=>this.onReloadStart?.(),e.onReloadEnd=()=>this.onReloadEnd?.()}attachTo(e){this.weaponParent&&this.activeWeapon.model.parent===this.weaponParent&&this.weaponParent.remove(this.activeWeapon.model),this.weaponParent=e,e.add(this.activeWeapon.model)}setVRMode(e){this.isVR=e,this.weapons.forEach(t=>t.setVRMode(e))}switchWeapon(e){const t=this.weapons.get(e);!t||t===this.activeWeapon||(this.weaponParent&&this.activeWeapon.model.parent===this.weaponParent&&this.weaponParent.remove(this.activeWeapon.model),this.activeWeapon=t,this.activeWeapon.setVRMode(this.isVR),this.bindWeaponCallbacks(this.activeWeapon),this.weaponParent&&this.weaponParent.add(this.activeWeapon.model),this.onAmmoChange?.(this.activeWeapon.currentAmmo,this.activeWeapon.config.magSize),this.onWeaponChanged?.(this.activeWeapon))}applyUpgradesToAll(e,t,n,i){this.weapons.forEach(r=>{r.applyUpgrades(e,t,n,i)})}getActiveWeapon(){return this.activeWeapon}getWeapon(e){return this.weapons.get(e)}update(e){this.activeWeapon.update(e)}tryFire(){return this.activeWeapon.fire()}reload(){return this.activeWeapon.reload()}}var Et=(s=>(s.IDLE="IDLE",s.CHASE="CHASE",s.ATTACK="ATTACK",s.HURT="HURT",s.DEAD="DEAD",s))(Et||{});class Hs{config;health;state="CHASE";isDead=!1;enemyType="virus";model;hitboxes=[];attackTimer=0;hurtTimer=0;targetPosition=new w;onTakeDamage;onDie;onAttackPlayer;constructor(e){this.config=e,this.health=e.maxHealth,this.model=new gt}getPosition(){return this.model.position}takeDamage(e,t){this.isDead||(this.health-=e,this.hurtTimer=.1,this.state="HURT",this.onTakeDamage&&this.onTakeDamage(e,t),this.health<=0&&(this.health=0,this.die(t)))}die(e){this.isDead||(this.isDead=!0,this.state="DEAD",this.onDie&&this.onDie(this,e))}}class lm extends Hs{ringMesh1;ringMesh2;coreMesh;headMesh;bodyMesh;normalCoreColor=16711765;hurtFlashColor=16777215;animTimer=0;baseHeight=1.6;spawnGraceTimer=1.5;constructor(e){super({name:"Virus Recon Drone // C-01",maxHealth:80,speed:2.4,damage:10,attackRange:2.2,attackCooldown:1.4}),this.model.position.copy(e),this.baseHeight=Math.max(1.5,e.y);const t=new tt({color:1976635,roughness:.3,metalness:.8}),n=new tt({color:this.normalCoreColor,emissive:this.normalCoreColor,emissiveIntensity:2,roughness:.2}),i=new tt({color:16755200,emissive:16755200,emissiveIntensity:3,roughness:.1}),r=new Oe({color:16711765,wireframe:!0}),a=new Dt(.45,.25,.55,6);this.bodyMesh=new J(a,t),this.bodyMesh.castShadow=!0,this.model.add(this.bodyMesh),this.bodyMesh.userData={isHitbox:!0,isHeadshot:!1,enemy:this},this.hitboxes.push(this.bodyMesh);const o=new Bs(.3,1);this.coreMesh=new J(o,n),this.model.add(this.coreMesh);const l=new _n(.7,.025,8,28);this.ringMesh1=new J(l,r),this.ringMesh1.rotation.x=Math.PI/3,this.model.add(this.ringMesh1);const c=new _n(.85,.02,8,28);this.ringMesh2=new J(c,r),this.ringMesh2.rotation.x=-Math.PI/3,this.model.add(this.ringMesh2);const h=new nn(.24,16,16);this.headMesh=new J(h,i),this.headMesh.position.set(0,.55,0),this.headMesh.castShadow=!0,this.model.add(this.headMesh),this.headMesh.userData={isHitbox:!0,isHeadshot:!0,enemy:this},this.hitboxes.push(this.headMesh);for(let u=0;u<3;u++){const f=u*Math.PI*2/3,m=new Ea(.08,.35,4),g=new J(m,t);g.position.set(Math.cos(f)*.35,-.38,Math.sin(f)*.35),g.rotation.x=Math.PI,this.model.add(g)}}update(e,t){if(this.isDead)return;this.animTimer+=e,this.spawnGraceTimer>0&&(this.spawnGraceTimer-=e),this.ringMesh1.rotation.z+=e*2.2,this.ringMesh1.rotation.y+=e*1.5,this.ringMesh2.rotation.z-=e*1.8,this.ringMesh2.rotation.x+=e*1.2;const n=Math.sin(this.animTimer*3)*.15;this.model.position.y=this.baseHeight+n,this.hurtTimer>0&&(this.hurtTimer-=e,this.coreMesh.material.emissive.setHex(this.hurtFlashColor),this.headMesh.material.emissive.setHex(this.hurtFlashColor),this.hurtTimer<=0&&(this.coreMesh.material.emissive.setHex(this.normalCoreColor),this.headMesh.material.emissive.setHex(16755200),this.state===Et.HURT&&(this.state=Et.CHASE))),this.attackTimer>0&&(this.attackTimer-=e);const i=new w(t.x-this.model.position.x,0,t.z-this.model.position.z),r=i.length();r>.1&&this.model.lookAt(t.x,this.model.position.y,t.z),!(this.spawnGraceTimer>0)&&(r>this.config.attackRange?(this.state=Et.CHASE,i.normalize(),this.model.position.x+=i.x*this.config.speed*e,this.model.position.z+=i.z*this.config.speed*e):(this.state=Et.ATTACK,this.attackTimer<=0&&(this.attackTimer=this.config.attackCooldown,this.onAttackPlayer&&this.onAttackPlayer(this.config.damage))))}}class cm extends Hs{bodyNodes=[];headMesh;animTimer=0;wavePhase=Math.random()*Math.PI*2;baseHeight=.85;constructor(e){super({name:"Worm.Win32.Replicator // W-02",maxHealth:50,speed:3.8,damage:8,attackRange:1.8,attackCooldown:1}),this.model.position.copy(e),this.baseHeight=.85,this.enemyType="worm";const t=new tt({color:12592851,emissive:10624175,emissiveIntensity:2.2,roughness:.25,metalness:.6}),n=new tt({color:16711807,emissive:16711807,emissiveIntensity:3,roughness:.1}),i=new Oe({color:16020150,wireframe:!0}),r=new nn(.26,16,16);this.headMesh=new J(r,n),this.headMesh.position.set(0,0,0),this.headMesh.castShadow=!0,this.model.add(this.headMesh),this.headMesh.userData={isHitbox:!0,isHeadshot:!0,enemy:this},this.hitboxes.push(this.headMesh);const a=4;for(let o=0;o<a;o++){const l=1-o*.14,c=new nn(.22*l,12,12),h=new J(c,t);h.position.set(0,0,(o+1)*.35),h.castShadow=!0,this.model.add(h),this.bodyNodes.push(h);const u=new _n(.24*l,.02,6,16),f=new J(u,i);f.position.set(0,0,(o+.5)*.35),this.model.add(f),h.userData={isHitbox:!0,isHeadshot:!1,enemy:this},this.hitboxes.push(h)}}update(e,t){if(this.isDead)return;this.animTimer+=e,this.wavePhase+=e*8,this.bodyNodes.forEach((r,a)=>{const o=Math.sin(this.wavePhase-a*.8)*.15;r.position.x=o,r.position.y=Math.cos(this.wavePhase-a*.6)*.08}),this.model.position.y=this.baseHeight+Math.sin(this.animTimer*4)*.1,this.hurtTimer>0&&(this.hurtTimer-=e,this.headMesh.material.emissive.setHex(16777215),this.hurtTimer<=0&&(this.headMesh.material.emissive.setHex(16711807),this.state===Et.HURT&&(this.state=Et.CHASE))),this.attackTimer>0&&(this.attackTimer-=e);const n=new w(t.x-this.model.position.x,0,t.z-this.model.position.z),i=n.length();if(i>.1&&this.model.lookAt(t.x,this.model.position.y,t.z),i>this.config.attackRange){this.state=Et.CHASE,n.normalize();const r=new w(-n.z,0,n.x),a=Math.sin(this.animTimer*6.5)*1.8;this.model.position.x+=(n.x*this.config.speed+r.x*a)*e,this.model.position.z+=(n.z*this.config.speed+r.z*a)*e}else this.state=Et.ATTACK,this.attackTimer<=0&&(this.attackTimer=this.config.attackCooldown,this.onAttackPlayer&&this.onAttackPlayer(this.config.damage))}}class hm extends Hs{shieldMesh;coreMesh;bodyMesh;animTimer=0;constructor(e){super({name:"Trojan.Dropper.Carrier // T-03",maxHealth:180,speed:1.6,damage:18,attackRange:2.2,attackCooldown:1.6}),this.model.position.copy(e),this.enemyType="trojan";const t=new tt({color:1976635,roughness:.35,metalness:.85}),n=new tt({color:1096065,emissive:1096065,emissiveIntensity:2.5,roughness:.2}),i=new Oe({color:3718648,transparent:!0,opacity:.55,side:ot}),r=new Oe({color:165063,wireframe:!0}),a=new Ye(1.1,1.2,.9);this.bodyMesh=new J(a,t),this.bodyMesh.position.set(0,.8,0),this.bodyMesh.castShadow=!0,this.model.add(this.bodyMesh),this.bodyMesh.userData={isHitbox:!0,isHeadshot:!1,isShield:!1,enemy:this},this.hitboxes.push(this.bodyMesh);const o=new xt(1.4,1.5);this.shieldMesh=new J(o,i),this.shieldMesh.position.set(0,.8,-.55),this.model.add(this.shieldMesh);const l=new J(o,r);l.position.set(0,.8,-.56),this.model.add(l),this.shieldMesh.userData={isHitbox:!0,isHeadshot:!1,isShield:!0,enemy:this},this.hitboxes.push(this.shieldMesh);const c=new Bs(.3,1);this.coreMesh=new J(c,n),this.coreMesh.position.set(0,1.1,.45),this.model.add(this.coreMesh),this.coreMesh.userData={isHitbox:!0,isHeadshot:!0,isShield:!1,enemy:this},this.hitboxes.push(this.coreMesh);const h=new Dt(.12,.12,.25,8),u=new Oe({color:3718648}),f=new J(h,u);f.position.set(0,1.5,0),this.model.add(f)}update(e,t){if(this.isDead)return;this.animTimer+=e;const n=.5+Math.sin(this.animTimer*4)*.25;this.shieldMesh.material.opacity=.45+n*.2,this.hurtTimer>0&&(this.hurtTimer-=e,this.coreMesh.material.emissive.setHex(16777215),this.hurtTimer<=0&&(this.coreMesh.material.emissive.setHex(1096065),this.state===Et.HURT&&(this.state=Et.CHASE))),this.attackTimer>0&&(this.attackTimer-=e);const i=new w(t.x-this.model.position.x,0,t.z-this.model.position.z),r=i.length();r>.1&&this.model.lookAt(t.x,this.model.position.y,t.z),r>this.config.attackRange?(this.state=Et.CHASE,i.normalize(),this.model.position.x+=i.x*this.config.speed*e,this.model.position.z+=i.z*this.config.speed*e):(this.state=Et.ATTACK,this.attackTimer<=0&&(this.attackTimer=this.config.attackCooldown,this.onAttackPlayer&&this.onAttackPlayer(this.config.damage)))}}class Vo extends Hs{lockRings=[];coreMesh;eyeMesh;bodyMesh;cubes=[];animTimer=0;baseHeight=2.4;constructor(e){super({name:"RANSOMWARE.LOCKBIT.CORE // BOSS",maxHealth:550,speed:1.3,damage:22,attackRange:2.8,attackCooldown:1.8}),this.model.position.copy(e),this.model.position.y=this.baseHeight,this.enemyType="ransomware";const t=new tt({color:988970,roughness:.2,metalness:.95}),n=new tt({color:16711731,emissive:16711731,emissiveIntensity:3.5,roughness:.1}),i=new tt({color:16771584,emissive:16771584,emissiveIntensity:4,roughness:.1}),r=new Oe({color:16711765,wireframe:!0}),a=new $n(1.2,0);this.bodyMesh=new J(a,t),this.bodyMesh.scale.set(1.1,1.8,1.1),this.bodyMesh.castShadow=!0,this.model.add(this.bodyMesh),this.bodyMesh.userData={isHitbox:!0,isHeadshot:!1,isShield:!1,enemy:this},this.hitboxes.push(this.bodyMesh);const o=new Ta(.7,1);this.coreMesh=new J(o,n),this.model.add(this.coreMesh);const l=new nn(.35,16,16);this.eyeMesh=new J(l,i),this.eyeMesh.position.set(0,.45,-.7),this.model.add(this.eyeMesh),this.eyeMesh.userData={isHitbox:!0,isHeadshot:!0,isShield:!1,enemy:this},this.hitboxes.push(this.eyeMesh);for(let c=0;c<2;c++){const h=new _n(1.8+c*.4,.04,8,32),u=new J(h,r);u.rotation.x=Math.PI/(2.5+c*.5),this.model.add(u),this.lockRings.push(u)}for(let c=0;c<6;c++){const h=new Ye(.25,.25,.25),u=new J(h,n);this.model.add(u),this.cubes.push(u)}}update(e,t){if(this.isDead)return;this.animTimer+=e,this.lockRings.forEach((r,a)=>{r.rotation.z+=e*(a===0?1.5:-1.2),r.rotation.y+=e*.8}),this.bodyMesh.rotation.y+=e*.5,this.cubes.forEach((r,a)=>{const o=this.animTimer*2+a*Math.PI*2/6,l=2.2;r.position.set(Math.cos(o)*l,Math.sin(this.animTimer*3+a)*.4,Math.sin(o)*l),r.rotation.x+=e*2,r.rotation.y+=e*2}),this.model.position.y=this.baseHeight+Math.sin(this.animTimer*2)*.25,this.hurtTimer>0&&(this.hurtTimer-=e,this.coreMesh.material.emissive.setHex(16777215),this.eyeMesh.material.emissive.setHex(16777215),this.hurtTimer<=0&&(this.coreMesh.material.emissive.setHex(16711731),this.eyeMesh.material.emissive.setHex(16771584),this.state===Et.HURT&&(this.state=Et.CHASE))),this.attackTimer>0&&(this.attackTimer-=e);const n=new w(t.x-this.model.position.x,0,t.z-this.model.position.z),i=n.length();i>.1&&this.model.lookAt(t.x,this.model.position.y,t.z),i>this.config.attackRange?(this.state=Et.CHASE,n.normalize(),this.model.position.x+=n.x*this.config.speed*e,this.model.position.z+=n.z*this.config.speed*e):(this.state=Et.ATTACK,this.attackTimer<=0&&(this.attackTimer=this.config.attackCooldown,this.onAttackPlayer&&this.onAttackPlayer(this.config.damage)))}}class um{scene;particleSystem;audioManager;enemies=[];activeBoss=null;onEnemyKilled;onPlayerDamaged;onBossHealthUpdate;onBossKilled;constructor(e,t,n){this.scene=e,this.particleSystem=t,this.audioManager=n}spawnEnemy(e,t){let n;switch(e){case"worm":n=new cm(t);break;case"trojan":n=new hm(t);break;case"ransomware":const i=new Vo(t);this.activeBoss=i,this.audioManager.playBossSpawn(),n=i;break;case"virus":default:n=new lm(t);break}return n.onTakeDamage=(i,r)=>{n===this.activeBoss&&this.onBossHealthUpdate&&this.onBossHealthUpdate(n.health,n.config.maxHealth)},n.onDie=(i,r)=>{this.handleEnemyDeath(i,r)},n.onAttackPlayer=i=>{this.onPlayerDamaged&&this.onPlayerDamaged(i)},this.enemies.push(n),this.scene.add(n.model),n}spawnDrone(e){return this.spawnEnemy("virus",e)}handleEnemyDeath(e,t){const n=e instanceof Vo;this.particleSystem.emitEnemyDisintegration(e.getPosition(),n),this.audioManager.playEnemyDeath(),this.scene.remove(e.model),n&&(this.activeBoss=null,this.onBossKilled&&this.onBossKilled()),this.onEnemyKilled&&this.onEnemyKilled(e,t);const i=this.enemies.indexOf(e);i!==-1&&this.enemies.splice(i,1)}update(e,t){for(let n=this.enemies.length-1;n>=0;n--){const i=this.enemies[n];i.isDead||i.update(e,t)}}getAllHitboxes(){const e=[];for(const t of this.enemies)t.isDead||e.push(...t.hitboxes);return e}getActiveCount(){return this.enemies.filter(e=>!e.isDead).length}clearAll(){for(const e of this.enemies)this.scene.remove(e.model);this.enemies=[],this.activeBoss=null}}class dm{raycaster;enemyManager;particleSystem;audioManager;scoreManager;arena;targetRange;onHitRegistered;constructor(e,t,n,i,r){this.raycaster=new Kn,this.enemyManager=e,this.particleSystem=t,this.audioManager=n,this.scoreManager=i,this.arena=r}processShot(e,t,n){this.scoreManager.registerShot();const i=new w;n.getMuzzleWorldPosition(i),this.targetRange&&this.targetRange.isEnabled&&this.targetRange.registerShot();const r=n.config.pelletCount??1,a=n.config.spreadAngle??.055;for(let o=0;o<r;o++){const l=t.clone();r>1&&(l.x+=(Math.random()-.5)*a*2,l.y+=(Math.random()-.5)*a*2,l.z+=(Math.random()-.5)*a*2,l.normalize()),this.processSingleRay(e,l,n,i)}}processSingleRay(e,t,n,i){this.raycaster.set(e,t),this.raycaster.far=100;const r=this.enemyManager.getAllHitboxes(),a=this.targetRange?this.targetRange.getAllHitboxes():[],o=[...r,...a,...this.arena.targetMeshes],l=this.raycaster.intersectObjects(o,!1);if(l.length>0){const c=l[0],h=c.object,u=c.point,f=c.face?c.face.normal.clone().applyQuaternion(h.getWorldQuaternion(new en)):new w(0,1,0);if(h.userData&&h.userData.isDiana){const m=h.userData.diana,g=h.userData.zone,_=m.registerHit(g,u);this.targetRange&&this.targetRange.registerDianaHit(_),_.isHeadshot?(this.audioManager.playHit(!0),this.particleSystem.emitImpactSparks(u,f,!0,!0),this.particleSystem.createBulletTracer(i,u,!0)):(this.audioManager.playHit(!1),this.particleSystem.emitImpactSparks(u,f,!0,!1),this.particleSystem.createBulletTracer(i,u,!1)),this.scoreManager.registerHit(),this.onHitRegistered&&this.onHitRegistered(_.isHeadshot,!1);return}if(h.userData&&h.userData.isReturnToSurvivalButton){this.targetRange&&this.targetRange.checkReturnButtonClick(h),this.particleSystem.emitImpactSparks(u,f,!1,!1),this.particleSystem.createBulletTracer(i,u,!1);return}if(h.userData&&h.userData.isHitbox){const m=!!h.userData.isHeadshot,g=!!h.userData.isShield,_=h.userData.enemy;let p=n.config.damage;g?(p*=.2,this.audioManager.playShieldDeflect(),this.particleSystem.emitImpactSparks(u,f,!1,!1),this.particleSystem.createBulletTracer(i,u,!1)):(m&&(p*=n.config.headshotMultiplier),this.audioManager.playHit(m),this.particleSystem.emitImpactSparks(u,f,!0,m),this.particleSystem.createBulletTracer(i,u,m)),_.takeDamage(p,m),this.scoreManager.registerHit(),this.onHitRegistered&&this.onHitRegistered(m,g)}else this.particleSystem.emitImpactSparks(u,f,!1,!1),this.particleSystem.createBulletTracer(i,u,!1)}else{const c=e.clone().add(t.clone().multiplyScalar(50));this.particleSystem.createBulletTracer(i,c,!1)}}}class fm{group;particles=[];tracers=[];sparkGeo;sparkMatCyan;sparkMatCrimson;sparkMatOrange;constructor(){this.group=new gt,this.sparkGeo=new Ye(.06,.06,.06),this.sparkMatCyan=new Oe({color:62463}),this.sparkMatCrimson=new Oe({color:16711765}),this.sparkMatOrange=new Oe({color:16755200})}createBulletTracer(e,t,n=!1){const i=[e.clone(),t.clone()],r=new pt().setFromPoints(i),a=new Qt({color:n?16711765:62463,linewidth:2,transparent:!0,opacity:.95}),o=new Yi(r,a);o.frustumCulled=!1,this.group.add(o),this.tracers.push({line:o,life:.08,maxLife:.08})}emitImpactSparks(e,t,n=!1,i=!1){const r=i?16:n?10:6,a=i?this.sparkMatCrimson:n?this.sparkMatOrange:this.sparkMatCyan;for(let o=0;o<r;o++){const l=new J(this.sparkGeo,a);l.position.copy(e);const c=t.clone().multiplyScalar(2+Math.random()*3);c.x+=(Math.random()-.5)*4,c.y+=(Math.random()-.5)*4,c.z+=(Math.random()-.5)*4,this.group.add(l),this.particles.push({mesh:l,velocity:c,life:.25+Math.random()*.15,maxLife:.4,scaleDown:!0})}}emitEnemyDisintegration(e,t=!1){const n=t?50:25;for(let i=0;i<n;i++){const a=Math.random()>.4?this.sparkMatCrimson:this.sparkMatCyan,o=.08+Math.random()*.1,l=new Ye(o,o,o),c=new J(l,a);c.position.set(e.x+(Math.random()-.5)*.6,e.y+(Math.random()-.5)*.6,e.z+(Math.random()-.5)*.6);const h=new w((Math.random()-.5)*7,Math.random()*5+1.5,(Math.random()-.5)*7);this.group.add(c),this.particles.push({mesh:c,velocity:h,life:.5+Math.random()*.4,maxLife:.9,scaleDown:!0})}}update(e){for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t];if(n.life-=e,n.life<=0){this.group.remove(n.mesh),n.mesh.geometry.dispose(),this.particles.splice(t,1);continue}if(n.velocity.y-=9.8*e,n.mesh.position.addScaledVector(n.velocity,e),n.scaleDown){const i=n.life/n.maxLife;n.mesh.scale.setScalar(Math.max(.01,i))}}for(let t=this.tracers.length-1;t>=0;t--){const n=this.tracers[t];if(n.life-=e,n.life<=0)this.group.remove(n.line),n.line.geometry.dispose(),n.line.material.dispose(),this.tracers.splice(t,1);else{const i=n.line.material;i.opacity=n.life/n.maxLife}}}}class pm{score=0;kills=0;headshots=0;combo=1;maxCombo=1;comboTimer=0;comboDuration=3.5;shotsFired=0;shotsHit=0;onScoreUpdate;onComboUpdate;onCombatAlert;registerShot(){this.shotsFired++}registerHit(){this.shotsHit++}registerKill(e){this.kills++,this.comboTimer=this.comboDuration,this.combo=Math.min(4,Number((this.combo+.2).toFixed(1))),this.combo>this.maxCombo&&(this.maxCombo=this.combo);const n=Math.round((e?250:100)*this.combo);this.score+=n,e&&this.headshots++,this.onScoreUpdate&&this.onScoreUpdate(this.score),this.onComboUpdate&&this.onComboUpdate(this.combo),this.onCombatAlert&&(e?this.onCombatAlert(`HEADSHOT CRÍTICO +${n}`,"headshot"):this.onCombatAlert(`AMENAZA PURGADA +${n}`,"kill"))}update(e){this.combo>1&&(this.comboTimer-=e,this.comboTimer<=0&&(this.combo=1,this.onComboUpdate&&this.onComboUpdate(this.combo)))}getStats(){const e=this.shotsFired>0?Math.round(this.shotsHit/this.shotsFired*100):0;return{score:this.score,kills:this.kills,headshots:this.headshots,combo:this.combo,maxCombo:this.maxCombo,shotsFired:this.shotsFired,shotsHit:this.shotsHit,accuracy:e}}reset(){this.score=0,this.kills=0,this.headshots=0,this.combo=1,this.maxCombo=1,this.comboTimer=0,this.shotsFired=0,this.shotsHit=0,this.onScoreUpdate&&this.onScoreUpdate(0),this.onComboUpdate&&this.onComboUpdate(1)}}class mm{enemyManager;arena;audioManager;scoreManager;player;uiManager;currentPhaseIndex=0;isInStore=!1;onOpenStore;onEnemyKilledCallback;isIntermission=!0;intermissionTimer=3;spawnQueue=[];spawnTimer=0;spawnInterval=.55;totalEnemiesInPhase=0;enemiesDefeatedInPhase=0;phases=[{phaseNumber:1,sectorName:"L1/L2 CACHE // DETECCIÓN INICIAL",threatLevel:"NIVEL 1: BAJO",enemies:[{type:"virus",count:4}],clearBonusHealth:30,clearBonusScore:500},{phaseNumber:2,sectorName:"MEMORY BUS // BANCOS DE RAM",threatLevel:"NIVEL 2: MODERADO",enemies:[{type:"virus",count:5},{type:"worm",count:3}],clearBonusHealth:30,clearBonusScore:800},{phaseNumber:3,sectorName:"FILE SYSTEM CLUSTERS // ALMACENAMIENTO",threatLevel:"NIVEL 3: ELEVADO",enemies:[{type:"virus",count:6},{type:"worm",count:3},{type:"trojan",count:2}],clearBonusHealth:35,clearBonusScore:1200},{phaseNumber:4,sectorName:"KERNEL OVERLOAD // NÚCLEO DEL SO",threatLevel:"NIVEL 4: CRÍTICO",enemies:[{type:"virus",count:8},{type:"worm",count:5},{type:"trojan",count:2}],clearBonusHealth:40,clearBonusScore:1800},{phaseNumber:5,sectorName:"SYSTEM CORE // RANSOMWARE LOCKDOWN",threatLevel:"NIVEL 5: ALERTA ROJA",enemies:[{type:"ransomware",count:1},{type:"virus",count:4},{type:"worm",count:2}],clearBonusHealth:50,clearBonusScore:3e3}];constructor(e,t,n,i,r,a){this.enemyManager=e,this.arena=t,this.audioManager=n,this.scoreManager=i,this.player=r,this.uiManager=a,this.enemyManager.onEnemyKilled=(o,l)=>{this.scoreManager.registerKill(l),this.enemiesDefeatedInPhase++,this.updateHudStatus(),this.onEnemyKilledCallback?.(o,l)}}start(){this.currentPhaseIndex=0,this.isIntermission=!0,this.intermissionTimer=2.5,this.preparePhase(this.currentPhaseIndex)}reset(){this.enemyManager.clearAll(),this.spawnQueue=[],this.start()}stop(){this.spawnQueue=[],this.enemyManager.clearAll()}restartCurrentPhase(){this.enemyManager.clearAll(),this.spawnQueue=[],this.isIntermission=!0,this.intermissionTimer=1.5,this.preparePhase(this.currentPhaseIndex)}preparePhase(e){let t;if(e<this.phases.length)t=this.phases[e];else{const n=e+1;t={phaseNumber:n,sectorName:`SECTOR PROFUNDO // NIVEL DE INFECCIÓN ${n}`,threatLevel:"NIVEL OMEGA: INVASIÓN MASIVA",enemies:[{type:"virus",count:6+n},{type:"worm",count:4+Math.floor(n/2)},{type:"trojan",count:2+Math.floor(n/3)}],clearBonusHealth:35,clearBonusScore:2e3}}this.spawnQueue=[],this.totalEnemiesInPhase=0,this.enemiesDefeatedInPhase=0,t.enemies.forEach(n=>{for(let i=0;i<n.count;i++)this.spawnQueue.push(n.type),this.totalEnemiesInPhase++}),this.shuffleArray(this.spawnQueue),this.isIntermission=!0,this.intermissionTimer=3.5,this.uiManager.showCombatAlert(`FASE ${t.phaseNumber}: ${t.sectorName}`,"headshot"),this.updateHudStatus()}update(e){if(!this.isInStore){if(this.isIntermission){this.intermissionTimer-=e;const t=Math.ceil(this.intermissionTimer);this.uiManager.updateStatus(`FASE ${this.currentPhaseIndex+1} // INICIANDO EN ${Math.max(1,t)}s`),this.intermissionTimer<=0&&(this.isIntermission=!1,this.spawnTimer=0,this.uiManager.showCombatAlert("¡AMENAZAS DETECTADAS! ELIMINA EL MALWARE","kill"),this.updateHudStatus());return}if(this.spawnQueue.length>0&&(this.spawnTimer-=e,this.spawnTimer<=0)){this.spawnTimer=this.spawnInterval;const t=this.spawnQueue.shift();this.spawnEnemyAtRandomPoint(t),this.updateHudStatus()}this.spawnQueue.length===0&&this.enemyManager.getActiveCount()===0&&this.completePhase()}}completePhase(){const e=this.getCurrentPhaseConfig(),t=this.player.health;this.player.health=Math.min(this.player.maxHealth,this.player.health+e.clearBonusHealth);const n=Math.round(this.player.health-t);if(this.player.onHealthChange?.(this.player.health,this.player.maxHealth),this.scoreManager.registerKill(!1),this.audioManager.playSectorCleared(),this.uiManager.showCombatAlert(`¡SECTOR PURGADO! +${n}% REPARACIÓN // +${e.clearBonusScore} PTS`,"combo"),(this.currentPhaseIndex+1)%3===0&&this.onOpenStore){this.isInStore=!0,this.onOpenStore();return}this.currentPhaseIndex++,this.preparePhase(this.currentPhaseIndex)}continueAfterStore(){this.isInStore=!1,this.currentPhaseIndex++,this.preparePhase(this.currentPhaseIndex)}spawnEnemyAtRandomPoint(e){const t=this.arena.spawnPoints,n=t[Math.floor(Math.random()*t.length)].clone();n.x+=(Math.random()-.5)*1.5,n.z+=(Math.random()-.5)*1.5;const i=this.enemyManager.spawnEnemy(e,n),r=Math.floor(this.currentPhaseIndex/3);if(r>0){const a=1+r*.25,o=1+r*.1;i.config.maxHealth=Math.round(i.config.maxHealth*a),i.health=i.config.maxHealth,i.config.speed=Number((i.config.speed*o).toFixed(2))}}getCurrentPhaseConfig(){return this.currentPhaseIndex<this.phases.length?this.phases[this.currentPhaseIndex]:{phaseNumber:this.currentPhaseIndex+1,sectorName:"SECTOR PROFUNDO // NÚCLEO KERNEL",threatLevel:"NIVEL CRÍTICO",enemies:[],clearBonusHealth:35,clearBonusScore:2e3}}updateHudStatus(){const e=this.getCurrentPhaseConfig(),t=this.spawnQueue.length+this.enemyManager.getActiveCount();this.uiManager.updateStatus(`FASE ${e.phaseNumber} // ${e.sectorName} (AMENAZAS: ${t})`)}shuffleArray(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}}class gm{ctx=null;masterGain=null;isMuted=!1;constructor(){}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.35,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}playShot(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(540,e),t.frequency.exponentialRampToValueAtTime(70,e+.16),n.gain.setValueAtTime(.8,e),n.gain.exponentialRampToValueAtTime(.001,e+.16);const i=this.createNoiseBuffer(.08),r=this.ctx.createBufferSource();r.buffer=i;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(1200,e),a.Q.setValueAtTime(3,e);const o=this.ctx.createGain();o.gain.setValueAtTime(.6,e),o.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(this.masterGain),r.connect(a),a.connect(o),o.connect(this.masterGain),t.start(e),r.start(e),t.stop(e+.18),r.stop(e+.09)}playDryFire(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(900,e),t.frequency.exponentialRampToValueAtTime(300,e+.04),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.04),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.05)}playReload(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime;this.playClick(e,400,.06,.4),this.playClick(e+.45,750,.08,.5),this.playClick(e+1.05,1100,.09,.6)}playClick(e,t,n,i){if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="square",r.frequency.setValueAtTime(t,e),r.frequency.exponentialRampToValueAtTime(t*.4,e+n),a.gain.setValueAtTime(i,e),a.gain.exponentialRampToValueAtTime(.001,e+n),r.connect(a),a.connect(this.masterGain),r.start(e),r.stop(e+n+.01)}playHit(e=!1){if(!this.ctx||!this.masterGain||this.isMuted)return;const t=this.ctx.currentTime;if(e)[1760,2640].forEach(i=>{if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(i,t),a.gain.setValueAtTime(.4,t),a.gain.exponentialRampToValueAtTime(.001,t+.22),r.connect(a),a.connect(this.masterGain),r.start(t),r.stop(t+.23)});else{const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(800,t),n.frequency.exponentialRampToValueAtTime(250,t+.05),i.gain.setValueAtTime(.35,t),i.gain.exponentialRampToValueAtTime(.001,t+.05),n.connect(i),i.connect(this.masterGain),n.start(t),n.stop(t+.06)}}playShieldDeflect(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(1400,e),t.frequency.exponentialRampToValueAtTime(320,e+.08),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.09)}playEnemyDeath(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(40,e+.35),n.gain.setValueAtTime(.6,e),n.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.36)}playPlayerHurt(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(45,e+.25),n.gain.setValueAtTime(.7,e),n.gain.exponentialRampToValueAtTime(.001,e+.25),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.26)}playAlarm(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime;for(let t=0;t<2;t++){const n=e+t*.45,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(480,n),i.frequency.linearRampToValueAtTime(780,n+.25),i.frequency.linearRampToValueAtTime(480,n+.4),r.gain.setValueAtTime(.5,n),r.gain.exponentialRampToValueAtTime(.001,n+.42),i.connect(r),r.connect(this.masterGain),i.start(n),i.stop(n+.43)}}playSectorCleared(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{if(!this.ctx||!this.masterGain)return;const r=e+i*.08,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(n,r),o.gain.setValueAtTime(.4,r),o.gain.exponentialRampToValueAtTime(.001,r+.35),a.connect(o),o.connect(this.masterGain),a.start(r),a.stop(r+.36)})}playBossSpawn(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(110,e),t.frequency.exponentialRampToValueAtTime(35,e+1.2),n.gain.setValueAtTime(.9,e),n.gain.exponentialRampToValueAtTime(.001,e+1.2),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+1.25)}playCoinPickup(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime;[1320,1760].forEach((n,i)=>{const r=e+i*.045,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(n,r),a.frequency.exponentialRampToValueAtTime(n*1.2,r+.1),o.gain.setValueAtTime(.22,r),o.gain.exponentialRampToValueAtTime(.001,r+.1),a.connect(o),o.connect(this.masterGain),a.start(r),a.stop(r+.11)})}playStoreOpen(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime;[440,660,880,1320].forEach((n,i)=>{const r=e+i*.06,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(n,r),o.gain.setValueAtTime(.28,r),o.gain.exponentialRampToValueAtTime(.001,r+.25),a.connect(o),o.connect(this.masterGain),a.start(r),a.stop(r+.26)})}playPurchaseSuccess(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime;[587.33,880,1174.66].forEach((n,i)=>{const r=e+i*.07,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(n,r),o.gain.setValueAtTime(.35,r),o.gain.exponentialRampToValueAtTime(.001,r+.22),a.connect(o),o.connect(this.masterGain),a.start(r),a.stop(r+.24)})}playPurchaseFailed(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(160,e),t.frequency.setValueAtTime(120,e+.08),n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.001,e+.22),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.23)}playShotgunShot(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(320,e),t.frequency.exponentialRampToValueAtTime(45,e+.28),n.gain.setValueAtTime(.95,e),n.gain.exponentialRampToValueAtTime(.001,e+.28);const i=this.createNoiseBuffer(.18),r=this.ctx.createBufferSource();r.buffer=i;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(800,e);const o=this.ctx.createGain();o.gain.setValueAtTime(.9,e),o.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(n),n.connect(this.masterGain),r.connect(a),a.connect(o),o.connect(this.masterGain),t.start(e),r.start(e),t.stop(e+.3),r.stop(e+.2)}playSMGShot(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(720,e),t.frequency.exponentialRampToValueAtTime(140,e+.07),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.08)}createNoiseBuffer(e){if(!this.ctx)throw new Error("AudioContext no inicializado");const t=this.ctx.sampleRate*e,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<t;r++)i[r]=Math.random()*2-1;return n}}class _m{scoreEl;comboEl;waveEl;healthBarEl;healthTextEl;ammoCurrentEl;ammoMaxEl;reloadIndicatorEl;hitmarkerEl;alertsEl;damageVignetteEl;overlayEl;startBtnEl;rangeBtnEl;bitsEl;storeOverlayEl;storeBitsEl;storeItemsEl;storeContinueBtnEl;bossHudEl;bossNameEl;bossPercentEl;bossBarFillEl;hitmarkerTimeout=null;damageVignetteTimeout=null;onStartClicked;onRangeClicked;onStoreContinue;constructor(){this.scoreEl=document.getElementById("score-display"),this.comboEl=document.getElementById("combo-display"),this.waveEl=document.getElementById("wave-display"),this.bitsEl=document.getElementById("bits-display"),this.healthBarEl=document.getElementById("health-bar"),this.healthTextEl=document.getElementById("health-text"),this.ammoCurrentEl=document.getElementById("ammo-current"),this.ammoMaxEl=document.getElementById("ammo-max"),this.reloadIndicatorEl=document.getElementById("reload-indicator"),this.hitmarkerEl=document.getElementById("hitmarker"),this.alertsEl=document.getElementById("combat-alerts"),this.damageVignetteEl=document.getElementById("damage-vignette"),this.overlayEl=document.getElementById("overlay"),this.startBtnEl=document.getElementById("start-btn"),this.rangeBtnEl=document.getElementById("range-btn"),this.storeOverlayEl=document.getElementById("store-overlay"),this.storeBitsEl=document.getElementById("store-bits-display"),this.storeItemsEl=document.getElementById("store-items-container"),this.storeContinueBtnEl=document.getElementById("store-continue-btn"),this.bossHudEl=document.getElementById("boss-hud"),this.bossNameEl=document.getElementById("boss-name"),this.bossPercentEl=document.getElementById("boss-percent"),this.bossBarFillEl=document.getElementById("boss-bar-fill"),this.startBtnEl&&this.startBtnEl.addEventListener("click",()=>{this.onStartClicked&&this.onStartClicked()}),this.rangeBtnEl&&this.rangeBtnEl.addEventListener("click",()=>{this.onRangeClicked&&this.onRangeClicked()}),this.storeContinueBtnEl&&this.storeContinueBtnEl.addEventListener("click",()=>{this.onStoreContinue&&this.onStoreContinue()})}updateScore(e){this.scoreEl&&(this.scoreEl.textContent=e.toString().padStart(5,"0"))}updateCombo(e){this.comboEl&&(this.comboEl.textContent=`x${e.toFixed(1)}`,e>1?this.comboEl.style.color="#00f3ff":this.comboEl.style.color="#ffffff")}updateStatus(e){this.waveEl&&(this.waveEl.textContent=e)}updateHealth(e,t){const n=Math.max(0,Math.min(100,e/t*100));this.healthBarEl&&(this.healthBarEl.style.width=`${n}%`,n<=30?this.healthBarEl.classList.add("danger"):this.healthBarEl.classList.remove("danger")),this.healthTextEl&&(this.healthTextEl.textContent=`${Math.round(n)}%`)}updateAmmo(e,t){this.ammoCurrentEl&&(this.ammoCurrentEl.textContent=e.toString(),e<=3?this.ammoCurrentEl.classList.add("low"):this.ammoCurrentEl.classList.remove("low")),this.ammoMaxEl&&(this.ammoMaxEl.textContent=t.toString())}showReloadIndicator(e){this.reloadIndicatorEl&&(this.reloadIndicatorEl.style.display=e?"block":"none")}triggerHitmarker(e){this.hitmarkerEl&&(this.hitmarkerTimeout&&window.clearTimeout(this.hitmarkerTimeout),e?this.hitmarkerEl.classList.add("headshot"):this.hitmarkerEl.classList.remove("headshot"),this.hitmarkerEl.classList.add("active"),this.hitmarkerTimeout=window.setTimeout(()=>{this.hitmarkerEl&&(this.hitmarkerEl.classList.remove("active"),this.hitmarkerEl.classList.remove("headshot"))},120))}triggerDamageFlash(){this.damageVignetteEl&&(this.damageVignetteTimeout&&window.clearTimeout(this.damageVignetteTimeout),this.damageVignetteEl.style.opacity="1",this.damageVignetteTimeout=window.setTimeout(()=>{this.damageVignetteEl&&(this.damageVignetteEl.style.opacity="0")},220))}resetVignette(){this.damageVignetteEl&&(this.damageVignetteEl.style.opacity="0")}showBossBar(e,t){this.bossHudEl&&(e?(this.bossHudEl.classList.remove("hidden"),t&&this.bossNameEl&&(this.bossNameEl.textContent=t)):this.bossHudEl.classList.add("hidden"))}updateBossHealth(e,t){const n=Math.max(0,Math.min(100,e/t*100));this.bossBarFillEl&&(this.bossBarFillEl.style.width=`${n}%`),this.bossPercentEl&&(this.bossPercentEl.textContent=`${Math.round(n)}%`)}showCombatAlert(e,t){if(!this.alertsEl)return;const n=document.createElement("div");n.className=`combat-tag ${t}`,n.textContent=e,this.alertsEl.appendChild(n),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},900)}showOverlay(e,t,n){if(this.overlayEl)if(e){if(this.overlayEl.classList.remove("hidden"),t){const i=this.overlayEl.querySelector(".game-title");i&&(i.textContent=t)}if(n&&this.startBtnEl){const i=this.startBtnEl.querySelector(".btn-text");i&&(i.textContent=n)}}else this.overlayEl.classList.add("hidden")}updateBits(e){this.bitsEl&&(this.bitsEl.textContent=`${e.toString().padStart(4,"0")} 💾`)}showStoreOverlay(e,t,n){this.storeOverlayEl&&(e&&t&&n?(this.storeOverlayEl.classList.remove("hidden"),this.storeBitsEl&&(this.storeBitsEl.textContent=`${n.getBits()} 💾 BITS`),this.renderStoreItems(t,n)):this.storeOverlayEl.classList.add("hidden"))}renderStoreItems(e,t){if(!this.storeItemsEl)return;this.storeItemsEl.innerHTML="",this.storeBitsEl&&(this.storeBitsEl.textContent=`${t.getBits()} 💾 BITS`),e.getAllUpgradesInfo().forEach(r=>{const a=document.createElement("div");a.className="store-item";const o=t.canAfford(r.cost);let l=r.isMax?"NIVEL MÁXIMO":`MEJORAR // ${r.cost} BITS`;a.innerHTML=`
        <div>
          <div class="store-item-title">${r.name} (Nv. ${r.currentLevel}/${r.maxLevel})</div>
          <div class="store-item-desc">${r.description}</div>
        </div>
        <button class="store-buy-btn" ${r.isMax||!o?"disabled":""}>
          ${l}
        </button>
      `;const c=a.querySelector("button");c&&!r.isMax&&o&&c.addEventListener("click",()=>{e.buyUpgrade(r.type)&&this.renderStoreItems(e,t)}),this.storeItemsEl.appendChild(a)}),e.getWeaponsShopInfo().filter(r=>r.type!=="pistol").forEach(r=>{const a=document.createElement("div");a.className="store-item";const o=t.canAfford(r.cost);let l="store-buy-btn",c=`${r.cost} BITS // ADQUIRIR`,h=!1;r.isEquipped?(c="EQUIPADA",l+=" equipped",h=!0):r.isUnlocked?c="EQUIPAR":o||(h=!0),a.innerHTML=`
        <div>
          <div class="store-item-title">${r.name}</div>
          <div class="store-item-desc">${r.description}</div>
        </div>
        <button class="${l}" ${h?"disabled":""}>
          ${c}
        </button>
      `;const u=a.querySelector("button");u&&!h&&u.addEventListener("click",()=>{e.buyOrEquipWeapon(r.type)&&this.renderStoreItems(e,t)}),this.storeItemsEl.appendChild(a)})}}class xm{mesh;canvas;ctx;texture;healthPct=100;currentAmmo=12;maxAmmo=12;statusText="FASE 1 // CACHÉ";score=0;combo=1;bits=0;isDirty=!0;constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=256,this.canvas.height=128,this.ctx=this.canvas.getContext("2d"),this.texture=new gn(this.canvas),this.texture.minFilter=It,this.texture.magFilter=It;const e=new xt(.2,.1),t=new Oe({map:this.texture,transparent:!0,opacity:.95,side:ot});this.mesh=new J(e,t),this.mesh.position.set(0,.07,.04),this.mesh.rotation.x=-Math.PI/3.2,this.renderCanvas()}attachTo(e){e.add(this.mesh)}updateHealth(e,t){const n=Math.max(0,Math.min(100,Math.round(e/t*100)));n!==this.healthPct&&(this.healthPct=n,this.isDirty=!0,this.renderCanvas())}updateAmmo(e,t){(e!==this.currentAmmo||t!==this.maxAmmo)&&(this.currentAmmo=e,this.maxAmmo=t,this.isDirty=!0,this.renderCanvas())}updateStatus(e){e!==this.statusText&&(this.statusText=e,this.isDirty=!0,this.renderCanvas())}updateScore(e,t){(e!==this.score||t!==this.combo)&&(this.score=e,this.combo=t,this.isDirty=!0,this.renderCanvas())}updateBits(e){e!==this.bits&&(this.bits=e,this.isDirty=!0,this.renderCanvas())}renderCanvas(){if(!this.isDirty)return;this.isDirty=!1;const e=this.ctx,t=256,n=128;e.clearRect(0,0,t,n),e.fillStyle="rgba(10, 18, 32, 0.92)",e.fillRect(0,0,t,n),e.strokeStyle="#00f3ff",e.lineWidth=2,e.strokeRect(2,2,t-4,n-4),e.fillStyle="#00f3ff",e.font="bold 12px monospace",e.fillText("VIRUS PURGE // AGENTE",10,20),e.fillStyle="#94a3b8",e.font="9px monospace",e.fillText(this.statusText.slice(0,28),10,36),e.fillStyle="#ffffff",e.font="bold 10px monospace",e.fillText(`INTEGRIDAD: ${this.healthPct}%`,10,56),e.fillStyle="rgba(255, 255, 255, 0.15)",e.fillRect(10,62,236,8),e.fillStyle=this.healthPct>30?"#00f3ff":"#ff0055",e.fillRect(10,62,236*this.healthPct/100,8),e.fillStyle="#ffffff",e.font="bold 11px monospace",e.fillText(`BÚFER: ${this.currentAmmo} / ${this.maxAmmo}`,10,92),e.fillStyle="#fbbf24",e.font="bold 11px monospace",e.fillText(`💾 ${this.bits} BITS`,150,92),e.fillStyle="#fbbf24",e.font="bold 12px monospace",e.fillText(`SCORE: ${this.score}`,10,116),e.fillStyle="#00f3ff",e.font="bold 12px monospace",e.fillText(`x${this.combo.toFixed(1)}`,190,116),this.texture.needsUpdate=!0}}class vm{group;buttons=[];raycaster=new Kn;isShowing=!1;currentMode="GAME_OVER";headerMesh;headerCanvas;headerCtx;headerTexture;bgMesh;border;callbacks;constructor(e){this.callbacks=e,this.group=new gt,this.group.visible=!1;const t=new xt(2.4,2.1),n=new Oe({color:199962,transparent:!0,opacity:.92,side:ot});this.bgMesh=new J(t,n),this.bgMesh.position.z=-.02,this.group.add(this.bgMesh);const i=new Vi(t),r=new Qt({color:62463,transparent:!0,opacity:.85});this.border=new bi(i,r),this.border.position.z=-.01,this.group.add(this.border),this.headerCanvas=document.createElement("canvas"),this.headerCanvas.width=1024,this.headerCanvas.height=360,this.headerCtx=this.headerCanvas.getContext("2d"),this.headerTexture=new gn(this.headerCanvas);const a=new xt(2.2,.77),o=new Oe({map:this.headerTexture,transparent:!0,side:ot,depthWrite:!1});this.headerMesh=new J(a,o),this.headerMesh.position.set(0,.58,.01),this.group.add(this.headerMesh)}clearButtons(){for(const e of this.buttons)this.group.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),e.labelMesh.geometry.dispose(),e.labelMesh.material.dispose(),e.borderMesh.geometry.dispose(),e.borderMesh.material.dispose();this.buttons=[]}createButton(e,t,n,i,r){const c=new Ye(1.95,.22,.04),h=new tt({color:531246,emissive:n,emissiveIntensity:.35,roughness:.2,metalness:.8}),u=new J(c,h);u.position.set(0,t,.02),u.userData={isVRButton:!0};const f=new Vi(c),m=new Qt({color:i,transparent:!0,opacity:.85}),g=new bi(f,m);u.add(g);const _=document.createElement("canvas");_.width=1024,_.height=128;const p=_.getContext("2d");p.fillStyle="rgba(6, 20, 36, 0.85)",p.fillRect(0,0,1024,128),p.strokeStyle=i===65535?"#00f3ff":"#ffaa00",p.lineWidth=4,p.strokeRect(6,6,1012,116),p.fillStyle="#ffffff",p.font='bold 50px "Courier New", monospace',p.textAlign="center",p.textBaseline="middle",p.shadowColor="#00f3ff",p.shadowBlur=10,p.fillText(e,512,64);const d=new gn(_);d.needsUpdate=!0;const E=new xt(1.95*.96,.22*.88),T=new Oe({map:d,transparent:!0,side:ot,depthWrite:!1}),S=new J(E,T);S.position.set(0,0,.04/2+.012),u.add(S),this.group.add(u),this.buttons.push({mesh:u,labelMesh:S,action:r,isHovered:!1,baseColor:n,hoverColor:i,borderMesh:g})}showGameOver(e,t){this.currentMode="GAME_OVER",this.clearButtons();const n=this.headerCtx;n.clearRect(0,0,1024,360);const i=n.createLinearGradient(0,0,0,360);i.addColorStop(0,"rgba(255, 0, 85, 0.35)"),i.addColorStop(1,"rgba(0, 0, 0, 0.1)"),n.fillStyle=i,n.fillRect(0,0,1024,360),n.fillStyle="#ff0055",n.font='bold 54px "Courier New", monospace',n.textAlign="center",n.shadowColor="#ff0055",n.shadowBlur=18,n.fillText("⚠️ SISTEMA COMPROMETIDO ⚠️",512,70),n.fillStyle="#ffffff",n.font='28px "Courier New", monospace',n.shadowColor="#00f3ff",n.shadowBlur=6,n.fillText("EL NÚCLEO ANTIVIRUS HA SIDO DESTRUIDO",512,125),n.fillStyle="#00f3ff",n.font='bold 36px "Courier New", monospace',n.fillText(`PUNTUACIÓN FINAL: ${e.score}`,512,190),n.fillStyle="#94a3b8",n.font='26px "Courier New", monospace',n.shadowBlur=0,n.fillText(`PRECISIÓN: ${e.accuracy}%  |  SECTOR ALCANZADO: ${e.wave}`,512,250),n.fillStyle="rgba(0, 243, 255, 0.85)",n.font='22px "Courier New", monospace',n.fillText("APUNTA CON TU PISTOLA Y DISPARA AL BOTÓN",512,310),this.headerTexture.needsUpdate=!0,this.createButton("🔄 REAPARECER PROTOCOLO",.05,62463,65535,()=>{this.hide(),this.callbacks.onRespawn()}),this.createButton("🎯 CAMPO DE TIRO (PRÁCTICA)",-.25,16755200,16763904,()=>{this.hide(),this.callbacks.onTrainingRange()}),this.createButton("🏠 MENÚ PRINCIPAL",-.55,6583435,9741240,()=>{this.hide(),this.callbacks.onMainMenu()}),this.positionInFrontOfCamera(t),this.group.visible=!0,this.isShowing=!0}showPauseMenu(e){this.currentMode="PAUSE",this.clearButtons();const t=this.headerCtx;t.clearRect(0,0,1024,360);const n=t.createLinearGradient(0,0,0,360);n.addColorStop(0,"rgba(0, 243, 255, 0.3)"),n.addColorStop(1,"rgba(0, 0, 0, 0.1)"),t.fillStyle=n,t.fillRect(0,0,1024,360),t.fillStyle="#00f3ff",t.font='bold 54px "Courier New", monospace',t.textAlign="center",t.shadowColor="#00f3ff",t.shadowBlur=20,t.fillText("⏸️ SISTEMA EN PAUSA",512,75),t.fillStyle="#ffffff",t.font='28px "Courier New", monospace',t.shadowColor="#00f3ff",t.shadowBlur=6,t.fillText("SUB-RUTINA DE SEGURIDAD DETENIDA",512,135),t.fillStyle="#94a3b8",t.font='24px "Courier New", monospace',t.shadowBlur=0,t.fillText("APUNTA Y DISPARA AL BOTÓN, O PULSA [X / Y] PARA REANUDAR",512,220),this.headerTexture.needsUpdate=!0,this.createButton("▶️ REANUDAR PURGA",.12,62463,65535,()=>{this.hide(),this.callbacks.onResume()}),this.createButton("🎯 CAMPO DE TIRO (PRÁCTICA)",-.16,16755200,16763904,()=>{this.hide(),this.callbacks.onTrainingRange()}),this.createButton("🔄 REINICIAR SECTOR",-.44,3718648,8246268,()=>{this.hide(),this.callbacks.onRestartSector()}),this.createButton("🏠 MENÚ PRINCIPAL",-.72,6583435,9741240,()=>{this.hide(),this.callbacks.onMainMenu()}),this.positionInFrontOfCamera(e),this.group.visible=!0,this.isShowing=!0}showMainMenu(e){this.currentMode="MAIN_MENU",this.clearButtons();const t=this.headerCtx;t.clearRect(0,0,1024,360),t.fillStyle="#00f3ff",t.font='bold 56px "Courier New", monospace',t.textAlign="center",t.shadowColor="#00f3ff",t.shadowBlur=20,t.fillText("VIRUS PURGE // VR DEFENSE",512,85),t.fillStyle="#38bdf8",t.font='28px "Courier New", monospace',t.shadowBlur=8,t.fillText("SUB-RUTINA DE SEGURIDAD DEL SISTEMA CENTRAL",512,145),t.fillStyle="#94a3b8",t.font='24px "Courier New", monospace',t.shadowBlur=0,t.fillText("SELECCIONA MODO DE COMBATE DISPARANDO AL OBJETIVO",512,220),this.headerTexture.needsUpdate=!0,this.createButton("⚔️ INICIAR PURGA (OLEADAS)",-.05,62463,65535,()=>{this.hide(),this.callbacks.onStartSurvival()}),this.createButton("🎯 CAMPO DE TIRO (DIANAS)",-.38,16755200,16763904,()=>{this.hide(),this.callbacks.onTrainingRange()}),this.positionInFrontOfCamera(e),this.group.visible=!0,this.isShowing=!0}hide(){this.group.visible=!1,this.isShowing=!1}isVisible(){return this.isShowing}getMode(){return this.currentMode}positionInFrontOfCamera(e){const t=new w;e.getWorldDirection(t),t.y=0,t.lengthSq()<.001?t.set(0,0,-1):t.normalize();const n=new w;e.getWorldPosition(n),this.group.position.copy(n).addScaledVector(t,2),this.group.position.y=Math.max(1.1,n.y-.05),this.group.lookAt(n.x,this.group.position.y,n.z)}update(e,t,n){if(!this.isShowing)return!1;this.raycaster.set(e,t),this.raycaster.far=10;const i=this.buttons.map(o=>o.mesh),r=this.raycaster.intersectObjects(i,!1);let a=!1;for(const o of this.buttons)o.isHovered=!1;if(r.length>0){const o=r[0].object,l=this.buttons.find(c=>c.mesh===o);l&&(l.isHovered=!0,n&&(a=!0,l.action()))}for(const o of this.buttons){const l=o.mesh.material;o.isHovered?(l.emissive.setHex(o.hoverColor),l.emissiveIntensity=1.8,o.mesh.scale.set(1.04,1.06,1.2)):(l.emissive.setHex(o.baseColor),l.emissiveIntensity=.35,o.mesh.scale.set(1,1,1))}return a}}class Mm{group;backgroundMesh;headerMesh;headerCanvas;headerCtx;headerTexture;currencyManager;upgradeManager;onContinueCallback;buttons=[];raycaster=new Kn;isShowing=!1;constructor(e,t,n){this.currencyManager=e,this.upgradeManager=t,this.onContinueCallback=n,this.group=new gt,this.group.visible=!1;const i=new xt(2.5,1.8),r=new Oe({color:331034,transparent:!0,opacity:.92,side:ot});this.backgroundMesh=new J(i,r),this.group.add(this.backgroundMesh);const a=new Vi(i),o=new Qt({color:62463,transparent:!0,opacity:.8}),l=new bi(a,o);this.backgroundMesh.add(l),this.headerCanvas=document.createElement("canvas"),this.headerCanvas.width=1024,this.headerCanvas.height=256,this.headerCtx=this.headerCanvas.getContext("2d"),this.headerTexture=new gn(this.headerCanvas),this.headerTexture.minFilter=It,this.headerTexture.magFilter=It;const c=new xt(2.4,.6),h=new Oe({map:this.headerTexture,transparent:!0,side:ot,depthWrite:!1});this.headerMesh=new J(c,h),this.headerMesh.position.set(0,.58,.01),this.group.add(this.headerMesh)}show(e){this.positionInFrontOfCamera(e),this.rebuildButtons(),this.renderHeader(),this.group.visible=!0,this.isShowing=!0}hide(){this.group.visible=!1,this.isShowing=!1}isVisible(){return this.isShowing}positionInFrontOfCamera(e){const t=new w;e.getWorldDirection(t),t.y=0,t.lengthSq()<.001?t.set(0,0,-1):t.normalize();const n=new w;e.getWorldPosition(n),this.group.position.copy(n).addScaledVector(t,2.1),this.group.position.y=Math.max(1.15,n.y-.05),this.group.lookAt(n.x,this.group.position.y,n.z)}renderHeader(){const e=this.headerCtx;e.clearRect(0,0,1024,256);const t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(0, 243, 255, 0.35)"),t.addColorStop(1,"rgba(0, 0, 0, 0.1)"),e.fillStyle=t,e.fillRect(0,0,1024,256),e.fillStyle="#00f3ff",e.font='bold 50px "Courier New", monospace',e.textAlign="center",e.shadowColor="#00f3ff",e.shadowBlur=18,e.fillText("🛒 CYBER STORE // MERCADO NEGRO",512,70);const n=this.currencyManager.getBits();e.fillStyle="#fbbf24",e.font='bold 36px "Courier New", monospace',e.shadowColor="#f59e0b",e.shadowBlur=12,e.fillText(`💾 BITS DISPONIBLES: ${n}`,512,140),e.fillStyle="#94a3b8",e.font='22px "Courier New", monospace',e.shadowBlur=0,e.fillText("APUNTA CON TU LÁSER Y DISPARA PARA MEJORAR TU ARMA",512,210),this.headerTexture.needsUpdate=!0}clearButtons(){for(const e of this.buttons)this.group.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),e.labelMesh.geometry.dispose(),e.labelMesh.material.dispose(),e.texture.dispose();this.buttons=[]}rebuildButtons(){this.clearButtons();const e=["fireRate","damage","magSize","reloadSpeed"],t=[{x:-.58,y:.14},{x:.58,y:.14},{x:-.58,y:-.16},{x:.58,y:-.16}];e.forEach((r,a)=>{const o=this.upgradeManager.getUpgradeInfo(r),l=t[a];let c="";o.isMax?c=`${o.name}
NIVEL MÁXIMO // INSTALADO`:c=`${o.name} (Nv. ${o.currentLevel}/3)
${o.description} // ${o.cost} BITS`,this.createStoreButton(c,l.x,l.y,1.1,.24,o.isMax?3359061:62463,o.isMax?6583435:3718648,()=>{this.upgradeManager.buyUpgrade(r)&&(this.renderHeader(),this.rebuildButtons())})});const n=this.upgradeManager.getWeaponsShopInfo().filter(r=>r.type!=="pistol"),i=[{x:-.58,y:-.46},{x:.58,y:-.46}];n.forEach((r,a)=>{const o=i[a];let l="",c=16096779;r.isEquipped?(l=`${r.name} [EQUIPADA]
${r.description}`,c=1096065):r.isUnlocked?(l=`${r.name} [DESBLOQUEADA]
DISPARA PARA EQUIPAR`,c=3718648):l=`${r.name} // ${r.cost} BITS
${r.description}`,this.createStoreButton(l,o.x,o.y,1.1,.24,c,c,()=>{this.upgradeManager.buyOrEquipWeapon(r.type)&&(this.renderHeader(),this.rebuildButtons())})}),this.createStoreButton("🚀 CONTINUAR PURGA // SIGUIENTE FASE",0,-.72,2.26,.18,1096065,3462041,()=>{this.hide(),this.onContinueCallback()})}createStoreButton(e,t,n,i,r,a,o,l){const c=new Ye(i,r,.04),h=new tt({color:661807,emissive:a,emissiveIntensity:.6,roughness:.3,metalness:.7}),u=new J(c,h);u.position.set(t,n,.03);const f=new Vi(c),m=new Qt({color:o,transparent:!0,opacity:.85}),g=new bi(f,m);u.add(g);const _=document.createElement("canvas");_.width=1024,_.height=256;const p=_.getContext("2d");p.fillStyle="rgba(6, 20, 36, 0.9)",p.fillRect(0,0,1024,256),p.strokeStyle="#00f3ff",p.lineWidth=4,p.strokeRect(6,6,1012,244),p.fillStyle="#ffffff",p.textAlign="center",p.textBaseline="middle";const d=e.split(`
`);d.length===1?(p.font='bold 44px "Courier New", monospace',p.fillText(d[0],512,128)):(p.font='bold 38px "Courier New", monospace',p.fillText(d[0],512,90),p.fillStyle="#38bdf8",p.font='28px "Courier New", monospace',p.fillText(d[1],512,165));const E=new gn(_);E.needsUpdate=!0;const T=new xt(i*.96,r*.88),S=new Oe({map:E,transparent:!0,side:ot,depthWrite:!1}),C=new J(T,S);C.position.set(0,0,.025),u.add(C),this.group.add(u),this.buttons.push({mesh:u,borderMesh:g,labelMesh:C,canvas:_,ctx:p,texture:E,action:l,baseColor:a,hoverColor:o,isHovered:!1,width:i,height:r})}update(e,t,n){if(!this.isShowing)return!1;this.raycaster.set(e,t),this.raycaster.far=10;const i=this.buttons.map(o=>o.mesh),r=this.raycaster.intersectObjects(i,!1);let a=-1;if(r.length>0){const o=r[0].object;a=this.buttons.findIndex(l=>l.mesh===o)}for(let o=0;o<this.buttons.length;o++){const l=this.buttons[o],c=o===a;if(c!==l.isHovered){l.isHovered=c;const h=l.mesh.material;l.isHovered?(h.emissive.setHex(l.hoverColor),h.emissiveIntensity=1.8,l.mesh.scale.set(1.03,1.05,1.15)):(h.emissive.setHex(l.baseColor),h.emissiveIntensity=.6,l.mesh.scale.set(1,1,1))}}return n&&a!==-1?(this.buttons[a].action(),!0):a!==-1}}class Es{group;pivotGroup;hitboxes=[];recoilAngle=0;recoilVelocity=0;isOscillating=!1;oscSpeed=1.8;oscWidth=4;oscTimer=0;basePosition;scoreBadge;badgeCanvas;badgeCtx;badgeTexture;badgeTimer=0;onHitRegistered;constructor(e,t=!1){this.group=new gt,this.group.position.copy(e),this.basePosition=e.clone(),this.isOscillating=t,this.oscTimer=Math.random()*Math.PI*2,this.pivotGroup=new gt,this.buildBaseAndPole(),this.buildTargetDisc(),this.buildScoreBadge(),this.group.add(this.pivotGroup)}buildBaseAndPole(){const e=new Dt(.35,.45,.12,16),t=new tt({color:988970,roughness:.4,metalness:.8}),n=new J(e,t);n.position.y=.06,this.group.add(n);const i=new Dt(.04,.04,1.4,12),r=new tt({color:3359061,roughness:.3,metalness:.9}),a=new J(i,r);a.position.y=.75,this.pivotGroup.add(a),this.pivotGroup.position.set(0,0,0)}buildTargetDisc(){const t=new gt;t.position.set(0,1.5,0);const n=new Dt(.48,.48,.03,32);n.rotateX(Math.PI/2);const i=new tt({color:661807,roughness:.5,metalness:.7}),r=new J(n,i);t.add(r);const a=new _n(.48,.02,8,32),o=new tt({color:62463,emissive:62463,emissiveIntensity:.8}),l=new J(a,o);t.add(l);const c=new Wi(.28,.46,32),h=new Oe({color:165063,side:ot}),u=new J(c,h);u.position.z=.018,u.userData={isHitbox:!0,isDiana:!0,diana:this,zone:"OUTER"},t.add(u),this.hitboxes.push(u);const f=new Wi(.14,.28,32),m=new Oe({color:16096779,side:ot}),g=new J(f,m);g.position.z=.02,g.userData={isHitbox:!0,isDiana:!0,diana:this,zone:"MID"},t.add(g),this.hitboxes.push(g);const _=new Fs(.14,32),p=new Oe({color:16711765,side:ot}),d=new J(_,p);d.position.z=.022,d.userData={isHitbox:!0,isHeadshot:!0,isDiana:!0,diana:this,zone:"BULLSEYE"},t.add(d),this.hitboxes.push(d);const E=new xt(.65,.015),T=new xt(.015,.65),S=new Oe({color:16777215,transparent:!0,opacity:.7,side:ot}),C=new J(E,S);C.position.z=.025;const A=new J(T,S);A.position.z=.025,t.add(C),t.add(A),this.pivotGroup.add(t)}buildScoreBadge(){this.badgeCanvas=document.createElement("canvas"),this.badgeCanvas.width=256,this.badgeCanvas.height=128,this.badgeCtx=this.badgeCanvas.getContext("2d"),this.badgeTexture=new gn(this.badgeCanvas);const e=new xt(.6,.3),t=new Oe({map:this.badgeTexture,transparent:!0,opacity:0,side:ot});this.scoreBadge=new J(e,t),this.scoreBadge.position.set(0,2.1,0),this.pivotGroup.add(this.scoreBadge)}registerHit(e,t){this.recoilVelocity=-9;let n=25,i=!1,r="+25";e==="BULLSEYE"?(n=100,i=!0,r="🎯 DIANA +100"):e==="MID"?(n=50,i=!1,r="+50"):(n=25,i=!1,r="+25"),this.showBadge(r,e);const a={zone:e,points:n,isHeadshot:i,label:r};return this.onHitRegistered&&this.onHitRegistered(a,t),a}showBadge(e,t){const n=this.badgeCtx;n.clearRect(0,0,256,128),n.font='bold 38px "Courier New", monospace',n.textAlign="center",n.textBaseline="middle",t==="BULLSEYE"?(n.fillStyle="#ff0055",n.shadowColor="#ff0055",n.shadowBlur=12):t==="MID"?(n.fillStyle="#f59e0b",n.shadowColor="#f59e0b",n.shadowBlur=8):(n.fillStyle="#00f3ff",n.shadowColor="#00f3ff",n.shadowBlur=6),n.fillText(e,128,64),this.badgeTexture.needsUpdate=!0,this.badgeTimer=.85,this.scoreBadge.material.opacity=1}update(e){if(this.recoilVelocity+=(-this.recoilAngle*75-this.recoilVelocity*8.5)*e,this.recoilAngle+=this.recoilVelocity*e,this.pivotGroup.rotation.x=this.recoilAngle,this.isOscillating&&(this.oscTimer+=e*this.oscSpeed,this.group.position.x=this.basePosition.x+Math.sin(this.oscTimer)*this.oscWidth),this.badgeTimer>0){this.badgeTimer-=e;const i=this.badgeTimer/.85;this.scoreBadge.material.opacity=Math.max(0,i),this.scoreBadge.position.y=2.1+(1-i)*.35}}setVisible(e){this.group.visible=e}}class Sm{group;dianas=[];isEnabled=!1;totalShots=0;totalHits=0;totalBullseyes=0;totalScore=0;boardMesh;boardCanvas;boardCtx;boardTexture;returnBtnMesh;isReturnBtnHovered=!1;callbacks;constructor(e){this.callbacks=e,this.group=new gt,this.group.visible=!1,this.setupDianas(),this.setupScoreboard(),this.setupReturnButton()}setupDianas(){const e=new Es(new w(-3.8,0,1.5),!1);this.dianas.push(e),this.group.add(e.group);const t=new Es(new w(3.8,0,-3.5),!1);this.dianas.push(t),this.group.add(t.group);const n=new Es(new w(0,0,-6.5),!0);this.dianas.push(n),this.group.add(n.group);const i=new Es(new w(0,0,-13.5),!1);this.dianas.push(i),this.group.add(i.group)}setupScoreboard(){this.boardCanvas=document.createElement("canvas"),this.boardCanvas.width=1024,this.boardCanvas.height=512,this.boardCtx=this.boardCanvas.getContext("2d"),this.boardTexture=new gn(this.boardCanvas);const e=new xt(3.6,1.8),t=new Oe({map:this.boardTexture,transparent:!0});this.boardMesh=new J(e,t),this.boardMesh.position.set(0,4,-14.2),this.group.add(this.boardMesh);const n=new Vi(e),i=new Qt({color:62463,transparent:!0,opacity:.8}),r=new bi(n,i);this.boardMesh.add(r),this.renderScoreboard()}setupReturnButton(){const e=new Ye(2.4,.45,.08),t=new tt({color:531246,emissive:62463,emissiveIntensity:.45,roughness:.2,metalness:.8});this.returnBtnMesh=new J(e,t),this.returnBtnMesh.position.set(3.2,1.5,6),this.returnBtnMesh.rotation.y=-Math.PI/4,this.returnBtnMesh.userData={isReturnToSurvivalButton:!0,isHitbox:!0};const n=document.createElement("canvas");n.width=512,n.height=128;const i=n.getContext("2d");i.fillStyle="#00f3ff",i.font='bold 36px "Courier New", monospace',i.textAlign="center",i.textBaseline="middle",i.shadowColor="#00f3ff",i.shadowBlur=10,i.fillText("⚔️ INICIAR OLEADAS",256,64);const r=new gn(n),a=new xt(2.3,.4),o=new Oe({map:r,transparent:!0}),l=new J(a,o);l.position.set(0,0,.045),this.returnBtnMesh.add(l),this.group.add(this.returnBtnMesh)}renderScoreboard(){const e=this.boardCtx;e.clearRect(0,0,1024,512),e.fillStyle="rgba(6, 19, 33, 0.92)",e.fillRect(0,0,1024,512),e.fillStyle="#00f3ff",e.font='bold 44px "Courier New", monospace',e.textAlign="center",e.shadowColor="#00f3ff",e.shadowBlur=16,e.fillText("🎯 CAMPO DE TIRO // VIRUS PURGE",512,65),e.fillStyle="#94a3b8",e.font='24px "Courier New", monospace',e.shadowBlur=0,e.fillText("MODO DE ENTRENAMIENTO Y CALIBRACIÓN BALÍSTICA",512,115),e.strokeStyle="rgba(0, 243, 255, 0.4)",e.lineWidth=2,e.beginPath(),e.moveTo(80,140),e.lineTo(944,140),e.stroke();const t=this.totalShots>0?Math.round(this.totalHits/this.totalShots*100):100;e.textAlign="left",e.fillStyle="#ffffff",e.font='28px "Courier New", monospace',e.fillText("PUNTUACIÓN TOTAL:",120,210),e.fillStyle="#00f3ff",e.font='bold 36px "Courier New", monospace',e.fillText(`${this.totalScore} PTS`,520,210),e.fillStyle="#ffffff",e.font='28px "Courier New", monospace',e.fillText("DIANAS PERFECTAS (CENTRO):",120,275),e.fillStyle="#ff0055",e.font='bold 36px "Courier New", monospace',e.fillText(`${this.totalBullseyes}`,620,275),e.fillStyle="#ffffff",e.font='28px "Courier New", monospace',e.fillText("IMPACTOS / DISPAROS:",120,340),e.fillStyle="#f59e0b",e.font='bold 36px "Courier New", monospace',e.fillText(`${this.totalHits} / ${this.totalShots}`,520,340),e.fillStyle="#ffffff",e.font='28px "Courier New", monospace',e.fillText("PRECISIÓN DEL TIRADOR:",120,405),e.fillStyle="#22c55e",e.font='bold 36px "Courier New", monospace',e.fillText(`${t}%`,520,405),e.textAlign="center",e.fillStyle="rgba(0, 243, 255, 0.7)",e.font='20px "Courier New", monospace',e.fillText('DISPARA AL BOTÓN "INICIAR OLEADAS" PARA ENTRAR A COMBATE',512,470),this.boardTexture.needsUpdate=!0}registerShot(){this.isEnabled&&(this.totalShots++,this.renderScoreboard())}registerDianaHit(e){this.isEnabled&&(this.totalHits++,this.totalScore+=e.points,e.zone==="BULLSEYE"&&this.totalBullseyes++,this.renderScoreboard())}enable(){this.isEnabled=!0,this.group.visible=!0,this.totalShots=0,this.totalHits=0,this.totalBullseyes=0,this.totalScore=0,this.renderScoreboard()}disable(){this.isEnabled=!1,this.group.visible=!1}getAllHitboxes(){if(!this.isEnabled)return[];const e=[];for(const t of this.dianas)e.push(...t.hitboxes);return e.push(this.returnBtnMesh),e}checkReturnButtonClick(e){return e===this.returnBtnMesh||e.parent===this.returnBtnMesh?(this.callbacks.onReturnToSurvival(),!0):!1}update(e,t,n){if(this.isEnabled){for(const i of this.dianas)i.update(e);if(t&&n){const r=new Kn(t,n,0,15).intersectObject(this.returnBtnMesh,!0),a=this.returnBtnMesh.material;r.length>0?(a.emissiveIntensity=1.8,a.emissive.setHex(65535)):(a.emissiveIntensity=.45,a.emissive.setHex(62463))}}}}class ym{bits=0;onBitsChange;constructor(e=0){this.bits=e}getBits(){return this.bits}addBits(e){e<=0||(this.bits+=e,this.onBitsChange?.(this.bits))}spendBits(e){return e<=0?!0:this.bits>=e?(this.bits-=e,this.onBitsChange?.(this.bits),!0):!1}canAfford(e){return this.bits>=e}reset(){this.bits=0,this.onBitsChange?.(this.bits)}}class Em{currencyManager;weaponManager;audioManager;levels={fireRate:0,damage:0,magSize:0,reloadSpeed:0};unlockedWeapons=new Set(["pistol"]);activeWeaponType="pistol";costs={fireRate:[80,160,300],damage:[100,200,400],magSize:[75,150,250],reloadSpeed:[60,120,200]};weaponCosts={shotgun:250,smg:350};onUpgradesChanged;constructor(e,t,n){this.currencyManager=e,this.weaponManager=t,this.audioManager=n}getUpgradeInfo(e){const t=this.levels[e],n=3,i=t>=n,r=i?0:this.costs[e][t];let a="",o="";switch(e){case"fireRate":a="⚡ OVERCLOCK CADENCIA",o="+20% VELOCIDAD DISPARO";break;case"damage":a="💥 AMPLIFICADOR PLASMA",o="+25% DAÑO PROYECTIL";break;case"magSize":a="📦 BÚFER EXTENDIDO",o="+4 BALAS AL CARGADOR";break;case"reloadSpeed":a="⏱️ RECARGA RÁPIDA",o="-25% TIEMPO RECARGA";break}return{type:e,name:a,description:o,currentLevel:t,maxLevel:n,cost:r,isMax:i}}getAllUpgradesInfo(){return[this.getUpgradeInfo("fireRate"),this.getUpgradeInfo("damage"),this.getUpgradeInfo("magSize"),this.getUpgradeInfo("reloadSpeed")]}getWeaponsShopInfo(){return[{type:"pistol",name:"🔫 ANTIVIRUS CANNON",description:"PISTOLA BALÍSTICA ESTÁNDAR",cost:0,isUnlocked:!0,isEquipped:this.activeWeaponType==="pistol"},{type:"shotgun",name:"💥 ESCOPETA SCATTER",description:"6 PROYECTILES EN CONO CERCANO",cost:this.weaponCosts.shotgun,isUnlocked:this.unlockedWeapons.has("shotgun"),isEquipped:this.activeWeaponType==="shotgun"},{type:"smg",name:"⚡ SUBFUSIL PLASMA",description:"RÁFAGA AUTOMÁTICA CONTINUA",cost:this.weaponCosts.smg,isUnlocked:this.unlockedWeapons.has("smg"),isEquipped:this.activeWeaponType==="smg"}]}buyUpgrade(e){const t=this.getUpgradeInfo(e);return t.isMax?!1:this.currencyManager.spendBits(t.cost)?(this.levels[e]++,this.applyAllUpgrades(),this.audioManager.playPurchaseSuccess(),this.onUpgradesChanged?.(),!0):(this.audioManager.playPurchaseFailed(),!1)}buyOrEquipWeapon(e){if(this.unlockedWeapons.has(e))return this.equipWeapon(e),this.audioManager.playPurchaseSuccess(),!0;if(e==="shotgun"||e==="smg"){const t=this.weaponCosts[e];if(this.currencyManager.spendBits(t))return this.unlockedWeapons.add(e),this.equipWeapon(e),this.audioManager.playPurchaseSuccess(),this.onUpgradesChanged?.(),!0}return this.audioManager.playPurchaseFailed(),!1}equipWeapon(e){this.unlockedWeapons.has(e)&&(this.activeWeaponType=e,this.weaponManager.switchWeapon(e),this.applyAllUpgrades(),this.onUpgradesChanged?.())}applyAllUpgrades(){const e=Math.max(.4,1-this.levels.fireRate*.2),t=1+this.levels.damage*.25,n=this.levels.magSize*4,i=Math.max(.3,1-this.levels.reloadSpeed*.25);this.weaponManager.applyUpgradesToAll(t,e,n,i)}reset(){this.levels={fireRate:0,damage:0,magSize:0,reloadSpeed:0},this.unlockedWeapons=new Set(["pistol"]),this.activeWeaponType="pistol",this.weaponManager.switchWeapon("pistol"),this.applyAllUpgrades(),this.onUpgradesChanged?.()}}class Tm{model;value;isCollected=!1;mesh;wireframe;velocity;groundY=.35;lifeTime=0;isGrounded=!1;magnetRadius=4.2;pickupRadius=.9;magnetSpeed=0;constructor(e,t){this.value=t,this.model=new gt,this.model.position.copy(e),this.velocity=new w((Math.random()-.5)*2.2,2.8+Math.random()*1.5,(Math.random()-.5)*2.2);const n=t>=25,i=n?16096779:62463,r=n?16498468:65535,a=n?.16:.12,o=new $n(a,0),l=new tt({color:i,emissive:r,emissiveIntensity:2.2,roughness:.15,metalness:.85});this.mesh=new J(o,l),this.model.add(this.mesh);const c=new rh(o),h=new Qt({color:16777215,transparent:!0,opacity:.8});this.wireframe=new bi(c,h),this.model.add(this.wireframe)}update(e,t){if(this.isCollected)return!0;this.lifeTime+=e;const n=this.model.position.distanceTo(t);if(n<=this.pickupRadius)return this.isCollected=!0,!0;if(n<=this.magnetRadius){this.magnetSpeed=Math.min(18,this.magnetSpeed+e*24);const i=new w().subVectors(t,this.model.position).normalize();return this.model.position.addScaledVector(i,this.magnetSpeed*e),this.model.rotation.y+=e*12,this.model.rotation.x+=e*8,!1}return this.isGrounded?(this.model.position.y=this.groundY+Math.sin(this.lifeTime*4)*.08,this.model.rotation.y+=e*2.5,this.model.rotation.z=Math.sin(this.lifeTime*3)*.2):(this.velocity.y-=9.8*e,this.model.position.x+=this.velocity.x*e,this.model.position.y+=this.velocity.y*e,this.model.position.z+=this.velocity.z*e,this.model.position.y<=this.groundY&&(this.model.position.y=this.groundY,this.isGrounded=!0,this.velocity.set(0,0,0))),!1}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh.material.dispose()),this.wireframe&&(this.wireframe.geometry.dispose(),this.wireframe.material.dispose())}}class bm{scene;currencyManager;audioManager;particleSystem;drops=[];constructor(e,t,n,i){this.scene=e,this.currencyManager=t,this.audioManager=n,this.particleSystem=i}spawnDrops(e,t){let n=1,i=8;switch(t){case"virus":n=1,i=Math.floor(6+Math.random()*5);break;case"worm":n=2,i=Math.floor(8+Math.random()*3);break;case"trojan":n=3,i=Math.floor(14+Math.random()*5);break;case"ransomware":n=6,i=Math.floor(30+Math.random()*12);break}for(let r=0;r<n;r++){const a=e.clone();a.x+=(Math.random()-.5)*.4,a.z+=(Math.random()-.5)*.4,a.y=Math.max(.4,a.y);const o=new Tm(a,i);this.drops.push(o),this.scene.add(o.model)}}update(e,t){for(let n=this.drops.length-1;n>=0;n--){const i=this.drops[n];i.update(e,t)&&(this.currencyManager.addBits(i.value),this.audioManager.playCoinPickup(),this.particleSystem.emitImpactSparks(i.model.position,new w(0,1,0),!1,!0),this.scene.remove(i.model),i.dispose(),this.drops.splice(n,1))}}clearAll(){for(const e of this.drops)this.scene.remove(e.model),e.dispose();this.drops=[]}}class wm{renderer;scene;camera;clock;gameState;inputManager;desktopInput;vrInput;arena;particleSystem;audioManager;scoreManager;currencyManager;weaponManager;upgradeManager;bitDropManager;enemyManager;damageSystem;waveManager;player;uiManager;vrWristHUD;vrMenu;vrStore;targetRange;isVRActive=!1;constructor(){this.clock=new fh;const e=document.getElementById("game-container");this.renderer=new Zp({antialias:!0,powerPreference:"high-performance",precision:"mediump"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!1,this.renderer.toneMapping=Xo,this.renderer.toneMappingExposure=1.25,this.renderer.xr.enabled=!0,e.appendChild(this.renderer.domElement),this.scene=new nh,this.scene.background=new Ne(397084),this.scene.fog=new Sa(397084,.012),this.camera=new Bt(75,window.innerWidth/window.innerHeight,.1,120),this.gameState=new Jp,this.audioManager=new gm,this.scoreManager=new pm,this.uiManager=new _m,this.particleSystem=new fm,this.scene.add(this.particleSystem.group),this.arena=new nm,this.scene.add(this.arena.group),this.desktopInput=new em(this.renderer.domElement),this.inputManager=new Qp(this.desktopInput),this.weaponManager=new om,this.player=new im(this.camera,this.inputManager,this.arena,this.weaponManager),this.scene.add(this.player.playerGroup),this.vrInput=new tm(this.renderer,this.player.playerGroup,this.camera),this.vrWristHUD=new xm,this.targetRange=new Sm({onReturnToSurvival:()=>this.startSurvivalMode()}),this.scene.add(this.targetRange.group),this.vrMenu=new vm({onRespawn:()=>this.restartGame(),onResume:()=>this.resumeGame(),onTrainingRange:()=>this.startTrainingRange(),onStartSurvival:()=>this.startSurvivalMode(),onRestartSector:()=>this.restartSector(),onMainMenu:()=>this.returnToMainMenu()}),this.scene.add(this.vrMenu.group),this.enemyManager=new um(this.scene,this.particleSystem,this.audioManager),this.currencyManager=new ym,this.upgradeManager=new Em(this.currencyManager,this.weaponManager,this.audioManager),this.bitDropManager=new bm(this.scene,this.currencyManager,this.audioManager,this.particleSystem),this.vrStore=new Mm(this.currencyManager,this.upgradeManager,()=>this.continueAfterStore()),this.scene.add(this.vrStore.group),this.damageSystem=new dm(this.enemyManager,this.particleSystem,this.audioManager,this.scoreManager,this.arena),this.damageSystem.targetRange=this.targetRange,this.waveManager=new mm(this.enemyManager,this.arena,this.audioManager,this.scoreManager,this.player,this.uiManager),this.setupWebXRButton(),this.setupEventBindings();const t=this.weaponManager.getActiveWeapon();this.uiManager.updateHealth(this.player.health,this.player.maxHealth),this.uiManager.updateAmmo(t.currentAmmo,t.config.magSize),this.uiManager.updateScore(0),this.uiManager.updateCombo(1),window.addEventListener("resize",this.onWindowResize.bind(this)),this.renderer.setAnimationLoop(this.animate.bind(this))}setupWebXRButton(){const e=wi.createButton(this.renderer);e.id="vr-button-meta",document.body.appendChild(e),navigator.xr&&navigator.xr.isSessionSupported("immersive-vr").then(t=>{const n=document.getElementById("vr-status");n&&(t?(n.innerHTML='🟢 <strong>DISPOSITIVO VR META QUEST DETECTADO</strong> // Presiona "ENTER VR" abajo para entrar',n.style.color="#00f3ff"):n.innerHTML="WebXR listo para cascos VR (Meta Quest Browser / PCVR)")}).catch(()=>{}),this.renderer.xr.addEventListener("sessionstart",()=>{console.log("[VIRUS PURGE] WebXR immersive-vr session started!"),this.isVRActive=!0,this.audioManager.init(),this.audioManager.playAlarm();const t=this.renderer.xr.getSession();if(t){const n=t.supportedFrameRates,i=t.updateTargetFrameRate;if(n&&i){const r=Array.from(n);r.includes(72)?i.call(t,72).catch(()=>{}):r.includes(90)&&i.call(t,90).catch(()=>{})}}this.inputManager.setSource(this.vrInput),this.player.setVRMode(!0,this.vrInput),this.vrInput.leftGrip&&this.vrWristHUD.attachTo(this.vrInput.leftGrip),this.vrInput.onLeftControllerReady=(n,i)=>{this.vrWristHUD.attachTo(i)},this.startSurvivalMode()}),this.renderer.xr.addEventListener("sessionend",()=>{console.log("[VIRUS PURGE] WebXR session ended"),this.isVRActive=!1,this.inputManager.setSource(this.desktopInput),this.player.setVRMode(!1),this.vrMenu.hide(),this.gameState.setState(mt.MAIN_MENU),this.uiManager.showOverlay(!0)})}setupEventBindings(){this.uiManager.onStartClicked=()=>{this.audioManager.init(),this.gameState.getState()===mt.GAME_OVER?this.restartGame():this.gameState.getState()===mt.PAUSED?this.resumeGame():this.startSurvivalMode()},this.uiManager.onRangeClicked=()=>{this.audioManager.init(),this.startTrainingRange()},this.desktopInput.onLockChange=e=>{this.isVRActive||(!e&&this.gameState.getState()===mt.PLAYING?(this.gameState.setState(mt.PAUSED),this.uiManager.showOverlay(!0,"DEPURACIÓN EN PAUSA","CONTINUAR")):e&&this.gameState.getState()===mt.PAUSED&&(this.gameState.setState(mt.PLAYING),this.uiManager.showOverlay(!1)))},this.currencyManager.onBitsChange=e=>{this.uiManager.updateBits(e),this.vrWristHUD.updateBits(e)},this.weaponManager.onAmmoChange=(e,t)=>{this.uiManager.updateAmmo(e,t),this.vrWristHUD.updateAmmo(e,t)},this.weaponManager.onReloadStart=()=>{this.audioManager.playReload(),this.uiManager.showReloadIndicator(!0)},this.weaponManager.onReloadEnd=()=>{this.uiManager.showReloadIndicator(!1)},this.weaponManager.onWeaponChanged=e=>{const t=document.querySelector(".weapon-name");t&&(t.textContent=e.config.name),this.uiManager.updateAmmo(e.currentAmmo,e.config.magSize),this.vrWristHUD.updateAmmo(e.currentAmmo,e.config.magSize)},this.waveManager.onEnemyKilledCallback=e=>{this.bitDropManager.spawnDrops(e.getPosition(),e.enemyType)},this.waveManager.onOpenStore=()=>{this.openStore()},this.uiManager.onStoreContinue=()=>{this.continueAfterStore()},this.damageSystem.onHitRegistered=e=>{this.uiManager.triggerHitmarker(e)},this.scoreManager.onScoreUpdate=e=>{this.uiManager.updateScore(e),this.vrWristHUD.updateScore(e,this.scoreManager.getStats().combo)},this.scoreManager.onComboUpdate=e=>{this.uiManager.updateCombo(e),this.vrWristHUD.updateScore(this.scoreManager.getStats().score,e)},this.scoreManager.onCombatAlert=(e,t)=>{this.uiManager.showCombatAlert(e,t)},this.enemyManager.onPlayerDamaged=e=>{this.player.takeDamage(e),this.audioManager.playPlayerHurt(),this.uiManager.triggerDamageFlash()},this.enemyManager.onBossHealthUpdate=(e,t)=>{this.uiManager.showBossBar(!0,"RANSOMWARE.LOCKBIT.CORE // AMENAZA NIVEL 5"),this.uiManager.updateBossHealth(e,t)},this.enemyManager.onBossKilled=()=>{this.uiManager.showBossBar(!1),this.uiManager.showCombatAlert("¡NÚCLEO RANSOMWARE PURGADO!","headshot")},this.player.onHealthChange=(e,t)=>{this.uiManager.updateHealth(e,t),this.vrWristHUD.updateHealth(e,t)},this.player.onDeath=()=>{this.gameState.setState(mt.GAME_OVER),this.uiManager.showBossBar(!1);const e=this.scoreManager.getStats();this.isVRActive?this.vrMenu.showGameOver({score:e.score,accuracy:e.accuracy,wave:this.waveManager.getCurrentPhaseConfig().phaseNumber},this.camera):this.uiManager.showOverlay(!0,"SISTEMA COMPROMETIDO",`REAPARECER // SCORE: ${e.score} (ACC: ${e.accuracy}%)`),document.pointerLockElement&&document.exitPointerLock()}}startSurvivalMode(){this.targetRange.disable(),this.vrMenu.hide(),this.vrStore.hide(),this.uiManager.showStoreOverlay(!1),this.gameState.setMode(Bi.SURVIVAL),this.audioManager.playAlarm(),this.isVRActive||this.desktopInput.requestLock(),this.restartGame()}startTrainingRange(){this.enemyManager.clearAll(),this.bitDropManager.clearAll(),this.waveManager.stop(),this.vrMenu.hide(),this.vrStore.hide(),this.uiManager.showStoreOverlay(!1),this.targetRange.enable(),this.player.respawn(),this.scoreManager.reset();const e=this.weaponManager.getActiveWeapon();e.currentAmmo=e.config.magSize,e.isReloading=!1,this.uiManager.updateAmmo(e.currentAmmo,e.config.magSize),this.uiManager.updateHealth(this.player.health,this.player.maxHealth),this.uiManager.resetVignette(),this.uiManager.showBossBar(!1),this.uiManager.showOverlay(!1),this.uiManager.updateStatus("🎯 CAMPO DE TIRO // CALIBRACIÓN"),this.isVRActive||this.desktopInput.requestLock(),this.gameState.setMode(Bi.TRAINING),this.gameState.setState(mt.PLAYING)}returnToMainMenu(){this.enemyManager.clearAll(),this.bitDropManager.clearAll(),this.waveManager.stop(),this.targetRange.disable(),this.vrStore.hide(),this.uiManager.showStoreOverlay(!1),this.gameState.setState(mt.MAIN_MENU),this.isVRActive?this.vrMenu.showMainMenu(this.camera):this.uiManager.showOverlay(!0)}openStore(){this.isVRActive?(this.vrStore.show(this.camera),this.audioManager.playStoreOpen()):(this.uiManager.showStoreOverlay(!0,this.upgradeManager,this.currencyManager),this.audioManager.playStoreOpen(),document.pointerLockElement&&document.exitPointerLock())}continueAfterStore(){this.vrStore.hide(),this.uiManager.showStoreOverlay(!1),this.isVRActive||this.desktopInput.requestLock(),this.waveManager.continueAfterStore()}togglePause(){const e=this.gameState.getState();e===mt.PLAYING?this.pauseGame():e===mt.PAUSED&&this.resumeGame()}pauseGame(){this.gameState.setState(mt.PAUSED),this.isVRActive?this.vrMenu.showPauseMenu(this.camera):(this.uiManager.showOverlay(!0,"DEPURACIÓN EN PAUSA","CONTINUAR"),document.pointerLockElement&&document.exitPointerLock())}resumeGame(){this.vrMenu.hide(),this.vrStore.hide(),this.gameState.setState(mt.PLAYING),this.uiManager.showOverlay(!1),this.uiManager.showStoreOverlay(!1),this.isVRActive||this.desktopInput.requestLock()}restartSector(){this.enemyManager.clearAll(),this.bitDropManager.clearAll(),this.vrMenu.hide(),this.vrStore.hide(),this.uiManager.showStoreOverlay(!1),this.player.respawn();const e=this.weaponManager.getActiveWeapon();e.currentAmmo=e.config.magSize,e.isReloading=!1,this.uiManager.updateAmmo(e.currentAmmo,e.config.magSize),this.uiManager.updateHealth(this.player.health,this.player.maxHealth),this.uiManager.resetVignette(),this.uiManager.showBossBar(!1),this.uiManager.showOverlay(!1),this.isVRActive||this.desktopInput.requestLock(),this.gameState.setState(mt.PLAYING),this.waveManager.restartCurrentPhase()}restartGame(){this.enemyManager.clearAll(),this.bitDropManager.clearAll(),this.player.respawn(),this.scoreManager.reset(),this.upgradeManager.reset(),this.currencyManager.reset(),this.vrMenu.hide(),this.vrStore.hide(),this.uiManager.showStoreOverlay(!1);const e=this.weaponManager.getActiveWeapon();e.currentAmmo=e.config.magSize,e.isReloading=!1,this.uiManager.updateAmmo(e.currentAmmo,e.config.magSize),this.uiManager.updateHealth(this.player.health,this.player.maxHealth),this.uiManager.resetVignette(),this.uiManager.showBossBar(!1),this.isVRActive||this.desktopInput.requestLock(),this.gameState.setState(mt.PLAYING),this.uiManager.showOverlay(!1),this.waveManager.reset(),this.waveManager.start()}handlePlayerInput(){if(this.inputManager.consumePauseTriggered()){this.togglePause();return}const e=this.weaponManager.getActiveWeapon();if(e.isAutomatic?this.inputManager.isShootHeld():this.inputManager.consumeShootTriggered())if(e.canFire()){e.fire(),e.config.name.includes("SHOTGUN")?this.audioManager.playShotgunShot():e.config.name.includes("SMG")?this.audioManager.playSMGShot():this.audioManager.playShot();const n=this.player.getShootRay();this.damageSystem.processShot(n.origin,n.direction,e)}else e.currentAmmo===0&&!e.isReloading&&this.audioManager.playDryFire();this.inputManager.consumeReloadTriggered()&&e.reload()}animate(){const e=Math.min(this.clock.getDelta(),.05);if(this.gameState.getState()===mt.PLAYING){if(this.inputManager.update(e),this.handlePlayerInput(),this.player.update(e),this.weaponManager.update(e),this.bitDropManager.update(e,this.player.position),this.gameState.getMode()===Bi.SURVIVAL)this.enemyManager.update(e,this.player.position),this.waveManager.update(e);else if(this.gameState.getMode()===Bi.TRAINING){const n=this.player.getShootRay();this.targetRange.update(e,n.origin,n.direction)}if(this.isVRActive){const n=this.weaponManager.getActiveWeapon(),i=[...this.enemyManager.getAllHitboxes(),...this.targetRange.getAllHitboxes(),...this.arena.targetMeshes];n.updateLaserAim?.(i)}this.particleSystem.update(e),this.scoreManager.update(e),this.gameState.update(e)}else if(this.particleSystem.update(e),this.isVRActive&&this.vrStore.isVisible()){this.inputManager.update(e);const n=this.inputManager.consumeShootTriggered(),i=this.player.getShootRay();this.vrStore.update(i.origin,i.direction,n),this.weaponManager.getActiveWeapon().updateLaserAim?.(this.vrStore.group.children)}else if(this.isVRActive&&this.vrMenu.isVisible()){if(this.inputManager.update(e),this.inputManager.consumePauseTriggered()&&this.gameState.getState()===mt.PAUSED){this.resumeGame();return}const n=this.inputManager.consumeShootTriggered(),i=this.player.getShootRay();this.vrMenu.update(i.origin,i.direction,n),this.weaponManager.getActiveWeapon().updateLaserAim?.(this.vrMenu.group.children)}this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}window.addEventListener("DOMContentLoaded",()=>{const s=new wm;window.__PURGE_GAME__=s,console.log("[PURGE] Game engine initialized."),"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").catch(e=>{console.log("[PWA] ServiceWorker info:",e)})});
