(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Fn = factory());
}(this, function () { 'use strict';

  const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

  const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

  const Fn = {
    pipe, compose
  };

  return Fn;

}));
