/*! URI.js v1.10.2 http://medialize.github.com/URI.js/ */
/* build contains: URI.js, URITemplate.js, jquery.URI.js */
(function(h,k){"object"===typeof exports?module.exports=k(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],k):h.URI=k(h.punycode,h.IPv6,h.SecondLevelDomains)})(this,function(h,k,l){function c(a,b){if(!(this instanceof c))return new c(a,b);void 0===a&&(a="undefined"!==typeof location?location.href+"":"");this.href(a);return void 0!==b?this.absoluteTo(b):this}function s(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,
"\\$1")}function x(a){return String(Object.prototype.toString.call(a)).slice(8,-1)}function u(a){return"Array"===x(a)}function m(a,b){var d,c;if(u(b)){d=0;for(c=b.length;d<c;d++)if(!m(a,b[d]))return!1;return!0}var r=x(b);d=0;for(c=a.length;d<c;d++)if("RegExp"===r){if("string"===typeof a[d]&&a[d].match(b))return!0}else if(a[d]===b)return!0;return!1}function y(a,b){if(!u(a)||!u(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var d=0,c=a.length;d<c;d++)if(a[d]!==b[d])return!1;return!0}function v(a){return encodeURIComponent(a).replace(/[!'()*]/g,
escape).replace(/\*/g,"%2A")}var f=c.prototype,p=Object.prototype.hasOwnProperty;c._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:c.duplicateQueryParameters}};c.duplicateQueryParameters=!1;c.protocol_expression=/^[a-z][a-z0-9-+-]*$/i;c.idn_expression=/[^a-z0-9\.-]/i;c.punycode_expression=/(xn--)/i;c.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;c.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
c.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;c.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};c.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/;c.encode=v;c.decode=decodeURIComponent;c.iso8859=function(){c.encode=escape;c.decode=unescape};c.unicode=function(){c.encode=
v;c.decode=decodeURIComponent};c.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+",
"%2C":",","%3B":";","%3D":"="}}}};c.encodeQuery=function(a){return c.encode(a+"").replace(/%20/g,"+")};c.decodeQuery=function(a){return c.decode((a+"").replace(/\+/g,"%20"))};c.recodePath=function(a){a=(a+"").split("/");for(var b=0,d=a.length;b<d;b++)a[b]=c.encodePathSegment(c.decode(a[b]));return a.join("/")};c.decodePath=function(a){a=(a+"").split("/");for(var b=0,d=a.length;b<d;b++)a[b]=c.decodePathSegment(a[b]);return a.join("/")};var e={encode:"encode",decode:"decode"},g,q=function(a,b){return function(d){return c[b](d+
"").replace(c.characters[a][b].expression,function(d){return c.characters[a][b].map[d]})}};for(g in e)c[g+"PathSegment"]=q("pathname",e[g]);c.encodeReserved=q("reserved","encode");c.parse=function(a,b){var d;b||(b={});d=a.indexOf("#");-1<d&&(b.fragment=a.substring(d+1)||null,a=a.substring(0,d));d=a.indexOf("?");-1<d&&(b.query=a.substring(d+1)||null,a=a.substring(0,d));"//"===a.substring(0,2)?(b.protocol="",a=a.substring(2),a=c.parseAuthority(a,b)):(d=a.indexOf(":"),-1<d&&(b.protocol=a.substring(0,
d),b.protocol&&!b.protocol.match(c.protocol_expression)?b.protocol=void 0:"file"===b.protocol?a=a.substring(d+3):"//"===a.substring(d+1,d+3)?(a=a.substring(d+3),a=c.parseAuthority(a,b)):(a=a.substring(d+1),b.urn=!0)));b.path=a;return b};c.parseHost=function(a,b){var d=a.indexOf("/"),c;-1===d&&(d=a.length);"["===a.charAt(0)?(c=a.indexOf("]"),b.hostname=a.substring(1,c)||null,b.port=a.substring(c+2,d)||null):a.indexOf(":")!==a.lastIndexOf(":")?(b.hostname=a.substring(0,d)||null,b.port=null):(c=a.substring(0,
d).split(":"),b.hostname=c[0]||null,b.port=c[1]||null);b.hostname&&"/"!==a.substring(d).charAt(0)&&(d++,a="/"+a);return a.substring(d)||"/"};c.parseAuthority=function(a,b){a=c.parseUserinfo(a,b);return c.parseHost(a,b)};c.parseUserinfo=function(a,b){var d=a.indexOf("@"),n=a.indexOf("/");-1<d&&(-1===n||d<n)?(n=a.substring(0,d).split(":"),b.username=n[0]?c.decode(n[0]):null,n.shift(),b.password=n[0]?c.decode(n.join(":")):null,a=a.substring(d+1)):(b.username=null,b.password=null);return a};c.parseQuery=
function(a){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};var b={};a=a.split("&");for(var d=a.length,n,r,e=0;e<d;e++)n=a[e].split("="),r=c.decodeQuery(n.shift()),n=n.length?c.decodeQuery(n.join("=")):null,b[r]?("string"===typeof b[r]&&(b[r]=[b[r]]),b[r].push(n)):b[r]=n;return b};c.build=function(a){var b="";a.protocol&&(b+=a.protocol+":");a.urn||!b&&!a.hostname||(b+="//");b+=c.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&
(b+="/"),b+=a.path);"string"===typeof a.query&&a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};c.buildHost=function(a){var b="";if(a.hostname)c.ip6_expression.test(a.hostname)?b=a.port?b+("["+a.hostname+"]:"+a.port):b+a.hostname:(b+=a.hostname,a.port&&(b+=":"+a.port));else return"";return b};c.buildAuthority=function(a){return c.buildUserinfo(a)+c.buildHost(a)};c.buildUserinfo=function(a){var b="";a.username&&(b+=c.encode(a.username),a.password&&(b+=
":"+c.encode(a.password)),b+="@");return b};c.buildQuery=function(a,b){var d="",n,r,e,f;for(r in a)if(p.call(a,r)&&r)if(u(a[r]))for(n={},e=0,f=a[r].length;e<f;e++)void 0!==a[r][e]&&void 0===n[a[r][e]+""]&&(d+="&"+c.buildQueryParameter(r,a[r][e]),!0!==b&&(n[a[r][e]+""]=!0));else void 0!==a[r]&&(d+="&"+c.buildQueryParameter(r,a[r]));return d.substring(1)};c.buildQueryParameter=function(a,b){return c.encodeQuery(a)+(null!==b?"="+c.encodeQuery(b):"")};c.addQuery=function(a,b,d){if("object"===typeof b)for(var n in b)p.call(b,
n)&&c.addQuery(a,n,b[n]);else if("string"===typeof b)void 0===a[b]?a[b]=d:("string"===typeof a[b]&&(a[b]=[a[b]]),u(d)||(d=[d]),a[b]=a[b].concat(d));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};c.removeQuery=function(a,b,d){var n;if(u(b))for(d=0,n=b.length;d<n;d++)a[b[d]]=void 0;else if("object"===typeof b)for(n in b)p.call(b,n)&&c.removeQuery(a,n,b[n]);else if("string"===typeof b)if(void 0!==d)if(a[b]===d)a[b]=void 0;else{if(u(a[b])){n=a[b];var e={},
f,g;if(u(d))for(f=0,g=d.length;f<g;f++)e[d[f]]=!0;else e[d]=!0;f=0;for(g=n.length;f<g;f++)void 0!==e[n[f]]&&(n.splice(f,1),g--,f--);a[b]=n}}else a[b]=void 0;else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");};c.hasQuery=function(a,b,d,n){if("object"===typeof b){for(var e in b)if(p.call(b,e)&&!c.hasQuery(a,e,b[e]))return!1;return!0}if("string"!==typeof b)throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");switch(x(d)){case "Undefined":return b in
a;case "Boolean":return a=Boolean(u(a[b])?a[b].length:a[b]),d===a;case "Function":return!!d(a[b],b,a);case "Array":return u(a[b])?(n?m:y)(a[b],d):!1;case "RegExp":return u(a[b])?n?m(a[b],d):!1:Boolean(a[b]&&a[b].match(d));case "Number":d=String(d);case "String":return u(a[b])?n?m(a[b],d):!1:a[b]===d;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};c.commonPath=function(a,b){var d=Math.min(a.length,b.length),c;for(c=
0;c<d;c++)if(a.charAt(c)!==b.charAt(c)){c--;break}if(1>c)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(c)||"/"!==b.charAt(c))c=a.substring(0,c).lastIndexOf("/");return a.substring(0,c+1)};c.withinString=function(a,b){return a.replace(c.find_uri_expression,b)};c.ensureValidHostname=function(a){if(a.match(c.invalid_hostname_characters)){if(!h)throw new TypeError("Hostname '"+a+"' contains characters other than [A-Z0-9.-] and Punycode.js is not available");if(h.toASCII(a).match(c.invalid_hostname_characters))throw new TypeError("Hostname '"+
a+"' contains characters other than [A-Z0-9.-]");}};f.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=c.build(this._parts),this._deferred_build=!1;return this};f.clone=function(){return new c(this)};f.valueOf=f.toString=function(){return this.build(!1)._string};e={protocol:"protocol",username:"username",password:"password",hostname:"hostname",port:"port"};q=function(a){return function(b,d){if(void 0===b)return this._parts[a]||"";this._parts[a]=
b;this.build(!d);return this}};for(g in e)f[g]=q(e[g]);e={query:"?",fragment:"#"};q=function(a,b){return function(d,c){if(void 0===d)return this._parts[a]||"";null!==d&&(d+="",d.charAt(0)===b&&(d=d.substring(1)));this._parts[a]=d;this.build(!c);return this}};for(g in e)f[g]=q(g,e[g]);e={search:["?","query"],hash:["#","fragment"]};q=function(a,b){return function(d,c){var e=this[a](d,c);return"string"===typeof e&&e.length?b+e:e}};for(g in e)f[g]=q(e[g][1],e[g][0]);f.pathname=function(a,b){if(void 0===
a||!0===a){var d=this._parts.path||(this._parts.urn?"":"/");return a?c.decodePath(d):d}this._parts.path=a?c.recodePath(a):"/";this.build(!b);return this};f.path=f.pathname;f.href=function(a,b){var d;if(void 0===a)return this.toString();this._string="";this._parts=c._parts();var n=a instanceof c,e="object"===typeof a&&(a.hostname||a.path);!n&&(e&&void 0!==a.pathname)&&(a=a.toString());if("string"===typeof a)this._parts=c.parse(a,this._parts);else if(n||e)for(d in n=n?a._parts:a,n)p.call(this._parts,
d)&&(this._parts[d]=n[d]);else throw new TypeError("invalid input");this.build(!b);return this};f.is=function(a){var b=!1,d=!1,e=!1,f=!1,p=!1,g=!1,u=!1,m=!this._parts.urn;this._parts.hostname&&(m=!1,d=c.ip4_expression.test(this._parts.hostname),e=c.ip6_expression.test(this._parts.hostname),b=d||e,p=(f=!b)&&l&&l.has(this._parts.hostname),g=f&&c.idn_expression.test(this._parts.hostname),u=f&&c.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return m;case "absolute":return!m;
case "domain":case "name":return f;case "sld":return p;case "ip":return b;case "ip4":case "ipv4":case "inet4":return d;case "ip6":case "ipv6":case "inet6":return e;case "idn":return g;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return u}return null};var t=f.protocol,w=f.port,z=f.hostname;f.protocol=function(a,b){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),a.match(/[^a-zA-z0-9\.+-]/)))throw new TypeError("Protocol '"+a+"' contains characters other than [A-Z0-9.+-]");
return t.call(this,a,b)};f.scheme=f.protocol;f.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError("Port '"+a+"' contains characters other than [0-9]");return w.call(this,a,b)};f.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var d={};c.parseHost(a,d);a=d.hostname}return z.call(this,a,b)};f.host=function(a,b){if(this._parts.urn)return void 0===
a?"":this;if(void 0===a)return this._parts.hostname?c.buildHost(this._parts):"";c.parseHost(a,this._parts);this.build(!b);return this};f.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?c.buildAuthority(this._parts):"";c.parseAuthority(a,this._parts);this.build(!b);return this};f.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.username)return"";var d=c.buildUserinfo(this._parts);return d.substring(0,
d.length-1)}"@"!==a[a.length-1]&&(a+="@");c.parseUserinfo(a,this._parts);this.build(!b);return this};f.resource=function(a,b){var d;if(void 0===a)return this.path()+this.search()+this.hash();d=c.parse(a);this._parts.path=d.path;this._parts.query=d.query;this._parts.fragment=d.fragment;this.build(!b);return this};f.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.length-this.domain().length-
1;return this._parts.hostname.substring(0,d)||""}d=this._parts.hostname.length-this.domain().length;d=this._parts.hostname.substring(0,d);d=RegExp("^"+s(d));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&c.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(d,a);this.build(!b);return this};f.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.match(/\./g);
if(d&&2>d.length)return this._parts.hostname;d=this._parts.hostname.length-this.tld(b).length-1;d=this._parts.hostname.lastIndexOf(".",d-1)+1;return this._parts.hostname.substring(d)||""}if(!a)throw new TypeError("cannot set domain empty");c.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(d=RegExp(s(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(d,a));this.build(!b);return this};f.tld=function(a,b){if(this._parts.urn)return void 0===a?"":
this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.lastIndexOf("."),d=this._parts.hostname.substring(d+1);return!0!==b&&l&&l.list[d.toLowerCase()]?l.get(this._parts.hostname)||d:d}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(l&&l.is(a))d=RegExp(s(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(d,a);else throw new TypeError("TLD '"+a+"' contains characters other than [A-Z0-9]");else{if(!this._parts.hostname||
this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");d=RegExp(s(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(d,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};f.directory=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var d=this._parts.path.length-this.filename().length-1,d=this._parts.path.substring(0,
d)||(this._parts.hostname?"/":"");return a?c.decodePath(d):d}d=this._parts.path.length-this.filename().length;d=this._parts.path.substring(0,d);d=RegExp("^"+s(d));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=c.recodePath(a);this._parts.path=this._parts.path.replace(d,a);this.build(!b);return this};f.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";
var d=this._parts.path.lastIndexOf("/"),d=this._parts.path.substring(d+1);return a?c.decodePathSegment(d):d}d=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(d=!0);var e=RegExp(s(this.filename())+"$");a=c.recodePath(a);this._parts.path=this._parts.path.replace(e,a);d?this.normalizePath(b):this.build(!b);return this};f.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this.filename(),e=d.lastIndexOf(".");
if(-1===e)return"";d=d.substring(e+1);d=/^[a-z0-9%]+$/i.test(d)?d:"";return a?c.decodePathSegment(d):d}"."===a.charAt(0)&&(a=a.substring(1));if(d=this.suffix())e=a?RegExp(s(d)+"$"):RegExp(s("."+d)+"$");else{if(!a)return this;this._parts.path+="."+c.recodePath(a)}e&&(a=c.recodePath(a),this._parts.path=this._parts.path.replace(e,a));this.build(!b);return this};f.segment=function(a,b,d){var c=this._parts.urn?":":"/",e=this.path(),f="/"===e.substring(0,1),e=e.split(c);"number"!==typeof a&&(d=b,b=a,a=
void 0);if(void 0!==a&&"number"!==typeof a)throw Error("Bad segment '"+a+"', must be 0-based integer");f&&e.shift();0>a&&(a=Math.max(e.length+a,0));if(void 0===b)return void 0===a?e:e[a];if(null===a||void 0===e[a])if(u(b))e=b;else{if(b||"string"===typeof b&&b.length)""===e[e.length-1]?e[e.length-1]=b:e.push(b)}else b||"string"===typeof b&&b.length?e[a]=b:e.splice(a,1);f&&e.unshift("");return this.path(e.join(c),d)};var A=f.query;f.query=function(a,b){if(!0===a)return c.parseQuery(this._parts.query);
if("function"===typeof a){var d=c.parseQuery(this._parts.query),e=a.call(this,d);this._parts.query=c.buildQuery(e||d,this._parts.duplicateQueryParameters);this.build(!b);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=c.buildQuery(a,this._parts.duplicateQueryParameters),this.build(!b),this):A.call(this,a,b)};f.setQuery=function(a,b,d){var e=c.parseQuery(this._parts.query);if("object"===typeof a)for(var f in a)p.call(a,f)&&(e[f]=a[f]);else if("string"===typeof a)e[a]=void 0!==
b?b:null;else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=c.buildQuery(e,this._parts.duplicateQueryParameters);"string"!==typeof a&&(d=b);this.build(!d);return this};f.addQuery=function(a,b,d){var e=c.parseQuery(this._parts.query);c.addQuery(e,a,void 0===b?null:b);this._parts.query=c.buildQuery(e,this._parts.duplicateQueryParameters);"string"!==typeof a&&(d=b);this.build(!d);return this};f.removeQuery=function(a,b,d){var e=c.parseQuery(this._parts.query);
c.removeQuery(e,a,b);this._parts.query=c.buildQuery(e,this._parts.duplicateQueryParameters);"string"!==typeof a&&(d=b);this.build(!d);return this};f.hasQuery=function(a,b,d){var e=c.parseQuery(this._parts.query);return c.hasQuery(e,a,b,d)};f.setSearch=f.setQuery;f.addSearch=f.addQuery;f.removeSearch=f.removeQuery;f.hasSearch=f.hasQuery;f.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};
f.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};f.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&h?this._parts.hostname=h.toASCII(this._parts.hostname):this.is("IPv6")&&k&&(this._parts.hostname=k.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};f.normalizePort=function(a){"string"===typeof this._parts.protocol&&
this._parts.port===c.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};f.normalizePath=function(a){if(this._parts.urn||!this._parts.path||"/"===this._parts.path)return this;var b,d=this._parts.path,e,f;"/"!==d.charAt(0)&&("."===d.charAt(0)&&d.substring(0,d.indexOf("/")),b=!0,d="/"+d);for(d=d.replace(/(\/(\.\/)+)|\/{2,}/g,"/");;){e=d.indexOf("/../");if(-1===e)break;else if(0===e){d=d.substring(3);break}f=d.substring(0,e).lastIndexOf("/");-1===f&&(f=e);d=d.substring(0,
f)+d.substring(e+3)}b&&this.is("relative")&&(d=d.substring(1));d=c.recodePath(d);this._parts.path=d;this.build(!a);return this};f.normalizePathname=f.normalizePath;f.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(c.parseQuery(this._parts.query)):this._parts.query=null,this.build(!a));return this};f.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};f.normalizeSearch=f.normalizeQuery;f.normalizeHash=
f.normalizeFragment;f.iso8859=function(){var a=c.encode,b=c.decode;c.encode=escape;c.decode=decodeURIComponent;this.normalize();c.encode=a;c.decode=b;return this};f.unicode=function(){var a=c.encode,b=c.decode;c.encode=v;c.decode=unescape;this.normalize();c.encode=a;c.decode=b;return this};f.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&h?(b+=h.toUnicode(a._parts.hostname),
a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&(a._parts.path&&"/"!==a._parts.path.charAt(0))&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var d="",e=0,f=a._parts.query.split("&"),p=f.length;e<p;e++){var g=(f[e]||"").split("="),d=d+("&"+c.decodeQuery(g[0]).replace(/&/g,"%26"));void 0!==g[1]&&(d+="="+c.decodeQuery(g[1]).replace(/&/g,"%26"))}b+="?"+d.substring(1)}return b+=a.hash()};f.absoluteTo=function(a){var b=this.clone(),d=["protocol","username","password","hostname",
"port"],e,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierachical components");a instanceof c||(a=new c(a));b._parts.protocol||(b._parts.protocol=a._parts.protocol);if(this._parts.hostname)return b;e=0;for(f;f=d[e];e++)b._parts[f]=a._parts[f];d=["query","path"];e=0;for(f;f=d[e];e++)!b._parts[f]&&a._parts[f]&&(b._parts[f]=a._parts[f]);"/"!==b.path().charAt(0)&&(a=a.directory(),b._parts.path=(a?a+"/":"")+b._parts.path,b.normalizePath());b.build();return b};f.relativeTo=
function(a){var b=this.clone(),d=["protocol","username","password","hostname","port"],e;if(b._parts.urn)throw Error("URNs do not have any generally defined hierachical components");a instanceof c||(a=new c(a));if("/"!==b.path().charAt(0)||"/"!==a.path().charAt(0))throw Error("Cannot calculate common path from non-relative URLs");e=c.commonPath(b.path(),a.path());for(var f=0,g;g=d[f];f++)b._parts[g]=null;if("/"===e)return b;if(!e)return this.clone();a=a.directory();d=b.directory();if(a===d)return b._parts.path=
b.filename(),b.build();a.substring(e.length);d=d.substring(e.length);if(a+"/"===e)return d&&(d+="/"),b._parts.path=d+b.filename(),b.build();d="../";e=RegExp("^"+s(e));for(a=a.replace(e,"/").match(/\//g).length-1;a--;)d+="../";b._parts.path=b._parts.path.replace(e,d);return b.build()};f.equals=function(a){var b=this.clone();a=new c(a);var d={},e={},f={},g;b.normalize();a.normalize();if(b.toString()===a.toString())return!0;d=b.query();e=a.query();b.query("");a.query("");if(b.toString()!==a.toString()||
d.length!==e.length)return!1;d=c.parseQuery(d);e=c.parseQuery(e);for(g in d)if(p.call(d,g)){if(!u(d[g])){if(d[g]!==e[g])return!1}else if(!y(d[g],e[g]))return!1;f[g]=!0}for(g in e)if(p.call(e,g)&&!f[g])return!1;return!0};f.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};return c});
(function(h,k){"object"===typeof exports?module.exports=k(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],k):h.URITemplate=k(h.URI)})(this,function(h){function k(c){if(k._cache[c])return k._cache[c];if(!(this instanceof k))return new k(c);this.expression=c;k._cache[c]=this;return this}function l(c){this.data=c;this.cache={}}var c=Object.prototype.hasOwnProperty,s=k.prototype,x={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encode"},"+":{prefix:"",separator:",",
named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},"&":{prefix:"&",separator:"&",named:!0,
empty_name_separator:!0,encode:"encode"}};k._cache={};k.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;k.VARIABLE_PATTERN=/^([^*:]+)((\*)|:(\d+))?$/;k.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_]/;k.expand=function(c,m){var h=x[c.operator],v=h.named?"Named":"Unnamed",f=c.variables,p=[],e,g,q;for(q=0;g=f[q];q++)e=m.get(g.name),e.val.length?p.push(k["expand"+v](e,h,g.explode,g.explode&&h.separator||",",g.maxlength,g.name)):e.type&&p.push("");return p.length?h.prefix+p.join(h.separator):""};k.expandNamed=
function(c,m,k,v,f,p){var e="",g=m.encode;m=m.empty_name_separator;var q=!c[g].length,t=2===c.type?"":h[g](p),w,l,s;l=0;for(s=c.val.length;l<s;l++)f?(w=h[g](c.val[l][1].substring(0,f)),2===c.type&&(t=h[g](c.val[l][0].substring(0,f)))):q?(w=h[g](c.val[l][1]),2===c.type?(t=h[g](c.val[l][0]),c[g].push([t,w])):c[g].push([void 0,w])):(w=c[g][l][1],2===c.type&&(t=c[g][l][0])),e&&(e+=v),k?e+=t+(m||w?"=":"")+w:(l||(e+=h[g](p)+(m||w?"=":"")),2===c.type&&(e+=t+","),e+=w);return e};k.expandUnnamed=function(c,
m,k,v,f,p){p="";var e=m.encode;m=m.empty_name_separator;var g=!c[e].length,q,t,l,s;l=0;for(s=c.val.length;l<s;l++)f?t=h[e](c.val[l][1].substring(0,f)):g?(t=h[e](c.val[l][1]),c[e].push([2===c.type?h[e](c.val[l][0]):void 0,t])):t=c[e][l][1],p&&(p+=v),2===c.type&&(q=f?h[e](c.val[l][0].substring(0,f)):c[e][l][0],p+=q,p=k?p+(m||t?"=":""):p+","),p+=t;return p};s.expand=function(c){var m="";this.parts&&this.parts.length||this.parse();c instanceof l||(c=new l(c));for(var h=0,v=this.parts.length;h<v;h++)m+=
"string"===typeof this.parts[h]?this.parts[h]:k.expand(this.parts[h],c);return m};s.parse=function(){var c=this.expression,h=k.EXPRESSION_PATTERN,l=k.VARIABLE_PATTERN,v=k.VARIABLE_NAME_PATTERN,f=[],p=0,e,g,q;for(h.lastIndex=0;;){g=h.exec(c);if(null===g){f.push(c.substring(p));break}else f.push(c.substring(p,g.index)),p=g.index+g[0].length;if(!x[g[1]])throw Error('Unknown Operator "'+g[1]+'" in "'+g[0]+'"');if(!g[3])throw Error('Unclosed Expression "'+g[0]+'"');e=g[2].split(",");for(var t=0,s=e.length;t<
s;t++){q=e[t].match(l);if(null===q)throw Error('Invalid Variable "'+e[t]+'" in "'+g[0]+'"');if(q[1].match(v))throw Error('Invalid Variable Name "'+q[1]+'" in "'+g[0]+'"');e[t]={name:q[1],explode:!!q[3],maxlength:q[4]&&parseInt(q[4],10)}}if(!e.length)throw Error('Expression Missing Variable(s) "'+g[0]+'"');f.push({expression:g[0],operator:g[1],variables:e})}f.length||f.push(c);this.parts=f;return this};l.prototype.get=function(h){var m=this.data,k={type:0,val:[],encode:[],encodeReserved:[]},l;if(void 0!==
this.cache[h])return this.cache[h];this.cache[h]=k;m="[object Function]"===String(Object.prototype.toString.call(m))?m(h):"[object Function]"===String(Object.prototype.toString.call(m[h]))?m[h](h):m[h];if(void 0!==m&&null!==m)if("[object Array]"===String(Object.prototype.toString.call(m))){l=0;for(h=m.length;l<h;l++)void 0!==m[l]&&null!==m[l]&&k.val.push([void 0,String(m[l])]);k.val.length&&(k.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(m))){for(l in m)c.call(m,l)&&(void 0!==
m[l]&&null!==m[l])&&k.val.push([l,String(m[l])]);k.val.length&&(k.type=2)}else k.type=1,k.val.push([void 0,String(m)]);return k};h.expand=function(c,m){var l=(new k(c)).expand(m);return new h(l)};return k});
(function(h,k){"object"===typeof exports?module.exports=k(require("jquery","./URI")):"function"===typeof define&&define.amd?define(["jquery","./URI"],k):k(h.jQuery,h.URI)})(this,function(h,k){function l(c){return c.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function c(c){var e;h.each(["src","href","action"],function(f,h){return h in c?(e=h,!1):!0});return"input"===c.nodeName.toLowerCase()&&"image"!==c.type?void 0:e?e:"src"}function s(c){return{get:function(e){return h(e).uri()[c]()},set:function(e,
f){h(e).uri()[c](f);return f}}}function x(p,e){var g,k,l;if(!c(p)||!e)return!1;g=e.match(f);if(!g||!g[5]&&":"!==g[2]&&!m[g[2]])return!1;l=h(p).uri();if(g[5])return l.is(g[5]);if(":"===g[2])return k=g[1].toLowerCase()+":",m[k]?m[k](l,g[4]):!1;k=g[1].toLowerCase();return u[k]?m[g[2]](l[k](),g[4],k):!1}var u={},m={"=":function(c,e){return c===e},"^=":function(c,e,f){return!!(c+"").match(RegExp("^"+l(e),"i"))},"$=":function(c,e,f){return!!(c+"").match(RegExp(l(e)+"$","i"))},"*=":function(c,e,f){"directory"==
f&&(c+="/");return!!(c+"").match(RegExp(l(e),"i"))},"equals:":function(c,e){return c.equals(e)},"is:":function(c,e){return c.is(e)}};h.each("authority directory domain filename fragment hash host hostname href password path pathname port protocol query resource scheme search subdomain suffix tld username".split(" "),function(c,e){u[e]=!0;h.attrHooks["uri:"+e]=s(e)});var y=function(c,e){return h(c).uri().href(e).toString()};h.each(["src","href","action","uri"],function(c,e){h.attrHooks[e]={set:y}});
h.attrHooks.uri.get=function(c){return h(c).uri()};h.fn.uri=function(f){var e=this.first(),g=e.get(0),h=c(g);if(!h)throw Error('Element "'+g.nodeName+'" does not have either property: href, src, action');if(void 0!==f){var l=e.data("uri");if(l)return l.href(f);f instanceof k||(f=k(f))}else{if(f=e.data("uri"))return f;f=k(e.attr(h))}f._dom_element=g;f._dom_attribute=h;f.normalize();e.data("uri",f);return f};k.prototype.build=function(c){if(this._dom_element)this._string=k.build(this._parts),this._deferred_build=
!1,this._dom_element.setAttribute(this._dom_attribute,this._string),this._dom_element[this._dom_attribute]=this._string;else if(!0===c)this._deferred_build=!0;else if(void 0===c||this._deferred_build)this._string=k.build(this._parts),this._deferred_build=!1;return this};var v,f=/^([a-zA-Z]+)\s*([\^\$*]?=|:)\s*(['"]?)(.+)\3|^\s*([a-zA-Z0-9]+)\s*$/;v=h.expr.createPseudo?h.expr.createPseudo(function(c){return function(e){return x(e,c)}}):function(c,e,f){return x(c,f[3])};h.expr[":"].uri=v;return{}});
