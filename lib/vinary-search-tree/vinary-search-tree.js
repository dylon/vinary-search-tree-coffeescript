/**
@license
The MIT License (MIT)

Copyright (c) 2014 Dylon Edwards

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
/**
@license
The MIT License (MIT)

Copyright (c) 2014 Dylon Edwards

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*

The MIT License (MIT)

Copyright (c) 2014 Dylon Edwards

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

The MIT License (MIT)

Copyright (c) 2014 Dylon Edwards

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
(function(){var f,h,c,g,k={}.hasOwnProperty,a=function(a,b){function e(){this.constructor=a}for(var r in b)k.call(b,r)&&(a[r]=b[r]);e.prototype=b.prototype;a.prototype=new e;a.__super__=b.prototype;return a};"undefined"!==typeof exports?(h=require("./entity").vst.Entity,f=require("./node").vst.Node,g=require("./predicates").vst.predicates,require("./functions")):"undefined"!==typeof window?(h=window.vst.Entity,f=window.vst.Node,g=window.vst.predicates):(h=this.vst.Entity,f=window.vst.Node,g=this.vst.predicates);
f=function(d){function b(e){null==e&&(e=[]);if(!(this instanceof b))return new b(e);e.push(b);b.__super__.constructor.call(this,e)}a(b,d);b.prototype.max_child_height=function(){var e,a;a=this.lesser_child()?this.lesser_child().height():-1;e=this.greater_child()?this.greater_child().height():-1;return Math.max(a,e)};b.prototype.balance=function(){var e,a;a=this.lesser_child()?this.lesser_child().height():-1;e=this.greater_child()?this.greater_child().height():-1;return a-e};b.prototype.is_balanced=
function(){var e;return-1<=(e=this.balance())&&1>=e};return b}(f);c=g.is_instance(f);h.def_properties(f,{parent:{initial_value:null,is_valid:g.disjoin(c,g.is_null)}});h.def_toString(f)}).call(this);
(function(){var f,h,c,g,k={}.hasOwnProperty,a=function(a,b){function e(){this.constructor=a}for(var r in b)k.call(b,r)&&(a[r]=b[r]);e.prototype=b.prototype;a.prototype=new e;a.__super__=b.prototype;return a};"undefined"!==typeof exports?(g=exports,h=require("./entity").vst.Entity,require("./avl_node"),f=require("./tree").vst.Tree,require("./predicates"),c=require("./functions").vst.functions):"undefined"!==typeof window?(g=window,h=window.vst.Entity,f=window.vst.Tree,c=window.vst.functions):(g=this,
h=this.vst.Entity,f=this.vst.Tree,c=this.vst.functions);f=function(d){function b(e){null==e&&(e=[]);if(!(this instanceof b))return new b(e);e.push(b);b.__super__.constructor.call(this,e)}a(b,d);b.of()(function(){return new b});b.prototype.greater_greater_case=function(e){var a;this.assert_is_node_type(e);c=e.parent();a=e.greater_child();a.greater_child();e.greater_child(a.lesser_child());e.greater_child()&&e.greater_child().parent(e);a.lesser_child(e);e.parent(a);c?(c.greater_child()===e?c.greater_child(a):
c.lesser_child(a),a.parent(c)):(a.parent(null),this.root(a));this.recompute_heights(e);this.recompute_heights(a.parent());return this};b.prototype.greater_lesser_case=function(e){var a,b;this.assert_is_node_type(e);c=e.parent();a=e.greater_child();b=a.lesser_child();a.lesser_child(b.greater_child());a.lesser_child()&&a.lesser_child().parent(a);e.greater_child(b.lesser_child());e.greater_child()&&e.greater_child().parent(e);b.greater_child(a);a.parent(b);b.lesser_child(e);e.parent(b);c?(c.greater_child()===
e?c.greater_child(b):c.lesser_child(b),b.parent(c)):(b.parent(null),this.root(b));this.recompute_heights(e);this.recompute_heights(a);return this};b.prototype.lesser_lesser_case=function(e){var a;this.assert_is_node_type(e);c=e.parent();a=e.lesser_child();a.lesser_child();e.lesser_child(a.greater_child());e.lesser_child()&&e.lesser_child().parent(e);a.greater_child(e);e.parent(a);c?(c.greater_child()===e?c.greater_child(a):c.lesser_child(a),a.parent(c)):(a.parent(null),this.root(a));this.recompute_heights(e);
this.recompute_heights(a.parent());return this};b.prototype.lesser_greater_case=function(e){var a,b;this.assert_is_node_type(e);c=e.parent();a=e.lesser_child();b=a.greater_child();e.lesser_child(b.greater_child());e.lesser_child()&&e.lesser_child().parent(e);a.greater_child(b.lesser_child());a.greater_child()&&a.greater_child().parent(a);b.lesser_child(a);a.parent(b);b.greater_child(e);e.parent(b);c?(c.greater_child()===e?c.greater_child(b):c.lesser_child(b),b.parent(c)):(b.parent(null),this.root(b));
this.recompute_heights(e);this.recompute_heights(a);return this};b.prototype.rebalance=function(e){var a;this.assert_is_node_type(e);a=e.balance();-2>=a?0>=e.greater_child().balance()?this.greater_greater_case(e):this.greater_lesser_case(e):2<=a&&(0<=e.lesser_child().balance()?this.lesser_lesser_case(e):this.lesser_greater_case(e));return this};b.prototype.recompute_heights=function(e){var a;this.assert_is_node_type(e);for(a=!0;e&&a;)a=e.height(),e.height(e.greater_child()||e.lesser_greater_case()?
1+e.max_child_height():0),a=e.height!==a,e=e.parent();return this};b.prototype.add_descendant=function(a,b){var d,c;this.assert_is_node_type(a);this.assert_is_node_type(b);c=this.comparator()(b.key(),a.key());d=null;0>c?d=this.add_lesser_child(a,b):0<c?d=this.add_greater_child(a,b):this.add_equivalent_child(b);d&&this.rebalance(d);return this};b.prototype.add_lesser_child=function(a,b){var d,c;this.assert_is_node_type(a);this.assert_is_node_type(b);b.greater_neighbor(a);d=null;if(a.lesser_child())this.add_descendant(a.lesser_child(),
b);else if(a.lesser_child(b),b.parent(a),a.lesser_neighbor()&&a.lesser_neighbor().greater_neighbor(b),a.lesser_neighbor(b),0===a.height())for(c=a;c;){c.height(1+c.max_child_height());if(!c.is_balanced()){d=c;break}c=c.parent()}return d};b.prototype.add_greater_child=function(a,b){var d,c;this.assert_is_node_type(a);this.assert_is_node_type(b);b.lesser_neighbor(a);d=null;if(a.greater_child())this.add_descendant(a.greater_child(),b);else if(a.greater_child(b),b.parent(a),a.greater_neighbor()&&a.greater_neighbor().lesser_neighbor(b),
a.greater_neighbor(b),0===a.height())for(c=a;c;){c.height(1+c.max_child_height());if(!c.is_balanced()){d=c;break}c=c.parent()}return d};b.prototype.add_equivalent_child=function(a,b){this.assert_is_node_type(a);this.assert_is_node_type(b);a.values(a.values().concat(b.values()));b.lesser_neighbor(null);b.greater_neighbor(null);b.lesser_child(null);b.greater_child(null);b.values().length=0;b.parent(null);return null};b.prototype.remove_node=function(a){this.assert_is_node_type(a);a.values().length=
0;a.lesser_neighbor()&&a.lesser_neighbor(a.greater_neighbor());a.greater_neighbor()&&a.greater_neighbor(a.lesser_neighbor());a.is_leaf()?this.remove_leaf(a):a.is_branch()?this.remove_branch(a):this.swap_and_remove(a);return this};b.prototype.remove_leaf=function(a){var b;this.assert_is_node_type(a);if(b=a.parent())for(b.lesser_child()===a?b.lesser_child(null):b.greater_child(null),this.recompute_heights(b);a=a.parent();)a.is_balanced()||this.rebalance(a);else this.root(null);return null};b.prototype.remove_branch=
function(a){var b;this.assert_is_node_type(a);if(b=a.parent())for(b.lesser_child()?b.lesser_child(a.greater_child()||a.lesser_child()):b.greater_child(a.greater_child()||a.lesser_child()),a.greater_child()?a.greater_child().parent(b):a.lesser_child().parent(b),this.recompute_heights(b);a=a.parent();)a.is_balanced()||this.rebalance(a);return null};b.prototype.swap_and_remove=function(a){var b;this.assert_is_node_type(a);b=this.least(a.greater_child());this.swap_nodes(a,b);0===a.height()?this.remove_leaf(a):
this.remove_branch(a);return null};b.prototype.swap_nodes=function(a,b){var d,c,p,l,h,g,f;this.assert_is_node_type(a);this.assert_is_node_type(b);g=a.parent();l=a.lesser_child();d=a.greater_child();f=b.parent();h=b.lesser_child();c=b.greater_child();p=a.height();a.height(b.height());b.height(p);g?(g.lesser_child()===a?parent.lesser_child(b):parent.greater_child(b),b.parent(parent)):(b.parent(null),this.root(b));b.lesser_child(l);l.parent(b);a.lesser_child(h);h.parent(a);c?c.parent(a):f!==a?(b.greater_child(d),
d.parent(b),f.lesser_child(a),a.parent(f)):(b.greater_child(a),a.parent(b));return null};return b}(f);h.def_toString(f);g.vst||(g.vst={});g.vst.AvlTree=f}).call(this);(function(){var f;f=void 0!==typeof exports?exports:void 0!==typeof window?window:this;f.vst||(f.vst={});f.vst.comparators={c_number:function(h,c){return h-c},c_string_case_sensitive:function(h,c){return h.localeCompare(c)},c_string_case_insensitive:function(h,c){return h.toLowerCase().localeCompare(c.toLowerCase())}}}).call(this);
(function(){var f,h,c,g,k,a,d,b,e={}.hasOwnProperty;void 0!==typeof exports?(c=exports,a=require("./predicates").vst.predicates,h=require("./functions").vst.functions):void 0!==typeof window?(c=window,a=window.vst.predicates,h=window.vst.functions):(c=this,a=this.vst.predicates,h=this.vst.functions);k=function(a,b){return function(e,d){if(!a.call(e,d))throw Error(""+h.to_string(d)+" is invalid for "+e.constructor.name+"."+b);return d}};d=function(b,e){return a.is_function(b[e])?b[e]():b[e]};b=function(d){var c,
h,p,l;if(d instanceof f)return d.validate();if(a.is_array(d)){l=[];h=0;for(p=d.length;h<p;h++)c=d[h],l.push(b(c));return l}if(a.is_object(d)){p=[];for(c in d)e.call(d,c)&&(h=d[c],p.push(b(h)));return p}return!0};f=function(){function c(b){var d,p,l,g,f,m,k,q;if(!(this instanceof c&&a.is_function(m)&&this instanceof m))throw Error(""+h.to_string(this)+" must be of type Entity");if(!a.is_array(b))throw Error("Expected "+h.to_string(b)+" to be an array");this.__TYPE__=m;p={};m=0;for(k=b.length;m<k;m++)if(f=
b[m],void 0!==f){if(!(a.is_function(f)&&f.prototype instanceof c&&this instanceof f))throw Error(""+f.name+" must be of type Entity");if(f.__ABSTRACT_METHODS__)for(d in q=f.__ABSTRACT_METHODS__,q)e.call(q,d)&&(l=q[d],d[d]={type:f,attrs:l});f=f.__INITIALIZERS__;for(g in f)e.call(f,g)&&(l=f[g],this[g]=l.call(this,g))}for(d in p)e.call(p,d)&&(b=p[d],m=b.type,b=b.attrs,b=b.arity,h.assert(a.is_method(this[d]),"Expected "+to_string(this)+" to implemented "+m.name+"::"+d),a.is_defined(b)&&h.assert(this[d].length>=
b,"Expected "+to_string(h)+" to have an arity of at least "+b))}c.def_property=function(b,e,d){var l,g,f,m,s,q,n,t,u;s=d.initial_value;f=d.get;m=d.init;q=d.is_valid;n=d.set;d=d.stringify;if(!a.is_function(b))throw Error(""+e+".ctor="+h.to_string(b)+" must be a function");if(!a.is_string(e))throw Error("property="+h.to_string(e)+" must be a string");if(!(a.is_function(q)&&1>=q.length))throw Error(""+e+".is_valid="+h.to_string(q)+" must be a function of arity <= 1");if(!(a.is_undefined(f)||a.is_function(f)&&
1>=f.length))throw Error(""+e+".get="+h.to_string(f)+" must not be specified or must be a function of arity <= 1");if(!(a.is_undefined(n)||a.is_function(n)&&1<=(u=n.length)&&2>=u))throw Error(""+e+".set="+h.to_string(n)+" must not be specified or must be a function of arity of 1 or 2");if(!(a.is_undefined(m)||a.is_function(m)&&1>=m.length))throw Error(""+e+".init="+h.to_string(m)+" must not be specified or must be a function of arity <= 1");if(!a.is_undefined(s)&&!q(s))throw Error(""+h.to_string(s)+
" is invalid for "+e);if(!a.is_undefined(d)&&!a.is_boolean(d))throw Error("Expected "+e+".stringify="+h.to_string(d)+" to be a boolean");f||(f=function(a){return this[a]});n||(n=function(a,b){return this[a]=b});1===n.length&&(n=function(a){return function(b,e){return a(e)}}(n));g="__"+e;l=k(q,e);a.is_undefined(s)||(b.prototype[g]=s);b.__INITIALIZERS__||(b.__INITIALIZERS__={});(t=b.__INITIALIZERS__).__GET_CALLSTACK_SIZE__||(t.__GET_CALLSTACK_SIZE__=function(){return{}});b.prototype[e]=function(b){var d;
if(a.is_undefined(b)){(d=this.__GET_CALLSTACK_SIZE__)[e]||(d[e]=0);this.__GET_CALLSTACK_SIZE__[e]+=1;if(1<this.__GET_CALLSTACK_SIZE__[e])return this[g];b=l(this,f.call(this,g));delete this.__GET_CALLSTACK_SIZE__[e];return b}l(this,b);n.call(this,g,b);return this};!1===d&&(b.prototype[e].__STRINGIFY__=!1);b.prototype[e].is_valid=q;b.__PROPERTIES__||(b.__PROPERTIES__=[]);b.__PROPERTIES__.push(e);b.properties||(b.properties=function(){return(b.prototype instanceof c?b.prototype.constructor.properties():
[]).concat(b.__PROPERTIES__)});b.__VALIDATORS__||(b.__VALIDATORS__={});b.__VALIDATORS__[e]=q;m&&(b.__INITIALIZERS__[g]=m);return!0};c.def_properties=function(b,d){var c,l,f;h.assert(a.is_function(b)&&g(b.prototype),"Expected "+b.name+"="+h.to_string(b)+" to inherit from Entity");h.assert(a.is_object(d));f=[];for(l in d)e.call(d,l)&&(c=d[l],f.push(this.def_property(b,l,c)));return f};c.def_abstract_method=function(b,e,d){d=d.arity;h.assert(a.is_undefined(d)||a.is_non_negative_number(d),"Expected arity="+
h.to_string(d)+" to be a non-negative number");b.__ABSTRACT_METHODS__||(b.__ABSTRACT_METHODS__={});b.__ABSTRACT_METHODS__[e]={};if(a.is_defined(d))return b.__ABSTRACT_METHODS__[e].arity=d};c.def_abstract_methods=function(b,d){var c,l,f;h.assert(a.is_function(b));h.assert(a.is_object(d));f=[];for(c in d)e.call(d,c)&&(l=d[c],f.push(this.def_abstract_method(b,c,l)));return f};c.def_toString=function(b,e){var c,l,f,k,m;h.assert(a.is_function(b)&&g(b.prototype));h.assert(a.is_undefined(e)||a.is_string(e));
e||(e=b.name);c=[];m=b.properties();f=0;for(k=m.length;f<k;f++)l=m[f],!1!==b.prototype[l].__STRINGIFY__&&c.push(l);b.prototype.toString=function(){var a,b,f,g;b=[];f=0;for(g=c.length;f<g;f++)l=c[f],a=d(this,l),b.push(l+": "+h.to_string(a));return""+e+" {"+b.join(", ")+"}"};return!0};c.prototype.validate=function(){var a,d,c,f;f=this.__TYPE__.__VALIDATORS__;for(d in f)if(e.call(f,d)){a=f[d];c=this[d]();if(!a.call(this,c))throw Error(""+h.to_string(c)+" is invalid for "+d+" according to "+a+" for "+
h.to_string(this));b(c)}return this};return c}();g=a.is_instance(f);c.vst||(c.vst={});c.vst.Entity=f}).call(this);
(function(){var f,h,c,g,k=[].slice,a={}.hasOwnProperty;void 0!==typeof exports?(c=exports,g=require("./predicates").vst.predicates):void 0!==typeof window?(c=window,g=window.vst.predicates):(c=this,g=this.vst.predicates);f=h={assert:function(a,b){if(!g.is_boolean(a))throw Error("Expected truth="+f.to_string(a)+" to be a boolean");if(!g.is_undefined(b)&&!g.is_string(b))throw Error("Expected message="+f.to_string(b)+" to be a string");if(!1===a){if(g.is_undefined(b))throw Error("Assertion failed");
throw Error("Assertion failed: "+b);}},proxy:function(a,b){return function(){var e;e=1<=arguments.length?k.call(arguments,0):[];return a.apply(b,e)}},to_string:function(d){var b,e,c,f;if(g.is_null(d))return"null";if(g.is_undefined(d))return"undefined";if(g.is_array(d)){e=[];c=0;for(f=d.length;c<f;c++)b=d[c],e.push(to_string(b));return"["+e.join(", ")+"]"}if(g.is_object(d)){if(d.toString===Object.prototype.toString){b=[];for(e in d)a.call(d,e)&&(c=d[e],b.push(e+": "+to_string(c)));return"{"+b.join(", ")+
"}"}return d.toString()}return g.is_string(d)?'"'+d+'"':d.toString()}};c.vst||(c.vst={});c.vst.functions=h}).call(this);
(function(){var f,h,c,g,k={}.hasOwnProperty,a=function(a,b){function e(){this.constructor=a}for(var c in b)k.call(b,c)&&(a[c]=b[c]);e.prototype=b.prototype;a.prototype=new e;a.__super__=b.prototype;return a};"undefined"!==typeof exports?(c=exports,f=require("./entity").vst.Entity,g=require("./predicates").vst.predicates):"undefined"!==typeof window?(c=window,f=window.vst.Entity,g=window.vst.predicates):(c=this,f=this.vst.Entity,g=this.vst.predicates);h=function(d){function b(){return b.__super__.constructor.apply(this,
arguments)}a(b,d);b.prototype.Iterator=function(a){null==a&&(a=[]);if(this.constructor===b)throw Error("vst.Iterator should not be instantiated directly");if(0===a.length)throw Error("You must specify the subtype as an array to this constructor");a.push(b);return b.__super__.Iterator.call(this,a)};b.prototype.has_next=function(){this.advance();return null!==this.next_element()};b.prototype.next=function(){var a;this.advance();a=this.next_element();this.next_element(null);return a};return b}(f);f.def_abstract_methods(h,
{advance:{arity:0}});f.def_properties(h,{next_element:{is_valid:g.tautology}});c.vst||(c.vst={});c.vst.Iterator=h}).call(this);
(function(){var f,h,c,g;"undefined"!==typeof exports?(c=exports,g=require("./predicates").vst.predicates,h=require("./functions").vst.functions):"undefined"!==typeof window?(c=window,g=window.vst.predicates,h=window.vst.functions):(c=this,g=this.vst.predicates,h=this.vst.functions);f=function(){function c(a,d,b){this.f=a;this.heap=null!=d?d:[];this.length=null!=b?b:d.length;a.assert(g.is_array(d));a.assert(g.is_bounded(0,d.length)(b));a.assert(g.is_function(a));this._build()}c.prototype._parent=function(a){return 0<
a?(a+1>>1)-1:0};c.prototype._left_child=function(a){return(a<<1)+1};c.prototype._right_child=function(a){return(a<<1)+2};c.prototype._heapify=function(a){var d,b,e;b=this._left_child(a);e=this._right_child(a);d=this.heap;b=b<this.length&&0<this.f(d[b],d[a])?b:a;e<this.length&&0<this.f(d[e],d[b])&&(b=e);b!==a&&(e=d[a],d[a]=d[b],d[b]=e,this._heapify(b));return null};c.prototype._build=function(){var a;for(a=this.length>>1;0<=a;)this._heapify(a),a-=1;return null};c.prototype.increase_key=function(a,
d){var b,e,c;h=this.f;b=this.heap;if(0>h(d,b[a]))throw Error("Expected "+d+" to be at least heap["+a+"] = "+b[a]);b[a]=d;e=this._parent;for(g=e(a);a&&0>h(b[g],b[a]);)c=b[a],b[a]=b[g],b[g]=c,a=g,g=e(a);return null};c.prototype.sort=function(){var a,d,b;this._build();d=this.length-1;for(a=this.heap;0<=d;)b=a[0],a[0]=a[d],a[d]=b,this.length-=1,this._heapify(0),d-=1;return null};c.prototype.peek=function(){return this.length?this.heap[0]:null};c.prototype.pop=function(){var a,d;return this.length?(a=
this.heap,d=a[0],a[0]=a[this.length-1],this.length-=1,this._heapify(0),d):null};c.prototype.push=function(a){var d,b,e;b=this.length;this.length+=1;e=this._parent;g=e(b);d=this.heap;for(h=this.f;0<b&&0>h(d[g],a);)d[b]=d[g],b=g,g=e(b);d[b]=a;return null};return c}();c.vst||(c.vst={});c.vst.MaxHeap=f}).call(this);
(function(){var f;f=void 0!==typeof exports?exports:void 0!==typeof window?window:this;f.vst||(f.vst={});f.vst.metrics={m_number:function(f,c){return f.key()<c.key()?f.key()-c.key():c.key()-f.key()}}}).call(this);
(function(){var f,h,c,g,k={}.hasOwnProperty,a=function(a,b){function e(){this.constructor=a}for(var c in b)k.call(b,c)&&(a[c]=b[c]);e.prototype=b.prototype;a.prototype=new e;a.__super__=b.prototype;return a};"undefined"!==typeof exports?(c=exports,f=require("./entity").vst.Entity,g=require("./predicates").vst.predicates,require("./functions")):"undefined"!==typeof window?(c=window,f=window.vst.Entity,g=window.vst.predicates):(c=this,f=this.vst.Entity,g=this.vst.predicates);h=function(c){function b(a){null==
a&&(a=[]);if(this.constructor===b)throw Error("vst.Node should not be instantiated directly");if(0===a.length)throw Error("You must specify the subtype as an array to this constructor");a.push(b);b.__super__.constructor.call(this,a)}a(b,c);b.prototype.is_leaf=function(){return null===this.lesser_child()&&null===this.greater_child()};b.prototype.is_branch=function(){return!!this.lesser_child()^1===!!this.greater_child()};b.prototype.value=function(){if(0===this.values().length)return null;if(1===this.values().length)return this.values()[0];
throw Error("There are multiple values, please use Node::values() instead.");};return b}(f);f.def_properties(h,{key:{is_valid:g.tautology},values:{is_valid:g.is_array,init:function(){return[]}},height:{initial_value:0,is_valid:g.is_non_negative_number},greater_child:{initial_value:null,is_valid:g.disjoin(g.is_null,g.is_instance(h))},lesser_child:{initial_value:null,is_valid:g.disjoin(g.is_null,g.is_instance(h))},greater_neighbor:{initial_value:null,is_valid:g.disjoin(g.is_null,g.is_instance(h))},
lesser_neighbor:{initial_value:null,is_valid:g.disjoin(g.is_null,g.is_instance(h))}});g.is_instance(h);c.vst||(c.vst={});c.vst.Node=h}).call(this);
(function(){var f,h,c,g,k=[].slice;h="undefined"!==typeof window?window:"undefined"!==typeof exports?exports:this;f=function(a,d){if(!c.is_boolean(a))throw Error("Expected truth="+a+" to be a boolean");if(!c.is_undefined(d)&&!c.is_string(d))throw Error("Expected message="+d+" to be a string");if(!1===a){if(d)throw Error("Assertion error: "+d);throw Error("Assertion error");}return!0};c=g={tautology:function(){return!0},contradiction:function(){return!1},is_number:function(a){return"number"===typeof a},
is_negative_number:function(a){return c.is_number(a)&&0>a},is_non_positive_number:function(a){return c.is_number(a)&&0>=a},is_non_negative_number:function(a){return c.is_number(a)&&0<=a},is_positive_number:function(a){return c.is_number(a)&&0<a},is_boolean:function(a){return"boolean"===typeof a},is_string:function(a){return"string"===typeof a},is_function:function(a){return"function"===typeof a},is_constructor:function(a){return c.is_function(a)&&c.is_object(a.prototype)},is_null:function(a){return null===
a},is_undefined:function(a){return void 0===a},is_defined:function(a){return!c.is_undefined(a)&&!c.is_null(a)},is_object:function(a){return"object"===typeof a&&!c.is_null(a)},is_array:function(a){return c.is_object(a)&&c.is_non_negative_number(a.length)},is_instance:function(a){f(c.is_function(a));return function(c){return c instanceof a}},is_type:function(a){f(c.is_function(a));return function(d){return c.is_function(d)&&d.prototype instanceof a}},is_bounded:function(a,d){f(c.is_number(a)&&c.is_number(d));
return function(b){return c.is_number(b)&&a<=b&&b<=d}},is_lt:function(a){f(c.is_number(a));return function(d){return c.is_number(d)&&d<a}},is_lte:function(a){f(c.is_number(a));return function(d){return c.is_number(d)&&d<=a}},is_eq:function(a){f(c.is_number(a));return function(d){return c.is_number(d)&&d===a}},is_gte:function(a){f(c.is_number(a));return function(d){return c.is_number(d)&&d>=a}},is_gt:function(a){f(c.is_number(a));return function(d){return c.is_number(d)&&d>a}},is_equal:function(a){return function(c){return c===
a}},there_exists:function(a){f(c.is_function(a));return function(d){var b,e,f;c.assert(c.is_array(d));e=0;for(f=d.length;e<f;e++)if(b=d[e],!0===a.call(this,b))return!0;return!1}},for_all:function(a){f(c.is_function(a));return function(d){var b,e,f;c.assert(c.is_array(d));e=0;for(f=d.length;e<f;e++)if(b=d[e],!1===a.call(this,b))return!1;return!0}},disjoin:function(){var a,d,b;d=1<=arguments.length?k.call(arguments,0):[];switch(d.length){case 0:return c.tautology;case 1:return a=d[0],function(b){return a.call(this,
b)};case 2:return a=d[0],b=d[1],function(c){return a.call(this,c)||b.call(this,c)};default:return a=d[0],d=2<=d.length?k.call(d,1):[],b=conjoin.apply(null,d),function(c){return a.call(this,c)||b.call(this,c)}}},conjoin:function(){var a,d,b;d=1<=arguments.length?k.call(arguments,0):[];switch(d.length){case 0:return c.tautology;case 1:return a=d[0],function(b){return a.call(this,b)};case 2:return a=d[0],b=d[1],function(c){return a.call(this,c)&&b.call(this,c)};default:return a=d[0],d=2<=d.length?k.call(d,
1):[],b=conjoin.apply(null,d),function(c){return a.call(this,c)&&b.call(this,c)}}}};h.vst||(h.vst={});h.vst.predicates=g}).call(this);
(function(){var f,h,c,g,k,a={}.hasOwnProperty,d=function(b,c){function d(){this.constructor=b}for(var f in c)a.call(c,f)&&(b[f]=c[f]);d.prototype=c.prototype;b.prototype=new d;b.__super__=c.prototype;return b};"undefined"!==typeof exports?(g=exports,f=require("./entity").vst.Entity,h=require("./iterator").vst.Iterator,c=require("./node").vst.Node,k=require("./predicates").vst.predicates):"undefined"!==typeof window?(g=window,f=window.vst.Entity,h=window.vst.Iterator,c=window.vst.Node,k=window.vst.predicates):
(g=this,f=this.vst.Entity,h=this.vst.Iterator,c=this.vst.Node,k=this.vst.predicates);h=function(a){function c(a){null==a&&(a=[]);if(!(this instanceof c))return new c(a);c.__super__.constructor.call(this,a.push(c))}d(c,a);c.of=function(a,b){return(new c).node(a).upper_key(b)};c.prototype.advance=function(){if(null===this.next_element()&&this.node&&0>=this.compare()(this.node().key(),this.upper_key)){if(this.node_cursor()>=this.node().values().length)return this.node_cursor(0),this.node(this.node().greater_neighbor()),
this.advance();this.current_element(this.node().values()[this.node_cursor()]);this.node_cursor(1+this.node_cursor())}return!0};return c}(h);f.def_properties(h,{compare:{is_valid:k.conjoin(k.is_function,k.has_arity(2))},node_cursor:{initial_value:0,is_valid:k.is_non_negative_number},node:{is_valid:k.disjoin(k.is_null,k.is_instance(c))},upper_key:{is_valid:k.tautology}});f.def_toString(h);g.vst||(g.vst={});g.vst.RangeIterator=h}).call(this);
(function(){var f,h,c,g,k,a,d,b,e={}.hasOwnProperty,r=function(a,b){function c(){this.constructor=a}for(var d in b)e.call(b,d)&&(a[d]=b[d]);c.prototype=b.prototype;a.prototype=new c;a.__super__=b.prototype;return a};"undefined"!==typeof exports?(d=exports,f=require("./entity").vst.Entity,c=require("./node").vst.Node,g=require("./range_iterator").vst.RangeIterator,h=require("./max_heap").vst.MaxHeap,b=require("./predicates").vst.predicates,a=require("./functions").vst.functions):"undefined"!==typeof window?
(d=window,f=window.vst.Entity,c=window.vst.Node,g=window.vst.RangeIterator,h=window.vst.MaxHeap,b=window.vst.predicates,a=window.vst.functions):(d=this,f=this.vst.Entity,c=this.vst.Node,g=this.vst.RangeIterator,h=this.vst.MaxHeap,b=this.vst.predicates,a=this.vst.functions);k=function(c){function d(a){null==a&&(a=[]);if(this.constructor===d)throw Error("vst.Tree should not be instantiated directly");if(0===a.length)throw Error("You must specify the subtype as an array to this constructor");a.push(d);
d.__super__.constructor.call(this,a)}r(d,c);d.prototype.is_node_type=function(a){return a instanceof this.NodeType()};d.prototype.assert_is_node_type=function(b){return a.assert(this.is_node_type(b),"Expected "+a.to_string(b)+" to be a "+this.NodeType().name)};d.prototype.height=function(){return b.is_defined(this.root())?this.root().height():0};d.prototype.greatest=function(a){null==a&&(a=this.root());if(null===a)return null;for(this.assert_is_node_type(a);a.greater_child();)a=a.greater_child();
return a};d.prototype.least=function(a){null==a&&(a=this.root());if(null===a)return null;for(this.assert_is_node_type(a);a.lesser_child();)a=a.lesser_child();return a};d.prototype.try_insert=function(c,d){a.assert(b.is_defined(c));a.assert(b.is_defined(d));return b.is_null(this.root())?(this.root(this.NodeType().of(c,d)),this.size(this.size()+1),!0):!1===this.contains_key(c)?(this.add_descendant(this.root(),this.NodeType().of(c,d)),this.size(this.size()+1),!0):!1};d.prototype.insert=function(c,d){var e;
a.assert(b.is_defined(c));a.assert(b.is_defined(d));null===this.root()?this.root(this.NodeType().of(c,d)):(e=this.find(c))?e.values().push(d):this.add_descendant(this.root(),this.NodeType().of(c,d));this.size(this.size()+1);return this};d.prototype.contains_key=function(c){a.assert(b.is_defined(c));return null!==this.find(c)};d.prototype.find=function(c){var d,e;a.assert(b.is_defined(c));for(e=this.root();e;)if(d=this.comparator()(c,e.key()),0<d)e=e.greater_child();else if(0>d)e=e.lesser_child();
else break;return e};d.prototype.find_nearest=function(c){var d,e;a.assert(b.is_defined(c));for(e=this.root();e;)if(d=this.comparator()(c,e.key()),0<d){if(null===e.greater_child())break;e=e.greater_child()}else if(0>d){if(null===e.lesser_child())break;e=e.lesser_child()}else break;return e};d.prototype.find_nearest_gte=function(c){var d;a.assert(b.is_defined(c));for(d=this.find_nearest(c);d&&0>this.comparator()(d.key(),c);)d=d.greater_neighbor();return d};d.prototype.find_nearest_lte=function(c){var d;
a.assert(b.is_defined(c));for(d=this.find_nearest(c);d&&0<this.comparator()(d.key(),c);)d=d.lesser_neighbor();return d};d.prototype.remove=function(c,d){var e,f,g,h,k,n;a.assert(b.is_defined(c));if(g=this.find(c)){if(b.is_defined(d)){n=g.values();f=h=0;for(k=n.length;h<k;f=++h)if(e=n[f],e===d)return g.values().splice(f,1),0===g.values().length&&this.remove_node(g),this.size(this.size()-1),!0;return!1}this.size(this.size()-g.values().length);this.remove_node(g);return!0}return!1};d.prototype.preorder=
function(a,b){null==b&&(b=this.root());b&&(a(b),b.lesser_child()&&this.preorder(a,b.lesser_child()),b.greater_child()&&this.preorder(a,b.greater_child()));return this};d.prototype.inorder=function(a,b){null==b&&(b=this.root());b&&(b.lesser_child()&&this.inorder(a,b.lesser_child()),a(b),b.greater_child()&&this.inorder(a,b.greater_child()));return this};d.prototype.postorder=function(a,b){null==b&&(b=this.root());b&&(b.lesser_child()&&this.postorder(a,b.lesser_child()),b.greater_child()&&this.postorder(a,
b.greater_child()),a(b));return this};d.prototype.range=function(b,c){var d;a.assert(0>=this.comparator()(b,c),"Expected lower:"+a.to_string(b)+" <= upper:"+a.to_string(c));d=this.find_nearest_gte(b);return g.of(this.NodeType(),d,c)};d.prototype.neighbors=function(c,d,e,f){var g;null==f&&(f=!1);a.assert(b.is_defined(c));a.assert(b.is_non_negative_number(n_lesser));a.assert(b.is_non_negative_number(n_greater));a.assert(b.is_boolean(f));d=[];if(e=this.find_nearest(c)){c=this.comparator()(e.key(),c);
0===c&&f&&d.push(e);f=0>c?e:e.lesser_neighbor();for(g=0;f&&g<n_lesser;)d.unshift(f),f=f.lesser_neighbor(),g+=1;f=0<c?e:e.greater_neighbor();for(g=0;f&&g<n_greater;)d.push(f),f=f.greater_neighbor(),g+=1}return d};d.prototype.nearest_neighbors=function(c,d,e,f){var g,k;null==f&&(f=!1);a.assert(b.is_defined(c));a.assert(b.is_non_negative_number(d));a.assert(b.is_function(e)&&2===e.length);a.assert(b.is_boolean(f));g=new h(e);if(0<d&&(k=this.find_nearest(c))){c=this.comparator()(k.key(),c);0===c&&f&&
g.push(k);for(f=0>c?k:k.lesser_neighbor();f&&g.length<d;)g.push(f),f=f.lesser_neighbor();for(f=0<c?k:k.greater_neighbor();f&&g.length<d;)g.push(f),f=f.greater_neighbor();for(;f&&e(f,k)<e(g.peek(),k);)g.pop(),g.push(f),f=f.greater_neighbor()}return g};return d}(f);f.def_abstract_methods(k,{add_descendant:{arity:2},remove_node:{arity:1}});f.def_properties(k,{comparator:{is_valid:b.conjoin(b.is_function,b.has_arity(2))},size:{initial_value:0,is_valid:b.is_non_negative_number},NodeType:{is_valid:b.is_type(c)},
root:{initial_value:null,is_valid:b.disjoin(b.is_null,b.conjoin(b.is_instance(c),k.prototype.is_node_type))}});d.vst||(d.vst={});d.vst.Tree=k}).call(this);

// Generated by CoffeeScript 1.7.1
(function() {
  var AvlNode, Entity, Node, f, global, is_avl_node, p,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if (typeof exports !== 'undefined') {
    global = exports;
    Entity = require('./entity').vst.Entity;
    Node = require('./node').vst.Node;
    p = require('./predicates').vst.predicates;
    f = require('./functions').vst.functions;
  } else if (typeof window !== 'undefined') {
    global = window;
    Entity = window.vst.Entity;
    Node = window.vst.Node;
    p = window.vst.predicates;
    f = window.vst.functions;
  } else {
    global = this;
    Entity = this.vst.Entity;
    Node = window.vst.Node;
    p = this.vst.predicates;
    f = this.vst.functions;
  }

  AvlNode = (function(_super) {
    __extends(AvlNode, _super);

    AvlNode.of = function(key, value) {
      var node;
      node = new AvlNode().key(key);
      node.values().push(value);
      return node;
    };

    function AvlNode(subtypes) {
      if (subtypes == null) {
        subtypes = [];
      }
      if (!(this instanceof AvlNode)) {
        return new AvlNode(subtypes);
      }
      subtypes.push(AvlNode);
      AvlNode.__super__.constructor.call(this, subtypes);
    }

    AvlNode.prototype.max_child_height = function() {
      var greater_child_height, lesser_child_height;
      lesser_child_height = this.lesser_child() ? this.lesser_child().height() : -1;
      greater_child_height = this.greater_child() ? this.greater_child().height() : -1;
      return Math.max(lesser_child_height, greater_child_height);
    };

    AvlNode.prototype.balance = function() {
      var greater_child_height, lesser_child_height;
      lesser_child_height = this.lesser_child() ? this.lesser_child().height() : -1;
      greater_child_height = this.greater_child() ? this.greater_child().height() : -1;
      return lesser_child_height - greater_child_height;
    };

    AvlNode.prototype.is_balanced = function() {
      var _ref;
      return (-1 <= (_ref = this.balance()) && _ref <= 1);
    };

    return AvlNode;

  })(Node);

  is_avl_node = p.is_instance(AvlNode);

  Entity.def_properties(AvlNode, {
    parent: {
      initial_value: null,
      is_valid: p.disjoin(is_avl_node, p.is_null),
      stringify: false
    }
  });

  Entity.def_toString(AvlNode);

  global.vst || (global.vst = {});

  global.vst.AvlNode = AvlNode;

}).call(this);

// Generated by CoffeeScript 1.7.1
(function() {
  var AvlNode, AvlTree, Entity, Tree, f, global, p,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if (typeof exports !== 'undefined') {
    global = exports;
    Entity = require('./entity').vst.Entity;
    AvlNode = require('./avl_node').vst.AvlNode;
    Tree = require('./tree').vst.Tree;
    p = require('./predicates').vst.predicates;
    f = require('./functions').vst.functions;
  } else if (typeof window !== 'undefined') {
    global = window;
    Entity = window.vst.Entity;
    AvlNode = window.vst.AvlNode;
    Tree = window.vst.Tree;
    p = window.vst.predicates;
    f = window.vst.functions;
  } else {
    global = this;
    Entity = this.vst.Entity;
    AvlNode = this.vst.AvlNode;
    Tree = this.vst.Tree;
    p = this.vst.predicates;
    f = this.vst.functions;
  }

  AvlTree = (function(_super) {
    __extends(AvlTree, _super);

    AvlTree.of = function(comparator) {
      return new AvlTree().NodeType(AvlNode).comparator(comparator);
    };

    function AvlTree(subtypes) {
      if (subtypes == null) {
        subtypes = [];
      }
      if (!(this instanceof AvlTree)) {
        return new AvlTree(subtypes);
      }
      subtypes.push(AvlTree);
      AvlTree.__super__.constructor.call(this, subtypes);
    }

    AvlTree.prototype.greater_greater_case = function(a) {
      var b, c;
      this.assert_is_node_type(a);
      f = a.parent();
      b = a.greater_child();
      c = b.greater_child();
      a.greater_child(b.lesser_child());
      if (a.greater_child()) {
        a.greater_child().parent(a);
      }
      b.lesser_child(a);
      a.parent(b);
      if (f) {
        if (f.greater_child() === a) {
          f.greater_child(b);
        } else {
          f.lesser_child(b);
        }
        b.parent(f);
      } else {
        b.parent(null);
        this.root(b);
      }
      this.recompute_heights(a);
      this.recompute_heights(b.parent());
      return this;
    };

    AvlTree.prototype.greater_lesser_case = function(a) {
      var b, c;
      this.assert_is_node_type(a);
      f = a.parent();
      b = a.greater_child();
      c = b.lesser_child();
      b.lesser_child(c.greater_child());
      if (b.lesser_child()) {
        b.lesser_child().parent(b);
      }
      a.greater_child(c.lesser_child());
      if (a.greater_child()) {
        a.greater_child().parent(a);
      }
      c.greater_child(b);
      b.parent(c);
      c.lesser_child(a);
      a.parent(c);
      if (f) {
        if (f.greater_child() === a) {
          f.greater_child(c);
        } else {
          f.lesser_child(c);
        }
        c.parent(f);
      } else {
        c.parent(null);
        this.root(c);
      }
      this.recompute_heights(a);
      this.recompute_heights(b);
      return this;
    };

    AvlTree.prototype.lesser_lesser_case = function(a) {
      var b, c;
      this.assert_is_node_type(a);
      f = a.parent();
      b = a.lesser_child();
      c = b.lesser_child();
      a.lesser_child(b.greater_child());
      if (a.lesser_child()) {
        a.lesser_child().parent(a);
      }
      b.greater_child(a);
      a.parent(b);
      if (f) {
        if (f.greater_child() === a) {
          f.greater_child(b);
        } else {
          f.lesser_child(b);
        }
        b.parent(f);
      } else {
        b.parent(null);
        this.root(b);
      }
      this.recompute_heights(a);
      this.recompute_heights(b.parent());
      return this;
    };

    AvlTree.prototype.lesser_greater_case = function(a) {
      var b, c;
      this.assert_is_node_type(a);
      f = a.parent();
      b = a.lesser_child();
      c = b.greater_child();
      a.lesser_child(c.greater_child());
      if (a.lesser_child()) {
        a.lesser_child().parent(a);
      }
      b.greater_child(c.lesser_child());
      if (b.greater_child()) {
        b.greater_child().parent(b);
      }
      c.lesser_child(b);
      b.parent(c);
      c.greater_child(a);
      a.parent(c);
      if (f) {
        if (f.greater_child() === a) {
          f.greater_child(c);
        } else {
          f.lesser_child(c);
        }
        c.parent(f);
      } else {
        c.parent(null);
        this.root(c);
      }
      this.recompute_heights(a);
      this.recompute_heights(b);
      return this;
    };

    AvlTree.prototype.rebalance = function(a) {
      var balance;
      this.assert_is_node_type(a);
      balance = a.balance();
      if (balance <= -2) {
        if (a.greater_child().balance() <= 0) {
          this.greater_greater_case(a);
        } else {
          this.greater_lesser_case(a);
        }
      } else if (balance >= 2) {
        if (a.lesser_child().balance() >= 0) {
          this.lesser_lesser_case(a);
        } else {
          this.lesser_greater_case(a);
        }
      }
      return this;
    };

    AvlTree.prototype.recompute_heights = function(node) {
      var changed, height;
      if (p.is_defined(node)) {
        this.assert_is_node_type(node);
        changed = true;
        while (node && changed) {
          height = node.height();
          node.height(node.greater_child() || node.lesser_child() ? 1 + node.max_child_height() : 0);
          changed = node.height !== height;
          node = node.parent();
        }
      }
      return this;
    };

    AvlTree.prototype.add_descendant = function(ancestor, descendant) {
      var child, comp;
      this.assert_is_node_type(ancestor);
      this.assert_is_node_type(descendant);
      comp = this.comparator()(descendant.key(), ancestor.key());
      child = null;
      if (comp < 0) {
        child = this.add_lesser_child(ancestor, descendant);
      } else if (comp > 0) {
        child = this.add_greater_child(ancestor, descendant);
      } else {
        this.add_equivalent_child(descendant);
      }
      if (child) {
        this.rebalance(child);
      }
      return this;
    };

    AvlTree.prototype.add_lesser_child = function(parent, child) {
      var candidate, node;
      this.assert_is_node_type(parent);
      this.assert_is_node_type(child);
      child.greater_neighbor(parent);
      candidate = null;
      if (parent.lesser_child()) {
        this.add_descendant(parent.lesser_child(), child);
      } else {
        parent.lesser_child(child);
        child.parent(parent);
        if (parent.lesser_neighbor()) {
          parent.lesser_neighbor().greater_neighbor(child);
        }
        parent.lesser_neighbor(child);
        if (parent.height() === 0) {
          node = parent;
          while (node) {
            node.height(1 + node.max_child_height());
            if (!node.is_balanced()) {
              candidate = node;
              break;
            }
            node = node.parent();
          }
        }
      }
      return candidate;
    };

    AvlTree.prototype.add_greater_child = function(parent, child) {
      var candidate, node;
      this.assert_is_node_type(parent);
      this.assert_is_node_type(child);
      child.lesser_neighbor(parent);
      candidate = null;
      if (parent.greater_child()) {
        this.add_descendant(parent.greater_child(), child);
      } else {
        parent.greater_child(child);
        child.parent(parent);
        if (parent.greater_neighbor()) {
          parent.greater_neighbor().lesser_neighbor(child);
        }
        parent.greater_neighbor(child);
        if (parent.height() === 0) {
          node = parent;
          while (node) {
            node.height(1 + node.max_child_height());
            if (!node.is_balanced()) {
              candidate = node;
              break;
            }
            node = node.parent();
          }
        }
      }
      return candidate;
    };

    AvlTree.prototype.add_equivalent_child = function(parent, child) {
      this.assert_is_node_type(parent);
      this.assert_is_node_type(child);
      parent.values(parent.values().concat(child.values()));
      child.lesser_neighbor(null);
      child.greater_neighbor(null);
      child.lesser_child(null);
      child.greater_child(null);
      child.values().length = 0;
      child.parent(null);
      return null;
    };

    AvlTree.prototype.remove_node = function(node) {
      this.assert_is_node_type(node);
      node.values().length = 0;
      if (node.lesser_neighbor()) {
        node.lesser_neighbor(node.greater_neighbor());
      }
      if (node.greater_neighbor()) {
        node.greater_neighbor(node.lesser_neighbor());
      }
      if (node.is_leaf()) {
        this.remove_leaf(node);
      } else if (node.is_branch()) {
        this.remove_branch(node);
      } else {
        this.swap_and_remove(node);
      }
      return this;
    };

    AvlTree.prototype.remove_leaf = function(node) {
      var parent;
      this.assert_is_node_type(node);
      if (parent = node.parent()) {
        if (parent.lesser_child() === node) {
          parent.lesser_child(null);
        } else {
          parent.greater_child(null);
        }
        this.recompute_heights(parent);
        while (node = node.parent()) {
          if (!node.is_balanced()) {
            this.rebalance(node);
          }
        }
      } else {
        this.root(null);
      }
      return null;
    };

    AvlTree.prototype.remove_branch = function(node) {
      var parent;
      this.assert_is_node_type(node);
      if (parent = node.parent()) {
        if (parent.lesser_child()) {
          parent.lesser_child(node.greater_child() || node.lesser_child());
        } else {
          parent.greater_child(node.greater_child() || node.lesser_child());
        }
        if (node.greater_child()) {
          node.greater_child().parent(parent);
        } else {
          node.lesser_child().parent(parent);
        }
        this.recompute_heights(parent);
        while (node = node.parent()) {
          if (!node.is_balanced()) {
            this.rebalance(node);
          }
        }
      }
      return null;
    };

    AvlTree.prototype.swap_and_remove = function(node) {
      var successor;
      this.assert_is_node_type(node);
      successor = this.least(node.greater_child());
      this.swap_nodes(node, successor);
      if (node.height() === 0) {
        this.remove_leaf(node);
      } else {
        this.remove_branch(node);
      }
      return null;
    };

    AvlTree.prototype.swap_nodes = function(node_1, node_2) {
      var greater_child_1, greater_child_2, height, lesser_child_1, lesser_child_2, parent_1, parent_2;
      this.assert_is_node_type(node_1);
      this.assert_is_node_type(node_2);
      parent_1 = node_1.parent();
      lesser_child_1 = node_1.lesser_child();
      greater_child_1 = node_1.greater_child();
      parent_2 = node_2.parent();
      lesser_child_2 = node_2.lesser_child();
      greater_child_2 = node_2.greater_child();
      height = node_1.height();
      node_1.height(node_2.height());
      node_2.height(height);
      if (parent_1) {
        if (parent_1.lesser_child() === node_1) {
          parent.lesser_child(node_2);
        } else {
          parent.greater_child(node_2);
        }
        node_2.parent(parent);
      } else {
        node_2.parent(null);
        this.root(node_2);
      }
      node_2.lesser_child(lesser_child_1);
      lesser_child_1.parent(node_2);
      node_1.lesser_child(lesser_child_2);
      lesser_child_2.parent(node_1);
      if (greater_child_2) {
        greater_child_2.parent(node_1);
      } else if (parent_2 !== node_1) {
        node_2.greater_child(greater_child_1);
        greater_child_1.parent(node_2);
        parent_2.lesser_child(node_1);
        node_1.parent(parent_2);
      } else {
        node_2.greater_child(node_1);
        node_1.parent(node_2);
      }
      return null;
    };

    return AvlTree;

  })(Tree);

  Entity.def_toString(AvlTree);

  global.vst || (global.vst = {});

  global.vst.AvlTree = AvlTree;

}).call(this);

// Generated by CoffeeScript 1.7.1
(function() {
  var c, comparators, global;

  global = typeof exports !== void 0 ? exports : typeof window !== void 0 ? window : this;

  c = comparators = {
    c_number: function(a, b) {
      return a - b;
    },
    c_string_case_sensitive: function(a, b) {
      return a.localeCompare(b);
    },
    c_string_case_insensitive: function(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }
  };

  global.vst || (global.vst = {});

  global.vst.comparators = comparators;

}).call(this);

// Generated by CoffeeScript 1.7.1
(function() {
  var Entity, f, global, is_entity, is_valid_assertion, p, safe_get, safe_value, validate,
    __hasProp = {}.hasOwnProperty;

  if (typeof exports !== void 0) {
    global = exports;
    p = require('./predicates').vst.predicates;
    f = require('./functions').vst.functions;
  } else if (typeof window !== void 0) {
    global = window;
    p = window.vst.predicates;
    f = window.vst.functions;
  } else {
    global = this;
    p = this.vst.predicates;
    f = this.vst.functions;
  }

  is_valid_assertion = function(is_valid, property) {
    return function(self, value) {
      if (!is_valid.call(self, value)) {
        throw new Error("" + (f.to_string(value)) + " is invalid for " + self.constructor.name + "." + property);
      }
      return value;
    };
  };

  safe_get = function(self, attr) {
    if (p.is_function(self[attr])) {
      return self[attr]();
    } else {
      return self[attr];
    }
  };

  safe_value = function(self, value) {
    if (p.is_function(value)) {
      return value.call(self);
    } else {
      return value;
    }
  };

  validate = function(value) {
    var element, k, v, _i, _len, _results, _results1;
    if (value instanceof Entity) {
      return value.validate();
    } else if (p.is_array(value)) {
      _results = [];
      for (_i = 0, _len = value.length; _i < _len; _i++) {
        element = value[_i];
        _results.push(validate(element));
      }
      return _results;
    } else if (p.is_object(value)) {
      _results1 = [];
      for (k in value) {
        if (!__hasProp.call(value, k)) continue;
        v = value[k];
        _results1.push(validate(v));
      }
      return _results1;
    } else {
      return true;
    }
  };

  Entity = (function() {
    Entity.def_property = function(ctor, property, _arg) {
      var assert_is_valid, field, get, init, initial_value, is_valid, set, stringify, _ref;
      initial_value = _arg.initial_value, get = _arg.get, init = _arg.init, is_valid = _arg.is_valid, set = _arg.set, stringify = _arg.stringify;
      if (!p.is_function(ctor)) {
        throw new Error("" + property + ".ctor=" + (f.to_string(ctor)) + " must be a function");
      }
      if (!p.is_string(property)) {
        throw new Error("property=" + (f.to_string(property)) + " must be a string");
      }
      if (!(p.is_function(is_valid) && is_valid.length <= 1)) {
        throw new Error("" + property + ".is_valid=" + (f.to_string(is_valid)) + " must be a function of arity <= 1");
      }
      if (!(p.is_undefined(get) || p.is_function(get) && get.length <= 1)) {
        throw new Error("" + property + ".get=" + (f.to_string(get)) + " must not be specified or must be a function of arity <= 1");
      }
      if (!(p.is_undefined(set) || p.is_function(set) && (1 <= (_ref = set.length) && _ref <= 2))) {
        throw new Error("" + property + ".set=" + (f.to_string(set)) + " must not be specified or must be a function of arity of 1 or 2");
      }
      if (!(p.is_undefined(init) || p.is_function(init) && init.length <= 1)) {
        throw new Error("" + property + ".init=" + (f.to_string(init)) + " must not be specified or must be a function of arity <= 1");
      }
      if (!(p.is_undefined(initial_value) || is_valid(initial_value))) {
        throw new Error("" + (f.to_string(initial_value)) + " is invalid for " + property);
      }
      if (!(p.is_undefined(stringify) || p.is_boolean(stringify))) {
        throw new Error("Expected " + property + ".stringify=" + (f.to_string(stringify)) + " to be a boolean");
      }
      get || (get = function(field) {
        return this[field];
      });
      set || (set = function(field, value) {
        return this[field] = value;
      });
      if (set.length === 1) {
        set = (function(set) {
          return function(field, value) {
            return set(value);
          };
        })(set);
      }
      field = '__' + property;
      assert_is_valid = is_valid_assertion(is_valid, property);
      if (!p.is_undefined(initial_value)) {
        ctor.prototype[field] = initial_value;
      }
      ctor.__INITIALIZERS__ || (ctor.__INITIALIZERS__ = {});
      ctor.prototype[property] = function(value) {
        var _base;
        if (p.is_undefined(value)) {
          this.__GET_CALLSTACK_SIZE__ || (this.__GET_CALLSTACK_SIZE__ = {});
          (_base = this.__GET_CALLSTACK_SIZE__)[property] || (_base[property] = 0);
          this.__GET_CALLSTACK_SIZE__[property] += 1;
          if (this.__GET_CALLSTACK_SIZE__[property] > 1) {
            return this[field];
          }
          value = assert_is_valid(this, get.call(this, field));
          delete this.__GET_CALLSTACK_SIZE__[property];
          return value;
        } else {
          assert_is_valid(this, value);
          set.call(this, field, value);
          return this;
        }
      };
      if (stringify === false) {
        ctor.prototype[property].__STRINGIFY__ = false;
      }
      ctor.prototype[property].is_valid = is_valid;
      ctor.__PROPERTIES__ || (ctor.__PROPERTIES__ = []);
      ctor.__PROPERTIES__.push(property);
      ctor.properties || (ctor.properties = function() {
        var properties;
        return properties = p.is_function(ctor.__super__.properties) ? ctor.__super__.properties().concat(ctor.__PROPERTIES__) : ctor.__PROPERTIES__;
      });
      ctor.__VALIDATORS__ || (ctor.__VALIDATORS__ = {});
      ctor.__VALIDATORS__[property] = is_valid;
      if (init) {
        ctor.__INITIALIZERS__[field] = init;
      }
      return true;
    };

    Entity.def_properties = function(ctor, properties) {
      var attrs, property, _results;
      f.assert(p.is_function(ctor) && is_entity(ctor.prototype), "Expected " + ctor.name + "=" + (f.to_string(ctor)) + " to inherit from Entity");
      f.assert(p.is_object(properties));
      _results = [];
      for (property in properties) {
        if (!__hasProp.call(properties, property)) continue;
        attrs = properties[property];
        _results.push(this.def_property(ctor, property, attrs));
      }
      return _results;
    };

    Entity.def_abstract_method = function(ctor, abstract_method, _arg) {
      var arity;
      arity = _arg.arity;
      f.assert(p.is_undefined(arity) || p.is_non_negative_number(arity), "Expected arity=" + (f.to_string(arity)) + " to be a non-negative number");
      ctor.__ABSTRACT_METHODS__ || (ctor.__ABSTRACT_METHODS__ = {});
      ctor.__ABSTRACT_METHODS__[abstract_method] = {};
      if (p.is_defined(arity)) {
        return ctor.__ABSTRACT_METHODS__[abstract_method].arity = arity;
      }
    };

    Entity.def_abstract_methods = function(ctor, abstract_methods) {
      var abstract_method, attrs, _results;
      f.assert(p.is_function(ctor));
      f.assert(p.is_object(abstract_methods));
      _results = [];
      for (abstract_method in abstract_methods) {
        if (!__hasProp.call(abstract_methods, abstract_method)) continue;
        attrs = abstract_methods[abstract_method];
        _results.push(this.def_abstract_method(ctor, abstract_method, attrs));
      }
      return _results;
    };

    Entity.def_toString = function(ctor, ctor_name) {
      var properties, property, _i, _len, _ref;
      f.assert(p.is_function(ctor) && is_entity(ctor.prototype));
      f.assert(p.is_undefined(ctor_name) || p.is_string(ctor_name));
      ctor_name || (ctor_name = ctor.name);
      properties = [];
      _ref = ctor.properties();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        property = _ref[_i];
        if (ctor.prototype[property].__STRINGIFY__ !== false) {
          properties.push(property);
        }
      }
      ctor.prototype.toString = function() {
        var value, values, _j, _len1;
        values = [];
        for (_j = 0, _len1 = properties.length; _j < _len1; _j++) {
          property = properties[_j];
          value = safe_get(this, property);
          values.push(property + ': ' + f.to_string(value));
        }
        return "" + ctor_name + " {" + (values.join(', ')) + "}";
      };
      return true;
    };

    function Entity(subtypes) {
      var abstract_method, abstract_methods, arity, attrs, field, init, subtype, type, _i, _len, _ref, _ref1, _ref2, _ref3;
      if (!p.is_array(subtypes)) {
        throw new Error("Expected " + (f.to_string(subtypes)) + " to be an array");
      }
      abstract_methods = {};
      for (_i = 0, _len = subtypes.length; _i < _len; _i++) {
        subtype = subtypes[_i];
        if (subtype !== void 0) {
          if (!(p.is_function(subtype) && subtype.prototype instanceof Entity && this instanceof subtype)) {
            throw new Error("" + subtype.name + " must be of type Entity");
          }
          if (subtype.__ABSTRACT_METHODS__) {
            _ref = subtype.__ABSTRACT_METHODS__;
            for (abstract_method in _ref) {
              if (!__hasProp.call(_ref, abstract_method)) continue;
              attrs = _ref[abstract_method];
              abstract_method[abstract_method] = {
                type: subtype,
                attrs: attrs
              };
            }
          }
          _ref1 = subtype.__INITIALIZERS__;
          for (field in _ref1) {
            if (!__hasProp.call(_ref1, field)) continue;
            init = _ref1[field];
            this[field] = init.call(this, field);
          }
        }
      }
      type = subtypes[subtypes.length - 1];
      this.__TYPE__ = type;
      for (abstract_method in abstract_methods) {
        if (!__hasProp.call(abstract_methods, abstract_method)) continue;
        _ref2 = abstract_methods[abstract_method], type = _ref2.type, (_ref3 = _ref2.attrs, arity = _ref3.arity);
        f.assert(p.is_method(this[abstract_method]), "Expected " + (to_string(this)) + " to implemented " + type.name + "::" + abstract_method);
        if (p.is_defined(arity)) {
          f.assert(this[abstract_method].length >= arity, "Expected " + (to_string(f)) + " to have an arity of at least " + arity);
        }
      }
    }

    Entity.prototype.validate = function() {
      var is_valid, property, value, _ref;
      _ref = this.__TYPE__.__VALIDATORS__;
      for (property in _ref) {
        if (!__hasProp.call(_ref, property)) continue;
        is_valid = _ref[property];
        value = this[property]();
        if (!is_valid.call(this, value)) {
          throw new Error("" + (f.to_string(value)) + " is invalid for " + property + " according to " + is_valid + " for " + (f.to_string(this)));
        }
        validate(value);
      }
      return this;
    };

    return Entity;

  })();

  is_entity = p.is_instance(Entity);

  global.vst || (global.vst = {});

  global.vst.Entity = Entity;

}).call(this);

// Generated by CoffeeScript 1.7.1
(function() {
  var f, functions, global, p,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty;

  if (typeof exports !== void 0) {
    global = exports;
    p = require('./predicates').vst.predicates;
  } else if (typeof window !== void 0) {
    global = window;
    p = window.vst.predicates;
  } else {
    global = this;
    p = this.vst.predicates;
  }

  f = functions = {
    assert: function(truth, message) {
      if (!p.is_boolean(truth)) {
        throw new Error("Expected truth=" + (f.to_string(truth)) + " to be a boolean");
      }
      if (!(p.is_undefined(message) || p.is_string(message))) {
        throw new Error("Expected message=" + (f.to_string(message)) + " to be a string");
      }
      if (truth === false) {
        if (p.is_undefined(message)) {
          throw new Error('Assertion failed');
        } else {
          throw new Error("Assertion failed: " + message);
        }
      }
    },
    proxy: function(fn, self) {
      return function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return fn.apply(self, args);
      };
    },
    to_string: function(value) {
      var attrs, e, elems, k, v, _i, _len;
      if (p.is_null(value)) {
        return 'null';
      } else if (p.is_undefined(value)) {
        return 'undefined';
      } else if (p.is_array(value)) {
        elems = [];
        for (_i = 0, _len = value.length; _i < _len; _i++) {
          e = value[_i];
          elems.push(f.to_string(e));
        }
        return '[' + elems.join(', ') + ']';
      } else if (p.is_object(value)) {
        if (value.toString === Object.prototype.toString) {
          attrs = [];
          for (k in value) {
            if (!__hasProp.call(value, k)) continue;
            v = value[k];
            attrs.push(k + ': ' + f.to_string(v));
          }
          return '{' + attrs.join(', ') + '}';
        } else {
          return value.toString();
        }
      } else if (p.is_string(value)) {
        return '"' + value + '"';
      } else {
        return value.toString();
      }
    }
  };

  global.vst || (global.vst = {});

  global.vst.functions = functions;

}).call(this);

// Generated by CoffeeScript 1.7.1
(function() {
  var Entity, Iterator, global, p,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if (typeof exports !== 'undefined') {
    global = exports;
    Entity = require('./entity').vst.Entity;
    p = require('./predicates').vst.predicates;
  } else if (typeof window !== 'undefined') {
    global = window;
    Entity = window.vst.Entity;
    p = window.vst.predicates;
  } else {
    global = this;
    Entity = this.vst.Entity;
    p = this.vst.predicates;
  }

  Iterator = (function(_super) {
    __extends(Iterator, _super);

    function Iterator() {
      return Iterator.__super__.constructor.apply(this, arguments);
    }

    Iterator.prototype.Iterator = function(subtypes) {
      if (subtypes == null) {
        subtypes = [];
      }
      if (this.constructor === Iterator) {
        throw new Error("vst.Iterator should not be instantiated directly");
      }
      if (subtypes.length === 0) {
        throw new Error("You must specify the subtype as an array to this constructor");
      }
      subtypes.push(Iterator);
      return Iterator.__super__.Iterator.call(this, subtypes);
    };

    Iterator.prototype.has_next = function() {
      this.advance();
      return this.next_element() !== null;
    };

    Iterator.prototype.peek = function() {
      this.advance();
      return this.next_element();
    };

    Iterator.prototype.next = function() {
      var next_element;
      this.advance();
      next_element = this.next_element();
      this.next_element(null);
      return next_element;
    };

    return Iterator;

  })(Entity);

  Entity.def_abstract_methods(Iterator, {
    advance: {
      arity: 0
    }
  });

  Entity.def_properties(Iterator, {
    next_element: {
      initial_value: null,
      is_valid: p.tautology
    }
  });

  global.vst || (global.vst = {});

  global.vst.Iterator = Iterator;

}).call(this);

// Generated by CoffeeScript 1.7.1
(function() {
  var MaxHeap, functions, global, predicates;

  if (typeof exports !== 'undefined') {
    global = exports;
    predicates = require('./predicates').vst.predicates;
    functions = require('./functions').vst.functions;
  } else if (typeof window !== 'undefined') {
    global = window;
    predicates = window.vst.predicates;
    functions = window.vst.functions;
  } else {
    global = this;
    predicates = this.vst.predicates;
    functions = this.vst.functions;
  }

  MaxHeap = (function() {
    MaxHeap.prototype._parent = function(i) {
      if (i > 0) {
        return ((i + 1) >> 1) - 1;
      } else {
        return 0;
      }
    };

    MaxHeap.prototype._left_child = function(i) {
      return (i << 1) + 1;
    };

    MaxHeap.prototype._right_child = function(i) {
      return (i << 1) + 2;
    };

    MaxHeap.prototype._heapify = function(i) {
      var heap, l, largest, r, tmp;
      l = this._left_child(i);
      r = this._right_child(i);
      heap = this.heap;
      if (l < this.length && this.compare(heap[l], heap[i]) > 0) {
        largest = l;
      } else {
        largest = i;
      }
      if (r < this.length && this.compare(heap[r], heap[largest]) > 0) {
        largest = r;
      }
      if (largest !== i) {
        tmp = heap[i];
        heap[i] = heap[largest];
        heap[largest] = tmp;
        this._heapify(largest);
      }
      return null;
    };

    MaxHeap.prototype._build = function() {
      var i;
      i = this.length >> 1;
      while (i >= 0) {
        this._heapify(i);
        i -= 1;
      }
      return null;
    };

    MaxHeap.prototype.increase_key = function(i, key) {
      var f, heap, p, parent, tmp;
      f = this.compare;
      heap = this.heap;
      if (f(key, heap[i]) < 0) {
        throw new Error("Expected " + key + " to be at least heap[" + i + "] = " + heap[i]);
      }
      heap[i] = key;
      parent = this._parent;
      p = parent(i);
      while (i && f(heap[p], heap[i]) < 0) {
        tmp = heap[i];
        heap[i] = heap[p];
        heap[p] = tmp;
        i = p;
        p = parent(i);
      }
      return null;
    };

    MaxHeap.prototype.sort = function() {
      var heap, i, tmp;
      this._build();
      i = this.length - 1;
      heap = this.heap;
      while (i >= 0) {
        tmp = heap[0];
        heap[0] = heap[i];
        heap[i] = tmp;
        this.length -= 1;
        this._heapify(0);
        i -= 1;
      }
      return null;
    };

    MaxHeap.prototype.peek = function() {
      if (this.length) {
        return this.heap[0];
      } else {
        return null;
      }
    };

    MaxHeap.prototype.pop = function() {
      var heap, max;
      if (this.length) {
        heap = this.heap;
        max = heap[0];
        heap[0] = heap[this.length - 1];
        this.length -= 1;
        this._heapify(0);
        return max;
      } else {
        return null;
      }
    };

    MaxHeap.prototype.push = function(key) {
      var f, heap, i, p, parent;
      i = this.length;
      this.length += 1;
      parent = this._parent;
      p = parent(i);
      heap = this.heap;
      f = this.compare;
      while (i > 0 && f(heap[p], key) < 0) {
        heap[i] = heap[p];
        i = p;
        p = parent(i);
      }
      heap[i] = key;
      return null;
    };

    function MaxHeap(compare, heap, length) {
      this.compare = compare;
      this.heap = heap != null ? heap : [];
      this.length = length != null ? length : this.heap.length;
      functions.assert(predicates.is_array(this.heap));
      functions.assert(predicates.is_bounded(0, this.heap.length)(this.length));
      functions.assert(predicates.is_function(this.compare));
      this._build();
    }

    return MaxHeap;

  })();

  global.vst || (global.vst = {});

  global.vst.MaxHeap = MaxHeap;

}).call(this);

// Generated by CoffeeScript 1.7.1
(function() {
  var global, m, metrics;

  global = typeof exports !== void 0 ? exports : typeof window !== void 0 ? window : this;

  m = metrics = {
    m_number: function(a, b) {
      if (a.key() < b.key()) {
        return a.key() - b.key();
      } else {
        return b.key() - a.key();
      }
    }
  };

  global.vst || (global.vst = {});

  global.vst.metrics = metrics;

}).call(this);

// Generated by CoffeeScript 1.7.1
(function() {
  var Entity, Node, f, global, is_node, p,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if (typeof exports !== 'undefined') {
    global = exports;
    Entity = require('./entity').vst.Entity;
    p = require('./predicates').vst.predicates;
    f = require('./functions').vst.functions;
  } else if (typeof window !== 'undefined') {
    global = window;
    Entity = window.vst.Entity;
    p = window.vst.predicates;
    f = window.vst.functions;
  } else {
    global = this;
    Entity = this.vst.Entity;
    p = this.vst.predicates;
    f = this.vst.functions;
  }

  Node = (function(_super) {
    __extends(Node, _super);

    function Node(subtypes) {
      if (subtypes == null) {
        subtypes = [];
      }
      if (this.constructor === Node) {
        throw new Error("vst.Node should not be instantiated directly");
      }
      if (subtypes.length === 0) {
        throw new Error("You must specify the subtype as an array to this constructor");
      }
      subtypes.push(Node);
      Node.__super__.constructor.call(this, subtypes);
    }

    Node.prototype.is_leaf = function() {
      return this.lesser_child() === null && this.greater_child() === null;
    };

    Node.prototype.is_branch = function() {
      return !!this.lesser_child() ^ !!this.greater_child() === 1;
    };

    Node.prototype.value = function() {
      if (this.values().length === 0) {
        return null;
      } else if (this.values().length === 1) {
        return this.values()[0];
      } else {
        throw new Error("There are multiple values, please use Node::values() instead.");
      }
    };

    return Node;

  })(Entity);

  Entity.def_properties(Node, {
    key: {
      is_valid: p.tautology
    },
    values: {
      is_valid: p.is_array,
      init: function() {
        return [];
      }
    },
    height: {
      initial_value: 0,
      is_valid: p.is_non_negative_number
    },
    greater_child: {
      initial_value: null,
      is_valid: p.disjoin(p.is_null, p.is_instance(Node))
    },
    lesser_child: {
      initial_value: null,
      is_valid: p.disjoin(p.is_null, p.is_instance(Node))
    },
    greater_neighbor: {
      initial_value: null,
      is_valid: p.disjoin(p.is_null, p.is_instance(Node)),
      stringify: false
    },
    lesser_neighbor: {
      initial_value: null,
      is_valid: p.disjoin(p.is_null, p.is_instance(Node)),
      stringify: false
    }
  });

  is_node = p.is_instance(Node);

  global.vst || (global.vst = {});

  global.vst.Node = Node;

}).call(this);

// Generated by CoffeeScript 1.7.1
(function() {
  var assert, global, p, predicates,
    __slice = [].slice;

  global = typeof window !== 'undefined' ? window : typeof exports !== 'undefined' ? exports : this;

  assert = function(truth, message) {
    if (!p.is_boolean(truth)) {
      throw new Error("Expected truth=" + truth + " to be a boolean");
    }
    if (!(p.is_undefined(message) || p.is_string(message))) {
      throw new Error("Expected message=" + message + " to be a string");
    }
    if (truth === false) {
      if (message) {
        throw new Error("Assertion error: " + message);
      } else {
        throw new Error("Assertion error");
      }
    }
    return true;
  };

  p = predicates = {
    tautology: function() {
      return true;
    },
    contradiction: function() {
      return false;
    },
    is_number: function(number) {
      return typeof number === 'number';
    },
    is_negative_number: function(number) {
      return p.is_number(number) && number < 0;
    },
    is_non_positive_number: function(number) {
      return p.is_number(number) && number <= 0;
    },
    is_non_negative_number: function(number) {
      return p.is_number(number) && number >= 0;
    },
    is_positive_number: function(number) {
      return p.is_number(number) && number > 0;
    },
    is_boolean: function(bool) {
      return typeof bool === 'boolean';
    },
    is_string: function(string) {
      return typeof string === 'string';
    },
    is_function: function(fn) {
      return typeof fn === 'function';
    },
    is_constructor: function(fn) {
      return p.is_function(fn) && p.is_object(fn.prototype);
    },
    is_null: function(value) {
      return value === null;
    },
    is_undefined: function(value) {
      return value === undefined;
    },
    is_defined: function(value) {
      return !p.is_undefined(value) && !p.is_null(value);
    },
    is_object: function(value) {
      return typeof value === 'object' && !p.is_null(value);
    },
    is_array: function(value) {
      return p.is_object(value) && p.is_non_negative_number(value.length);
    },
    has_arity: function(n) {
      assert(p.is_non_negative_number(n));
      return function(fn) {
        return fn.length === n;
      };
    },
    is_instance: function(type) {
      assert(p.is_function(type));
      return function(instance) {
        return instance instanceof type;
      };
    },
    is_type: function(type) {
      assert(p.is_function(type));
      return function(subtype) {
        return p.is_function(subtype) && subtype.prototype instanceof type;
      };
    },
    is_bounded: function(lower, upper) {
      assert(p.is_number(lower) && p.is_number(upper));
      return function(value) {
        return p.is_number(value) && (lower <= value && value <= upper);
      };
    },
    is_lt: function(n) {
      assert(p.is_number(n));
      return function(value) {
        return p.is_number(value) && value < n;
      };
    },
    is_lte: function(n) {
      assert(p.is_number(n));
      return function(value) {
        return p.is_number(value) && value <= n;
      };
    },
    is_eq: function(n) {
      assert(p.is_number(n));
      return function(value) {
        return p.is_number(value) && value === n;
      };
    },
    is_gte: function(n) {
      assert(p.is_number(n));
      return function(value) {
        return p.is_number(value) && value >= n;
      };
    },
    is_gt: function(n) {
      assert(p.is_number(n));
      return function(value) {
        return p.is_number(value) && value > n;
      };
    },
    is_equal: function(target) {
      return function(value) {
        return value === target;
      };
    },
    there_exists: function(is_valid) {
      assert(p.is_function(is_valid));
      return function(elements) {
        var element, _i, _len;
        p.assert(p.is_array(elements));
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          element = elements[_i];
          if (is_valid.call(this, element) === true) {
            return true;
          }
        }
        return false;
      };
    },
    for_all: function(is_valid) {
      assert(p.is_function(is_valid));
      return function(elements) {
        var element, _i, _len;
        p.assert(p.is_array(elements));
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          element = elements[_i];
          if (is_valid.call(this, element) === false) {
            return false;
          }
        }
        return true;
      };
    },
    disjoin: function() {
      var f, fs, g, gs;
      fs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      switch (fs.length) {
        case 0:
          return p.tautology;
        case 1:
          f = fs[0];
          return function(value) {
            return f.call(this, value);
          };
        case 2:
          f = fs[0], g = fs[1];
          return function(value) {
            return f.call(this, value) || g.call(this, value);
          };
        default:
          f = fs[0], gs = 2 <= fs.length ? __slice.call(fs, 1) : [];
          g = conjoin.apply(null, gs);
          return function(value) {
            return f.call(this, value) || g.call(this, value);
          };
      }
    },
    conjoin: function() {
      var f, fs, g, gs;
      fs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      switch (fs.length) {
        case 0:
          return p.tautology;
        case 1:
          f = fs[0];
          return function(value) {
            return f.call(this, value);
          };
        case 2:
          f = fs[0], g = fs[1];
          return function(value) {
            return f.call(this, value) && g.call(this, value);
          };
        default:
          f = fs[0], gs = 2 <= fs.length ? __slice.call(fs, 1) : [];
          g = conjoin.apply(null, gs);
          return function(value) {
            return f.call(this, value) && g.call(this, value);
          };
      }
    }
  };

  global.vst || (global.vst = {});

  global.vst.predicates = predicates;

}).call(this);

// Generated by CoffeeScript 1.7.1
(function() {
  var Entity, Iterator, Node, RangeIterator, global, p,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if (typeof exports !== 'undefined') {
    global = exports;
    Entity = require('./entity').vst.Entity;
    Iterator = require('./iterator').vst.Iterator;
    Node = require('./node').vst.Node;
    p = require('./predicates').vst.predicates;
  } else if (typeof window !== 'undefined') {
    global = window;
    Entity = window.vst.Entity;
    Iterator = window.vst.Iterator;
    Node = window.vst.Node;
    p = window.vst.predicates;
  } else {
    global = this;
    Entity = this.vst.Entity;
    Iterator = this.vst.Iterator;
    Node = this.vst.Node;
    p = this.vst.predicates;
  }

  RangeIterator = (function(_super) {
    __extends(RangeIterator, _super);

    RangeIterator.of = function(node, upper_key, comparator) {
      return new RangeIterator().node(node).upper_key(upper_key).comparator(comparator);
    };

    RangeIterator.empty = function() {
      return this.of(null, -1, function(a, b) {
        return 1;
      });
    };

    function RangeIterator(subtypes) {
      if (subtypes == null) {
        subtypes = [];
      }
      if (!(this instanceof RangeIterator)) {
        return new RangeIterator(subtypes);
      }
      subtypes.push(RangeIterator);
      RangeIterator.__super__.constructor.call(this, subtypes);
    }

    RangeIterator.prototype.advance = function() {
      if (this.next_element() === null && this.node()) {
        if (this.comparator()(this.node().key(), this.upper_key()) <= 0) {
          this.next_element(this.node());
          this.node(this.node().greater_neighbor());
        }
      }
      return true;
    };

    return RangeIterator;

  })(Iterator);

  Entity.def_properties(RangeIterator, {
    comparator: {
      is_valid: p.conjoin(p.is_function, p.has_arity(2))
    },
    node: {
      is_valid: p.disjoin(p.is_null, p.is_instance(Node))
    },
    upper_key: {
      is_valid: p.tautology
    }
  });

  Entity.def_toString(RangeIterator);

  global.vst || (global.vst = {});

  global.vst.RangeIterator = RangeIterator;

}).call(this);

// Generated by CoffeeScript 1.7.1
(function() {
  var Entity, MaxHeap, Node, RangeIterator, Tree, f, global, p,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if (typeof exports !== 'undefined') {
    global = exports;
    Entity = require('./entity').vst.Entity;
    Node = require('./node').vst.Node;
    RangeIterator = require('./range_iterator').vst.RangeIterator;
    MaxHeap = require('./max_heap').vst.MaxHeap;
    p = require('./predicates').vst.predicates;
    f = require('./functions').vst.functions;
  } else if (typeof window !== 'undefined') {
    global = window;
    Entity = window.vst.Entity;
    Node = window.vst.Node;
    RangeIterator = window.vst.RangeIterator;
    MaxHeap = window.vst.MaxHeap;
    p = window.vst.predicates;
    f = window.vst.functions;
  } else {
    global = this;
    Entity = this.vst.Entity;
    Node = this.vst.Node;
    RangeIterator = this.vst.RangeIterator;
    MaxHeap = this.vst.MaxHeap;
    p = this.vst.predicates;
    f = this.vst.functions;
  }

  Tree = (function(_super) {
    __extends(Tree, _super);

    function Tree(subtypes) {
      if (subtypes == null) {
        subtypes = [];
      }
      if (this.constructor === Tree) {
        throw new Error("vst.Tree should not be instantiated directly");
      }
      if (subtypes.length === 0) {
        throw new Error("You must specify the subtype as an array to this constructor");
      }
      subtypes.push(Tree);
      Tree.__super__.constructor.call(this, subtypes);
    }

    Tree.prototype.is_node_type = function(node) {
      return node instanceof this.NodeType();
    };

    Tree.prototype.assert_is_node_type = function(node) {
      return f.assert(this.is_node_type(node), "Expected " + (f.to_string(node)) + " to be a " + (this.NodeType().name));
    };

    Tree.prototype.height = function() {
      if (p.is_defined(this.root())) {
        return this.root().height();
      } else {
        return 0;
      }
    };

    Tree.prototype.greatest = function(node) {
      if (node == null) {
        node = this.root();
      }
      if (node === null) {
        return null;
      }
      this.assert_is_node_type(node);
      while (node.greater_child()) {
        node = node.greater_child();
      }
      return node;
    };

    Tree.prototype.least = function(node) {
      if (node == null) {
        node = this.root();
      }
      if (node === null) {
        return null;
      }
      this.assert_is_node_type(node);
      while (node.lesser_child()) {
        node = node.lesser_child();
      }
      return node;
    };

    Tree.prototype.try_insert = function(key, value) {
      f.assert(p.is_defined(key));
      f.assert(p.is_defined(value));
      if (p.is_null(this.root())) {
        this.root(this.NodeType().of(key, value));
        this.size(this.size() + 1);
        return true;
      } else if (this.contains_key(key) === false) {
        this.add_descendant(this.root(), this.NodeType().of(key, value));
        this.size(this.size() + 1);
        return true;
      } else {
        return false;
      }
    };

    Tree.prototype.insert = function(key, value) {
      var node;
      f.assert(p.is_defined(key));
      f.assert(p.is_defined(value));
      if (this.root() === null) {
        this.root(this.NodeType().of(key, value));
      } else if (node = this.find(key)) {
        node.values().push(value);
      } else {
        this.add_descendant(this.root(), this.NodeType().of(key, value));
      }
      this.size(this.size() + 1);
      return this;
    };

    Tree.prototype.contains_key = function(key) {
      f.assert(p.is_defined(key));
      return null !== this.find(key);
    };

    Tree.prototype.find = function(key) {
      var comp, node;
      f.assert(p.is_defined(key));
      node = this.root();
      while (node) {
        comp = this.comparator()(key, node.key());
        if (comp > 0) {
          node = node.greater_child();
        } else if (comp < 0) {
          node = node.lesser_child();
        } else {
          break;
        }
      }
      return node;
    };

    Tree.prototype.find_nearest = function(key) {
      var comp, node;
      f.assert(p.is_defined(key));
      node = this.root();
      while (node) {
        comp = this.comparator()(key, node.key());
        if (comp > 0) {
          if (node.greater_child() === null) {
            break;
          }
          node = node.greater_child();
        } else if (comp < 0) {
          if (node.lesser_child() === null) {
            break;
          }
          node = node.lesser_child();
        } else {
          break;
        }
      }
      return node;
    };

    Tree.prototype.find_nearest_gte = function(key) {
      var node;
      f.assert(p.is_defined(key));
      node = this.find_nearest(key);
      while (node && this.comparator()(node.key(), key) < 0) {
        node = node.greater_neighbor();
      }
      return node;
    };

    Tree.prototype.find_nearest_lte = function(key) {
      var node;
      f.assert(p.is_defined(key));
      node = this.find_nearest(key);
      while (node && this.comparator()(node.key(), key) > 0) {
        node = node.lesser_neighbor();
      }
      return node;
    };

    Tree.prototype.remove = function(key, value) {
      var candidate, index, node, _i, _len, _ref;
      f.assert(p.is_defined(key));
      if (node = this.find(key)) {
        if (p.is_defined(value)) {
          _ref = node.values();
          for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
            candidate = _ref[index];
            if (candidate === value) {
              node.values().splice(index, 1);
              if (node.values().length === 0) {
                this.remove_node(node);
              }
              this.size(this.size() - 1);
              return true;
            }
          }
          return false;
        } else {
          this.size(this.size() - node.values().length);
          this.remove_node(node);
          return true;
        }
      } else {
        return false;
      }
    };

    Tree.prototype.preorder = function(fn, node) {
      if (node == null) {
        node = this.root();
      }
      if (node) {
        fn(node);
        if (node.lesser_child()) {
          this.preorder(fn, node.lesser_child());
        }
        if (node.greater_child()) {
          this.preorder(fn, node.greater_child());
        }
      }
      return this;
    };

    Tree.prototype.inorder = function(fn, node) {
      if (node == null) {
        node = this.root();
      }
      if (node) {
        if (node.lesser_child()) {
          this.inorder(fn, node.lesser_child());
        }
        fn(node);
        if (node.greater_child()) {
          this.inorder(fn, node.greater_child());
        }
      }
      return this;
    };

    Tree.prototype.postorder = function(fn, node) {
      if (node == null) {
        node = this.root();
      }
      if (node) {
        if (node.lesser_child()) {
          this.postorder(fn, node.lesser_child());
        }
        if (node.greater_child()) {
          this.postorder(fn, node.greater_child());
        }
        fn(node);
      }
      return this;
    };

    Tree.prototype.range = function(lower, upper) {
      var node;
      f.assert(this.comparator()(lower, upper) <= 0, "Expected lower:" + (f.to_string(lower)) + " <= upper:" + (f.to_string(upper)));
      node = this.find_nearest_gte(lower);
      return RangeIterator.of(node, upper, this.comparator());
    };

    Tree.prototype.neighbors = function(key, n_lesser, n_greater) {
      var comp, greatest, least, lower_node, n, node, upper_key;
      f.assert(p.is_defined(key));
      f.assert(p.is_non_negative_number(n_lesser));
      f.assert(p.is_non_negative_number(n_greater));
      if (node = this.find_nearest(key)) {
        comp = this.comparator()(node.key(), key);
        if ((least = comp < 0 ? node : node.lesser_neighbor())) {
          n = 1;
          while (n < n_lesser) {
            if (!least.lesser_neighbor()) {
              break;
            }
            least = least.lesser_neighbor();
            n += 1;
          }
        }
        if ((greatest = comp > 0 ? node : node.greater_neighbor())) {
          n = 1;
          while (n < n_greater) {
            if (!greatest.greater_neighbor()) {
              break;
            }
            greatest = greatest.greater_neighbor();
            n += 1;
          }
        }
        lower_node = least || node;
        upper_key = (greatest != null ? greatest.key() : void 0) || node.key();
        return RangeIterator.of(lower_node, upper_key, this.comparator());
      } else {
        return RangeIterator.empty();
      }
    };

    Tree.prototype.nearest_neighbors = function(key, k, key_distance) {
      var comp, curr, heap, node, node_distance;
      f.assert(p.is_defined(key));
      f.assert(p.is_non_negative_number(k));
      f.assert(p.is_function(key_distance) && key_distance.length === 2);
      node_distance = function(a, b) {
        return key_distance(a.key(), key) - key_distance(b.key(), key);
      };
      heap = new MaxHeap(node_distance);
      if (k > 0 && (node = this.find_nearest(key))) {
        comp = this.comparator()(node.key(), key);
        if (comp === 0) {
          heap.push(node);
        }
        curr = comp < 0 ? node : node.lesser_neighbor();
        while (curr && heap.length < k) {
          heap.push(curr);
          curr = curr.lesser_neighbor();
        }
        curr = comp > 0 ? node : node.greater_neighbor();
        while (curr && heap.length < k) {
          heap.push(curr);
          curr = curr.greater_neighbor();
        }
        while (curr && key_distance(curr.key(), key) < key_distance(heap.peek().key(), key)) {
          heap.pop();
          heap.push(curr);
          curr = curr.greater_neighbor();
        }
      }
      return heap;
    };

    return Tree;

  })(Entity);

  Entity.def_abstract_methods(Tree, {
    add_descendant: {
      arity: 2
    },
    remove_node: {
      arity: 1
    }
  });

  Entity.def_properties(Tree, {
    comparator: {
      is_valid: p.disjoin(p.conjoin(p.is_function, p.has_arity(2)), p.is_undefined)
    },
    size: {
      initial_value: 0,
      is_valid: p.is_non_negative_number
    },
    NodeType: {
      is_valid: p.disjoin(p.is_type(Node), p.is_undefined)
    },
    root: {
      initial_value: null,
      is_valid: p.disjoin(p.is_null, p.conjoin(p.is_instance(Node), Tree.prototype.is_node_type))
    }
  });

  global.vst || (global.vst = {});

  global.vst.Tree = Tree;

}).call(this);

